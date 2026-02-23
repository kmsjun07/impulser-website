"use client";

import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const techStack = [
  { category: "AI / ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "LightGBM", "XGBoost", "Keras", "Hugging Face", "LangChain", "OpenAI API", "Claude API", "Stable Diffusion", "ONNX", "MLflow", "Pandas", "NumPy"] },
  { category: "Backend", items: ["Python", "Node.js", "Go", "Rust", "FastAPI", "Django", "Express", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "RabbitMQ", "Kafka"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Nuxt", "TypeScript", "JavaScript", "Tailwind CSS", "Three.js", "D3.js", "Figma"] },
  { category: "Infra / DevOps", items: ["AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Nginx", "Linux", "Prometheus", "Grafana"] },
];

export default function TechSection() {
  const { lang } = useLang();
  const tc = t.tech;

  return (
    <section id="tech" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">Technology</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{tc.label[lang]}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{tc.subtitle[lang]}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div key={group.category} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-gold uppercase">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted transition-colors hover:border-gold/30 hover:text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-10 text-center text-2xl font-bold">{tc.process[lang]}</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tc.steps.map((phase, i) => (
              <div key={i} className="relative text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-mono text-lg font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mb-2 font-semibold">{phase.title[lang]}</h4>
                <p className="text-sm leading-relaxed text-muted">{phase.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
