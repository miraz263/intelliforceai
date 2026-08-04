'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/cards/GlassCard';

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  id,
  question,
  answer,
  category,
  isOpen: defaultIsOpen = false,
  onToggle,
}: AccordionItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultIsOpen);
  const isOpen = onToggle ? defaultIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const contentId = `accordion-content-${id}`;
  const headerId = `accordion-header-${id}`;

  return (
    <GlassCard
      intensity="medium"
      className={`transition-all duration-300 ${
        isOpen ? 'border-primary/50 shadow-glow' : 'hover:border-border'
      }`}
    >
      <button
        id={headerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={handleToggle}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
      >
        <div className="flex items-center gap-3">
          <Sparkles className={`h-4 w-4 shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-cyan-400/60'}`} />
          <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
            {question}
          </span>
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/30 pt-4">
              <p>{answer}</p>
              {category && (
                <div className="mt-3 font-mono text-[10px] uppercase text-cyan-400 tracking-wider">
                  Category: {category}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
