import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { SKILL_GROUPS } from "@/lib/constants";

export function Skills() {
  return (
    <section className="section" id="stack">
      <Reveal>
        <Eyebrow>02 — Technical Stack</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">A toolkit built for AI-driven, secure systems.</h2>
          <p className="sec-desc">
            Grouped by the role each layer plays — from language choice to the
            cybersecurity practices woven through everything above it.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="skill-grid">
          {SKILL_GROUPS.map((g) => {
            const Icon = g.icon;
            return (
              <div className="skill-card" key={g.key}>
                <div className="skill-icon">
                  <Icon size={18} />
                </div>
                <div className="skill-title">{g.title}</div>
                <div className="skill-tags">
                  {g.items.map((item) => (
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
