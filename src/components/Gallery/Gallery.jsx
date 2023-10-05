import React from 'react'
import './Gallery.scss'
import imageBig from '../../images/Main/gallery/Rectangle 27.png'
import image from '../../images/Main/gallery/Rectangle 45.png'


const Gallery = () => {
    return (
        <section className='gallery' >
            <h2 className="gellery__title"><span>Мы строим деревянные дома и бани</span> с учетом
                всех особенностей Курска</h2>
            <div className="gallery__items">
                <div className="gallery__item gallery__item-big1">
                    <img className='gallery__item-image' src={imageBig} alt="" />
                    <h3 className="gallery__item-title gallery__item-title-big">Каркасные<br/>
                        дома</h3>
                    <p className="gallery__item-text gallery__item-text-big" >от <span>21&nbsp;800</span> руб/м</p>
                    <button className="gallery__item-btn gallery__item-btn-big">смотреть проекты</button>
                    <div className="projects projects-big">100+ проектов</div>
                </div>
                <div className="gallery__item">
                    <img className='gallery__item-image' src={image} alt="" />
                    <h3 className="gallery__item-title">Дома<br/> из бруса</h3>
                    <p className="gallery__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="gallery__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="gallery__item">
                    <img className='gallery__item-image' src={image} alt="" />
                    <h3 className="gallery__item-title">Срубы под<br/> усадку</h3>
                    <p className="gallery__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="gallery__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="gallery__item">
                    <img className='gallery__item-image' src={image} alt="" />
                    <h3 className="gallery__item-title">Бани<br/> из бруса</h3>
                    <p className="gallery__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="gallery__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="gallery__item">
                    <img className='gallery__item-image' src={image} alt="" />
                    <h3 className="gallery__item-title">Перевозные<br/> бани</h3>
                    <p className="gallery__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="gallery__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="gallery__item gallery__item-big2">
                    <img className='gallery__item-image' src={imageBig} alt="" />
                    <h3 className="gallery__item-title gallery__item-title-big">Каркасные<br/> бани</h3>
                    <p className="gallery__item-text gallery__item-text-big" >от <span>21&nbsp;800</span> руб/м</p>
                    <button className="gallery__item-btn gallery__item-btn-big">смотреть проекты</button>
                    <div className="projects projects-big">100+ проектов</div>
                </div>
                <div className="gallery__item">
                    <img className='gallery__item-image' src={image} alt="" />
                    <h3 className="gallery__item-title">Срубы<br/> под усадку</h3>
                    <p className="gallery__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="gallery__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                
            </div>
        </section>
    )
}

export default Gallery