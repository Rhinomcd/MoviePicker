import { useQuery } from "blitz"
import getMovies from "../queries/getMovieList"
import { Paper, Grid } from "@mui/material"
import _ from "lodash"

const NUMBER_OF_CHOICES = 4

const toDisplayableComponent = (listItem) => {
  return (
    <Grid item xs={3} key={listItem}>
      <Paper elevation={5}>{listItem}</Paper>
    </Grid>
  )
}

export const MovieList = (props) => {
  let [movies] = useQuery(getMovies, {})
  let movieChoices = _.sampleSize(movies, NUMBER_OF_CHOICES)
  console.log(movieChoices)
  movieChoices = movieChoices.map(toDisplayableComponent)

  return (
    <Grid container spacing={2}>
      {movieChoices}
    </Grid>
  )
}
