
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../images/Main/image 6.png'
import image2 from '../../images/Main/image 7.png'
import discount from '../../images/Main/Discount.svg'
import vector from '../../images/Main/Vector 57.svg'
import group from '../../images/Main/Group 40.svg'
// import image from '../../images/Main/gallery/Rectangle 45.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperSlider.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <>
      <section className='slider'>
        <h2 className="slider__title"><span>Акции и подарки</span> для каждой семьи</h2>
        <div className="slider__items">

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider__item">
                <img className='slider__item-image' src={image} alt="" />
                <h3 className='slider__item-title' >Любая перепланировка <br />в подарок!</h3>
                <p className='slider__item-text' > Рыбатекст используется дизайнерами,<br />
                  проектировщиками и фронтендерами,<br />
                  когда нужно выстро заполнить макеты<br />
                  или прототипы содержимым.</p>
                <button>перейти к акции</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

          </Swiper>
        </div>
        {/* <img src={vector} className='slider__vector' alt="" /> */}
        {/* <div className="slider__block_image">
          <img src={group} className='slider__group' alt="" />
        </div> */}
      </section>
    </>
  );
}