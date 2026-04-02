"use client";
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Skip auth check on login page
        if (pathname === '/admin/login') return;

        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.replace('/admin/login');
        }
    }, [pathname, router]);

    return <>{children}</>;
}
