const techStack = [
  { category: "AI / ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "LightGBM", "XGBoost", "Keras", "Hugging Face", "LangChain", "OpenAI API", "Claude API", "Stable Diffusion", "ONNX", "MLflow", "Pandas", "NumPy"] },
  { category: "Backend", items: ["Python", "Node.js", "Go", "Rust", "FastAPI", "Django", "Express", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "RabbitMQ", "Kafka"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Nuxt", "TypeScript", "JavaScript", "Tailwind CSS", "Three.js", "D3.js", "Figma"] },
  { category: "Infra / DevOps", items: ["AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Nginx", "Linux", "Prometheus", "Grafana"] },
];

export default function TechSection() {
  return (
    <section id="tech" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Technology
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">기술 스택</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            검증된 최신 기술로 안정적이고 확장 가능한 시스템을 구축합니다
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="mb-10 text-center text-2xl font-bold">
            프로젝트 진행 과정
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "요구사항 분석", desc: "비즈니스 목표와 기술 요구사항을 정밀하게 분석합니다" },
              { step: "02", title: "설계 & 프로토타입", desc: "최적의 아키텍처를 설계하고 프로토타입을 제작합니다" },
              { step: "03", title: "개발 & 테스트", desc: "애자일 방법론으로 개발하고 철저히 검증합니다" },
              { step: "04", title: "배포 & 운영", desc: "안정적으로 배포하고 지속적인 유지보수를 제공합니다" },
            ].map((phase) => (
              <div key={phase.step} className="relative text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-lg font-bold text-primary">
                  {phase.step}
                </div>
                <h4 className="mb-2 font-semibold">{phase.title}</h4>
                <p className="text-sm leading-relaxed text-muted">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
