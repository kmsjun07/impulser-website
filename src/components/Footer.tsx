export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} 주식회사 임펄서(IMPULSER). All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#services" className="transition-colors hover:text-foreground">
            서비스
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            회사소개
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            문의
          </a>
        </div>
      </div>
    </footer>
  );
}
