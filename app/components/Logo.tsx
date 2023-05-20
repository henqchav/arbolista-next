'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LogoProps {
    height?: number;
    width?: number;
    src?: string;
}

const Logo: React.FC<LogoProps> = ({
    height,
    width,
    src,
}) => {
    const router = useRouter();
    return (
        <Image 
            alt='Logo'
            priority
            onClick={() => router.push('/')}
            className="md:block cursor-pointer" 
            height={height || 75}
            width={width || 75}
            src={src || '/images/logo-text.png'}
        />
    );
}

export default Logo;