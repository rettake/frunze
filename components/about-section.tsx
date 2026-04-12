"use client";

import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "150+", label: "Проектов реализовано" },
  { value: "5+", label: "Лет опыта" },
  { value: "7", label: "Человек в команде" },
];

function CountUpNumber({
  value,
  isVisible,
}: {
  value: string;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);

      setDisplayValue(current.toString());

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-background overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Левая колонка — контент */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              О нас
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Создаём будущее
              <br />
              <span className="text-muted-foreground">веб-разработки</span>
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Мы — команда дизайнеров, разработчиков и стратегов, увлечённых
                созданием цифровых продуктов, которые действительно имеют
                значение. Наш подход объединяет креативность и техническую
                точность.
              </p>
              <p>
                От стартапов до крупных компаний — мы сотрудничаем с
                амбициозными командами, создавая продукты, которые любят
                пользователи и на которые опирается бизнес.
              </p>
            </div>

            {/* Ценности */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Инновации", "Качество", "Сотрудничество", "Прозрачность"].map(
                (value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground"
                  >
                    {value}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Правая колонка — статистика */}
          <div
            className="transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(60px)",
            }}
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group p-8 rounded-3xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-500"
                  style={{
                    transitionDelay: `${index * 100 + 400}ms`,
                  }}
                >
                  <div className="text-4xl md:text-5xl font-semibold text-foreground">
                    <CountUpNumber value={stat.value} isVisible={isVisible} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Бегущая строка */}
        <div className="mt-32 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/*<div className="flex animate-marquee">*/}
          {/*  {[...Array(2)].map((_, i) => (*/}
          {/*    <div key={i} className="flex shrink-0">*/}
          {/*      {[*/}
          {/*        "React",*/}
          {/*        "Next.js",*/}
          {/*        "TypeScript",*/}
          {/*        "Tailwind",*/}
          {/*        "Framer Motion",*/}
          {/*        "Vercel",*/}
          {/*        "Figma",*/}
          {/*        "Node.js",*/}
          {/*      ].map((tech) => (*/}
          {/*        <span*/}
          {/*          key={`${tech}-${i}`}*/}
          {/*          className="mx-8 text-6xl md:text-8xl font-semibold text-muted/30 whitespace-nowrap"*/}
          {/*        >*/}
          {/*          {tech}*/}
          {/*        </span>*/}
          {/*      ))}*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
