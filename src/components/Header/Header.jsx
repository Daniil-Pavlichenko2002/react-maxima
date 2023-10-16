import React, { useState } from 'react'
import logo from '../../images/Header/Logo.svg'
import stars from '../../images/Header/Stars.svg'
import flag from '../../images/Header/Flag.svg'
import buttopnImage from '../../images/Header/Button-image.svg'
import mail from '../../images/Header/mail.svg'
import elipse from '../../images/Header/Ellipse 3.svg'
import phoneLogo from '../../images/Header/PhoneLogo.svg'
import './Header.css'
import BackgraundBanner from '../BackgraundBanner/BackgraundBanner'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <header>
      <BackgraundBanner darkTheme={darkTheme}/>
      <div className="container">
      <div className="HeaderRow">
        <img src={logo} alt="Логотип" className="HeaderLogo" />
        <div className="Rating">
          <img className='HeaderFlag' src={flag} alt="Флаг" />
          <div className="ratingBlock">
            <img src={stars} alt="Заёзды" />
            <p><span>Рейтинг в Google</span> на <hr />
              основании 180 отзывов</p>
          </div>
        </div>
        <div className="ButtonMail">
          <button>
            <p>Прислать проект на расчет</p>
            <img src={buttopnImage} alt="" />
          </button>
          <div className="Email">
            <img src={mail} alt="" />
            <a href="#">info@house.world</a>
          </div>
        </div>
        <div className="Online">
          <p><img src={elipse} alt="" />Мы онлайн</p>
          <img src={phoneLogo} alt="" />
        </div>
        <div className="Contacts">
          <p><img src={elipse} alt="" />Без выходных с 10:00 до 20:00</p>
          <a href="tel:+78000000000">+7 (800) 000-00-00</a>
          <a href="#">Заказать обратный звонок</a>
        </div>
        <button 
        onClick={() => setDarkTheme(!darkTheme)}
        className='thme'>
          {darkTheme ? 'Тёмная тема' : 'Обычная'}
        </button>
      </div>
      <Navigation/>
      </div>
   
    </header>
  )
}

export default Header

// Наименования классов

// Про картинку и hover