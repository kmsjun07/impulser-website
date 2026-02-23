export default function HeroSection() {
  return (
    <section
      id="home"
      className="grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          AI & 알고리즘 전문 기업
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
          기술로 미래를
          <br />
          <span className="gradient-text">설계합니다</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          주식회사 임펄서는 AI 머신러닝, 알고리즘 개발, IT 솔루션을 통해
          <br className="hidden sm:block" />
          비즈니스의 핵심 문제를 해결합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="rounded-lg bg-primary px-8 py-3.5 font-medium text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
          >
            서비스 알아보기
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-8 py-3.5 font-medium text-foreground transition-colors hover:bg-surface-light"
          >
            문의하기
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "AI", label: "머신러닝" },
            { value: "24/7", label: "시스템 운영" },
            { value: "맞춤형", label: "솔루션 제공" },
            { value: "R&D", label: "기술 연구개발" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
