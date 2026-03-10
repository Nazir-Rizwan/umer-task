import { LucideIcon } from 'lucide-react';

interface IconBoxProps {
    icon: LucideIcon;
    gradient?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function IconBox({
    icon: Icon,
    gradient = 'from-blue-600 to-indigo-600',
    size = 'md',
    className = ''
}: IconBoxProps) {
    const sizes = {
        sm: { box: 'w-12 h-12', icon: 'w-6 h-6' },
        md: { box: 'w-16 h-16', icon: 'w-8 h-8' },
        lg: { box: 'w-20 h-20', icon: 'w-10 h-10' },
    };

    return (
        <div className={`flex-shrink-0 ${sizes[size].box} bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center ${className}`}>
            <Icon className={`${sizes[size].icon} text-white`} />
        </div>
    );
}
