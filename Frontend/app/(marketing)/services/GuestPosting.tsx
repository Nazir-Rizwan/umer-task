import { FileEdit, CheckCircle2, TrendingUp, XCircle } from 'lucide-react';
import { ServiceDetailHero } from '@/components/common/ServiceDetailHero';
import Link from "next/link";

export function GuestPosting() {
    const niches = [
        "Technology & Software",
        "Business & Finance",
        "Home Improvement & Renovation",
        "Real Estate & Construction",
        "Fashion & Lifestyle",
        "Education & Learning",
        "Food & Beverage",
        "Travel & Tourism",
        "Automotive & Transportation",
        "Logistics & Supply Chain"
    ];

    const exclusions = [
        "Gambling",
        "Casino",
        "Adult Content",
        "Betting",
        "Dating"
    ];

    const benefits = [
        "Improve your website's authority and trust",
        "Drive targeted referral traffic",
        "Strengthen your backlink profile naturally"
    ];

    const results = [
        "Stronger domain authority",
        "Higher search engine rankings",
        "Targeted referral traffic",
        "Improved brand credibility",
        "Long-term, sustainable SEO growth"
    ];

    return (
        <div className="min-h-screen bg-white">
            <ServiceDetailHero
                icon={FileEdit}
                title="Guest Posting & Niche Edit Services"
                subtitle="High-Quality Backlinks Across Multiple Niches"
                description="At Link Harbor SEO, our Guest Posting & Niche Edit services are designed to help your website earn high-quality, authoritative backlinks that improve search engine rankings, referral traffic, and brand credibility. We work across a wide variety of industries and niches, helping businesses grow safely and sustainably."
                gradient="from-purple-600 via-purple-700 to-pink-800"
            />

            {/* What is Guest Posting & Niche Edit */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">🔍 What Is Guest Posting & Niche Edit?</h2>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Guest Posting</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Guest Posting involves creating and publishing high-quality content on authoritative websites in your niche,
                            including backlinks to your website.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Niche Edits (Link Insertions)</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Niche Edits involve placing backlinks in existing, indexed content on relevant, authoritative websites.
                        </p>
                    </div>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        These strategies are essential for Off-Page SEO because they:
                    </p>

                    <div className="space-y-3">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg border border-purple-100">
                                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">🚀 Our Guest Posting & Niche Edit Services</h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        We provide a full-service, ethical backlink strategy that guarantees quality and relevance.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Guest Posting */}
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔹 Guest Posting</h3>
                            <p className="text-gray-600 mb-6">
                                We create and publish original content on authoritative websites in your industry:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Manual outreach to niche-relevant websites",
                                    "Engaging, high-quality content creation",
                                    "Permanent do-follow backlinks",
                                    "Strategic anchor text placement",
                                    "Targeted outreach to maximize SEO impact"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-purple-600 mt-1 flex-shrink-0">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Niche Edits */}
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔹 Niche Edits (Link Insertion)</h3>
                            <p className="text-gray-600 mb-6">
                                We place backlinks into existing high-quality articles, leveraging their authority to boost your website's ranking:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Aged & indexed articles",
                                    "Contextual backlink placements",
                                    "Natural anchor text optimization",
                                    "100% safe, white-hat strategies"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-purple-600 mt-1 flex-shrink-0">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries & Niches */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">🌐 Industries & Niches We Serve</h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        We work with a wide range of niches, including but not limited to:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {niches.map((niche, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
                                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{niche}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-red-900 mb-2">Industries We Do NOT Work With:</h3>
                                <p className="text-gray-700">
                                    We do NOT work with gambling, casino, adult, betting, dating, or any other unethical industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">💡 Why Choose Link Harbor SEO for Guest Posting & Niche Edits?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "Ethical, white-hat link building",
                            "High-quality, niche-relevant backlinks",
                            "Permanent and indexed links",
                            "Manual outreach & strategic placements",
                            "Transparent reporting & tracking"
                        ].map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <span className="font-medium">{reason}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xl text-center text-purple-100">
                        Every link is carefully selected to ensure maximum SEO impact without risking penalties.
                    </p>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">📈 Results You Can Expect</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {results.map((result, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-100">
                                <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-800 font-medium text-lg">{result}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-gradient-to-br from-purple-600 to-pink-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Ready to Boost Your Website Authority?</h2>
                    <p className="text-xl mb-8 text-purple-100">
                        Let us help you build a powerful backlink profile and improve your rankings safely.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-purple-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-xl"
                        >
                            Request a Free Backlink Audit
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all"
                        >
                            Talk to an SEO Expert Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
