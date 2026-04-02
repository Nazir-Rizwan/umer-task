"use client";
import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, AlignLeft, Clock, FileText, Image, Search, Loader2, AlertCircle } from 'lucide-react';
import { fetchApi } from '@/lib/fetchApi';
import { API } from '@/lib/api';
import { KeywordsSelect } from '@/components/ui/keywords-select';
import { ImageUpload } from '@/components/ui/image-upload';

interface BlogForm {
    title: string;
    content: string;
    coverImageUrl: string;
    keywordIds: number[];
    readTimeMinutes: string;
    metaTitle: string;
    metaDescription: string;
    status: 'DRAFT' | 'PUBLISHED';
}

const inp = 'w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition';

export default function EditBlogPage() {
    const router = useRouter();
    const params = useParams();
    const id = Number(params.id);

    const [form, setForm] = useState<BlogForm | null>(null);
    const [currentSlug, setCurrentSlug] = useState('');
    const [loadingPage, setLoadingPage] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof BlogForm, string>>>({});
    const [apiError, setApiError] = useState('');
    const [pageError, setPageError] = useState('');

    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') ?? '' : '';

    const loadBlog = useCallback(async () => {
        setLoadingPage(true);
        try {
            const blog = await fetchApi<{
                title: string; slug: string; content: string | null;
                coverImageUrl: string | null;
                metaTitle: string | null; metaDescription: string | null;
                blogKeywords: { keyword: { id: number; name: string } }[];
                readTimeMinutes: number; status: 'DRAFT' | 'PUBLISHED';
            }>(API.blog.single(id), { token });

            setCurrentSlug(blog.slug);
            setForm({
                title: blog.title,
                content: blog.content ?? '',
                coverImageUrl: blog.coverImageUrl ?? '',
                keywordIds: blog.blogKeywords.map((bk) => bk.keyword.id),
                readTimeMinutes: String(blog.readTimeMinutes),
                metaTitle: blog.metaTitle ?? '',
                metaDescription: blog.metaDescription ?? '',
                status: blog.status,
            });
        } catch (err) {
            setPageError(err instanceof Error ? err.message : 'Failed to load blog');
        } finally {
            setLoadingPage(false);
        }
    }, [id, token]);

    useEffect(() => { loadBlog(); }, [loadBlog]);

    const validate = (): boolean => {
        if (!form) return false;
        const errs: Partial<Record<keyof BlogForm, string>> = {};
        if (!form.title.trim()) errs.title = 'Title is required';
        if (!form.coverImageUrl) errs.coverImageUrl = 'Cover image is required';
        if (!form.content.trim()) errs.content = 'Content is required';
        if (form.keywordIds.length === 0) errs.keywordIds = 'At least one keyword is required';
        if (!form.metaTitle.trim()) errs.metaTitle = 'Meta title is required';
        if (!form.metaDescription.trim()) errs.metaDescription = 'Meta description is required';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (status: 'DRAFT' | 'PUBLISHED') => {
        if (!validate() || !form) return;
        setApiError('');
        setSubmitting(true);
        try {
            await fetchApi(API.blog.update(id), {
                method: 'PATCH', token,
                body: {
                    title: form.title.trim(),
                    content: form.content.trim(),
                    coverImageUrl: form.coverImageUrl,
                    keywordIds: form.keywordIds,
                    readTimeMinutes: parseInt(form.readTimeMinutes) || 0,
                    metaTitle: form.metaTitle.trim(),
                    metaDescription: form.metaDescription.trim(),
                    status,
                },
            });
            router.push('/admin/dashboard');
        } catch (err) {
            setApiError(err instanceof Error ? err.message : 'Failed to update post');
        } finally {
            setSubmitting(false);
        }
    };

    if (loadingPage) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        </div>
    );

    if (pageError || !form) return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
            <AlertCircle className="w-10 h-10 text-red-500" />
            <p className="text-red-600 font-medium">{pageError || 'Blog not found'}</p>
            <button onClick={() => router.push('/admin/dashboard')} className="text-indigo-600 underline text-sm">← Back</button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
                <button onClick={() => router.push('/admin/dashboard')}
                    className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Edit Post</h1>
                    {currentSlug && (
                        <p className="text-xs text-gray-400 mt-0.5">
                            Slug: <span className="font-mono text-indigo-500">{currentSlug}</span>
                            {' '}· auto-updates if title changes
                        </p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">
                        Fields marked <span className="text-red-500 font-semibold">*</span> are required
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-8">
                {apiError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                        <p className="text-sm text-red-700">{apiError}</p>
                    </div>
                )}

                <div className="space-y-6">
                    {/* Title */}
                    <Field icon={<FileText className="w-4 h-4" />} label="Title" required
                        hint="Changing title regenerates the URL slug" error={errors.title}>
                        <input type="text" value={form.title}
                            onChange={e => setForm(p => p ? { ...p, title: e.target.value } : p)}
                            className={inp} />
                    </Field>

                    {/* Cover Image */}
                    <Field icon={<Image className="w-4 h-4" />} label="Cover Image" required
                        hint="Upload JPG/PNG/WebP/GIF · max 5 MB · auto-compressed to WebP"
                        error={errors.coverImageUrl}>
                        <ImageUpload value={form.coverImageUrl}
                            onChange={url => setForm(p => p ? { ...p, coverImageUrl: url } : p)}
                            token={token} />
                    </Field>

                    {/* Content */}
                    <Field icon={<AlignLeft className="w-4 h-4" />} label="Content" required
                        hint="Full body of the post" error={errors.content}>
                        <textarea value={form.content}
                            onChange={e => setForm(p => p ? { ...p, content: e.target.value } : p)}
                            rows={12} className={inp} />
                    </Field>

                    {/* Read Time — optional */}
                    <Field icon={<Clock className="w-4 h-4" />} label="Read Time (minutes)"
                        hint="Optional — estimated reading time">
                        <input type="number" min={0} value={form.readTimeMinutes}
                            onChange={e => setForm(p => p ? { ...p, readTimeMinutes: e.target.value } : p)}
                            className={`${inp} w-32`} />
                    </Field>

                    {/* Keywords */}
                    <Field icon={<span className="text-gray-400 text-sm font-bold">#</span>} label="Keywords" required
                        hint="Select from the global keyword pool or add new ones via the + button"
                        error={errors.keywordIds}>
                        <KeywordsSelect value={form.keywordIds}
                            onChange={ids => setForm(p => p ? { ...p, keywordIds: ids } : p)}
                            token={token} />
                    </Field>

                    {/* SEO — required */}
                    <div className={`bg-white rounded-xl border p-5 shadow-sm ${(errors.metaTitle || errors.metaDescription) ? 'border-red-300' : 'border-gray-200'}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <Search className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-semibold text-gray-800">SEO</span>
                            <span className="text-xs text-red-500 font-semibold">* Required</span>
                        </div>
                        <div className="ml-6 space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                                    Meta Title <span className="text-red-500">*</span>
                                    <span className="font-normal text-gray-400 ml-1">(max 70 chars)</span>
                                </label>
                                <input type="text" value={form.metaTitle} maxLength={70}
                                    onChange={e => setForm(p => p ? { ...p, metaTitle: e.target.value } : p)}
                                    placeholder="SEO page title shown in Google results"
                                    className={`${inp} ${errors.metaTitle ? 'border-red-300 focus:ring-red-400' : ''}`} />
                                <div className="flex items-center justify-between mt-1">
                                    {errors.metaTitle && <p className="text-red-500 text-xs">{errors.metaTitle}</p>}
                                    <p className="text-xs text-gray-400 ml-auto">{form.metaTitle.length}/70</p>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                                    Meta Description <span className="text-red-500">*</span>
                                    <span className="font-normal text-gray-400 ml-1">(max 160 chars)</span>
                                </label>
                                <textarea value={form.metaDescription} maxLength={160} rows={3}
                                    onChange={e => setForm(p => p ? { ...p, metaDescription: e.target.value } : p)}
                                    placeholder="Brief summary shown below your title in search results…"
                                    className={`${inp} ${errors.metaDescription ? 'border-red-300 focus:ring-red-400' : ''}`} />
                                <div className="flex items-center justify-between mt-1">
                                    {errors.metaDescription && <p className="text-red-500 text-xs">{errors.metaDescription}</p>}
                                    <p className="text-xs text-gray-400 ml-auto">{form.metaDescription.length}/160</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button onClick={() => handleSubmit('PUBLISHED')} disabled={submitting}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                        {submitting && <Loader2 className="w-4 h-4 animate-spin" />} Publish
                    </button>
                    <button onClick={() => handleSubmit('DRAFT')} disabled={submitting}
                        className="bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                        Save as Draft
                    </button>
                    <button onClick={() => router.push('/admin/dashboard')} disabled={submitting}
                        className="px-6 py-2.5 text-gray-600 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                        Cancel
                    </button>
                </div>
            </main>
        </div>
    );
}

function Field({ icon, label, required, hint, error, children }: {
    icon: React.ReactNode; label: string; required?: boolean;
    hint?: string; error?: string; children: React.ReactNode;
}) {
    return (
        <div className={`bg-white rounded-xl border p-5 shadow-sm ${error ? 'border-red-300' : 'border-gray-200'}`}>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400">{icon}</span>
                <label className="text-sm font-semibold text-gray-800">
                    {label}{required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
            </div>
            {hint && <p className="text-xs text-gray-400 mb-3 ml-6">{hint}</p>}
            <div className="ml-6">{children}</div>
            {error && <p className="text-red-500 text-xs mt-2 ml-6">{error}</p>}
        </div>
    );
}
