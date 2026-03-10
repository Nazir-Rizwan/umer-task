import { TrendingUp, CheckCircle2 } from 'lucide-react';
import { ServiceDetailHero } from '@/components/common/ServiceDetailHero';
import Link from "next/link";

export function DigitalMarketing() {
    const services = [
        {
            title: "Search Engine Optimization (SEO) Integration",
            description: "Our digital marketing campaigns are fully aligned with SEO strategies to improve visibility and rankings.",
            features: [
                "On-Page SEO improvements",
                "Off-Page SEO and link building integration",
                "Content optimization for marketing campaigns"
            ]
        },
        {
            title: "Content Marketing",
            description: "We create compelling content that engages your audience and supports your business goals.",
            features: [
                "Blog writing & article creation",
                "Landing page content",
                "Infographics & visual content",
                "Social media content campaigns"
            ]
        },
        {
            title: "Social Media Marketing",
            description: "Grow your brand and reach your target audience on popular social platforms.",
            features: [
                "Strategy planning & account management",
                "Organic growth & engagement campaigns",
                "Paid social advertising campaigns (Facebook, Instagram, LinkedIn, etc.)",
                "Audience targeting & performance tracking"
            ]
        },
        {
            title: "Pay-Per-Click (PPC) Advertising",
            description: "Drive immediate traffic and conversions with highly targeted paid campaigns.",
            features: [
                "Google Ads & Bing Ads campaigns",
                "Keyword & competitor research",
                "Ad copywriting & design",
                "Campaign tracking & optimization"
            ]
        },
        {
            title: "Email Marketing",
            description: "Nurture leads, retain customers, and drive conversions through personalized email campaigns.",
            features: [
                "List segmentation & targeting",
                "Campaign design & automation",
                "Performance tracking & reporting",
                "ROI-focused email strategies"
            ]
        },
        {
            title: "Analytics & Reporting",
            description: "We measure everything to continuously optimize campaigns and deliver maximum ROI.",
            features: [
                "Website & campaign analytics",
                "Conversion tracking",
                "Monthly performance reports",
                "Data-driven recommendations"
            ]
        }
    ];

    const benefits = [
        "Expanding online visibility",
        "Attracting targeted traffic",
        "Engaging your audience effectively",
        "Driving more leads and sales"
    ];

    const results = [
        "Increased brand visibility",
        "Higher website traffic",
        "Stronger audience engagement",
        "More qualified leads & sales",
        "Long-term online growth"
    ];

    return (
        <div className="min-h-screen bg-white">
            <ServiceDetailHero
                icon={TrendingUp}
                title="Digital Marketing Services"
                subtitle="Grow Your Brand, Increase Traffic & Boost Conversions"
                description="At Link Harbor SEO, our Digital Marketing services are designed to help businesses expand their online presence, reach the right audience, and turn traffic into paying customers. We combine data-driven strategies, creativity, and technology to deliver measurable results for your business. Whether you are a startup, SME, or established brand, we create tailored campaigns that fit your goals and target audience."
                gradient="from-pink-600 via-pink-700 to-red-800"
            />

            {/* What is Digital Marketing */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">🔍 What Is Digital Marketing?</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Digital Marketing is a broad strategy that leverages online channels to promote your business, engage your audience,
                        and drive conversions. Unlike traditional marketing, digital marketing allows you to track results, measure ROI,
                        and continuously optimize campaigns for maximum impact.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Key benefits include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-pink-50 p-4 rounded-lg border border-pink-100">
                                <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">🚀 Our Digital Marketing Services</h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        We offer a complete suite of digital marketing solutions that work hand-in-hand with SEO to maximize results.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">🔹 {service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-pink-600 mt-1 flex-shrink-0">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-pink-900 to-red-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">💡 Why Choose Link Harbor SEO for Digital Marketing?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "Custom campaigns tailored to your business goals",
                            "Integrated approach with SEO for long-term growth",
                            "Data-driven strategies with measurable results",
                            "Transparent reporting & tracking",
                            "Conversion-focused & ROI-oriented"
                        ].map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <span className="font-medium">{reason}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xl text-center text-pink-100">
                        We don't rely on guesswork — every campaign is built using insights, strategy, and proven techniques.
                    </p>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">📈 Results You Can Expect</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {results.map((result, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-pink-50 to-red-50 p-5 rounded-lg border border-pink-100">
                                <TrendingUp className="w-6 h-6 text-pink-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium text-lg">{result}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-gradient-to-br from-pink-600 to-red-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Ready to Grow Your Business Online?</h2>
                    <p className="text-xl mb-8 text-pink-100">
                        Let's create a digital marketing strategy that delivers real results for your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-pink-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-xl"
                        >
                            Request a Free Digital Marketing Consultation
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-pink-600 transition-all"
                        >
                            Talk to an Expert Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
