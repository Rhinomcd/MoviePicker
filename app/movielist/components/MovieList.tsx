import { useQuery } from "blitz"
import getMovies from "../queries/getMovieList"
import { Paper, Grid } from "@mui/material"
import _ from "lodash"

const NUMBER_OF_CHOICES = 4

const toDisplayableComponent = (movie) => {
  return (
    <Grid item xs={3} key={movie.id}>
      <Paper elevation={5}>
        <img src={movie.poster[0].url} />
        <br />
        {movie.name} ({movie.releaseYear})
      </Paper>
    </Grid>
  )
}

export const MovieList = (props) => {
  let [movies] = useQuery(getMovies, {})
  let movieChoices = _.sampleSize(movies, NUMBER_OF_CHOICES)
  console.log(movieChoices)
  movieChoices = _.sortBy(movieChoices, ["name"])
  movieChoices = movieChoices.map(toDisplayableComponent)

  return (
    <Grid container spacing={2}>
      {movieChoices}
    </Grid>
  )
}
