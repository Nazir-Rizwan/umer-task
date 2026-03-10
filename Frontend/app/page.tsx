import { Button } from '@/components/ui/button';
import HeroSection from '@/components/common/HeroSection';
import Link from "next/link";
import { Card } from '@/components/ui/card';
import { IconBox } from '@/components/common/IconBox';
import SectionHeader from "@/components/common/SectionHeader";
import { ContainerSection } from "@/layout/ContainerSection";
import { Lightbulb } from 'lucide-react';
import { benefits, services, reasons, steps, clients } from "@/data/homeData";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          title="Link Harbor SEO"
          subtitle="Rank Higher. Get More Traffic. Convert More Customers."
          description="At Link Harbor SEO, we help businesses grow through data-driven SEO and digital marketing strategies that deliver real, measurable results. From powerful on-page optimization to authority-building link strategies, we focus on sustainable growth that lasts."
          variant="home"
        >
          {/* Benefits Grid */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 w-full max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-white text-sm font-medium flex-1"
                >
                  <div className="flex items-center gap-3 text-white">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-base md:text-lg font-medium">{benefit.text}</span>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold text-base px-8 py-4 rounded-md shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all duration-200"
            >
              Get a Free SEO Audit Today →
            </Link>
          </div>
        </HeroSection>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🚀 Our SEO & Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide complete, result-focused SEO solutions tailored to your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all group"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/*  why choose home */}
      <ContainerSection padding="normal" background="gradient-dark" className="text-white">
        <SectionHeader
          icon={<Lightbulb />}
          title="Why Choose Link Harbor SEO?"
          subtitle="Turn your website into a traffic and lead-generating machine."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="flex items-center gap-4">
                <IconBox
                  icon={reason.icon}
                  gradient="from-blue-500 to-indigo-500"
                  size="sm"
                />
                <span className="text-base md:text-lg font-medium text-white">{reason.text}</span>
              </div>
            </Card>
          ))}
        </div>
      </ContainerSection>

      {/* our seo process start */}
      <ContainerSection background="gray" padding="normal">
        <SectionHeader
          title="🔍 Our Proven SEO Process"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="mt-3">
              <Card className="text-center py-5 px-2">
                <div className="relative inline-block mb-4">
                  <IconBox
                    icon={step.icon}
                    gradient={step.color}
                    size="md"
                    className="mx-auto"
                  />

                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                  {step.title}
                </h3>
              </Card>
            </div>
          ))}
        </div>

      </ContainerSection>
      {/* who we work with start with now right */}

      <ContainerSection background="white" padding="normal">
        <SectionHeader
          title="🌍 Who We Work With"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="text-center group"
            >
              <IconBox
                icon={client.icon}
                gradient="from-blue-600 to-indigo-600"
                size="md"
                className="mx-auto mb-4 group-hover:scale-110 transition-transform"
              />
              <p className="text-base md:text-lg font-semibold text-gray-900 leading-tight">
                {client.text}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            No matter your industry, we create SEO strategies that fit your goals.
          </p>
        </div>
      </ContainerSection>

    </>
  );
}
