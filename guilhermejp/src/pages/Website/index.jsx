import React from "react";
import { Helmet } from "react-helmet-async";
import { Github, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function SiteCard({ site }) {
  return (
    <GlowCard className="relative flex flex-col md:h-[24rem]">
      <CardHeader className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg font-black tracking-tight md:text-xl">
              {site.title}
            </CardTitle>
            <CardDescription>{site.subtitle}</CardDescription>
          </div>
          {site.badge ? (
            <Badge
              variant="outline"
              className={cn("rounded-full border px-2.5 py-0.5 text-xs", site.badge.className)}
            >
              {site.badge.label}
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="relative flex-1 space-y-3 overflow-y-auto pr-1 text-sm text-muted-foreground">
        <p className="leading-relaxed">{site.description}</p>
      </CardContent>
      <CardFooter className="relative mt-auto flex flex-wrap gap-2">
        <Button asChild variant="outline" className="rounded-xl">
          <a href={site.url} target="_blank" rel="noreferrer">
            <Globe className="mr-2 size-4" />
            Visit
          </a>
        </Button>
        {site.githubUrl ? (
          <Button asChild variant="outline" className="rounded-xl">
            <a href={site.githubUrl} target="_blank" rel="noreferrer">
              <Github className="mr-2 size-4" />
              GitHub
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </GlowCard>
  );
}

export function Website() {
  const sites = [
    {
      title: "modpacks.com.br",
      subtitle: "Landing page focused on showcase and conversion",
      badge: { label: "In progress", className: "bg-sky-500/15 text-sky-300 border-sky-500/25" },
      description:
        "This website was created early in my journey to promote a Skyrim modpack and direct traffic to Patreon. It is now being prepared for migration to a dedicated subscriber platform.",
      url: "https://modpacks.com.br/",
      githubUrl: "https://github.com/Maxtherox/maxtrMods-landingpage-SPA",
    },
  ];

  const list = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
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
        <title>Websites | Guilherme Pereira - Full-Stack Web Developer</title>
        <meta name="description" content="Published websites created by Guilherme Pereira." />
      </Helmet>

      <header className="space-y-3">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Websites</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          A curated list of published websites. New releases are added as projects go live.
        </p>
        <Button asChild className="rounded-xl">
          <a href="mailto:contato@guilhermejp.com">
            <Rocket className="mr-2 size-4" />
            Request a website
          </a>
        </Button>
      </header>

      <motion.section
        variants={list}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {sites.map((site) => (
          <motion.div key={site.title} variants={item} className="h-full">
            <SiteCard site={site} />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
