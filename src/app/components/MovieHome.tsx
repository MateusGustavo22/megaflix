"use client"

import MovieDetails from "./MovieDetails"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function MovieHome() {
  const [mobileWidth, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <>
      <div className="w-full h-max flex items-center bg-gradient-to-r from-primary from-25% via-[#1e2030f5] via-40% to-[#ec000000] to-80% ... ">
        <div className="absolute ">
          <MovieDetails />
        </div>

        <div className="w-full max-h-[800px] p-1 flex justify-end">
          <div className="w-[1400px] h-full relative -z-10 pt-[56.25%] bg-[length:100%] bg-no-repeat bg-couver bg-[url('/pantera.jpg')]">
           
          </div>
        </div>
        
      </div>
    </>
  )
}