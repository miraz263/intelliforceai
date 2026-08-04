'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-50 bg-gradient-to-r from-blue-900/90 via-cyan-900/90 to-violet-900/90 text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-400/20 px-2 py-0.5 text-xs font-semibold text-cyan-300 border border-cyan-400/30 shrink-0">
              <Sparkles className="h-3 w-3" /> New Release
            </span>
            <span className="font-medium text-slate-200">
              IntelliForceAI 2.0 Autonomous AI Platform is now live.
            </span>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Explore Platform <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="rounded-lg p-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
