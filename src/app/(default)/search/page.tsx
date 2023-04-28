"use client"
import { useSearchParams } from 'next/navigation';
import MovieCard from '@/app/components/MovieCard';

interface Search {
  title: string,
  poster_path: string,
  id: number
}

export default async function Search() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const params = useSearchParams()
  const movieQuery = params.get('q')
  const searchUrl = `${process.env.NEXT_PUBLIC_MOVIE_SEARCH}api_key=${apiKey}&query=${movieQuery}`

  const response = await fetch(searchUrl)
  const responseData = await response.json()
  const searchResults:Search[] = responseData.results
  
  return (
    <div className='w-full h-full flex-row space-y-4 mt-8'>
      <span className="text-gray-300 block m-auto text-center font-medium text-lg">Resultados para: <span className="text-white font-semibold">{movieQuery}</span></span>
      <div className="w-full h-full flex p-1 flex-wrap mb:justify-center">
      {searchResults.map(data => 
        <div key={data.id} className='ml-2 mr-2 mt-2 mb-2'>
          <MovieCard key={data.id} id={data.id} name={data.title} poster={data.poster_path} />
        </div>
      )}
    </div>
    </div>
  )
}