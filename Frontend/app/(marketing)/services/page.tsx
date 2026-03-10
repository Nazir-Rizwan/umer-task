import HeroSection from "@/components/common/HeroSection";
import { ServiceCard } from "@/components/ServicesCard";
import { services } from "@/data/services";

export const metadata = {
    title: "Our Services | Link Harbor SEO",
    description: "Complete SEO & Digital Marketing Solutions to Grow Your Business",
};




export default function ServicesPage() {
    return (
        <>
            <HeroSection
                variant="services"
                icon={null}
                title="Our Services"
                subtitle="Complete SEO & Digital Marketing Solutions to Grow Your Business"
            />
            {/* CTA Section */}
            <section className="py-16 px-6 bg-gray-50 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Ready to Grow Your Business?</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Let&apos;s build a custom SEO strategy tailored to your goals.
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-indigo-700 transition-colors text-sm"
                >
                    Get a Free SEO Audit →
                </a>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Not Sure Which Service You Need?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's discuss your goals and create a custom strategy for your business.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:scale-105"
                    >
                        <span>Get a Free Consultation</span>
                    </a>
                </div>
            </section>
        </>
    );
}