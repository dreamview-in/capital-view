import React from 'react'
import Container from './pages/Container'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Help from './pages/Help'
import Contact from './pages/Contact'
import About from './pages/About'
import ContactForm from './pages/ContactForm'
import Loan from './pages/Loan'

const App = () => {
  return (
    <div className=' scroll-smooth '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/form' element={<ContactForm />} />
        <Route path='/Loan Products' element={
          <>
          <Help />
          <Loan/>
          </>
        } />
        <Route path='/Contact us' element={<Contact />} />
        <Route path='/About us' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
