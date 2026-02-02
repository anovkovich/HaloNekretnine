"use client";

import React, { createContext, useContext } from "react";
import { ThemeType, ThemeConfig, ScriptFontType } from "../types";
import { getThemeCSSVariables, getThemeConfig, getScriptFontConfig, ScriptFontConfig } from "../constants";

interface ThemeContextValue {
  theme: ThemeType;
  config: ThemeConfig;
  scriptFont: ScriptFontType;
  scriptFontConfig: ScriptFontConfig;
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
  scriptFont?: ScriptFontType;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, scriptFont = "great-vibes", children }: ThemeProviderProps) {
  const cssVariables = getThemeCSSVariables(theme, scriptFont);
  const config = getThemeConfig(theme);
  const scriptFontConfig = getScriptFontConfig(scriptFont);

  return (
    <ThemeContext.Provider value={{ theme, config, scriptFont, scriptFontConfig }}>
      <div
        className="theme-wrapper"
        style={cssVariables as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
