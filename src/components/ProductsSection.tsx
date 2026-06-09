"use client";

import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import Reveal from "./Reveal";

const PILLERT_PLAY =
  "https://play.google.com/store/apps/details?id=com.pillert.app";
const PILLERT_APPSTORE =
  "https://apps.apple.com/kr/app/%ED%95%84%EB%9F%AC%ED%8A%B8-pillert/id6768313078";

export default function ProductsSection() {
  const { lang } = useLang();
  const p = t.products;
  const [pillert, fandora, ssalmeok] = p.items;
  const upcoming = [fandora, ssalmeok];

  return (
    <section id="products" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">
            {p.label[lang]}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl whitespace-pre-line">
            {p.heading1[lang]}
            <span className="gradient-text">{p.headingAccent[lang]}</span>
            {p.heading2[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{p.subtitle[lang]}</p>
        </Reveal>

        {/* Featured: Pillert */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 sm:p-12">
            <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr]">
              {/* Logo tile */}
              <div className="flex justify-center lg:justify-start">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-3xl border border-border shadow-lg sm:h-40 sm:w-40">
                  <Image
                    src="/pillert.png"
                    alt="Pillert"
                    width={160}
                    height={160}
                    className="h-full w-full rounded-3xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
                    </span>
                    {p.statusLive[lang]}
                  </span>
                  <span className="text-xs font-medium tracking-wide text-muted uppercase">
                    {pillert.category[lang]}
                  </span>
                </div>

                <h3 className="mb-2 text-3xl font-bold sm:text-4xl">
                  {pillert.name[lang]}
                </h3>
                <p className="mb-4 text-lg font-medium text-foreground">
                  {pillert.tagline[lang]}
                </p>
                <p className="mb-7 max-w-xl leading-relaxed text-foreground">
                  {pillert.desc[lang]}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={PILLERT_APPSTORE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.14-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13zM14.6 4.42c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-3 1.54-.66.76-1.24 1.98-1.08 3.15 1.14.09 2.31-.58 3.02-1.44z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href={PILLERT_PLAY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.6 1.84a1 1 0 0 0-.6.92v18.48a1 1 0 0 0 .6.92l10.1-10.16L3.6 1.84zM15.1 13.4l2.86 2.88-11.3 6.4 8.44-9.28zm0-2.8L6.66 1.32l11.3 6.4-2.86 2.88zm5.46-.94-2.4 1.36 2.4 1.36c.7.4.7 1.7 0 2.1l-.02.01 2.04-3.47-2.02-1.36z" />
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Upcoming */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {upcoming.map((item, i) => (
            <Reveal key={item.name.en} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background p-8 transition-transform hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-foreground bg-background text-2xl font-bold text-foreground">
                    {item.name[lang].charAt(0)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground bg-background px-3 py-1 text-xs font-medium text-foreground">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {p.statusUpcoming[lang]}
                  </span>
                </div>

                <p className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">
                  {item.category[lang]}
                </p>
                <h3 className="mb-2 text-2xl font-bold">{item.name[lang]}</h3>
                <p className="mb-3 font-medium text-foreground">{item.tagline[lang]}</p>
                <p className="text-sm leading-relaxed text-foreground">{item.desc[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
