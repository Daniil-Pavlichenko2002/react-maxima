import React from 'react'
import './Gallery.scss'
import { useDispatch } from 'react-redux'
import { addProject } from '../../redux/slices/personalAreaSlice'


const GalleryItem = ({id, title, image, price,}) => {

    const dispatch = useDispatch()

    return (
        <div className="gallery__item">
            <img className='gallery__item-image' src={image} alt="" />
            <h3 className="gallery__item-title">{title}</h3>
            <p className="gallery__item-text" >от <span>{price}</span> руб/м</p>
            <button onClick={() => dispatch(addProject({ title, price, id }))} className="gallery__item-btn">смотреть проекты</button>
            <div className="projects">100+ проектов</div>
        </div>
    )
}

export default GalleryItem