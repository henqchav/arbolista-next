'use client';
import Image from 'next/image';
import Carousel from '../components/carousel/Carousel';

const HeroContainer = () => {
    const images = [
        {
            src: '/images/poster.jpg',
            alt: 'poster',
            title: 'Conoce la variedad de arboles nativos en Guayaquil',
            subtitle: 'Especies nativas de esta region',
            description: 'Observa informacion clave de cada especie, como su nombre cientifico, como sembrarlas y como obtenerlas',
        },
        {
            src: '/images/poster.jpg',
            alt: 'poster2',
            title: 'Conoce la variedad de arboles nativos en Guayaquil',
            subtitle: 'Especies nativas de esta region',
            description: 'Observa informacion clave de cada especie, como su nombre cientifico, como sembrarlas y como obtenerlas',
        },
    ]
    const redirectGallery = () => {
        window.location.href = '/galeria';
    }
    const redirectSpecies = () => {
        window.location.href = '/especies';
    }
    return (
        <div className='w-full h-[91vh] relative'>
            <Carousel>
                {images.map((image, index) => (
                <div className="embla__slide flex justify-center md:items-end items-center" key={index}>
                    <div className="embla__slide__number flex flex-col items-center gap-y-6 rounded-xl bg-white/70 p-4 md:w-[60%] w-[80%] mb-20 shadow-lg">
                        <h2 className='font-semibold md:text-lg lg:text-xl text-md text-gray-700'>{image.subtitle}</h2>
                        <h1 className='lg:text-4xl md:text-3xl text-xl font-bold text-gray-800'>{image.title}</h1>
                        <p className='lg:text-lg md:text-md text-sm text-gray-700'>{image.description}</p>
                    </div>
                    <Image
                        className="brightness-50"
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority
                    />
                </div>
                ))}
            </Carousel>
        </div>
    );
}
export default HeroContainer;