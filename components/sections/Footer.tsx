import { useLanguage } from "@/app/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear().toString();
  return (
    <footer>
      <span>{t('footer.copyright', { year })}</span>
      <span className="mono">{t('footer.systemStatus')}</span>
    </footer>
  );
}
