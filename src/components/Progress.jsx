import React, { useState } from 'react'
import './Progress.css'

const Progress = (props) => {

  const progressValue = document.querySelectorAll('.itemCard').length * 10

  return (
    <div className='progressDiv'>
      <div className='progressContainer'>  <progress value={progressValue} max="100"></progress></div>
    </div>
  )
}

export default Progress