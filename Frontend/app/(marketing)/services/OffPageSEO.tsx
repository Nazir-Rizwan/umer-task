import { Link2, CheckCircle2, TrendingUp } from 'lucide-react';
import { ServiceDetailHero } from '@/components/common/ServiceDetailHero';
import Link from "next/link";

export function OffPageSEO() {
    const services = [
        {
            title: "Quality Backlink Acquisition",
            description: "We focus on earning backlinks from high-authority, niche-relevant websites to boost your domain strength.",
            features: [
                "Manual outreach to authoritative websites",
                "Contextual and permanent do-follow links",
                "Safe, white-hat link building practices",
                "Clean anchor text strategy"
            ]
        },
        {
            title: "Brand Mentions & Online Reputation",
            description: "Your brand's online presence is more than just backlinks. We strengthen your trust signals across the web.",
            features: [
                "Brand mentions on trusted websites",
                "Citation building & profile optimization",
                "Social signals integration",
                "Reputation management guidance"
            ]
        },
        {
            title: "Competitor Backlink Analysis",
            description: "We analyze competitors' backlink profiles to identify opportunities your website can capitalize on.",
            features: [
                "Identify high-value link sources",
                "Detect backlink gaps",
                "Plan outreach strategy for maximum impact"
            ]
        },
        {
            title: "Long-Term Link Profile Growth",
            description: "We focus on building a natural, safe, and sustainable backlink profile for lasting SEO success.",
            features: [
                "Diverse link sources (blogs, directories, media mentions)",
                "Gradual growth strategy",
                "Avoid penalties & spammy tactics"
            ]
        },
        {
            title: "Content Promotion for Backlinks",
            description: "High-quality content deserves authority. We promote your content to earn backlinks naturally.",
            features: [
                "Guest blogging & resource link outreach",
                "Infographic & visual content promotion",
                "Collaboration with niche influencers"
            ]
        }
    ];

    const benefits = [
        "Gain higher domain authority",
        "Earn quality backlinks",
        "Build online trust and reputation",
        "Improve keyword rankings"
    ];

    const results = [
        "Stronger domain authority",
        "Higher search engine rankings",
        "Increased referral traffic",
        "Enhanced brand reputation",
        "Sustainable long-term growth"
    ];

    return (
        <div className="min-h-screen bg-white">
            <ServiceDetailHero
                icon={Link2}
                title="Off-Page SEO Services"
                subtitle="Build Authority, Boost Rankings & Strengthen Your Online Presence"
                description="At Link Harbor SEO, our Off-Page SEO services focus on improving your website's authority, trustworthiness, and visibility across the web. While On-Page SEO optimizes your website, Off-Page SEO ensures other websites and platforms recognize your brand as an authority, helping you climb search engine rankings faster. Off-Page SEO is the key to long-term, sustainable SEO growth and higher organic traffic."
                gradient="from-indigo-600 via-indigo-700 to-purple-800"
            />

            {/* What is Off-Page SEO */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">🔍 What Is Off-Page SEO?</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Off-Page SEO refers to actions taken outside of your website that impact your search engine rankings.
                        It's all about building authority, credibility, and relevance through high-quality backlinks, social signals,
                        and online mentions.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        With proper Off-Page SEO, your website can:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">🚀 Our Off-Page SEO Services</h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        We follow a white-hat, ethical approach to improve your website's authority and reach.
                    </p>

                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">🔹 {service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-indigo-600 mt-1 flex-shrink-0">✓</span>
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
            <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">💡 Why Choose Link Harbor SEO for Off-Page SEO?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "100% White-Hat SEO Techniques",
                            "High-Quality, Niche-Relevant Backlinks",
                            "Ethical & Sustainable Authority Building",
                            "Transparent Process & Reporting",
                            "Long-Term SEO Growth"
                        ].map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <span className="font-medium">{reason}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xl text-center text-purple-100">
                        We don't build spammy links. We grow your authority safely, ensuring rankings that last.
                    </p>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">📈 Results You Can Expect</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {results.map((result, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-lg border border-indigo-100">
                                <TrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium text-lg">{result}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Ready to Boost Your Website Authority?</h2>
                    <p className="text-xl mb-8 text-purple-100">
                        Turn your website into a trusted authority in your industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-indigo-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-xl"
                        >
                            Request a Free Off-Page SEO Audit
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all"
                        >
                            Talk to an SEO Expert Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
