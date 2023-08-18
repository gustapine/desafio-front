import React, {useState} from 'react'
import './Filter.css'

const Filter = () => {
  const [selecionadoDone, setIsSelectedDone] = useState(false);
  const [selecionadoPending, setIsSelectedPending] = useState(false);
  
  const handleButtonClick = () => {
    setIsSelectedDone(!selecionadoDone);
  }
  const handleButtonClickPending = () =>{
    setIsSelectedPending(!selecionadoPending)
  }


  return (
    <div className='filter'>
        <button className={`Done botao ${selecionadoDone ? 'selecionadoDone' : ''}`}
        onClick={handleButtonClick} id='botao'>Done</button>
        <button className={`Pending botao ${selecionadoPending ? 'selecionadoPending' : ''}`}
        onClick={handleButtonClickPending}>Pending</button>
    </div>
  )
}

export default Filter