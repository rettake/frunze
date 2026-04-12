"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import umca from "@/assets/images/umca.png";
import beteco from "@/assets/images/beteco.png";
import easect from "@/assets/images/easect.png";
import dashboard from "@/assets/images/dashboard.png";

const projects = [
    {
        id: 1,
        title: "UMCA CRM",
        category: "Веб-приложение",
        description:
            "CRM-система для управления лидами с интеграцией Telegram-ботов, автоматизацией обработки заявок и централизованной работой с клиентами.",
        color: "from-blue-500/20 to-cyan-500/20",
        image: umca,
    },
    {
        id: 2,
        title: "Beteco",
        category: "Корпоративный сайт",
        description:
            "Сайт для производства изделий из архитектурного бетона с каталогом работ, акцентом на визуал и удобной навигацией для привлечения клиентов.",
        color: "from-amber-500/20 to-orange-500/20",
        image: beteco,
    },
    {
        id: 3,
        title: "Media Dashboard",
        category: "Веб-приложение",
        description:
            "Платформа для управления медиа-сайтами: редактирование контента, аналитика, публикации и контроль нескольких проектов в одном интерфейсе.",
        color: "from-emerald-500/20 to-teal-500/20",
        image: dashboard,
    },
    {
        id: 4,
        title: "Easect",
        category: "Продукт / SaaS",
        description:
            "Электронное меню для ресторанов с удобным управлением блюдами, категориями и быстрым доступом для клиентов через QR-коды.",
        color: "from-rose-500/20 to-pink-500/20",
        image: easect,
    },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-700 hover:shadow-xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image block */}
      <div className="relative aspect-[4/3] bg-secondary/30">
        {/* inner frame */}
        <div className="absolute inset-0 p-6 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full rounded-xl bg-secondary/50" />
          )}
        </div>

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* gradient hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>

            <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>

          {/*<div className="flex-shrink-0 p-2 rounded-full border border-border bg-background/60 backdrop-blur group-hover:bg-primary group-hover:border-primary transition-all duration-300">*/}
          {/*  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Заголовок секции */}
        <div
          className="max-w-3xl transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Избранные проекты
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
            Проекты, которые
            <br />
            <span className="text-muted-foreground">приносят результат</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Подборка наших недавних работ в разных индустриях, каждая из которых
            создана с вниманием к деталям и бизнес-целям.
          </p>
        </div>

        {/* Сетка проектов */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Кнопка */}
        {/*<div*/}
        {/*  className="mt-16 text-center transition-all duration-1000 delay-500"*/}
        {/*  style={{*/}
        {/*    opacity: isVisible ? 1 : 0,*/}
        {/*    transform: isVisible ? "translateY(0)" : "translateY(20px)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <button className="inline-flex items-center gap-2 text-foreground font-medium group">*/}
        {/*    Все проекты*/}
        {/*    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
