import React from 'react'
import Julieta from "../assets/Julieta.jpg"
import Paula from "../assets/Paula.jpg"

function Team() {
  return (
    <div className='mx-auto px-6' id="team">
        <h2 className='text-[#5C3671] text-center font-semibold text-[1.5rem] md:text-[3rem] xl:text-[4rem] '>
            Nuestro equipo
        </h2>
        <div className='text-center flex flex-col items-center pt-9 lg:flex-row lg:justify-evenly lg:pt-10'>
            <div className='pb-7'>
                <img src={Julieta} alt="Julieta Rocca" className='w-[50vw] h-[28vh] rounded-3xl object-cover lg:w-[30vw] lg:h-[40vh]'>
                </img>
                <h3 className='text-[1.2rem] text-[#5C3671] font-semibold pt-3 pb-1 lg:text-[1.8rem]'>Julieta Rocca</h3>
                <p className='text-[0.7rem] lg:text-[1rem]'>
                    Traductora pública UBA
                </p>
            </div>
            <div className='lg:pb-7'>
                <img src={Paula} alt="Paula Pace" className='w-[50vw] h-[28vh] rounded-3xl object-cover lg:w-[30vw] lg:h-[40vh] '>
                </img>
                <h3 className='text-[1.2rem] text-[#5C3671] font-semibold pt-3 pb-1 lg:text-[1.8rem]'>Paula Pace</h3>
                <p className='text-[0.7rem] lg:text-[1rem]'> 
                    Traductora pública UBA
                </p>
            </div>
        </div>
    </div>
  )
}

export default Team