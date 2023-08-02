import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='searchBar'>
        <input placeholder="Search items" type="search" id="Search" name="q"></input>
    </div>
  )
}

export default Search