"use client"

import MovieDetails from "./MovieDetails"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function MovieHome() {
  /*const [mobileWidth, setWidth] = useState<number | null>(null)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, []) */

  return (
    <>
      <div className="w-full h-max flex flex-row items-center mb:flex-col  mb:from-[#fff0] mb:items-start bg-gradient-to-r from-primary from-25% via-[#1e2030f5] via-40% to-[#ec000000] to-80% ... ">
        <div className="w-full mb-4 max-h-[800px] flex justify-end">
          <div className="w-[1400px] h-full relative -z-10 pt-[56.25%] bg-[length:100%] bg-no-repeat bg-couver bg-[url('/peakyblinder.jpg')]">
           
          </div>
        </div>
        <div className="absolute mb:relative">
          <MovieDetails sinopse='O jornalista Eddie Brock desenvolve força e poder sobre-humanos quando seu corpo se funde com o alienígena Venom. Dominado pela raiva, Venom tenta controlar as novas e perigosas habilidades de Eddie.' />
        </div>
      </div>
    </>
  )
}