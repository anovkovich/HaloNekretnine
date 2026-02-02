"use client";

import React, { createContext, useContext } from "react";
import { ThemeType, ThemeConfig } from "../types";
import { getThemeCSSVariables, getThemeConfig } from "../constants";

interface ThemeContextValue {
  theme: ThemeType;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  theme: ThemeType;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const cssVariables = getThemeCSSVariables(theme);
  const config = getThemeConfig(theme);

  return (
    <ThemeContext.Provider value={{ theme, config }}>
      <div
        className="theme-wrapper"
        style={cssVariables as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
