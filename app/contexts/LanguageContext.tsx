'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

type Translations = typeof translations.en;
type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends object
    ? `${K}.${NestedKeyOf<T[K]>}`
    : K;
}[keyof T & string];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: any, params?: Record<string, string>) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: any, params?: Record<string, string>) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value[k];
      if (!value) return key;
    }
    if (typeof value === 'string' && params) {
      Object.entries(params).forEach(([k, v]) => {
        value = value.replace(`{${k}}`, v);
      });
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}