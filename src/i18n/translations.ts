export type Lang = "ko" | "en" | "ja";

export const langLabels: Record<Lang, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

export const t = {
  nav: {
    home: { ko: "홈", en: "Home", ja: "ホーム" },
    services: { ko: "서비스", en: "Services", ja: "サービス" },
    products: { ko: "제품", en: "Products", ja: "製品" },
    about: { ko: "회사소개", en: "About", ja: "会社紹介" },
    tech: { ko: "기술", en: "Technology", ja: "技術" },
    contact: { ko: "문의", en: "Contact", ja: "お問合せ" },
    cta: { ko: "상담 문의", en: "Get in Touch", ja: "お問合せ" },
  },
  hero: {
    badge: {
      ko: "AI & 알고리즘 전문 기업",
      en: "AI & Algorithm Specialists",
      ja: "AI＆アルゴリズム専門企業",
    },
    heading1: {
      ko: "기술로 미래를",
      en: "Engineering the",
      ja: "技術で未来を",
    },
    heading2: {
      ko: "설계합니다",
      en: "Future",
      ja: "設計する",
    },
    subtitle: {
      ko: "주식회사 임펄서는 AI 머신러닝, 알고리즘 개발, IT 솔루션을 통해\n비즈니스의 핵심 문제를 해결합니다.",
      en: "IMPULSER delivers AI/ML, algorithm development, and IT solutions\nto solve critical business challenges.",
      ja: "株式会社IMPULSERはAI機械学習、アルゴリズム開発、ITソリューションで\nビジネスの核心的な課題を解決します。",
    },
    ctaPrimary: {
      ko: "서비스 알아보기",
      en: "Our Services",
      ja: "サービス詳細",
    },
    ctaSecondary: {
      ko: "문의하기",
      en: "Contact Us",
      ja: "お問合せ",
    },
    stats: {
      ai: { ko: "머신러닝", en: "Machine Learning", ja: "機械学習" },
      system: { ko: "시스템 운영", en: "System Operation", ja: "システム運用" },
      solution: { ko: "솔루션 제공", en: "Custom Solutions", ja: "ソリューション提供" },
      rnd: { ko: "기술 연구개발", en: "R&D", ja: "技術研究開発" },
    },
  },
  services: {
    label: { ko: "핵심 서비스", en: "Core Services", ja: "コアサービス" },
    subtitle: {
      ko: "임펄서는 기술의 본질에 집중하여 실질적인 가치를 만들어냅니다",
      en: "IMPULSER focuses on the essence of technology to create real value",
      ja: "IMPULSERは技術の本質に集中し、実質的な価値を創出します",
    },
    items: [
      {
        title: { ko: "AI & 머신러닝", en: "AI & Machine Learning", ja: "AI＆機械学習" },
        desc: {
          ko: "딥러닝, 자연어처리, 컴퓨터비전 등 최신 AI 기술을 활용하여 데이터 기반 의사결정과 자동화 솔루션을 제공합니다.",
          en: "We deliver data-driven decision-making and automation solutions using cutting-edge AI including deep learning, NLP, and computer vision.",
          ja: "ディープラーニング、自然言語処理、コンピュータビジョンなど最新AI技術を活用し、データ基盤の意思決定と自動化ソリューションを提供します。",
        },
      },
      {
        title: { ko: "IT 기술개발", en: "IT Development", ja: "IT技術開発" },
        desc: {
          ko: "웹/모바일 애플리케이션, 클라우드 인프라, API 설계 등 최신 기술 스택으로 안정적이고 확장 가능한 시스템을 구축합니다.",
          en: "We build stable and scalable systems with modern tech stacks including web/mobile apps, cloud infrastructure, and API design.",
          ja: "Web/モバイルアプリ、クラウドインフラ、API設計など最新技術スタックで安定的かつ拡張可能なシステムを構築します。",
        },
      },
      {
        title: { ko: "알고리즘 개발", en: "Algorithm Development", ja: "アルゴリズム開発" },
        desc: {
          ko: "최적화 알고리즘, 트레이딩 전략, 데이터 분석 파이프라인 등 복잡한 문제를 효율적으로 해결하는 알고리즘을 설계합니다.",
          en: "We design algorithms that efficiently solve complex problems including optimization, trading strategies, and data analysis pipelines.",
          ja: "最適化アルゴリズム、トレーディング戦略、データ分析パイプラインなど複雑な問題を効率的に解決するアルゴリズムを設計します。",
        },
      },
      {
        title: { ko: "솔루션 제공", en: "Solutions", ja: "ソリューション提供" },
        desc: {
          ko: "기업 맞춤형 소프트웨어 솔루션, SaaS 플랫폼, 데이터 인프라 구축 등 비즈니스 요구사항에 최적화된 솔루션을 제공합니다.",
          en: "We provide tailored software solutions, SaaS platforms, and data infrastructure optimized for your business requirements.",
          ja: "企業カスタムソフトウェアソリューション、SaaSプラットフォーム、データインフラ構築などビジネス要件に最適化されたソリューションを提供します。",
        },
      },
    ],
  },
  products: {
    label: { ko: "자사 제품", en: "Our Products", ja: "自社製品" },
    heading1: { ko: "직접 만든 ", en: "Products We ", ja: "自ら創る" },
    headingAccent: { ko: "제품", en: "Build", ja: "製品" },
    heading2: { ko: "으로 증명합니다", en: " & Ship", ja: "で証明する" },
    subtitle: {
      ko: "임펄서가 직접 기획하고 개발하여 시장에 선보이는 자사 애플리케이션입니다.",
      en: "Applications we design, develop, and ship to the market ourselves.",
      ja: "IMPULSERが自ら企画・開発し市場に届ける自社アプリケーションです。",
    },
    statusLive: { ko: "정식 출시", en: "Live", ja: "リリース済み" },
    statusUpcoming: {
      ko: "2026 하반기 출시 예정",
      en: "Coming H2 2026",
      ja: "2026年下半期予定",
    },
    visit: { ko: "자세히 보기", en: "Learn more", ja: "詳しく見る" },
    items: [
      {
        name: { ko: "Pillert", en: "Pillert", ja: "Pillert" },
        category: { ko: "헬스케어", en: "Healthcare", ja: "ヘルスケア" },
        tagline: {
          ko: "복약 알림과 건강관리를 한 번에",
          en: "Medication reminders & health management in one",
          ja: "服薬リマインダーと健康管理をひとつに",
        },
        desc: {
          ko: "복용 시간을 놓치지 않도록 알려주고, 건강 데이터를 함께 관리하는 헬스케어 앱. iOS·Android 정식 출시.",
          en: "A healthcare app that keeps you on schedule with medication reminders while managing your health data. Now live on iOS & Android.",
          ja: "服用時間を逃さないようリマインドし、健康データも一緒に管理するヘルスケアアプリ。iOS・Android 正式リリース。",
        },
      },
      {
        name: { ko: "Fandora", en: "Fandora", ja: "Fandora" },
        category: { ko: "크리에이터 플랫폼", en: "Creator Platform", ja: "クリエイタープラットフォーム" },
        tagline: {
          ko: "팬과 크리에이터를 잇는 새로운 플랫폼",
          en: "A new platform connecting fans and creators",
          ja: "ファンとクリエイターをつなぐ新しいプラットフォーム",
        },
        desc: {
          ko: "팬과 크리에이터가 더 가깝게 소통하고 함께 성장하는 차세대 팬덤 플랫폼. 2026년 하반기 출시 예정.",
          en: "A next-generation fandom platform where fans and creators connect and grow together. Launching in H2 2026.",
          ja: "ファンとクリエイターがより近くで交流し共に成長する次世代ファンダムプラットフォーム。2026年下半期リリース予定。",
        },
      },
      {
        name: { ko: "쌀먹의 민족", en: "Ssalmeok", ja: "쌀먹의 민족" },
        category: { ko: "AI 핀테크", en: "AI Fintech", ja: "AIフィンテック" },
        tagline: {
          ko: "AI 자동 리서치로 만드는 무료 금융 수익",
          en: "Free financial returns powered by AI auto-research",
          ja: "AI自動リサーチで生み出す無料の金融収益",
        },
        desc: {
          ko: "AI 기반 자동 리서치로 금융 정보를 분석해, 누구나 무료로 수익 기회를 발견할 수 있도록 돕는 핀테크 앱. 2026년 하반기 출시 예정.",
          en: "A fintech app that analyzes financial data with AI-powered auto-research, helping anyone discover profit opportunities for free. Launching in H2 2026.",
          ja: "AIベースの自動リサーチで金融情報を分析し、誰もが無料で収益機会を見つけられるよう支援するフィンテックアプリ。2026年下半期リリース予定。",
        },
      },
    ],
  },
  about: {
    heading1: { ko: "기술의 ", en: "Creating ", ja: "技術の" },
    headingAccent: { ko: "임팩트", en: "Impact", ja: "インパクト" },
    heading2: { ko: "를\n만드는 기업", en: "\nwith Technology", ja: "を\n生み出す企業" },
    desc1: {
      ko: "주식회사 임펄서(IMPULSER)는 '기술적 충격(Impulse)'이라는 이름처럼, 산업에 새로운 변화를 이끌어내는 IT 전문 기업입니다.",
      en: "IMPULSER, named after 'technological impulse', is an IT company that drives transformative change across industries.",
      ja: "株式会社IMPULSER（インパルサー）は「技術的衝撃（Impulse）」という名前の通り、産業に新たな変化をもたらすIT専門企業です。",
    },
    desc2: {
      ko: "AI 머신러닝, 알고리즘 설계, 소프트웨어 개발을 핵심 역량으로 삼아, 복잡한 비즈니스 문제를 기술로 해결합니다. 데이터에서 인사이트를, 코드에서 가치를 만들어냅니다.",
      en: "With core competencies in AI/ML, algorithm design, and software development, we solve complex business problems through technology. We extract insights from data and create value from code.",
      ja: "AI機械学習、アルゴリズム設計、ソフトウェア開発を核心能力とし、複雑なビジネス課題を技術で解決します。データからインサイトを、コードから価値を創出します。",
    },
    values: [
      {
        title: { ko: "기술 우선", en: "Technology First", ja: "技術優先" },
        desc: {
          ko: "최신 기술을 연구하고 실무에 적용합니다",
          en: "We research and apply cutting-edge technology",
          ja: "最新技術を研究し実務に適用します",
        },
      },
      {
        title: { ko: "문제 해결", en: "Problem Solving", ja: "問題解決" },
        desc: {
          ko: "본질적인 문제를 파악하고 최적의 솔루션을 설계합니다",
          en: "We identify root problems and design optimal solutions",
          ja: "本質的な問題を把握し最適なソリューションを設計します",
        },
      },
      {
        title: { ko: "지속 성장", en: "Continuous Growth", ja: "持続成長" },
        desc: {
          ko: "끊임없는 R&D로 기술 경쟁력을 유지합니다",
          en: "We maintain technological edge through continuous R&D",
          ja: "絶え間ないR&Dで技術競争力を維持します",
        },
      },
    ],
    techCapability: { ko: "기술 역량", en: "Tech Capability", ja: "技術力" },
    education: {
      label: { ko: "교육 · 연구 활동", en: "Education & Research", ja: "教育・研究活動" },
      title: {
        ko: "AI 시대의 프로그램 개발과 전문분야 적용 전략",
        en: "Software Development & Domain Application Strategy in the AI Era",
        ja: "AI時代のプログラム開発と専門分野への適用戦略",
      },
      org: {
        ko: "대림대학교 AI 교육 과정",
        en: "AI Program · Daelim University",
        ja: "大林大学校 AI教育課程",
      },
      desc: {
        ko: "대림대학교에서 진행된 AI 교육 과정에 참여해, AI 시대에 맞는 소프트웨어 개발 방법론과 산업별 전문분야 적용 전략을 학습했습니다. 배운 역량을 자사 제품과 고객 프로젝트에 직접 적용하고 있습니다.",
        en: "We took part in an AI program at Daelim University covering modern software development methodologies for the AI era and strategies for applying them across specialized industries—knowledge we put directly to work in our own products and client projects.",
        ja: "大林大学校で行われたAI教育課程に参加し、AI時代に適したソフトウェア開発手法と産業別の専門分野への適用戦略を学びました。得た知見を自社製品と顧客プロジェクトに直接活かしています。",
      },
    },
  },
  tech: {
    label: { ko: "기술 스택", en: "Tech Stack", ja: "技術スタック" },
    subtitle: {
      ko: "검증된 최신 기술로 안정적이고 확장 가능한 시스템을 구축합니다",
      en: "We build stable and scalable systems with proven modern technologies",
      ja: "検証済みの最新技術で安定的かつ拡張可能なシステムを構築します",
    },
    process: { ko: "프로젝트 진행 과정", en: "Project Process", ja: "プロジェクト進行過程" },
    steps: [
      {
        title: { ko: "요구사항 분석", en: "Requirements Analysis", ja: "要件分析" },
        desc: {
          ko: "비즈니스 목표와 기술 요구사항을 정밀하게 분석합니다",
          en: "We precisely analyze business goals and technical requirements",
          ja: "ビジネス目標と技術要件を精密に分析します",
        },
      },
      {
        title: { ko: "설계 & 프로토타입", en: "Design & Prototype", ja: "設計＆プロトタイプ" },
        desc: {
          ko: "최적의 아키텍처를 설계하고 프로토타입을 제작합니다",
          en: "We design optimal architecture and build prototypes",
          ja: "最適なアーキテクチャを設計しプロトタイプを制作します",
        },
      },
      {
        title: { ko: "개발 & 테스트", en: "Development & Testing", ja: "開発＆テスト" },
        desc: {
          ko: "애자일 방법론으로 개발하고 철저히 검증합니다",
          en: "We develop with agile methodology and thoroughly validate",
          ja: "アジャイル手法で開発し徹底的に検証します",
        },
      },
      {
        title: { ko: "배포 & 운영", en: "Deploy & Operate", ja: "デプロイ＆運用" },
        desc: {
          ko: "안정적으로 배포하고 지속적인 유지보수를 제공합니다",
          en: "We deploy reliably and provide ongoing maintenance",
          ja: "安定的にデプロイし継続的なメンテナンスを提供します",
        },
      },
    ],
  },
  contact: {
    heading1: { ko: "프로젝트를", en: "Start Your", ja: "プロジェクトを" },
    heading2: { ko: "시작해보세요", en: "Project", ja: "始めましょう" },
    subtitle: {
      ko: "기술 상담부터 프로젝트 견적까지, 부담 없이 문의해 주세요.\n빠른 시일 내에 답변드리겠습니다.",
      en: "From technical consultation to project estimates, feel free to reach out.\nWe'll get back to you promptly.",
      ja: "技術相談からプロジェクト見積りまで、お気軽にお問い合わせください。\n迅速にご返答いたします。",
    },
    email: { ko: "이메일", en: "Email", ja: "メール" },
    phone: { ko: "전화", en: "Phone", ja: "電話" },
    location: { ko: "위치", en: "Location", ja: "所在地" },
    address: {
      ko: "서울특별시 강남구 도산대로 27길 23, 2층",
      en: "2F, 23, Dosan-daero 27-gil, Gangnam-gu, Seoul, Korea",
      ja: "ソウル特別市 江南区 島山大路27ギル23, 2階",
    },
    formName: { ko: "이름 / 회사명", en: "Name / Company", ja: "お名前 / 会社名" },
    formNamePlaceholder: { ko: "홍길동 / 회사명", en: "John Doe / Company", ja: "山田太郎 / 会社名" },
    formEmail: { ko: "이메일", en: "Email", ja: "メール" },
    formService: { ko: "관심 서비스", en: "Service of Interest", ja: "関心サービス" },
    formServicePlaceholder: { ko: "선택해주세요", en: "Select a service", ja: "選択してください" },
    formServiceOptions: {
      ai: { ko: "AI & 머신러닝", en: "AI & Machine Learning", ja: "AI＆機械学習" },
      dev: { ko: "IT 기술개발", en: "IT Development", ja: "IT技術開発" },
      algo: { ko: "알고리즘 개발", en: "Algorithm Development", ja: "アルゴリズム開発" },
      solution: { ko: "솔루션 제공", en: "Solutions", ja: "ソリューション提供" },
      other: { ko: "기타", en: "Other", ja: "その他" },
    },
    formMessage: { ko: "문의 내용", en: "Message", ja: "お問合せ内容" },
    formMessagePlaceholder: {
      ko: "프로젝트에 대해 알려주세요",
      en: "Tell us about your project",
      ja: "プロジェクトについてお聞かせください",
    },
    formSubmit: { ko: "문의 보내기", en: "Send Message", ja: "送信する" },
    formSuccess: {
      ko: "문의가 접수되었습니다",
      en: "Your message has been sent",
      ja: "お問い合わせを受け付けました",
    },
    formSuccessDesc: {
      ko: "빠른 시일 내에 답변드리겠습니다.",
      en: "We'll get back to you shortly.",
      ja: "迅速にご返答いたします。",
    },
  },
  footer: {
    services: { ko: "서비스", en: "Services", ja: "サービス" },
    contactInfo: { ko: "연락처", en: "Contact", ja: "お問合せ" },
    directions: { ko: "오시는 길", en: "Location", ja: "アクセス" },
    tagline: {
      ko: "기술로 미래를 설계하는 IT 전문 기업",
      en: "An IT company engineering the future with technology",
      ja: "技術で未来を設計するIT専門企業",
    },
    addressLine1: { ko: "서울특별시 강남구", en: "Gangnam-gu, Seoul", ja: "ソウル特別市 江南区" },
    addressLine2: { ko: "도산대로 27길 23, 2층", en: "23, Dosan-daero 27-gil, 2F", ja: "島山大路27ギル23, 2階" },
  },
} as const;
