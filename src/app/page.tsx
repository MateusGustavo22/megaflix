import MovieHome from "./components/MovieHome"
import MovieSlider from "./components/MovieSlider"

async function fetchMovie(url:string) {
  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const trendingMoviesUrl = `${process.env.NEXT_PUBLIC_MOVIE_TRENDING}?api_key=${apiKey}`
  const getTrendingMovies = await fetchMovie(trendingMoviesUrl)
 

  const mainMovie = {
    name: getTrendingMovies[0].title,
    sinopse: getTrendingMovies[0].overview,
    poster: getTrendingMovies[0].poster,
    banner: getTrendingMovies[0].backdrop_path,
    vote: getTrendingMovies[0].vote_average,
    genreIds: getTrendingMovies[0].genre_ids
  }


  return (
    <>
      <MovieHome mainMovie={mainMovie} /> 
      <MovieSlider category="Em alta" trendingList={getTrendingMovies} />
    </>
  )
}
