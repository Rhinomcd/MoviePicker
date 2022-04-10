FROM node:16

#TODO: add db url
ARG DATABASE_URL="file:./db/prisma/db.sqlite"
ARG PORT=3000
ARG SESSION_SECRET_KEY
ENV DATABASE_URL ${DATABASE_URL}
ENV SESSION_SECRET_KEY ${SESSION_SECRET_KEY}

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY db/ ./db/
RUN npm ci
RUN npx blitz prisma migrate deploy

COPY . .
RUN npm run build

EXPOSE ${PORT}

CMD npm run start
