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
        <title>Error 404 | Page not found</title>
      </Helmet>

      <GlowCard className="relative">
        <CardHeader className="relative">
          <CardTitle className="text-3xl font-black tracking-tight md:text-4xl">
            Error 404
          </CardTitle>
          <CardDescription className="text-base">
            The page you requested does not exist. If you followed a link, it may be outdated or incorrect.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex flex-wrap gap-3">
          <Button asChild className="rounded-xl">
            <Link to="/">
              <Home className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" className="rounded-xl" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 size-4" />
            Go back
          </Button>
        </CardContent>
      </GlowCard>
    </div>
  );
}
