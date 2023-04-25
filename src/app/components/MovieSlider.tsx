"use client"
import { useState, useEffect, useRef } from 'react'
import MovieCard from "./MovieCard"
import { motion } from 'framer-motion'

export default function MovieSlider() {
  const slider = useRef<HTMLDivElement>(null)
  const [sliderWidth, setSliderWidth] = useState(0)

  useEffect(() => {
    if (slider.current) {
      setSliderWidth(slider.current?.scrollWidth - slider.current?.offsetWidth)
    }
  }, [])

  return (
    <div ref={slider} className="max-w-full h-full mb-4 overflow-hidden p-1 pl-8 mb:pl-4 bg-black">
      <span className="text-white text-xl block mb-4 font-semibold">Em alta</span>
      <motion.div  drag="x" dragConstraints={{right: 0, left: -sliderWidth}} className="w-max h-max flex space-x-2">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </motion.div>
    </div>
  )
}