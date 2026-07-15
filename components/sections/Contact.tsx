import { Reveal } from "@/components/Reveal";
import { Bracketed } from "@/components/Bracketed";
import { Lock } from "lucide-react";
import { CONTACTS } from "@/lib/constants";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const translatedContacts = t('contact.contacts');
  return (
    <section className="section" id="contact">
      <Reveal distance={32}>
        <Bracketed className="contact-panel">
          <Lock size={28} style={{ color: "var(--cyan)", marginBottom: 24 }} />
          <h2 
            className="contact-title" 
            dangerouslySetInnerHTML={{ __html: t('contact.title') }} 
          />
          <p className="contact-sub">{t('contact.desc')}</p>
          <div className="contact-links">
            {CONTACTS.map((contact, index: number) => {
              const Icon = contact.icon;
              const isExternal = !contact.href.startsWith('mailto:') && !contact.href.startsWith('tel:');
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="contact-link"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <Icon size={16} /> {translatedContacts[contact.label as keyof typeof translatedContacts]}
                </a>
              );
            })}
          </div>
        </Bracketed>
      </Reveal>
    </section>
  );
}
