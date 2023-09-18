import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
            <div className="bg-[#5B726C] flex justify-between items-center h-24 mx-auto px-6 w-[100%] lg:px-10">
                <h2 className="w-full text-2xl font-light text-[#E5E2DB]">Troot</h2>
                <ul className="hidden md:flex items-center">
                    <li className="p-4 pr-10">
                        <a href="#team" className="text-[#E5E2DB]">
                            Equipo
                        </a>
                    </li>
                    <li className="p-4 pr-10">
                        <a href="#servicios" className="text-[#E5E2DB]">
                            Servicios
                        </a>
                    </li>
                    <li className="p-4 pr-10">
                        <a href="#contacto" className="text-[#E5E2DB]">
                            Contacto
                        </a>
                    </li>
                    <li className="p-4">
                        <TfiWorld fill="#E5E2DB"/>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose fill="#E5E2DB" size={20} /> : <AiOutlineMenu fill="#E5E2DB" size={20} />}
                </div>
                <ul className={nav ? "fixed left-0 top-0 pt-10 w-[100%] h-[55%] border-r rounded-b-[30px] border-r-gray-900 bg-[#5B726C] ease-in-out duration-500 z-20" : "ease-in-out duration-500 fixed top-[-100%] "}>
                    <div onClick={handleNav} className="flex items-center px-6">
                        <h1 className="w-full text-2xl  py-6 font-light text-[#E5E2DB]">Troot</h1>
                        <AiOutlineClose fill="#E5E2DB" size={20} />
                    </div>  
                        <li className="px-6 py-6 border-b border-gray-400 font-weight: 400">
                            <a href="#team" className="text-[#E5E2DB]">
                                EQUIPO
                            </a>
                        </li>
                        <li className="px-6 py-6 border-b border-gray-400">
                            <a href="#servicios" className="text-[#E5E2DB]">
                                SERVICIOS
                            </a>
                        </li>
                        <li className="px-6 py-6 border-b border-gray-400">
                            <a href="/contacto" className="text-[#E5E2DB]">
                                CONTACTO
                            </a>
                        </li>
                        <li className="px-6 py-6">
                            <TfiWorld fill="#E5E2DB" />
                        </li>
                </ul>
            </div>
    );
};

export default Navbar;
