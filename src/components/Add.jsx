import React from 'react'
import './Add.css'

const Add = () => {
    return (
        <div className='addForm'>
            <form>
                <input className='addInput'
                    placeholder='Add new item...'
                />
                <button className='addButton' type="submit"><strong>+</strong></button>
            </form>
        </div>
    )
}

export default Add