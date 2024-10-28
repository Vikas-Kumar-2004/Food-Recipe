import { useState } from 'react'

import './App.css'
import Mainpage from './Component/Mainpage'
import {  Routes, Route } from 'react-router-dom';
import Mealinfo from './Component/Mealinfo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
    </Routes>
    </>
  )
}

export default App
