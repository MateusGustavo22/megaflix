"use client"
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

interface Props {
	sinopse: string
}

export default function MovieDetails(props:Props) {
	const [sinopse, setSinopse] = useState(props.sinopse.length >= 199 ? props.sinopse.substring(0, 195) + ' ...' : props.sinopse)

	return (
		<div className="max-w-[500px] flex-row pl-8 pr-4 mb:pl-4 z-5">
			<div className="w-full flex-row space-y-8 ">
				<div className="w-full h-full flex-row space-y-5">
				<h1 className="text-6xl mb:text-4xl font-black text-white">Venom</h1>
					<div className="w-full min-h-[50px overflow-hidden">
						<p className="text-white text-base font-regular leading-loose max-w-full">{sinopse}</p>
					</div>
				</div>
				<div className="w-full h-full flex-row space-y-5">
					<div className="w-max h-max flex">
						<span className="text-sm text-white">Ficção cientifica | Ação</span>
					</div>
					<div className="w-max flex justify-between items-center h-max">
						<div className="w-max h-max flex space-x-2">
							<AiFillStar size={20} color="#FAD02C"/>
							<AiFillStar size={20} color="#FAD02C"/>
							<AiFillStar size={20} color="#FAD02C"/>
							<AiFillStar size={20} color="#FAD02C"/>
							<AiFillStar size={20} color="#a0a0b2"/>
						</div>
					</div>
				</div>
				<button className="max-w-xs w-full h-16 mb:max-w-full rounded-md font-bold text-lg hover:shadow-blueShadow hover:shadow-3xl text-white bg-button">Assistir Agora</button>
			</div>
		</div>
	)
  
}