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

const Container = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <Contact/>
      <Unique/>
      <Help/>
      <Partners />
      <Nbcs/>
      <Journey/>
      <Emi/>
      <Form/>
      <About/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Container
