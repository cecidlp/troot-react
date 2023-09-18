import React from 'react'
import Julieta from "../assets/Julieta.jpg"
import Paula from "../assets/Paula.jpg"
import '../index.css'

function Team() {
  return (
    <div className='mx-auto px-6 py-8 lg:py-14' id="team">
        <h2 className='title-h2 md:text-[2.5rem] xl:text-[3.5rem] '>
            Nuestro equipo
        </h2>
        <div className='text-center flex flex-col items-center pt-11 lg:flex-row lg:justify-evenly lg:pt-16'>
            <div className='pb-7'>
                <img src={Julieta} alt="Julieta Rocca" className='w-[50vw] h-[28vh] rounded-3xl object-cover lg:w-[30vw] lg:h-[40vh]'>
                </img>
                <h3 className='title-h3 pt-3 pb-1 md:text-[1.5rem] lg:text-[1.8rem]'>Julieta Rocca</h3>
                <p className='text-p md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem]'>
                    Traductora Pública UBA
                </p>
            </div>
            <div className='lg:pb-7'>
                <img src={Paula} alt="Paula Pace" className='w-[50vw] h-[28vh] rounded-3xl object-cover lg:w-[30vw] lg:h-[40vh] '>
                </img>
                <h3 className='title-h3 pt-3 pb-1 md:text-[1.5rem] lg:text-[1.8rem]'>Paula Pace</h3>
                <p className='text-p md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] '> 
                    Traductora Pública UBA
                </p>
            </div>
        </div>
    </div>
  )
}

export default Team