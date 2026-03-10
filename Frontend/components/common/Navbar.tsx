"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-16 flex items-center px-6 md:px-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mr-auto">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-lg">
                    ⚓
                </div>
                <span className="font-semibold text-gray-800 text-[15px]">Link Harbor SEO</span>
            </Link>

            {/* Nav Links */}
            <ul className="flex items-center gap-8">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-sm font-medium transition-colors relative pb-1 ${isActive
                                    ? "text-indigo-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 after:rounded-full"
                                    : "text-gray-500 hover:text-gray-800"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}