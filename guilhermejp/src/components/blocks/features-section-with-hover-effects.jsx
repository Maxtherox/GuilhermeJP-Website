import React from "react";
import { Code2, Cpu, Globe, Rocket, ShieldCheck, Sparkles, Terminal, Wand2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { GlowFrame } from "@/components/ui/glow-frame";

export function FeaturesSectionWithHoverEffects({ className }) {
  const features = [
    {
      title: "React + Vite",
      description: "Interfaces rapidas, leves e com feedback imediato.",
      icon: <Terminal className="size-5" />,
    },
    {
      title: "Node + APIs",
      description: "Backends pragmaticos com autenticacao e boas praticas.",
      icon: <Cpu className="size-5" />,
    },
    {
      title: "UI System",
      description: "Tailwind + shadcn: consistente, escalavel e bonito.",
      icon: <Sparkles className="size-5" />,
    },
    {
      title: "Motion",
      description: "Animacoes que elevam o produto sem virar ruido.",
      icon: <Wand2 className="size-5" />,
    },
    {
      title: "Deploy",
      description: "Entrega e iteracao rapida, com foco no que importa.",
      icon: <Rocket className="size-5" />,
    },
    {
      title: "Web",
      description: "Acessibilidade, SEO e performance como padrao.",
      icon: <Globe className="size-5" />,
    },
    {
      title: "Codigo",
      description: "Arquitetura limpa, componentizacao e reuso real.",
      icon: <Code2 className="size-5" />,
    },
    {
      title: "Confianca",
      description: "Validacoes e segurança basica sempre no radar.",
      icon: <ShieldCheck className="size-5" />,
    },
  ];

  return (
    <GlowFrame className={cn("rounded-2xl", className)}>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10",
          "rounded-2xl bg-background/55 backdrop-blur-xl",
          "shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        )}
      >
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </GlowFrame>
  );
}

function Feature({ title, description, icon, index }) {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        "lg:border-r lg:border-border/60",
        (index === 0 || index === 4) && "lg:border-l lg:border-border/60",
        index < 4 && "lg:border-b lg:border-border/60"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/70 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-muted/70 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-8 text-muted-foreground">{icon}</div>
      <div className="text-base font-semibold mb-2 relative z-10 px-8">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-9 w-1 rounded-tr-full rounded-br-full",
            "bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center"
          )}
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-8">
        {description}
      </p>
    </div>
  );
}
