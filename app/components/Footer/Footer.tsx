import Logo from "../Logo";
const Footer = () => {
    return (
        <div className="
            bg-gray-900 
            p-12
            items-center 
            justify-center 
            gap-20 
            flex
            w-full 
            flex-col 
            text-white
        "
        >
            <div className="flex flex-row 2xs:flex-col w-full gap-20 items-center">
                <div className="bg-green-700 h-fit w-fit rounded-xl">
                    <Logo src="/images/logo-w.png" width={100} height={100}/>
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-2 text-center">
                        <div className="font-bold text-green-600">Especies</div>
                        <ul className="flex-col flex gap-2">
                            <li className="hover:border-green-600 cursor-pointer hover:border-b-[1px]">Galeria</li>
                            <li className="hover:border-green-600 cursor-pointer hover:border-b-[1px]">Especies</li>
                            <li className="hover:border-green-600 cursor-pointer hover:border-b-[1px]">Planta tu arbol</li>
                            <li className="hover:border-green-600 cursor-pointer hover:border-b-[1px]">Guias y Consejos</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <div className="font-bold text-green-600">Viveros</div>
                        <ul className="flex-col flex gap-2">
                            <li className="hover:border-green-600 cursor-pointer hover:border-b-[1px]">Viveros</li>
                        </ul>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-center">
                        <div className="font-bold text-green-600">Nosotros</div>
                        <ul className="flex-col flex gap-2">
                            <li className="hover:border-green-600 cursor-pointer hover:border-b-[1px]">Mision / Vision</li>
                            <li className="hover:border-green-600 cursor-pointer hover:border-b-[1px]">Contactenos</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="text-center flex flex-col gap-5">
                <p>Con el apoyo de <span className="text-green-500 font-semibold">CIIFEN</span> y en colaboracion con <span className="text-green-500 font-semibold">Jardin Botanico de Guayaquil</span></p>
                <p>Copyright © 2023, Team Arbolista</p>
            </div>
        </div>
    );
};

export default Footer;