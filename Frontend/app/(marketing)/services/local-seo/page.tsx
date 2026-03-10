import { MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { ServiceDetailHero } from '@/components/common/ServiceDetailHero';
import Link from "next/link";

export default function LocalSEO() {
    const services = [
        {
            title: "Google My Business Optimization",
            description: "We create and optimize your GMB profile to maximize local visibility.",
            features: [
                "Complete GMB profile setup",
                "Accurate business name, address, and phone number (NAP)",
                "Optimized business description & categories",
                "Adding images, videos, and posts",
                "Managing reviews and reputation"
            ]
        },
        {
            title: "Local Business Listings",
            description: "We submit and optimize your business information across multiple trusted local directories.",
            features: [
                "Major directories (Yellow Pages, Bing Places, Yelp, Foursquare, etc.)",
                "Consistent NAP across all platforms",
                "Category optimization",
                "Citation building to strengthen local authority"
            ]
        },
        {
            title: "Local SEO Strategy",
            description: "We ensure your business ranks for geo-targeted keywords in your area.",
            features: [
                "Location-based keyword research",
                "Competitor analysis for local searches",
                "Optimized landing pages for each location (if applicable)",
                "Integration with Google Maps"
            ]
        },
        {
            title: "Review & Reputation Management",
            description: "Customer reviews impact local search rankings and trust. We help you manage and improve your online reputation.",
            features: [
                "Monitoring reviews on GMB & directories",
                "Encouraging positive reviews",
                "Responding to reviews professionally",
                "Addressing negative feedback to improve trust"
            ]
        }
    ];

    const benefits = [
        "Increase visibility in local searches",
        "Drive more calls, website visits, and directions",
        "Improve credibility and trust with customers",
        "Enhance your local SEO performance"
    ];

    const results = [
        "Higher rankings in local search results",
        "Increased website visits, calls, and directions",
        "Stronger local authority and credibility",
        "More qualified leads from your area",
        "Better customer trust & engagement"
    ];

    return (
        <div className="min-h-screen bg-white">
            <ServiceDetailHero
                icon={MapPin}
                title="Business Listing & GMB Optimization"
                subtitle="Improve Local Visibility, Attract Customers & Grow Your Business"
                description="At Link Harbor SEO, our Business Listing & Google My Business (GMB) services help businesses dominate local search results, attract more customers, and increase foot traffic. Whether you run a small local shop, a service-based business, or a growing company, local SEO ensures that your business is found when it matters most."
                variant="localSEO"
            />

            {/* What is Business Listing & GMB */}
            < section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">🔍 What Is Business Listing & GMB Optimization?</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Business Listings are online profiles of your business on directories, search engines, and local platforms,
                        while GMB optimization ensures your business appears in Google Maps and local search results with complete,
                        accurate, and attractive information.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Optimizing these listings helps:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-teal-50 p-4 rounded-lg border border-teal-100">
                                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">🚀 Our Business Listing & GMB Services</h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        We provide end-to-end local SEO solutions that ensure your business stands out in local searches.
                    </p>

                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">🔹 {service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-teal-600 mt-1 flex-shrink-0">✓</span>
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
            <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-teal-900 to-green-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">💡 Why Choose Link Harbor SEO for Business Listings & GMB?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "Boost local visibility & traffic",
                            "Accurate & optimized business information",
                            "Better rankings in Google Maps & local search",
                            "Reputation management & review optimization",
                            "Professional, ethical, and results-driven"
                        ].map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <span className="font-medium">{reason}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xl text-center text-teal-100">
                        We focus on making your business visible to the right audience at the right time.
                    </p>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">📈 Results You Can Expect</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {results.map((result, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-teal-50 to-green-50 p-5 rounded-lg border border-teal-100">
                                <TrendingUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium text-lg">{result}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-gradient-to-br from-teal-600 to-green-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Ready to Grow Your Local Business?</h2>
                    <p className="text-xl mb-8 text-teal-100">
                        Let us help you dominate local search results and attract more customers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-teal-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-xl"
                        >
                            Request a Free Local SEO Audit
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-all"
                        >
                            Talk to a Local SEO Expert Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
