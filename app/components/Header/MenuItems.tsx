import Link from "next/link";
import Navigation from "./Navigation";
import Logo from "../Logo";

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
                active ? "flex-col flex  absolute z-20 inset-0 right-1/4 bg-white backdrop-blur-lg gap-4 p-8 md:hidden text-center items-center" : "hidden"
            }>
                <div>
                    <Logo src="/images/logo-text.png" />
                </div>
                <hr />
                
                <Navigation orientation="vertical"/>
            </ul>
        </div>
    );

}
export default MenuItems;