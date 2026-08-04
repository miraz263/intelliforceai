export type Locale = 'en' | 'bn';

export type TextDirection = 'ltr' | 'rtl';

export interface LanguageInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  dir: TextDirection;
}

export const languages: Record<Locale, LanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
  },
  bn: {
    code: 'bn',
    name: 'Bangla',
    nativeName: 'বাংলা',
    flag: '🇧🇩',
    dir: 'ltr',
  },
};

export const defaultLocale: Locale = 'en';
