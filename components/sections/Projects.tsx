import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { Bracketed } from "@/components/Bracketed";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  return (
    <section className="section" id="work">
      <Reveal>
        <Eyebrow>03 — Featured Work</Eyebrow>
        <div className="sec-head">
          <h2 className="sec-title">Five systems. Five domains. One engineering standard.</h2>
          <p className="sec-desc">
            Each project shipped as a complete product — architecture, security,
            and interface treated as one problem, not three.
          </p>
        </div>
      </Reveal>
      {PROJECTS.map((project, index) => {
        const Icon = project.icon;
        return (
          <Reveal key={project.title} delay={index * 0.08} distance={32}>
            <Bracketed className="project">
              <div>
                <div className="project-icon-badge">
                  <Icon size={24} />
                </div>
                <span className="project-tag mono">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p className="project-desc">{project.description}</p>
                {project.youtubeId && (
                  <div className="project-video">
                    <iframe
                      width="100%"
                      height="250"
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={`Demo for ${project.title}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
              <div>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="hl-bullet" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="stack-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Bracketed>
          </Reveal>
        );
      })}
    </section>
  );
}
