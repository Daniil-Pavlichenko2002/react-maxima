import React from 'react'
import './Gallery.scss'
import imageBig from '../../images/Main/gallery/Rectangle 27.png'
import image from '../../images/Main/gallery/Rectangle 45.png'
import GalleryItem from './GalleryItem'


const Gallery = () => {

    const projects = [
        {
            id: 1,
            title: 'Каркасные дома',
            price: '21 800',
            image: imageBig,
        },
        {
            id: 2,
            title: 'Дома из бруса',
            price: '19 700',
            image
        },
        {
            id: 3,
            title: 'Срубы под усадку',
            price: '19 700',
            image
        },
        {
            id: 4,
            title: 'Бани из бруса',
            price: '19 700',
            image
        },
        {
            id: 5,
            title: 'Перевозные бани',
            price: '19 700',
            image
        },
        {
            id: 6,
            title: 'Каркасные бани',
            price: '21 800',
            image: imageBig,
        },
        {
            id: 7,
            title: 'Срубы под усадку',
            price: '19 700',
            image
        },
    ]
    return (
        <section className='gallery' >
            <h2 className="gellery__title"><span>Мы строим деревянные дома и бани</span> с учетом
                всех особенностей Курска</h2>
            <div className="gallery__items">
                {projects.map((obj) => (
                    <GalleryItem key={obj.id} {...obj} />
                )) }
            </div>
        </section>
    )
}

export default Gallery