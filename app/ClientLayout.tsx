'use client';

import { useLanguage } from "./contexts/LanguageContext";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  return (
    <html lang={language}>
      <body>{children}</body>
    </html>
  );
}
