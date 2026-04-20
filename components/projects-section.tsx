"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/constants/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
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
    <Link
      href={`/projects/${project.slug}`}
      ref={cardRef}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-700 hover:shadow-xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image block */}
      <div className="relative h-56 sm:h-80 lg:h-[22rem] bg-secondary/10 overflow-hidden border-b border-border/50">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-top transition-transform duration-700 group-hover:scale-105 origin-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-secondary/50" />
        )}

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* gradient hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
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

          <div className="flex-shrink-0 p-2 rounded-full border border-border bg-background/60 backdrop-blur group-hover:bg-primary group-hover:border-primary transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
          </div>
        </div>
      </div>
    </Link>
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
      </div>
    </section>
  );
}
