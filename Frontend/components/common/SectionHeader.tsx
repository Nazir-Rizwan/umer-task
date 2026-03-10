// components/common/SectionHeader.tsx

import { ReactNode } from "react";

interface SectionHeaderProps {
    icon?: ReactNode;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export default function SectionHeader({
    icon,
    title,
    subtitle,
    align = "center",
}: SectionHeaderProps) {
    const alignment = align === "center" ? "text-center mx-auto" : "text-left";

    return (
        <div className={`${alignment} max-w-4xl`}>
            {/* Main Heading */}
            <div className="flex items-center justify-center gap-3 mb-6">
                {icon && (
                    <div className="text-3xl md:text-4xl">
                        {icon}
                    </div>
                )}
                <h2 className="text-4xl md:text-5xl font-bold ">
                    {title}
                </h2>
            </div>

            {/* Subtitle */}
            {subtitle && (
                <p className="text-2xl text-blue-100 mb-12">
                    {subtitle}
                </p>
            )}
        </div>
    );
}