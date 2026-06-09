import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// Applies the saved theme before paint to avoid a flash. Light is the default.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;

const maruBuri = localFont({
  src: [
    { path: "../../public/fonts/maruburi/MaruBuri-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/maruburi/MaruBuri-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/maruburi/MaruBuri-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/maruburi/MaruBuri-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/maruburi/MaruBuri-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-maruburi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMPULSER | IT 기술개발 & AI 솔루션",
  description:
    "주식회사 임펄서 - IT 기술개발, 솔루션 제공, 알고리즘 개발, AI 머신러닝 전문 기업",
  keywords: ["임펄서", "IMPULSER", "IT 솔루션", "AI", "머신러닝", "알고리즘"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${maruBuri.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
