import React from 'react'
import Container from './pages/Container'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Help from './pages/Help'
import Contact from './pages/Contact'
import ContactForm from './pages/ContactForm'
import PersonalLoan from './pages/PersonalLoan'
import HomeLoan from './pages/HomeLoan'
import PropertyLoan from './pages/PropertyLoan'
import BusinessLoan from './pages/BusinessLoan'
import ProfesionalLoan from './pages/ProfesionalLoan'
import Las from './pages/Las'
import CapitalLoan from './pages/CapitalLoan'
import MSME from './pages/MSME'

function App() {
  return (
    <div className=' scroll-smooth '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path= '/Personal Loan' element={<PersonalLoan/>}/>
        <Route path= '/Home Loan' element={<HomeLoan/>}/>
        <Route path= '/Loan Against Property' element={<PropertyLoan/>}/>
        <Route path= '/Business Loan' element={<BusinessLoan/>}/>
        <Route path= '/Professional Loan' element={<ProfesionalLoan/>}/>
        <Route path= '/Loan Against Securities' element={<Las/>}/>
        <Route path= '/Working Capital Loans' element={<CapitalLoan/>}/>
        <Route path= '/MSME Loans' element={<MSME/>}/>
        <Route path='/Loan Products' element={<>
          <Help />
        </>} />
        <Route path='/Contact us' element={<ContactForm />} />
        <Route path='/About us' element={<Contact />} />
        <Route path='/apply' element={<Help />} />

      </Routes>
    </div>
  )
}

export default App
