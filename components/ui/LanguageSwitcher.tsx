'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { languages, Locale } from '@/config/i18n';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
      <select
        aria-label="Select Language"
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="rounded-lg border border-border/60 bg-surface/60 px-2 py-1 text-xs font-semibold text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
      >
        {Object.values(languages).map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}
