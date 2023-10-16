import React from 'react'
import './Slider.scss'
import image from '../../images/Main/image 6.png'
import image2 from '../../images/Main/image 7.png'
import discount from '../../images/Main/Discount.svg'
import vector from '../../images/Main/Vector 57.svg'
import group from '../../images/Main/Group 40.svg'
// import image from '../../images/Main/gallery/Rectangle 45.png'


const Slider = () => {
    return (
        <section className='slider'>
            <h2 className="slider__title"><span>Акции и подарки</span> для каждой семьи</h2>
            <div className="slider__items">
                <div className="slider__item">
                    <img className='slider__item-image' src={image} alt="" />
                    <h3 className='slider__item-title' >Любая перепланировка <br />в подарок!</h3>
                    <p className='slider__item-text' > Рыбатекст используется дизайнерами,<br />
                        проектировщиками и фронтендерами,<br />
                        когда нужно выстро заполнить макеты<br />
                        или прототипы содержимым.</p>
                    <button>перейти к акции</button>
                </div>
                <div className="slider__item">
                    <img className='slider__item-image' src={image2} alt="" />
                    <h3 className='slider__item-title' >Металлическая <br />дверь в подарок!</h3>
                    <p className='slider__item-text'> Рыбатекст используется дизайнерами,<br />
                        проектировщиками и фронтендерами,<br />
                        когда нужно выстро заполнить макеты<br />
                        или прототипы содержимым.</p>
                    <button>перейти к акции</button>
                    <img className='slider__item-discount' src={discount} alt="" />
                </div>
            </div>
            <img src={vector} className='slider__vector' alt="" />
            <div className="slider__block_image">
                <img src={group} className='slider__group' alt="" />
            </div>

        </section>
    )
}

export default Slider