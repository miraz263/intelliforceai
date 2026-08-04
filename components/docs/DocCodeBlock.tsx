'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

export interface DocCodeBlockProps {
  language?: string;
  code: string;
}

export function DocCodeBlock({ language = 'bash', code }: DocCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-2xl border border-border/60 bg-black/90 shadow-2xl">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border/40 bg-surface/60 px-4 py-2 text-xs font-mono text-muted-foreground">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span className="uppercase tracking-wider font-bold text-cyan-400">{language}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/60 px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-muted/50 transition-all"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre className="overflow-x-auto p-4 sm:p-5 text-xs font-mono text-cyan-200 leading-relaxed">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
