"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

interface PropsFunc {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleIconClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function Search({handleInput, handleSubmit, handleIconClick}:PropsFunc) {
  
  return (
    <div className="w-full h-[60px] rounded-lg  p-3 flex items-center mb:rounded-br-none top-16 right-0 bg-primary">
      <div onClick={handleIconClick} className="w-max h-max cursor-pointer">
        <BiSearch className="text-white hover:text-gray-400" size={26} />
      </div>
      <form onSubmit={handleSubmit}>
       <input onChange={e => handleInput(e)} className="w-full h-full pl-3 bg-primary outline-0 text-white text-base " type="text" placeholder="Buscar filme" />
      </form>
    </div>
  )
}