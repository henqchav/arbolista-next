'use client';
import Image from 'next/image';

import { BiImages } from 'react-icons/bi';
import { RiPlantLine } from 'react-icons/ri';

const HeroContainer = () => {
    const redirectGallery = () => {
        window.location.href = '/galeria';
    }
    const redirectSpecies = () => {
        window.location.href = '/especies';
    }
    return (
        <div className='w-full h-[80vh] relative flex items-center justify-center'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image 
                    src="/images/poster.jpg"
                    fill
                    className='object-cover brightness-50'
                    alt='Poster'
                    priority             
                />
            </div>
            <div className='z-10 max-w-screen-lg px-4'>
                <div className='flex flex-col items-center gap-y-6 rounded-xl bg-white/80 p-6 shadow-lg text-center backdrop-blur-sm'>
                    <div className='font-semibold md:text-lg text-md text-gray-700'>Especies Nativas de esta region</div>
                    <div className='md:text-3xl text-xl font-bold text-gray-800'>Conoce la variedad de especies en Guayaquil</div>
                    <div className='md:text-md text-sm font-light text-gray-700'>Observa informacion clave de cada especie, como su nombre cientifico, como sembrarlas y como obtenerlas</div>
                    <div className='flex flex-row justify-center w-full'>
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={redirectGallery}>
                            <BiImages className="w-5 h-5 md:mr-2 md:-ml-1"/>
                            <span>Galeria</span>
                        </button>
                        <button type="button" onClick={redirectSpecies} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            <RiPlantLine className="w-5 h-5 md:mr-2 md:-ml-1"/>
                            <span>Especies</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroContainer;