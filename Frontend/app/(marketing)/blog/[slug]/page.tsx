"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, BookOpen, Tag } from 'lucide-react';
import { fetchApi } from '@/lib/fetchApi';
import { API } from '@/lib/api';

interface Keyword { id: number; name: string; }
interface BlogDetail {
    id: number;
    title: string;
    slug: string;
    content: string | null;
    coverImageUrl: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    readTimeMinutes: number;
    publishedAt: string | null;
    createdAt: string;
    blogKeywords: { keyword: Keyword }[];
}

export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const router = useRouter();
    const [blog, setBlog] = useState<BlogDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [imgFailed, setImgFailed] = useState(false);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        fetchApi<BlogDetail>(API.blog.bySlug(slug))
            .then(setBlog)
            .catch(() => setNotFound(true))
            .finally(() => setLoading(false));
    }, [slug]);

    const formatDate = (d: string) =>
        new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-3 text-gray-400">
                <BookOpen className="w-10 h-10 animate-pulse" />
                <p className="text-sm">Loading article…</p>
            </div>
        </div>
    );

    if (notFound || !blog) return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white px-6">
            <BookOpen className="w-16 h-16 text-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
            <p className="text-gray-500 text-center max-w-md">
                This post may have been removed or the link might be incorrect.
            </p>
            <button
                onClick={() => router.push('/blog')}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
        </div>
    );

    const publishDate = blog.publishedAt ?? blog.createdAt;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero cover */}
            <div className="relative w-full h-72 md:h-96 bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800 overflow-hidden">
                {blog.coverImageUrl && !imgFailed ? (
                    <img
                        src={blog.coverImageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        onError={() => setImgFailed(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-20 h-20 text-white/20" />
                    </div>
                )}
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Back button */}
                <button
                    onClick={() => router.push('/blog')}
                    className="absolute top-6 left-6 flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> All Posts
                </button>
            </div>

            {/* Article */}
            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Keywords */}
                {blog.blogKeywords?.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                        <Tag className="w-3.5 h-3.5 text-blue-500" />
                        {blog.blogKeywords.map(bk => (
                            <span key={bk.keyword.id}
                                className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                #{bk.keyword.name}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                    {blog.title}
                </h1>

                {/* Meta description as subtitle if present */}
                {blog.metaDescription && (
                    <p className="text-lg text-gray-500 leading-relaxed mb-6 border-l-4 border-indigo-300 pl-4 italic">
                        {blog.metaDescription}
                    </p>
                )}

                {/* Date + read time */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {formatDate(publishDate)}
                    </span>
                    {blog.readTimeMinutes > 0 && (
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {blog.readTimeMinutes} min read
                        </span>
                    )}
                </div>

                {/* Content */}
                {blog.content ? (
                    <div className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {blog.content}
                    </div>
                ) : (
                    <div className="flex flex-col items-center py-16 text-gray-300 gap-3">
                        <BookOpen className="w-12 h-12" />
                        <p className="text-gray-400">Content coming soon…</p>
                    </div>
                )}

                {/* Bottom nav */}
                <div className="mt-14 pt-8 border-t border-gray-100">
                    <button
                        onClick={() => router.push('/blog')}
                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to all posts
                    </button>
                </div>
            </div>
        </div>
    );
}
