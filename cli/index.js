#!/usr/bin/env node
// ═══════════════════════════════════════════════════════
// Toolverse CLI — `npx toolverse add <component>`
//
// Inspired by shadcn/ui. Adds a component file directly to
// the user's project so they OWN the code and can customize
// freely.
//
// Usage:
//   npx toolverse add button
//   npx toolverse add card
//   npx toolverse add alert
//   npx toolverse add all
//   npx toolverse list
// ═══════════════════════════════════════════════════════

const fs = require("fs");
const path = require("path");

// ─── Component registry ───────────────────────────────
// Each entry: name + source code that gets written to
// the user's project.
const COMPONENTS = {
  button: {
    file: "Button.tsx",
    description: "Multi-variant Button with gradient, glow, pill, ghost modes",
    deps: ["react"],
    source: `"use client";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  gradient?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const VARIANTS: Record<ButtonVariant, React.CSSProperties> = {
  primary:   { background: "#6366f1", color: "#fff", border: "1px solid #6366f1" },
  secondary: { background: "#8b5cf6", color: "#fff", border: "1px solid #8b5cf6" },
  accent:    { background: "#ec4899", color: "#fff", border: "1px solid #ec4899" },
  success:   { background: "#10b981", color: "#fff", border: "1px solid #10b981" },
  warning:   { background: "#f59e0b", color: "#fff", border: "1px solid #f59e0b" },
  danger:    { background: "#ef4444", color: "#fff", border: "1px solid #ef4444" },
  ghost:     { background: "transparent", color: "#6366f1", border: "1px solid transparent" },
  outline:   { background: "transparent", color: "#6366f1", border: "1px solid #6366f1" },
};

const SIZES: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "6px 12px",  fontSize: "12px" },
  md: { padding: "10px 18px", fontSize: "14px" },
  lg: { padding: "14px 24px", fontSize: "16px" },
  xl: { padding: "18px 32px", fontSize: "18px" },
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary", size = "md", gradient = false, fullWidth = false,
  loading = false, disabled, children, style, ...rest
}) => {
  const computed: React.CSSProperties = {
    ...VARIANTS[variant],
    ...SIZES[size],
    fontWeight: 600,
    borderRadius: 8,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "all 0.15s ease",
    fontFamily: "Inter, system-ui, sans-serif",
    ...(gradient && {
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      border: "1px solid transparent",
    }),
    ...style,
  };
  return (
    <button style={computed} disabled={disabled || loading} {...rest}>
      {loading && (
        <span style={{
          width: 14, height: 14, border: "2px solid currentColor",
          borderTopColor: "transparent", borderRadius: "50%",
          animation: "tv-spin 0.6s linear infinite",
        }} />
      )}
      {children}
      <style>{\`@keyframes tv-spin { to { transform: rotate(360deg); } }\`}</style>
    </button>
  );
};

export default Button;
`,
  },

  card: {
    file: "Card.tsx",
    description: "Card with header/body/footer sub-components, hover & glow modes",
    deps: ["react"],
    source: `"use client";
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  padding = "md", hover = false, glow = false, children, style, ...rest
}) => {
  const padMap = { sm: "16px", md: "24px", lg: "32px" };
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: 16,
        padding: padMap[padding],
        boxShadow: glow ? "0 0 24px rgba(99,102,241,0.5)" : "0 1px 2px rgba(0,0,0,0.06)",
        transition: "all 0.2s ease",
        fontFamily: "Inter, system-ui, sans-serif",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(99,102,241,0.25)";
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = glow ? "0 0 24px rgba(99,102,241,0.5)" : "0 1px 2px rgba(0,0,0,0.06)";
        }
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...rest }) => (
  <div style={{ marginBottom: 8, fontWeight: 700, fontSize: 16, ...style }} {...rest}>{children}</div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...rest }) => (
  <div style={{ fontSize: 14, lineHeight: 1.5, ...style }} {...rest}>{children}</div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...rest }) => (
  <div style={{ marginTop: 16, display: "flex", gap: 8, ...style }} {...rest}>{children}</div>
);

export default Card;
`,
  },

  alert: {
    file: "Alert.tsx",
    description: "Contextual alert banner with info/success/warning/danger variants",
    deps: ["react"],
    source: `"use client";
import React from "react";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
}

const COLORS = {
  info:    { bg: "#eff6ff", fg: "#1e40af", border: "#3b82f6" },
  success: { bg: "#ecfdf5", fg: "#065f46", border: "#10b981" },
  warning: { bg: "#fffbeb", fg: "#92400e", border: "#f59e0b" },
  danger:  { bg: "#fef2f2", fg: "#991b1b", border: "#ef4444" },
};

export const Alert: React.FC<AlertProps> = ({
  variant = "info", title, children, style, ...rest
}) => {
  const c = COLORS[variant];
  return (
    <div
      role="alert"
      style={{
        background: c.bg, color: c.fg, border: \`1px solid \${c.border}\`,
        borderRadius: 8, padding: "16px 24px", fontSize: 13,
        fontFamily: "Inter, system-ui, sans-serif", ...style,
      }}
      {...rest}
    >
      {title && <div style={{ fontWeight: 700, marginBottom: 4 }}>{title}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Alert;
`,
  },

  badge: {
    file: "Badge.tsx",
    description: "Compact pill badge with dot indicator and 7 color variants",
    deps: ["react"],
    source: `"use client";
import React from "react";

export type BadgeVariant = "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
}

const COLORS: Record<BadgeVariant, string> = {
  primary:   "#6366f1",
  secondary: "#8b5cf6",
  accent:    "#ec4899",
  success:   "#10b981",
  warning:   "#f59e0b",
  danger:    "#ef4444",
  neutral:   "#64748b",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary", dot = false, children, style, ...rest
}) => {
  const c = COLORS[variant];
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: c + "22", color: c, padding: "2px 10px",
        borderRadius: 9999, fontSize: 11, fontWeight: 600,
        fontFamily: "Inter, system-ui, sans-serif", ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: c }} />}
      {children}
    </span>
  );
};

export default Badge;
`,
  },

  input: {
    file: "Input.tsx",
    description: "Labelled Input + Textarea with error and hint states",
    deps: ["react"],
    source: `"use client";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, hint, style, ...rest }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    {label && (
      <label style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }}>{label}</label>
    )}
    <input
      style={{
        width: "100%", padding: "10px 14px", fontSize: 14,
        color: "#0f172a", background: "#fff",
        border: \`1px solid \${error ? "#ef4444" : "#e2e8f0"}\`,
        borderRadius: 8, outline: "none",
        transition: "border-color 0.15s, box-shadow 0.15s", ...style,
      }}
      onFocus={(e) => {
        if (!error) {
          e.currentTarget.style.borderColor = "#6366f1";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.13)";
        }
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = error ? "#ef4444" : "#e2e8f0";
        e.currentTarget.style.boxShadow = "none";
      }}
      {...rest}
    />
    {error && <span style={{ fontSize: 11, color: "#ef4444" }}>{error}</span>}
    {hint && !error && <span style={{ fontSize: 11, color: "#64748b" }}>{hint}</span>}
  </div>
);

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, style, ...rest }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    {label && <label style={{ fontSize: 12, fontWeight: 600 }}>{label}</label>}
    <textarea
      style={{
        width: "100%", padding: "10px 14px", fontSize: 14,
        border: \`1px solid \${error ? "#ef4444" : "#e2e8f0"}\`,
        borderRadius: 8, outline: "none", resize: "vertical",
        minHeight: 80, ...style,
      }}
      {...rest}
    />
    {error && <span style={{ fontSize: 11, color: "#ef4444" }}>{error}</span>}
  </div>
);

export default Input;
`,
  },
};

