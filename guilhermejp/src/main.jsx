import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "./components/theme-provider";
import { Routes } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="gp-theme">
        <Routes />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
)
