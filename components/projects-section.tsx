"use client"

import { useRef, useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "Modern shopping experience with seamless checkout and inventory management.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "SaaS Marketing Site",
    category: "Website Design",
    description: "High-converting landing pages with stunning animations and micro-interactions.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "AI Content Studio",
    category: "Product Design",
    description: "Intuitive interface for AI-powered content generation and management.",
    color: "from-rose-500/20 to-pink-500/20",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Project Image Placeholder */}
      <div className="relative aspect-[4/3] bg-secondary/50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 h-2/3 rounded-2xl bg-gradient-to-br from-secondary to-muted/50 transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex-shrink-0 p-3 rounded-full border border-border bg-background/50 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="max-w-3xl transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Selected Work
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
            Projects that
            <br />
            <span className="text-muted-foreground">make an impact</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            A showcase of our recent work across various industries, each crafted with precision and purpose.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div
          className="mt-16 text-center transition-all duration-1000 delay-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <button className="inline-flex items-center gap-2 text-foreground font-medium group">
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
