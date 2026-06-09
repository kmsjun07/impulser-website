"use client";

import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import CodeRain from "./CodeRain";

function Plus() {
  return (
    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function HeroSection() {
  const { lang } = useLang();
  const h = t.hero;

  return (
    <section id="home" className="px-4 pt-24 pb-12 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        {/* Split card: black copy panel + animated binary-rain visual */}
        <div className="relative grid overflow-hidden rounded-[28px] lg:grid-cols-2">
          {/* Left: black panel with copy */}
          <div className="relative z-10 flex flex-col justify-center bg-[#0a0a0a] px-8 py-14 text-white sm:px-12 lg:py-20">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white px-4 py-1.5 text-sm text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {h.badge[lang]}
            </div>

            <h1 className="text-4xl font-bold leading-[1.18] tracking-tight text-white break-keep sm:text-5xl lg:text-6xl">
              {h.heading1[lang]}
              <br />
              {h.heading2[lang]}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white break-keep whitespace-pre-line">
              {h.subtitle[lang]}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-between gap-6 rounded-lg border border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
              >
                {h.ctaPrimary[lang]}
                <Plus />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-between gap-6 rounded-lg border border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
              >
                {h.ctaSecondary[lang]}
                <Plus />
              </a>
            </div>
          </div>

          {/* Right: animated binary rain (drop /hero.mp4 into public/ to override) */}
          <div className="relative min-h-[320px] overflow-hidden bg-[#0a0a0a] lg:min-h-[540px]">
            <CodeRain />

            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/hero-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Blend the two panels on large screens */}
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#0a0a0a] to-transparent lg:block" />
          </div>
        </div>

        {/* Stat strip below the card */}
        <div className="mt-10 grid grid-cols-2 gap-6 px-2 sm:grid-cols-4">
          {[
            { value: "AI", label: h.stats.ai[lang] },
            { value: "24/7", label: h.stats.system[lang] },
            { value: lang === "ko" ? "맞춤형" : lang === "ja" ? "カスタム" : "Custom", label: h.stats.solution[lang] },
            { value: "R&D", label: h.stats.rnd[lang] },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-foreground pl-4">
              <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
