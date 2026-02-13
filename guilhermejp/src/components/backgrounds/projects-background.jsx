import React from "react";

import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/backgrounds/dotted-surface";
import { ParticlesField } from "@/components/backgrounds/particles-field";

export function ProjectsBackground({ className }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <DottedSurface className="opacity-70" />
      <ParticlesField
        className="opacity-35"
        quantity={70}
        staticity={110}
        ease={90}
        size={0.85}
        vx={0.02}
        vy={0.01}
      />
      <div className="absolute inset-0 bg-[radial-gradient(75%_65%_at_50%_35%,hsl(var(--primary)/0.12),transparent_65%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background" />
    </div>
  );
}

