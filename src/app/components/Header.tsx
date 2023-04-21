import { BiSearch } from 'react-icons/bi'

export default function Header() {
	
  return (
    <div className="w-full h-16 pl-8 pr-9 bg-primary">
			<div className="max-w-[1920px] h-full m-auto flex items-center justify-between">
				<span className="font-black text-3xl text-white">MegaFlix</span>
					<div className="max-w-lg w-full lg:w-max justify-items-end h-16 flex items-center">
						<div className='max-w-max h-full space-x-10 flex items-center'>
							<a className="font-semibold mb:hidden text-white hover:text-[#9A9A9A] text-mb cursor-pointer">Filmes</a>
							<a className="font-semibold mb:hidden text-white hover:text-[#9A9A9A] text-mb cursor-pointer">Series</a>
							<a className="font-semibold mb:hidden text-white hover:text-[#9A9A9A] text-mb cursor-pointer">Recentes</a>
							<button className='w-max h-max  flex items-center'>
									<BiSearch className="text-white hover:text-[#9A9A9A]" size={26} />
							</button> 
						</div>
						<button className="w-max pr-4 pl-4 pt-2 pb-2 ml-24 hover:bg-[#353747] text-right border-2 mb:hidden text-mb text-white font-regular">Entrar</button>
				</div>
			</div>
    </div>
	)
}