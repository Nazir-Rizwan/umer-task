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
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80"
                                alt="Professional SEO team delivering results"
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-2xl font-bold">Proven Expertise</p>
                                <p className="text-sm text-white/80">Trusted by 100+ businesses worldwide</p>
                            </div>
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
