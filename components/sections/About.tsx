import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { STATS } from "@/lib/constants";

export function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <Eyebrow>01 — About</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">Building end-to-end solutions across domains.</h2>
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal delay={0.08} distance={32}>
          <div className="about-text">
            <p>
              I'm a <strong>Full-Stack &amp; AI Engineer</strong> with over two years of experience
              building production-grade software across various domains — from cybersecurity platforms
              and AI-driven tools to e-commerce solutions, social platforms, and medical management systems.
            </p>
            <p>
              My expertise spans <strong>full-stack web development</strong>, <strong>applied AI &amp; machine learning</strong>,
              <strong> secure backend architecture</strong>, and <strong>cloud infrastructure</strong>. I love turning complex problems
              into simple, scalable, and user-friendly solutions.
            </p>
            <p>
              I work end to end — from designing data models and APIs to building responsive, modern interfaces
              — and I always prioritize clean code, performance, and security in everything I build.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.16} distance={32}>
          <div className="about-stats">
            {STATS.map((stat) => (
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
