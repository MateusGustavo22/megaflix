import Tag from "./Tag"
import { AiFillStar } from 'react-icons/ai'

export default function MovieDetails() {
	return (
		<div className="max-w-max min-h-[414px] flex-row pl-8 z-5">
			<div className="flex-row space-y-8 ">
				<div className="w-full h-full flex-row space-y-5">
					<h1 className="text-6xl font-black text-white">Venom</h1>
					<div className="max-w-[600px] h-[200px] overflow-hidden">
						<p className="text-white text-base font-regular leading-loose max-w-full">A história sobre a evolução do personagem mais enigmático, complexo e durão da Marvel - Venom! Eddie Brock (Tom Hardy) fica perturbado depois que ele perde tudo, incluindo seu trabalho e noiva. Quando ele se encontra no fundo do poço, ele se torna anfitrião de...Read More</p>
					</div>
				</div>
				<div className="w-full h-full flex-row space-y-5">
					<div className="w-max h-max flex">
						<Tag />
						<Tag />
						<Tag />
						<Tag />
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
				<button className="max-w-64 w-full h-16 rounded-md font-bold text-lg hover:shadow-blueShadow hover:shadow-3xl text-white bg-button">Assistir Agora</button>
			</div>
		</div>
	)
  
}