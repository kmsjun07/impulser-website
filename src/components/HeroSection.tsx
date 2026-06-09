"use client";

import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

function Plus() {
  return (
    <svg className="h-4 w-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

// Deterministic bar field (no Math.random → no hydration mismatch)
const BARS = Array.from({ length: 36 }, (_, i) => {
  const env = Math.sin((Math.PI * i) / 35); // 0 → 1 → 0 envelope (waveform shape)
  const height = Math.round(28 + env * 170 + (i % 4) * 10);
  const delay = ((i * 137) % 100) / 100; // 0–0.99s
  const duration = 1.05 + ((i * 53) % 70) / 100; // 1.05–1.74s
  const opacity = 0.35 + env * 0.5;
  return { height, delay, duration, opacity };
});

export default function HeroSection() {
  const { lang } = useLang();
  const h = t.hero;

  return (
    <section id="home" className="px-4 pt-24 pb-12 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        {/* Split card: black copy panel + animated monochrome visual */}
        <div className="relative grid overflow-hidden rounded-[28px] lg:grid-cols-2">
          {/* Left: black panel with copy */}
          <div className="relative z-10 flex flex-col justify-center bg-[#0a0a0a] px-8 py-14 text-white sm:px-12 lg:py-20">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              {h.badge[lang]}
            </div>

            <h1 className="text-4xl font-bold leading-[1.18] tracking-tight text-white break-keep sm:text-5xl lg:text-6xl">
              {h.heading1[lang]}
              <br />
              {h.heading2[lang]}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 break-keep sm:text-lg">
              {h.subtitle[lang].replace(/\n/g, " ")}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-between gap-6 rounded-lg border border-white/25 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                {h.ctaPrimary[lang]}
                <Plus />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-between gap-6 rounded-lg border border-white/25 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                {h.ctaSecondary[lang]}
                <Plus />
              </a>
            </div>
          </div>

          {/* Right: animated monochrome data-pulse visual (drop /hero.mp4 to override) */}
          <div className="relative min-h-[320px] overflow-hidden bg-[#0a0a0a] lg:min-h-[540px]">
            <div className="hero-aurora absolute inset-0" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Equalizer / waveform */}
            <div className="absolute inset-0 flex items-center justify-center gap-[5px] px-8 sm:gap-2 sm:px-12">
              {BARS.map((bar, i) => (
                <span
                  key={i}
                  className="eq-bar w-[3px] rounded-full bg-white sm:w-1.5"
                  style={{
                    height: `${bar.height}px`,
                    opacity: bar.opacity,
                    animationDelay: `${bar.delay}s`,
                    animationDuration: `${bar.duration}s`,
                  }}
                />
              ))}
            </div>

            {/* Optional video overrides the visual when present */}
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
            <div key={stat.label} className="border-l-2 border-foreground/15 pl-4">
              <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
