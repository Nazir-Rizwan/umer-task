import { Eye, Sparkles } from 'lucide-react';

export function VisionSection() {
    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 -z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-6">
                            <Eye className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                            <Sparkles className="w-8 h-8 text-blue-600 mb-4" />
                            <p className="text-xl text-gray-800 leading-relaxed">
                                To become a leading global SEO and digital marketing agency known for delivering
                                <span className="font-semibold text-blue-600"> transparent</span>,
                                <span className="font-semibold text-blue-600"> innovative</span>, and
                                <span className="font-semibold text-blue-600"> results-driven solutions</span> that
                                help businesses thrive online.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                                <div className="text-sm text-gray-600">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-sm text-gray-600">Projects Done</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                                <div className="text-sm text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                alt="Vision — business growth analytics"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-sm">
                            🚀 Future-Ready Strategy
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
