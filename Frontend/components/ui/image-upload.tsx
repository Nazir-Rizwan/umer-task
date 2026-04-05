'use client';

import { useRef, useState } from 'react';
import { API } from '@/lib/api';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ;
console.log("BACKEND_URL", BACKEND_URL);
const MAX_SIZE_MB = 5;
const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  token: string;
}

export function ImageUpload({ value, onChange, token }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(value || '');

  const handleFile = async (file: File) => {
    setError('');
    if (!ACCEPTED.includes(file.type)) {
      setError('Only JPEG, PNG, WebP, or GIF images are allowed.');
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Image must be smaller than ${MAX_SIZE_MB} MB.`);
      return;
    }

    // Local preview before upload
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      const res = await fetch(`${BACKEND_URL}${API.upload.image}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? 'Upload failed');
      onChange(data.url as string);
      setPreview(data.url as string);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      setPreview(value || '');
    } finally {
      setUploading(false);
      URL.revokeObjectURL(objectUrl);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div className="space-y-2">
      {/* Preview area / drop zone */}
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onClick={() => !uploading && inputRef.current?.click()}
        className={`relative w-full h-52 border-2 border-dashed rounded-xl overflow-hidden cursor-pointer transition-colors
          ${uploading ? 'opacity-60 pointer-events-none' : 'hover:border-blue-400 hover:bg-blue-50'}
          ${preview ? 'border-blue-300 bg-gray-50' : 'border-gray-300 bg-gray-50'}`}
      >
        {preview ? (
          <>
            <img src={preview} alt="Cover preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1.5 rounded-lg">
                {uploading ? 'Uploading…' : 'Click or drag to replace'}
              </span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-medium">Click or drag &amp; drop to upload</p>
            <p className="text-xs text-gray-400">JPEG · PNG · WebP · GIF — max {MAX_SIZE_MB} MB</p>
          </div>
        )}

        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60">
            <div className="flex flex-col items-center gap-2">
              <svg className="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span className="text-sm text-blue-700 font-medium">Uploading & compressing…</span>
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      {value && !uploading && (
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500 truncate flex-1">{value}</p>
          <button
            type="button"
            onClick={() => { onChange(''); setPreview(''); }}
            className="text-xs text-red-500 hover:text-red-700 font-medium shrink-0"
          >
            Remove
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED.join(',')}
        className="hidden"
        onChange={onInputChange}
      />
    </div>
  );
}
