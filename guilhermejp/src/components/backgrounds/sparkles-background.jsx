import React, { useId, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

export function SparklesBackground({ className }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async () => {
    controls.start({ opacity: 1, transition: { duration: 0.9 } });
  };

  const particleColor = isDark ? "#ffffff" : "#0f1115";

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_35%,hsl(var(--primary)/0.18),transparent_60%)]" />
      <motion.div animate={controls} className="absolute inset-0 opacity-0">
        {init && (
          <Particles
            id={generatedId}
            className="absolute inset-0 h-full w-full"
            particlesLoaded={particlesLoaded}
            options={{
              background: { color: { value: "transparent" } },
              fullScreen: { enable: false, zIndex: 0 },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: false, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  push: { quantity: 4 },
                  repulse: { distance: 200, duration: 0.4 },
                },
              },
              particles: {
                color: { value: particleColor },
                number: {
                  density: { enable: true, width: 500, height: 500 },
                  value: isDark ? 110 : 75,
                },
                opacity: {
                  value: { min: 0.08, max: 0.9 },
                  animation: {
                    enable: true,
                    speed: 0.8,
                    sync: false,
                    startValue: "random",
                  },
                },
                size: {
                  value: { min: 0.5, max: 1.6 },
                },
                move: {
                  enable: true,
                  direction: "none",
                  random: false,
                  straight: false,
                  speed: { min: 0.1, max: 0.7 },
                  outModes: { default: "out" },
                },
                shape: { type: "circle" },
                links: { enable: false },
              },
              detectRetina: true,
            }}
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background" />
    </div>
  );
}

