// import React, { useState } from 'react'
import './Calculator.scss'
// import check from '../../images/Main/ГалочкаАктивная.svg'
// import checkNoActive from '../../images/Main/ГалочкаНеАктивная.svg'
// import InternaSlider from '../../images/Main/InternaSlider.svg'
import hand from '../../images/Main/Hand.svg'
import arrow from '../../images/Main/Arrow.svg'
import flag from '../../images/Main/Flag.svg'
import man from '../../images/Main/мужик 1.png'
import lock from '../../images/Main/Lock.svg'
import lock2 from '../../images/Main/Group 11.svg'
import percent from '../../images/Main/Percent.svg'
import { minusSlide, plusSlide, selectCalculator, setFinalChecks, setCheck1, setCheck2, slide, setPrice1, setPrice2 } from '../../redux/slices/calculatorSlices'
import { useDispatch, useSelector } from 'react-redux'
import CalculatorItem from './CalculatorItem'

// const slide = [
//     {
//         title: 'Что будем строить?',
//         image: [house, bath],
//         price1: 2000,
//         price2: 1000,
//     },
//     {
//         title: 'Второй слайд',
//         image: [house, image],
//         price1: 500,
//         price2: 300,
//     },
//     {
//         title: 'Третий слайд',
//         image: [image, bath],
//     },
//     {
//         title: 'Четвёртый слайд',
//         image: [house, bath],
//     },
//     {
//         title: 'Пятый слайд',
//         image: [bath, house],
//     },
// ]

const Calculator = () => {
    const { index, totalPrices, prices, check1, check2 } = useSelector(selectCalculator)
    const dispatch = useDispatch()

    let disabled = check2 || check1
    
    const countPrice = () => {
        if (check1) {
            // dispatch(setCheck1(slide[index].price1))
            dispatch(setPrice1(slide[index].price1))
        }
        if (check2) {
            // dispatch(setCheck2(slide[index].price2))
            dispatch(setPrice2(slide[index].price2))
        }
        dispatch(plusSlide())
    }

    const finalPrice = () => {
        countPrice()
        dispatch(setFinalChecks())
    }
    // const indentation = Math.round(index / (slide.length - 1) * 100);
    const indentation = Math.round(index / (slide.length - 0.4) * 100);
    return (
        <section className='block2' >
            <div className="blockRow">
                <div className="blockRowItem">
                    <h2><span>Рассчитайте предварительную <br />
                        стоимость</span> дома за 1 минуту</h2>
                   {totalPrices && prices.length === slide.length ?
                        <h1 className='total__prices'>{totalPrices} руб.</h1>
                    :
                        <CalculatorItem 
                        indentation={indentation} 
                        slide={slide} 
                        index={index} 
                        check1={check1} 
                        dispatch={dispatch} 
                        check2={check2} 
                        setCheck1={setCheck1} 
                        setCheck2={setCheck2} 
                    />}
                    <div className="blockFlex2">
                        <div>
                            <img src={hand} alt="" />
                            <p><span>Нажимайте на вариант ответа</span><br />
                                и переходите к следующему вопросу</p>
                        </div>
                        {index > 0 && <button onClick={() => dispatch(minusSlide())}>
                            <p>Назад</p>
                        </button>}
                        {slide.length - 1 === index ?
                            <button style={{marginLeft: '5px'}} onClick={finalPrice} disabled={!disabled} >
                                <p >Расчитать стоимость</p>
                            </button>
                            :
                            <button onClick={countPrice} disabled={!disabled} >
                                <p >Далее</p>
                                <img src={arrow} alt="" />
                                <img src={arrow} alt="" />
                            </button>
                        }
                    </div>
                </div>
                <div className="blockRowItem2">
                    <img className='blockRowItem2Flag' src={flag} alt="" />
                    <img className='blockRowItem2Man' src={man} alt="" />
                    <h2>Михаил Иванов</h2>
                    <h3>Ведущий архитектор</h3>
                    <p>Ответив на вопросы <span>вы получите:</span></p>
                    <div>
                        <img className='blockRowItem2Lock' src={lock} alt="" />
                        <p className='blockRowItem2Text' >Гарантированную <br /><span>скидку</span></p>
                        <img className='blockRowItem2Percent' src={percent} alt="" />
                    </div>
                    <div className="blockRowItem2Block">
                        <img className='blockRowItem2Lock2' src={lock2} alt="" />
                        <p>Ориентировочную<br />
                            <span>стоимость строительства</span></p>
                    </div>
                    <div className="blockRowItem2Block">
                        <img className='blockRowItem2Lock2' src={lock2} alt="" />
                        <p>Точную подборку<br />
                            <span>проектов исходя изваших
                                <br />ответов</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator

// 'Можно ли писать инлайн-стили?'
// Что делать с учебными компонентами?
//  

                    {/* <div className="slider">
                        <img style={{ width: `${indentation}%` }} className='clider__icon' src={InternaSlider} alt="" />
                    </div>
                    <div className="block2Title">
                        <div className='block2TitleNum' >0{index + 1}.</div>
                        <h3>{slide[index].title}</h3>
                    </div>
                    <div className="blockFlex">
                        <div className="blockFlexItem">
                            <img className="blockFlexItemImage" src={slide[index].image[0]} alt="" />
                            <img onClick={() => dispatch(setCheck1(slide[index].price1))} className='checkActive' src={check1 ? check : checkNoActive} alt="" />
                            <p>Дом</p>
                        </div>
                        <div className="blockFlexItem">
                            <img className="blockFlexItemImage" src={slide[index].image[1]} alt="" />
                            <img onClick={() => dispatch(setCheck2(slide[index].price2))} className='checkActive' src={check2 ? check : checkNoActive} alt="" />
                            <p>Баня</p>
                        </div>
                    </div> */}


// const [finalPrice, setFinalPrice] = useState([])
// const [check1, setCheck1] = useState(false)
// const [check2, setCheck2] = useState(false)
// const [index, setIndex] = useState(0)

// const onClickCheck1 = () => {
//     dispatch(setCheck1());
// }


// const onClickCheck2 = () => {
//     dispatch(setCheck2());
// }

// const plusSlide = () => {
//     setCheck1(false);
//     setCheck2(false);
//     if (index !== slide.length - 1) {
//         setIndex(index + 1)
//     }
// }
// const minusSlide = () => {
//     if (index > 0) {
//         setIndex(index - 1)
//     }


