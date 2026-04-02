'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { API } from '@/lib/api';
import { fetchApi } from '@/lib/fetchApi';

interface Keyword {
  id: number;
  name: string;
}

interface KeywordsSelectProps {
  value: number[];
  onChange: (ids: number[]) => void;
  token?: string;
}

export function KeywordsSelect({ value, onChange, token }: KeywordsSelectProps) {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const loadKeywords = useCallback(async () => {
    try {
      const data = await fetchApi<Keyword[]>(API.keyword.list);
      setKeywords(data);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    loadKeywords();
  }, [loadKeywords]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  const toggle = (id: number) => {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  };

  const selectedKeywords = keywords.filter((k) => value.includes(k.id));
  const filtered = keywords.filter((k) => k.name.toLowerCase().includes(filter.toLowerCase()));

  const handleAddKeyword = async () => {
    const trimmed = newName.trim();
    if (!trimmed) return;
    setAdding(true);
    setAddError('');
    try {
      const created = await fetchApi<Keyword>(API.keyword.create, {
        method: 'POST',
        body: { name: trimmed },
        token,
      });
      setKeywords((prev) => [...prev, created].sort((a, b) => a.name.localeCompare(b.name)));
      onChange([...value, created.id]);
      setNewName('');
      setShowModal(false);
    } catch (err) {
      setAddError(err instanceof Error ? err.message : 'Failed to add keyword');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Selected tags */}
      <div
        className="min-h-[42px] flex flex-wrap gap-1.5 p-2 border border-gray-300 rounded-lg bg-white cursor-pointer hover:border-blue-400 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        {selectedKeywords.length === 0 && (
          <span className="text-gray-400 text-sm self-center pl-1">Select keywords…</span>
        )}
        {selectedKeywords.map((kw) => (
          <span
            key={kw.id}
            className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            #{kw.name}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); toggle(kw.id); }}
              className="text-blue-500 hover:text-blue-800 leading-none"
            >
              ×
            </button>
          </span>
        ))}
        <span className="ml-auto self-center text-gray-400 text-xs pr-1">▾</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          {/* Search + add button */}
          <div className="flex items-center gap-2 p-2 border-b border-gray-100">
            <input
              autoFocus
              type="text"
              placeholder="Search keywords…"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex-1 text-sm px-2 py-1 outline-none"
            />
            <button
              type="button"
              onClick={() => { setShowModal(true); setOpen(false); setFilter(''); }}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              <span className="text-base leading-none">+</span> New
            </button>
          </div>

          {/* List */}
          <div className="max-h-52 overflow-y-auto">
            {filtered.length === 0 && (
              <p className="text-center text-sm text-gray-400 py-4">No keywords found</p>
            )}
            {filtered.map((kw) => (
              <label
                key={kw.id}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={value.includes(kw.id)}
                  onChange={() => toggle(kw.id)}
                  className="w-4 h-4 rounded accent-blue-600"
                />
                <span className="text-sm text-gray-700">#{kw.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Add keyword modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Add New Keyword</h3>
            <p className="text-sm text-gray-500 mb-4">
              Keywords are shared across all blogs and stored globally.
            </p>
            <input
              autoFocus
              type="text"
              placeholder="e.g. seo-tips"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAddKeyword(); if (e.key === 'Escape') setShowModal(false); }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            {addError && <p className="text-red-500 text-xs mt-1">{addError}</p>}
            <div className="flex gap-2 mt-4">
              <button
                type="button"
                onClick={() => { setShowModal(false); setNewName(''); setAddError(''); }}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddKeyword}
                disabled={adding || !newName.trim()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                {adding ? 'Adding…' : 'Add Keyword'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
