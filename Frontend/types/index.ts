export type GradientVariant = "home" | "about" | "services" | "contact" | "localSEO";

export interface NavItem {
    label: string;
    href: string;
}

export interface FeatureCard {
    icon: string;
    title: string;
}

export interface ServiceCard {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

export interface HeroSectionProps {
    variant: GradientVariant;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description?: string;
    children?: React.ReactNode;
}