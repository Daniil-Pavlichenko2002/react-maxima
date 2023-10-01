import React from 'react'
import logo from '../../images/Header/Logo.svg'
import stars from '../../images/Header/Stars.svg'
import flag from '../../images/Header/Flag.svg'
import buttopnImage from '../../images/Header/Button-image.svg'
import mail from '../../images/Header/mail.svg'
import elipse from '../../images/Header/Ellipse 3.svg'
import phoneLogo from '../../images/Header/PhoneLogo.svg'
import vector from '../../images/Header/Vector 1.svg'
import heart from '../../images/Header/Heart.svg'
import search from '../../images/Header/Search.svg'
import './Header.css'
import BackgraundBanner from '../BackgraundBanner/BackgraundBanner'

const Header = () => {
  return (
    <header>
      <BackgraundBanner/>
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
      </div>
      <nav className="HeaderRow2">
        <div className="Link">
          <a href="">проекты</a>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <a href="">фото работ</a>
        </div>
        <div className="Link">
          <a href="">акции</a>
        </div>
        <div className="Link">
          <a href="">услуги</a>
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
      </div>
   
    </header>
  )
}

export default Header

// Наименования классов

// Про картинку и hover