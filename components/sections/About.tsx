import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const stats = t('stats');
  return (
    <section className="section" id="about">
      <Reveal>
        <Eyebrow>{t('about.eyebrow')}</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">{t('about.title')}</h2>
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal delay={0.08} distance={32}>
          <div className="about-text">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </Reveal>
        <Reveal delay={0.16} distance={32}>
          <div className="about-stats">
            {stats.map((stat: { value: string; label: string }, index: number) => (
              <div className="stat-box" key={stat.label}>
                <div className="stat-value display">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
