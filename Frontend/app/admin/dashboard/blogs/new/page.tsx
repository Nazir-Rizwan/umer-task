"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
}

const EMPTY: BlogForm = {
    title: '', content: '', coverImageUrl: '',
    keywordIds: [], readTimeMinutes: '0',
    metaTitle: '', metaDescription: '',
};

const inp = 'w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition';

export default function NewBlogPage() {
    const router = useRouter();
    const [form, setForm] = useState<BlogForm>(EMPTY);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof BlogForm, string>>>({});
    const [apiError, setApiError] = useState('');

    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') ?? '' : '';

    const set = (key: keyof BlogForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(p => ({ ...p, [key]: e.target.value }));

    const validate = (): boolean => {
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
        if (!validate()) return;
        setApiError('');
        setSubmitting(true);
        try {
            await fetchApi(API.blog.create, {
                method: 'POST', token,
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
            setApiError(err instanceof Error ? err.message : 'Failed to create post');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
                <button onClick={() => router.push('/admin/dashboard')}
                    className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Create New Post</h1>
                    <p className="text-sm text-gray-500">Fields marked <span className="text-red-500 font-semibold">*</span> are required</p>
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
                        hint='Slug auto-generates — "My Guide" → my-guide' error={errors.title}>
                        <input type="text" value={form.title} onChange={set('title')}
                            placeholder="My Awesome Blog Post" className={inp} />
                    </Field>

                    {/* Cover Image */}
                    <Field icon={<Image className="w-4 h-4" />} label="Cover Image" required
                        hint="Upload JPG/PNG/WebP/GIF · max 5 MB · auto-compressed to WebP"
                        error={errors.coverImageUrl}>
                        <ImageUpload value={form.coverImageUrl}
                            onChange={url => setForm(p => ({ ...p, coverImageUrl: url }))}
                            token={token} />
                    </Field>

                    {/* Content */}
                    <Field icon={<AlignLeft className="w-4 h-4" />} label="Content" required
                        hint="Full body of the post" error={errors.content}>
                        <textarea value={form.content} onChange={set('content')}
                            placeholder="Write your full blog content here…" rows={12} className={inp} />
                    </Field>

                    {/* Read Time — optional */}
                    <Field icon={<Clock className="w-4 h-4" />} label="Read Time (minutes)"
                        hint="Optional — estimated reading time">
                        <input type="number" min={0} value={form.readTimeMinutes} onChange={set('readTimeMinutes')}
                            className={`${inp} w-32`} />
                    </Field>

                    {/* Keywords */}
                    <Field icon={<span className="text-gray-400 text-sm font-bold">#</span>} label="Keywords" required
                        hint="Select from the global pool or add new ones via the + button"
                        error={errors.keywordIds}>
                        <KeywordsSelect value={form.keywordIds}
                            onChange={ids => setForm(p => ({ ...p, keywordIds: ids }))}
                            token={token} />
                    </Field>

                    {/* SEO — both required */}
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
                                <input type="text" value={form.metaTitle} onChange={set('metaTitle')}
                                    maxLength={70}
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
                                <textarea value={form.metaDescription} onChange={set('metaDescription')}
                                    maxLength={160} rows={3}
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
                        className="px-6 py-2.5 text-gray-600 hover:text-gray-900 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
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
