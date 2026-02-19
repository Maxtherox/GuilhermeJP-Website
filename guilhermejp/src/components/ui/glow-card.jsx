import React from "react";

import { Card } from "@/components/ui/card";
import { GlowFrame } from "@/components/ui/glow-frame";
import { cn } from "@/lib/utils";

export function GlowCard({ className, frameClassName, children, ...props }) {
  return (
    <GlowFrame className={cn("rounded-xl", frameClassName)}>
      <Card
        className={cn(
          "relative overflow-hidden border-transparent bg-background/88 backdrop-blur-sm",
          "ring-1 ring-border/60",
          "[&>*:not([data-layer='fx'])]:relative [&>*:not([data-layer='fx'])]:z-10",
          "before:content-['']",
          "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(120%_85%_at_0%_0%,hsl(var(--primary)/0.10),transparent_56%)]",
          "!shadow-[0_12px_32px_rgba(0,0,0,0.10)] dark:!shadow-[0_12px_32px_rgba(0,0,0,0.26)]",
          "transition-colors duration-300 hover:bg-background/92",
          className
        )}
        {...props}
      >
        <span
          data-layer="fx"
          className="gp-card-aurora pointer-events-none absolute inset-0 opacity-65"
          aria-hidden="true"
        />
        <span
          data-layer="fx"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--foreground)/0.02)_0%,transparent_40%)]"
          aria-hidden="true"
        />
        <span
          data-layer="fx"
          className="gp-card-particles pointer-events-none absolute inset-0 opacity-35"
          aria-hidden="true"
        />
        <span
          data-layer="fx"
          className="gp-card-grain pointer-events-none absolute inset-0 opacity-35"
          aria-hidden="true"
        />
        {children}
      </Card>
    </GlowFrame>
  );
}
