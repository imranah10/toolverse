// ═══════════════════════════════════════════════════════
// theme.ts — Toolverse theme system
//
// All components read colors/spacing/radii from this theme.
// Users override any value via the <ToolverseProvider>.
// ═══════════════════════════════════════════════════════

export interface ToolverseTheme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    success: string;
    warning: string;
    danger: string;
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    glow: string;
  };
}

export const defaultTheme: ToolverseTheme = {
  colors: {
    primary: "#6366f1",
    secondary: "#8b5cf6",
    accent: "#ec4899",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#0f172a",
    textMuted: "#64748b",
    border: "#e2e8f0",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  fonts: {
    sans: "Inter, system-ui, -apple-system, sans-serif",
    mono: "JetBrains Mono, Menlo, monospace",
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.06)",
    md: "0 4px 12px rgba(99,102,241,0.20)",
    lg: "0 12px 32px rgba(99,102,241,0.25)",
    glow: "0 0 24px rgba(99,102,241,0.50)",
  },
};

// Deep-merge user theme over default theme
export function mergeTheme(overrides?: Partial<ToolverseTheme>): ToolverseTheme {
  if (!overrides) return defaultTheme;
  return {
    colors: { ...defaultTheme.colors, ...overrides.colors },
    radii: { ...defaultTheme.radii, ...overrides.radii },
    spacing: { ...defaultTheme.spacing, ...overrides.spacing },
    fonts: { ...defaultTheme.fonts, ...overrides.fonts },
    shadows: { ...defaultTheme.shadows, ...overrides.shadows },
  };
}
