"use client"
import MovieDetails from "./MovieDetails"

interface Props {
  name: string,
  sinopse: string,
  banner: string,
  vote: number,
  genres: string
}

export default function MovieHome(props:Props) {

  const bannerUrl = process.env.NEXT_PUBLIC_MOVIE_BANNER
  
  return (
    <>
      <div className="w-full h-max flex flex-row items-center mb:flex-col mb:mb-4 mb:from-[#fff0] mb:items-start bg-gradient-to-r from-primary from-25% via-[#18191ef3] via-40% to-[#ec000000] to-80% ">
        <div className="w-full mb-4 max-h-[800px] flex justify-end">
          <div style={{backgroundImage: `url(${bannerUrl}${props.banner})`}} className="w-[1400px] h-full relative -z-10 pt-[56.25%] bg-[length:100%] bg-no-repeat bg-couver">
           
          </div>
        </div>
        <div className="absolute mb:relative">
          <MovieDetails name={props.name} sinopse={props.sinopse} vote={props.vote} genres={props.genres}  />
        </div>
      </div>
    </>
  )
}