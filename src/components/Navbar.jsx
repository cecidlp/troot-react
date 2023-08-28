import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
            <div className="bg-[#5B726C] flex justify-between items-center h-24 mx-auto px-6 w-[100%] lg:px-10">
                <h1 className="w-full text-3xl font-light text-[#E5E2DB]">Troot</h1>
                <ul className="hidden md:flex items-center">
                    <li className="p-4 pr-10">
                        <a href="#team" className={`text-[#E5E2DB] ${activeLink === 'team' ? 'active' : ''} navbar-link`}>
                            Equipo
                        </a>
                    </li>
                    <li className="p-4 pr-10">
                        <a href="/servicios" className={`text-[#E5E2DB] ${activeLink === 'servicios' ? 'active' : ''} navbar-link`}>
                            Servicios
                        </a>
                    </li>
                    <li className="p-4 pr-10">
                        <a href="/contacto" className={`text-[#E5E2DB] ${activeLink === 'contacto' ? 'active' : ''} navbar-link`}>
                            Contacto
                        </a>
                    </li>
                    <li className="p-4">
                        <TfiWorld fill="#E5E2DB" />
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose fill="#E5E2DB" size={20} /> : <AiOutlineMenu fill="#E5E2DB" size={20} />}
                </div>
                <ul className={nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#5B726C] ease-in-out duration-500 z-20" : "ease-in-out duration-500 fixed left-[-100%] "}>
                    <h1 className="w-full text-3xl font-light text-[#E5E2DB] m-8">Troot</h1>
                        <li className="p-4 border-b border-gray-400 font-weight: 400">
                            <a href="/team" className={`text-[#E5E2DB] ${activeLink === 'team' ? 'active' : ''} navbar-link`}>
                                EQUIPO
                            </a>
                        </li>
                        <li className="p-4 border-b border-gray-400">
                            <a href="/services" className={`text-[#E5E2DB] ${activeLink === 'services' ? 'active' : ''} navbar-link`}>
                                SERVICIOS
                            </a>
                        </li>
                        <li className="p-4 border-b border-gray-400">
                            <a href="/contacto" className={`text-[#E5E2DB] ${activeLink === 'contacto' ? 'active' : ''} navbar-link`}>
                                CONTACTO
                            </a>
                        </li>
                        <li className="p-4 ">
                            <TfiWorld fill="#E5E2DB" />
                        </li>
                </ul>
            </div>
    );
};

export default Navbar;
