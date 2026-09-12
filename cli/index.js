#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════
// Toolverse CLI v2 — zero dependencies, instant, honest.
//
//   npx toolverse add button        → own the code (18 components)
//   npx toolverse icons neon        → search 1,009 icons + import snippet
//   npx toolverse theme midnight    → drop-in theme preset file
//   npx toolverse stats             → what's inside
//   npx toolverse doctor            → environment check
//   npx toolverse list              → all components
//
// `add` copies the REAL source from the installed package
// (src/components/*.tsx) so the code you own always matches the
// version you installed. No duplication, no drift.
// ═══════════════════════════════════════════════════════════════

const fs = require("fs");
const path = require("path");

const PKG_ROOT = path.join(__dirname, "..");
let PKG = { version: "?" };
try { PKG = require(path.join(PKG_ROOT, "package.json")); } catch (_) {}

// ─── ANSI (TTY-safe) ──────────────────────────────────────────
const isTTY = process.stdout.isTTY;
const c = (code, s) => (isTTY ? `\x1b[${code}m${s}\x1b[0m` : s);
const bold = (s) => c("1", s);
const dim = (s) => c("2", s);
const red = (s) => c("31", s);
const green = (s) => c("32", s);
const yellow = (s) => c("33", s);
const blue = (s) => c("34", s);
const magenta = (s) => c("35", s);
const cyan = (s) => c("36", s);

// ─── Component registry (18 real files, descriptions only) ───
// Sources are read live from <pkg>/src/components — always in
// sync with the installed version.
const COMPONENTS = {
  button:     { file: "Button.tsx",     exports: "Button, IndigoGradientButton, PillButton, GlowButton, OutlineButton, GhostButton" },
  card:       { file: "Card.tsx",       exports: "Card, CardHeader, CardBody, CardFooter" },
  alert:      { file: "Alert.tsx",      exports: "Alert" },
  badge:      { file: "Badge.tsx",      exports: "Badge" },
  input:      { file: "Input.tsx",      exports: "Input, Textarea" },
  avatar:     { file: "Avatar.tsx",     exports: "Avatar, AvatarGroup" },
  tooltip:    { file: "Tooltip.tsx",    exports: "Tooltip" },
  progress:   { file: "Progress.tsx",   exports: "Progress, CircularProgress" },
  divider:    { file: "Divider.tsx",    exports: "Divider" },
  loader:     { file: "Loader.tsx",     exports: "Spinner, Skeleton, DotsLoader" },
  tag:        { file: "Tag.tsx",        exports: "Tag" },
  code:       { file: "Code.tsx",       exports: "Code, InlineCode" },
  hero:       { file: "Hero.tsx",       exports: "Hero" },
  navbar:     { file: "Navbar.tsx",     exports: "Navbar" },
  navigation: { file: "Navigation.tsx", exports: "Tabs, Breadcrumb" },
  overlay:    { file: "Overlay.tsx",    exports: "Modal, Drawer" },
  states:     { file: "States.tsx",     exports: "State, EmptyState, ErrorState, SuccessState" },
  icons:      { file: "Icons.tsx",      exports: "80+ inline icon components (Heart, Star, Search, Home…)" },
};

const ALIASES = {
  spinner: "loader", skeleton: "loader", dots: "loader",
  textarea: "input", field: "input",
  chip: "tag", pill: "badge",
  separator: "divider", hr: "divider",
  modal: "overlay", drawer: "overlay",
  tabs: "navigation", breadcrumb: "navigation",
  banner: "alert",
  empty: "states", error: "states",
  gradientbutton: "button", glowbutton: "button",
};

