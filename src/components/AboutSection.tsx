"use client";

import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import Reveal from "./Reveal";

export default function AboutSection() {
  const { lang } = useLang();
  const a = t.about;

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Visual */}
          <Reveal className="relative">
            <div className="glow rounded-2xl border border-border bg-surface p-10">
              <div className="grid grid-cols-3 gap-4">
                {["AI", "ML", "DL", "API", "SaaS", "DB", "R&D", "IoT", "Dev"].map((label) => (
                  <div
                    key={label}
                    className="flex aspect-square items-center justify-center rounded-xl border border-border bg-background text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full border border-foreground bg-background">
                  <div className="h-full w-4/5 rounded-full bg-foreground" />
                </div>
                <span className="text-xs text-muted">{a.techCapability[lang]}</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={120}>
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

            {/* Education & Research */}
            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex rounded-lg border border-foreground bg-background p-2 text-foreground">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </span>
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                  {a.education.label[lang]}
                </span>
              </div>
              <h4 className="mb-1 font-semibold leading-snug">{a.education.title[lang]}</h4>
              <p className="mb-3 text-sm font-medium text-foreground">{a.education.org[lang]}</p>
              <p className="text-sm leading-relaxed text-muted">{a.education.desc[lang]}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
