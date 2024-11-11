import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../ui/card';

export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative size-14 overflow-hidden rounded-full sm:size-16'>
                <Image
                    src={profile}
                    alt='JosePabloSG'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <p className='text-balance leading-relaxed'>
                Hola soy, <span className='font-calistoga text-xl'>José Pablo</span>
                , un desarrollador de software de Costa Rica. Mi meta es ser desarrollador frontend.{' '}
                <span className='hidden md:inline'>
                    Me encanta nextjs, tailwindcss, typescript, y astro.
                </span>
            </p>
        </Card>
    );
}
