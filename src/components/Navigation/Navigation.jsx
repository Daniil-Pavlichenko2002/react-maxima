import React from 'react'
import './Navigation.scss'
import vector from '../../images/Header/Vector 1.svg'
import heart from '../../images/Header/Heart.svg'
import search from '../../images/Header/Search.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
        <div className="Link">
          <Link to="/gallery">проекты</Link>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <Link to="/">главная</Link>
        </div>
        <div className="Link">
          <Link to="/slider">акции</Link>
        </div>
        <div className="Link">
          <Link to="/block2">калькулятор</Link>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <a href="">заказчику</a>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <a href="">контакты</a>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <img src={heart} className='ImageIcon' alt="" />
          <a href="">избранное</a>
        </div>
        <div className="Link">
          <img className='ImageIcon' src={search} alt="" />
          <a href="">поиск</a>
        </div>
      </nav>
  )
}

export default Navigation