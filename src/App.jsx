import React from 'react'
import Container from './pages/Container'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Help from './pages/Help'
import Contact from './pages/Contact'
import ContactForm from './pages/ContactForm'
import AboutLoan from './pages/AboutLoan'

function App() {
  return (
    <div className=' scroll-smooth '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/loan' element={<AboutLoan />} />
        <Route path='/Loan Products' element={<>
          <Help />
        </>} />
        <Route path='/Contact us' element={<ContactForm />} />
        <Route path='/About us' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
