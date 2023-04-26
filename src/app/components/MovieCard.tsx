interface Props {
  name: string,
  poster: string
}

export default function MovieCard({name, poster}:Props) {
  const moviePostUrl = poster ? process.env.NEXT_PUBLIC_MOVIE_POSTER+poster : null
  
  return (
    <div style={poster ? {backgroundImage: `url(${moviePostUrl})`} : {backgroundColor: '#2D2E31'}} className="w-[220px] h-[320px] cursor-pointer relative rounded-xl  border-4 border-primary hover:border-button hover:parent bg-[length:100%_100%]">
      <div className="w-full h-full absolute flex items-end pb-2 rounded-xl hover:bg-gradient-to-t pl-2 from-primary to-[#00000050]">
        <span className="text-white font-medium hidden max-w-[210px] child">{name}</span>
        <style>
          {`
            .hover\\:parent:hover .child {
              display: block;
            }
          `}
        </style>
      </div>
    </div>
  )
}