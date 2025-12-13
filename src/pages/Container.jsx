import React from 'react'
import Home from './Home'
import Features from './Features'
import Contact from './Contact'
import Unique from './Unique'
import Help from './Help'
import Partners from './Partners'
import Nbcs from './Nbcs'
import Journey from './Journey'
import Emi from './Emi'
import Form from './Form'
import About from './About'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Navbar from '../components/Navbar'
import Loan from './Loan'

const Container = () => {
  return (
    <div>
      <Home/>
      <Features/>
      <Contact/>
      <Unique/>
      <Help/>
      <Loan/>
      <Partners />
      <Emi/>
      <Form/>
      <About/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Container
