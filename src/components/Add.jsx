import React, { useState } from 'react'
import './Add.css'
import itemsToDo from '../itemsToDo'
import ItemToDo from './ItemToDo.jsx'

const Add = () => {
    const [selecionadoAdd, setIsSelected] = useState(false);
    const [items, setItems] = useState('')


    const onMouseEffect = () => {
        setIsSelected(!selecionadoAdd);
    }

    const handleAddItem = (event) => {

        event.preventDefault()
        addNewItem(items)
        setItems('')
    }

    const addNewItem = (description) => {
        const newItems = {
            key: window.crypto.randomUUID(),
            description: description,
            isCompleted: false
        }

        setItems([...items, newItems])
        console.log(items)
    }

    return (
        <div>
            <div className={`addForm ${selecionadoAdd ? 'selecionadoAdd' : ''}`} onMouseOver={onMouseEffect} onMouseLeave={onMouseEffect}>
            <form onSubmit={handleAddItem}>
                <input id='getNewItem' className={`addInput ${selecionadoAdd ? 'selecionadoAdd' : ''}`}
                    onMouseOver={onMouseEffect} onMouseLeave={onMouseEffect}
                    onChange={e => setItems(e.target.value)}
                    value={items}
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