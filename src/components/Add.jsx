import React, { useState } from 'react';
import './Add.css';
import itemsToDo from '../itemsToDo';
import ItemToDo from './ItemToDo'

const Add = () => {
  const [selecionadoAdd, setIsSelected] = useState(false);
  const [itemDescription, setItemDescription] = useState('');

  const onMouseEffect = () => {
    setIsSelected(!selecionadoAdd);
  }  

  const handleAddItem = (event) => {
    event.preventDefault();
    addNewItem(itemDescription);
    setItemDescription('');
  }

  const addNewItem = (description) => {
    const newItems = {
      description: description,
      key: 333,
      isCompleted: false
    };

    // Assuming that `itemsToDo` is an array, you can add the new item to it like this:
    itemsToDo.push(newItems);

    console.log(itemsToDo);
  }

    return (
        <div>
            <div className={`addForm ${selecionadoAdd ? 'selecionadoAdd' : ''}`} onMouseOver={onMouseEffect} onMouseLeave={onMouseEffect}>
            <form onSubmit={handleAddItem}>
                <input id='getNewItem' className={`addInput ${selecionadoAdd ? 'selecionadoAdd' : ''}`}
                    onMouseOver={onMouseEffect} onMouseLeave={onMouseEffect}
                    onChange={e => setItemDescription(e.target.value)}
                    value={itemDescription}
                    placeholder='Add new item...'
                />
                <button className='addButton' type="submit"><strong>+</strong></button>
            </form>
            </div>
            <div className='itemsList'>
                {itemsToDo.map((itemToDo) => (
                    <ItemToDo
                        key={itemToDo.key}
                        description={itemToDo.description}
                        isCompleted={itemToDo.isCompleted}
                    />    
                ))}
            </div>
        </div>
    )
}

export default Add