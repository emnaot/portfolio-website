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
      <Reveal delay={0.08} distance={32}>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = group.icon;
            return (
              <div className="skill-card" key={group.key} style={{ animationDelay: `${index * 0.03}s` }}>
                <div className="skill-icon">
                  <Icon size={20} />
                </div>
                <div className="skill-title">{group.title}</div>
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
