import React from "react";

import { Button as UIButton } from "@/components/ui/button";

export function Button({ title, loading = false, link = "", ...rest }) {
  const disabled = Boolean(loading || rest.disabled);

  return (
    <UIButton {...rest} disabled={disabled} asChild>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {loading ? "carregando..." : title}
      </a>
    </UIButton>
  );
}
