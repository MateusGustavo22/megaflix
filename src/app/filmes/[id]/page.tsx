import MovieHome from "@/app/components/MovieHome"
import MovieSlider from "@/app/components/MovieSlider"

interface Props {
  params: {
    id: string
  }
    
}

export default async function Movie({params}: Props) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const movieDetailsUrl = `${process.env.NEXT_PUBLIC_MOVIE_DETAILS}${params.id}?api_key=${apiKey}`
  const moviesSimilarUrl = `${process.env.NEXT_PUBLIC_MOVIE_DETAILS}${params.id}/similar?api_key=${apiKey}`

  async function getMovieDetails(url:string) {
    const response = await fetch(movieDetailsUrl)
    const movieDetails = await response.json()
    return movieDetails
  }
  
  async function getSilimarMovies(url:string) {
    const response  = await fetch(url)
    const similarMovies = await response.json()
    return similarMovies.results
  }

  const movieData = await getMovieDetails(movieDetailsUrl)
  const similarMovieData = await getSilimarMovies(moviesSimilarUrl)

  const movieInfos = {
    name: movieData.title,
    sinopse: movieData.overview,
    poster: movieData.poster_path,
    banner: movieData.backdrop_path,
    vote: movieData.vote_average,
    date: movieData.release_date,
    id: movieData.id

  }

  return (
    <>
      <MovieHome mainMovie={movieInfos} />
      <MovieSlider category="Você pode gostar" trendingList={similarMovieData} />
    </>
  )
}