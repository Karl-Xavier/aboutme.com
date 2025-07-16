import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react'
import React, { useState } from 'react'

export default function Carousel({ data }) {

  console.log(data)

  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + data.length) % data.length)

  const next = () => setIndex((index + 1) % data.length)

  return (
    <div className='carousel-container relative w-full max-w-[800px] mx-auto'>
      <img src={data[index]} alt={`Slide ${index}`} className='w-full h-[200px] md:h-[400px]'/>
      <button className='absolute left-0 cursor-pointer' onClick={prev}><CaretCircleLeft size={38} weight='fill' color='#121212'/></button>
      <button className='absolute right-0 cursor-pointer' onClick={next}><CaretCircleRight size={38} weight='fill' color='#121212'/></button>
    </div>
  )
}