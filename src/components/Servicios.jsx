import React from 'react'
import '../index.css'

function Servicios() {
    const descripcionServicios = [
        {
            id: 1,
            title: "Traducciones jurídicas",
            text: "Contratos, documentos societarios, demandas, expedientes judiciales, poderes, exhortos, oficios, sentencias, textos doctrinarios, actas, documentos notariales, testamentos, entre otros.",
        },
        {
            id: 2,
            title: "Traducciones con carácter público",
            text: "Partidas de nacimiento y defunción, certificados de matrimonio, pasaportes, entre otros.",
            text2: "Diplomas, certificados análiticos, entre otros.",
            text3: "Documentos de economía y finanzas, entre otros.",
        },
        {
            id: 3,
            title: "Traducción técnico-científica",
            text: "Páginas web, revistas, descripciones de productos, campañas publicitarias, entre otros.",
        },
        {
            id: 4,
            title: "Subtitulado",
            text: "Guiones cinematográficos, videos, servicios de transcripción y temporización, entre otros.",
        },
        {
            id: 5,
            title: "Edición y Corrección",
        },
        {
            id: 6,
            title: "Interpretación",
        }
    ]
    return (
        <div id="servicios" className='py-8 lg:py-16'>
            <h2 className='title-h2 pb-8 md:pb-16 md:text-[2.5rem] xl:text-[3.5rem] '>¿Qué ofrecemos?</h2>
            {descripcionServicios.map((card) => (<Descripcion key={card.id} number={card.id} title={card.title} text={card.text} text2={card.text2} text3={card.text3} />))}
        </div>
    )
}

export default Servicios

export function Descripcion({ title, text, text2, text3 }) {
    return (
        <div className='flex flex-row w-[88%] py-7 mx-auto border-t border-gray-400'>
            <div>
                <h4 className='title-h4 md:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.5rem]'>{title}</h4>
                <ul className='text-p md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] pl-6 pt-4'>
                    {text && <li>{text}</li>}
                    {text2 && <li>{text2}</li>}
                    {text3 && <li>{text3}</li>}
                </ul>
            </div>
        </div>
    )
}
