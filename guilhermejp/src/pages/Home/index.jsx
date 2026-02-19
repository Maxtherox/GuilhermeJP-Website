import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Briefcase, Gauge, Github, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
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
  const highlightCards = [
    {
      title: "Client Projects",
      description: "Production-ready delivery",
      date: "Websites + APIs",
      icon: <Briefcase className="size-4 text-primary" />,
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Design Quality",
      description: "Strong visual identity",
      date: "Tailwind + shadcn",
      icon: <Sparkles className="size-4 text-primary" />,
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Performance",
      description: "Fast and stable UX",
      date: "Optimized builds",
      icon: <Gauge className="size-4 text-primary" />,
      className: "[grid-area:stack] translate-x-24 translate-y-16 hover:translate-y-10",
    },
  ];

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
        <title>Home | Guilherme Pereira - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Guilherme Pereira: web products with strong UX, performance, and reliable delivery."
        />
      </Helmet>

      <motion.section
        variants={fadeGrid}
        initial="hidden"
        animate="show"
        className="grid gap-6 lg:grid-cols-2"
      >
        <motion.div variants={fadeItem} className="h-full">
          <GlowCard className="relative flex h-full flex-col lg:h-[38rem]">
            <CardHeader className="relative">
              <CardTitle className="text-2xl font-black tracking-tight md:text-3xl">
                About Me
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                I build web products that balance clear UX, performance, and visual identity.
              </CardDescription>
            </CardHeader>

            <CardContent className="relative flex-1 space-y-4 overflow-y-auto pr-1 text-sm leading-relaxed md:text-base">
              <p>
                Welcome to my portfolio. I am Guilherme Pereira, and this space is where I share
                how I design, build, and deliver practical digital products.
              </p>
              <p>
                I hold a degree in Systems Analysis and Development from Estacio University and
                completed additional certifications throughout my academic journey.
              </p>
              <p>
                I have worked in IT support at AB-InBev/Ambev and also as a video editor and
                animator, experiences that shaped my attention to rhythm, typography, and visual
                composition.
              </p>
              <p>
                Today, I work as a freelance developer creating websites and APIs for small and
                mid-sized businesses.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <ShinyButton
                  onClick={() => navigate("/projects")}
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  View projects
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
          <GlowCard className="relative flex h-full flex-col lg:h-[38rem]">
            <CardHeader className="relative">
              <CardTitle className="text-xl font-black tracking-tight md:text-2xl">Highlights</CardTitle>
              <CardDescription>A quick snapshot of recent portfolio activity.</CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-1 flex-col gap-6 overflow-y-auto pr-1">
              <div className="flex flex-1 items-center justify-center">
                <DisplayCards cards={highlightCards} />
              </div>

              <Separator className="opacity-60" />

              <div className="space-y-3">
                <div className="text-sm font-semibold">Social</div>
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
                  For project inquiries:{" "}
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
          <h2 className="text-xl font-black tracking-tight md:text-2xl">What I Deliver</h2>
          <p className="text-sm text-muted-foreground md:text-base">
            A concise view of my approach: useful outcomes, polished execution, and strong identity.
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
          <GlowCard className="flex h-full flex-col lg:h-[21rem]">
            <CardHeader>
              <CardTitle className="text-xl font-black tracking-tight">Certificates</CardTitle>
              <CardDescription>Open each certificate in a new tab.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto pr-1">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://app.rocketseat.com.br/certificates/efd3cf67-adb5-4e63-8022-e4221b78ea4f"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl border bg-background/50 p-2 transition-colors hover:bg-accent"
                >
                  <img src={c1} alt="Rocketseat certificate 1" className="h-16 w-auto" />
                  <span className="sr-only">Open certificate 1</span>
                </a>
                <a
                  href="https://app.rocketseat.com.br/certificates/1eeab2d8-809c-4ad7-a89a-c31ffc14b3ff"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl border bg-background/50 p-2 transition-colors hover:bg-accent"
                >
                  <img src={c2} alt="Rocketseat certificate 2" className="h-16 w-auto" />
                  <span className="sr-only">Open certificate 2</span>
                </a>
                <a
                  href="https://app.rocketseat.com.br/certificates/3cf04357-4759-4f69-8673-b450bc3d79ce"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl border bg-background/50 p-2 transition-colors hover:bg-accent"
                >
                  <img src={c3} alt="Rocketseat certificate 3" className="h-16 w-auto" />
                  <span className="sr-only">Open certificate 3</span>
                </a>
              </div>
            </CardContent>
          </GlowCard>
        </motion.div>

        <motion.div variants={fadeItem} className="h-full">
          <GlowCard className="relative flex h-full flex-col lg:h-[21rem]">
            <CardHeader className="relative">
              <CardTitle className="text-xl font-black tracking-tight">Services</CardTitle>
              <CardDescription>From concept to launch, with clear communication.</CardDescription>
            </CardHeader>
            <CardContent className="relative flex-1 space-y-4 overflow-y-auto pr-1 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  Branded websites with strong performance
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  Reliable APIs with authentication and business logic
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  Refactors, UX improvements, and codebase cleanup
                </li>
              </ul>

              <Button asChild className="rounded-xl">
                <a href="mailto:contato@guilhermejp.com">
                  <Mail className="mr-2 size-4" />
                  Let&apos;s talk
                </a>
              </Button>
            </CardContent>
          </GlowCard>
        </motion.div>
      </motion.section>
    </div>
  );
}
