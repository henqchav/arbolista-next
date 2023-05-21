'use client';

import Logo from "../Logo"
import MenuItems from "./MenuItems"
import Navigation from "./Navigation"
import { SafeUser } from "@/app/types";
import { useState } from "react";
import { GiSeedling } from "react-icons/gi";

interface HeaderProps {
    currentUser?: SafeUser | null | undefined;
}

const Header: React.FC<HeaderProps> = ({
    currentUser,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const showMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-white p-4 shadow-lg w-full flex justify-between items-center">
            <div className="mr-6 flex items-center">
                <Logo src="/images/logo-text.png" />
            </div>
            <nav className="flex flex-row items-center gap-8">
                <div className="md:hidden">
                    <button className="flex items-center px-3 py-2 border rounded hover:border-green-600 hover:text-green-700"
                        onClick={showMenu}
                    >
                        <svg className="h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <ul className="hidden md:flex gap-8 uppercase">
                    <Navigation />
                </ul>
                <button onClick={()=>{}}
                    className="
                        hidden
                        md:flex
                        gap-2
                        items-center
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-md
                        hover:bg-green-200
                        hover:shadow-md
                    ">
                    Planta tu árbol
                    <GiSeedling />
                </button>
                <MenuItems showMenu={showMenu} active={isOpen} />
            </nav>
        </div>    
    );
}

export default Header;
/*
<nav className="flex items-center justify-between flex-wrap bg-white z-10 p-6 shadow-sm w-full">
            <div className="
                flex
                items-center
                flex-no-shrink
                mr-6
            ">
                <Logo src="/images/logo-text.png" />
            </div>
            
            
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded hover:border-green-600 hover:text-green-700" onClick={toggleOpen}>
                    <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>    

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <div className=" text-sm lg:flex-grow">
                    <Navigation />
                </div>
            </div>
            
        </nav>
*/