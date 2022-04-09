import { Ctx } from "blitz"
import * as z from "zod"
import fetch from "node-fetch"
import { LETTERBOXD_HOST } from "./LetterBoxdAPI"
import { getUserId } from "./getUserId"

//TODO: Implement once I have API access
async function getLetterBoxdToken(username: string, password: string) {
  const requestBody = {
    grant_type: "password",
    username: username,
    password: password,
  }
  const response = await fetch(`http://${LETTERBOXD_HOST}/post`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: { "Content-Type": "application/json" },
  })
  return getLetterBoxdToken
}

async function getWatchlistFromLetterboxd(username: string, genre?) {
  // TODO call from getStaticProps id = await getUserId(null, null)
  const id = 12345
  if (genre) {
    console.log("TODO add genre to the request params")
  }
  const response: any = await fetch(`${LETTERBOXD_HOST}/member/${id}/watchlist`)
  return response.body.items
}

//TODO replace with letterboxd with api access
async function getWatchlistDevelopment() {
  // rough mockup of letterboxd schema
  const movies = [
    {
      id: 1,
      name: "The Waterboy",
      releaseYear: "1998",
      poster: [
        {
          width: 100,
          height: 100,
          url: "https://a.ltrbxd.com/resized/film-poster/4/6/0/1/2/46012-the-waterboy-0-230-0-345-crop.jpg?k=a14c12cd25",
        },
      ],
    },
    {
      id: 2,
      name: "Avengers",
      releaseYear: "2012",
      poster: [
        {
          width: 100,
          height: 100,
          url: "https://a.ltrbxd.com/resized/sm/upload/10/u6/42/pa/cezWGskPY5x7GaglTTRN4Fugfb8-0-230-0-345-crop.jpg?k=f71fb937c1",
        },
      ],
    },
    {
      id: 3,
      name: "Captain America: Civil War",
      releaseYear: "2016",
      poster: [
        {
          width: 100,
          height: 100,
          url: "https://a.ltrbxd.com/resized/film-poster/1/9/4/4/0/2/194402-captain-america-civil-war-0-230-0-345-crop.jpg?k=ac4b987928",
        },
      ],
    },
    {
      id: 4,
      name: "Her",
      releaseYear: "2016",
      poster: [
        {
          width: 100,
          height: 100,
          url: "https://a.ltrbxd.com/resized/sm/upload/au/nb/i6/lq/fsoTLnUXEUTNuVCBxAJMY0HPPd-0-230-0-345-crop.jpg?k=f1f1660c4c",
        },
      ],
    },
    {
      id: 5,
      name: "It",
      releaseYear: "2017",
      poster: [
        {
          width: 100,
          height: 100,
          url: "https://a.ltrbxd.com/resized/sm/upload/w3/47/76/am/6uDpMsdn8bbZScDptbika5JEtSH-0-230-0-345-crop.jpg?k=bb50085e18",
        },
      ],
    },
  ]
  return movies
}

//TODO @rmcdono type infer
export default async function getMovies(input, ctx: Ctx) {
  return getWatchlistDevelopment()
}
