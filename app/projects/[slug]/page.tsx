import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { projects } from "@/constants/projects";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Проект не найден" };

  return {
    title: `${project.title} | Frunze Solutions`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Назад к проектам
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Column: Info & Details */}
            <div className="flex flex-col gap-12">
              {/* Header */}
              <div className="flex flex-col gap-6">
                <div>
                  <Badge
                    variant="outline"
                    className="mb-6 uppercase tracking-wider py-1.5 px-4"
                  >
                    {project.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
                    {project.title}
                  </h1>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Technologies & Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-border pt-10">
                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                    Технологии
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-4 py-1.5 text-sm font-medium bg-secondary/50 border border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                    Особенности
                  </h3>
                  <ul className="flex flex-col gap-5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-4 text-muted-foreground"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Link */}
              {project.link && (
                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-sm group w-fit"
                  >
                    Посетить сайт
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Project Image */}
            <div className="relative lg:sticky lg:top-32 order-first lg:order-last mb-4 lg:mb-0">
              <div className="relative overflow-hidden shadow-2xl border border-border/10 bg-secondary/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-md"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -z-10 -top-12 -left-12 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
