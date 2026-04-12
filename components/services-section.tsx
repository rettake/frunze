"use client";

import { useRef, useEffect, useState } from "react";
import { Code2, Palette, Gauge, Sparkles, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Веб-разработка",
    description:
      "Кастомные веб-приложения на современных технологиях: React, Next.js и другие.",
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description:
      "Красивые и удобные интерфейсы. Включая дизайн-системы и прототипы.",
  },
  {
    icon: Gauge,
    title: "Производительность",
    description:
      "Молниеносная загрузка и оптимизированный пользовательский опыт на всех устройствах.",
  },
  {
    icon: Sparkles,
    title: "Анимации",
    description:
      "Продуманные микро-взаимодействия и плавные анимации, улучшающие UX.",
  },
  {
    icon: Globe,
    title: "E-commerce",
    description:
      "Масштабируемые интернет-магазины с удобной оплатой и управлением товарами.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description:
      "Практики уровня enterprise для защиты данных и пользователей.",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Заголовок секции */}
        <div
          className="text-center max-w-3xl mx-auto transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Что мы делаем
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
            Услуги
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Комплексные решения для развития вашего цифрового продукта
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-10 hover:bg-secondary/30 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Иконка */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary group-hover:bg-primary transition-colors duration-500">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-500" />
              </div>

              {/* Контент */}
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Линия при наведении */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
