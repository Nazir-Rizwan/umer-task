import { ImageWithFallback } from './figma/ImageWithFallback';
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
                            {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1630344745908-ed5ffd73199a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcxNDQyNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Growth"
                className="w-full h-full object-cover"
              /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
