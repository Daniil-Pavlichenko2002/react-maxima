import React, { useState } from 'react'
import './Main.scss'
import Banner from '../Banner/Banner'
import Block2 from '../Block2/Block2'
import Gallery from '../Gallery/Gallery'
import Slider from '../Slider/Slider'
import API from '../API'
import house from '../../images/Main/House.png'
import bath from '../../images/Main/Bath.png'
import image from '../../images/Main/gallery/Rectangle 45.png'

const slide = [
  {
      title: 'Что будем строить?',
      image: [house, bath],
  },
  {
      title: 'Второй слайд',
      image: [house, image],
  },
  {
      title: 'Третий слайд',
      image: [image, bath],
  },
  {
      title: 'Четвёртый слайд',
      image: [house, bath],
  },
  {
      title: 'Пятый слайд',
      image: [bath, house],
  },
]

const Main = () => {

  const [index, setIndex] = useState(0)

  return (
    <main>
      <div className='container'>
        <Banner/>
        <Block2 slide={slide} index={index}  setIndex={setIndex}/>
        <Gallery/>
        <Slider/>
      </div>
    </main>
  )
}

export default Main