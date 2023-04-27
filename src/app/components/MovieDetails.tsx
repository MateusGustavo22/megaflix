"use client"
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

interface Props {
	name: string,
	sinopse: string,
	date: string,
	vote: number,
	id: number
}

export default function MovieDetails(props:Props) {
	//Formata a sinopse para não passar de 200 caracteres
	const [sinopse, setSinopse] = useState(props.sinopse.length >= 200 ? props.sinopse.substring(0, 200) + ' . . .' : props.sinopse)
	
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

	const router = useRouter()

	function pagePush() {
		router.push(`/player?id=${props.id}`)
	}

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
						<span className="text-sm text-white">De {props.date}</span>
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
				<button onClick={pagePush} className="max-w-xs w-full h-16 mb:max-w-full rounded-md font-bold text-lg hover:shadow-blueShadow hover:shadow-3xl text-white bg-button">Assistir Agora</button>
			</div>
		</div>
	)
  
}