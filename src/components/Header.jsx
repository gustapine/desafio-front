import React from 'react'
import './Header.css'

const date = new Date();
const today = String(date.getDate()).padStart(2,'0')
let year = date.getFullYear();
let month;
let currentDay;

switch (parseInt(date.getMonth() + 1)) {
  case 1:
    month = "Jan";
    break;
  case 2:
    month = "Fev";
    break;
  case 3:
    month = "Mar";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "Jun";
    break;
  case 7:
    month = "Jul"
    break;
  case 8:
    month = "Aug";
    break;
  case 9:
    month = "Sep";
    break;
  case 10:
    month = "Oct";
    break;
  case 11:
    month = "Nov";
    break;
  case 12:
    month = "Dec";
    break;
  default:
    break;
}

switch (parseInt(date.getDay())) {
  case 0:
    currentDay = "Sunday";
    break;
  case 1:
    currentDay = "Monday";
    break;
  case 2:
    currentDay = "Tuesday";
    break;
  case 3:
    currentDay = "Wednesday";
    break;
  case 4:
    currentDay = "Thursday";
    break;
  case 5:
    currentDay = "Friday";
    break;
  case 6:
    currentDay = "Saturday"
    break;
  default:
    break;
}

const Header = () => {
  return (
    <div className='header'>
      <div className='day'>{today}</div>
      <div className='currentDay'>{currentDay}</div>
      <div className='mesano'>
        <div className='month'>{month}</div>
        <div className='year'>{year}</div>
      </div>
    </div>
  )
}

export default Header