import { ReactNode } from 'react';

interface ContainerSectionProps {
    children: ReactNode;
    className?: string;
    background?: 'white' | 'gray' | 'gradient-dark' | 'gradient-light';
    padding?: 'normal' | 'small' | 'large' | 'none';
    containerSize?: 'default' | 'small' | 'large' | 'full';
}

export function ContainerSection({
    children,
    className = '',
    background = 'white',
    padding = 'normal',
    containerSize = 'default'
}: ContainerSectionProps) {
    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        'gradient-dark': 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white',
        'gradient-light': 'bg-gradient-to-br from-blue-50 to-indigo-50',
    };

    const paddings = {
        none: '',
        small: 'py-12 px-6',
        normal: 'py-20 px-6',
        large: 'py-28 px-6',
    };

    const containers = {
        full: 'w-full',
        small: 'max-w-4xl mx-auto',
        default: 'max-w-6xl mx-auto',
        large: 'max-w-7xl mx-auto',
    };

    return (
        <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
            <div className={containers[containerSize]}>
                {children}
            </div>
        </section>
    );
}
