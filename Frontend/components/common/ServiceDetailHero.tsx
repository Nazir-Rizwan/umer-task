import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import HeroSection from './HeroSection';
import { Button } from '@/components/ui/button';
import { GradientVariant } from '@/types/index';

interface ServiceDetailHeroProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    variant: GradientVariant;
}

export function ServiceDetailHero({ icon: Icon, title, subtitle, description, variant }: ServiceDetailHeroProps) {
    return (
        <HeroSection
            variant={variant}
            icon={<Icon className="w-8 h-8" />}
            title={title}
            subtitle={subtitle}
            description={description}
        >
            <div className="text-center">
                <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">
                        Get Started Today
                    </Link>
                </Button>
            </div>
        </HeroSection>
    );
}
