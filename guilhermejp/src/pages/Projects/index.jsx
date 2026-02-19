import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ExternalLink, Github, Plus, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function StatusBadge({ tone = "default", children }) {
  const toneClasses = {
    ready: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    partial: "bg-amber-500/15 text-amber-300 border-amber-500/25",
    wip: "bg-sky-500/15 text-sky-300 border-sky-500/25",
    blocked: "bg-rose-500/15 text-rose-300 border-rose-500/25",
    default: "bg-secondary text-secondary-foreground border-transparent",
  };

  return (
    <Badge
      variant="outline"
      className={cn("rounded-full border px-2.5 py-0.5 text-xs", toneClasses[tone] || toneClasses.default)}
    >
      {children}
    </Badge>
  );
}

function ActionLink({ href, children, icon: Icon = ExternalLink }) {
  if (!href || href === "#") {
    return (
      <Button variant="secondary" disabled className="rounded-xl">
        <Icon className="mr-2 size-4" />
        {children}
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" className="rounded-xl">
      <a href={href} target="_blank" rel="noreferrer">
        <Icon className="mr-2 size-4" />
        {children}
      </a>
    </Button>
  );
}

function ProjectCard({ project }) {
  return (
    <GlowCard className="relative flex flex-col md:h-[26rem]">
      <CardHeader className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg font-black tracking-tight md:text-xl">{project.title}</CardTitle>
            {project.subtitle ? (
              <CardDescription className="text-sm">{project.subtitle}</CardDescription>
            ) : null}
          </div>
          {project.status ? (
            <StatusBadge tone={project.status.tone}>{project.status.label}</StatusBadge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="relative flex-1 space-y-3 overflow-y-auto pr-1 text-sm text-muted-foreground">
        <p className="leading-relaxed">{project.description}</p>
        {project.result ? <p className="rounded-xl border bg-muted/25 p-2 text-xs">{project.result}</p> : null}
        {Array.isArray(project.stack) && project.stack.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={`${project.title}-${tech}`} variant="secondary" className="rounded-md px-2 py-0.5 text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
        {project.note ? <p className="text-xs">{project.note}</p> : null}
        {project.credentials ? (
          <details className="group rounded-xl border bg-muted/30 p-3 text-xs">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-foreground">
              <span className="inline-flex items-center gap-2">
                <Shield className="size-4" />
                Test credentials
              </span>
              <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-2 grid gap-1 text-muted-foreground">
              <div>
                <span className="text-muted-foreground">Login:</span> {project.credentials.login}
              </div>
              <div>
                <span className="text-muted-foreground">Password:</span> {project.credentials.password}
              </div>
            </div>
          </details>
        ) : null}
      </CardContent>
      <CardFooter className="relative mt-auto flex flex-wrap gap-2">
        <ActionLink href={project.deployUrl} icon={Rocket}>
          Live demo
        </ActionLink>
        <ActionLink href={project.githubUrl} icon={Github}>
          GitHub
        </ActionLink>
      </CardFooter>
    </GlowCard>
  );
}

export function Projects() {
  const FEATURED_STEP = 4;

  const featured = [
    {
      title: "[REST API] Food Explorer",
      subtitle: "Online restaurant platform",
      status: { tone: "ready", label: "Completed" },
      description:
        "Full product with customer and admin flows, including catalog, cart, filters, and menu management.",
      result:
        "Delivered with responsive layout, secure sign-in, and a stable CRUD workflow for real-world usage.",
      stack: ["React", "Vite", "Styled System", "REST API"],
      deployUrl: "https://foodexplorer-maxtr.netlify.app/",
      githubUrl: "https://github.com/Maxtherox/foodexplorer-react-frontend",
    },
    {
      title: "[Website] Camila Braga Marketing",
      subtitle: "Business website with modern responsive design",
      status: { tone: "ready", label: "Completed" },
      description:
        "Corporate website built with a clear structure and conversion-focused content.",
      result:
        "Published and running in production with strong loading speed and consistent experience across devices.",
      stack: ["React", "Vite", "Tailwind CSS", "Netlify"],
      note: "Published with client approval.",
      deployUrl: "https://camilabragamarketing.com",
      githubUrl: "https://github.com/Maxtherox/camilabragamarketing.com",
    },
    {
      title: "[REST API] NFE System",
      subtitle: "Client, company, and product management",
      status: { tone: "ready", label: "Completed" },
      description:
        "End-to-end system for registering and managing clients, companies, and products with a simple operating flow.",
      result:
        "Delivered with reliable CRUD operations, clear data structure, and a reviewed interface.",
      stack: ["React", "Node.js", "Express", "SQLite"],
      deployUrl: "https://nfesystem.guilhermejp.com",
      githubUrl: "https://github.com/Maxtherox/nfe-system-2025",
    },
    {
      title: "[REST API] Taekwondo E-Manager",
      subtitle: "Event operations and match bracket management",
      status: { tone: "ready", label: "Completed" },
      description:
        "Platform for organizing competitions, managing brackets, and monitoring matches with an admin area.",
      result:
        "Frontend and backend are consolidated and currently used in event workflows.",
      stack: ["React", "Node.js", "JWT", "PostgreSQL"],
      credentials: { login: "admin01", password: "12345" },
      deployUrl: "https://taekwondo.guilhermejp.com/",
      githubUrl: "https://github.com/Maxtherox/Taekwondo-EManager",
    },
    {
      title: "[E-commerce] Maralt",
      subtitle: "Online store for an independent seller",
      status: { tone: "ready", label: "Completed" },
      description:
        "E-commerce structure with catalog, cart, sign-in, and foundations for payment and shipping integrations.",
      result:
        "Technically complete. Public release is currently limited by commercial decision.",
      stack: ["React", "Node.js", "Knex", "JWT"],
      deployUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[REST API] Rocketnotes",
      subtitle: "Notes management application",
      status: { tone: "ready", label: "Completed" },
      description:
        "Application for creating, editing, and organizing notes with user-based authentication.",
      result:
        "Delivered with stable validation rules and responsive behavior for daily use.",
      stack: ["React", "Node.js", "SQLite", "JWT"],
      deployUrl: "https://rocketnotes-maxtr.netlify.app/",
      githubUrl: "https://github.com/Maxtherox/rocketnotes-nodejs-backend",
    },
    {
      title: "[REST API] RocketMovies",
      subtitle: "Movie reviews and personal catalog",
      status: { tone: "ready", label: "Completed" },
      description:
        "Review platform with movie entries, tags, and scores for authenticated users.",
      result:
        "Development scope completed and ready for release when needed.",
      stack: ["React", "Node.js", "Express", "SQLite"],
      deployUrl: "#",
      githubUrl: "https://github.com/Maxtherox/RocketMovies-NodeJS-Backend",
    },
  ];

  const learning = [
    {
      title: "Timer MaxTR",
      subtitle: "Foundations (HTML/CSS/JS)",
      status: { tone: "ready", label: "Completed" },
      description:
        "One of my first projects: a Pomodoro-inspired timer used as an early learning milestone.",
      result: "Kept as a historical benchmark to track my growth over time.",
      stack: ["HTML", "CSS", "JavaScript"],
      deployUrl: "https://maxtherox.github.io/Alarme_web/",
      githubUrl: "https://github.com/Maxtherox/Alarme_web",
    },
    {
      title: "GitHub Favorites",
      subtitle: "Foundations (JavaScript + GitHub API)",
      status: { tone: "ready", label: "Completed" },
      description:
        "Early project focused on API consumption and state handling with vanilla JavaScript.",
      result: "Completed and preserved as a core fundamentals reference.",
      stack: ["JavaScript", "Fetch API", "HTML", "CSS"],
      deployUrl: "https://shiny-torrone-7ed96a.netlify.app/",
      githubUrl: "https://github.com/maxtherox/Github-favorites",
    },
  ];

  const [featuredLimit, setFeaturedLimit] = useState(FEATURED_STEP);
  const featuredVisible = featured.slice(0, featuredLimit);
  const canShowMoreFeatured = featuredLimit < featured.length;

  const list = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Projects | Guilherme Pereira - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Projects by Guilherme Pereira: web apps, APIs, websites, and learning builds."
        />
      </Helmet>

      <header className="space-y-3">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Projects</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          A selection of products I have designed, built, and maintained. For the full archive,
          visit my GitHub profile.
        </p>
        <Button asChild variant="outline" className="rounded-xl">
          <a href="https://github.com/Maxtherox/" target="_blank" rel="noreferrer">
            <Github className="mr-2 size-4" />
            View all on GitHub
          </a>
        </Button>
      </header>

      <motion.section
        variants={list}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {featuredVisible.map((project) => (
          <motion.div key={project.title} variants={item} className="h-full">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.section>

      {canShowMoreFeatured ? (
        <div className="flex justify-center pt-2">
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() =>
              setFeaturedLimit((current) =>
                Math.min(current + FEATURED_STEP, featured.length)
              )
            }
          >
            <Plus className="mr-2 size-4" />
            Show more projects
          </Button>
        </div>
      ) : null}

      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-xl font-black tracking-tight md:text-2xl">
            Early learning projects
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Smaller projects created to practice core concepts and establish my technical base.
          </p>
        </div>
        <motion.section
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {learning.map((project) => (
            <motion.div key={project.title} variants={item} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.section>
      </section>
    </div>
  );
}
