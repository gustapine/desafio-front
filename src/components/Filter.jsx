import React, {useState} from 'react'
import './Filter.css'

const Filter = () => {
  const [selecionado , setIsSelected] = useState(false);
  const handleButtonClick = () => {
    setIsSelected(!selecionado);
  };

  return (
    <div className='Filter'>
        <button className={`Done botao ${selecionado ? 'selecionado' : ''}`}
        onClick={handleButtonClick} id='botao'>Done</button>
        <button className={`Pending botao ${selecionado ? 'selecionado' : ''}`}
        onClick={handleButtonClick}>Pending</button>
    </div>
  )
}

export default Filter