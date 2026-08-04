'use client';

import React, { useState } from 'react';
import { Share2, Linkedin, Twitter, Copy, Check } from 'lucide-react';
import { IconButton } from '@/components/buttons/IconButton';

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const twitterShare = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono font-bold text-muted-foreground uppercase mr-1">
        <Share2 className="h-3.5 w-3.5 inline mr-1" />
        Share:
      </span>

      <a href={twitterShare} target="_blank" rel="noopener noreferrer">
        <IconButton
          aria-label="Share on Twitter"
          variant="outline"
          size="sm"
          isRounded
          icon={<Twitter className="h-3.5 w-3.5 text-sky-400" />}
        />
      </a>

      <a href={linkedinShare} target="_blank" rel="noopener noreferrer">
        <IconButton
          aria-label="Share on LinkedIn"
          variant="outline"
          size="sm"
          isRounded
          icon={<Linkedin className="h-3.5 w-3.5 text-blue-400" />}
        />
      </a>

      <div className="relative">
        <IconButton
          aria-label="Copy post link"
          onClick={copyToClipboard}
          variant="outline"
          size="sm"
          isRounded
          icon={
            copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-muted-foreground" />
            )
          }
        />
        {copied && (
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-emerald-500/90 px-2 py-0.5 text-[10px] font-bold text-white shadow-md animate-in fade-in">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
