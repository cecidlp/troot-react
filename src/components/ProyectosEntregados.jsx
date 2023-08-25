import React from 'react'

function ProyectosEntregados() {
    return (
        <div className='bg-[#F5F5F5] w-full text-center py-5 md:pt-0 mx-auto px-6 -top-5 relative'>
            <h2 className='text-[#5C3671] font-semibold text-[1.5rem] md:text-[3rem] xl:text-[4rem]'>+1000 proyectos entregados</h2>
            <div className='w-full flex flex-col gap-4 pt-8 border-b border-gray-400 md:px-5 lg:px-20 xl:px-32 lg:flex-row lg:gap-16'>
                <p className='text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] lg:text-left'>
                    Buscamos conectar y vincular a habitantes de todo el mundo a través del par de idiomas inglés-español y español-inglés y así, facilitar la comunicación y los lazos entre los participantes de cada interacción.
                </p>
                <p className='text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] pb-10 md:pb-11 lg:pb-14 lg:text-left'>
                    Consideramos que las necesidades de los clientes son de máxima importancia a la hora de brindar servicios de calidad para promover una comunicación clara y confiable.
                </p>
            </div>
        </div>
    )
}

export default ProyectosEntregados