import { useRouter, usePathname } from 'next/navigation'
import { TbPlayerPlay } from 'react-icons/tb'

interface Props {
  name: string,
  poster: string,
  id: number
}

export default function MovieCard({name, poster, id}:Props) {
  const router = useRouter()
  const path = usePathname()
  
  function pushPage() {
    {path === '/' || path.slice(0, 7) === `/filmes` || path === '/search' ? router.push(`filmes/${id}`) : null}
  }

  const moviePostUrl = poster ? process.env.NEXT_PUBLIC_MOVIE_POSTER+poster : null
  return (
    <div style={poster ? {backgroundImage: `url(${moviePostUrl})`} : {backgroundColor: '#2D2E31'}} className="group w-[220px] h-[320px] cursor-pointer relative rounded-xl border-4 border-primary hover:border-button bg-[length:100%_100%]">
      <div className="group w-full h-full absolute flex items-end pb-2 rounded-xl group-hover:bg-gradient-to-t pl-2 from-primary to-[#000000c7]">
        <div onClick={pushPage} className='w-16 h-16 hidden group-hover:block rounded-full border-white border-2 hover:bg-[#000000b6] items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <TbPlayerPlay className="text-white block " size={32} />
        </div>
        <span className="text-white font-medium group-hover:block hidden group-hover:text-blue-600 max-w-[210px]">{name}</span>
      </div>
    </div>
  )
}