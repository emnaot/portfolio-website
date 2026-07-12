import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { STATS } from "@/lib/constants";

export function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <Eyebrow>01 — About</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">Engineering for systems that can't afford to fail.</h2>
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal delay={0.05}>
          <div className="about-text">
            <p>
              I'm a <strong>Full-Stack &amp; AI Engineer</strong> with over two years spent
              building software where correctness and security aren't optional —
              cybersecurity platforms that detect threats in real time, AI-driven
              tools that turn unstructured data into decisions, and cloud backends
              that hold up under production load.
            </p>
            <p>
              My work sits at the intersection of three disciplines: <strong>secure
              backend architecture</strong>, <strong>applied AI</strong>, and <strong>modern
              frontend engineering</strong>. I care as much about a clean threat-detection
              pipeline as I do about the interface a security analyst actually has
              to use at 3am.
            </p>
            <p>
              I work end to end — from data model and API design through to the
              interactions a user finally touches — and I default to building
              systems that are observable, permissioned correctly, and built to
              scale from day one.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="about-stats">
            {STATS.map((s) => (
              <div className="stat-box" key={s.label}>
                <div className="stat-value display">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
