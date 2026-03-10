import { FileSearch, CheckCircle2, TrendingUp } from 'lucide-react';
import { ServiceDetailHero } from '@/components/common/ServiceDetailHero';
import Link from "next/link";

export function OnPageSEO() {
    const processSteps = [
        {
            title: "Keyword Research & Search Intent Analysis",
            features: [
                "Primary & secondary keyword research",
                "Search intent mapping",
                "Keyword-to-page alignment"
            ]
        },
        {
            title: "Content Optimization",
            features: [
                "Keyword placement optimization",
                "Semantic & NLP keyword integration",
                "Content readability & engagement improvement",
                "Content structure enhancement"
            ]
        },
        {
            title: "Title Tags & Meta Descriptions",
            features: [
                "SEO-friendly title tags",
                "Compelling meta descriptions",
                "CTR-focused optimization"
            ]
        },
        {
            title: "Heading Structure Optimization",
            features: [
                "H1, H2, H3 optimization",
                "Keyword-focused headings",
                "Clear content flow"
            ]
        },
        {
            title: "Internal Linking Strategy",
            features: [
                "Contextual internal links",
                "Silo-based structure",
                "Anchor text optimization"
            ]
        },
        {
            title: "External Authority Linking",
            features: [
                "Authority & niche-relevant sources",
                "Natural linking practices"
            ]
        },
        {
            title: "Image SEO Optimization",
            features: [
                "Alt text optimization",
                "Image compression",
                "SEO-friendly file naming"
            ]
        },
        {
            title: "URL & Technical On-Page Optimization",
            features: [
                "SEO-friendly URL structure",
                "Canonical tags",
                "Indexing & crawl optimization"
            ]
        }
    ];

    const benefits = [
        "Rank for the right keywords",
        "Attract qualified traffic",
        "Deliver a better user experience",
        "Convert visitors into customers"
    ];

    const results = [
        "Improved keyword rankings",
        "Higher organic traffic",
        "Better user engagement",
        "Increased conversion rates",
        "Strong SEO foundation for off-page growth"
    ];

    return (
        <div className="min-h-screen bg-white">
            <ServiceDetailHero
                icon={FileSearch}
                title="On-Page SEO Services"
                subtitle="Optimize Your Website for Higher Rankings, Better Traffic & More Conversions"
                description="At Link Harbor SEO, our On-Page SEO services are designed to build a strong foundation for long-term search engine success. We optimize every critical element of your website to ensure search engines can easily understand your content — and users stay engaged and convert. On-Page SEO is not just about keywords. It's about relevance, structure, user experience, and performance."
                gradient="from-blue-600 via-blue-700 to-indigo-800"
            />

            {/* What is On-Page SEO */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">🔍 What Is On-Page SEO?</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        On-Page SEO refers to optimizing individual web pages to improve search engine rankings and organic traffic.
                        This includes content optimization, HTML elements, internal linking, and technical on-page factors that directly
                        impact visibility and performance.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        When done correctly, On-Page SEO helps your website:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">🚀 Our On-Page SEO Process</h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        We follow a data-driven and structured approach to deliver measurable results.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">🔹 {step.title}</h3>
                                <ul className="space-y-2">
                                    {step.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
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
            <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">💡 Why Choose Link Harbor SEO for On-Page SEO?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "100% White-Hat SEO Techniques",
                            "Data-Driven Optimization",
                            "SEO + User Experience Focus",
                            "Transparent Process",
                            "Long-Term Ranking Results"
                        ].map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <span className="font-medium">{reason}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xl text-center text-blue-100">
                        We don't apply generic fixes. Every optimization is custom-tailored to your website and goals.
                    </p>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">📈 Results You Can Expect</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {results.map((result, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100">
                                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium text-lg">{result}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Ready to Optimize Your Website?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Let's turn your website into a high-performing SEO asset.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-xl"
                        >
                            Request a Free On-Page SEO Audit
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
                        >
                            Talk to an SEO Expert Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
