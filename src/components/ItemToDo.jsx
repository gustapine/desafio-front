import React, { useState } from 'react'
import './ItemToDo.css'

const ItemToDo = (props) => {
  const [edit, setEdit] = useState(false)
  const [createElement, setElement] = useState(false)

  const handleButtonClick = () => {
    setEdit(!edit);
  }

  const createElemTooltip = () => {
    setElement(!createElement)
}

  return (
    <div>
      <div className={`itemCard ${edit ? 'edit' : ''}`} onClick={()=>{handleButtonClick(); createElemTooltip();}}>
        <p>{props.description}</p>
        <div className={`${!createElement && 'card-tooltip-none'} `} id={`${createElement ? 'card-tooltip' : ''} `}><span id={`${createElement ? 'card-tooltip' : ''}`}>Edit task</span></div>
        <div className={`${edit ? 'buttonsCard' : 'buttonsCardDisplay' }`}>
          <button className={`${edit ? 'removeButton' : 'buttonsCardDisplay' }`}></button>
          <button className={`${edit ? 'addCardButton' : 'buttonsCardDisplay' }`}></button>
        </div>
      </div>
    </div>
  )
}

export default ItemToDo