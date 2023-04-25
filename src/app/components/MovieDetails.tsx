"use client"
import { type } from 'os'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

interface Props {
	name: string,
	sinopse: string,
	genres: string,
	vote: number
}

export default function MovieDetails(props:Props) {
	//Formata a sinopse para não passar de 200 caracteres
	const [sinopse, setSinopse] = useState(props.sinopse.length >= 200 ? props.sinopse.substring(0, 200) + ' . . .' : props.sinopse)

	const genresList = props.genres.map(data => data.name)	
	const genresTags = genresList.join(' | ')

	const movieNote = Math.round(props.vote)
	const yellowStars = parseInt((movieNote / 2).toFixed(0))

	const [starColors, setStarColors] = useState<string[]>(() => {
		const newColors = []
		for (let i = 0; i < 5; i++) {
			if (newColors.length >= yellowStars) {
				newColors.push('text-gray-400')
			}else {
				newColors.push('text-yellow-400')
			}
		}
		return newColors
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
						<span className="text-sm text-white">{genresTags}</span>
					</div>
					<div className="w-max flex justify-between items-center h-max">
						<div className="w-max h-max flex space-x-2">
							<AiFillStar className={`${starColors[0]}`} size={20} />
							<AiFillStar className={`${starColors[1]}`} size={20} />
							<AiFillStar className={`${starColors[2]}`} size={20} />
							<AiFillStar className={`${starColors[3]}`} size={20} />
							<AiFillStar className={`${starColors[4]}`} size={20} />
						</div>
					</div>
				</div>
				<button className="max-w-xs w-full h-16 mb:max-w-full rounded-md font-bold text-lg hover:shadow-blueShadow hover:shadow-3xl text-white bg-button">Assistir Agora</button>
			</div>
		</div>
	)
  
}