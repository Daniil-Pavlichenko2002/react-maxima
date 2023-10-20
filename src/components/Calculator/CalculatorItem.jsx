import React from 'react'
import check from '../../images/Main/ГалочкаАктивная.svg'
import checkNoActive from '../../images/Main/ГалочкаНеАктивная.svg'
import InternaSlider from '../../images/Main/InternaSlider.svg'
// import './Calculator.scss'

const CalculatorItem = ({ indentation, slide, index, check1, check2, dispatch, setCheck1, setCheck2 }) => {
    return (
        <>
            <div className="slider">
                <img style={{ left: `${indentation}%` }} className='clider__icon' src={InternaSlider} alt="" />
            </div>
            <div className="block2Title">
                <div className='block2TitleNum' >0{index + 1}.</div>
                <h3>{slide[index].title}</h3>
            </div>
            <div className="blockFlex">
                <div className="blockFlexItem">
                    <img className="blockFlexItemImage" src={slide[index].image[0]} alt="" />
                    <img onClick={() => dispatch(setCheck1(slide[index].price1))} className='checkActive' src={check1 ? check : checkNoActive} alt="" />
                    <p>{slide[index].name[0]}</p>
                </div>
                <div className="blockFlexItem">
                    <img className="blockFlexItemImage" src={slide[index].image[1]} alt="" />
                    <img onClick={() => dispatch(setCheck2(slide[index].price2))} className='checkActive' src={check2 ? check : checkNoActive} alt="" />
                    <p>{slide[index].name[1]}</p>
                </div>
            </div>
        </>
    )
}

export default CalculatorItem