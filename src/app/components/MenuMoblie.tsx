interface Props {
  display: string
}

export default function MenuMobile(props:Props) {
  return (
    <div style={{display: props.display}} className="max-w-[200px] w-full p-4 h-max absolute z-50 space-y-8 right-0 bg-[#313241]">
      <div className="flex flex-col">
        <span className="font-bold text-white text-lg">Filmes</span>
        <a className="text-[#CACACA] border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular">Em alta</a>
        <a className="text-[#CACACA] border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular">Recentes</a>
        <a className="text-[#CACACA] border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular">Melhores</a>
      </div>
      <div className="w-full b-1 b-[#CACACA] bg-[#CACACA]"></div>
      <div className="flex flex-col">
        <span className="font-bold text-white text-lg">Series</span>
        <a className="text-[#CACACA] border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular">Em alta</a>
        <a className="text-[#CACACA] border-transparent border-b-2 pt-1 pb-1  hover:border-button  font-regular">Recentes</a>
        <a className="text-[#CACACA] border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular">Melhores</a>
      </div>
      <button className="w-max pr-4 pl-4 pt-2 pb-2 border-2 border-white hover:border-button text-right text-mb text-white font-regular">Entrar</button>
    </div>
  )
} 