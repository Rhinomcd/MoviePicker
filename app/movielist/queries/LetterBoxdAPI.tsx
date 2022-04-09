import { z } from "zod"

import { createTypeAlias, zodToTs } from "zod-to-ts"

//TODO schema stuff
export const LETTERBOXD_HOST = "https://localhost"
export const membersresponse = z.object({
  next: z.string(),
  items: z.unknown(),
})

export const GetMovie = z.object({
  name: z.string(),
})

export const MemberSummary = z.object({
  id: z.string(),
  username: z.string(),
  givenName: z.string(),
  familyName: z.string(),
  displayName: z.string(),
  shortName: z.string(),
  //TODO Type Pronoun
  pronoun: z.object({
    id: z.string(),
    label: z.string(),
    //TODO: ... incomplete object schema
  }),
  //todo: rest of these
  avatar: z.unknown(),
})

export const Member = z.object({ id: z.string(), username: z.string() })

export const MemberAccount = z.object({
  member: Member,
})
