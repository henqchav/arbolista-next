'use client';
import { BiImages } from 'react-icons/bi';
import { RiPlantLine } from 'react-icons/ri';
import ClientOnly from '@/app/components/ClientOnly';
//import getCurrentUser from "@/app/actions/getCurrentUser";
import { useRouter } from 'next/navigation';
import Button from './components/buttons/Button';
import Image from 'next/image';

const Home = () => {
    //const currentUser = await getCurrentUser();
    const router = useRouter();

    return(
        <>
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
                        <div className='font-semibold text-lg sm:text-md text-gray-700'>Especies Nativas de esta region</div>
                        <div className='text-3xl sm:text-2xl font-bold text-gray-800'>Conoce la variedad de especies en Guayaquil</div>
                        <div className='text-md sm:text-sm font-light text-gray-700'>Observa informacion clave de cada especie, como su nombre cientifico, como sembrarlas y como obtenerlas</div>
                        <div className='flex flex-row gap-2 justify-center w-full'>
                            <Button label="Galeria" onClick={() => router.push('/galeria') } icon={BiImages} />
                            <Button label="Especies" onClick={()=>router.push('/especies')} icon={RiPlantLine}/>
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