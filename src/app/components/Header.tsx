"use client"
import { BiSearch } from 'react-icons/bi'
import MenuMobile from './MenuMoblie'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

export default function Header() {

	const [menuMobile, setMenuMobile] = useState('none')

	function setMenu() {
		if (menuMobile == 'none') {
			setMenuMobile('block')
		}else
		setMenuMobile('none')
	}
	
  return (
    <div className="w-full h-16 pl-4 pr-4 bg-primary">
			<div className="max-w-[1920px] h-full m-auto flex items-center justify-between">
				<span className="font-black text-3xl text-white">MegaFlix</span>
					<div className="max-w-lg w-full lg:w-max justify-items-end h-16 flex items-center">
						<div className='max-w-max h-full space-x-10 flex items-center'>
							<a className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer">Filmes</a>
							<a className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer">Series</a>
							<a className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer">Recentes</a>
							<button className='w-max h-max flex items-center'>
									<BiSearch className="text-white hover:text-[#9A9A9A]" size={26} />
							</button> 
						</div>
						<button className="w-max pr-4 pl-4 pt-2 pb-2 ml-24 border-2 border-white hover:border-button text-right mb:hidden text-mb text-white font-regular">Entrar</button>
						<div onClick={setMenu} className='p-1 hover:bg-[#31313b] hidden mb:block ml-8'>
							<AiOutlineMenu color='white' size={26} />
						</div>
				</div>
			</div>
			<MenuMobile display={menuMobile} />
    </div>
	)
}