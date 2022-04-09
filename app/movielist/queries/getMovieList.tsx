import { Ctx } from "blitz"
import * as z from "zod"

const GetMovie = z.object({
  name: z.string(),
})

//TODO @rmcdono type infer
export default async function getMovies(input, ctx: Ctx) {
  let movies: string[] = []
  movies = [
    "Avengers",
    "Justice League",
    "Mission Impossible",
    "Mission Impossible II",
    "Misison Impossible III",
    "Schindler's List",
    "Saw",
    "It",
    "Happy Gilmore",
  ]

  return movies
}
