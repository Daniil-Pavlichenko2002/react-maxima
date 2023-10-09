import React from 'react'
import './Main.scss'
import Banner from '../Banner/Banner'
import Block2 from '../Block2/Block2'
import Gallery from '../Gallery/Gallery'
import Slider from '../Slider/Slider'
import API from '../API'



const Main = () => {
  return (
    <main>
      <div className='container'>
        <Banner/>
        <Block2/>
        <Gallery/>
        <Slider/>
      </div>
    </main>
  )
}

export default Main