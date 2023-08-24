import React from 'react'
import PlantImage from "../assets/planta.jpg"


function Image() {
  return (
    <div className='w-full relative -top-10 -z-10 lg:-top-32 md:-top-20'>
        <img src={PlantImage} alt="plant-image"/>
    </div>
  )
}

export default Image