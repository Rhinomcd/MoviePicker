FROM node:16

#TODO: add db url
ARG DATABASE_URL=localhost
ARG PORT=3000
ENV DATABASE_URL ${DATABASE_URL}

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY db/ ./db/
RUN npm ci
RUN npx blitz prisma migrate deploy

COPY . .
RUN npm run build

EXPOSE ${PORT}

CMD npm run start
