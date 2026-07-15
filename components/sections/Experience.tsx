import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { TIMELINE_METADATA, EDUCATION_METADATA, CERTS_METADATA } from "@/lib/constants";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function Experience() {
  const { t } = useLanguage();
  const timeline = t('experience.timeline');
  const educationItems = t('experience.educationItems');
  const certificationsItems = t('experience.certificationsItems');
  const languagesItems = t('experience.languagesItems');

  return (
    <section className="section" id="experience">
      <Reveal>
        <Eyebrow>{t('experience.eyebrow')}</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">{t('experience.title')}</h2>
        </div>
      </Reveal>
      <div className="timeline">
        {timeline.map((item: { period: string; role: string; org: string; detail: string[] }, index: number) => {
          const metadata = TIMELINE_METADATA[index];
          const Icon = metadata.icon;
          return (
            <Reveal key={item.role + item.period} delay={index * 0.08} distance={32}>
              <div className="tl-item">
                <div className="tl-period mono">{item.period}</div>
                <div>
                  <div className="tl-icon">
                    <Icon size={18} />
                  </div>
                  <div className="tl-role">{item.role}</div>
                  <div className="tl-org">{item.org}</div>
                  <div className="tl-detail">
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: 0 }}>
                      {item.detail.map((point, idx: number) => (
                        <li key={idx} style={{ marginBottom: "8px" }}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <div className="edu-cert-grid">
        <Reveal delay={0.16}>
          <div>
            <div className="block-label">{t('experience.educationLabel')}</div>
            <div className="mini-card-list">
              {educationItems.map((edu: { title: string; org: string; period: string }, index: number) => {
                const metadata = EDUCATION_METADATA[index];
                const Icon = metadata.icon;
                return (
                  <div className="mini-card" key={edu.title}>
                    <Icon className="mini-card-icon" size={22} />
                    <div>
                      <div className="mini-card-title">{edu.title}</div>
                      <div className="mini-card-sub">
                        {edu.org} · {edu.period}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div>
            <div className="block-label">{t('experience.certificationsLabel')}</div>
            <div className="mini-card-list">
              {certificationsItems.map((cert: { label: string }, index: number) => {
                const metadata = CERTS_METADATA[index];
                const Icon = metadata.icon;
                return (
                  <div className="mini-card" key={cert.label}>
                    <Icon className="mini-card-icon" size={22} />
                    <div className="mini-card-title">{cert.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.32}>
        <div style={{ marginTop: 48 }}>
          <div className="block-label">{t('experience.languagesLabel')}</div>
          <div className="skill-tags">
            {languagesItems.map((lang: { label: string; level: string }) => (
              <span
                className="skill-tag mono"
                key={lang.label}
                style={{ fontSize: 13, padding: "6px 14px" }}
              >
                {lang.label} — {lang.level}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
