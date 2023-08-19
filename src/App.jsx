import React from 'react'
import Header from './components/Header'
import Progress from './components/Progress'
import Search from './components/Search'
import Filter from './components/Filter'
import Add from './components/Add'
import ItemsList from './components/ItemsList'

const App = () => {
  return (
    <div className='app'>
        <Header/>
        <Progress/>
        <Search/>
        <Filter/>
        <Add/>
        <ItemsList/>
    </div>
  )
}

export default App