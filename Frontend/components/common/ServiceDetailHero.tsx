import { LucideIcon } from 'lucide-react';
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
                <Button variant="secondary" size="lg" to="/contact" showArrow>
                    Get Started Today
                </Button>
            </div>
        </HeroSection>
    );
}
