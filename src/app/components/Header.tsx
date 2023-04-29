"use client"
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import MenuMobile from './MenuMoblie'
import Search from './Input'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { BsDisplay } from 'react-icons/bs'

export default function Header() {

	const path = usePathname()
	const [menuMobile, setMenuMobile] = useState<string>('none')

	function showMenu() {
		if (menuMobile === 'none') {
			setMenuMobile('block')
		}else {
			setMenuMobile('none')
		}
	}

	const [searchInput, setSearchInput] = useState<string>('hidden')
	const [serchIcon, setSearchIcon] = useState<string>('block')
	const [closeIcon, setCloseIcon] = useState<string>('hidden')

	const [inputSearch, setInputSearch] = useState<string>('')
  const router = useRouter()
   
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(!inputSearch) return;
    {path === '/' || path.slice(0, 7) === '/filmes' ? router.push(`/search?q=${inputSearch}`) : router.push(`/series/search?q=${inputSearch}`)}
		setSearchInput('hidden')
		setCloseIcon('hidden')
		setSearchIcon('block')
  }

  function handleIconClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    if(!inputSearch) return;
    router.push(`/search?q=${inputSearch}`)
		setSearchInput('hidden')
		setCloseIcon('hidden')
		setSearchIcon('block')
  }

	function handleInput(e: React.ChangeEvent<HTMLInputElement>):void {
		console.log(e.target.value)
		setInputSearch(e.target.value)
	}

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

	useEffect(() => {	
		function hideMenuMobile() {
			if (menuMobile === 'block') {
				setMenuMobile('none')
			}
		}
		document.addEventListener('click', hideMenuMobile) 

		return () => {
			document.removeEventListener('click', hideMenuMobile)
		}
	}, [showMenu])

  return (
    <div className="w-full h-16 pl-4 z-50 pr-4 sticky top-0 bg-primary">
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
						<a href="/login" className="w-max pr-4 pl-4 pt-2 pb-2 ml-24 border-2 border-white hover:border-button text-right mb:hidden text-mb text-white font-regular">Entrar</a>
						<div onClick={showMenu} className="w-max h-max ml-8 flex mb2:hidden">
							<AiOutlineMenu color='white' size={26} />
						</div>
				</div>
				<div className={`max-w-[600px] w-full ${searchInput} absolute top-[66px] border-2 rounded-lg border-white mb:right-[-16px] right-0 h-max`}>
					<Search handleInput={handleInput} handleSubmit={handleSubmit} handleIconClick={handleIconClick} />
				</div>
			</div>
			<MenuMobile display={menuMobile} />
    </div>
	)
}