"use client";

import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export default function HeroSection() {
  const { lang } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      className="grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-gold/20 bg-surface p-6">
            <Image src="/logo.png" alt="IMPULSER" width={80} height={80} />
          </div>
        </div>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-surface px-4 py-2 text-sm text-gold">
          <span className="h-2 w-2 rounded-full bg-gold" />
          {h.badge[lang]}
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
          {h.heading1[lang]}
          <br />
          <span className="gradient-text">{h.heading2[lang]}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl whitespace-pre-line">
          {h.subtitle[lang]}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="rounded-lg bg-gold px-8 py-3.5 font-medium text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            {h.ctaPrimary[lang]}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-gold/30 px-8 py-3.5 font-medium text-gold transition-colors hover:bg-gold/10"
          >
            {h.ctaSecondary[lang]}
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "AI", label: h.stats.ai[lang] },
            { value: "24/7", label: h.stats.system[lang] },
            { value: lang === "ko" ? "맞춤형" : lang === "ja" ? "カスタム" : "Custom", label: h.stats.solution[lang] },
            { value: "R&D", label: h.stats.rnd[lang] },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-gold sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
