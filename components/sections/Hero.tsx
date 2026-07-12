"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HeroBackground } from "./HeroBackground";

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
      <HeroBackground />
      <div className="scan-wrap">
        <div className="scan-line" />
      </div>
      <div className="radial-glow" />
      <div className="radial-glow-2" />
      <div className="hero-inner">
        <motion.div
          className="status-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
        >
          <span className="pulse-dot" />
          AVAILABLE FOR NEW ENGAGEMENTS
        </motion.div>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.4 }}
        >
          EMNA <span className="accent">OTHMEN</span>
        </motion.h1>
        <motion.div
          className="hero-role mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.6 }}
        >
          BUILDING {roleText}
          <span className="cursor" />
        </motion.div>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.8 }}
        >
          Full-Stack &amp; AI Engineer designing production-grade software — from
          secure backend systems to AI-assisted applications and modern,
          resilient web platforms.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 1 }}
        >
          <button
            className="btn-accent-outline"
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
        </motion.div>
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 1.2 }}
        >
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
        </motion.div>
      </div>
    </header>
  );
}
