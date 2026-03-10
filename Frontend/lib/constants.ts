import { NavItem, ServiceCard } from "@/types";

export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

export const HOME_FEATURES = [
    { icon: "📈", title: "Increase organic traffic" },
    { icon: "🎯", title: "Improve keyword rankings" },
    { icon: "👥", title: "Turn visitors into customers" },
];

export const SERVICES_DATA: ServiceCard[] = [
    {
        icon: "🔍",
        title: "On-Page SEO",
        description: "Optimize every element of your website to rank higher in search engines.",
        features: ["Keyword Research & Strategy", "Meta Tags Optimization", "Content Optimization", "Internal Linking"],
    },
    {
        icon: "🔗",
        title: "Link Building",
        description: "Build authority with high-quality backlinks from trusted sources.",
        features: ["Guest Posting", "Digital PR", "Broken Link Building", "Authority Link Outreach"],
    },
    {
        icon: "⚙️",
        title: "Technical SEO",
        description: "Fix the technical issues that hold your website back from ranking.",
        features: ["Site Speed Optimization", "Core Web Vitals", "Schema Markup", "Crawl Error Fixes"],
    },
    {
        icon: "📍",
        title: "Local SEO",
        description: "Dominate local search results and attract nearby customers.",
        features: ["Google Business Profile", "Local Citations", "Review Management", "Local Keyword Targeting"],
    },
    {
        icon: "📝",
        title: "Content Marketing",
        description: "Create content that attracts, engages, and converts your audience.",
        features: ["Blog Writing", "SEO Copywriting", "Content Strategy", "Pillar Page Creation"],
    },
    {
        icon: "📊",
        title: "SEO Analytics & Reporting",
        description: "Transparent reporting so you always know what's working.",
        features: ["Monthly SEO Reports", "Google Analytics Setup", "Rank Tracking", "Competitor Analysis"],
    },
];

export const ABOUT_STATS = [
    { value: "500+", label: "Clients Served" },
    { value: "10x", label: "Average Traffic Growth" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "5+", label: "Years of Experience" },
];

export const CONTACT_METHODS = [
    { icon: "📧", label: "Email Us", value: "hello@linkharboreo.com" },
    { icon: "📞", label: "Call Us", value: "+1 (555) 123-4567" },
    { icon: "🕒", label: "Working Hours", value: "Mon–Fri, 9AM–6PM EST" },
];