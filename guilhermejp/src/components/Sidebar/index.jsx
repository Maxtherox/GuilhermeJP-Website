import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, PanelLeftClose } from "lucide-react";

import { NAV_ITEMS } from "@/components/navigation/nav-items";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";
import { GlowFrame } from "@/components/ui/glow-frame";

export function Sidebar({ onHide }) {
  return (
    <aside className="sticky top-24">
      <GlowFrame className="rounded-2xl">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border/60 bg-background/55 backdrop-blur-xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_40%_0%,hsl(var(--primary)/0.14),transparent_60%)]" />

          <div className="relative flex items-start justify-between gap-3 p-4">
            <div className="min-w-0">
              <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Menu
              </div>
              <div className="mt-1 text-sm font-semibold">Portfolio</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Navegue pelas secoes.
              </div>
            </div>

            {typeof onHide === "function" ? (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="shrink-0 rounded-full border border-border/60 bg-background/60 backdrop-blur hover:bg-accent"
                onClick={onHide}
                aria-label="Ocultar menu lateral"
              >
                <PanelLeftClose className="size-4" />
              </Button>
            ) : null}
          </div>

          <Separator className="opacity-60" />

          <nav className="relative p-2">
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

          <Separator className="opacity-60" />

          <div className="relative p-4">
            <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Vamos conversar
            </div>
            <div className="mt-3">
              <a href="mailto:contato@guilhermejp.com" className="inline-block">
                <ShinyButton className="flex items-center gap-2">
                  <Mail className="size-4" />
                  Contato
                </ShinyButton>
              </a>
            </div>
          </div>
        </div>
      </GlowFrame>
    </aside>
  );
}
