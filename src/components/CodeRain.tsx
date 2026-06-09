"use client";

import { useEffect, useRef } from "react";

// Monochrome "binary rain" (010101) — algorithm/data feel, pure black & white.
export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fontSize = 15;
    let width = 0;
    let height = 0;
    let drops: number[] = [];
    let raf = 0;
    let last = 0;
    const step = 60; // ms between rows

    const paintBase = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize)
      );
      paintBase();
    };

    resize();

    const drawRow = () => {
      // fade the previous frame toward black to leave trailing tails
      ctx.fillStyle = "rgba(10, 10, 10, 0.16)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px ui-monospace, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // lead glyph bright, trail handled by fade overlay
        ctx.fillStyle = Math.random() > 0.92 ? "#ffffff" : "rgba(255,255,255,0.78)";
        ctx.fillText(char, x, y);
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    if (reduce) {
      // static-ish single pass for reduced motion
      paintBase();
      drawRow();
      return () => {};
    }

    const render = (t: number) => {
      raf = requestAnimationFrame(render);
      if (t - last < step) return;
      last = t;
      drawRow();
    };
    raf = requestAnimationFrame(render);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}
