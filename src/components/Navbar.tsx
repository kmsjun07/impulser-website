"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { t, langLabels, type Lang } from "@/i18n/translations";

const navLinks = [
  { href: "#home", key: "home" as const },
  { href: "#services", key: "services" as const },
  { href: "#about", key: "about" as const },
  { href: "#tech", key: "tech" as const },
  { href: "#contact", key: "contact" as const },
];

const langs: Lang[] = ["ko", "en", "ja"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="IMPULSER" width={36} height={36} />
          <span className="text-xl font-bold tracking-wider gradient-text">
            IMPULSER
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              {t.nav[link.key][lang]}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-lg border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
          >
            {t.nav.cta[lang]}
          </a>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {langLabels[lang]}
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-lg border border-border bg-surface py-1 shadow-xl">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-surface-light ${l === lang ? "text-gold" : "text-muted"}`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: Lang + Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="rounded-lg border border-border px-2 py-1.5 text-xs text-muted"
            >
              {langLabels[lang]}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-lg border border-border bg-surface py-1 shadow-xl">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`block w-full px-3 py-1.5 text-left text-xs ${l === lang ? "text-gold" : "text-muted"}`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5"
            aria-label="메뉴"
          >
            <span className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-muted transition-colors hover:text-gold"
            >
              {t.nav[link.key][lang]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
