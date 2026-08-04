'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ArrowRight,
  Clock,
  Sparkles,
  Cpu,
  Layers,
  FileText,
  BookOpen,
  Briefcase,
  HelpCircle,
  CornerDownLeft,
} from 'lucide-react';
import {
  globalSearchIndex,
  popularSearches,
  SearchCategory,
} from '@/config/search-index';
import { GlassCard } from '@/components/cards/GlassCard';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryIconMap: Record<SearchCategory, React.ReactNode> = {
  Products: <Cpu className="h-4 w-4 text-cyan-400 shrink-0" />,
  Services: <Layers className="h-4 w-4 text-emerald-400 shrink-0" />,
  Research: <Sparkles className="h-4 w-4 text-purple-400 shrink-0" />,
  Blog: <FileText className="h-4 w-4 text-blue-400 shrink-0" />,
  Documentation: <BookOpen className="h-4 w-4 text-amber-400 shrink-0" />,
  Careers: <Briefcase className="h-4 w-4 text-pink-400 shrink-0" />,
  FAQ: <HelpCircle className="h-4 w-4 text-indigo-400 shrink-0" />,
};

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="bg-primary/30 text-primary font-bold px-0.5 rounded-sm">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('intelliforceai_recent_searches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const saveRecentSearch = useCallback(
    (term: string) => {
      if (!term.trim()) return;
      setRecentSearches((prev) => {
        const updated = [term, ...prev.filter((s) => s !== term)].slice(0, 5);
        try {
          localStorage.setItem('intelliforceai_recent_searches', JSON.stringify(updated));
        } catch {
          // Ignore
        }
        return updated;
      });
    },
    []
  );

  // Filter items
  const results = globalSearchIndex.filter((item) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const handleSelect = useCallback(
    (href: string, termToSave?: string) => {
      if (termToSave) saveRecentSearch(termToSave);
      onClose();
      router.push(href);
    },
    [onClose, router, saveRecentSearch]
  );

  // Keyboard Navigation (ArrowUp, ArrowDown, Enter, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          results.length > 0 ? (prev - 1 + results.length) % results.length : 0
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].href, query);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, query, handleSelect, onClose]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Global Search"
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <GlassCard intensity="high" className="p-0 overflow-hidden border-primary/40 shadow-2xl">
            {/* Input Bar Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border/40 bg-surface/80">
              <Search className="h-5 w-5 text-primary shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products, research papers, documentation, blog posts..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-block rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                ESC
              </kbd>
            </div>

            {/* Results / Empty State */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
              {query ? (
                results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((item, idx) => {
                      const isSelected = idx === selectedIndex;
                      const icon = categoryIconMap[item.category];
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleSelect(item.href, query)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-start justify-between gap-3 p-3.5 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-primary/10 border border-primary/40 shadow-xs'
                              : 'hover:bg-surface/50 border border-transparent'
                          }`}
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            <div className="mt-0.5">{icon}</div>
                            <div className="space-y-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-foreground truncate">
                                  {highlightMatch(item.title, query)}
                                </h4>
                                <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                                  {item.category}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                {highlightMatch(item.description, query)}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center text-xs font-mono text-primary shrink-0 self-center">
                            <CornerDownLeft className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 space-y-2">
                    <p className="text-sm text-foreground font-semibold">
                      No results found for &quot;{query}&quot;
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Try checking for typos or searching with different keywords.
                    </p>
                  </div>
                )
              ) : (
                <div className="space-y-6 py-2">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Recent Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((term) => (
                          <button
                            key={term}
                            type="button"
                            onClick={() => setQuery(term)}
                            className="rounded-lg border border-border/60 bg-surface/50 px-3 py-1 text-xs font-medium text-foreground hover:border-primary/40 transition-all"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Searches */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                      <span>Popular Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((pop) => (
                        <button
                          key={pop}
                          type="button"
                          onClick={() => setQuery(pop)}
                          className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface/50 px-3 py-1 text-xs font-medium text-foreground hover:border-primary/40 transition-all"
                        >
                          <span>{pop}</span>
                          <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="flex items-center justify-between border-t border-border/40 bg-surface/40 px-4 py-2 text-[11px] font-mono text-muted-foreground">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="rounded border border-border px-1">↑</kbd>{' '}
                  <kbd className="rounded border border-border px-1">↓</kbd> Navigate
                </span>
                <span>
                  <kbd className="rounded border border-border px-1">↵</kbd> Select
                </span>
              </div>
              <span>IntelliForceAI Global Search</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
