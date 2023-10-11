import React from 'react'
import '../index.css'
import { useGlobalContext } from '../GlobalContextProvider'

function Servicios() {
    const {isSpanish} = useGlobalContext();

    const descripcionServicios = [
        {
            id: 1,
            title: "Traducciones jurídicas",
            textos: ["Contratos, documentos societarios, demandas, expedientes judiciales, poderes, exhortos, oficios, sentencias, textos doctrinarios, actas, documentos notariales, testamentos, entre otros."],
        },
        {
            id: 2,
            title: "Traducciones con carácter público",
            textos: ["Partidas de nacimiento y defunción, certificados de matrimonio, pasaportes, diplomas, certificados analíticos, documentos de economía y finanzas, entre otros.",]

        },
        {
            id: 3,
            title: "Traducciones técnico-científicas",
            textos: ["Páginas web, revistas, descripciones de productos, campañas publicitarias, entre otras."]
        },
        {
            id: 4,
            title: "Subtitulado",
            textos: ["Guiones cinematográficos, videos, servicios de transcripción y temporización, entre otros."],
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

    const serviceDescription = [
        {
            id: 1,
            title: "Legal Translations",
            textos: ["Agreements, bylaws, articles of incorporation, complaints, orders, legal articles, deeds, notarially recorded instruments, wills, among others."]
        },
        {
            id: 2,
            title: "Certified Translations",
            textos: ["Birth certificates, death certificates, marriage licenses and certificates, passports, diplomas, academic transcripts, economy and finance documents, among others.",]

        },
        {
            id: 3,
            title: "Technical and Scientific Translations",
            textos: ["Web sites, magazines, descriptions of products, advertising campaigns, among others."]
        },
        {
            id: 4,
            title: "Subtitling",
            textos: ["Film scripts, videos, transcription, timing, among others."],
        },
        {
            id: 5,
            title: "Edition and Proofreading",
        },
        {
            id: 6,
            title: "Interpreting Services",
        }
    ]

    return (
        <div id="servicios" className='py-8 lg:py-16'>
            <h2 className='title-h2 pb-8 md:pb-16 md:text-[2.5rem] xl:text-[3.5rem] '>{isSpanish ? "¿Qué ofrecemos?" : "What do we offer?"} </h2>
            {isSpanish ?
                descripcionServicios.map((card) => (<Descripcion key={card.id} number={card.id} title={card.title} textos={card.textos} />)) :
                serviceDescription.map((card) => (<Descripcion key={card.id} number={card.id} title={card.title} textos={card.textos} />))}
        </div>
    )
}

export default Servicios

export function Descripcion({ number, title, textos }) {
    return (
        <div className='flex flex-row w-[88%] py-7 mx-auto border-t border-gray-400'>
            <span className='text-[#3C3B39] text-[0.9rem] md:pr-20 md:text-[1rem]  lg:text-[1.1rem] xl:text-[1.3rem]'>(0{number})</span>
            <div>
                <h4 className='title-h4 pl-8 md:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.5rem]'>{title}</h4>
                <div className='text-p md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] pl-8 pt-4'>
                    {textos?.map((texto, index) => <p key={index} >{texto}</p>)}
                </div>
            </div>
        </div>
    )
}
