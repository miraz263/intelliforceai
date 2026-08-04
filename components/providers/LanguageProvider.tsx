'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, languages, defaultLocale, TextDirection } from '@/config/i18n';
import { translations } from '@/config/translations';

export interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: TextDirection;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key: string) => key,
  dir: 'ltr',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('intelliforceai_locale') as Locale;
      if (saved && languages[saved]) {
        setLocaleState(saved);
      }
    } catch {
      // Ignore
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    if (!languages[newLocale]) return;
    setLocaleState(newLocale);
    try {
      localStorage.setItem('intelliforceai_locale', newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = languages[newLocale].dir;
    } catch {
      // Ignore
    }
  };

  const t = (key: string): string => {
    const dict = translations[locale] || translations[defaultLocale];
    return dict[key] || translations[defaultLocale][key] || key;
  };

  const dir = languages[locale].dir;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
