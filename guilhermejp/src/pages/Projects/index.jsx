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
      <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_30%_0%,hsl(var(--primary)/0.18),transparent_60%)]" />
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
      <CardContent className="relative flex-1 space-y-3 overflow-hidden text-sm text-muted-foreground">
        <p className="leading-relaxed gp-clamp-4">{project.description}</p>
        {project.note ? <p className="text-xs gp-clamp-2">{project.note}</p> : null}
        {project.credentials ? (
          <details className="group rounded-xl border bg-muted/30 p-3 text-xs">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-foreground">
              <span className="inline-flex items-center gap-2">
                <Shield className="size-4" />
                Credenciais de teste
              </span>
              <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-2 grid gap-1 text-muted-foreground">
              <div>
                <span className="text-muted-foreground">Login:</span> {project.credentials.login}
              </div>
              <div>
                <span className="text-muted-foreground">Senha:</span> {project.credentials.password}
              </div>
            </div>
          </details>
        ) : null}
      </CardContent>
      <CardFooter className="relative mt-auto flex flex-wrap gap-2">
        <ActionLink href={project.deployUrl} icon={Rocket}>
          Deploy
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
      title: "[API Restful] Food Explorer",
      subtitle: "Aplicacao para restaurantes online",
      status: { tone: "ready", label: "Responsivo 100%" },
      description:
        "Projeto feito no curso da Rocketseat. Usuario compra, admin cria/edita/exclui pratos. Proximo passo: cobranca.",
      deployUrl: "https://foodexplorer-maxtr.netlify.app/",
      githubUrl: "https://github.com/Maxtherox/foodexplorer-react-frontend",
    },
    {
      title: "[Website] Camila Braga Marketing",
      subtitle: "Site comercial com interface moderna e responsiva",
      status: { tone: "ready", label: "Responsivo 100%" },
      description:
        "Construido com React + Vite. Interface rapida e responsiva com foco em UX e entrega.",
      note: "Publicado com autorizacao da proprietaria.",
      deployUrl: "https://camilabragamarketing.com",
      githubUrl: "https://github.com/Maxtherox/camilabragamarketing.com",
    },
    {
      title: "[API Restful] NFE System",
      subtitle: "Gestao de clientes, empresas e produtos",
      status: { tone: "partial", label: "Responsividade 65%" },
      description:
        "Projeto pessoal para testar abordagens em uma API REST. CRUD de clientes, empresas e produtos.",
      deployUrl: "https://nfesystem.guilhermejp.com",
      githubUrl: "https://github.com/Maxtherox/nfe-system-2025",
    },
    {
      title: "[API Restful] Taekwondo E-Manager",
      subtitle: "Gerenciamento de eventos e chaves de luta",
      status: { tone: "wip", label: "WIP (frontend)" },
      description:
        "Backend funcional com rotas completas. Frontend em desenvolvimento com area admin avancada.",
      credentials: { login: "admin01", password: "12345" },
      deployUrl: "https://taekwondo.guilhermejp.com/",
      githubUrl: "https://github.com/Maxtherox/Taekwondo-EManager",
    },
    {
      title: "[E-commerce] Maralt",
      subtitle: "Loja virtual para vendedor independente",
      status: { tone: "wip", label: "Em desenvolvimento" },
      description:
        "Backend Node + Knex com JWT e carrinho. Integracoes Mercado Pago e Correios em progresso. Frontend em andamento.",
      deployUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[API Restful] Rocketnotes",
      subtitle: "Aplicacao de anotacoes",
      status: { tone: "partial", label: "Pendencias de UX" },
      description:
        "Criar/editar/excluir notas por usuario. Pendentes validacoes e ajustes de responsividade.",
      deployUrl: "https://rocketnotes-maxtr.netlify.app/",
      githubUrl: "https://github.com/Maxtherox/rocketnotes-nodejs-backend",
    },
    {
      title: "[API Restful] RocketMovies",
      subtitle: "Avaliacoes e catalogo de filmes",
      status: { tone: "partial", label: "Pendencias de UX" },
      description:
        "Projeto de desafio Rocketseat. Pendentes validacoes e responsividade. Deploy em breve.",
      deployUrl: "#",
      githubUrl: "https://github.com/Maxtherox/RocketMovies-NodeJS-Backend",
    },
  ];

  const learning = [
    {
      title: "Timer MaxTR",
      subtitle: "Fundamentos (HTML/CSS/JS)",
      status: { tone: "ready", label: "Estudo" },
      description:
        "Um dos meus primeiros projetos: temporizador inspirado em Pomodoro. Importante como marco de inicio.",
      deployUrl: "https://maxtherox.github.io/Alarme_web/",
      githubUrl: "https://github.com/Maxtherox/Alarme_web",
    },
    {
      title: "GitHub Favorites",
      subtitle: "Fundamentos (JS + API GitHub)",
      status: { tone: "ready", label: "Estudo" },
      description:
        "Projeto inicial para consumir API do GitHub e exibir usuarios favoritos, focado em JS puro.",
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
        <title>Projetos | Guilherme Pereira - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Projetos de Guilherme Pereira: apps web, APIs, websites e projetos de estudo."
        />
      </Helmet>

      <header className="space-y-3">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Projetos</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          Aqui estao alguns projetos que eu construo e mantenho. Para ver tudo (e o historico),
          acesse meu GitHub.
        </p>
        <Button asChild variant="outline" className="rounded-xl">
          <a href="https://github.com/Maxtherox/" target="_blank" rel="noreferrer">
            <Github className="mr-2 size-4" />
            Ver todos no GitHub
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
          <motion.div key={project.title} variants={item}>
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
            Mostrar mais projetos
          </Button>
        </div>
      ) : null}

      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-xl font-black tracking-tight md:text-2xl">
            Projetos de aprendizado inicial
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Micro projetos feitos para praticar fundamentos. Eles mostram meu ponto de partida.
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
            <motion.div key={project.title} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.section>
      </section>
    </div>
  );
}
