import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { NAV_ITEMS } from "@/components/navigation/nav-items";
import { cn } from "@/lib/utils";

import { Dock } from "@/components/ui/dock";
import { BackgroundPaths } from "@/components/backgrounds/background-paths";
import { ParticlesField } from "@/components/backgrounds/particles-field";
import { SparklesBackground } from "@/components/backgrounds/sparkles-background";
import { ShootingStarsBackground } from "@/components/backgrounds/shooting-stars-background";
import { ProjectsBackground } from "@/components/backgrounds/projects-background";

const SIDEBAR_VISIBLE_STORAGE_KEY = "gp.sidebar.visible";

function RouteBackground({ pathname }) {
  if (pathname === "/")
    return (
      <>
        <BackgroundPaths />
        <ParticlesField
          className="opacity-45"
          quantity={90}
          ease={80}
          staticity={70}
          size={0.6}
          refresh
        />
      </>
    );
  if (pathname === "/projects") return <ProjectsBackground />;
  if (pathname === "/website") return <SparklesBackground />;
  if (pathname === "/hobbies") return <ShootingStarsBackground />;

  // NotFound / unknown routes
  return (
    <ParticlesField
      className="opacity-35"
      quantity={55}
      staticity={160}
      ease={110}
      size={0.55}
      vx={0.01}
      vy={0.01}
      refresh
    />
  );
}

export function SiteLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(() => {
    try {
      return window.localStorage.getItem(SIDEBAR_VISIBLE_STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        SIDEBAR_VISIBLE_STORAGE_KEY,
        sidebarVisible ? "1" : "0"
      );
    } catch {
      // ignore
    }
  }, [sidebarVisible]);

  const dockItems = useMemo(() => {
    const path = location.pathname;
    return NAV_ITEMS.map((item) => {
      const isActive = item.end ? path === item.to : path.startsWith(item.to);
      return {
        icon: item.icon,
        label: item.label,
        onClick: () => navigate(item.to),
        className: cn(isActive && "bg-accent"),
      };
    });
  }, [location.pathname, navigate]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0">
        <RouteBackground pathname={location.pathname} />
      </div>

      <div className="fixed inset-x-0 top-0 z-50">
        <Header
          sidebarVisible={sidebarVisible}
          onToggleSidebar={() => setSidebarVisible((v) => !v)}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-24 lg:px-6 lg:pt-28">
          <div
            className={cn(
              "grid gap-6",
              sidebarVisible ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-1"
            )}
          >
            {sidebarVisible ? (
              <aside className="hidden lg:block">
                <Sidebar onHide={() => setSidebarVisible(false)} />
              </aside>
            ) : null}

            <main className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </main>
          </div>

          <Footer />
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 z-40 w-full max-w-md -translate-x-1/2 px-4 lg:hidden">
        <Dock items={dockItems} />
      </div>
    </div>
  );
}
