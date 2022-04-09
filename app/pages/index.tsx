import Layout from "app/core/layouts/Layout"
import { MovieList } from "app/movielist/components/MovieList"
import { BlitzPage } from "blitz"
import { Suspense } from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <MovieList />
      </Suspense>
    </div>
  )
}
Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
