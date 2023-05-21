'use client';
import Link from "next/link";

interface NavigationProps {
    orientation?: 'horizontal' | 'vertical';
}

const Navigation: React.FC<NavigationProps> = ({
    orientation = 'horizontal',
}) => {

    const links = [
        {
            name: 'Acerca',
            href: '/acerca',
        },
        {
            name: 'Galeria',
            href: '/galeria',
        },
        {
            name: 'Especies',
            href: '/especies',
        },
        {
            name: 'Viveros',
            href: '/viveros',
        },
    ];
    return (
        <>
            {links.map((link, index) => (
                <li
                    key={index}
                    className={`
                        text-sm
                        text-gray-600
                        hover:text-gray-800
                        hover:font-bold
                        hover:border-b-[2px]
                        hover:border-b-green-600
                        transition
                        cursor-pointer
                        ${orientation === 'vertical' ? 'mt-4' : 'mt-0'}
                    `}
                >
                    <Link href={link.href}>{link.name}</Link>
                </li>
            ))}      
        </>
    );
}

export default Navigation;