import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

function FloatingPaths({ position = 1, className }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${
      189 + i * 6
    } -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${
      343 - i * 6
    }C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${
      875 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.6 + i * 0.03,
    opacity: 0.03 + i * 0.01,
    duration: 18 + (i % 6) * 2,
  }));

  return (
    <div className={cn("absolute inset-0", className)} aria-hidden="true">
      <svg className="h-full w-full text-foreground/70" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.25, opacity: 0.15 }}
            animate={{
              pathLength: 1,
              opacity: [0.08, 0.18, 0.08],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({ className }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,hsl(var(--primary)/0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-80">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
    </div>
  );
}
