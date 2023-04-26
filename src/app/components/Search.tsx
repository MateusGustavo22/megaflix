"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Search() {
  const [inputSearch, setInputSearch] = useState<string>()
  const router = useRouter()
   
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(!inputSearch) return;
    router.push(`/search?q=${inputSearch}`)

  }

  function handleIconClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    if(!inputSearch) return;
    router.push(`/search?q=${inputSearch}`)

  }

  return (
    <div className="w-full h-[60px] rounded-lg  p-3 flex items-center mb:rounded-br-none top-16 right-0 bg-primary">
      <div onClick={handleIconClick} className="w-max h-max cursor-pointer">
        <BiSearch className="text-white hover:text-gray-400" size={26} />
      </div>
      <form onSubmit={handleSubmit}>
       <input onChange={e => setInputSearch(e.target.value)} className="w-full h-full pl-3 bg-primary outline-0 text-white text-base " type="text" placeholder="Buscar filme" />
      </form>
    </div>
  )
}