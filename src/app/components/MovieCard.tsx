export default function MovieCard() {
  return (
    <div className="w-[220px] h-[320px] relative rounded-xl  border-4 border-primary hover:border-button hover:parent bg-[url('/spider.jpg')] bg-[length:100%_100%]">
      <div className="w-full h-full absolute flex items-end pb-2 rounded-xl hover:bg-gradient-to-t pl-2 from-primary to-[#00000050]">
        <span className="text-white font-medium hidden max-w-[210px] child">Homem Aranha Sem Volta Para Casa</span>
        <style>
          {`
            .hover\\:parent:hover .child {
              display: block;
            }
          `}
        </style>
      </div>
    </div>
  )
}