// ═══════════════════════════════════════════════════════
// provider.tsx — Toolverse React context provider
//
// Wrap your app:
//   <ToolverseProvider theme={{ colors: { primary: '#ff0000' } }}>
//     <App />
//   </ToolverseProvider>
//
// All Toolverse components now use red as their primary color.
// ═══════════════════════════════════════════════════════

import React, { createContext, useContext } from "react";
import { ToolverseTheme, defaultTheme, mergeTheme } from "./theme";

const ThemeContext = createContext<ToolverseTheme>(defaultTheme);

export interface ToolverseProviderProps {
  theme?: Partial<ToolverseTheme>;
  children: React.ReactNode;
}

export const ToolverseProvider: React.FC<ToolverseProviderProps> = ({
  theme,
  children,
}) => {
  const merged = mergeTheme(theme);
  return (
    <ThemeContext.Provider value={merged}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for components to read the active theme
export function useToolverseTheme(): ToolverseTheme {
  return useContext(ThemeContext);
}
