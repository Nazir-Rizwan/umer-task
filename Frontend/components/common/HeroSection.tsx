// components/ui/HeroSection.tsx
import React from "react";
import { GradientVariant } from "@/types/index";

const GRADIENT_CLASSES: Record<GradientVariant, string> = {
    home: "from-[#3535e8] via-[#5535e8] to-[#8b3de8]",
    about: "from-blue-600 via-blue-700 to-indigo-800",
    services: "from-blue-600 via-indigo-700 to-purple-800",
    contact: "from-indigo-600 via-purple-700 to-blue-800",
    localSEO: "from-teal-600 via-teal-700 to-green-800",
};

interface HeroSectionProps {
    variant: GradientVariant;
    icon?: React.ReactNode;
    title: string;
    subtitle: string;
    description?: string;
    secondDescription?: string;
    children?: React.ReactNode;
}

export default function HeroSection({
    variant,
    icon,
    title,
    subtitle,
    description,
    secondDescription,
    children,
}: HeroSectionProps) {
    return (
        <section
            className={`relative w-full bg-gradient-to-br ${GRADIENT_CLASSES[variant]} pt-32 pb-24 px-6 text-center text-white overflow-hidden`}
        >
            {/* Icon badge */}
            {icon && (
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                    {icon}
                </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto">
                {subtitle}
            </p>

            {/* Optional descriptions */}
            {(description || secondDescription) && (
                <div className="max-w-2xl mx-auto space-y-4 text-white/80 text-sm md:text-base">
                    {description && <p>{description}</p>}
                    {secondDescription && <p>{secondDescription}</p>}
                </div>
            )}

            {/* Slot for extra content */}
            {children && <div className="mt-8">{children}</div>}

            {/* Wave bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}