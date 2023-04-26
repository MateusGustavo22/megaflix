"use client"
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import MenuMobile from './MenuMoblie'
import Search from './Search'
import { useState, useEffect } from 'react'

export default function Header() {

	const [menuMobile, setMenuMobile] = useState('none')

	function showMenu() {
		if (menuMobile == 'none') {
			setMenuMobile('block')
		}else {
			setMenuMobile('none')
		}
	}

	const [searchInput, setSearchInput] = useState('hidden')
	const [serchIcon, setSearchIcon] = useState('block')
	const [closeIcon, setCloseIcon] = useState('hidden')

	function showSearch() {
		if (searchInput == 'hidden') {
			setSearchIcon('hidden')
			setCloseIcon('block')
			setSearchInput('block')
		}else {
			setCloseIcon('hidden')
			setSearchIcon('block')
			setSearchInput('hidden')
		}
	} 
	

  return (
    <div className="w-full h-16 pl-4 pr-4 relative bg-primary">
			<div className="max-w-[1920px] h-full relative m-auto flex items-center justify-between">
				<a href='/' className="font-black text-3xl text-white">MegaFlix</a>
					<div className="max-w-lg w-full lg:w-max justify-items-end h-16 flex items-center">
						<div className='max-w-max h-full space-x-10 flex items-center'>
							<a href="/" className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer">Filmes</a>
							<a href="/series" className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer">Series</a>
							<a className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer">Minha lista</a>
							<button onClick={showSearch} className='w-max h-max bg-blue-100 flex items-center justify-center'>
									<BiSearch className={`text-white absolute ${serchIcon} hover:text-gray-400`} size={26} />
									<AiOutlineClose className={`text-white absolute ${closeIcon} hover:text-gray-400 `} size={26}/>
							</button> 
						</div>
						<button className="w-max pr-4 pl-4 pt-2 pb-2 ml-24 border-2 border-white hover:border-button text-right mb:hidden text-mb text-white font-regular">Entrar</button>
						<div onClick={showMenu} className='p-1 hover:bg-[#31313b] hidden mb:block ml-8'>
							<AiOutlineMenu color='white' size={26} />
						</div>
				</div>
				<div className={`max-w-[600px] w-full ${searchInput} absolute top-[66px] border-2 rounded-lg border-white mb:right-[-16px] right-0 h-max`}>
					<Search />
				</div>
			</div>
			<MenuMobile display={menuMobile} />
    </div>
	)
}