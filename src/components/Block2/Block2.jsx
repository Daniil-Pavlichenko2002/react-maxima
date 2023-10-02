import React from 'react'
import './Block2.scss'
import house from '../../images/Main/House.png'
import bath from '../../images/Main/Bath.png'
import check from '../../images/Main/ГалочкаАктивная.svg'
import checkNoActive from '../../images/Main/ГалочкаНеАктивная.svg'
import InternaSlider from '../../images/Main/InternaSlider.svg'
import hand from '../../images/Main/Hand.svg'
import arrow from '../../images/Main/Arrow.svg'
import flag from '../../images/Main/Flag.svg'
import man from '../../images/Main/мужик 1.png'
import lock from '../../images/Main/Lock.svg'
import lock2 from '../../images/Main/Group 11.svg'
import percent from '../../images/Main/Percent.svg'

const Block2 = () => {
    return (
        <section className='block2' >
            <div className="blockRow">
                <div className="blockRowItem">
                    <h2><span>Рассчитайте предварительную <br />
                        стоимость</span> дома за 1 минуту</h2>
                    <div className="slider">
                        <img src={InternaSlider} alt="" />
                    </div>
                    <div className="block2Title">
                        <div className='block2TitleNum' >01.</div>
                        <h3>Что будем строить?</h3>
                    </div>
                    <div className="blockFlex">
                        <div className="blockFlexItem">
                            <img className="blockFlexItemImage" src={house} alt="" />
                            <img className='checkActive' src={check} alt="" />
                            <p>Дом</p>
                        </div>
                        <div className="blockFlexItem">
                            <img className="blockFlexItemImage" src={bath} alt="" />
                            <img className='checkActive' src={checkNoActive} alt="" />
                            <p>Баня</p>
                        </div>
                    </div>
                    <div className="blockFlex2">
                        <div>
                            <img src={hand} alt="" />
                            <p><span>Нажимайте на вариант ответа</span><br />
                                и переходите к следующему вопросу</p>
                        </div>
                        <button>
                            <p>Далее</p>
                            <img src={arrow} alt="" />
                            <img src={arrow} alt="" />
                        </button>
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

export default Block2