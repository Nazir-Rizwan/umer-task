import HeroSection from "@/components/common/HeroSection";
import { ContactInfo } from "@/components/ContactInfo";
// import StatsSection from "@/components/about/StatsSection";
import { WorkingHours } from "@/components/WorkingHours";

export default function ContactPage() {
    return (
        <>
            <HeroSection
                variant="contact"
                icon={<span>⚓</span>}
                title="Contact Us"
                subtitle="Your Trusted Partner for SEO & Digital Growth"
                description="At Link Harbor SEO, we believe that every business deserves to be found online. We are a results-driven SEO and digital marketing agency committed to helping businesses grow, improve visibility, and achieve measurable success in the digital world."
                secondDescription="With a focus on ethics, strategy, and innovation, we provide tailored solutions for businesses of all sizes — from startups to established brands."
            />

            {/* <StatsSection /> */}
            <ContactInfo />

            {/* Mission section */}
            <WorkingHours />
        </>
    );
}