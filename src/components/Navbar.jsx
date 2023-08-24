import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [Nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!Nav);
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <div className="bg-[#5B726C] flex justify-between items-center h-24 mx-auto px-6 w-[100%] lg:px-10 ">
                <h1 className="w-full text-3xl font-light text-[#E5E2DB]">Troot</h1>
                <ul className="hidden md:flex items-center">
                    <li className="p-4 pr-10">
                        <Link to="/servicios" className={`text-[#E5E2DB] ${activeLink === 'servicios' ? 'active' : ''} navbar-link`}>
                            Servicios
                        </Link>
                    </li>
                    <li className="p-4 pr-10">
                        <Link to="/about" className={`text-[#E5E2DB] ${activeLink === 'about' ? 'active' : ''} navbar-link`}>
                            About
                        </Link>
                    </li>
                    <li className="p-4 pr-10">
                        <Link to="/contacto" className={`text-[#E5E2DB] ${activeLink === 'contacto' ? 'active' : ''} navbar-link`}>
                            Contacto
                        </Link>
                    </li>
                    <li className="p-4">
                        <TfiWorld fill="#E5E2DB" />
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!Nav ? (
                        <AiOutlineClose fill="#E5E2DB" size={20} />
                    ) : (
                        <AiOutlineMenu fill="#E5E2DB" size={20} />
                    )}
                </div>
                <div
                    className={
                        !Nav
                            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#5B726C] ease-in-out duration-500"
                            : "fixed left-[-100%] "
                    }
                >
                    <h1 className="w-full text-3xl font-light text-[#E5E2DB] m-8">Troot</h1>
                    <ul className="p-4">
                        <li className="p-4 border-b border-gray-400 font-weight: 400">
                            <Link to="/servicios" className={`text-[#E5E2DB] ${activeLink === 'servicios' ? 'active' : ''} navbar-link`}>
                                SERVICIOS
                            </Link>
                        </li>
                        <li className="p-4 border-b border-gray-400">
                            <Link to="/about" className={`text-[#E5E2DB] ${activeLink === 'about' ? 'active' : ''} navbar-link`}>
                                ABOUT
                            </Link>
                        </li>
                        <li className="p-4 border-b border-gray-400">
                            <Link to="/contacto" className={`text-[#E5E2DB] ${activeLink === 'contacto' ? 'active' : ''} navbar-link`}>
                                CONTACTO
                            </Link>
                        </li>
                        <li className="p-4 ">
                            <TfiWorld fill="#E5E2DB" />
                        </li>
                    </ul>
                </div>
            </div>
        </Router>
    );
};

export default Navbar;
