'use client';
import { BiImages } from 'react-icons/bi';
import { RiPlantLine } from 'react-icons/ri';
import HeroContainer from './components/HeroContainer';
import Button from './components/Button';

import Image from "next/image";

const Home = () => {
    const redirectGallery = () => {
        console.log('Redirecting to Gallery');
    }   

    return(
        <>
            <div className='w-full h-screen flex items-center bg-black justify-center'>
                <Image
                    alt='Hero Image'
                    src='/images/poster.jpg'
                    fill
                    className='object-cover w-full overflow-hidden z-0 absolute opacity-20 brightness-10 bg-black'
                    priority
                />
                <div className='z-10 max-w-screen-lg px-4'>
                    <div className='flex flex-col items-center gap-y-6 rounded-xl bg-white/80 p-6 shadow-lg text-center backdrop-blur-sm'>
                        <div className='font-semibold text-lg sm:text-md text-gray-700'>Especies Nativas de esta region</div>
                        <div className='text-3xl sm:text-2xl font-bold text-gray-800'>Conoce la variedad de especies en Guayaquil</div>
                        <div className='text-md sm:text-sm font-light text-gray-700'>Observa informacion clave de cada especie, como su nombre cientifico, como sembrarlas y como obtenerlas</div>
                        
                        <div className='flex flex-row gap-2 justify-center w-full'>
                            <Button label="Galeria" onClick={() => {}} icon={BiImages} />
                            <Button label="Especies" onClick={redirectGallery} icon={RiPlantLine}/>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-full flex flex-col items-center'>
                <div className='text-4xl font-bold text-gray-800 mt-10'>¿Que es Arbolista?</div>    
            </div>
        </>
    );
}

export default Home;