import { Reveal } from "@/components/Reveal";
import { Bracketed } from "@/components/Bracketed";
import { Lock } from "lucide-react";
import { CONTACTS } from "@/lib/constants";

export function Contact() {
  return (
    <section className="section" id="contact">
      <Reveal>
        <Bracketed className="contact-panel">
          <Lock size={26} style={{ color: "var(--cyan)", marginBottom: 20 }} />
          <h2 className="contact-title">Let's build something<br />that has to work.</h2>
          <p className="contact-sub">
            Open to full-time roles, contract engagements, and collaborations with
            teams building serious AI, security, or cloud products.
          </p>
          <div className="contact-links">
            {CONTACTS.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="contact-link"
                >
                  <Icon size={15} /> {contact.label}
                </a>
              );
            })}
          </div>
        </Bracketed>
      </Reveal>
    </section>
  );
}