// ─── Theme presets (real ToolverseTheme tokens) ───────────────
const THEMES = {
  indigo: {
    desc: "Toolverse default — indigo + violet + pink",
    theme: {
      colors: { primary: "#6366f1", secondary: "#8b5cf6", accent: "#ec4899", background: "#ffffff", surface: "#f8fafc", text: "#0f172a", textMuted: "#64748b", border: "#e2e8f0", success: "#10b981", warning: "#f59e0b", danger: "#ef4444" },
      radii: { sm: "4px", md: "8px", lg: "16px", full: "9999px" },
    },
  },
  midnight: {
    desc: "Dark mode — sky blue on deep navy",
    theme: {
      colors: { primary: "#38bdf8", secondary: "#818cf8", accent: "#f472b6", background: "#0b1120", surface: "#111a2e", text: "#e2e8f0", textMuted: "#94a3b8", border: "#1e293b", success: "#34d399", warning: "#fbbf24", danger: "#f87171" },
      radii: { sm: "6px", md: "10px", lg: "18px", full: "9999px" },
      shadows: { sm: "0 1px 2px rgba(0,0,0,0.4)", md: "0 4px 12px rgba(56,189,248,0.15)", lg: "0 12px 32px rgba(56,189,248,0.20)", glow: "0 0 24px rgba(56,189,248,0.40)" },
    },
  },
  rose: {
    desc: "Warm rosé — elegant, editorial",
    theme: {
      colors: { primary: "#e11d48", secondary: "#be123c", accent: "#fb7185", background: "#fffafa", surface: "#fff1f2", text: "#4c0519", textMuted: "#9f6a76", border: "#fecdd3", success: "#059669", warning: "#d97706", danger: "#dc2626" },
      radii: { sm: "3px", md: "6px", lg: "12px", full: "9999px" },
    },
  },
  ocean: {
    desc: "Cool ocean — cyan + teal calm",
    theme: {
      colors: { primary: "#0284c7", secondary: "#06b6d4", accent: "#14b8a6", background: "#f0f9ff", surface: "#e0f2fe", text: "#082f49", textMuted: "#5b7d95", border: "#bae6fd", success: "#10b981", warning: "#f59e0b", danger: "#ef4444" },
      radii: { sm: "8px", md: "14px", lg: "22px", full: "9999px" },
    },
  },
  forest: {
    desc: "Natural green — calm and grounded",
    theme: {
      colors: { primary: "#059669", secondary: "#16a34a", accent: "#84cc16", background: "#f7fdf9", surface: "#ecfdf5", text: "#022c22", textMuted: "#5c7c6f", border: "#a7f3d0", success: "#22c55e", warning: "#eab308", danger: "#dc2626" },
      radii: { sm: "6px", md: "12px", lg: "20px", full: "9999px" },
    },
  },
  cyber: {
    desc: "Neon cyberpunk — magenta + cyan on black",
    theme: {
      colors: { primary: "#d946ef", secondary: "#22d3ee", accent: "#a3e635", background: "#09090b", surface: "#18181b", text: "#fafafa", textMuted: "#a1a1aa", border: "#27272a", success: "#4ade80", warning: "#facc15", danger: "#f87171" },
      radii: { sm: "2px", md: "4px", lg: "8px", full: "9999px" },
      shadows: { sm: "0 0 4px rgba(217,70,239,0.3)", md: "0 0 16px rgba(34,211,238,0.25)", lg: "0 0 32px rgba(217,70,239,0.30)", glow: "0 0 40px rgba(217,70,239,0.60)" },
    },
  },
  mono: {
    desc: "Pure monochrome — brutalist, sharp",
    theme: {
      colors: { primary: "#18181b", secondary: "#3f3f46", accent: "#71717a", background: "#ffffff", surface: "#fafafa", text: "#09090b", textMuted: "#52525b", border: "#e4e4e7", success: "#18181b", warning: "#3f3f46", danger: "#09090b" },
      radii: { sm: "2px", md: "2px", lg: "4px", full: "9999px" },
      shadows: { sm: "2px 2px 0 #18181b", md: "4px 4px 0 #18181b", lg: "6px 6px 0 #18181b", glow: "0 0 0 #18181b" },
    },
  },
};

// ─── Helpers ──────────────────────────────────────────────────
function pascalCase(id) {
  return id.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()).replace(/\s+/g, "");
}

