import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/logo.png" alt="IMPULSER" width={28} height={28} />
              <span className="text-lg font-bold tracking-wider gradient-text">
                IMPULSER
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              기술로 미래를 설계하는 IT 전문 기업
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">서비스</h4>
            <div className="space-y-2 text-sm text-muted">
              <p>AI & 머신러닝</p>
              <p>IT 기술개발</p>
              <p>알고리즘 개발</p>
              <p>솔루션 제공</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">연락처</h4>
            <div className="space-y-2 text-sm text-muted">
              <p>contact@impulser.biz</p>
              <p>Tel. 070-8098-7256</p>
              <p>Fax. 0508-958-8359</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">오시는 길</h4>
            <div className="space-y-2 text-sm text-muted">
              <p>서울특별시 강남구</p>
              <p>도산대로 27길 23, 2층</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-line mt-10 mb-6" />
        <div className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} 주식회사 임펄서(IMPULSER). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
