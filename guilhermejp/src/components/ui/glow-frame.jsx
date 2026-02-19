import React from "react";

import { cn } from "@/lib/utils";

export function GlowFrame({ className, children }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden p-px",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]",
        "before:[padding:1px]",
        "before:bg-[linear-gradient(140deg,hsl(var(--border)/0.95)_0%,hsl(var(--primary)/0.24)_48%,hsl(var(--border)/0.95)_100%)]",
        "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
        "before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]",
        "before:opacity-85 before:transition-opacity before:duration-300",
        "hover:before:opacity-100 focus-within:before:opacity-100",
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
