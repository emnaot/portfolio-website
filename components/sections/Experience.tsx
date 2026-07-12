import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { TIMELINE, EDUCATION, CERTS, LANGUAGES } from "@/lib/constants";

export function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <Eyebrow>04 — Path</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">Experience, education, and certifications.</h2>
        </div>
      </Reveal>
      <div className="timeline">
        {TIMELINE.map((item, index) => {
          const Icon = item.icon;
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
                      {item.detail.map((point, idx) => (
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
            <div className="block-label">Education</div>
            <div className="mini-card-list">
              {EDUCATION.map((edu) => {
                const Icon = edu.icon;
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
            <div className="block-label">Certifications</div>
            <div className="mini-card-list">
              {CERTS.map((cert) => {
                const Icon = cert.icon;
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
          <div className="block-label">Languages</div>
          <div className="skill-tags">
            {LANGUAGES.map((lang) => (
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
