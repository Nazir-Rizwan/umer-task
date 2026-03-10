import { CheckCircle2 } from 'lucide-react';

interface FeatureListProps {
    features: string[];
    columns?: 1 | 2 | 3;
    iconColor?: string;
    className?: string;
}

export function FeatureList({
    features,
    columns = 1,
    iconColor = 'text-blue-600',
    className = ''
}: FeatureListProps) {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    };

    return (
        <ul className={`grid ${gridCols[columns]} gap-3 ${className}`}>
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    );
}
