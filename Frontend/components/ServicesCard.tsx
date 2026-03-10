import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card } from './ui/card';
import { IconBox } from './common/IconBox';
import { FeatureList } from './FeatureList';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    link: string;
    gradient: string;
    features?: string[];
}

export function ServiceCard({ icon, title, description, link, gradient, features }: ServiceCardProps) {
    return (
        <Card className="px-4 h-full flex flex-col">
            <div className="flex items-start gap-4 mb-6">
                <IconBox icon={icon} gradient={gradient} size="md" className="group-hover:scale-110 transition-transform" />
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                </div>
            </div>

            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>

            {features && features.length > 0 && (
                <div className="mb-6">
                    <FeatureList
                        features={features.slice(0, 4)}
                        columns={1}
                        className="text-sm"
                    />
                </div>
            )}

            <Link
                href={link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all mt-auto group"
            >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </Card>
    );
}
