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
  const actionMoviesUrl = `${process.env.NEXT_PUBLIC_MOVIE_GENRE}?api_key=${apiKey}&with_genres=${28}&page=2`
  const fictionMoviesUrl = `${process.env.NEXT_PUBLIC_MOVIE_GENRE}?api_key=${apiKey}&with_genres=${878}&page=2`
  const horrorMoviesUrl = `${process.env.NEXT_PUBLIC_MOVIE_GENRE}?api_key=${apiKey}&with_genres=${27}`
 
 
  const getTrendingMovies = await fetchMovie(trendingMoviesUrl)
  const getFictionMovies = await fetchMovie(fictionMoviesUrl)
  const getActionMovies = await fetchMovie(actionMoviesUrl)
  const getHorrorMovies = await fetchMovie(horrorMoviesUrl)

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
      <MovieSlider category="Ação" trendingList={getActionMovies} />
      <MovieSlider category="Ficção cientifíca" trendingList={getFictionMovies} />
      <MovieSlider category="Terror" trendingList={getHorrorMovies} />
    </>
  )
}
