'use client';

import Container from "../Container"
import Logo from "../Logo"
import Search from "./Search"
import Navigation from "./Navigation"
import UserMenu from "./UserMenu"
import { SafeUser } from "@/app/types";

interface HeaderProps {
    currentUser?: SafeUser | null | undefined;
}

const Header: React.FC<HeaderProps> = ({
    currentUser,
}) => {
    return (
        <div className="relative w-full bg-white z-10 shadow-sm">
            <div className="
                py-4
                border-b-[1px]
            ">
                <Container>
                    <div className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                        w-full
                    ">
                        <Logo src="/images/logo-text.png" />
                        <Search />
                        <Navigation />
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Header;