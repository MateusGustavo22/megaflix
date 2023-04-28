import { useRouter, usePathname } from 'next/navigation'
import { TbPlayerPlay } from 'react-icons/tb'

interface Props {
  name: string,
  poster: string,
  id: number
}

export default function MovieCard({name, poster, id}:Props) {
  const router = useRouter()
  
  function pushPage() {
    router.push(`/filmes/${id}`)
  }

  const moviePostUrl = poster ? process.env.NEXT_PUBLIC_MOVIE_POSTER+poster : null
  return (
    <div onClick={pushPage} style={poster ? {backgroundImage: `url(${moviePostUrl})`} : {backgroundColor: '#2D2E31'}} className="group w-[220px] h-[320px] cursor-pointer relative rounded-xl border-4 border-primary hover:border-button bg-[length:100%_100%]">
      <div className="w-full h-full absolute flex items-end pb-2 rounded-xl group-hover:bg-gradient-to-t pl-2 from-primary to-[#000000c7]">
        <div onClick={pushPage} className='group w-16 h-16 hidden group-hover:flex rounded-full border-white border-2 hover:bg-[#000000b6] items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <TbPlayerPlay className="text-white block " size={32} />
        </div>
        <span className="max-w-[210px] text-white font-medium hidden group-hover:block">{name}</span>
      </div>
    </div>
  )
}