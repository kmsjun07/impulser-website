"use client";

import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export default function Footer() {
  const { lang } = useLang();
  const f = t.footer;

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/logo.png" alt="IMPULSER" width={28} height={28} />
              <span className="text-lg font-bold tracking-wider gradient-text">IMPULSER</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">{f.tagline[lang]}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">{f.services[lang]}</h4>
            <div className="space-y-2 text-sm text-muted">
              {t.services.items.map((s) => (
                <p key={s.title.en}>{s.title[lang]}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">{f.contactInfo[lang]}</h4>
            <div className="space-y-2 text-sm text-muted">
              <p>contact@impulser.biz</p>
              <p>Tel. 070-8098-7256</p>
              <p>Fax. 0508-958-8359</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">{f.directions[lang]}</h4>
            <div className="space-y-2 text-sm text-muted">
              <p>{f.addressLine1[lang]}</p>
              <p>{f.addressLine2[lang]}</p>
            </div>
          </div>
        </div>

        <div className="gold-line mt-10 mb-6" />
        <div className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} 주식회사 임펄서(IMPULSER). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
