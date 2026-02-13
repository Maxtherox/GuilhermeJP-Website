import React from "react";

import { Card } from "@/components/ui/card";
import { GlowFrame } from "@/components/ui/glow-frame";
import { cn } from "@/lib/utils";

export function GlowCard({ className, frameClassName, ...props }) {
  return (
    <GlowFrame className={cn("rounded-xl", frameClassName)}>
      <Card
        className={cn(
          "relative overflow-hidden border-transparent bg-background/55 backdrop-blur-xl",
          "!shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:!shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
          "transition-transform duration-300 will-change-transform hover:-translate-y-0.5",
          className
        )}
        {...props}
      />
    </GlowFrame>
  );
}
