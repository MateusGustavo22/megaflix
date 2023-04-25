import MovieHome from "./components/MovieHome"

import MovieSlider from "./components/MovieSlider"
async function getTrendingMovieId(url:string) {
  const response = await fetch(url)
  const data = await response.json()
  return data.results[0].id
}

async function getMoviDetails(url:string) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const trendingMoviesUrl = `${process.env.NEXT_PUBLIC_MOVIE_TRENDING}?api_key=${apiKey}`

  const movieId = await getTrendingMovieId(trendingMoviesUrl)
  const movieDetailsUrl = `${process.env.NEXT_PUBLIC_MOVIE_DETAILS}${movieId}?api_key=${apiKey}`
  
  const movieDetails = await getMoviDetails(movieDetailsUrl)
  
  const name = movieDetails.title
  const sinopse = movieDetails.overview
  const banner = movieDetails.backdrop_path
  const vote = movieDetails.vote_average
  const genres = movieDetails.genres
  

  return (
    <>
      <MovieHome name={name} sinopse={sinopse} banner={banner} vote={vote} genres={genres} />
      <MovieSlider />
      <MovieSlider />
      <MovieSlider />
    </>
  )
}
