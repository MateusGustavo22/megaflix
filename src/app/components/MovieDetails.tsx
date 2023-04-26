"use client"
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

interface Props {
	name: string,
	sinopse: string,
	genreIds: [],
	vote: number
}

const genreNames = {
	28: "Action",
	12: "Adventure",
	16: "Animation",
	35: "Comedy",
	80: "Crime",
	99: "Documentary",
	18: "Drama",
	10751: "Family",
	14:"Fantasy",
	36: "History",
	27: "Horror",
	10402: "Music",
	10765: "Sci-Fi & Fantasy",
	10759: "Action & Adventure",
	9648: "Mystery",
	10749: "Romance",
	878: "Science Fiction",
	10770: "TV Movie",
	53: "Thriller",
	10752: "War",
	37: "Western"
}

export default function MovieDetails(props:Props) {
	//Formata a sinopse para não passar de 200 caracteres
	const [sinopse, setSinopse] = useState(props.sinopse.length >= 200 ? props.sinopse.substring(0, 200) + ' . . .' : props.sinopse)

	//Formata os generos que é retornado por ids
	const genreIdsList = props.genreIds
	const genreNameList = genreIdsList.map(data => genreNames[data])
	const genreTags = genreNameList.join(' | ')

	//Controla a quantidade de estrelas que devem ser pintadas conforme a nota do filme
	const movieNote = Math.round(props.vote)
	const starCount = parseInt((movieNote / 2).toFixed(0))

	const [starPlaceholder, setStarPlaceholder] = useState<string[]>(() => {
		const fillStars = []
		for (let i = 0; i < 5; i++) {
			if (fillStars.length >= starCount) {
				fillStars.push('text-gray-400')
			}else {
				fillStars.push('text-yellow-400')
			}
		}
		return fillStars
	})

	return (
		<div className="max-w-[600px] flex-row pl-8 pr-4 mb:pl-4 z-5">
			<div className="w-full flex-row space-y-8 ">
				<div className="w-full h-full flex-row space-y-5">
				<h1 className="text-4xl mb:text-3xl font-bold text-white">{props.name}</h1>
					<div className="w-full min-h-[50px overflow-hidden">
						<p className="text-white text-base font-regular leading-loose max-w-full">{sinopse}</p>
					</div>
				</div>
				<div className="w-full h-full flex-row space-y-5">
					<div className="w-max h-max flex">
						<span className="text-sm text-white">{genreTags}</span>
					</div>
					<div className="w-max flex justify-between items-center h-max">
						<div className="w-max h-max flex space-x-2">
							<AiFillStar className={`${starPlaceholder[0]}`} size={20} />
							<AiFillStar className={`${starPlaceholder[1]}`} size={20} />
							<AiFillStar className={`${starPlaceholder[2]}`} size={20} />
							<AiFillStar className={`${starPlaceholder[3]}`} size={20} />
							<AiFillStar className={`${starPlaceholder[4]}`} size={20} />
						</div>
					</div>
				</div>
				<button className="max-w-xs w-full h-16 mb:max-w-full rounded-md font-bold text-lg hover:shadow-blueShadow hover:shadow-3xl text-white bg-button">Assistir Agora</button>
			</div>
		</div>
	)
  
}