import React from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App