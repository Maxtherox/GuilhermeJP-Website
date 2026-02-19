import React from "react";
import { NavLink } from "react-router-dom";
import {
  Github,
  Instagram,
  Linkedin,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import guilhermeJP from "../../assets/GUILHERMEJP20254.png";
import { NAV_ITEMS } from "@/components/navigation/nav-items";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { GlowFrame } from "@/components/ui/glow-frame";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function Header({ sidebarVisible = false, onToggleSidebar }) {
  return (
    <header className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 pt-6 lg:px-6">
        <GlowFrame className="rounded-2xl">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border/60 bg-background/55 backdrop-blur-xl",
              "shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_15%_0%,hsl(var(--primary)/0.18),transparent_65%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,hsl(var(--primary)/0.10)_22%,transparent_45%,hsl(var(--primary)/0.06)_72%,transparent_100%)] bg-[length:200%_200%] animate-shimmer opacity-70" />
            <div className="relative grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 lg:grid-cols-[1fr_auto_1fr]">
              <NavLink to="/" className="flex min-w-0 items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--primary)),transparent,hsl(var(--primary)))] blur-md opacity-35" />
                  <img
                    src={guilhermeJP}
                    alt="Guilherme Pereira"
                    className="relative size-11 rounded-full border border-border/70 object-cover"
                    loading="eager"
                  />
                </div>
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-sm font-semibold tracking-tight">
                    Guilherme J. Pereira
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    Full-Stack Web Developer
                  </div>
                </div>
              </NavLink>

            <nav className="hidden lg:flex items-center justify-center">
              <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/40 px-1 py-1 backdrop-blur">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      cn(
                        "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors",
                        "text-muted-foreground hover:text-foreground hover:bg-accent/60",
                        isActive && "bg-accent text-accent-foreground"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>

            <div className="flex items-center justify-end gap-2">
              {typeof onToggleSidebar === "function" ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="hidden lg:inline-flex rounded-full border border-border/60 bg-background/60 backdrop-blur hover:bg-accent"
                  onClick={onToggleSidebar}
                >
                  {sidebarVisible ? (
                    <PanelLeftClose className="size-4" />
                  ) : (
                    <PanelLeftOpen className="size-4" />
                  )}
                  <span className="sr-only">
                    {sidebarVisible
                      ? "Hide sidebar menu"
                      : "Show sidebar menu"}
                  </span>
                </Button>
              ) : null}

              <ThemeToggle />

              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full border border-border/60 bg-background/60 backdrop-blur hover:bg-accent"
                    >
                      <Menu className="size-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="border-border/70">
                    <div className="flex h-full flex-col gap-4">
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">Navigation</div>
                        <div className="text-xs text-muted-foreground">
                          Explore the portfolio sections.
                        </div>
                      </div>

                      <Separator className="opacity-60" />

                      <nav className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item) => (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                              cn(
                                "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium",
                                "hover:bg-accent hover:text-accent-foreground",
                                isActive && "bg-accent text-accent-foreground"
                              )
                            }
                          >
                            <item.icon className="size-4 text-muted-foreground group-hover:text-foreground" />
                            {item.label}
                          </NavLink>
                        ))}
                      </nav>

                      <div className="mt-auto rounded-2xl border bg-muted/30 p-4">
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                          Contact
                        </div>
                        <a
                          href="mailto:contato@guilhermejp.com"
                          className="mt-2 block text-sm font-semibold hover:underline"
                        >
                          contato@guilhermejp.com
                        </a>
                        <div className="mt-4 flex gap-2">
                          <Button asChild variant="outline" size="icon" className="rounded-xl">
                            <a href="https://www.linkedin.com/in/guimaxtr/" target="_blank" rel="noreferrer">
                              <Linkedin className="size-4" />
                              <span className="sr-only">LinkedIn</span>
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="icon" className="rounded-xl">
                            <a href="https://github.com/Maxtherox/" target="_blank" rel="noreferrer">
                              <Github className="size-4" />
                              <span className="sr-only">GitHub</span>
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="icon" className="rounded-xl">
                            <a href="https://www.instagram.com/dev.guilhermejp/" target="_blank" rel="noreferrer">
                              <Instagram className="size-4" />
                              <span className="sr-only">Instagram</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          </div>
        </GlowFrame>
      </div>
    </header>
  );
}
