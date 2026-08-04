'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function SkipToContent() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-primary-foreground focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-ring"
    >
      {t('a11y.skipToContent')}
    </a>
  );
}
