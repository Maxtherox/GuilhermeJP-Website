import React from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { ShootingStars } from "@/components/backgrounds/shooting-stars";

export function ShootingStarsBackground({ className }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const layerA = isDark
    ? { star: "#15c98a", trail: "#94a3b8" }
    : { star: "#0f1115", trail: "#15c98a" };

  const layerB = isDark
    ? { star: "#ffffff", trail: "#15c98a" }
    : { star: "#15c98a", trail: "#0f1115" };

  const layerC = isDark
    ? { star: "#94a3b8", trail: "#ffffff" }
    : { star: "#0f1115", trail: "#94a3b8" };

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_35%,hsl(var(--primary)/0.14),transparent_70%)]" />
      <div className="gp-stars absolute inset-0" />

      <ShootingStars
        starColor={layerA.star}
        trailColor={layerA.trail}
        minSpeed={14}
        maxSpeed={34}
        minDelay={900}
        maxDelay={2600}
      />
      <ShootingStars
        starColor={layerB.star}
        trailColor={layerB.trail}
        minSpeed={10}
        maxSpeed={28}
        minDelay={1400}
        maxDelay={3200}
      />
      <ShootingStars
        starColor={layerC.star}
        trailColor={layerC.trail}
        minSpeed={18}
        maxSpeed={40}
        minDelay={1100}
        maxDelay={3600}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background" />
    </div>
  );
}

