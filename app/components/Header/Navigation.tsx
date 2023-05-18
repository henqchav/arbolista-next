'use client';
import Link from "next/link";

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
                <Link href={"/acerca"}>Acerca</Link>
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
                <Link href={"/galeria"}>Galeria</Link>
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
                <Link href={"/especies"}>Especies</Link>
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
                <Link href={"/viveros"}>Viveros</Link>
            </div>
        </div>
    );
}

export default Navigation;