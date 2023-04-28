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
      return movieVideos
    }

    async function filterVideo() {
      const videosOptions = await fethVideo(urlVideo)
    
      for (let i = 0; i < videosOptions.length; i++) {
        console.log(videosOptions[i].type)
        if (videosOptions[i].type === 'Trailer') {
          setVideoKey(videosOptions[i].key)
          break
        }
      }
    }

    filterVideo()

  }, [])

  return (
    <div className='w-full mt-8 min-h-full flex items-center justify-center'>
      <iframe
        width="1120"
        height="630"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}