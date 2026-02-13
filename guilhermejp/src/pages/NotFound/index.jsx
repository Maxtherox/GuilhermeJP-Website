import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function NotFound() {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Erro 404 | Pagina nao encontrada</title>
      </Helmet>

      <GlowCard className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_30%_0%,hsl(var(--primary)/0.18),transparent_60%)]" />
        <CardHeader className="relative">
          <CardTitle className="text-3xl font-black tracking-tight md:text-4xl">
            Erro 404
          </CardTitle>
          <CardDescription className="text-base">
            A pagina solicitada nao existe. Se voce chegou aqui por um link, ele pode estar errado
            ou desatualizado.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex flex-wrap gap-3">
          <Button asChild className="rounded-xl">
            <Link to="/">
              <Home className="mr-2 size-4" />
              Voltar para Home
            </Link>
          </Button>
          <Button variant="outline" className="rounded-xl" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 size-4" />
            Voltar
          </Button>
        </CardContent>
      </GlowCard>
    </div>
  );
}
