"use client";

import { ArrowRight } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

interface HeroProps {
  onCTAClick: (id: string) => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const roleText = useTypewriter(
    ["AI SYSTEMS", "SECURE INFRASTRUCTURE", "CLOUD PLATFORMS", "MODERN WEB APPS"],
    60,
    1500
  );

  return (
    <header className="hero">
      <div className="scan-wrap">
        <div className="scan-line" />
      </div>
      <div className="radial-glow" />
      <div className="radial-glow-2" />
      <div className="hero-inner">
        <div className="status-line">
          <span className="pulse-dot" />
          AVAILABLE FOR NEW ENGAGEMENTS
        </div>
        <h1 className="hero-name">
          EMNA <span className="accent">OTHMEN</span>
        </h1>
        <div className="hero-role mono">
          BUILDING {roleText}
          <span className="cursor" />
        </div>
        <p className="hero-sub">
          Full-Stack &amp; AI Engineer designing production-grade software — from
          secure backend systems to AI-assisted applications and modern,
          resilient web platforms.
        </p>
        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => onCTAClick("work")}
          >
            View the work <ArrowRight size={17} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => onCTAClick("contact")}
          >
            Start a conversation
          </button>
        </div>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <div className="hero-meta-value">AI / ML</div>
            <div className="hero-meta-label">Detection systems &amp; intelligent tooling</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">SECURITY</div>
            <div className="hero-meta-label">SIEM/XDR, PKI, zero-trust architecture</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">CLOUD</div>
            <div className="hero-meta-label">Containerized, scalable infrastructure</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">WEB</div>
            <div className="hero-meta-label">Modern, accessible product engineering</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">BASE</div>
            <div className="hero-meta-label">Sfax, Tunisia — open to remote &amp; relocation</div>
          </div>
        </div>
      </div>
    </header>
  );
}
