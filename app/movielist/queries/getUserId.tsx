import { LETTERBOXD_HOST } from "./LetterBoxdAPI"

export async function getUserId(ctx, input) {
  const body = {}

  const response: any = fetch(`${LETTERBOXD_HOST}/me`)

  return response.member.id
}
