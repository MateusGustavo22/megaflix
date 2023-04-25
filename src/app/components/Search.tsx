import { BiSearch } from 'react-icons/bi'

export default function Search() {
  return (
    <div className="w-full h-[60px] rounded-bl-xl rounded-br-xl p-3 flex items-center mb:rounded-br-none top-16 right-0 bg-primary">
      <div className="w-max h-max cursor-pointer">
        <BiSearch className="text-white hover:text-gray-400" size={26} />
      </div>
      <input className="w-full h-full pl-3 bg-primary outline-0 text-white text-base " type="text" placeholder="Buscar filme" />
    </div>
  )
}