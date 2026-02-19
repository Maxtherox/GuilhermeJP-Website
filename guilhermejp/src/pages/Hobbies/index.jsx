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
      <CardContent className="relative flex-1 space-y-3 overflow-y-auto pr-1 text-sm text-muted-foreground">
        {Array.isArray(hobby.paragraphs) ? (
          hobby.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="leading-relaxed">{hobby.paragraphs}</p>
        )}
      </CardContent>
    </GlowCard>
  );
}

export function Hobbies() {
  const STEP = 4;

  const hobbies = [
    {
      title: "Taekwondo",
      subtitle: "Discipline, consistency, and composure",
      icon: Swords,
      badge: { label: "Training", className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25" },
      paragraphs: [
        "Taekwondo is one of my strongest passions. It taught me discipline, patience, and resilience.",
        "Those same qualities guide my work in software: iterate, improve, and stay focused under pressure.",
      ],
    },
    {
      title: "Events and tools",
      subtitle: "When a hobby becomes a real product",
      icon: Wrench,
      badge: { label: "Project", className: "bg-sky-500/15 text-sky-300 border-sky-500/25" },
      paragraphs: [
        "I built a match management and balancing tool for competitions, turning a practical need into a working solution.",
        "That experience deepened my understanding of rules, edge cases, and product decisions that truly support operations.",
      ],
    },
    {
      title: "Servers and infrastructure",
      subtitle: "Linux, networking, and maintenance",
      icon: Server,
      badge: { label: "Ops", className: "bg-amber-500/15 text-amber-300 border-amber-500/25" },
      paragraphs: [
        "Since my teenage years, I have managed game servers, which introduced me to Linux and system administration.",
        "Configuring and maintaining these environments gave me a solid foundation in networking, security, and automation.",
      ],
    },
    {
      title: "Gaming",
      subtitle: "Design, mechanics, and curiosity",
      icon: Gamepad2,
      badge: { label: "RPG / Soulslike", className: "bg-primary/15 text-primary border-primary/25" },
      paragraphs: [
        "I enjoy understanding the design decisions behind each game experience.",
        "RPGs and soulslikes are favorites because they combine challenge, structure, and meaningful progression.",
      ],
    },
    {
      title: "Motorsport and simulators",
      subtitle: "Precision, setup, and applied physics",
      icon: Car,
      badge: { label: "Sim racing", className: "bg-rose-500/15 text-rose-300 border-rose-500/25" },
      paragraphs: [
        "I enjoy racing and flight simulators not only for fun, but also for the analytical side of setup and tuning.",
        "This mindset aligns with how I optimize digital products: test, measure, and refine for better outcomes.",
      ],
    },
    {
      title: "Purpose",
      subtitle: "Learn, build, and keep improving",
      icon: Trophy,
      paragraphs: [
        "In the end, everything connects through problem-solving and creation.",
        "Whether in sports, infrastructure, or software, my focus is steady progress and better delivery over time.",
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
        <title>Hobbies | Guilherme Pereira - Full-Stack Web Developer</title>
        <meta name="description" content="Hobbies and interests that shape how Guilherme Pereira builds software." />
      </Helmet>

      <header className="space-y-3">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Hobbies</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          Personal interests that influence my mindset, discipline, and execution as a developer.
        </p>
      </header>

      <motion.section
        variants={list}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {visible.map((hobby) => (
          <motion.div key={hobby.title} variants={item} className="h-full">
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
            Show more hobbies
          </Button>
        </div>
      ) : null}
    </div>
  );
}
