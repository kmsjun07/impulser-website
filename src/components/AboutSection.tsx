"use client";

import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export default function AboutSection() {
  const { lang } = useLang();
  const a = t.about;

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Visual */}
          <div className="relative">
            <div className="glow rounded-2xl border border-border bg-surface p-10">
              <div className="grid grid-cols-3 gap-4">
                {["AI", "ML", "DL", "API", "SaaS", "DB", "R&D", "IoT", "Dev"].map((label) => (
                  <div
                    key={label}
                    className="flex aspect-square items-center justify-center rounded-xl border border-border bg-background text-sm font-mono text-muted transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-gold/10">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
                </div>
                <span className="text-xs text-muted">{a.techCapability[lang]}</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">About Us</p>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl whitespace-pre-line">
              {a.heading1[lang]}<span className="gradient-text">{a.headingAccent[lang]}</span>{a.heading2[lang]}
            </h2>
            <p className="mb-6 leading-relaxed text-muted">{a.desc1[lang]}</p>
            <p className="mb-8 leading-relaxed text-muted">{a.desc2[lang]}</p>

            <div className="space-y-4">
              {a.values.map((value) => (
                <div key={value.title.en} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <div>
                    <h4 className="font-semibold">{value.title[lang]}</h4>
                    <p className="text-sm text-muted">{value.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
