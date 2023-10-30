import React from 'react'

const Social = ({logo, title, url}) => {
  const handleRedirect = () => {
    window.location.href = url;
  }
  return (
    <div className='flex items-center right-2 relative' onClick={handleRedirect}>
        <img src={logo} alt="" className='w-7 md:w-10 xl:w-12 hover:cursor-pointer ' />
        <h1 className='text-[0.7rem] text-[#3C3B39] md:text-base lg:text-[1.1rem] xl:text-[1.3rem] hover:cursor-pointer '>{title}</h1>
    </div>
  )
}

export default Social