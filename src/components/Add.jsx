import React, { useState } from 'react'
import './Add.css'

const Add = () => {
    const [selecionadoAdd, setIsSelected] = useState(false);

    const onMouseEffect = () => {
        setIsSelected(!selecionadoAdd);
    }

    return (
        <div className={`addForm ${selecionadoAdd ? 'selecionadoAdd' : ''}`} onMouseOver={onMouseEffect}  onMouseLeave={onMouseEffect}>
            <form>
            <input className={`addInput ${selecionadoAdd ? 'selecionadoAdd' : ''}`}
                onMouseOver={onMouseEffect}  onMouseLeave={onMouseEffect}
                placeholder='Add new item...'
                />
                <button className='addButton' type="submit"><strong>+</strong></button>
            </form>
        </div>
    )
}

export default Add