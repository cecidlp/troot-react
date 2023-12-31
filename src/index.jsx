import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Image from './components/Image'
import ProyectosEntregados from './components/ProyectosEntregados'
import Team from './components/Team'
import Servicios from './components/Servicios'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function index() {
  return (
    <div>
    <Navbar/>
     <Hero/>
     <Image/>
     <ProyectosEntregados/>
     <Team/>
     <Servicios/>
     <ContactForm/>
     <Footer/>
    </div>
  )
}

export default index

