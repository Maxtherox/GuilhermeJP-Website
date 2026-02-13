import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const DockIconButton = React.forwardRef(({ icon: Icon, label, onClick, className }, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative group p-3 rounded-xl",
        "hover:bg-accent transition-colors",
        className
      )}
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-foreground" />
      <span
        className={cn(
          "absolute -top-9 left-1/2 -translate-x-1/2",
          "px-2 py-1 rounded-md text-xs font-medium",
          "bg-popover text-popover-foreground border shadow-sm",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity whitespace-nowrap pointer-events-none"
        )}
      >
        {label}
      </span>
    </motion.button>
  );
});
DockIconButton.displayName = "DockIconButton";

export const Dock = React.forwardRef(({ items, className }, ref) => {
  return (
    <div ref={ref} className={cn("w-full flex items-center justify-center p-2", className)}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatingAnimation}
        className={cn(
          "flex items-center gap-1 p-2 rounded-2xl",
          "backdrop-blur-lg border shadow-lg",
          "bg-background/70 border-border/60",
          "hover:shadow-xl transition-shadow duration-300"
        )}
      >
        {items.map((item) => (
          <DockIconButton key={item.label} {...item} />
        ))}
      </motion.div>
    </div>
  );
});
Dock.displayName = "Dock";

