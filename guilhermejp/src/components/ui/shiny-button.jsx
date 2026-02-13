import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.92 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.98 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 18,
    damping: 14,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 180,
      damping: 7,
      mass: 0.6,
    },
  },
};

export function ShinyButton({ children, className, ...props }) {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative rounded-xl px-6 py-2 font-semibold backdrop-blur-xl transition-shadow duration-300 ease-in-out",
        "bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.14)_0%,transparent_60%)]",
        "border border-border/70 hover:shadow-[0_0_30px_hsl(var(--primary)/0.12)]",
        "text-foreground",
        className
      )}
    >
      <span
        className="relative block size-full text-sm uppercase tracking-wide text-foreground/90"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
        style={{
          mask: "linear-gradient(#000,#000) content-box,linear-gradient(#000,#000)",
          maskComposite: "exclude",
          background:
            "linear-gradient(-75deg,hsl(var(--primary)/0.10) calc(var(--x)+20%),hsl(var(--primary)/0.55) calc(var(--x)+25%),hsl(var(--primary)/0.10) calc(var(--x)+100%))",
        }}
      />
    </motion.button>
  );
}

