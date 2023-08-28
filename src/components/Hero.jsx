import React from 'react'


const Hero = () => {
    return (
        <div className='bg-[#5B726C] w-full px-6 lg:px-20 rounded-b-3xl' >
            <div className='md:px-5 md:h-[50vh] lg:h-[60vh] mt-[-10px] h-[25vh] mx-auto text-center flex flex-col justify-center items-center border-b border-gray-400'>
                <h1 className='md:text-[3rem] text-[1.8rem] lg:text-[4rem] xl:text-[5rem] font-normal text-[#E5E2DB]'>Conservando las raíces de cada palabra</h1>
            </div>
            <p className='md:pt-16 md:px-5 md:text-[1.1rem] lg:px-8 lg:leading-7 lg:text-[1.2rem] xl:text-[1.3rem]  xl:leading-8 text-[#E5E2DB] text-center text-[0.6rem] pt-6'>Somos una agencia de traducción que busca transmitir el mensaje de los clientes a sus respectivas audiencias de manera precisa y fiel. </p>
            <p className='md:pb-16 md:px-5 md:text-[1.1rem] lg:px-8 lg:leading-7 lg:text-[1.2rem] xl:text-[1.3rem]  xl:leading-8 text-[#E5E2DB] text-center text-[0.6rem] py-2 pb-6'>Ofrecemos servicios de traducción, corrección e interpretación priorizando la localización y dándole especial atención a cada detalle. </p>
        </div>
    )
}

export default Hero