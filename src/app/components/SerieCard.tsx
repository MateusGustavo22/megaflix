"use client"
import { useRouter, usePathname } from 'next/navigation'
import { TbPlayerPlay } from 'react-icons/tb'
import { useState } from 'react'

interface Props {
  name: string,
  poster: string,
  id: number
}

export default function SerieCard({name, poster, id}:Props) {
  const router = useRouter()
  const [showPlayButton, setShowPlayButton] = useState(false);
  
  function pushPage() {
    router.push(`/series/info/${id}`)
  }

  const moviePostUrl = poster ? process.env.NEXT_PUBLIC_MOVIE_POSTER+poster : null
  
  return (
    <div
    style={poster ? {backgroundImage: `url(${moviePostUrl})`} : {backgroundColor: '#2D2E31'}}
    className="w-[220px] h-[320px] cursor-pointer relative rounded-xl border-4 border-primary hover:border-button bg-[length:100%_100%]"
    >
    <div
      className="w-full h-full absolute flex items-end pb-2 rounded-xl hover:bg-gradient-to-t pl-2 from-primary to-[#000000c7]"
      onMouseEnter={() => setShowPlayButton(true)}
      onMouseLeave={() => setShowPlayButton(false)}
    >
      <div
        onClick={pushPage}
        className={`w-16 h-16 rounded-full border-white border-2 items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showPlayButton ? 'flex' : 'hidden'} hover:bg-[#000000b6]`}
      >
        <TbPlayerPlay className="text-white block " size={32} />
      </div>
      <span className={`max-w-[210px] text-white font-medium  ${showPlayButton ? 'flex' : 'hidden'}`}>{name}</span>
    </div>
  </div>
  )
}