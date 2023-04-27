"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Player() {
  const [videoKey, setVideoKey] = useState(null)
  const searchParams = useSearchParams();
  const movieId = searchParams.get('id')

  const urlVideo = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`

  useEffect(() => {
    const fethVideo = async (url:string) => {
      const response = await fetch(url)
      const data = await response.json()
      const movieVideos = data.results
      setVideoKey(movieVideos[0].key)
    }
    fethVideo(urlVideo)

  }, [])

  return (
    <div className='w-full mt-8 min-h-full flex items-center justify-center'>
      <iframe
        width="1120"
        height="630"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  )
}