"use client";
import { useState, useRef, KeyboardEvent } from 'react';
import { X, Tag } from 'lucide-react';

interface KeywordsInputProps {
  value: string[];
  onChange: (keywords: string[]) => void;
  placeholder?: string;
}

export function KeywordsInput({
  value,
  onChange,
  placeholder = 'Type a keyword and press Enter…',
}: KeywordsInputProps) {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addKeyword = (raw: string) => {
    const kw = raw.trim().toLowerCase();
    if (!kw || value.includes(kw)) { setInput(''); return; }
    onChange([...value, kw]);
    setInput('');
  };

  const removeKeyword = (kw: string) => {
    onChange(value.filter(k => k !== kw));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addKeyword(input);
    } else if (e.key === 'Backspace' && input === '' && value.length > 0) {
      onChange(value.slice(0, -1));
    } else if (e.key === 'Escape') {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  // Suggestions from already-typed keywords (deduplicated prefix match)
  const suggestions = input.trim().length > 0
    ? value.filter(k => k.startsWith(input.trim().toLowerCase()) && k !== input.trim().toLowerCase())
    : [];

  return (
    <div className="relative">
      {/* Tag container */}
      <div
        onClick={() => { inputRef.current?.focus(); setOpen(true); }}
        className="min-h-[44px] w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent cursor-text flex flex-wrap gap-1.5 items-center transition"
      >
        {value.map(kw => (
          <span key={kw}
            className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-sm font-medium px-2 py-0.5 rounded-full border border-indigo-200">
            <Tag className="w-3 h-3" />
            {kw}
            <button type="button" onClick={e => { e.stopPropagation(); removeKeyword(kw); }}
              className="hover:text-red-500 transition-colors ml-0.5">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => { setInput(e.target.value); setOpen(true); }}
          onKeyDown={handleKeyDown}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder={value.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[140px] outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
        />
      </div>

      {/* Dropdown — shows suggestion to avoid duplicates */}
      {open && (input.trim().length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
          {suggestions.length > 0 && (
            <div className="px-3 py-1.5 text-xs text-gray-400 border-b border-gray-100">Already added:</div>
          )}
          {suggestions.map(s => (
            <div key={s} className="px-3 py-2 text-sm text-gray-400 line-through">{s}</div>
          ))}
          {!value.includes(input.trim().toLowerCase()) && input.trim() && (
            <button type="button"
              onMouseDown={e => { e.preventDefault(); addKeyword(input); }}
              className="w-full text-left px-3 py-2 text-sm text-indigo-700 font-medium hover:bg-indigo-50 transition-colors flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" />
              Add &quot;{input.trim().toLowerCase()}&quot;
            </button>
          )}
        </div>
      )}

      <p className="mt-1.5 text-xs text-gray-400">
        Press <kbd className="px-1 py-0.5 bg-gray-100 rounded text-gray-500 font-mono text-[10px]">Enter</kbd> or{' '}
        <kbd className="px-1 py-0.5 bg-gray-100 rounded text-gray-500 font-mono text-[10px]">,</kbd> to add ·{' '}
        <kbd className="px-1 py-0.5 bg-gray-100 rounded text-gray-500 font-mono text-[10px]">Backspace</kbd> to remove last
      </p>
    </div>
  );
}
