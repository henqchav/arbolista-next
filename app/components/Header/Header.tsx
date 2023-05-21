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
        <div className="bg-white p-4 shadow-lg w-full flex justify-between items-center text-sm">
            <div className="mr-6 flex items-center">
                <Logo src="/images/logo-text.png" />
            </div>
            <nav className="flex flex-row items-center gap-4">
                <div className="md:hidden">
                    <button className="flex items-center px-3 py-2 border rounded hover:border-green-600 hover:text-green-700"
                        onClick={showMenu}
                    >
                        <svg className="h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <ul className="hidden md:flex gap-2 lg:gap-4 uppercase">
                    <Navigation />
                </ul>
                <MenuItems showMenu={showMenu} active={isOpen} />
            </nav>
            <button onClick={()=>{}}
                className="
                    hidden
                    md:flex
                    items-center
                    gap-px
                    font-semibold
                    p-1
                    rounded-md
                    hover:bg-green-200
                    hover:shadow-md
                ">
                Planta tu árbol
                <GiSeedling size={16}/>
            </button>
            <div className="hidden md:flex md:flex-row md:gap-2">
                <a className="hover:text-green-700 hover:font-semibold" href="/login">Ingresa</a>
                o
                <a className="hover:text-green-700 hover:font-semibold" href="/register">Registrate</a>
            </div>
        </div>    
    );
}

export default Header;