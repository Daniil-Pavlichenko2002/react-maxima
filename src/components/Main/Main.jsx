import React from 'react'
import './Main.scss'
import Banner from '../Banner/Banner'
import Block2 from '../Block2/Block2'
import Counter from '../Counter'


const Main = () => {
  return (
    <main>
      <div className='container'>
        <Banner/>
        <Block2/>
        <Counter/>
      </div>
    </main>
  )
}

export default Main