import Link from "next/link";
import Navigation from "./Navigation";
import Logo from "../Logo";
import Button from "../buttons/Button";
import { GiSeedling } from "react-icons/gi";

interface MenuItemsProps {
    showMenu: () => void;
    active: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({showMenu, active}) => {
    return (
        <div onClick={showMenu} className={
            active ? "w-full bg-black/40 transition absolute z-20 inset-0 right-1/4" : "hidden"}
            >
            <ul className={
                active ? "flex-col flex  absolute z-20 inset-0 right-1/4 bg-white backdrop-blur-lg gap-2 p-8 md:hidden text-center items-center" : "hidden"
            }>
                <div>
                    <Logo src="/images/logo-text.png" width={125} height={125}/>
                </div>                
                <hr className="border-green-600 w-full"/>
                <div className="my-3">
                    <Navigation orientation="vertical"/>
                </div>
                <hr className="border-green-600 w-full"/>

                <Button onClick={()=>{}} label="Planta tu árbol" style="w-full" icon={GiSeedling}/>
                <Link className="p-2 hover:opacity-90 bg-cyan-900 rounded-md w-full text-white" href={'/login'}>Iniciar sesion</Link>
                <Link href={'/register'}>Registrarse</Link>

            </ul>
        </div>
    );

}
export default MenuItems;