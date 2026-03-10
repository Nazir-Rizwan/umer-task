import React, { use } from 'react'
import HeroSection from "@/components/common/HeroSection";
import { services } from '@/data/services';
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>
}

const page = async ({ params }: Props) => {
    const { slug } = await params
    console.log("params.slug", slug)
    const service = services.find((s) => s.slug === slug);
    // console.log("Service found:", service); // Debug log to check if service is found
    if (!service) {
        notFound();
    }

    return (
        <>
            <HeroSection
                variant="services"
                title={service.title}
                icon={service.icon && <service.icon className="w-8 h-8" />}
                subtitle={service.description}
            />

            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="text-gray-600 text-lg mb-8">
                        {service.description}
                    </p>
                </div>
            </section>itle="Complete SEO & Digital Marketing Solutions to Grow Your Business"

        </>
    )
}

export default page