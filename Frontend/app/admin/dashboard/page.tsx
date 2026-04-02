"use client";
import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
    FileText, Eye, PenLine, Plus, Pencil, Trash2,
    LogOut, ExternalLink, Loader2, AlertCircle, Search,
} from 'lucide-react';
import { fetchApi } from '@/lib/fetchApi';
import { API } from '@/lib/api';
import { PaginationControls } from '@/components/ui/pagination-controls';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Keyword { id: number; name: string; }
interface Blog {
    id: number;
    title: string;
    slug: string;
    status: 'DRAFT' | 'PUBLISHED';
    blogKeywords: { keyword: Keyword }[];
    createdAt: string;
}
interface Stats { total: number; published: number; drafts: number; }
interface PaginatedBlogs {
    data: Blog[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export default function DashboardPage() {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [stats, setStats] = useState<Stats>({ total: 0, published: 0, drafts: 0 });
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const token = typeof window !== 'undefined'
        ? localStorage.getItem('admin_token') ?? ''
        : '';

    const buildQuery = useCallback((p: number, l: number, s: string) => {
        const params = new URLSearchParams({ page: String(p), limit: String(l) });
        if (s.trim()) params.set('search', s.trim());
        return params.toString();
    }, []);

    const loadData = useCallback(async (p: number, l: number, s: string) => {
        setLoading(true);
        setError('');
        try {
            const [blogResult, statsData] = await Promise.all([
                fetchApi<PaginatedBlogs>(`${API.blog.list}?${buildQuery(p, l, s)}`, { token }),
                fetchApi<Stats>(API.blog.stats, { token }),
            ]);
            setBlogs(blogResult.data);
            setTotal(blogResult.total);
            setTotalPages(blogResult.totalPages);
            setStats(statsData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load data');
        } finally {
            setLoading(false);
        }
    }, [token, buildQuery]);

    useEffect(() => { loadData(page, limit, search); }, [page, limit]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSearchChange = (value: string) => {
        setSearch(value);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setPage(1);
            loadData(1, limit, value);
        }, 350);
    };

    const handleDelete = async (id: number) => {
        setDeletingId(id);
        try {
            await fetchApi(API.blog.delete(id), { method: 'DELETE', token });
            await loadData(page, limit, search);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete');
        } finally {
            setDeletingId(null);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        router.push('/admin/login');
    };

    const formatDate = (d: string) =>
        new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Blog Dashboard</h1>
                    <p className="text-sm text-gray-500">Manage your blog posts</p>
                </div>
                <div className="flex items-center gap-3">
                    <a href="/" target="_blank"
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Site
                    </a>
                    <button onClick={handleLogout}
                        className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 font-medium transition-colors">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <StatCard icon={<FileText className="w-6 h-6 text-blue-600" />}
                        bg="bg-blue-100" label="Total Posts" value={stats.total} loading={loading} />
                    <StatCard icon={<Eye className="w-6 h-6 text-green-600" />}
                        bg="bg-green-100" label="Published" value={stats.published} loading={loading} />
                    <StatCard icon={<PenLine className="w-6 h-6 text-amber-600" />}
                        bg="bg-amber-100" label="Drafts" value={stats.drafts} loading={loading} />
                </div>

                {/* Blog List */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 gap-3 flex-wrap">
                        <h2 className="text-base font-semibold text-gray-900 shrink-0">All Posts</h2>

                        {/* Search */}
                        <div className="flex-1 min-w-0 max-w-xs relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by title or keyword…"
                                value={search}
                                onChange={e => handleSearchChange(e.target.value)}
                                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <button onClick={() => router.push('/admin/dashboard/blogs/new')}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shrink-0">
                            <Plus className="w-4 h-4" />
                            Create New Post
                        </button>
                    </div>

                    {error && (
                        <div className="m-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-red-600" />
                            <span className="text-sm text-red-700">{error}</span>
                        </div>
                    )}

                    {loading ? (
                        <div className="flex items-center justify-center py-16">
                            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                            <FileText className="w-12 h-12 mb-3 opacity-40" />
                            <p className="font-medium">{search ? 'No results found' : 'No posts yet'}</p>
                            <p className="text-sm">
                                {search ? 'Try a different search term' : 'Click "Create New Post" to get started'}
                            </p>
                        </div>
                    ) : (
                        <ul className="divide-y divide-gray-100">
                            {blogs.map(blog => (
                                <li key={blog.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex-1 min-w-0 mr-4">
                                        <p className="font-medium text-gray-900 truncate">{blog.title}</p>
                                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                            <span className="text-xs text-gray-400">{formatDate(blog.createdAt)}</span>
                                            <StatusBadge status={blog.status} />
                                            {blog.blogKeywords?.slice(0, 4).map(bk => (
                                                <span key={bk.keyword.id}
                                                    className="inline-flex items-center bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
                                                    #{bk.keyword.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 shrink-0">
                                        <button
                                            onClick={() => router.push(`/admin/dashboard/blogs/${blog.id}/edit`)}
                                            className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                            title="Edit"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </button>

                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <button
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    {deletingId === blog.id
                                                        ? <Loader2 className="w-4 h-4 animate-spin text-red-500" />
                                                        : <Trash2 className="w-4 h-4" />}
                                                </button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Are you sure you want to delete <strong>&quot;{blog.title}&quot;</strong>? This action cannot be undone.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() => handleDelete(blog.id)}
                                                        className="bg-red-600 hover:bg-red-700 text-white"
                                                    >
                                                        Delete
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Pagination */}
                    {!loading && total > 0 && (
                        <div className="border-t border-gray-100">
                            <PaginationControls
                                page={page}
                                totalPages={totalPages}
                                limit={limit}
                                total={total}
                                onPageChange={setPage}
                                onLimitChange={(l) => { setLimit(l); setPage(1); }}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

function StatCard({ icon, bg, label, value, loading }: {
    icon: React.ReactNode; bg: string; label: string; value: number; loading: boolean;
}) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 shadow-sm">
            <div className={`${bg} p-3 rounded-xl`}>{icon}</div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                {loading
                    ? <div className="h-7 w-8 bg-gray-200 rounded animate-pulse mt-1" />
                    : <p className="text-2xl font-bold text-gray-900">{value}</p>}
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: 'DRAFT' | 'PUBLISHED' }) {
    return status === 'PUBLISHED' ? (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">Published</span>
    ) : (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">Draft</span>
    );
}
