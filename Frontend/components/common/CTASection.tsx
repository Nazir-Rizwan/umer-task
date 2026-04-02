import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTASectionProps {
    title: string;
    description: string;
    primaryButton?: {
        text: string;
        to?: string;
        href?: string;
    };
    secondaryButton?: {
        text: string;
        to?: string;
        href?: string;
    };
    gradient?: string;
    children?: ReactNode;
}

export function CTASection({
    title,
    description,
    primaryButton,
    secondaryButton,
    gradient = 'from-blue-600 via-indigo-600 to-purple-700',
    children
}: CTASectionProps) {
    return (
        <section className={`py-16 md:py-20 px-6 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                    {title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-10">
                    {description}
                </p>

                {(primaryButton || secondaryButton) && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {primaryButton && (
                            <Button
                                variant="secondary"
                                size="lg"

                            >
                                <Link href={primaryButton.href || primaryButton.to || '#'}>
                                    {primaryButton.text}
                                </Link>
                            </Button>
                        )}

                        {secondaryButton && (
                            <Button
                                variant="outline"
                                size="lg"

                            >
                                <Link href={secondaryButton.href || secondaryButton.to || '#'}>
                                    {secondaryButton.text}
                                </Link>
                            </Button>
                        )}
                    </div>
                )}

                {children}
            </div>
        </section>
    );
}
