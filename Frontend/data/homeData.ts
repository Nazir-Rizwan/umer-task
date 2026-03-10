// data/homeData.ts

import {
    TrendingUp,
    Target,
    Users,
    FileSearch,
    Link2,
    FileEdit,
    FileText,
    Network,
    Shield,
    BarChart3,
    Trophy,
    AlertCircle,
    Heart,
    Search,
    Lightbulb,
    Settings,
    Rocket,
    ShoppingCart,
    Laptop,
    BarChart,
} from "lucide-react";

export const benefits = [
    { icon: TrendingUp, text: "Increase organic traffic" },
    { icon: Target, text: "Improve keyword Rankings" },
    { icon: Users, text: "Turn visitors into customers" },
];

export const services = [
    {
        icon: FileSearch,
        title: "On-Page SEO Optimization",
        description: "We optimize every on-page element of your website to improve rankings, usability, and conversions.",
        features: [
            "In-depth keyword research & mapping",
            "Title tag & meta description optimization",
            "Content optimization & readability improvements",
            "Proper heading structure (H1–H6)",
            "Internal & external linking strategy",
            "Image SEO & URL optimization",
            "Crawlability & indexing optimization"
        ],
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: Link2,
        title: "Guest Posting & Link Building",
        description: "Build authority and trust with high-quality, niche-relevant backlinks.",
        features: [
            "Manual outreach on real websites",
            "Niche-relevant & authority domains",
            "Permanent do-follow backlinks",
            "Natural anchor text strategy",
            "100% white-hat link building"
        ],
        gradient: "from-indigo-500 to-indigo-600"
    },
    {
        icon: FileEdit,
        title: "Link Insertion (Niche Edits)",
        description: "Get contextual backlinks from aged and indexed content.",
        features: [
            "Authority websites",
            "Existing, indexed articles",
            "Natural link placements",
            "Fast turnaround & safe SEO practices"
        ],
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: FileText,
        title: "Content Optimization",
        description: "We turn average content into SEO-optimized, conversion-ready pages.",
        features: [
            "Keyword & search intent optimization",
            "Semantic & NLP keyword integration",
            "Content structure improvement",
            "User engagement optimization"
        ],
        gradient: "from-pink-500 to-pink-600"
    },
    {
        icon: Network,
        title: "Internal & External Linking Strategy",
        description: "Smart linking that strengthens SEO signals and improves user experience.",
        features: [
            "Silo-based internal linking",
            "Contextual outbound authority links",
            "Anchor text optimization"
        ],
        gradient: "from-teal-500 to-teal-600"
    },
    {
        icon: TrendingUp,
        title: "Digital Marketing",
        description: "Grow your brand visibility with focused digital marketing strategies.",
        features: [
            "SEO-focused content marketing",
            "Organic growth strategies",
            "Conversion-driven campaigns"
        ],
        gradient: "from-green-500 to-green-600"
    }
];

export const reasons = [
    { icon: Shield, text: "100% White-Hat SEO Techniques" },
    { icon: BarChart3, text: "Data-Driven & Transparent Strategies" },
    { icon: Trophy, text: "Long-Term Ranking Focus" },
    { icon: AlertCircle, text: "No Spam, No Shortcuts" },
    { icon: Heart, text: "Client-Focused SEO Solutions" }
];

// Our seo process 
export const steps = [
    {
        icon: Search,
        title: "Website & Competitor Analysis",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: Lightbulb,
        title: "Keyword Research & SEO Strategy",
        color: "from-indigo-500 to-indigo-600"
    },
    {
        icon: Settings,
        title: "On-Page & Technical Optimization",
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: Rocket,
        title: "Authority Building & Content Improvement",
        color: "from-pink-500 to-pink-600"
    },
    {
        icon: BarChart,
        title: "Performance Tracking & Reporting",
        color: "from-teal-500 to-teal-600"
    }
];


export const clients = [
    { icon: Rocket, text: "Startups & Small Businesses" },
    { icon: ShoppingCart, text: "E-commerce Stores" },
    { icon: Laptop, text: "SaaS & Service-Based Companies" },
    { icon: Users, text: "Agencies & Marketing Teams" }
];