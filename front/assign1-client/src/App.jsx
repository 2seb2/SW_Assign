import React from 'react'
import './App.css'
import BoardList from './boards/BoardList'
import BoardView from './boards/BoardView'

function App() {
  return (
    <div className='container'>
      <BoardList />
      <BoardView />
    </div>
  )
}

export default App
