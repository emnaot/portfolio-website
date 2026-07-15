import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { SKILL_GROUPS } from "@/lib/constants";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="stack">
      <Reveal>
        <Eyebrow>{t('skills.eyebrow')}</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">{t('skills.title')}</h2>
          <p className="sec-desc">
            {t('skills.desc')}
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.08} distance={32}>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group, index: number) => {
            const Icon = group.icon;
            const translatedGroup = t('skills.groups')[index] as { title: string };
            return (
              <div className="skill-card" key={group.key} style={{ animationDelay: `${index * 0.03}s` }}>
                <div className="skill-icon">
                  <Icon size={20} />
                </div>
                <div className="skill-title">{translatedGroup.title}</div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag mono" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
