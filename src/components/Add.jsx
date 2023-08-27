import React, { useState } from 'react';
import './Add.css';
import itemsToDo from '../itemsToDo';
import ItemToDo from './ItemToDo'

const Add = () => {
  const [selecionadoAdd, setIsSelected] = useState(false);
  const [itemDescription, setItemDescription] = useState('');
  const [items, setItems] = useState(itemsToDo)

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
      id: window.crypto.randomUUID(),
      isCompleted: false
    };
    const renderItems = [...items]
    renderItems.push(newItems)
    setItems(renderItems)
    }

  const removeItem = (id) => {
    setItems(itemsToDo.filter(itemToDo => itemToDo.id !== id))
    console.log("deleted", id)
  }

  const completeItem = (id) => {
    const updatedItems = items.map((itemToDo) => {
      if (itemToDo.id === id) {
        return { ...itemToDo, isCompleted: true };
      }
      return itemToDo;
    });
      setItems(updatedItems)
  };

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
                {items.map((itemToDo) => (
                    <ItemToDo
                        onDelete={removeItem}
                        onComplete={completeItem}
                        key={itemToDo.id}
                        id={itemToDo.id}
                        description={itemToDo.description}
                        isCompleted={itemToDo.isCompleted}
                    />    
                ))}
            </div>
        </div>
    )
}

export default Add