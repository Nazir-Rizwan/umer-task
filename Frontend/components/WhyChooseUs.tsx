import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
    const benefits = [
        "100% White-Hat SEO & Ethical Marketing",
        "Data-Driven, Result-Oriented Strategies",
        "Transparent Reporting & Communication",
        "Long-Term SEO & Digital Growth Focus",
        "Professional Team Dedicated to Your Success"
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                {/* <Image
                                    src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBzdHJhdGVneSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzE0NDI1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="SEO Strategy"
                                    className="w-full h-full object-cover"
                                /> */}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                            We don't just improve rankings; we help businesses grow online sustainably.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
