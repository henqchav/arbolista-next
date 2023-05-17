'use client'
interface HeroContainerProps {
    children: React.ReactNode;
}

const HeroContainer: React.FC<HeroContainerProps> = ({ children }) => {
    return (            
        <div className="
            relative
            w-full
            h-[50vh]
            flex
            overflow-hidden
            bg-black
        ">
            {children}
        </div>
    );
}

export default HeroContainer;