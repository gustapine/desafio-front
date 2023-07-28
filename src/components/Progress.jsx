import React from 'react'


const Progress = (props) => {

  return (
    <div className='progressDiv'>
      <div className='progressContainer'>  <progress value="50" max="100"></progress></div>
    </div>
  )
}

export default Progress