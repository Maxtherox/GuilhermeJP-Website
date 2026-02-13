import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

import { FeaturesSectionWithHoverEffects } from "@/components/blocks/features-section-with-hover-effects";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DisplayCards } from "@/components/ui/display-cards";
import { Separator } from "@/components/ui/separator";
import { ShinyButton } from "@/components/ui/shiny-button";

export function Home() {
  const navigate = useNavigate();

  const fadeGrid = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Home | Guilherme Pereira - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Portfolio de Guilherme Pereira: Fullstack Web Dev com experiencia em React, Node.js e criacao de produtos web."
        />
      </Helmet>

      <motion.section
        variants={fadeGrid}
        initial="hidden"
        animate="show"
        className="grid gap-6 lg:grid-cols-2"
      >
        <motion.div variants={fadeItem} className="h-full">
          <GlowCard className="relative flex h-full flex-col">
          <div className="absolute inset-0 bg-[radial-gradient(65%_70%_at_25%_0%,hsl(var(--primary)/0.22),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_85%_10%,hsl(var(--primary)/0.10),transparent_55%)]" />

          <CardHeader className="relative">
            <CardTitle className="text-2xl font-black tracking-tight md:text-3xl">
              Sobre mim
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Eu crio interfaces, APIs e sites com foco em clareza, performance e um visual
              memoravel.
            </CardDescription>
          </CardHeader>

          <CardContent className="relative flex-1 space-y-4 text-sm leading-relaxed md:text-base">
            <p>
              Bem-vindo ao meu website. Meu nome e Guilherme Pereira e a intencao aqui e
              mostrar, sem enrolacao, o que eu construo e como eu penso produto.
            </p>
            <p>
              Sou formado em Analise e Desenvolvimento de Sistemas (Universidade Estacio de
              Sa) e acumulei certificados ao longo do periodo academico.
            </p>
            <p>
              Ja atuei como suporte de TI na AB-InBev/Ambev e tambem trabalhei como editor de
              video e animador, o que influenciou diretamente minha atencao a ritmo,
              tipografia e composicao.
            </p>
            <p>
              Hoje atuo como freelancer criando websites e APIs para pequenos e medios
              empresarios.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <ShinyButton
                onClick={() => navigate("/projects")}
                className="flex items-center gap-2"
              >
                Ver projetos
                <ArrowRight className="size-4" />
              </ShinyButton>
              <Button asChild variant="outline" className="rounded-xl">
                <a href="mailto:contato@guilhermejp.com">
                  <Mail className="mr-2 size-4" />
                  Email
                </a>
              </Button>
            </div>
          </CardContent>
          </GlowCard>
        </motion.div>

        <motion.div variants={fadeItem} className="h-full">
          <GlowCard className="relative flex h-full flex-col">
          <div className="absolute inset-0 bg-[radial-gradient(65%_70%_at_65%_0%,hsl(var(--primary)/0.18),transparent_60%)]" />
          <CardHeader className="relative">
            <CardTitle className="text-xl font-black tracking-tight md:text-2xl">Destaques</CardTitle>
            <CardDescription>Um recorte do que esta rolando no portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="relative flex flex-1 flex-col gap-6">
            <div className="flex flex-1 items-center justify-center">
              <DisplayCards />
            </div>

            <Separator className="opacity-60" />

            <div className="space-y-3">
              <div className="text-sm font-semibold">Redes</div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="icon" className="rounded-xl">
                  <a href="https://www.linkedin.com/in/guimaxtr/" target="_blank" rel="noreferrer">
                    <Linkedin className="size-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-xl">
                  <a href="https://github.com/Maxtherox/" target="_blank" rel="noreferrer">
                    <Github className="size-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-xl">
                  <a href="https://www.instagram.com/dev.guilhermejp/" target="_blank" rel="noreferrer">
                    <Instagram className="size-4" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </Button>
              </div>
              <div className="text-xs text-muted-foreground">
                Para propostas:{" "}
                <a className="font-semibold hover:underline" href="mailto:contato@guilhermejp.com">
                  contato@guilhermejp.com
                </a>
              </div>
            </div>
          </CardContent>
          </GlowCard>
        </motion.div>
      </motion.section>

      <motion.section
        variants={fadeItem}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <h2 className="text-xl font-black tracking-tight md:text-2xl">O que eu entrego</h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Um recorte do meu jeito de trabalhar: foco em utilidade, acabamento e identidade.
          </p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </motion.section>

      <motion.section
        variants={fadeGrid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-2"
      >
        <motion.div variants={fadeItem} className="h-full">
          <GlowCard className="h-full">
          <CardHeader>
            <CardTitle className="text-xl font-black tracking-tight">Certificados</CardTitle>
            <CardDescription>Clique em cada um para abrir.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.rocketseat.com.br/certificates/efd3cf67-adb5-4e63-8022-e4221b78ea4f"
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-xl border bg-background/50 p-2 transition-colors hover:bg-accent"
              >
                <img src={c1} alt="Certificado Rocketseat 1" className="h-16 w-auto" />
                <span className="sr-only">Abrir certificado 1</span>
              </a>
              <a
                href="https://app.rocketseat.com.br/certificates/1eeab2d8-809c-4ad7-a89a-c31ffc14b3ff"
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-xl border bg-background/50 p-2 transition-colors hover:bg-accent"
              >
                <img src={c2} alt="Certificado Rocketseat 2" className="h-16 w-auto" />
                <span className="sr-only">Abrir certificado 2</span>
              </a>
              <a
                href="https://app.rocketseat.com.br/certificates/3cf04357-4759-4f69-8673-b450bc3d79ce"
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-xl border bg-background/50 p-2 transition-colors hover:bg-accent"
              >
                <img src={c3} alt="Certificado Rocketseat 3" className="h-16 w-auto" />
                <span className="sr-only">Abrir certificado 3</span>
              </a>
            </div>
          </CardContent>
          </GlowCard>
        </motion.div>

        <motion.div variants={fadeItem} className="h-full">
          <GlowCard className="relative h-full">
          <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_60%_0%,hsl(var(--primary)/0.20),transparent_55%)]" />
          <CardHeader className="relative">
            <CardTitle className="text-xl font-black tracking-tight">Disponibilidade</CardTitle>
            <CardDescription>Do design ao deploy, sem perder o fio.</CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-4 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                Websites com identidade e performance
              </li>
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                APIs (Node) com autenticacao, CRUD e boas praticas
              </li>
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                Refactors, ajustes e melhoria de UX
              </li>
            </ul>

            <Button asChild className="rounded-xl">
              <a href="mailto:contato@guilhermejp.com">
                <Mail className="mr-2 size-4" />
                Vamos conversar
              </a>
            </Button>
          </CardContent>
          </GlowCard>
        </motion.div>
      </motion.section>
    </div>
  );
}
