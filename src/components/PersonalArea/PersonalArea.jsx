import React from 'react'
import './PersonalArea.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeProject, selectPersonalArea } from '../../redux/slices/personalAreaSlice'

const PersonalArea = () => {
  const dispatch = useDispatch()
  const {items} = useSelector(selectPersonalArea)

  return (
    <section className='personal__area' >
      <h1>Личный кабинет</h1>
        {items.length ? 
          items.map((obj, index) => (
            <div key={obj.id} className='personal__area-item'>
              <p>{index+1}. Пользователь интересовался {obj.title}, с ценой {obj.price}</p>
              <button onClick={() => dispatch(removeProject(obj.id))}>Удалить</button>
            </div>
          ))
          :
          <h2>Вы нечего не выбрали </h2>
        }
    </section>
  )
}

export default PersonalArea