import React, { useState, useEffect } from "react";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../GlobalContextProvider";
import Logo from '../../public/logo_blanco.svg'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { isSpanish, handleChangeLanguage } = useGlobalContext();



    return (
        <div className={
            "bg-[#5B726C] flex justify-between items-center h-24 mx-auto px-6 w-[100%] lg:px-10 z-20 lg:h-16" +
            (scrollY > 10 ? " fixed top-0 left-0 w-full h-[3.5rem]" : "")
        } >
            <img src={Logo} alt="Troot logo" className="lg:w-56 w-28 md:w-40" />
            <ul className="hidden md:flex items-center">
                <li className="p-4 pr-10">
                    <a href="#team" className="text-[#E5E2DB]">
                        {isSpanish ? "Equipo" : "Team"}
                    </a>
                </li>
                <li className="p-4 pr-10">
                    <a href="#servicios" className="text-[#E5E2DB]">
                        {isSpanish ? "Servicios" : "Services"}
                    </a>
                </li>
                <li className="p-4 pr-10">
                    <a href="#contacto" className="text-[#E5E2DB]">
                        {isSpanish ? "Contacto" : "Contact"}
                    </a>
                </li>
                <li className="p-4">
                    <button onClick={handleChangeLanguage}><TfiWorld fill="#E5E2DB" /></button>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose fill="#E5E2DB" size={20} /> : <AiOutlineMenu fill="#E5E2DB" size={20} />}
            </div>
            <ul className={nav ? "shadow-2xl fixed left-0 top-0 pt-2 w-[100%] border-r rounded-b-[30px] border-none bg-[#5B726C] ease-in-out duration-500 z-20 " : "fixed top-[-100%] bg-[#5B726C]"}>
                <div onClick={handleNav} className="flex justify-between items-center px-6">
                <img src={Logo} alt="Troot logo" className="lg:w-56 w-36 md:w-40 right-7 relative" />
                    <AiOutlineClose fill="#E5E2DB" size={20} />
                </div>
                <li className="px-6 py-6 border-b border-gray-400 font-weight: 400">
                    <a onClick={handleNav} href="#team" className="text-[#E5E2DB]">
                        {isSpanish ? "Equipo" : "Team"}
                    </a>
                </li>
                <li className="px-6 py-6 border-b border-gray-400">
                    <a onClick={handleNav} href="#servicios" className="text-[#E5E2DB]">
                        {isSpanish ? "Servicios" : "Services"}
                    </a>
                </li>
                <li className="px-6 py-6 border-b border-gray-400">
                    <a onClick={handleNav} href="#contacto" className="text-[#E5E2DB]">
                        {isSpanish ? "Contacto" : "Contact"}
                    </a>
                </li>
                <li className="px-6 py-6">
                    <button onClick={() => { handleChangeLanguage(); handleNav(); }}><TfiWorld fill="#E5E2DB" /></button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
