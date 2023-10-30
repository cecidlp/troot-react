import React from 'react'
import LogoVioleta from '../../public/logo_violeta.png'
import whatsapp from '../../public/whatsapp.png'
import Social from './social'

export default function Footer() {
  return (
    <div className='mx-6 mt-16 py-10 md:px-5 lg:px-12 xl:px-16 border-t border-gray-400'>
      <img src={LogoVioleta} alt='logo' className='lg:w-56 w-28 right-5 md:w-40 md:right-8 md:top-4 lg:right-9 relative' />
      <p className='text-[#3C3B39] text-[0.7rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] pb-5'>trootranslations@gmail.com</p>
      <Social logo={whatsapp} title="Whatsapp" url="https://wa.me/5491165291959"/>
    </div>
  )
}