function findComponentsDir() {
  const candidates = ["src/components/toolverse", "src/components", "components", "src/lib", "lib"];
  for (const cand of candidates) {
    if (fs.existsSync(path.join(process.cwd(), cand.split("/")[0]))) {
      return path.join(process.cwd(), cand);
    }
  }
  return path.join(process.cwd(), "src", "components", "toolverse");
}

function srcComponentsDir() {
  const dir = path.join(PKG_ROOT, "src", "components");
  if (!fs.existsSync(dir)) {
    console.error(red("✗ Package source not found at " + dir));
    console.error("  This happens with old/broken installs. Fix:");
    console.error("  " + cyan("npm install toolverse@latest"));
    process.exit(1);
  }
  return dir;
}

// Parse iconLibrary.tsx once — { id, name, category, tags } per icon
let iconCache = null;
function loadIcons() {
  if (iconCache) return iconCache;
  const file = path.join(PKG_ROOT, "src", "generated", "iconLibrary.tsx");
  if (!fs.existsSync(file)) {
    console.error(red("✗ Icon data not found. Fix: " + cyan("npm install toolverse@latest")));
    process.exit(1);
  }
  const src = fs.readFileSync(file, "utf8");
  const re = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*tags:\s*\[([^\]]*)\]/g;
  const seen = new Set();
  const icons = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    if (seen.has(m[1])) continue; // dedupe: array entry + inlined component def share id
    seen.add(m[1]);
    icons.push({
      id: m[1],
      name: m[2],
      category: m[3],
      tags: m[4].split(",").map((t) => t.replace(/["\s]/g, "")).filter(Boolean),
    });
  }
  iconCache = icons;
  return icons;
}

// ─── Commands ─────────────────────────────────────────────────
function writeComponent(name, targetDir) {
  const comp = COMPONENTS[name];
  const srcPath = path.join(srcComponentsDir(), comp.file);
  const targetPath = path.join(targetDir, comp.file);
  fs.mkdirSync(targetDir, { recursive: true });
  console.log((fs.existsSync(targetPath) ? yellow("↻ Overwriting ") : green("✓ Adding ")) + bold(comp.file));
  fs.copyFileSync(srcPath, targetPath);
  console.log(dim("  → " + targetPath));
  console.log(dim("  ℹ Exports: " + comp.exports));
}

function cmdAdd(args) {
  const target = args[0];
  if (!target) {
    console.error(red("✗ Component name required. Run " + cyan("npx toolverse list")));
    process.exit(1);
  }
  const targetDir = findComponentsDir();
  console.log("\n" + magenta("📦 Toolverse") + bold(" — adding to: ") + dim(targetDir) + "\n");

  if (target === "all") {
    const names = Object.keys(COMPONENTS);
    for (const name of names) writeComponent(name, targetDir);
    console.log("\n" + green("✓ Added " + names.length + " components.") + dim(" You own these files — customize freely."));
    console.log(dim('  import { Button } from "./components/toolverse/Button";\n'));
    return;
  }

  const key = target.toLowerCase().replace(/[^a-z]/g, "");
  const name = COMPONENTS[key] ? key : ALIASES[key];
  if (!name) {
    console.error(red("✗ Unknown component: " + target));
    console.log(dim("  Run ") + cyan("npx toolverse list") + dim(" for all " + Object.keys(COMPONENTS).length + " options.\n"));
    process.exit(1);
  }
  writeComponent(name, targetDir);
  const base = name.charAt(0).toUpperCase() + name.slice(1);
  console.log("\n" + green("✓ Done.") + " Use it:\n");
  console.log(cyan('  import { ' + base + ' } from "toolverse";'));
  console.log(dim('  // or import the file you own:'));
  console.log(cyan('  import { ' + base + ' } from "./' + path.relative(process.cwd(), targetDir).replace(/\\/g, "/") + '/' + base + '";\n'));
}

function cmdList() {
  console.log("\n" + magenta("📦 Toolverse components") + dim(" — `npx toolverse add <name>` copies the real source to your project:\n"));
  const rows = Object.entries(COMPONENTS);
  const pad = Math.max(...rows.map(([k]) => k.length));
  for (const [name, comp] of rows) {
    console.log("  " + cyan(name.padEnd(pad)) + dim("  " + comp.exports));
  }
  console.log("\n" + dim("  Aliases: ") + Object.keys(ALIASES).join(", "));
  console.log("\n" + dim("  Also: ") + "npx toolverse " + ["add all", "icons <query>", "theme <preset>", "stats", "doctor"].map(cyan).join(dim(" · ")));
  console.log("");
}

function cmdIcons(args) {
  const icons = loadIcons();

  // Group by category when no query
  const query = args.filter((a) => !a.startsWith("--")).join(" ").toLowerCase().trim();
  if (!query) {
    const cats = {};
    for (const ic of icons) cats[ic.category] = (cats[ic.category] || 0) + 1;
    console.log("\n" + magenta("🎨 Toolverse Crystal Icons") + dim(" — 1,009 original icons × 7 variants\n"));
    console.log(dim("  Search:  ") + cyan("npx toolverse icons <query>") + dim("   e.g. arrow, wallet, login"));
    console.log("\n" + bold("  Categories:"));
    for (const [cat, n] of Object.entries(cats).sort((a, b) => b[1] - a[1])) {
      console.log("    " + cat.padEnd(20) + dim(String(n)));
    }
    console.log("");
    return;
  }

  const tokens = query.split(/\s+/);
  const scored = icons
    .map((ic) => {
      const hay = (ic.id + " " + ic.name + " " + ic.category + " " + ic.tags.join(" ")).toLowerCase();
      let score = 0;
      for (const t of tokens) {
        if (ic.id === t) score += 10;
        else if (ic.id.startsWith(t)) score += 6;
        else if (hay.includes(t)) score += 2;
      }
      return { ic, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  if (!scored.length) {
    console.log("\n" + yellow("∅ No icons matched: " + query) + dim(" — try arrow, user, chart, wallet, cloud…\n"));
    process.exit(1);
  }

  console.log("\n" + magenta("🎨 " + scored.length + " icons") + dim(" matching “" + query + "”\n"));
  for (const { ic } of scored) {
    const Export = pascalCase(ic.id);
    console.log("  " + bold(Export) + dim("  (" + ic.category + " — " + ic.name + ")"));
    console.log("    " + cyan('import { ' + Export + ' } from "toolverse";'));
    console.log("    " + cyan('<' + Export + ' size={24} variant="aurora" color="#6366f1" />'));
    console.log(dim('    variants: line · solid · duotone · aurora · neon · glass · crystal3d\n'));
  }
}

function cmdTheme(args) {
  const name = (args[0] || "").toLowerCase().replace(/[^a-z]/g, "");
  if (!name) {
    console.log("\n" + magenta("🎨 Toolverse theme presets") + dim(" — `npx toolverse theme <name>` writes a ready-to-paste file:\n"));
    for (const [key, t] of Object.entries(THEMES)) {
      console.log("  " + cyan(key.padEnd(10)) + dim(t.desc));
    }
    console.log("");
    return;
  }
  const preset = THEMES[name];
  if (!preset) {
    console.error(red("✗ Unknown preset: " + name) + dim(" — available: " + Object.keys(THEMES).join(", ")));
    process.exit(1);
  }
  const body = `// toolverse-theme — generated by \`npx toolverse theme ${name}\`
// ${preset.desc}

import type { ToolverseTheme } from "toolverse";

export const ${name}Theme: Partial<ToolverseTheme> = ${JSON.stringify(preset.theme, null, 2)};

// Usage — wrap your app once, every Toolverse component follows:
//
//   import { ToolverseProvider } from "toolverse";
//   import { ${name}Theme } from "./toolverse-theme";
//
//   export default function Root() {
//     return (
//       <ToolverseProvider theme={${name}Theme}>
//         <App />
//       </ToolverseProvider>
//     );
//   }
`;
  const srcHere = fs.existsSync(path.join(process.cwd(), "src"));
  const target = path.join(process.cwd(), srcHere ? "src" : "", "toolverse-theme.ts");
  fs.writeFileSync(target, body, "utf8");
  console.log("\n" + green("✓ Theme file written: " + bold(path.relative(process.cwd(), target))));
  console.log(dim("  Preset: ") + preset.desc + "\n");
}

function cmdStats() {
  const file = path.join(PKG_ROOT, "src", "generated", "iconLibrary.tsx");
  let iconExports = 0;
  try {
    iconExports = (fs.readFileSync(file, "utf8").match(/export const [A-Za-z0-9_]+: React\.FC<ToolverseIconProps>/g) || []).length;
  } catch (_) { iconExports = loadIcons().length; }
  const cats = new Set(loadIcons().map((i) => i.category));
  console.log("\n" + magenta("📦 toolverse@" + PKG.version) + "\n");
  console.log("  Components   " + bold("274") + dim("  (31 handcrafted + 243 library)"));
  console.log("  Icons        " + bold(iconExports) + dim("  × 7 variants — " + cats.size + " categories"));
  console.log("  Named exports " + bold("1,286+"));
  console.log("  Theme system " + bold("real") + dim("  — every color/radius/shadow overridable"));
  console.log("  Runtime deps " + bold("0") + dim("  — React is the only peer\n"));
}

function cmdDoctor() {
  const ok = (s) => console.log(green("  ✓ " + s));
  const bad = (s) => console.log(red("  ✗ " + s));
  const warn = (s) => console.log(yellow("  ⚠ " + s));
  console.log("\n" + magenta("🩺 Toolverse doctor") + "\n");
  ok("Node " + process.version.replace("v", ""));
  ok("toolverse CLI " + PKG.version);
  try {
    const reactPkg = require(path.join(process.cwd(), "node_modules", "react", "package.json"));
    ok("react@" + reactPkg.version + " installed");
  } catch (_) {
    warn("react not found in this project — components need it (npm install react)");
  }
  try {
    const tv = require(path.join(process.cwd(), "node_modules", "toolverse", "package.json"));
    ok("toolverse@" + tv.version + " installed locally");
  } catch (_) {
    warn("toolverse not installed locally — run: npm install toolverse");
  }
  const dir = findComponentsDir();
  console.log(dim("  → components target: " + dir));
  console.log("");
}

function showHelp() {
  console.log(`
${magenta("Toolverse CLI")} ${dim("v" + PKG.version)} — ${bold("274 components · 1,009 icons · real theme system")}

${bold("Usage:")} ${cyan("npx toolverse <command> [args]")}

  ${cyan("add <component>")}    ${dim("Copy a component's real source into your project (you own it)")}
  ${cyan("add all")}           ${dim("Copy all 18 component files")}
  ${cyan("icons <query>")}     ${dim("Search 1,009 icons — get exact import snippets")}
  ${cyan("theme <preset>")}    ${dim("Write a theme preset file (indigo · midnight · rose · ocean · forest · cyber · mono)")}
  ${cyan("list")}              ${dim("All components + what each exports")}
  ${cyan("stats")}             ${dim("What's inside the package")}
  ${cyan("doctor")}            ${dim("Check your environment")}

${bold("Examples:")}
  ${dim("$")} npx toolverse add button
  ${dim("$")} npx toolverse icons wallet
  ${dim("$")} npx toolverse theme midnight

${dim("Docs: https://toolverse-official.vercel.app · Repo: https://github.com/imranah10/toolverse")}
`);
}

// ─── Main ─────────────────────────────────────────────────────
async function main() {
  const [, , command, ...args] = process.argv;

  if (!command || command === "help" || command === "--help" || command === "-h") {
    showHelp();
    return;
  }
  switch (command) {
    case "add": return cmdAdd(args);
    case "list":
    case "ls": return cmdList();
    case "icons":
    case "icon": return cmdIcons(args);
    case "theme": return cmdTheme(args);
    case "stats": return cmdStats();
    case "doctor": return cmdDoctor();
    default:
      console.error(red("✗ Unknown command: " + command));
      showHelp();
      process.exit(1);
  }
}

main();
