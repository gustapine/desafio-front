import React from 'react'
import itemsToDo from '../itemsToDo.js'
import ItemToDo from './ItemToDo.jsx'
import './ItemsList.css'

const ItemsList = () => {

    const itemsList = itemsToDo;
    
  return (
    <div className='itemsList'>
    {itemsList.map((itemToDo, index) => (
        <ItemToDo
          key={index}
          description={itemToDo.description}
        />    
    ))}

    </div>
  );
}

export default ItemsList