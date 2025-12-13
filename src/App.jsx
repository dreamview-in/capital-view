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
import AboutLoan from './pages/AboutLoan'
import Form from './pages/Form'

const App = () => {
  return (
    <div className=' scroll-smooth '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/loan' element={<AboutLoan />} />
        <Route path='/loanForm' element={<Form />} />
        <Route path='/Loan Products' element={
          <>
          <Help />
          <Loan/>
          </>
        } />
        <Route path='/Contact us' element={<ContactForm />} />
        <Route path='/About us' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
