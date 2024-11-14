'use client'
import { FaArrowRight, FaGithub } from 'react-icons/fa6';
import Anchor from '../ui/anchor';
import Card from '../ui/card';
import { useTheme } from 'next-themes';

export default function Github() {
    const { theme } = useTheme();
    return (
        <Card className='relative flex h-full flex-col items-center justify-center bg-white dark:bg-dark-900'>
            <div className='absolute bottom-3 left-3'>
                <Anchor
                    className='cancel-drag'
                    href='https://github.com/JosePabloSG'
                    target='_blank'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>Github</span>
                </Anchor>
            </div>
            <FaGithub
                size='4rem'
                color={theme === 'dark' ? 'white' : 'black'}
            />
        </Card>
    );
}
