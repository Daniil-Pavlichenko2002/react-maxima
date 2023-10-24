import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../images/Main/image 6.png'
import image2 from '../../images/Main/image 7.png'
import discount from '../../images/Main/Discount.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperSlider.scss';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard} from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <>
      <section className='slider'>
        <h2 className="slider__title"><span>Акции и подарки</span> для каждой семьи</h2>
        <div className="slider__items">

          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={2}
            spaceBetween={30}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
                {/* <button>перейти к акции</button> */}
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
                {/* <button>перейти к акции</button> */}
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
                {/* <button>перейти к акции</button> */}
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
                {/* <button>перейти к акции</button> */}
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
                {/* <button>перейти к акции</button> */}
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
                {/* <button>перейти к акции</button> */}
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
                  {/* <button>перейти к акции</button> */}
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
                  {/* <button>перейти к акции</button> */}
                  <img className='slider__item-discount' src={discount} alt="" />
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
