"use client";

import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Divider */}
        <div className="gold-line mb-16" />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">
              Contact
            </p>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              프로젝트를
              <br />
              <span className="gradient-text">시작해보세요</span>
            </h2>
            <p className="mb-10 leading-relaxed text-muted">
              기술 상담부터 프로젝트 견적까지, 부담 없이 문의해 주세요.
              <br />
              빠른 시일 내에 답변드리겠습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">이메일</h4>
                  <p className="text-sm text-muted">contact@impulser.biz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">전화</h4>
                  <p className="text-sm text-muted">Tel. 070-8098-7256</p>
                  <p className="text-sm text-muted">Fax. 0508-958-8359</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">위치</h4>
                  <p className="text-sm text-muted">서울특별시 강남구 도산대로 27길 23, 2층</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">문의가 접수되었습니다</h3>
                <p className="text-muted">빠른 시일 내에 답변드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    이름 / 회사명
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-gold focus:outline-none"
                    placeholder="홍길동 / 회사명"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    이메일
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-gold focus:outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium">
                    관심 서비스
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none"
                  >
                    <option value="">선택해주세요</option>
                    <option value="ai">AI & 머신러닝</option>
                    <option value="dev">IT 기술개발</option>
                    <option value="algo">알고리즘 개발</option>
                    <option value="solution">솔루션 제공</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-gold focus:outline-none"
                    placeholder="프로젝트에 대해 알려주세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gold py-3.5 font-medium text-black transition-colors hover:bg-gold-light"
                >
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
