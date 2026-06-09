"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { useTheme } from "./ThemeProvider";
import { t, langLabels, type Lang } from "@/i18n/translations";

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`flex items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-gold ${className}`}
    >
      {theme === "dark" ? (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      )}
    </button>
  );
}

const navLinks = [
  { href: "#home", key: "home" as const },
  { href: "#services", key: "services" as const },
  { href: "#products", key: "products" as const },
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
          <Image src="/logo.png" alt="IMPULSER" width={36} height={36} className="logo-mark" />
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
            className="rounded-lg border border-foreground bg-background px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {t.nav.cta[lang]}
          </a>

          <ThemeToggle className="h-9 w-9" />

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
                    className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-foreground hover:text-background ${l === lang ? "font-semibold text-foreground" : "text-foreground"}`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: Theme + Lang + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="h-8 w-8" />

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
                    className={`block w-full px-3 py-1.5 text-left text-xs ${l === lang ? "font-semibold text-foreground" : "text-foreground"}`}
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
