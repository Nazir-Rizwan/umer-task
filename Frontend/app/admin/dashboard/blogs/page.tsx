"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogsRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/admin/dashboard/blogs/new');
    }, [router]);
    return null;
}
