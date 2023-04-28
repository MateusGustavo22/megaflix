export default function Login() {
  return (
    <div className="w-fullh-max flex mt-8 flex-col m-auto justify-center">
    <a href="/" className="font-bold text-white text-3xl m-auto mb-8">MegaFlix</a>
    <div className="max-w-[600px] w-full min-h-[200px] p-4 pb-10 pl-8 pr-8 space-y-3 flex flex-col items-center justify-center border-[#9c9c9c] border-2 rounded-md m-auto bg-gradient-to-r from-[#222860] to-[#732281]">
      <span className="text-white font-semibold text-2xl">Login</span>
      <input className="w-full text-white p-2 outline-none block bg-[#fff0] border-white border-2 rounded-lg" type="text" placeholder="Seu email"/>
      <input className="w-full text-white p-2 outline-none block bg-[#fff0] border-white border-2 rounded-lg" type="password" placeholder="Senha"/>
      <button className="w-full bg-button p-3 text-white hover:shadow-blueShadow hover:shadow-1xl font-semibold rounded-md text-xl">Entrar</button>
    </div>
    </div>
  )
}