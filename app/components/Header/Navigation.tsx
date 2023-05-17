'use client';
import Container from "../Container";

const Navigation = () => {
    return (
        <div className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            w-auto
        ">
            <div className="
                text-sm
                text-gray-600
                hover:text-gray-800
                hover:font-bold
                hover:border-b-[2px]
                hover:border-b-green-600
                transition
                cursor-pointer
            ">
                <a href="#">Acerca</a>
            </div>
            <div className="
                text-sm
                text-gray-600
                hover:text-gray-800
                hover:font-bold
                hover:border-b-[2px]
                hover:border-b-green-600
                transition
                cursor-pointer
            ">
                <a href="#">Galeria</a>
            </div>
            <div className="
                text-sm
                text-gray-600
                hover:text-gray-800
                hover:font-bold
                hover:border-b-[2px]
                hover:border-b-green-600
                transition
                cursor-pointer
            ">
                <a href="#">Especies</a>
            </div>
            <div className="
                text-sm
                text-gray-600
                hover:text-gray-800
                hover:font-bold
                hover:border-b-[2px]
                hover:border-b-green-600
                transition
                cursor-pointer
            ">
                <a href="#">Viveros</a>
            </div>
        </div>
    );
}

export default Navigation;