import React from 'react'
import './Footer.scss'
import  Navigation from'../Navigation/Navigation'
import '../Header/Header.css'

const Footer = () => {
  return (
    <footer>
        <Navigation/>
        <div className="footer__row">
            <p>Все права защищены 2022.</p>
            <a href="#">Политика обработки персональных данных</a>
        </div>
    </footer>
  )
}

export default Footer