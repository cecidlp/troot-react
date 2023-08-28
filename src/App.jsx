import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Image from './components/Image'
import ProyectosEntregados from './components/ProyectosEntregados'
import Team from "./components/Team"


function App() {

  return (
    <div>
     <Navbar/>
     <Hero/>
     <Image/>
     <ProyectosEntregados/>
     <Team/>
    </div>
  )
}

export default App
