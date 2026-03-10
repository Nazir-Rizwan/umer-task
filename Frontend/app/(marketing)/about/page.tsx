import React from 'react'
import Anchor from 'lucide-react/dist/esm/icons/anchor';
import { Target, TrendingUp, Users, BarChart, Award } from 'lucide-react';
import { CheckCircle, Search, Link2, FileText, Globe, MapPin } from 'lucide-react';
import { Rocket, BarChart3 } from 'lucide-react';
const page = () => {
    // mission section 
    const goals = [
        { icon: TrendingUp, text: "Boost search engine rankings" },
        { icon: Users, text: "Increase qualified website traffic" },
        { icon: Award, text: "Strengthen online authority and credibility" },
        { icon: BarChart, text: "Deliver measurable ROI for every client" }
    ];

    // whoe we are section will be started here
    const services = [
        { icon: Search, text: "On-Page SEO & Technical Optimization" },
        { icon: Link2, text: "Off-Page SEO & Link Building" },
        { icon: FileText, text: "Guest Posting & Niche Edits" },
        { icon: Globe, text: "Digital Marketing & Content Strategy" },
        { icon: MapPin, text: "Business Listing & GMB Optimization" }
    ];

    // Our Approach component will be started here
    const steps = [
        {
            icon: Search,
            title: "Analysis & Strategy",
            description: "We start by understanding your business, competitors, and audience.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Rocket,
            title: "Implementation",
            description: "Our team executes SEO, link building, and digital marketing campaigns with precision.",
            color: "from-indigo-500 to-indigo-600"
        },
        {
            icon: BarChart3,
            title: "Monitoring & Optimization",
            description: "We continuously track results, optimize strategies, and ensure maximum ROI.",
            color: "from-purple-500 to-purple-600"
        }
    ];


    return (
        <div>

            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                            <Anchor className="w-12 h-12" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
                        About Us
                    </h1>

                    <p className="text-xl md:text-2xl text-center text-blue-100 max-w-3xl mx-auto">
                        Your Trusted Partner for SEO & Digital Growth
                    </p>

                    <div className="mt-12 max-w-4xl mx-auto">
                        <p className="text-lg text-center leading-relaxed text-blue-50">
                            At <span className="font-semibold">Link Harbor SEO</span>, we believe that every business deserves to be found online.
                            We are a results-driven SEO and digital marketing agency committed to helping businesses grow, improve visibility,
                            and achieve measurable success in the digital world.
                        </p>
                        <p className="text-lg text-center leading-relaxed text-blue-50 mt-4">
                            With a focus on ethics, strategy, and innovation, we provide tailored solutions for businesses of all sizes —
                            from startups to established brands.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* About Hero section ended */}

            {/*Mission Section start*/}

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                            <Target className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our mission is simple: To empower businesses with effective, sustainable, and transparent SEO and
                            digital marketing strategies that drive real results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        {goals.map((goal, index) => {
                            const Icon = goal.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-lg text-gray-800">{goal.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* mission section will be ended */}

            {/*  Who WE are start*/}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Link Harbor SEO is a team of passionate SEO experts, digital marketers, and content strategists
                                dedicated to helping businesses succeed online.
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">We specialize in:</h3>
                                {services.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-gray-700">{service.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <p className="text-lg text-gray-700 mt-8 leading-relaxed">
                                We combine industry expertise, data-driven strategies, and creative thinking to deliver results that matter.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                {/* <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1758873271824-a3216c80d1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxMzg5NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Digital Marketing Team"
                                    className="w-full h-full object-cover"
                                /> */}
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-48 h-48 bg-indigo-600 rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach component will be started here right  */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            At Link Harbor SEO, we don't believe in one-size-fits-all solutions.
                            Every business is unique, and our approach is tailored to your goals and audience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                            {index + 1}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Our process is <span className="font-semibold text-blue-600">transparent</span>,
                            <span className="font-semibold text-blue-600"> ethical</span>, and focused on
                            <span className="font-semibold text-blue-600"> long-term growth</span>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page