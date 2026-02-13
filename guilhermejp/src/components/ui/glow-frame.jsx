import React from "react";

import { cn } from "@/lib/utils";

export function GlowFrame({ className, children }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden p-[2px]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]",
        "before:[padding:2px]",
        "before:bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,transparent_300deg,hsl(var(--primary)/0.90)_330deg,transparent_360deg)]",
        "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
        "before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]",
        "before:opacity-60 before:animate-border-spin before:transition-opacity before:duration-300 motion-reduce:before:animate-none",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit]",
        "after:[padding:2px]",
        "after:bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,transparent_300deg,hsl(var(--primary)/0.75)_330deg,transparent_360deg)]",
        "after:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
        "after:[mask-composite:exclude] after:[-webkit-mask-composite:xor]",
        "after:opacity-30 after:blur-2xl after:animate-border-spin-slow after:transition-opacity after:duration-300 motion-reduce:after:animate-none",
        "hover:before:opacity-100 hover:after:opacity-55 focus-within:before:opacity-100 focus-within:after:opacity-55",
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
