import React from 'react'
import '../index.css'

function Servicios() {
    const descripcionServicios = [
        {
            id: 1,
            title: "Traducciones jurídicas",
            text: "Contratos, documentos societarios, demandas, expedientes judiciales, poderes, exhortos, oficios, sentencias, textos doctrinarios, actas, documentos notariales, testamentos, etc.",
        },
        {
            id: 2,
            title: "Traducciones con carácter público",
            text: "Partidas de nacimiento y defunción, certiciados de matrimonio, pasaportes, diplomas, certificados analíticos, documentos relacionados con la economía y finanzas, etc.",
        },
        {
            id: 3,
            title: "Traducción técnico-científica",
            text: "Páginas web, revistas, descripción de productos, campañas publicitarias, etc.",
        },
        {
            id: 4,
            title: "Subtitulado",
            text: "Guiones cinematográficos, videos, transcripción, temporización, etc.",
        },
        {
            id: 5,
            title: "Edición y corrección",
            text: "",
        },
        {
            id: 6,
            title: "Interpretación",
            text: "",
        }
    ]
    return (
        <div id="servicios">
            <h2 className='title-h2 py-[2rem] md:text-[2.5rem] xl:text-[3.5rem] '>¿Qué ofrecemos?</h2>
            {descripcionServicios.map((card) => (<Descripcion key={card.id} number={card.id} title={card.title} text={card.text} />))}
        </div>
    )
}

export default Servicios


export function Descripcion({ number, title, text }) {
    return (
        <div className='flex flex-row w-[88%] py-5 mx-auto border-t border-gray-400'>
            <span className='text-[#3C3B39] text-[0.9rem] pr-[1rem] md:text-[1rem]  lg:text-[1.1rem] xl:text-[1.3rem]'>(0{number})</span>
            <div>
                <h4 className='title-h4 md:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.5rem]'>{title}</h4>
                <p className='text-p md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] '>{text}</p>
            </div>

        </div>
    )
}
