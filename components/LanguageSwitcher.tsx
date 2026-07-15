'use client';

import { useLanguage } from "@/app/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button
      className="btn-accent-outline"
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      style={{ padding: '8px 16px', fontSize: '14px' }}
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}