"use client";
import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Clock, Calendar, Loader2, BookOpen, Search } from 'lucide-react';
import { fetchApi } from '@/lib/fetchApi';
import { API } from '@/lib/api';
import { PaginationControls } from '@/components/ui/pagination-controls';

interface Keyword { id: number; name: string; }
interface Blog {
    id: number;
    title: string;
    slug: string;
    coverImageUrl: string | null;
    blogKeywords: { keyword: Keyword }[];
    readTimeMinutes: number;
    publishedAt: string | null;
    createdAt: string;
}
interface PaginatedBlogs {
    data: Blog[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

const GRADIENTS = [
    'from-indigo-500 to-purple-600',
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-amber-500',
    'from-rose-500 to-pink-600',
];

export default function BlogPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const buildQuery = useCallback((p: number, l: number, s: string) => {
        const params = new URLSearchParams({ page: String(p), limit: String(l) });
        if (s.trim()) params.set('search', s.trim());
        return params.toString();
    }, []);

    const loadBlogs = useCallback(async (p: number, l: number, s: string) => {
        setLoading(true);
        try {
            const result = await fetchApi<PaginatedBlogs>(`${API.blog.published}?${buildQuery(p, l, s)}`);
            console.log(result.data)
            setBlogs(result.data);
            setTotal(result.total);
            setTotalPages(result.totalPages);
        } catch { setBlogs([]); }
        finally { setLoading(false); }
    }, [buildQuery]);

    useEffect(() => { loadBlogs(page, limit, search); }, [page, limit]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSearchChange = (value: string) => {
        setSearch(value);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setPage(1);
            loadBlogs(1, limit, value);
        }, 350);
    };

    const formatDate = (d: string) =>
        new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800 pt-28 pb-20 px-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
                <div className="relative max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-5">
                        <BookOpen className="w-4 h-4" /> SEO Blog & Resources
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Expert Insights &amp; Strategies</h1>
                    <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
                        Stay updated with the latest SEO trends, digital marketing strategies,
                        and proven techniques to grow your business online.
                    </p>

                    {/* Search bar */}
                    <div className="relative max-w-lg mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                        <input
                            type="text"
                            placeholder="Search posts by title or keyword…"
                            value={search}
                            onChange={e => handleSearchChange(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl text-white placeholder-white/60 focus:outline-none focus:bg-white/25 focus:border-white/50 transition-all"
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"
                    style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
            </section>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-gray-900">
                        {search ? `Results for "${search}"` : 'All Posts'}
                    </h2>
                    <span className="text-sm text-gray-400">{total} post{total !== 1 ? 's' : ''}</span>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-24">
                        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                        <BookOpen className="w-14 h-14 mb-4 opacity-30" />
                        <p className="text-lg font-semibold">{search ? 'No results found' : 'No posts yet'}</p>
                        <p className="text-sm mt-1">
                            {search ? 'Try different keywords or clear the search' : 'Check back soon for new content!'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog, idx) => (
                            <BlogCard key={blog.id} blog={blog} idx={idx} formatDate={formatDate} />
                        ))}
                    </div>
                )}

                {!loading && total > 0 && (
                    <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <PaginationControls
                            page={page} totalPages={totalPages} limit={limit} total={total}
                            onPageChange={setPage}
                            onLimitChange={l => { setLimit(l); setPage(1); }}
                        />
                    </div>
                )}
            </main>
        </div>
    );
}

function BlogCard({ blog, idx, formatDate }: { blog: Blog; idx: number; formatDate: (d: string) => string }) {
    const gradient = GRADIENTS[idx % GRADIENTS.length];
    const date = blog.publishedAt ?? blog.createdAt;
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <Link href={`/blog/${blog.slug}`} className="block group">
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden h-full">
                {/* Cover image or gradient fallback */}
                <div className={`w-full h-48 overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
                    {blog.coverImageUrl && !imgFailed ? (
                        <img
                            src={blog.coverImageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={() => setImgFailed(true)}
                        />
                    ) : (
                        <BookOpen className="w-14 h-14 text-white/40" />
                    )}
                </div>

                <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {blog.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />{formatDate(date)}
                        </span>
                        {blog.readTimeMinutes > 0 && (
                            <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />{blog.readTimeMinutes} min read
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    );
}
