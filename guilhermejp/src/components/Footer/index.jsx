import React from "react";

export function Footer() {
  return (
    <footer className="mt-10 pb-10 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 backdrop-blur">
          <span className="font-semibold">contato@guilhermejp.com</span>
          <span className="opacity-60">|</span>
          <span>Guilherme J. Pereira</span>
        </div>
      </div>
    </footer>
  );
}
