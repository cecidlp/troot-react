import React from 'react'
import '../index.css'
import { useGlobalContext } from '../GlobalContextProvider'

const Hero = () => {
    const {isSpanish} = useGlobalContext();

    return (
        <div className='bg-[#5B726C] w-full px-6 lg:px-20 rounded-b-3xl' >
            <div className='md:px-5 md:h-[50vh] lg:h-[60vh] mt-[-10px] h-[25vh] mx-auto text-center flex flex-col justify-center items-center border-b border-gray-400'>
                <h1 className='title-h1 md:text-[3rem] lg:text-[4rem] xl:text-[5rem]'>{isSpanish ? "Conservando las raíces en cada palabra" : "Translations preserving roots"}</h1>
            </div>
            <p className='p-hero font-[300] md:pt-16 md:px-5 md:text-[1.1rem] lg:px-8 lg:leading-7 lg:text-[1.2rem] xl:text-[1.3rem]  xl:leading-8 pt-6'> {isSpanish ? "Somos una agencia de traducción que busca transmitir el mensaje de los clientes a sus respectivas audiencias de manera precisa y fiel." : "TROOT is a translation agency that intends to convey the clients’ message to their respective audience in a clear and accurate way."}  </p>
            <p className='p-hero font-[300] md:pb-16 md:px-5 md:text-[1.1rem] lg:px-8 lg:leading-7 lg:text-[1.2rem] xl:text-[1.3rem]  xl:leading-8 py-2 pb-6'> {isSpanish ? "Ofrecemos servicios de traducción, corrección e interpretación priorizando los aspectos culturales de cada región y dándole especial atención a cada detalle." : "We offer translation, proofreading, and interpreting services prioritizing localization and paying special attention to details."}  </p>
        </div>
    )
}

export default Hero