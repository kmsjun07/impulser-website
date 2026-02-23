export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Visual */}
          <div className="relative">
            <div className="glow rounded-2xl border border-border bg-surface p-10">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-xl border border-border bg-background text-sm font-mono text-muted transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    {["AI", "ML", "DL", "API", "SaaS", "DB", "R&D", "IoT", "Dev"][i]}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-gold/10">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
                </div>
                <span className="text-xs text-muted">기술 역량</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">
              About Us
            </p>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              기술의 <span className="gradient-text">임팩트</span>를
              <br />
              만드는 기업
            </h2>
            <p className="mb-6 leading-relaxed text-muted">
              주식회사 임펄서(IMPULSER)는 &lsquo;기술적 충격(Impulse)&rsquo;이라는
              이름처럼, 산업에 새로운 변화를 이끌어내는 IT 전문 기업입니다.
            </p>
            <p className="mb-8 leading-relaxed text-muted">
              AI 머신러닝, 알고리즘 설계, 소프트웨어 개발을 핵심 역량으로
              삼아, 복잡한 비즈니스 문제를 기술로 해결합니다. 데이터에서
              인사이트를, 코드에서 가치를 만들어냅니다.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                {
                  title: "기술 우선",
                  desc: "최신 기술을 연구하고 실무에 적용합니다",
                },
                {
                  title: "문제 해결",
                  desc: "본질적인 문제를 파악하고 최적의 솔루션을 설계합니다",
                },
                {
                  title: "지속 성장",
                  desc: "끊임없는 R&D로 기술 경쟁력을 유지합니다",
                },
              ].map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <div>
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="text-sm text-muted">{value.desc}</p>
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
