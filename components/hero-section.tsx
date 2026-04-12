"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        setTimeout(
          () => {
            el.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          },
          200 + index * 200,
        );
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background" />

      {/* Анимированная сетка */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Бейдж */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Доступны для новых проектов
        </div>

        {/* Заголовок */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-[1.05] text-balance"
        >
          Мы создаём цифровые
          <br />
          <span className="text-muted-foreground">продукты</span>
        </h1>

        {/* Подзаголовок */}
        <p
          ref={subtitleRef}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
        >
          Премиум веб-студия, создающая выдающиеся сайты и приложения для
          прогрессивных брендов.
        </p>

        {/* Кнопки */}
        <div
          ref={ctaRef}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Наши работы
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:bg-secondary"
          >
            Связаться с нами
          </Link>
        </div>

        {/* Доверие */}
        {/*<div className="mt-24 opacity-60">*/}
        {/*  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">*/}
        {/*    Нам доверяют лидеры индустрии*/}
        {/*  </p>*/}
        {/*  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">*/}
        {/*    {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((brand) => (*/}
        {/*      <span*/}
        {/*        key={brand}*/}
        {/*        className="text-lg font-semibold text-muted-foreground/50"*/}
        {/*      >*/}
        {/*        {brand}*/}
        {/*      </span>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      {/* Индикатор скролла */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
}
