import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Car, Gamepad2, Plus, Server, Swords, Trophy, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function HobbyCard({ hobby }) {
  return (
    <GlowCard className="relative flex flex-col md:h-[26rem]">
      <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_30%_0%,hsl(var(--primary)/0.14),transparent_60%)]" />
      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-lg font-black tracking-tight md:text-xl">
              <hobby.icon className="size-5 text-primary" />
              {hobby.title}
            </CardTitle>
            <CardDescription>{hobby.subtitle}</CardDescription>
          </div>
          {hobby.badge ? (
            <Badge
              variant="outline"
              className={cn("rounded-full border px-2.5 py-0.5 text-xs", hobby.badge.className)}
            >
              {hobby.badge.label}
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="relative flex-1 space-y-3 overflow-hidden text-sm text-muted-foreground">
        <p className="leading-relaxed gp-clamp-6">
          {Array.isArray(hobby.paragraphs) ? hobby.paragraphs.join(" ") : hobby.paragraphs}
        </p>
      </CardContent>
    </GlowCard>
  );
}

export function Hobbies() {
  const STEP = 4;

  const hobbies = [
    {
      title: "Taekwondo",
      subtitle: "Disciplina, consistencia e mente fria",
      icon: Swords,
      badge: { label: "Treino", className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25" },
      paragraphs: [
        "Uma das minhas maiores paixoes e o Taekwondo. A rotina me ensinou disciplina, paciencia e resiliencia.",
        "Essas mesmas qualidades vao direto para a programacao: iterar, corrigir, repetir e melhorar sem drama.",
      ],
    },
    {
      title: "Eventos e ferramentas",
      subtitle: "Quando o hobby vira produto",
      icon: Wrench,
      badge: { label: "Projeto", className: "bg-sky-500/15 text-sky-300 border-sky-500/25" },
      paragraphs: [
        "Eu desenvolvi um gerenciador e balanceador de lutas para competicoes. Construir isso me mostrou como software resolve dores fora da bolha tech.",
        "O resultado foi aprender muito sobre regras, fluxo, excecoes e como entregar algo que realmente ajuda a organizacao.",
      ],
    },
    {
      title: "Servidores e infra",
      subtitle: "Linux, redes e manutencao",
      icon: Server,
      badge: { label: "Ops", className: "bg-amber-500/15 text-amber-300 border-amber-500/25" },
      paragraphs: [
        "Desde a adolescencia eu crio e gerencio servidores de jogos. Isso me puxou para Linux (Ubuntu Server) e FreeBSD.",
        "Aprender a configurar, otimizar e manter servidores virou base solida para entender redes, seguranca e automacao.",
      ],
    },
    {
      title: "Jogos",
      subtitle: "Design, mecanica e curiosidade tecnica",
      icon: Gamepad2,
      badge: { label: "RPG / Soulslike", className: "bg-primary/15 text-primary border-primary/25" },
      paragraphs: [
        "Gosto de entender mecanicas e o design por tras de cada experiencia.",
        "Sou fa de RPGs e soulslikes e curto jogos que desafiam tanto mecanicamente quanto narrativamente.",
      ],
    },
    {
      title: "Automobilismo e simuladores",
      subtitle: "Ajuste fino e fisica aplicada",
      icon: Car,
      badge: { label: "Sim racing", className: "bg-rose-500/15 text-rose-300 border-rose-500/25" },
      paragraphs: [
        "Curto simuladores de corrida e voo nao so pelo hobby, mas pelo lado tecnico: setup, fisica e aerodinamica.",
        "Esse tipo de estudo alimenta a mesma energia de otimizar sistemas e interfaces.",
      ],
    },
    {
      title: "Objetivo",
      subtitle: "Aprender, criar e evoluir",
      icon: Trophy,
      paragraphs: [
        "No fim, tudo se conecta: eu gosto de desafios e de construir coisas.",
        "Seja no tatame, nos servidores ou no codigo, o que me move e aprender e entregar melhor a cada iteracao.",
      ],
    },
  ];

  const [limit, setLimit] = useState(STEP);
  const visible = hobbies.slice(0, limit);
  const canShowMore = limit < hobbies.length;

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
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Hobbies | Guilherme Pereira - Desenvolvedor Full Stack</title>
        <meta name="description" content="Hobbies e interesses de Guilherme Pereira." />
      </Helmet>

      <header className="space-y-3">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Hobbies</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          Coisas que eu gosto e que, direta ou indiretamente, influenciam como eu construo software.
        </p>
      </header>

      <motion.section
        variants={list}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {visible.map((hobby) => (
          <motion.div key={hobby.title} variants={item}>
            <HobbyCard hobby={hobby} />
          </motion.div>
        ))}
      </motion.section>

      {canShowMore ? (
        <div className="flex justify-center pt-2">
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => setLimit((current) => Math.min(current + STEP, hobbies.length))}
          >
            <Plus className="mr-2 size-4" />
            Mostrar mais hobbies
          </Button>
        </div>
      ) : null}
    </div>
  );
}
