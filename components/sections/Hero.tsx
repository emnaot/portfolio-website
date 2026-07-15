"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HeroBackground } from "./HeroBackground";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface HeroProps {
  onCTAClick: (id: string) => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { language, t } = useLanguage();
  const roleTypes = t('hero.roleTypes');
  const roleText = useTypewriter(
    roleTypes as string[],
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
          {t('hero.status')}
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
          {language === 'en' ? 'BUILDING' : 'CONSTRUIRE'} {roleText}
          <span className="cursor" />
        </motion.div>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.8 }}
        >
          {t('hero.subtitle')}
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
            {t('hero.cta1')} <ArrowRight size={17} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => onCTAClick("contact")}
          >
            {t('hero.cta2')}
          </button>
        </motion.div>
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 1.2 }}
        >
          <div className="hero-meta-item">
            <div className="hero-meta-value">{t('hero.meta.ai.value')}</div>
            <div className="hero-meta-label">{t('hero.meta.ai.label')}</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">{t('hero.meta.security.value')}</div>
            <div className="hero-meta-label">{t('hero.meta.security.label')}</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">{t('hero.meta.cloud.value')}</div>
            <div className="hero-meta-label">{t('hero.meta.cloud.label')}</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">{t('hero.meta.web.value')}</div>
            <div className="hero-meta-label">{t('hero.meta.web.label')}</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">{t('hero.meta.base.value')}</div>
            <div className="hero-meta-label">{t('hero.meta.base.label')}</div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
