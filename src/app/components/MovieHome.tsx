import MovieDetails from "./MovieDetails"

interface Movie {
  name: string,
  sinopse: string,
  poster: string,
  banner: string,
  date: string,
  vote: number,
  id: number
}

interface Props {
  mainMovie: Movie
}

export default function MovieHome({mainMovie}:Props) {
  const bannerUrl = process.env.NEXT_PUBLIC_MOVIE_BANNER
  const data = mainMovie.date;
  const partes = data.split("-");
  const dataInvertida = partes.reverse().join("-");
  return (
    <>
      <div className="w-full h-max flex flex-row items-center mb:flex-col mb:mb-4 mb:from-[#fff0] mb:items-start bg-gradient-to-r from-primary from-25% via-[#18191ee7] via-40% to-[#ec000000] to-80% ">
        <div className="w-full mb-4 max-h-[800px] flex justify-end">
          <div style={{backgroundImage: `url(${bannerUrl}${mainMovie.banner})`}} className="w-[1400px] h-full relative -z-10 pt-[56.25%] bg-[length:100%] bg-no-repeat bg-couver">
           
          </div>
        </div>
        <div className="absolute mb:relative">
          <MovieDetails name={mainMovie.name} id={mainMovie.id} sinopse={mainMovie.sinopse} vote={mainMovie.vote} date={dataInvertida} /> 
        </div>
      </div>
    </>
  ) 
}