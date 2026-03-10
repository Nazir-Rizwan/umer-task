import { Anchor, Mail, Phone, MapPin } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6" role="contentinfo">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                                <Anchor className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">Link Harbor SEO</span>
                        </div>
                        <p className="text-gray-400">
                            Your trusted partner for SEO & digital growth. Helping businesses succeed online.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                                About Us
                            </Link>
                            <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                                Services
                            </Link>
                            <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>yourname@example.com</span>
                            </div>
                            <div className="flex items-start gap-2 text-gray-400">
                                <MapPin className="w-4 h-4 mt-1" />
                                <span>123 Digital Lane, Your City, Country</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Link Harbor SEO. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}