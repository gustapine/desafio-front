import React from 'react'
import './ItemToDo.css'

const ItemToDo = (props) => {
  return (
    <div>
      <div className='itemCard'>
      <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ItemToDo