// ─── Helpers ──────────────────────────────────────────

function findComponentsDir() {
  const candidates = [
    "src/components/toolverse",
    "src/components",
    "components",
    "src/lib",
    "lib",
  ];
  for (const c of candidates) {
    if (fs.existsSync(path.join(process.cwd(), c.split("/")[0]))) {
      return path.join(process.cwd(), c);
    }
  }
  return path.join(process.cwd(), "src", "components", "toolverse");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeComponent(name, targetDir) {
  const comp = COMPONENTS[name];
  if (!comp) {
    console.error(`✗ Unknown component: ${name}`);
    console.log(`  Available: ${Object.keys(COMPONENTS).join(", ")}`);
    process.exit(1);
  }
  const targetPath = path.join(targetDir, comp.file);
  ensureDir(targetDir);
  if (fs.existsSync(targetPath)) {
    console.log(`↻ Overwriting ${comp.file}`);
  } else {
    console.log(`✓ Adding ${comp.file}`);
  }
  fs.writeFileSync(targetPath, comp.source, "utf8");
  console.log(`  → ${targetPath}`);
  console.log(`  ℹ ${comp.description}`);
  if (comp.deps.length) {
    console.log(`  ℹ Dependencies: ${comp.deps.join(", ")} (run \`npm install ${comp.deps.join(" ")}\` if missing)`);
  }
}

function listComponents() {
  console.log("\n📦 Available Toolverse components:\n");
  for (const [name, comp] of Object.entries(COMPONENTS)) {
    console.log(`  ${name.padEnd(12)} ${comp.description}`);
  }
  console.log("\nUsage:");
  console.log("  npx toolverse add <name>     Add a single component");
  console.log("  npx toolverse add all        Add all components");
  console.log("  npx toolverse list           Show this list\n");
}

// ─── Main CLI ─────────────────────────────────────────

const [, , command, ...args] = process.argv;

function showHelp() {
  console.log(`
Toolverse CLI — premium UI components for React/Vue/Svelte

Usage:
  npx toolverse add <component>   Add a component to your project
  npx toolverse add all           Add all available components
  npx toolverse list              List all available components
  npx toolverse help              Show this help message

Examples:
  npx toolverse add button
  npx toolverse add card
  npx toolverse add all

The component file is added to ./src/components/toolverse/ (or nearest
existing components folder). You OWN the file — customize freely.

Docs: https://toolverse-ai.space-z.ai
`);
}

async function main() {
  if (!command || command === "help" || command === "--help" || command === "-h") {
    showHelp();
    return;
  }

  if (command === "list" || command === "ls") {
    listComponents();
    return;
  }

  if (command === "add") {
    const target = args[0];
    if (!target) {
      console.error("✗ Component name required. Run `npx toolverse list` to see options.");
      process.exit(1);
    }
    const targetDir = findComponentsDir();
    console.log(`\n📦 Toolverse — adding components to: ${targetDir}\n`);

    if (target === "all") {
      for (const name of Object.keys(COMPONENTS)) {
        writeComponent(name, targetDir);
      }
      console.log(`\n✓ Added ${Object.keys(COMPONENTS).length} components.\n`);
    } else {
      writeComponent(target, targetDir);
      console.log(`\n✓ Done. Import in your code:\n`);
      console.log(`  import { ${target.charAt(0).toUpperCase() + target.slice(1)} } from "./components/toolverse/${target.charAt(0).toUpperCase() + target.slice(1)}";\n`);
    }
    return;
  }

  console.error(`✗ Unknown command: ${command}`);
  showHelp();
  process.exit(1);
}

main();
