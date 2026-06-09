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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-white"
    >
      {/* Background video (drop /hero.mp4 + /hero-poster.jpg into public/) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Animated mesh gradient — shows on its own when no video is present */}
      <div className="hero-mesh absolute inset-0 z-0" />

      {/* Readability overlay + grid texture */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#070d1c]/70 via-[#0a1428]/75 to-[#070d1c]/95" />
      <div className="grid-bg absolute inset-0 z-0 opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            <Image src="/logo.png" alt="IMPULSER" width={80} height={80} />
          </div>
        </div>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-sky-200 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          {h.badge[lang]}
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
          {h.heading1[lang]}
          <br />
          <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {h.heading2[lang]}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl whitespace-pre-line">
          {h.subtitle[lang]}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="rounded-lg bg-blue-600 px-8 py-3.5 font-medium text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            {h.ctaPrimary[lang]}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/30 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
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
              <div className="text-2xl font-bold text-sky-300 sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="scroll"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
      >
        <svg className="scroll-indicator h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
