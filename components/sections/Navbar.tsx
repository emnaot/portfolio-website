"use client";

import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface NavbarProps {
  onNavClick: (id: string) => void;
}

export function Navbar({ onNavClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="brand">
          <span className="brand-mark">
            <Terminal size={15} />
          </span>
          EMNA OTHMEN
        </div>
        <div className="nav-links">
          {NAV.map((n) => (
            <button
              key={n.id}
              className="nav-link"
              onClick={() => onNavClick(n.id)}
            >
              {t(`nav.${n.id}`)}
            </button>
          ))}
        </div>
        <LanguageSwitcher />
        <button className="nav-cta" onClick={() => onNavClick("contact")}>
          {language === 'en' ? "Get in touch" : "Contactez-moi"}
        </button>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ position: "absolute", top: 24, right: 28 }}
          >
            <X size={26} />
          </button>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                setMenuOpen(false);
                onNavClick(n.id);
              }}
            >
              {t(`nav.${n.id}`)}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
