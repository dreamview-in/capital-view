import React from 'react'
import Container from './pages/Container'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Help from './pages/Help'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/Loan Products' element={<Help />} />
        <Route path='/Contact us' element={<Contact />} />
        <Route path='/About us' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
