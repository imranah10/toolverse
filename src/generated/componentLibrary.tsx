"use client";
import React from "react";

// ═══════════════════════════════════════════════════════
// AUTO-GENERATED — DO NOT EDIT
// Source: src/components/tools/ComponentBuilder.tsx
// All 242 components exported as named React components.
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════

type CodeFormat = "html" | "css" | "tailwind" | "react" | "vue" | "svelte" | "angular" | "scss";

type ComponentDef = {
  id: string;
  name: string;
  category: string;
  description: string;
  // Render function takes customizable props and returns JSX
  render: (props: ComponentProps) => React.ReactNode;
  // Generate code in different formats
  html: (p: ComponentProps) => string;
  css: (p: ComponentProps) => string;
  tailwind: (p: ComponentProps) => string;
  // Additional formats (auto-generated from base formats)
  react?: (p: ComponentProps) => string;
  vue?: (p: ComponentProps) => string;
  svelte?: (p: ComponentProps) => string;
  angular?: (p: ComponentProps) => string;
  scss?: (p: ComponentProps) => string;
  // Default customization values
  defaults: ComponentProps;
  // Available customization options
  controls: ControlDef[];
  // Documentation
  docs?: { usage: string; props: { name: string; type: string; default: string; description: string }[] };
};

type ComponentProps = {
  bgColor: string;
  textColor: string;
  borderColor: string;
  borderRadius: number;
  paddingX: number;
  paddingY: number;
  fontSize: number;
  shadowX: number;
  shadowY: number;
  shadowBlur: number;
  shadowColor: string;
  fontWeight: number;
  text: string;
  gradientFrom: string;
  gradientTo: string;
  useGradient: boolean;
};

type ControlDef = {
  key: keyof ComponentProps;
  label: string;
  type: "color" | "range" | "text" | "toggle";
  min?: number;
  max?: number;
  step?: number;
};

const DEFAULT_PROPS: ComponentProps = {
  bgColor: "#6366f1",
  textColor: "#ffffff",
  borderColor: "#6366f1",
  borderRadius: 8,
  paddingX: 24,
  paddingY: 12,
  fontSize: 14,
  shadowX: 0,
  shadowY: 4,
  shadowBlur: 12,
  shadowColor: "#6366f1",
  fontWeight: 600,
  text: "Click Me",
  gradientFrom: "#6366f1",
  gradientTo: "#8b5cf6",
  useGradient: false,
};

// ═══════════════════════════════════════════════════════
// HELPER: build box-shadow string
// ═══════════════════════════════════════════════════════
const shadow = (p: ComponentProps) => `${p.shadowX}px ${p.shadowY}px ${p.shadowBlur}px ${p.shadowColor}40`;
const bg = (p: ComponentProps) => p.useGradient ? `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` : p.bgColor;
const pad = (p: ComponentProps) => `${p.paddingY}px ${p.paddingX}px`;

// ═══════════════════════════════════════════════════════
// COMPONENT DEFINITIONS — 50+ unique components
// ═══════════════════════════════════════════════════════

const COMMON_CONTROLS: ControlDef[] = [
  { key: "text", label: "Text", type: "text" },
  { key: "bgColor", label: "Background", type: "color" },
  { key: "textColor", label: "Text Color", type: "color" },
  { key: "useGradient", label: "Gradient?", type: "toggle" },
  { key: "gradientFrom", label: "Gradient Start", type: "color" },
  { key: "gradientTo", label: "Gradient End", type: "color" },
  { key: "borderColor", label: "Border Color", type: "color" },
  { key: "fontSize", label: "Font Size", type: "range", min: 10, max: 32, step: 1 },
  { key: "fontWeight", label: "Font Weight", type: "range", min: 300, max: 900, step: 100 },
  { key: "borderRadius", label: "Radius", type: "range", min: 0, max: 50, step: 1 },
  { key: "paddingX", label: "Padding H", type: "range", min: 8, max: 60, step: 1 },
  { key: "paddingY", label: "Padding V", type: "range", min: 4, max: 40, step: 1 },
  { key: "shadowX", label: "Shadow X", type: "range", min: -20, max: 20, step: 1 },
  { key: "shadowY", label: "Shadow Y", type: "range", min: -20, max: 30, step: 1 },
  { key: "shadowBlur", label: "Shadow Blur", type: "range", min: 0, max: 60, step: 1 },
  { key: "shadowColor", label: "Shadow Color", type: "color" },
];

const COMPONENTS: ComponentDef[] = [
  // ── BUTTONS (6) ──
  {
    id: "btn-solid",
    name: "Solid Button",
    category: "Buttons",
    description: "Classic solid button with shadow",
    defaults: { ...DEFAULT_PROPS },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <button style={{
        background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: shadow(p), cursor: "pointer", transition: "all 0.2s",
      }}>
        {p.text}
      </button>
    ),
    html: (p) => `<button class="tv-btn">${p.text}</button>`,
    css: (p) => `.tv-btn {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 2px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: ${shadow(p)};
  cursor: pointer;
  transition: all 0.2s;
}
.tv-btn:hover { transform: translateY(-2px); box-shadow: ${p.shadowX}px ${p.shadowY + 4}px ${p.shadowBlur + 4}px ${p.shadowColor}60; }
.tv-btn:active { transform: translateY(0); }`,
    tailwind: (p) => `<button class="bg-${p.useGradient ? 'gradient-to-r from-['+p.gradientFrom+'] to-['+p.gradientTo+']' : '['+p.bgColor+']'} text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] font-[${p.fontWeight}] shadow-[${p.shadowX}px_${p.shadowY}px_${p.shadowBlur}px_${p.shadowColor}40] transition-all hover:-translate-y-0.5">${p.text}</button>`,
  },
  {
    id: "btn-outline",
    name: "Outline Button",
    category: "Buttons",
    description: "Transparent with colored border",
    defaults: { ...DEFAULT_PROPS, bgColor: "transparent", textColor: "#6366f1" },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <button style={{
        background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, cursor: "pointer", transition: "all 0.2s",
      }}>
        {p.text}
      </button>
    ),
    html: (p) => `<button class="tv-btn-outline">${p.text}</button>`,
    css: (p) => `.tv-btn-outline {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 2px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  cursor: pointer;
  transition: all 0.3s;
}
.tv-btn-outline:hover { background: ${p.borderColor}; color: #fff; }`,
    tailwind: (p) => `<button class="bg-transparent text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] font-[${p.fontWeight}] transition-all hover:bg-[${p.borderColor}] hover:text-white">${p.text}</button>`,
  },
  {
    id: "btn-pill",
    name: "Pill Button",
    category: "Buttons",
    description: "Rounded pill-shaped button",
    defaults: { ...DEFAULT_PROPS, borderRadius: 50 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <button style={{
        background: bg(p), color: p.textColor, border: "none",
        borderRadius: 999, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: shadow(p), cursor: "pointer", transition: "all 0.2s",
      }}>
        {p.text}
      </button>
    ),
    html: (p) => `<button class="tv-btn-pill">${p.text}</button>`,
    css: (p) => `.tv-btn-pill {
  background: ${bg(p)};
  color: ${p.textColor};
  border: none;
  border-radius: 999px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: ${shadow(p)};
  cursor: pointer;
  transition: all 0.3s;
}
.tv-btn-pill:hover { transform: scale(1.05); }`,
    tailwind: (p) => `<button class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-full px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] font-[${p.fontWeight}] shadow-lg transition-transform hover:scale-105">${p.text}</button>`,
  },
  {
    id: "btn-glow",
    name: "Glow Button",
    category: "Buttons",
    description: "Button with animated glow",
    defaults: { ...DEFAULT_PROPS, bgColor: "#8b5cf6", shadowColor: "#8b5cf6", shadowBlur: 20 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <button style={{
        background: bg(p), color: p.textColor, border: "none",
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: `0 0 20px ${p.shadowColor}80`, cursor: "pointer",
      }}>
        {p.text}
      </button>
    ),
    html: (p) => `<button class="tv-btn-glow">${p.text}</button>`,
    css: (p) => `.tv-btn-glow {
  background: ${bg(p)};
  color: ${p.textColor};
  border: none;
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: 0 0 20px ${p.shadowColor}80;
  cursor: pointer;
  animation: tv-glow-pulse 2s ease-in-out infinite;
}
@keyframes tv-glow-pulse {
  0%, 100% { box-shadow: 0 0 20px ${p.shadowColor}80; }
  50% { box-shadow: 0 0 40px ${p.shadowColor}ff, 0 0 60px ${p.shadowColor}80; }
}`,
    tailwind: (p) => `<button class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] shadow-[0_0_20px_${p.shadowColor}80] animate-pulse">${p.text}</button>`,
  },
  {
    id: "btn-icon",
    name: "Icon Button",
    category: "Buttons",
    description: "Button with emoji icon",
    defaults: { ...DEFAULT_PROPS, text: "🚀 Get Started" },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <button style={{
        background: bg(p), color: p.textColor, border: "none",
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: shadow(p), cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 8, transition: "gap 0.2s",
      }}>
        {p.text}
      </button>
    ),
    html: (p) => `<button class="tv-btn-icon">${p.text}</button>`,
    css: (p) => `.tv-btn-icon {
  display: inline-flex; align-items: center; gap: 8px;
  background: ${bg(p)};
  color: ${p.textColor};
  border: none;
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: ${shadow(p)};
  cursor: pointer;
  transition: gap 0.2s;
}
.tv-btn-icon:hover { gap: 16px; }`,
    tailwind: (p) => `<button class="inline-flex items-center gap-2 bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] font-[${p.fontWeight}] shadow-md transition-all hover:gap-4">${p.text}</button>`,
  },
  {
    id: "btn-3d",
    name: "3D Button",
    category: "Buttons",
    description: "3D depth button with shadow",
    defaults: { ...DEFAULT_PROPS, bgColor: "#f59e0b", shadowY: 6, shadowBlur: 0, shadowColor: "#d97706" },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <button style={{
        background: bg(p), color: p.textColor, border: "none",
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: `0 ${p.shadowY}px 0 ${p.shadowColor}, 0 ${p.shadowY + 4}px 8px rgba(0,0,0,0.2)`,
        cursor: "pointer", transition: "all 0.1s",
      }}>
        {p.text}
      </button>
    ),
    html: (p) => `<button class="tv-btn-3d">${p.text}</button>`,
    css: (p) => `.tv-btn-3d {
  background: ${bg(p)};
  color: ${p.textColor};
  border: none;
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: 0 ${p.shadowY}px 0 ${p.shadowColor}, 0 ${p.shadowY + 4}px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: all 0.1s;
}
.tv-btn-3d:hover { transform: translateY(-2px); box-shadow: 0 ${p.shadowY + 2}px 0 ${p.shadowColor}, 0 ${p.shadowY + 6}px 12px rgba(0,0,0,0.3); }
.tv-btn-3d:active { transform: translateY(${p.shadowY}px); box-shadow: 0 0 0 ${p.shadowColor}; }`,
    tailwind: (p) => `<button class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] font-[${p.fontWeight}] shadow-[0_${p.shadowY}px_0_${p.shadowColor}] transition-all hover:-translate-y-0.5 active:translate-y-1">${p.text}</button>`,
  },

  // ── CARDS (5) ──
  {
    id: "card-basic",
    name: "Basic Card",
    category: "Cards",
    description: "Simple content card",
    defaults: { ...DEFAULT_PROPS, bgColor: "#1e1e2e", textColor: "#cdd6f4", text: "Card Title\nCard description text goes here.\n\nThis card is fully customizable." },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}40`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 250, whiteSpace: "pre-wrap",
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-card">${p.text.replace(/\n/g, "<br>")}</div>`,
    css: (p) => `.tv-card {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor}40;
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: ${shadow(p)};
  max-width: 300px;
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}40] rounded-[${p.borderRadius}px] p-[${p.paddingX}px] shadow-md max-w-xs">${p.text}</div>`,
  },
  {
    id: "card-glass",
    name: "Glass Card",
    category: "Cards",
    description: "Frosted glassmorphism card",
    defaults: { ...DEFAULT_PROPS, bgColor: "rgba(255,255,255,0.1)", textColor: "#fff", text: "Glass Card\n\nFrosted glass effect with backdrop blur.", borderRadius: 16 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `1px solid rgba(255,255,255,0.2)`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 250, whiteSpace: "pre-wrap",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-glass">${p.text.replace(/\n/g, "<br>")}</div>`,
    css: (p) => `.tv-glass {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: ${shadow(p)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  max-width: 300px;
}`,
    tailwind: (p) => `<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-[${p.borderRadius}px] p-[${p.paddingX}px] text-white shadow-lg max-w-xs">${p.text}</div>`,
  },
  {
    id: "card-gradient",
    name: "Gradient Card",
    category: "Cards",
    description: "Card with gradient background",
    defaults: { ...DEFAULT_PROPS, useGradient: true, gradientFrom: "#667eea", gradientTo: "#764ba2", textColor: "#fff", text: "Gradient Card\n\nBeautiful gradient background.", borderRadius: 16 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: "none",
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 250, whiteSpace: "pre-wrap",
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-grad-card">${p.text.replace(/\n/g, "<br>")}</div>`,
    css: (p) => `.tv-grad-card {
  background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo});
  color: ${p.textColor};
  border: none;
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: ${shadow(p)};
  max-width: 300px;
}`,
    tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-[${p.textColor}] rounded-[${p.borderRadius}px] p-[${p.paddingX}px] shadow-lg max-w-xs">${p.text}</div>`,
  },
  {
    id: "card-neon",
    name: "Neon Card",
    category: "Cards",
    description: "Card with neon glow border",
    defaults: { ...DEFAULT_PROPS, bgColor: "#0a0a0a", textColor: "#22d3ee", borderColor: "#22d3ee", text: "Neon Card\n\nCyberpunk neon glow.", borderRadius: 12 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: `0 0 15px ${p.borderColor}80, inset 0 0 10px ${p.borderColor}20`,
        maxWidth: 250, whiteSpace: "pre-wrap",
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-neon-card">${p.text.replace(/\n/g, "<br>")}</div>`,
    css: (p) => `.tv-neon-card {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 2px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: 0 0 15px ${p.borderColor}80, inset 0 0 10px ${p.borderColor}20;
  max-width: 300px;
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-[${p.paddingX}px] shadow-[0_0_15px_${p.borderColor}80] max-w-xs">${p.text}</div>`,
  },
  {
    id: "card-pricing",
    name: "Pricing Card",
    category: "Cards",
    description: "Pricing tier card",
    defaults: { ...DEFAULT_PROPS, bgColor: "#ffffff", textColor: "#1e293b", borderColor: "#e2e8f0", text: "PRO\n$29/mo\n\n✓ 10 Projects\n✓ Priority Support\n✓ Custom Domain", borderRadius: 16, fontSize: 13 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 220, whiteSpace: "pre-wrap",
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-pricing">${p.text.replace(/\n/g, "<br>")}</div>`,
    css: (p) => `.tv-pricing {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  box-shadow: ${shadow(p)};
  max-width: 250px;
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-[${p.paddingX}px] shadow-md max-w-xs">${p.text}</div>`,
  },

  // ── ALERTS (4) ──
  {
    id: "alert-info",
    name: "Info Alert",
    category: "Alerts",
    description: "Information alert banner",
    defaults: { ...DEFAULT_PROPS, bgColor: "#eff6ff", textColor: "#1e40af", borderColor: "#3b82f6", text: "ℹ️ Information! This is an info alert message.", borderRadius: 8, fontSize: 13, fontWeight: 500 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, maxWidth: 350,
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-alert">${p.text}</div>`,
    css: (p) => `.tv-alert {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px]">${p.text}</div>`,
  },
  {
    id: "alert-success",
    name: "Success Alert",
    category: "Alerts",
    description: "Success message banner",
    defaults: { ...DEFAULT_PROPS, bgColor: "#ecfdf5", textColor: "#065f46", borderColor: "#10b981", text: "✅ Success! Your changes have been saved.", borderRadius: 8, fontSize: 13, fontWeight: 500 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, maxWidth: 350,
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-alert-success">${p.text}</div>`,
    css: (p) => `.tv-alert-success {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px]">${p.text}</div>`,
  },
  {
    id: "alert-warning",
    name: "Warning Alert",
    category: "Alerts",
    description: "Warning message banner",
    defaults: { ...DEFAULT_PROPS, bgColor: "#fffbeb", textColor: "#92400e", borderColor: "#f59e0b", text: "⚠️ Warning! Please review your input.", borderRadius: 8, fontSize: 13, fontWeight: 500 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, maxWidth: 350,
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-alert-warn">${p.text}</div>`,
    css: (p) => `.tv-alert-warn {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px]">${p.text}</div>`,
  },
  {
    id: "alert-error",
    name: "Error Alert",
    category: "Alerts",
    description: "Error message banner",
    defaults: { ...DEFAULT_PROPS, bgColor: "#fef2f2", textColor: "#991b1b", borderColor: "#ef4444", text: "❌ Error! Something went wrong.", borderRadius: 8, fontSize: 13, fontWeight: 500 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, maxWidth: 350,
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-alert-error">${p.text}</div>`,
    css: (p) => `.tv-alert-error {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px]">${p.text}</div>`,
  },

  // ── BADGES (3) ──
  {
    id: "badge-solid",
    name: "Solid Badge",
    category: "Badges",
    description: "Solid color badge",
    defaults: { ...DEFAULT_PROPS, text: "NEW", bgColor: "#6366f1", textColor: "#fff", borderRadius: 6, fontSize: 11, fontWeight: 700, paddingX: 10, paddingY: 4 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <span style={{
        background: bg(p), color: p.textColor, border: "none",
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, display: "inline-block",
      }}>
        {p.text}
      </span>
    ),
    html: (p) => `<span class="tv-badge">${p.text}</span>`,
    css: (p) => `.tv-badge {
  background: ${bg(p)};
  color: ${p.textColor};
  border: none;
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  display: inline-block;
}`,
    tailwind: (p) => `<span class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] font-bold">${p.text}</span>`,
  },
  {
    id: "badge-outline",
    name: "Outline Badge",
    category: "Badges",
    description: "Outlined badge",
    defaults: { ...DEFAULT_PROPS, text: "BETA", bgColor: "transparent", textColor: "#10b981", borderColor: "#10b981", borderRadius: 6, fontSize: 11, fontWeight: 700, paddingX: 10, paddingY: 4 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <span style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, display: "inline-block",
      }}>
        {p.text}
      </span>
    ),
    html: (p) => `<span class="tv-badge-outline">${p.text}</span>`,
    css: (p) => `.tv-badge-outline {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  display: inline-block;
}`,
    tailwind: (p) => `<span class="bg-transparent text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] font-bold">${p.text}</span>`,
  },
  {
    id: "badge-dot",
    name: "Dot Badge",
    category: "Badges",
    description: "Badge with dot indicator",
    defaults: { ...DEFAULT_PROPS, text: "Online", bgColor: "#ecfdf5", textColor: "#065f46", borderColor: "#10b981", borderRadius: 20, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 4 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <span style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.borderColor, display: "inline-block" }}></span>
        {p.text}
      </span>
    ),
    html: (p) => `<span class="tv-badge-dot"><span class="tv-dot"></span>${p.text}</span>`,
    css: (p) => `.tv-badge-dot {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.tv-dot { width: 8px; height: 8px; border-radius: 50%; background: ${p.borderColor}; }`,
    tailwind: (p) => `<span class="inline-flex items-center gap-1.5 bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-full px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px]"><span class="w-2 h-2 rounded-full bg-[${p.borderColor}]"></span>${p.text}</span>`,
  },

  // ── INPUTS (3) ──
  {
    id: "input-text",
    name: "Text Input",
    category: "Inputs",
    description: "Standard text input field",
    defaults: { ...DEFAULT_PROPS, text: "Enter your name", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 8, fontSize: 14, fontWeight: 400, paddingX: 16, paddingY: 10 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <input type="text" placeholder={p.text} style={{
        background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, outline: "none", width: 200,
      }} />
    ),
    html: (p) => `<input type="text" class="tv-input" placeholder="${p.text}" />`,
    css: (p) => `.tv-input {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 2px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  outline: none;
  width: 100%;
  transition: border-color 0.2s;
}
.tv-input:focus { border-color: ${p.textColor}; }`,
    tailwind: (p) => `<input type="text" placeholder="${p.text}" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] text-[${p.fontSize}px] outline-none focus:border-[${p.textColor}] w-full" />`,
  },
  {
    id: "input-glow",
    name: "Glow Input",
    category: "Inputs",
    description: "Input with glow on focus",
    defaults: { ...DEFAULT_PROPS, text: "Search...", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 12, fontSize: 14, fontWeight: 400, paddingX: 16, paddingY: 10 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <input type="text" placeholder={p.text} style={{
        background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, outline: "none", width: 200,
        boxShadow: `0 0 10px ${p.borderColor}40`,
      }} />
    ),
    html: (p) => `<input type="text" class="tv-input-glow" placeholder="${p.text}" />`,
    css: (p) => `.tv-input-glow {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 2px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  outline: none;
  width: 100%;
  box-shadow: 0 0 10px ${p.borderColor}40;
  transition: box-shadow 0.3s;
}
.tv-input-glow:focus { box-shadow: 0 0 20px ${p.borderColor}80; }`,
    tailwind: (p) => `<input type="text" placeholder="${p.text}" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-[${p.paddingX}px] py-[${p.paddingY}px] shadow-[0_0_10px_${p.borderColor}40] focus:shadow-[0_0_20px_${p.borderColor}80] outline-none w-full" />`,
  },
  {
    id: "input-search",
    name: "Search Bar",
    category: "Inputs",
    description: "Search input with icon",
    defaults: { ...DEFAULT_PROPS, text: "Search...", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 24, fontSize: 14, fontWeight: 400, paddingX: 20, paddingY: 10 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ position: "relative", display: "inline-block" }}>
        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: p.borderColor, fontSize: 14 }}>🔍</span>
        <input type="text" placeholder={p.text} style={{
          background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`,
          borderRadius: p.borderRadius, padding: `${p.paddingY}px ${p.paddingX}px ${p.paddingY}px 36px`,
          fontSize: p.fontSize, fontWeight: p.fontWeight, outline: "none", width: 200,
        }} />
      </div>
    ),
    html: (p) => `<div class="tv-search"><span>🔍</span><input type="text" placeholder="${p.text}" /></div>`,
    css: (p) => `.tv-search { position: relative; display: inline-block; }
.tv-search span { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: ${p.borderColor}; }
.tv-search input {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 2px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${p.paddingY}px ${p.paddingX}px ${p.paddingY}px 36px;
  font-size: ${p.fontSize}px;
  outline: none;
  width: 100%;
}`,
    tailwind: (p) => `<div class="relative"><span class="absolute left-3 top-1/2 -translate-y-1/2">🔍</span><input type="text" placeholder="${p.text}" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-full pl-9 pr-4 py-2 outline-none w-full" /></div>`,
  },

  // ── AVATARS (2) ──
  {
    id: "avatar-circle",
    name: "Circle Avatar",
    category: "Avatars",
    description: "Circular avatar with initials",
    defaults: { ...DEFAULT_PROPS, text: "JS", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 50, fontSize: 18, fontWeight: 700, paddingX: 0, paddingY: 0 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `3px solid ${p.borderColor}`,
        borderRadius: "50%", width: 60, height: 60, fontSize: p.fontSize,
        fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-avatar">${p.text}</div>`,
    css: (p) => `.tv-avatar {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 3px solid ${p.borderColor};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-[3px] border-[${p.borderColor}] rounded-full w-14 h-14 flex items-center justify-center font-bold">${p.text}</div>`,
  },
  {
    id: "avatar-square",
    name: "Square Avatar",
    category: "Avatars",
    description: "Rounded square avatar",
    defaults: { ...DEFAULT_PROPS, text: "AB", bgColor: "#f59e0b", textColor: "#fff", borderColor: "#f59e0b", borderRadius: 12, fontSize: 18, fontWeight: 700, paddingX: 0, paddingY: 0 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{
        background: bg(p), color: p.textColor, border: `3px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, width: 60, height: 60, fontSize: p.fontSize,
        fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {p.text}
      </div>
    ),
    html: (p) => `<div class="tv-avatar-sq">${p.text}</div>`,
    css: (p) => `.tv-avatar-sq {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 3px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  width: 60px;
  height: 60px;
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-[3px] border-[${p.borderColor}] rounded-[${p.borderRadius}px] w-14 h-14 flex items-center justify-center font-bold">${p.text}</div>`,
  },

  // ── TOOLTIPS (2) ──
  {
    id: "tooltip-top",
    name: "Tooltip Top",
    category: "Tooltips",
    description: "Tooltip appearing on top",
    defaults: { ...DEFAULT_PROPS, text: "Tooltip text!", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#1e1e2e", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ position: "relative", display: "inline-block", paddingTop: 40 }}>
        <button style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover Me</button>
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
          borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
          fontWeight: p.fontWeight, whiteSpace: "nowrap",
        }}>
          {p.text}
          <div style={{ position: "absolute", bottom: -5, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `5px solid ${bg(p)}` }} />
        </div>
      </div>
    ),
    html: (p) => `<div class="tv-tooltip"><button>Hover Me</button><span class="tv-tooltip-text">${p.text}</span></div>`,
    css: (p) => `.tv-tooltip { position: relative; display: inline-block; }
.tv-tooltip-text {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  background: ${bg(p)};
  color: ${p.textColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
}
.tv-tooltip:hover .tv-tooltip-text { opacity: 1; }`,
    tailwind: (p) => `<div class="relative group"><button class="bg-indigo-500 text-white rounded-lg px-4 py-2">Hover Me</button><span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span></div>`,
  },
  {
    id: "tooltip-bottom",
    name: "Tooltip Bottom",
    category: "Tooltips",
    description: "Tooltip appearing below",
    defaults: { ...DEFAULT_PROPS, text: "Click to save", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#1e1e2e", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ position: "relative", display: "inline-block", paddingBottom: 40 }}>
        <button style={{ background: "#10b981", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover Me</button>
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
          borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
          fontWeight: p.fontWeight, whiteSpace: "nowrap",
        }}>
          {p.text}
        </div>
      </div>
    ),
    html: (p) => `<div class="tv-tooltip-b"><button>Hover Me</button><span class="tv-tooltip-b-text">${p.text}</span></div>`,
    css: (p) => `.tv-tooltip-b { position: relative; display: inline-block; }
.tv-tooltip-b-text {
  position: absolute;
  top: 130%;
  left: 50%;
  transform: translateX(-50%);
  background: ${bg(p)};
  color: ${p.textColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
}
.tv-tooltip-b:hover .tv-tooltip-b-text { opacity: 1; }`,
    tailwind: (p) => `<div class="relative group"><button class="bg-emerald-500 text-white rounded-lg px-4 py-2">Hover Me</button><span class="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span></div>`,
  },

  // ── PROGRESS (2) ──
  {
    id: "progress-bar",
    name: "Progress Bar",
    category: "Progress",
    description: "Animated progress bar",
    defaults: { ...DEFAULT_PROPS, text: "60%", bgColor: "#e2e8f0", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 20, fontSize: 12, fontWeight: 600, gradientFrom: "#6366f1", gradientTo: "#ec4899", useGradient: true },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ width: 200, height: 24, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden", border: `1px solid ${p.borderColor}40` }}>
        <div style={{ width: "60%", height: "100%", background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: p.fontSize, fontWeight: p.fontWeight }}>
          {p.text}
        </div>
      </div>
    ),
    html: (p) => `<div class="tv-progress"><div class="tv-progress-fill">${p.text}</div></div>`,
    css: (p) => `.tv-progress {
  width: 200px;
  height: 24px;
  background: ${bg(p)};
  border-radius: ${p.borderRadius}px;
  overflow: hidden;
  border: 1px solid ${p.borderColor}40;
}
.tv-progress-fill {
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo});
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  transition: width 0.5s;
}`,
    tailwind: (p) => `<div class="w-48 h-6 bg-[${p.bgColor}] rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] flex items-center justify-center text-white text-xs font-semibold">${p.text}</div></div>`,
  },
  {
    id: "progress-circle",
    name: "Circular Progress",
    category: "Progress",
    description: "Circular progress indicator",
    defaults: { ...DEFAULT_PROPS, text: "75%", textColor: "#6366f1", borderColor: "#6366f1", gradientFrom: "#6366f1", gradientTo: "#8b5cf6", useGradient: true },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ width: 80, height: 80, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="80" height="80" style={{ position: "absolute", transform: "rotate(-90deg)" }}>
          <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="6" />
          <circle cx="40" cy="40" r="34" fill="none" stroke={p.borderColor} strokeWidth="6" strokeDasharray="213.6" strokeDashoffset="53.4" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 14, fontWeight: 700, color: p.textColor }}>{p.text}</span>
      </div>
    ),
    html: (p) => `<div class="tv-circ"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="${p.borderColor}" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="53.4" stroke-linecap="round"/></svg><span>${p.text}</span></div>`,
    css: (p) => `.tv-circ { width: 80px; height: 80px; position: relative; display: flex; align-items: center; justify-content: center; }
.tv-circ svg { position: absolute; transform: rotate(-90deg); }
.tv-circ span { font-size: 14px; font-weight: 700; color: ${p.textColor}; }`,
    tailwind: (p) => `<div class="relative w-20 h-20 flex items-center justify-center"><svg class="absolute -rotate-90" viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="${p.borderColor}" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="53.4" stroke-linecap="round"/></svg><span class="text-sm font-bold text-[${p.textColor}]">${p.text}</span></div>`,
  },

  // ── DIVIDERS (2) ──
  {
    id: "divider-line",
    name: "Line Divider",
    category: "Dividers",
    description: "Simple gradient divider line",
    defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0, fontSize: 14, fontWeight: 400, gradientFrom: "#6366f1", gradientTo: "#ec4899", useGradient: true },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ width: 200, height: 2, background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius }} />
    ),
    html: () => `<div class="tv-divider"></div>`,
    css: (p) => `.tv-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo});
  border-radius: ${p.borderRadius}px;
}`,
    tailwind: (p) => `<div class="w-full h-0.5 bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}]"></div>`,
  },
  {
    id: "divider-text",
    name: "Text Divider",
    category: "Dividers",
    description: "Divider with text in center",
    defaults: { ...DEFAULT_PROPS, text: "OR", bgColor: "transparent", textColor: "#64748b", borderColor: "#e2e8f0", fontSize: 12, fontWeight: 500 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ display: "flex", alignItems: "center", gap: 12, width: 200 }}>
        <div style={{ flex: 1, height: 1, background: p.borderColor }} />
        <span style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</span>
        <div style={{ flex: 1, height: 1, background: p.borderColor }} />
      </div>
    ),
    html: (p) => `<div class="tv-divider-text"><span></span>${p.text}<span></span></div>`,
    css: (p) => `.tv-divider-text {
  display: flex;
  align-items: center;
  gap: 12px;
}
.tv-divider-text span {
  flex: 1;
  height: 1px;
  background: ${p.borderColor};
}`,
    tailwind: (p) => `<div class="flex items-center gap-3"><span class="flex-1 h-px bg-[${p.borderColor}]"></span><span class="text-[${p.fontSize}px] text-[${p.textColor}]">${p.text}</span><span class="flex-1 h-px bg-[${p.borderColor}]"></span></div>`,
  },

  // ── SKELETON (1) ──
  {
    id: "skeleton",
    name: "Skeleton Loader",
    category: "Loaders",
    description: "Loading skeleton placeholder",
    defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#e2e8f0", borderColor: "#cbd5e1", borderRadius: 8, fontSize: 14, fontWeight: 400, gradientFrom: "#e2e8f0", gradientTo: "#f1f5f9", useGradient: true },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <div style={{ width: 200, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ width: "100%", height: 12, background: bg(p), borderRadius: p.borderRadius }} />
        <div style={{ width: "80%", height: 12, background: bg(p), borderRadius: p.borderRadius }} />
        <div style={{ width: "60%", height: 12, background: bg(p), borderRadius: p.borderRadius }} />
      </div>
    ),
    html: () => `<div class="tv-skeleton"><div></div><div></div><div></div></div>`,
    css: (p) => `.tv-skeleton { display: flex; flex-direction: column; gap: 8px; }
.tv-skeleton div {
  height: 12px;
  background: ${bg(p)};
  border-radius: ${p.borderRadius}px;
  animation: tv-shimmer 1.5s ease-in-out infinite;
}
.tv-skeleton div:nth-child(1) { width: 100%; }
.tv-skeleton div:nth-child(2) { width: 80%; }
.tv-skeleton div:nth-child(3) { width: 60%; }
@keyframes tv-shimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`,
    tailwind: (p) => `<div class="flex flex-col gap-2"><div class="w-full h-3 bg-[${p.bgColor}] rounded animate-pulse"></div><div class="w-4/5 h-3 bg-[${p.bgColor}] rounded animate-pulse"></div><div class="w-3/5 h-3 bg-[${p.bgColor}] rounded animate-pulse"></div></div>`,
  },

  // ── TAGS (2) ──
  {
    id: "tag-removable",
    name: "Removable Tag",
    category: "Tags",
    description: "Tag with remove button",
    defaults: { ...DEFAULT_PROPS, text: "React", bgColor: "#eff6ff", textColor: "#1e40af", borderColor: "#3b82f6", borderRadius: 6, fontSize: 12, fontWeight: 600, paddingX: 8, paddingY: 4 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <span style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 6,
      }}>
        {p.text}
        <span style={{ cursor: "pointer", opacity: 0.6, fontSize: 14 }}>×</span>
      </span>
    ),
    html: (p) => `<span class="tv-tag">${p.text}<span class="tv-tag-close">×</span></span>`,
    css: (p) => `.tv-tag {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.tv-tag-close { cursor: pointer; opacity: 0.6; }
.tv-tag-close:hover { opacity: 1; }`,
    tailwind: (p) => `<span class="inline-flex items-center gap-1 bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-2 py-1 text-xs font-semibold">${p.text}<span class="cursor-pointer opacity-60 hover:opacity-100">×</span></span>`,
  },
  {
    id: "tag-status",
    name: "Status Tag",
    category: "Tags",
    description: "Status indicator tag",
    defaults: { ...DEFAULT_PROPS, text: "Active", bgColor: "#ecfdf5", textColor: "#065f46", borderColor: "#10b981", borderRadius: 20, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 4 },
    controls: COMMON_CONTROLS,
    render: (p) => (
      <span style={{
        background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`,
        borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize,
        fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.borderColor, display: "inline-block", animation: "tv-pulse 2s infinite" }} />
        {p.text}
      </span>
    ),
    html: (p) => `<span class="tv-status-tag"><span class="tv-status-dot"></span>${p.text}</span>`,
    css: (p) => `.tv-status-tag {
  background: ${bg(p)};
  color: ${p.textColor};
  border: 1px solid ${p.borderColor};
  border-radius: ${p.borderRadius}px;
  padding: ${pad(p)};
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.tv-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p.borderColor};
  animation: tv-pulse 2s infinite;
}
@keyframes tv-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`,
    tailwind: (p) => `<span class="inline-flex items-center gap-1.5 bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-full px-3 py-1 text-xs font-semibold"><span class="w-2 h-2 rounded-full bg-[${p.borderColor}] animate-pulse"></span>${p.text}</span>`,
  },

  // MORE BUTTONS
  { id: "btn-ghost", name: "Ghost Button", category: "Buttons", description: "Transparent, fills on hover", defaults: { ...DEFAULT_PROPS, bgColor: "transparent", textColor: "#6366f1", borderColor: "transparent" }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer" }}>{p.text}</button>, html: (p) => `<button class="tv-btn-ghost">${p.text}</button>`, css: (p) => `.tv-btn-ghost { background: transparent; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; cursor: pointer; }\n.tv-btn-ghost:hover { background: ${p.textColor}20; }`, tailwind: (p) => `<button class="text-[${p.textColor}] rounded px-4 py-2 hover:bg-[${p.textColor}]/10">${p.text}</button>` },
  { id: "btn-fab", name: "FAB Button", category: "Buttons", description: "Floating action button", defaults: { ...DEFAULT_PROPS, text: "+", bgColor: "#6366f1", textColor: "#fff", borderRadius: 50, fontSize: 24, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: "50%", width: 56, height: 56, fontSize: p.fontSize, boxShadow: shadow(p), cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{p.text}</button>, html: (p) => `<button class="tv-fab">${p.text}</button>`, css: (p) => `.tv-fab { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: 50%; width: 56px; height: 56px; font-size: ${p.fontSize}px; box-shadow: ${shadow(p)}; cursor: pointer; display: flex; align-items: center; justify-content: center; }`, tailwind: (p) => `<button class="bg-[${p.bgColor}] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">${p.text}</button>` },
  { id: "btn-toggle", name: "Toggle Switch", category: "Buttons", description: "Toggle switch", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#6366f1", borderRadius: 20 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 48, height: 26, background: bg(p), borderRadius: p.borderRadius, position: "relative", cursor: "pointer" }}><div style={{ position: "absolute", top: 3, right: 3, width: 20, height: 20, background: "#fff", borderRadius: "50%", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} /></div>, html: () => `<div class="tv-toggle"><div class="tv-toggle-knob"></div></div>`, css: (p) => `.tv-toggle { width: 48px; height: 26px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; position: relative; cursor: pointer; }\n.tv-toggle-knob { position: absolute; top: 3px; right: 3px; width: 20px; height: 20px; background: #fff; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }`, tailwind: (p) => `<div class="w-12 h-6 bg-[${p.bgColor}] rounded-full relative"><div class="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow"></div></div>` },
  { id: "btn-link", name: "Link Button", category: "Buttons", description: "Underlined link", defaults: { ...DEFAULT_PROPS, text: "Learn more", bgColor: "transparent", textColor: "#3b82f6", borderColor: "transparent", paddingX: 0, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: "transparent", color: p.textColor, border: "none", padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", textDecoration: "underline" }}>{p.text}</button>, html: (p) => `<a class="tv-link">${p.text}</a>`, css: (p) => `.tv-link { color: ${p.textColor}; text-decoration: underline; font-size: ${p.fontSize}px; cursor: pointer; }`, tailwind: (p) => `<a class="text-[${p.textColor}] underline text-sm">${p.text}</a>` },
  { id: "btn-block", name: "Block Button", category: "Buttons", description: "Full-width button", defaults: { ...DEFAULT_PROPS, text: "Submit", bgColor: "#10b981", textColor: "#fff", fontSize: 16, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), cursor: "pointer", width: "100%" }}>{p.text}</button>, html: (p) => `<button class="tv-btn-block">${p.text}</button>`, css: (p) => `.tv-btn-block { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; width: 100%; }`, tailwind: (p) => `<button class="w-full bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] py-3 text-base">${p.text}</button>` },
  { id: "btn-grad-text", name: "Gradient Text Button", category: "Buttons", description: "Gradient text button", defaults: { ...DEFAULT_PROPS, text: "Gradient", bgColor: "#1e1e2e", borderColor: "#313244", useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: bg(p), border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", backgroundImage: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.text}</button>, html: (p) => `<button class="tv-btn-gt">${p.text}</button>`, css: (p) => `.tv-btn-gt { background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }`, tailwind: (p) => `<button class="bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] bg-clip-text text-transparent border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-6 py-3">${p.text}</button>` },

  // MORE CARDS
  { id: "card-lift", name: "Hover Lift Card", category: "Cards", description: "Lifts on hover", defaults: { ...DEFAULT_PROPS, bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", text: "Hover Me", borderRadius: 16 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, boxShadow: shadow(p), maxWidth: 220, cursor: "pointer" }}>{p.text}</div>, html: (p) => `<div class="tv-card-lift">${p.text}</div>`, css: (p) => `.tv-card-lift { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; transition: transform 0.3s; }\n.tv-card-lift:hover { transform: translateY(-8px); }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 shadow-md transition-transform hover:-translate-y-2 cursor-pointer">${p.text}</div>` },
  { id: "card-spotlight", name: "Spotlight Card", category: "Cards", description: "Glow on hover", defaults: { ...DEFAULT_PROPS, bgColor: "#0f172a", textColor: "#94a3b8", borderColor: "#334155", text: "Spotlight", borderRadius: 16, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), boxShadow: `0 0 20px ${p.shadowColor}40`, maxWidth: 220 }}>{p.text}</div>, html: (p) => `<div class="tv-card-spot">${p.text}</div>`, css: (p) => `.tv-card-spot { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: 0 0 20px ${p.shadowColor}40; }\n.tv-card-spot:hover { box-shadow: 0 0 40px ${p.shadowColor}80; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 shadow-[0_0_20px_${p.shadowColor}40] hover:shadow-[0_0_40px_${p.shadowColor}80] transition-shadow">${p.text}</div>` },
  { id: "card-stats", name: "Stats Card", category: "Cards", description: "Statistics display", defaults: { ...DEFAULT_PROPS, text: "Revenue\n$48,250\n+12%", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 16 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, boxShadow: shadow(p), maxWidth: 220, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-card-stats">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-card-stats { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 shadow-md">${p.text}</div>` },
  { id: "card-profile", name: "Profile Card", category: "Cards", description: "User profile", defaults: { ...DEFAULT_PROPS, text: "John Doe\nDesigner\nSF, CA", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 16 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, boxShadow: shadow(p), maxWidth: 220, whiteSpace: "pre-wrap", textAlign: "center" }}>{p.text}</div>, html: (p) => `<div class="tv-card-prof">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-card-prof { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 text-center">${p.text}</div>` },
  { id: "card-3d", name: "3D Flip Card", category: "Cards", description: "Flips in 3D", defaults: { ...DEFAULT_PROPS, text: "Hover to flip", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 16 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 180, height: 100, perspective: "600px" }}><div style={{ width: "100%", height: "100%", background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight, transition: "transform 0.6s", transformStyle: "preserve-3d", cursor: "pointer" }}>{p.text}</div></div>, html: (p) => `<div class="tv-card-3d"><div class="tv-inner">${p.text}</div></div>`, css: (p) => `.tv-card-3d { width: 180px; height: 100px; perspective: 600px; }\n.tv-inner { width: 100%; height: 100%; background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; display: flex; align-items: center; justify-content: center; transition: transform 0.6s; }\n.tv-card-3d:hover .tv-inner { transform: rotateY(180deg); }`, tailwind: (p) => `<div class="[perspective:600px]"><div class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] w-44 h-24 flex items-center justify-center transition-transform hover:[transform:rotateY(180deg)]">${p.text}</div></div>` },

  // MORE INPUTS
  { id: "input-textarea", name: "Textarea", category: "Inputs", description: "Multi-line input", defaults: { ...DEFAULT_PROPS, text: "Message...", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <textarea placeholder={p.text} style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, outline: "none", width: 200, height: 70, resize: "none" }} />, html: (p) => `<textarea class="tv-ta" placeholder="${p.text}"></textarea>`, css: (p) => `.tv-ta { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; outline: none; width: 100%; resize: vertical; }`, tailwind: (p) => `<textarea placeholder="${p.text}" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-2 outline-none w-full"></textarea>` },
  { id: "input-select", name: "Select", category: "Inputs", description: "Dropdown select", defaults: { ...DEFAULT_PROPS, text: "Choose...", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <select style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, outline: "none", width: 200, cursor: "pointer" }}><option>{p.text}</option><option>Option 1</option></select>, html: (p) => `<select class="tv-sel"><option>${p.text}</option></select>`, css: (p) => `.tv-sel { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; outline: none; cursor: pointer; }`, tailwind: (p) => `<select class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-2 outline-none"><option>${p.text}</option></select>` },
  { id: "input-checkbox", name: "Checkbox", category: "Inputs", description: "Custom checkbox", defaults: { ...DEFAULT_PROPS, text: "Accept terms", bgColor: "#6366f1", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <label style={{ display: "flex", alignItems: "center", gap: 8, color: p.textColor, fontSize: p.fontSize }}><div style={{ width: 20, height: 20, background: bg(p), border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>✓</div>{p.text}</label>, html: (p) => `<label class="tv-cb"><span class="tv-cb-box">✓</span>${p.text}</label>`, css: (p) => `.tv-cb { display: flex; align-items: center; gap: 8px; color: ${p.textColor}; }\n.tv-cb-box { width: 20px; height: 20px; background: ${bg(p)}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; display: flex; align-items: center; justify-content: center; color: #fff; }`, tailwind: (p) => `<label class="flex items-center gap-2 text-[${p.textColor}]"><span class="w-5 h-5 bg-[${p.bgColor}] border-2 border-[${p.borderColor}] rounded flex items-center justify-center text-white text-xs">✓</span>${p.text}</label>` },

  // NAVBAR + HERO + CODE + MODAL + TOAST + SPINNER + EMPTY STATE
  { id: "navbar-simple", name: "Simple Navbar", category: "Navbar", description: "Clean nav bar", defaults: { ...DEFAULT_PROPS, text: "Brand  Home  About  Contact", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<nav class="tv-nav">${p.text}</nav>`, css: (p) => `.tv-nav { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; gap: 24px; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] px-6 py-3 flex gap-6">${p.text}</nav>` },
  { id: "navbar-glass", name: "Glass Navbar", category: "Navbar", description: "Glassmorphism nav", defaults: { ...DEFAULT_PROPS, text: "Logo  Home  Features  Login", bgColor: "rgba(15,23,42,0.7)", textColor: "#e2e8f0", borderColor: "rgba(255,255,255,0.1)", borderRadius: 0, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 20, maxWidth: 350, backdropFilter: "blur(12px)" }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-glass">${p.text}</nav>`, css: (p) => `.tv-nav-glass { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; backdrop-filter: blur(12px); display: flex; gap: 20px; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] backdrop-blur-md text-[${p.textColor}] border-b border-[${p.borderColor}] px-6 py-3 flex gap-5">${p.text}</nav>` },
  { id: "hero-centered", name: "Centered Hero", category: "Hero", description: "Centered hero section", defaults: { ...DEFAULT_PROPS, text: "Build Amazing UI\n\nCreate beautiful interfaces.\n\nGet Started", bgColor: "#0f0f17", textColor: "#e2e8f0", borderRadius: 0, fontSize: 16, paddingX: 40, paddingY: 48, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<section class="tv-hero">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-10 py-12 text-center">${p.text}</section>` },
  { id: "hero-split", name: "Split Hero", category: "Hero", description: "Two-column hero", defaults: { ...DEFAULT_PROPS, text: "Welcome\n\nPowerful tools.\nStart Now", bgColor: "#0f0f17", textColor: "#e2e8f0", borderRadius: 0, paddingX: 32, paddingY: 40, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350, whiteSpace: "pre-wrap" }}><div style={{ flex: 1 }}>{p.text}</div><div style={{ width: 60, height: 60, background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>→</div></div>, html: (p) => `<section class="tv-hero-split"><div>${p.text.replace(/\n/g, "<br>")}</div><div class="tv-hero-img"></div></section>`, css: (p) => `.tv-hero-split { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; display: flex; gap: 24px; }\n.tv-hero-img { width: 60px; height: 60px; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] px-8 py-10 flex gap-6"><div class="flex-1">${p.text}</div><div class="w-14 h-14 bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded"></div></section>` },
  { id: "code-block", name: "Code Block", category: "Code", description: "Styled code display", defaults: { ...DEFAULT_PROPS, text: "const x = 'hello';", bgColor: "#0d1117", textColor: "#7ee787", borderColor: "#21262d", borderRadius: 8, fontSize: 13 }, controls: COMMON_CONTROLS, render: (p) => <pre style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontFamily: "monospace", maxWidth: 300, overflow: "auto", whiteSpace: "pre" }}>{p.text}</pre>, html: (p) => `<pre class="tv-code">${p.text}</pre>`, css: (p) => `.tv-code { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-family: monospace; overflow: auto; }`, tailwind: (p) => `<pre class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4 font-mono overflow-auto">${p.text}</pre>` },
  { id: "breadcrumb", name: "Breadcrumb", category: "Navigation", description: "Breadcrumb trail", defaults: { ...DEFAULT_PROPS, text: "Home / Products / Details", bgColor: "transparent", textColor: "#6366f1", borderColor: "transparent", borderRadius: 0, paddingX: 0, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, padding: pad(p) }}>{p.text}</div>, html: (p) => `<nav class="tv-bc">${p.text}</nav>`, css: (p) => `.tv-bc { color: ${p.textColor}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<nav class="text-[${p.textColor}] text-sm">${p.text}</nav>` },
  { id: "modal-dialog", name: "Modal Dialog", category: "Overlay", description: "Modal popup", defaults: { ...DEFAULT_PROPS, text: "Delete?\n\nAre you sure?\n\nCancel  Delete", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 16, shadowBlur: 40 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 280, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-modal">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-modal { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-8 py-6 shadow-2xl">${p.text}</div>` },
  { id: "toast", name: "Toast Notification", category: "Overlay", description: "Toast popup", defaults: { ...DEFAULT_PROPS, text: "✅ Saved successfully!", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#10b981", borderRadius: 12, paddingX: 20, paddingY: 14, shadowY: 8, shadowBlur: 24 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderLeft: `4px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 280 }}>{p.text}</div>, html: (p) => `<div class="tv-toast">${p.text}</div>`, css: (p) => `.tv-toast { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-left: 4px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] border-l-4 rounded-[${p.borderRadius}px] px-5 py-3 shadow-lg">${p.text}</div>` },
  { id: "loader-ring", name: "Ring Spinner", category: "Loaders", description: "Rotating ring", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 50 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 40, height: 40, border: `4px solid ${p.borderColor}30`, borderTopColor: p.borderColor, borderRadius: "50%", animation: "tv-spin 0.8s linear infinite" }} />, html: () => `<div class="tv-ring"></div>`, css: (p) => `.tv-ring { width: 40px; height: 40px; border: 4px solid ${p.borderColor}30; border-top-color: ${p.borderColor}; border-radius: 50%; animation: tv-spin 0.8s linear infinite; }\n@keyframes tv-spin { to { transform: rotate(360deg); } }`, tailwind: (p) => `<div class="w-10 h-10 border-4 border-[${p.borderColor}]/30 border-t-[${p.borderColor}] rounded-full animate-spin"></div>` },
  { id: "empty-state", name: "Empty State", category: "States", description: "No data placeholder", defaults: { ...DEFAULT_PROPS, text: "📭\n\nNo results found\n\nTry adjusting your search", bgColor: "transparent", textColor: "#64748b", borderRadius: 8, paddingX: 32, paddingY: 40 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", padding: pad(p), whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-empty">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-empty { color: ${p.textColor}; font-size: ${p.fontSize}px; text-align: center; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="text-[${p.textColor}] text-center py-10">${p.text}</div>` },

  // ═════ PREMIUM BUTTONS (8) ═════
  { id: "btn-magnetic", name: "Magnetic Button", category: "Buttons", description: "Magnetic hover pull", defaults: { ...DEFAULT_PROPS, text: "Magnetic", bgColor: "#6366f1", textColor: "#fff", borderRadius: 12, shadowY: 6, shadowBlur: 16, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), cursor: "pointer", transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>{p.text}</button>, html: (p) => `<button class="tv-btn-magnet">${p.text}</button>`, css: (p) => `.tv-btn-magnet { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; box-shadow: ${shadow(p)}; cursor: pointer; transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1); }\n.tv-btn-magnet:hover { transform: scale(1.05); }`, tailwind: (p) => `<button class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-6 py-3 shadow-lg transition-transform hover:scale-105">${p.text}</button>` },
  { id: "btn-slide-bg", name: "Slide Background", category: "Buttons", description: "BG slides from left", defaults: { ...DEFAULT_PROPS, text: "Slide In", bgColor: "transparent", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <button style={{ position: "relative", background: "transparent", color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", overflow: "hidden", zIndex: 1 }}><span style={{ position: "relative", zIndex: 2 }}>{p.text}</span></button>, html: (p) => `<button class="tv-btn-slidebg"><span>${p.text}</span></button>`, css: (p) => `.tv-btn-slidebg { position: relative; background: transparent; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; overflow: hidden; z-index: 1; }\n.tv-btn-slidebg::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: ${p.borderColor}; transition: left 0.4s; z-index: 1; }\n.tv-btn-slidebg:hover::before { left: 0; }\n.tv-btn-slidebg:hover span { color: #fff; position: relative; z-index: 2; }`, tailwind: (p) => `<button class="relative text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-6 py-3 overflow-hidden hover:bg-[${p.borderColor}] hover:text-white transition-colors">${p.text}</button>` },
  { id: "btn-wave", name: "Wave Button", category: "Buttons", description: "Wave ripple on click", defaults: { ...DEFAULT_PROPS, text: "Wave", bgColor: "#06b6d4", textColor: "#fff", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <button style={{ position: "relative", background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", overflow: "hidden" }}>{p.text}</button>, html: (p) => `<button class="tv-btn-wave">${p.text}</button>`, css: (p) => `.tv-btn-wave { position: relative; background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; overflow: hidden; }\n.tv-btn-wave::after { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background: rgba(255,255,255,0.3); transform: translate(-50%, -50%); transition: width 0.6s, height 0.6s; }\n.tv-btn-wave:active::after { width: 300px; height: 300px; }`, tailwind: (p) => `<button class="relative bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-6 py-3 overflow-hidden active:scale-95 transition-transform">${p.text}</button>` },
  { id: "btn-glow-pulse", name: "Glow Pulse", category: "Buttons", description: "Pulsing glow animation", defaults: { ...DEFAULT_PROPS, text: "Glow", bgColor: "#8b5cf6", textColor: "#fff", borderRadius: 8, shadowColor: "#8b5cf6", shadowBlur: 20 }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", boxShadow: `0 0 20px ${p.shadowColor}80`, animation: "tv-glow-pulse 2s infinite" }}>{p.text}</button>, html: (p) => `<button class="tv-btn-glowp">${p.text}</button>`, css: (p) => `.tv-btn-glowp { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: 0 0 20px ${p.shadowColor}80; animation: tv-glow-pulse 2s infinite; }\n@keyframes tv-glow-pulse { 0%, 100% { box-shadow: 0 0 20px ${p.shadowColor}80; } 50% { box-shadow: 0 0 40px ${p.shadowColor}ff, 0 0 60px ${p.shadowColor}80; } }`, tailwind: (p) => `<button class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-6 py-3 shadow-[0_0_20px_${p.shadowColor}80] animate-pulse">${p.text}</button>` },
  { id: "btn-gradient-hover", name: "Gradient Shift", category: "Buttons", description: "Gradient shifts on hover", defaults: { ...DEFAULT_PROPS, text: "Shift", bgColor: "#667eea", textColor: "#fff", borderRadius: 8, useGradient: true, gradientFrom: "#667eea", gradientTo: "#764ba2" }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, backgroundSize: "200% 200%", backgroundPosition: "0% 0%", color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", transition: "background-position 0.4s, box-shadow 0.3s", boxShadow: "0 4px 15px rgba(102,126,234,0.4)" }}>{p.text}</button>, html: (p) => `<button class="tv-btn-gradshift">${p.text}</button>`, css: (p) => `.tv-btn-gradshift { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); background-size: 200% 200%; background-position: 0% 0%; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; transition: background-position 0.4s, box-shadow 0.3s; box-shadow: 0 4px 15px ${p.shadowColor}60; }\n.tv-btn-gradshift:hover { background-position: 100% 100%; box-shadow: 0 8px 25px ${p.shadowColor}80; }`, tailwind: (p) => `<button class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded-[${p.borderRadius}px] px-6 py-3 shadow-lg transition-all">${p.text}</button>` },
  { id: "btn-icon-bounce", name: "Icon Bounce", category: "Buttons", description: "Icon bounces on hover", defaults: { ...DEFAULT_PROPS, text: "Send", bgColor: "#0f172a", textColor: "#fff", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <button style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}><span>{p.text}</span><span style={{ display: "inline-block", transition: "transform 0.3s" }}>🚀</span></button>, html: (p) => `<button class="tv-btn-ibounce">${p.text} 🚀</button>`, css: (p) => `.tv-btn-ibounce { display: inline-flex; align-items: center; gap: 8px; background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; }\n.tv-btn-ibounce:hover span:last-child { animation: tv-bounce-up 0.5s; }`, tailwind: (p) => `<button class="inline-flex items-center gap-2 bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-6 py-3">${p.text} 🚀</button>` },

  // ═════ PREMIUM CARDS (6) ═════
  { id: "card-glow-border", name: "Gradient Border Card", category: "Cards", description: "Animated gradient border", defaults: { ...DEFAULT_PROPS, text: "Gradient Border", bgColor: "#0f172a", textColor: "#cdd6f4", borderRadius: 16, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius, padding: "2px", maxWidth: 250 }}><div style={{ background: bg(p), borderRadius: p.borderRadius - 2, padding: pad(p), color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div>, html: (p) => `<div class="tv-card-gborder"><div class="tv-gborder-inner">${p.text}</div></div>`, css: (p) => `.tv-card-gborder { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; padding: 2px; max-width: 300px; }\n.tv-gborder-inner { background: ${bg(p)}; border-radius: ${p.borderRadius - 2}px; padding: ${pad(p)}; color: ${p.textColor}; }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-[${p.borderRadius}px] p-0.5 max-w-xs"><div class="bg-[${p.bgColor}] rounded-[${p.borderRadius - 2}px] p-4 text-[${p.textColor}]">${p.text}</div></div>` },
  { id: "card-shine", name: "Shine Card", category: "Cards", description: "Shine sweeps on hover", defaults: { ...DEFAULT_PROPS, text: "Shine Card", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 16 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, overflow: "hidden", maxWidth: 250 }}>{p.text}</div>, html: (p) => `<div class="tv-card-shine">${p.text}</div>`, css: (p) => `.tv-card-shine { position: relative; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; overflow: hidden; max-width: 300px; }\n.tv-card-shine::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); transform: skewX(-20deg); transition: left 0.6s; }\n.tv-card-shine:hover::before { left: 150%; }`, tailwind: (p) => `<div class="relative bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 overflow-hidden">${p.text}</div>` },
  { id: "card-morph", name: "Morph Card", category: "Cards", description: "Border radius morphs", defaults: { ...DEFAULT_PROPS, text: "Morph", bgColor: "#6366f1", textColor: "#fff", borderRadius: 16 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 250, transition: "border-radius 0.4s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.borderRadius = "50px"} onMouseLeave={e => e.currentTarget.style.borderRadius = `${p.borderRadius}px`}>{p.text}</div>, html: (p) => `<div class="tv-card-morph">${p.text}</div>`, css: (p) => `.tv-card-morph { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; transition: border-radius 0.4s; cursor: pointer; }\n.tv-card-morph:hover { border-radius: 50px; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] p-6 transition-all hover:rounded-full cursor-pointer">${p.text}</div>` },
  { id: "card-float", name: "Floating Card", category: "Cards", description: "Floats up and down", defaults: { ...DEFAULT_PROPS, text: "Floating", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#334155", borderRadius: 16, shadowY: 10, shadowBlur: 30 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 250, animation: "tv-float-card 3s ease-in-out infinite" }}>{p.text}</div>, html: (p) => `<div class="tv-card-float">${p.text}</div>`, css: (p) => `.tv-card-float { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; animation: tv-float-card 3s ease-in-out infinite; }\n@keyframes tv-float-card { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 shadow-lg">${p.text}</div>` },
  { id: "card-tilt", name: "Tilt Card", category: "Cards", description: "3D tilt on hover", defaults: { ...DEFAULT_PROPS, text: "Tilt", bgColor: "transparent", textColor: "#fff", borderRadius: 16, useGradient: true, gradientFrom: "#667eea", gradientTo: "#764ba2", shadowY: 10, shadowBlur: 30 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 250, transition: "transform 0.3s", cursor: "pointer", boxShadow: shadow(p) }} onMouseEnter={e => e.currentTarget.style.transform = "perspective(500px) rotateX(8deg) rotateY(-8deg) scale(1.03)"} onMouseLeave={e => e.currentTarget.style.transform = "perspective(500px) rotateX(0) rotateY(0) scale(1)"}>{p.text}</div>, html: (p) => `<div class="tv-card-tilt">${p.text}</div>`, css: (p) => `.tv-card-tilt { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; transition: transform 0.3s; cursor: pointer; }\n.tv-card-tilt:hover { transform: perspective(500px) rotateX(8deg) rotateY(-8deg) scale(1.03); }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded-[${p.borderRadius}px] p-6 shadow-xl transition-transform cursor-pointer">${p.text}</div>` },
  { id: "card-glass-hover", name: "Glass Hover Card", category: "Cards", description: "Glass blur increases on hover", defaults: { ...DEFAULT_PROPS, text: "Glass Hover", bgColor: "rgba(255,255,255,0.05)", textColor: "#fff", borderColor: "rgba(255,255,255,0.1)", borderRadius: 16, shadowBlur: 20 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(8px)", boxShadow: shadow(p), maxWidth: 250, transition: "backdrop-filter 0.3s, box-shadow 0.3s" }}>{p.text}</div>, html: (p) => `<div class="tv-card-gh">${p.text}</div>`, css: (p) => `.tv-card-gh { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; backdrop-filter: blur(8px); box-shadow: ${shadow(p)}; transition: backdrop-filter 0.3s, box-shadow 0.3s; }\n.tv-card-gh:hover { backdrop-filter: blur(16px); box-shadow: 0 8px 32px rgba(99,102,241,0.2); }`, tailwind: (p) => `<div class="bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[${p.borderRadius}px] p-6 shadow-lg hover:backdrop-blur-lg transition-all">${p.text}</div>` },

  // ═════ PREMIUM LOADERS (6) ═════
  { id: "loader-dots-bounce", name: "Bounce Dots", category: "Loaders", description: "Three bouncing dots", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 50 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", gap: 8 }}><span style={{ width: 12, height: 12, background: p.borderColor, borderRadius: "50%", animation: "tv-bounce-up 0.6s infinite alternate" }} /><span style={{ width: 12, height: 12, background: p.borderColor, borderRadius: "50%", animation: "tv-bounce-up 0.6s 0.2s infinite alternate" }} /><span style={{ width: 12, height: 12, background: p.borderColor, borderRadius: "50%", animation: "tv-bounce-up 0.6s 0.4s infinite alternate" }} /></div>, html: () => `<div class="tv-ld-bounce"><span></span><span></span><span></span></div>`, css: (p) => `.tv-ld-bounce { display: flex; gap: 8px; }\n.tv-ld-bounce span { width: 12px; height: 12px; background: ${p.borderColor}; border-radius: 50%; animation: tv-bounce-up 0.6s infinite alternate; }\n.tv-ld-bounce span:nth-child(2) { animation-delay: 0.2s; }\n.tv-ld-bounce span:nth-child(3) { animation-delay: 0.4s; }\n@keyframes tv-bounce-up { to { transform: translateY(-15px); } }`, tailwind: (p) => `<div class="flex gap-2"><span class="w-3 h-3 bg-[${p.borderColor}] rounded-full animate-bounce"></span><span class="w-3 h-3 bg-[${p.borderColor}] rounded-full animate-bounce [animation-delay:0.2s]"></span><span class="w-3 h-3 bg-[${p.borderColor}] rounded-full animate-bounce [animation-delay:0.4s]"></span></div>` },
  { id: "loader-bars", name: "Equalizer Bars", category: "Loaders", description: "Audio equalizer animation", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 3 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 40 }}>{[0, 0.1, 0.2, 0.3, 0.4].map((d, i) => <span key={i} style={{ width: 6, height: "100%", background: p.borderColor, borderRadius: p.borderRadius, animation: `tv-bar-h 1s ${d}s ease-in-out infinite` }} />)}</div>, html: () => `<div class="tv-ld-bars"><span></span><span></span><span></span><span></span><span></span></div>`, css: (p) => `.tv-ld-bars { display: flex; gap: 4px; align-items: flex-end; height: 40px; }\n.tv-ld-bars span { width: 6px; height: 100%; background: ${p.borderColor}; border-radius: ${p.borderRadius}px; animation: tv-bar-h 1s ease-in-out infinite; }\n.tv-ld-bars span:nth-child(2) { animation-delay: 0.1s; }\n.tv-ld-bars span:nth-child(3) { animation-delay: 0.2s; }\n.tv-ld-bars span:nth-child(4) { animation-delay: 0.3s; }\n.tv-ld-bars span:nth-child(5) { animation-delay: 0.4s; }\n@keyframes tv-bar-h { 0%, 100% { height: 20%; } 50% { height: 100%; } }`, tailwind: (p) => `<div class="flex gap-1 items-end h-10"><span class="w-1.5 h-full bg-[${p.borderColor}] rounded animate-pulse"></span><span class="w-1.5 h-full bg-[${p.borderColor}] rounded animate-pulse [animation-delay:0.1s]"></span><span class="w-1.5 h-full bg-[${p.borderColor}] rounded animate-pulse [animation-delay:0.2s]"></span></div>` },
  { id: "loader-pulse-ring", name: "Pulse Ring", category: "Loaders", description: "Expanding pulse rings", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 50 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", width: 40, height: 40 }}><div style={{ position: "absolute", inset: 0, border: `3px solid ${p.borderColor}`, borderRadius: "50%", animation: "tv-pulse-ring 1.5s ease-out infinite" }} /></div>, html: () => `<div class="tv-ld-pulse"></div>`, css: (p) => `.tv-ld-pulse { position: relative; width: 40px; height: 40px; }\n.tv-ld-pulse::before, .tv-ld-pulse::after { content: ''; position: absolute; inset: 0; border: 3px solid ${p.borderColor}; border-radius: 50%; animation: tv-pulse-ring 1.5s ease-out infinite; }\n.tv-ld-pulse::after { animation-delay: 0.5s; }\n@keyframes tv-pulse-ring { 0% { transform: scale(0.5); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }`, tailwind: (p) => `<div class="relative w-10 h-10"><div class="absolute inset-0 border-3 border-[${p.borderColor}] rounded-full animate-ping"></div></div>` },
  { id: "loader-cube", name: "Cube Flip", category: "Loaders", description: "Rotating cube", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 40, height: 40, background: p.borderColor, borderRadius: p.borderRadius, animation: "tv-cube-flip 1.5s ease-in-out infinite" }} />, html: () => `<div class="tv-ld-cube"></div>`, css: (p) => `.tv-ld-cube { width: 40px; height: 40px; background: ${p.borderColor}; border-radius: ${p.borderRadius}px; animation: tv-cube-flip 1.5s ease-in-out infinite; }\n@keyframes tv-cube-flip { 0% { transform: rotate(0) scale(1); border-radius: ${p.borderRadius}px; } 50% { transform: rotate(180deg) scale(0.6); border-radius: 50%; } 100% { transform: rotate(360deg) scale(1); border-radius: ${p.borderRadius}px; } }`, tailwind: (p) => `<div class="w-10 h-10 bg-[${p.borderColor}] rounded animate-spin"></div>` },
  { id: "loader-progress", name: "Progress Bar Loader", category: "Loaders", description: "Animated progress bar", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 4, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 6, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden" }}><div style={{ width: "40%", height: "100%", background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius, animation: "tv-progress-load 1.5s ease-in-out infinite" }} /></div>, html: () => `<div class="tv-ld-progress"><div></div></div>`, css: (p) => `.tv-ld-progress { width: 200px; height: 6px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-ld-progress div { width: 40%; height: 100%; background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; animation: tv-progress-load 1.5s ease-in-out infinite; }\n@keyframes tv-progress-load { 0% { transform: translateX(-100%); } 100% { transform: translateX(350%); } }`, tailwind: (p) => `<div class="w-48 h-1.5 bg-[${p.bgColor}] rounded-full overflow-hidden"><div class="w-2/5 h-full bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-full animate-pulse"></div></div>` },
  { id: "loader-orbit", name: "Orbit", category: "Loaders", description: "Electron orbiting", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 50 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", width: 48, height: 48 }}><div style={{ position: "absolute", inset: 0, border: `3px solid ${p.borderColor}30`, borderTopColor: p.borderColor, borderRadius: "50%", animation: "tv-spin 1s linear infinite" }} /><div style={{ position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 12, height: 12, background: p.borderColor, borderRadius: "50%", boxShadow: `0 0 10px ${p.borderColor}` }} /></div>, html: () => `<div class="tv-ld-orbit"></div>`, css: (p) => `.tv-ld-orbit { position: relative; width: 48px; height: 48px; }\n.tv-ld-orbit::before { content: ''; position: absolute; inset: 0; border: 3px solid ${p.borderColor}30; border-top-color: ${p.borderColor}; border-radius: 50%; animation: tv-spin 1s linear infinite; }\n.tv-ld-orbit::after { content: ''; position: absolute; top: -6px; left: 50%; transform: translateX(-50%); width: 12px; height: 12px; background: ${p.borderColor}; border-radius: 50%; box-shadow: 0 0 10px ${p.borderColor}; }\n@keyframes tv-spin { to { transform: rotate(360deg); } }`, tailwind: (p) => `<div class="relative w-12 h-12"><div class="absolute inset-0 border-3 border-[${p.borderColor}]/30 border-t-[${p.borderColor}] rounded-full animate-spin"></div></div>` },

  // ═════ PREMIUM TEXT EFFECTS (6) ═════
  { id: "text-gradient", name: "Gradient Text", category: "Text", description: "Animated gradient text", defaults: { ...DEFAULT_PROPS, text: "Gradient", bgColor: "transparent", textColor: "#6366f1", borderRadius: 0, fontSize: 32, fontWeight: 800, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <span style={{ fontSize: p.fontSize, fontWeight: p.fontWeight, background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}, ${p.gradientFrom})`, backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", animation: "tv-gradient-move 3s linear infinite" }}>{p.text}</span>, html: (p) => `<span class="tv-text-gradient">${p.text}</span>`, css: (p) => `.tv-text-gradient { font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}, ${p.gradientFrom}); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: tv-gradient-move 3s linear infinite; }\n@keyframes tv-gradient-move { to { background-position: 200% center; } }`, tailwind: (p) => `<span class="text-[${p.fontSize}px] font-extrabold bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] bg-clip-text text-transparent">${p.text}</span>` },
  { id: "text-neon", name: "Neon Text", category: "Text", description: "Glowing neon text", defaults: { ...DEFAULT_PROPS, text: "NEON", bgColor: "transparent", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: 0, fontSize: 40, fontWeight: 800 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ fontSize: p.fontSize, fontWeight: p.fontWeight, color: "#fff", textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 20px ${p.borderColor}, 0 0 40px ${p.borderColor}, 0 0 80px ${p.borderColor}` }}>{p.text}</span>, html: (p) => `<span class="tv-text-neon">${p.text}</span>`, css: (p) => `.tv-text-neon { font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; color: #fff; text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px ${p.borderColor}, 0 0 40px ${p.borderColor}, 0 0 80px ${p.borderColor}; }`, tailwind: (p) => `<span class="text-[${p.fontSize}px] font-extrabold text-white [text-shadow:0_0_20px_${p.borderColor}]">${p.text}</span>` },
  { id: "text-glitch", name: "Glitch Text", category: "Text", description: "Cyberpunk glitch effect", defaults: { ...DEFAULT_PROPS, text: "GLITCH", bgColor: "transparent", textColor: "#fff", borderColor: "#ec4899", borderRadius: 0, fontSize: 36, fontWeight: 800 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ position: "relative", fontSize: p.fontSize, fontWeight: p.fontWeight, color: p.textColor, fontFamily: "monospace" }}>{p.text}<span style={{ position: "absolute", top: 0, left: 0, color: "#ec4899", animation: "tv-glitch-1 0.5s infinite", clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}>{p.text}</span><span style={{ position: "absolute", top: 0, left: 0, color: "#06b6d4", animation: "tv-glitch-2 0.5s infinite", clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)" }}>{p.text}</span></span>, html: (p) => `<span class="tv-text-glitch" data-text="${p.text}">${p.text}</span>`, css: (p) => `.tv-text-glitch { position: relative; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; color: ${p.textColor}; font-family: monospace; }\n.tv-text-glitch::before, .tv-text-glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; }\n.tv-text-glitch::before { color: #ec4899; animation: tv-glitch-1 0.5s infinite; clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }\n.tv-text-glitch::after { color: #06b6d4; animation: tv-glitch-2 0.5s infinite; clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); }\n@keyframes tv-glitch-1 { 0%, 100% { transform: translate(0); } 50% { transform: translate(-3px, 0); } }\n@keyframes tv-glitch-2 { 0%, 100% { transform: translate(0); } 50% { transform: translate(3px, 0); } }`, tailwind: (p) => `<span class="relative text-[${p.fontSize}px] font-extrabold text-white font-mono">${p.text}</span>` },
  { id: "text-shimmer", name: "Shimmer Text", category: "Text", description: "Shimmering light effect", defaults: { ...DEFAULT_PROPS, text: "Shimmer", bgColor: "transparent", textColor: "#475569", borderRadius: 0, fontSize: 36, fontWeight: 800 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ fontSize: p.fontSize, fontWeight: p.fontWeight, background: `linear-gradient(90deg, ${p.textColor} 0%, ${p.textColor} 40%, #fff 50%, ${p.textColor} 60%, ${p.textColor} 100%)`, backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", animation: "tv-shimmer-text 2s linear infinite" }}>{p.text}</span>, html: (p) => `<span class="tv-text-shimmer">${p.text}</span>`, css: (p) => `.tv-text-shimmer { font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; background: linear-gradient(90deg, ${p.textColor} 0%, ${p.textColor} 40%, #fff 50%, ${p.textColor} 60%, ${p.textColor} 100%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: tv-shimmer-text 2s linear infinite; }\n@keyframes tv-shimmer-text { to { background-position: 200% center; } }`, tailwind: (p) => `<span class="text-[${p.fontSize}px] font-extrabold bg-gradient-to-r from-[${p.textColor}] via-white to-[${p.textColor}] bg-clip-text text-transparent">${p.text}</span>` },
  { id: "text-fire", name: "Fire Text", category: "Text", description: "Burning fire effect", defaults: { ...DEFAULT_PROPS, text: "FIRE", bgColor: "transparent", textColor: "#fff", borderColor: "#ff4500", borderRadius: 0, fontSize: 40, fontWeight: 900 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ fontSize: p.fontSize, fontWeight: p.fontWeight, color: "#fff", textShadow: "0 -2px 4px #fff, 0 -5px 8px #FFD700, 0 -10px 16px #FF8C00, 0 -18px 24px #FF4500, 0 -25px 35px #FF0000", animation: "tv-fire-text 0.5s ease-in-out infinite alternate" }}>{p.text}</span>, html: (p) => `<span class="tv-text-fire">${p.text}</span>`, css: (p) => `.tv-text-fire { font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; color: #fff; text-shadow: 0 -2px 4px #fff, 0 -5px 8px #FFD700, 0 -10px 16px #FF8C00, 0 -18px 24px #FF4500, 0 -25px 35px #FF0000; animation: tv-fire-text 0.5s ease-in-out infinite alternate; }\n@keyframes tv-fire-text { to { text-shadow: 0 -2px 4px #fff, 0 -5px 8px #FFD700, 0 -12px 18px #FF8C00, 0 -20px 28px #FF4500, 0 -30px 40px #FF0000; } }`, tailwind: (p) => `<span class="text-[${p.fontSize}px] font-black text-white [text-shadow:0_-5px_8px_#FFD700,0_-10px_16px_#FF8C00]">${p.text}</span>` },
  { id: "text-typing", name: "Typing Effect", category: "Text", description: "Typewriter animation", defaults: { ...DEFAULT_PROPS, text: "Hello World", bgColor: "transparent", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 0, fontSize: 20, fontWeight: 400 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ fontSize: p.fontSize, fontWeight: p.fontWeight, color: p.textColor, fontFamily: "monospace", borderRight: `2px solid ${p.borderColor}`, animation: "tv-typing 3s steps(11) infinite, tv-cursor 0.5s step-end infinite", overflow: "hidden", whiteSpace: "nowrap", display: "inline-block" }}>{p.text}</span>, html: (p) => `<span class="tv-text-typing">${p.text}</span>`, css: (p) => `.tv-text-typing { font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; color: ${p.textColor}; font-family: monospace; border-right: 2px solid ${p.borderColor}; animation: tv-typing 3s steps(11) infinite, tv-cursor 0.5s step-end infinite; overflow: hidden; white-space: nowrap; display: inline-block; }\n@keyframes tv-typing { 0% { width: 0; } 50% { width: 100%; } 100% { width: 0; } }\n@keyframes tv-cursor { 50% { border-color: transparent; } }`, tailwind: (p) => `<span class="text-[${p.fontSize}px] text-[${p.textColor}] font-mono border-r-2 border-[${p.borderColor}]">${p.text}</span>` },

  // ═════ PREMIUM BACKGROUNDS (6) ═════
  { id: "bg-grid", name: "Grid Pattern", category: "Backgrounds", description: "Tech grid background", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#0f172a", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 12, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 120, borderRadius: p.borderRadius, background: bg(p), backgroundImage: `linear-gradient(${p.borderColor}15 1px, transparent 1px), linear-gradient(90deg, ${p.borderColor}15 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />, html: () => `<div class="tv-bg-grid"></div>`, css: (p) => `.tv-bg-grid { width: 100%; height: 120px; border-radius: ${p.borderRadius}px; background-color: ${bg(p)}; background-image: linear-gradient(${p.borderColor}15 1px, transparent 1px), linear-gradient(90deg, ${p.borderColor}15 1px, transparent 1px); background-size: 20px 20px; }`, tailwind: (p) => `<div class="w-full h-32 rounded-[${p.borderRadius}px] bg-[${p.bgColor}]"></div>` },
  { id: "bg-mesh", name: "Mesh Gradient", category: "Backgrounds", description: "Soft mesh gradient", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#6366f1", textColor: "#ec4899", borderColor: "#06b6d4", borderRadius: 12, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 120, borderRadius: p.borderRadius, background: bg(p), backgroundImage: `radial-gradient(at 20% 30%, ${p.textColor} 0px, transparent 50%), radial-gradient(at 80% 20%, ${p.borderColor} 0px, transparent 50%), radial-gradient(at 50% 80%, #f59e0b 0px, transparent 50%)` }} />, html: () => `<div class="tv-bg-mesh"></div>`, css: (p) => `.tv-bg-mesh { width: 100%; height: 120px; border-radius: ${p.borderRadius}px; background-color: ${bg(p)}; background-image: radial-gradient(at 20% 30%, ${p.textColor} 0px, transparent 50%), radial-gradient(at 80% 20%, ${p.borderColor} 0px, transparent 50%), radial-gradient(at 50% 80%, #f59e0b 0px, transparent 50%); }`, tailwind: (p) => `<div class="w-full h-32 rounded-[${p.borderRadius}px] bg-[${p.bgColor}]"></div>` },
  { id: "bg-aurora", name: "Aurora", category: "Backgrounds", description: "Animated aurora", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#0f172a", borderRadius: 12, paddingX: 0, paddingY: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 120, borderRadius: p.borderRadius, background: bg(p), position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", inset: "-50%", background: `conic-gradient(from 0deg, transparent, ${p.gradientFrom}, transparent, ${p.gradientTo}, transparent)`, animation: "tv-aurora-spin 4s linear infinite" }} /></div>, html: () => `<div class="tv-bg-aurora"><div class="tv-aurora-inner"></div></div>`, css: (p) => `.tv-bg-aurora { width: 100%; height: 120px; border-radius: ${p.borderRadius}px; background: ${bg(p)}; position: relative; overflow: hidden; }\n.tv-aurora-inner { position: absolute; inset: -50%; background: conic-gradient(from 0deg, transparent, ${p.gradientFrom}, transparent, ${p.gradientTo}, transparent); animation: tv-aurora-spin 4s linear infinite; }\n@keyframes tv-aurora-spin { to { transform: rotate(360deg); } }`, tailwind: (p) => `<div class="w-full h-32 rounded-[${p.borderRadius}px] bg-[${p.bgColor}] overflow-hidden relative"></div>` },
  { id: "bg-stars", name: "Starfield", category: "Backgrounds", description: "Twinkling stars", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#0f172a", textColor: "#fff", borderColor: "#fff", borderRadius: 12, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 120, borderRadius: p.borderRadius, background: bg(p), backgroundImage: `radial-gradient(2px 2px at 20px 30px, ${p.borderColor}, transparent), radial-gradient(2px 2px at 60px 70px, ${p.borderColor}, transparent), radial-gradient(1px 1px at 90px 40px, ${p.borderColor}, transparent), radial-gradient(2px 2px at 130px 80px, ${p.borderColor}, transparent)`, backgroundSize: "200px 100px", animation: "tv-stars-move 3s linear infinite" }} />, html: () => `<div class="tv-bg-stars"></div>`, css: (p) => `.tv-bg-stars { width: 100%; height: 120px; border-radius: ${p.borderRadius}px; background: ${bg(p)}; background-image: radial-gradient(2px 2px at 20px 30px, ${p.borderColor}, transparent), radial-gradient(2px 2px at 60px 70px, ${p.borderColor}, transparent), radial-gradient(1px 1px at 90px 40px, ${p.borderColor}, transparent), radial-gradient(2px 2px at 130px 80px, ${p.borderColor}, transparent); background-size: 200px 100px; animation: tv-stars-move 3s linear infinite; }\n@keyframes tv-stars-move { to { background-position: 0 100px; } }`, tailwind: (p) => `<div class="w-full h-32 rounded-[${p.borderRadius}px] bg-[${p.bgColor}]"></div>` },
  { id: "bg-orbs", name: "Floating Orbs", category: "Backgrounds", description: "Floating blurred orbs", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#0f172a", textColor: "#6366f1", borderColor: "#ec4899", borderRadius: 12, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 120, borderRadius: p.borderRadius, background: bg(p), position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", width: 80, height: 80, background: p.textColor, borderRadius: "50%", filter: "blur(30px)", top: -20, left: -20, animation: "tv-orb-1 4s ease-in-out infinite" }} /><div style={{ position: "absolute", width: 60, height: 60, background: p.borderColor, borderRadius: "50%", filter: "blur(25px)", bottom: -10, right: -10, animation: "tv-orb-2 5s ease-in-out infinite" }} /></div>, html: () => `<div class="tv-bg-orbs"><div class="tv-orb-1"></div><div class="tv-orb-2"></div></div>`, css: (p) => `.tv-bg-orbs { width: 100%; height: 120px; border-radius: ${p.borderRadius}px; background: ${bg(p)}; position: relative; overflow: hidden; }\n.tv-orb-1 { position: absolute; width: 80px; height: 80px; background: ${p.textColor}; border-radius: 50%; filter: blur(30px); top: -20px; left: -20px; animation: tv-orb-1 4s ease-in-out infinite; }\n.tv-orb-2 { position: absolute; width: 60px; height: 60px; background: ${p.borderColor}; border-radius: 50%; filter: blur(25px); bottom: -10px; right: -10px; animation: tv-orb-2 5s ease-in-out infinite; }\n@keyframes tv-orb-1 { 50% { transform: translate(30px, 30px); } }\n@keyframes tv-orb-2 { 50% { transform: translate(-30px, -30px); } }`, tailwind: (p) => `<div class="w-full h-32 rounded-[${p.borderRadius}px] bg-[${p.bgColor}] overflow-hidden relative"></div>` },
  { id: "bg-waves", name: "Animated Waves", category: "Backgrounds", description: "Gradient wave animation", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#6366f1", borderRadius: 12, paddingX: 0, paddingY: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 120, borderRadius: p.borderRadius, background: `linear-gradient(45deg, ${p.gradientFrom}, ${p.gradientTo})`, backgroundSize: "200% 200%", animation: "tv-waves-bg 3s ease infinite" }} />, html: () => `<div class="tv-bg-waves"></div>`, css: (p) => `.tv-bg-waves { width: 100%; height: 120px; border-radius: ${p.borderRadius}px; background: linear-gradient(45deg, ${p.gradientFrom}, ${p.gradientTo}); background-size: 200% 200%; animation: tv-waves-bg 3s ease infinite; }\n@keyframes tv-waves-bg { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`, tailwind: (p) => `<div class="w-full h-32 rounded-[${p.borderRadius}px] bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}]"></div>` },

  // ═════ PREMIUM HOVER EFFECTS (6) ═════
  { id: "hover-underline", name: "Animated Underline", category: "Hover", description: "Underline grows from center", defaults: { ...DEFAULT_PROPS, text: "Hover Link", bgColor: "transparent", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 0, fontSize: 16, fontWeight: 600, paddingX: 0, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ position: "relative", fontSize: p.fontSize, fontWeight: p.fontWeight, color: p.textColor, cursor: "pointer" }}>{p.text}</span>, html: (p) => `<a class="tv-hover-underline">${p.text}</a>`, css: (p) => `.tv-hover-underline { position: relative; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; color: ${p.textColor}; text-decoration: none; cursor: pointer; }\n.tv-hover-underline::after { content: ''; position: absolute; bottom: -4px; left: 50%; width: 0; height: 2px; background: ${p.borderColor}; transition: all 0.3s; }\n.tv-hover-underline:hover::after { left: 0; width: 100%; }`, tailwind: (p) => `<a class="relative text-[${p.fontSize}px] font-semibold text-[${p.textColor}] cursor-pointer hover:underline">${p.text}</a>` },
  { id: "hover-zoom", name: "Zoom Reveal", category: "Hover", description: "Zoom in on hover", defaults: { ...DEFAULT_PROPS, text: "Zoom Me", bgColor: "#6366f1", textColor: "#fff", borderRadius: 12, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", transition: "transform 0.3s" }}>{p.text}</div>, html: (p) => `<div class="tv-hover-zoom">${p.text}</div>`, css: (p) => `.tv-hover-zoom { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; transition: transform 0.3s; }\n.tv-hover-zoom:hover { transform: scale(1.1); }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-6 py-3 cursor-pointer transition-transform hover:scale-110">${p.text}</div>` },
  { id: "hover-lift", name: "Lift Up", category: "Hover", description: "Lifts up with shadow", defaults: { ...DEFAULT_PROPS, text: "Lift Card", bgColor: "#fff", textColor: "#1e293b", borderColor: "#e2e8f0", borderRadius: 12, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", transition: "all 0.3s" }}>{p.text}</div>, html: (p) => `<div class="tv-hover-lift">${p.text}</div>`, css: (p) => `.tv-hover-lift { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; transition: all 0.3s; }\n.tv-hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }`, tailwind: (p) => `<div class="bg-white text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-6 py-3 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl">${p.text}</div>` },
  { id: "hover-rotate", name: "Rotate 360", category: "Hover", description: "Rotates 360 on hover", defaults: { ...DEFAULT_PROPS, text: "🔄", bgColor: "#f59e0b", textColor: "#fff", borderRadius: 12, fontSize: 28, fontWeight: 400, paddingX: 20, paddingY: 20 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: 60, height: 60, transition: "transform 0.5s" }}>{p.text}</div>, html: (p) => `<div class="tv-hover-rotate">${p.text}</div>`, css: (p) => `.tv-hover-rotate { width: 60px; height: 60px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; cursor: pointer; transition: transform 0.5s; }\n.tv-hover-rotate:hover { transform: rotate(360deg); }`, tailwind: (p) => `<div class="w-14 h-14 bg-[${p.bgColor}] rounded-[${p.borderRadius}px] flex items-center justify-center text-2xl cursor-pointer transition-transform hover:rotate-180">${p.text}</div>` },
  { id: "hover-shake", name: "Shake", category: "Hover", description: "Shakes on hover", defaults: { ...DEFAULT_PROPS, text: "Shake!", bgColor: "#ef4444", textColor: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer" }}>{p.text}</div>, html: (p) => `<div class="tv-hover-shake">${p.text}</div>`, css: (p) => `.tv-hover-shake { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; }\n.tv-hover-shake:hover { animation: tv-shake 0.5s; }\n@keyframes tv-shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-6 py-3 cursor-pointer hover:animate-bounce">${p.text}</div>` },
  { id: "hover-flip", name: "Flip X", category: "Hover", description: "Flips horizontally", defaults: { ...DEFAULT_PROPS, text: "Flip", bgColor: "#8b5cf6", textColor: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, cursor: "pointer", transition: "transform 0.6s" }}>{p.text}</div>, html: (p) => `<div class="tv-hover-flip">${p.text}</div>`, css: (p) => `.tv-hover-flip { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; cursor: pointer; transition: transform 0.6s; }\n.tv-hover-flip:hover { transform: rotateY(180deg); }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-6 py-3 cursor-pointer transition-transform duration-500 hover:[transform:rotateY(180deg)]">${p.text}</div>` },

  // ═════ PREMIUM BORDERS (4) ═════
  { id: "border-gradient", name: "Gradient Border", category: "Borders", description: "Gradient border", defaults: { ...DEFAULT_PROPS, text: "Gradient Border", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderRadius: 16, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ padding: "2px", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius }}><div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius - 2, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div>, html: (p) => `<div class="tv-border-grad"><div class="tv-bgrad-inner">${p.text}</div></div>`, css: (p) => `.tv-border-grad { padding: 2px; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; }\n.tv-bgrad-inner { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius - 2}px; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-[${p.borderRadius}px] p-0.5"><div class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius - 2}px] p-4">${p.text}</div></div>` },
  { id: "border-glow", name: "Glow Border", category: "Borders", description: "Glowing border on hover", defaults: { ...DEFAULT_PROPS, text: "Glow Border", bgColor: "#0f172a", textColor: "#94a3b8", borderColor: "#6366f1", borderRadius: 16, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}30`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, transition: "all 0.3s" }}>{p.text}</div>, html: (p) => `<div class="tv-border-glow">${p.text}</div>`, css: (p) => `.tv-border-glow { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; transition: all 0.3s; }\n.tv-border-glow:hover { border-color: ${p.borderColor}; box-shadow: 0 0 15px ${p.shadowColor}40; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}]/30 rounded-[${p.borderRadius}px] p-4 transition-all hover:border-[${p.borderColor}] hover:shadow-[0_0_15px_${p.shadowColor}40]">${p.text}</div>` },
  { id: "border-corners", name: "Corner Brackets", category: "Borders", description: "Sci-fi corner brackets", defaults: { ...DEFAULT_PROPS, text: "Corners", bgColor: "#0f172a", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div>, html: (p) => `<div class="tv-border-corners">${p.text}</div>`, css: (p) => `.tv-border-corners { position: relative; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }\n.tv-border-corners::before { content: ''; position: absolute; top: -2px; left: -2px; width: 15px; height: 15px; border-top: 2px solid ${p.borderColor}; border-left: 2px solid ${p.borderColor}; }\n.tv-border-corners::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 15px; height: 15px; border-bottom: 2px solid ${p.borderColor}; border-right: 2px solid ${p.borderColor}; }`, tailwind: (p) => `<div class="relative bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] p-4">${p.text}</div>` },
  { id: "border-neon", name: "Neon Pulse Border", category: "Borders", description: "Pulsing neon border", defaults: { ...DEFAULT_PROPS, text: "Neon Pulse", bgColor: "#0a0a0a", textColor: "#00ff00", borderColor: "#00ff00", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, animation: "tv-border-neon-pulse 1.5s ease-in-out infinite" }}>{p.text}</div>, html: (p) => `<div class="tv-border-neon">${p.text}</div>`, css: (p) => `.tv-border-neon { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; animation: tv-border-neon-pulse 1.5s ease-in-out infinite; }\n@keyframes tv-border-neon-pulse { 0%, 100% { box-shadow: 0 0 5px ${p.borderColor}, inset 0 0 5px ${p.borderColor}20; } 50% { box-shadow: 0 0 20px ${p.borderColor}, 0 0 40px ${p.borderColor}, inset 0 0 10px ${p.borderColor}40; } }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.borderColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4 shadow-[0_0_10px_${p.borderColor}] animate-pulse">${p.text}</div>` },

  { id: "border-dashed", name: "Dashed Flow", category: "Borders", description: "Animated dashed border", defaults: { ...DEFAULT_PROPS, text: "Dashed", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `2px dashed ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div>, html: (p) => `<div class="tv-border-dashed">${p.text}</div>`, css: (p) => `.tv-border-dashed { background: ${bg(p)}; color: ${p.textColor}; border: 2px dashed ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-dashed border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4">${p.text}</div>` },
  { id: "border-double", name: "Double Border", category: "Borders", description: "Double border effect", defaults: { ...DEFAULT_PROPS, text: "Double", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `4px double ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div>, html: (p) => `<div class="tv-border-double">${p.text}</div>`, css: (p) => `.tv-border-double { background: ${bg(p)}; color: ${p.textColor}; border: 4px double ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-[3px] double border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4">${p.text}</div>` },
  { id: "border-animated", name: "Animated Border", category: "Borders", description: "Animated rotating gradient border", defaults: { ...DEFAULT_PROPS, text: "Animated", bgColor: "#0f172a", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 12, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", padding: "2px", background: `conic-gradient(from 0deg, ${p.gradientFrom}, ${p.gradientTo}, ${p.gradientFrom})`, borderRadius: p.borderRadius, animation: "tv-spin 3s linear infinite" }}><div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius - 2, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div>, html: (p) => `<div class="tv-border-anim"><div class="tv-ba-inner">${p.text}</div></div>`, css: (p) => `.tv-border-anim { position: relative; padding: 2px; background: conic-gradient(from 0deg, ${p.gradientFrom}, ${p.gradientTo}, ${p.gradientFrom}); border-radius: ${p.borderRadius}px; animation: tv-spin 3s linear infinite; }\n.tv-ba-inner { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius - 2}px; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4">${p.text}</div>` },
  { id: "border-shadow", name: "Shadow Border", category: "Borders", description: "Border with colored shadow", defaults: { ...DEFAULT_PROPS, text: "Shadow Border", bgColor: "#0f172a", textColor: "#cdd6f4", borderColor: "#8b5cf6", borderRadius: 12, shadowColor: "#8b5cf6", shadowBlur: 20 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `0 0 20px ${p.shadowColor}40` }}>{p.text}</div>, html: (p) => `<div class="tv-border-shadow">${p.text}</div>`, css: (p) => `.tv-border-shadow { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: 0 0 20px ${p.shadowColor}40; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4 shadow-[0_0_20px_${p.shadowColor}40]">${p.text}</div>` },
  { id: "border-inset", name: "Inset Border", category: "Borders", description: "Inset/embossed border effect", defaults: { ...DEFAULT_PROPS, text: "Inset", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderStyle: "solid", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `inset 2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.05)` }}>{p.text}</div>, html: (p) => `<div class="tv-border-inset">${p.text}</div>`, css: (p) => `.tv-border-inset { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: inset 2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.05); }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4 shadow-inner">${p.text}</div>` },

  // ═════ MORE ALERTS (8) ═════
  { id: "alert-info-gradient", name: "Gradient Info Alert", category: "Alerts", description: "Gradient info alert with icon", defaults: { ...DEFAULT_PROPS, text: "💡 Tip: You can customize this alert!", bgColor: "#3b82f6", textColor: "#fff", borderColor: "#1d4ed8", borderRadius: 10, fontSize: 13, fontWeight: 500, useGradient: true, gradientFrom: "#3b82f6", gradientTo: "#1d4ed8" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<div class="tv-alert-igrad">${p.text}</div>`, css: (p) => `.tv-alert-igrad { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded-[${p.borderRadius}px] px-4 py-3">${p.text}</div>` },
  { id: "alert-dark", name: "Dark Alert", category: "Alerts", description: "Dark theme alert with accent", defaults: { ...DEFAULT_PROPS, text: "🔔 Notification content here", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 10, fontSize: 13, fontWeight: 500 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}30`, borderLeft: `3px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<div class="tv-alert-dark">${p.text}</div>`, css: (p) => `.tv-alert-dark { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-left: 3px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}]/30 border-l-[3px] border-l-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-3">${p.text}</div>` },
  { id: "alert-bordered", name: "Bordered Alert", category: "Alerts", description: "Full border alert with icon space", defaults: { ...DEFAULT_PROPS, text: "⚠️ Warning! Check your input.", bgColor: "#fffbeb", textColor: "#92400e", borderColor: "#f59e0b", borderRadius: 8, fontSize: 13, fontWeight: 500 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<div class="tv-alert-bordered">${p.text}</div>`, css: (p) => `.tv-alert-bordered { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-3">${p.text}</div>` },
  { id: "alert-rounded", name: "Rounded Alert", category: "Alerts", description: "Fully rounded pill alert", defaults: { ...DEFAULT_PROPS, text: "✅ Done! Task completed.", bgColor: "#ecfdf5", textColor: "#065f46", borderColor: "#10b981", borderRadius: 50, fontSize: 13, fontWeight: 500, paddingX: 20, paddingY: 10 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 350, display: "inline-flex", alignItems: "center" }}>{p.text}</div>, html: (p) => `<div class="tv-alert-rounded">${p.text}</div>`, css: (p) => `.tv-alert-rounded { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; display: inline-flex; align-items: center; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-full px-5 py-2.5 inline-flex items-center">${p.text}</div>` },
  { id: "alert-banner", name: "Banner Alert", category: "Alerts", description: "Full-width banner alert", defaults: { ...DEFAULT_PROPS, text: "🎉 New feature available! Try it now.", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 0, fontSize: 13, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", width: "100%" }}>{p.text}</div>, html: (p) => `<div class="tv-alert-banner">${p.text}</div>`, css: (p) => `.tv-alert-banner { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; width: 100%; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-white py-3 text-center w-full font-semibold text-sm">${p.text}</div>` },
  { id: "alert-glass", name: "Glass Alert", category: "Alerts", description: "Glassmorphism alert", defaults: { ...DEFAULT_PROPS, text: "🔒 Your data is encrypted.", bgColor: "rgba(255,255,255,0.1)", textColor: "#fff", borderColor: "rgba(255,255,255,0.2)", borderRadius: 12, fontSize: 13, fontWeight: 500 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(12px)", maxWidth: 350 }}>{p.text}</div>, html: (p) => `<div class="tv-alert-glass">${p.text}</div>`, css: (p) => `.tv-alert-glass { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; backdrop-filter: blur(12px); }`, tailwind: (p) => `<div class="bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-[${p.borderRadius}px] px-4 py-3">${p.text}</div>` },
  { id: "alert-dismissible", name: "Dismissible Alert", category: "Alerts", description: "Alert with close button", defaults: { ...DEFAULT_PROPS, text: "ℹ️ This alert can be dismissed", bgColor: "#eff6ff", textColor: "#1e40af", borderColor: "#3b82f6", borderRadius: 8, fontSize: 13, fontWeight: 500 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 350 }}><span>{p.text}</span><span style={{ cursor: "pointer", opacity: 0.6, marginLeft: 8 }}>✕</span></div>, html: (p) => `<div class="tv-alert-dismiss">${p.text}<span class="tv-dismiss-x">✕</span></div>`, css: (p) => `.tv-alert-dismiss { display: flex; align-items: center; justify-content: space-between; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }\n.tv-dismiss-x { cursor: pointer; opacity: 0.6; margin-left: 8px; }`, tailwind: (p) => `<div class="flex items-center justify-between bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-3">${p.text}<span class="cursor-pointer opacity-60">✕</span></div>` },
  { id: "alert-action", name: "Action Alert", category: "Alerts", description: "Alert with action button", defaults: { ...DEFAULT_PROPS, text: "Cookie consent required", bgColor: "#fef3c7", textColor: "#78350f", borderColor: "#f59e0b", borderRadius: 8, fontSize: 13, fontWeight: 500 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", gap: 12, background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 350 }}><span style={{ flex: 1 }}>{p.text}</span><button style={{ background: p.borderColor, color: "#fff", border: "none", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Accept</button></div>, html: (p) => `<div class="tv-alert-action">${p.text}<button class="tv-alert-btn">Accept</button></div>`, css: (p) => `.tv-alert-action { display: flex; align-items: center; gap: 12px; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }\n.tv-alert-btn { background: ${p.borderColor}; color: #fff; border: none; border-radius: 6px; padding: 4px 12px; font-size: 12px; font-weight: 600; cursor: pointer; }`, tailwind: (p) => `<div class="flex items-center gap-3 bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-3">${p.text}<button class="bg-[${p.borderColor}] text-white rounded-md px-3 py-1 text-xs font-semibold">Accept</button></div>` },

  // ═════ MORE BADGES (5) ═════
  { id: "badge-shimmer", name: "Shimmer Badge", category: "Badges", description: "Shimmering badge", defaults: { ...DEFAULT_PROPS, text: "LIVE", bgColor: "#ef4444", textColor: "#fff", borderColor: "#ef4444", borderRadius: 6, fontSize: 11, fontWeight: 700, paddingX: 10, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-block", animation: "tv-shimmer-badge 2s linear infinite" }}>{p.text}</span>, html: (p) => `<span class="tv-badge-shimmer">${p.text}</span>`, css: (p) => `.tv-badge-shimmer { background: linear-gradient(90deg, ${p.bgColor}, #ff8c8c, ${p.bgColor}); background-size: 200% auto; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-block; animation: tv-shimmer-badge 2s linear infinite; }\n@keyframes tv-shimmer-badge { to { background-position: 200% center; } }`, tailwind: (p) => `<span class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-2.5 py-1 text-[${p.fontSize}px] font-bold animate-pulse">${p.text}</span>` },
  { id: "badge-pulse", name: "Pulse Badge", category: "Badges", description: "Pulsing badge", defaults: { ...DEFAULT_PROPS, text: "NEW", bgColor: "#10b981", textColor: "#fff", borderColor: "#10b981", borderRadius: 6, fontSize: 11, fontWeight: 700, paddingX: 10, paddingY: 4, shadowColor: "#10b981" }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-block", animation: "tv-pulse-badge 1.5s infinite", boxShadow: `0 0 0 0 ${p.shadowColor}80` }}>{p.text}</span>, html: (p) => `<span class="tv-badge-pulse">${p.text}</span>`, css: (p) => `.tv-badge-pulse { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-block; animation: tv-pulse-badge 1.5s infinite; }\n@keyframes tv-pulse-badge { 0% { box-shadow: 0 0 0 0 ${p.shadowColor}80; } 70% { box-shadow: 0 0 0 8px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }`, tailwind: (p) => `<span class="bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-2.5 py-1 text-[${p.fontSize}px] font-bold animate-pulse">${p.text}</span>` },
  { id: "badge-chip", name: "Chip Badge", category: "Badges", description: "Removable chip tag", defaults: { ...DEFAULT_PROPS, text: "React", bgColor: "#eff6ff", textColor: "#1e40af", borderColor: "#3b82f6", borderRadius: 20, fontSize: 12, fontWeight: 600, paddingX: 8, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 6 }}>{p.text}<span style={{ cursor: "pointer", opacity: 0.6 }}>✕</span></span>, html: (p) => `<span class="tv-badge-chip">${p.text}<span class="tv-chip-x">✕</span></span>`, css: (p) => `.tv-badge-chip { display: inline-flex; align-items: center; gap: 6px; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }\n.tv-chip-x { cursor: pointer; opacity: 0.6; }`, tailwind: (p) => `<span class="inline-flex items-center gap-1.5 bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-full px-2 py-1 text-xs font-semibold">${p.text}<span class="cursor-pointer opacity-60">✕</span></span>` },
  { id: "badge-icon", name: "Icon Badge", category: "Badges", description: "Badge with icon", defaults: { ...DEFAULT_PROPS, text: "Verified", bgColor: "#3b82f6", textColor: "#fff", borderColor: "#3b82f6", borderRadius: 6, fontSize: 11, fontWeight: 600, paddingX: 8, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 4 }}>✓ {p.text}</span>, html: (p) => `<span class="tv-badge-icon">✓ ${p.text}</span>`, css: (p) => `.tv-badge-icon { display: inline-flex; align-items: center; gap: 4px; background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<span class="inline-flex items-center gap-1 bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] px-2 py-1 text-[${p.fontSize}px] font-semibold">✓ ${p.text}</span>` },
  { id: "badge-count", name: "Count Badge", category: "Badges", description: "Count number badge", defaults: { ...DEFAULT_PROPS, text: "99+", bgColor: "#ef4444", textColor: "#fff", borderColor: "#ef4444", borderRadius: 50, fontSize: 10, fontWeight: 700, paddingX: 6, paddingY: 2 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: "none", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-block", minWidth: 20, textAlign: "center" }}>{p.text}</span>, html: (p) => `<span class="tv-badge-count">${p.text}</span>`, css: (p) => `.tv-badge-count { background: ${bg(p)}; color: ${p.textColor}; border: none; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-block; min-width: 20px; text-align: center; }`, tailwind: (p) => `<span class="bg-[${p.bgColor}] text-white rounded-full px-1.5 py-0.5 text-[${p.fontSize}px] font-bold min-w-[20px] text-center">${p.text}</span>` },

  // ═════ MORE INPUTS (6) ═════
  { id: "input-rounded", name: "Rounded Input", category: "Inputs", description: "Fully rounded input", defaults: { ...DEFAULT_PROPS, text: "Search...", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 50, fontSize: 14, paddingX: 20, paddingY: 10 }, controls: COMMON_CONTROLS, render: (p) => <input type="text" placeholder={p.text} style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, outline: "none", width: 200 }} />, html: (p) => `<input type="text" class="tv-in-rounded" placeholder="${p.text}" />`, css: (p) => `.tv-in-rounded { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; outline: none; width: 100%; }`, tailwind: (p) => `<input type="text" placeholder="${p.text}" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-full px-5 py-2 outline-none w-full" />` },
  { id: "input-underlined", name: "Underlined Input", category: "Inputs", description: "Minimal underline only", defaults: { ...DEFAULT_PROPS, text: "Enter name", bgColor: "transparent", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 0, fontSize: 14, paddingX: 0, paddingY: 8 }, controls: COMMON_CONTROLS, render: (p) => <input type="text" placeholder={p.text} style={{ background: "transparent", color: p.textColor, border: "none", borderBottom: `2px solid ${p.borderColor}`, borderRadius: 0, padding: pad(p), fontSize: p.fontSize, outline: "none", width: 200 }} />, html: (p) => `<input type="text" class="tv-in-underlined" placeholder="${p.text}" />`, css: (p) => `.tv-in-underlined { background: transparent; color: ${p.textColor}; border: none; border-bottom: 2px solid ${p.borderColor}; padding: ${pad(p)}; font-size: ${p.fontSize}px; outline: none; width: 100%; }`, tailwind: (p) => `<input type="text" placeholder="${p.text}" class="bg-transparent text-[${p.textColor}] border-0 border-b-2 border-[${p.borderColor}] px-0 py-2 outline-none w-full" />` },
  { id: "input-floating", name: "Floating Label", category: "Inputs", description: "Input with floating label", defaults: { ...DEFAULT_PROPS, text: "Email", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 8, fontSize: 14, paddingX: 16, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative" }}><label style={{ position: "absolute", top: -8, left: 12, background: bg(p), padding: "0 4px", fontSize: 10, color: p.borderColor, fontWeight: 600 }}>{p.text}</label><input type="text" placeholder="" style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, outline: "none", width: 200 }} /></div>, html: (p) => `<div class="tv-in-floating"><label>${p.text}</label><input type="text" /></div>`, css: (p) => `.tv-in-floating { position: relative; }\n.tv-in-floating label { position: absolute; top: -8px; left: 12px; background: ${bg(p)}; padding: 0 4px; font-size: 10px; color: ${p.borderColor}; font-weight: 600; }\n.tv-in-floating input { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; outline: none; width: 100%; }`, tailwind: (p) => `<div class="relative"><label class="absolute -top-2 left-3 bg-[${p.bgColor}] px-1 text-[10px] text-[${p.borderColor}] font-semibold">${p.text}</label><input type="text" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-3 outline-none w-full" /></div>` },
  { id: "input-icon-left", name: "Icon Left Input", category: "Inputs", description: "Input with left icon", defaults: { ...DEFAULT_PROPS, text: "Search...", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 8, fontSize: 14, paddingX: 16, paddingY: 10 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14 }}>🔍</span><input type="text" placeholder={p.text} style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: `${p.paddingY}px ${p.paddingX}px ${p.paddingY}px 36px`, fontSize: p.fontSize, outline: "none", width: 200 }} /></div>, html: (p) => `<div class="tv-in-icon"><span>🔍</span><input type="text" placeholder="${p.text}" /></div>`, css: (p) => `.tv-in-icon { position: relative; display: inline-block; }\n.tv-in-icon span { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); }\n.tv-in-icon input { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${p.paddingY}px ${p.paddingX}px ${p.paddingY}px 36px; outline: none; width: 100%; }`, tailwind: (p) => `<div class="relative"><span class="absolute left-3 top-1/2 -translate-y-1/2">🔍</span><input type="text" placeholder="${p.text}" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] pl-9 pr-4 py-2 outline-none w-full" /></div>` },
  { id: "input-password", name: "Password Input", category: "Inputs", description: "Password field with toggle", defaults: { ...DEFAULT_PROPS, text: "••••••••", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#45475a", borderRadius: 8, fontSize: 14, paddingX: 16, paddingY: 10 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><input type="password" placeholder="Password" style={{ background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, outline: "none", width: 200 }} /><span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", cursor: "pointer", fontSize: 14 }}>👁️</span></div>, html: (p) => `<div class="tv-in-pass"><input type="password" placeholder="Password" /><span>👁️</span></div>`, css: (p) => `.tv-in-pass { position: relative; display: inline-block; }\n.tv-in-pass input { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; outline: none; width: 100%; }\n.tv-in-pass span { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; }`, tailwind: (p) => `<div class="relative"><input type="password" placeholder="Password" class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] rounded-[${p.borderRadius}px] px-4 py-2 outline-none w-full" /><span class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">👁️</span></div>` },
  { id: "input-switch", name: "Switch Toggle", category: "Inputs", description: "Toggle switch input", defaults: { ...DEFAULT_PROPS, text: "Notifications", bgColor: "#6366f1", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 20, fontSize: 14, fontWeight: 500, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</span><div style={{ width: 48, height: 26, background: bg(p), borderRadius: p.borderRadius, position: "relative", cursor: "pointer" }}><div style={{ position: "absolute", top: 3, right: 3, width: 20, height: 20, background: "#fff", borderRadius: "50%", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} /></div></div>, html: (p) => `<label class="tv-in-switch"><span>${p.text}</span><div class="tv-switch-track"><div class="tv-switch-knob"></div></div></label>`, css: (p) => `.tv-in-switch { display: flex; align-items: center; gap: 12px; color: ${p.textColor}; }\n.tv-switch-track { width: 48px; height: 26px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; position: relative; cursor: pointer; }\n.tv-switch-knob { position: absolute; top: 3px; right: 3px; width: 20px; height: 20px; background: #fff; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }`, tailwind: (p) => `<label class="flex items-center gap-3"><span class="text-[${p.textColor}]">${p.text}</span><div class="w-12 h-6 bg-[${p.bgColor}] rounded-full relative cursor-pointer"><div class="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow"></div></div></label>` },

  // ═════ MORE AVATARS (6) ═════
  { id: "avatar-ring", name: "Ring Avatar", category: "Avatars", description: "Avatar with gradient ring", defaults: { ...DEFAULT_PROPS, text: "JS", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 50, fontSize: 18, fontWeight: 700, paddingX: 0, paddingY: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ padding: 3, background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: "50%" }}><div style={{ width: 60, height: 60, background: bg(p), color: p.textColor, borderRadius: "50%", fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.text}</div></div>, html: (p) => `<div class="tv-av-ring"><div class="tv-av-ring-inner">${p.text}</div></div>`, css: (p) => `.tv-av-ring { padding: 3px; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: 50%; display: inline-block; }\n.tv-av-ring-inner { width: 60px; height: 60px; background: ${bg(p)}; color: ${p.textColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-full p-0.5 inline-block"><div class="w-14 h-14 bg-[${p.bgColor}] text-white rounded-full flex items-center justify-center font-bold">${p.text}</div></div>` },
  { id: "avatar-status", name: "Status Avatar", category: "Avatars", description: "Avatar with online status", defaults: { ...DEFAULT_PROPS, text: "AB", bgColor: "#10b981", textColor: "#fff", borderColor: "#10b981", borderRadius: 50, fontSize: 18, fontWeight: 700, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><div style={{ width: 60, height: 60, background: bg(p), color: p.textColor, borderRadius: "50%", fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.text}</div><div style={{ position: "absolute", bottom: 2, right: 2, width: 14, height: 14, background: "#22c55e", border: "2px solid #0f172a", borderRadius: "50%" }} /></div>, html: (p) => `<div class="tv-av-status"><div class="tv-av-s-inner">${p.text}</div><span class="tv-av-dot"></span></div>`, css: (p) => `.tv-av-status { position: relative; display: inline-block; }\n.tv-av-s-inner { width: 60px; height: 60px; background: ${bg(p)}; color: ${p.textColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }\n.tv-av-dot { position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; background: #22c55e; border: 2px solid #0f172a; border-radius: 50%; }`, tailwind: (p) => `<div class="relative inline-block"><div class="w-14 h-14 bg-[${p.bgColor}] text-white rounded-full flex items-center justify-center font-bold">${p.text}</div><span class="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-[#0f172a] rounded-full"></span></div>` },
  { id: "avatar-group", name: "Avatar Group", category: "Avatars", description: "Stacked avatar group", defaults: { ...DEFAULT_PROPS, text: "+5", bgColor: "#6366f1", textColor: "#fff", borderColor: "#0f172a", borderRadius: 50, fontSize: 12, fontWeight: 700, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex" }}><div style={{ width: 40, height: 40, background: "#ef4444", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, border: `2px solid ${p.borderColor}`, marginLeft: -8 }}>A</div><div style={{ width: 40, height: 40, background: "#3b82f6", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, border: `2px solid ${p.borderColor}`, marginLeft: -8 }}>B</div><div style={{ width: 40, height: 40, background: bg(p), color: p.textColor, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight, border: `2px solid ${p.borderColor}`, marginLeft: -8 }}>{p.text}</div></div>, html: (p) => `<div class="tv-av-group"><span>A</span><span>B</span><span class="tv-av-more">${p.text}</span></div>`, css: (p) => `.tv-av-group { display: flex; }\n.tv-av-group span { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 12px; font-weight: 700; border: 2px solid ${p.borderColor}; margin-left: -8px; }\n.tv-av-group span:first-child { margin-left: 0; background: #ef4444; }\n.tv-av-group span:nth-child(2) { background: #3b82f6; }\n.tv-av-more { background: ${bg(p)}; }`, tailwind: (p) => `<div class="flex"><span class="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-[${p.borderColor}] -ml-2 first:ml-0">A</span><span class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-[${p.borderColor}] -ml-2">B</span><span class="w-10 h-10 bg-[${p.bgColor}] text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-[${p.borderColor}] -ml-2">${p.text}</span></div>` },
  { id: "avatar-xl", name: "Large Avatar", category: "Avatars", description: "Large avatar 80px", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#8b5cf6", textColor: "#fff", borderColor: "#8b5cf6", borderRadius: 50, fontSize: 24, fontWeight: 700, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 80, height: 80, background: bg(p), color: p.textColor, borderRadius: "50%", fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.text}</div>, html: (p) => `<div class="tv-av-xl">${p.text}</div>`, css: (p) => `.tv-av-xl { width: 80px; height: 80px; background: ${bg(p)}; color: ${p.textColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="w-20 h-20 bg-[${p.bgColor}] text-white rounded-full flex items-center justify-center text-2xl font-bold">${p.text}</div>` },
  { id: "avatar-rounded-rect", name: "Rounded Rect Avatar", category: "Avatars", description: "Rounded rectangle avatar", defaults: { ...DEFAULT_PROPS, text: "AB", bgColor: "#f59e0b", textColor: "#fff", borderColor: "#f59e0b", borderRadius: 16, fontSize: 18, fontWeight: 700, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 60, height: 60, background: bg(p), color: p.textColor, borderRadius: p.borderRadius, fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.text}</div>, html: (p) => `<div class="tv-av-rr">${p.text}</div>`, css: (p) => `.tv-av-rr { width: 60px; height: 60px; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="w-14 h-14 bg-[${p.bgColor}] text-white rounded-[${p.borderRadius}px] flex items-center justify-center font-bold">${p.text}</div>` },
  { id: "avatar-gradient", name: "Gradient Avatar", category: "Avatars", description: "Gradient background avatar", defaults: { ...DEFAULT_PROPS, text: "XY", textColor: "#fff", borderRadius: 50, fontSize: 18, fontWeight: 700, paddingX: 0, paddingY: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 60, height: 60, background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: p.textColor, borderRadius: "50%", fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.text}</div>, html: (p) => `<div class="tv-av-grad">${p.text}</div>`, css: (p) => `.tv-av-grad { width: 60px; height: 60px; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="w-14 h-14 bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded-full flex items-center justify-center font-bold">${p.text}</div>` },

  // ═════ MORE TOOLTIPS (6) ═════
  { id: "tooltip-right", name: "Tooltip Right", category: "Tooltips", description: "Tooltip on right side", defaults: { ...DEFAULT_PROPS, text: "Click to save", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#1e1e2e", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block", paddingRight: 100 }}><button style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover</button><div style={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}</div></div>, html: (p) => `<div class="tv-tt-right"><button>Hover</button><span class="tv-tt-r-text">${p.text}</span></div>`, css: (p) => `.tv-tt-right { position: relative; display: inline-block; }\n.tv-tt-r-text { position: absolute; top: 50%; right: -10px; transform: translate(100%, -50%); background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; opacity: 0; transition: opacity 0.2s; }\n.tv-tt-right:hover .tv-tt-r-text { opacity: 1; }`, tailwind: (p) => `<div class="relative group inline-block"><button class="bg-indigo-500 text-white rounded-lg px-4 py-2">Hover</button><span class="absolute top-1/2 left-full ml-2 -translate-y-1/2 bg-[${p.bgColor}] text-[${p.textColor}] rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span></div>` },
  { id: "tooltip-left", name: "Tooltip Left", category: "Tooltips", description: "Tooltip on left side", defaults: { ...DEFAULT_PROPS, text: "Settings", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#1e1e2e", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block", paddingLeft: 100 }}><div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}</div><button style={{ background: "#10b981", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover</button></div>, html: (p) => `<div class="tv-tt-left"><span class="tv-tt-l-text">${p.text}</span><button>Hover</button></div>`, css: (p) => `.tv-tt-left { position: relative; display: inline-block; }\n.tv-tt-l-text { position: absolute; top: 50%; right: 100%; transform: translateY(-50%); margin-right: 8px; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; opacity: 0; transition: opacity 0.2s; }\n.tv-tt-left:hover .tv-tt-l-text { opacity: 1; }`, tailwind: (p) => `<div class="relative group inline-block"><span class="absolute top-1/2 right-full -translate-y-1/2 mr-2 bg-[${p.bgColor}] text-[${p.textColor}] rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span><button class="bg-emerald-500 text-white rounded-lg px-4 py-2">Hover</button></div>` },
  { id: "tooltip-glow", name: "Glow Tooltip", category: "Tooltips", description: "Tooltip with glow effect", defaults: { ...DEFAULT_PROPS, text: "Glow tip!", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 8, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 6, shadowColor: "#6366f1", shadowBlur: 15 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block", paddingTop: 50 }}><button style={{ background: "#8b5cf6", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover</button><div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap", boxShadow: `0 0 15px ${p.shadowColor}80` }}>{p.text}</div></div>, html: (p) => `<div class="tv-tt-glow"><button>Hover</button><span class="tv-tt-g-text">${p.text}</span></div>`, css: (p) => `.tv-tt-glow { position: relative; display: inline-block; }\n.tv-tt-g-text { position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%); background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; box-shadow: 0 0 15px ${p.shadowColor}80; opacity: 0; transition: opacity 0.2s; }\n.tv-tt-glow:hover .tv-tt-g-text { opacity: 1; }`, tailwind: (p) => `<div class="relative group"><button class="bg-violet-500 text-white rounded-lg px-4 py-2">Hover</button><span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[${p.bgColor}] text-white rounded px-3 py-1.5 text-xs shadow-[0_0_15px_${p.shadowColor}80] opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span></div>` },
  { id: "tooltip-arrow", name: "Arrow Tooltip", category: "Tooltips", description: "Tooltip with arrow pointer", defaults: { ...DEFAULT_PROPS, text: "With arrow", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#0f172a", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block", paddingTop: 50 }}><button style={{ background: "#0f766e", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover</button><div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}<div style={{ position: "absolute", bottom: -5, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `5px solid ${bg(p)}` }} /></div></div>, html: (p) => `<div class="tv-tt-arrow"><button>Hover</button><span class="tv-tt-a-text">${p.text}</span></div>`, css: (p) => `.tv-tt-arrow { position: relative; display: inline-block; }\n.tv-tt-a-text { position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%); background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; opacity: 0; transition: opacity 0.2s; }\n.tv-tt-a-text::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 5px solid transparent; border-top-color: ${bg(p)}; }\n.tv-tt-arrow:hover .tv-tt-a-text { opacity: 1; }`, tailwind: (p) => `<div class="relative group"><button class="bg-teal-600 text-white rounded-lg px-4 py-2">Hover</button><span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[${p.bgColor}] text-[${p.textColor}] rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span></div>` },
  { id: "tooltip-gradient", name: "Gradient Tooltip", category: "Tooltips", description: "Gradient background tooltip", defaults: { ...DEFAULT_PROPS, text: "Gradient tip", textColor: "#fff", borderRadius: 8, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 6, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block", paddingTop: 50 }}><button style={{ background: "#0f172a", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover</button><div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}</div></div>, html: (p) => `<div class="tv-tt-grad"><button>Hover</button><span class="tv-tt-gr-text">${p.text}</span></div>`, css: (p) => `.tv-tt-grad { position: relative; display: inline-block; }\n.tv-tt-gr-text { position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; opacity: 0; transition: opacity 0.2s; }\n.tv-tt-grad:hover .tv-tt-gr-text { opacity: 1; }`, tailwind: (p) => `<div class="relative group"><button class="bg-slate-900 text-white rounded-lg px-4 py-2">Hover</button><span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded px-3 py-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span></div>` },
  { id: "tooltip-dark", name: "Dark Tooltip", category: "Tooltips", description: "Dark themed tooltip", defaults: { ...DEFAULT_PROPS, text: "Dark tip", bgColor: "#000", textColor: "#fff", borderColor: "#000", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block", paddingTop: 50 }}><button style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Hover</button><div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}</div></div>, html: (p) => `<div class="tv-tt-dark"><button>Hover</button><span class="tv-tt-d-text">${p.text}</span></div>`, css: (p) => `.tv-tt-dark { position: relative; display: inline-block; }\n.tv-tt-d-text { position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%); background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; opacity: 0; transition: opacity 0.2s; }\n.tv-tt-dark:hover .tv-tt-d-text { opacity: 1; }`, tailwind: (p) => `<div class="relative group"><button class="bg-indigo-500 text-white rounded-lg px-4 py-2">Hover</button><span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${p.text}</span></div>` },

  // ═════ MORE PROGRESS (6) ═════
  { id: "progress-gradient", name: "Gradient Progress", category: "Progress", description: "Gradient progress bar", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 20, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 8, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden" }}><div style={{ width: "65%", height: "100%", background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius }} /></div>, html: () => `<div class="tv-pg-grad"><div></div></div>`, css: (p) => `.tv-pg-grad { width: 200px; height: 8px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-pg-grad div { width: 65%; height: 100%; background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; }`, tailwind: (p) => `<div class="w-48 h-2 bg-[${p.bgColor}] rounded-full overflow-hidden"><div class="h-full w-2/3 bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-full"></div></div>` },
  { id: "progress-animated", name: "Animated Progress", category: "Progress", description: "Animated striped progress", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 12, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden" }}><div style={{ width: "60%", height: "100%", background: p.borderColor, borderRadius: p.borderRadius, backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%)`, backgroundSize: "20px 20px", animation: "tv-progress-stripes 1s linear infinite" }} /></div>, html: () => `<div class="tv-pg-anim"><div></div></div>`, css: (p) => `.tv-pg-anim { width: 200px; height: 12px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-pg-anim div { width: 60%; height: 100%; background: ${p.borderColor}; background-image: linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%); background-size: 20px 20px; animation: tv-progress-stripes 1s linear infinite; }\n@keyframes tv-progress-stripes { to { background-position: 20px 0; } }`, tailwind: (p) => `<div class="w-48 h-3 bg-[${p.bgColor}] rounded overflow-hidden"><div class="h-full w-3/5 bg-[${p.borderColor}] rounded"></div></div>` },
  { id: "progress-thin", name: "Thin Progress", category: "Progress", description: "Thin progress line", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 2 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 4, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden" }}><div style={{ width: "70%", height: "100%", background: p.borderColor, borderRadius: p.borderRadius }} /></div>, html: () => `<div class="tv-pg-thin"><div></div></div>`, css: (p) => `.tv-pg-thin { width: 200px; height: 4px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-pg-thin div { width: 70%; height: 100%; background: ${p.borderColor}; }`, tailwind: (p) => `<div class="w-48 h-1 bg-[${p.bgColor}] rounded-full overflow-hidden"><div class="h-full w-3/4 bg-[${p.borderColor}] rounded-full"></div></div>` },
  { id: "progress-circular", name: "Circular Progress", category: "Progress", description: "Circular progress ring", defaults: { ...DEFAULT_PROPS, text: "70%", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 50 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 80, height: 80, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="80" height="80" style={{ position: "absolute", transform: "rotate(-90deg)" }}><circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="6" /><circle cx="40" cy="40" r="34" fill="none" stroke={p.borderColor} strokeWidth="6" strokeDasharray="213.6" strokeDashoffset="64.08" strokeLinecap="round" /></svg><span style={{ fontSize: 14, fontWeight: 700, color: p.textColor }}>{p.text}</span></div>, html: (p) => `<div class="tv-pg-circ"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="${p.borderColor}" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="64.08" stroke-linecap="round"/></svg><span>${p.text}</span></div>`, css: (p) => `.tv-pg-circ { width: 80px; height: 80px; position: relative; display: flex; align-items: center; justify-content: center; }\n.tv-pg-circ svg { position: absolute; transform: rotate(-90deg); }\n.tv-pg-circ span { font-size: 14px; font-weight: 700; color: ${p.textColor}; }`, tailwind: (p) => `<div class="relative w-20 h-20 flex items-center justify-center"><svg class="absolute -rotate-90" viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="${p.borderColor}" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="64.08" stroke-linecap="round"/></svg><span class="text-sm font-bold text-[${p.textColor}]">${p.text}</span></div>` },
  { id: "progress-segments", name: "Segmented Progress", category: "Progress", description: "Segmented progress bar", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", gap: 4, width: 200 }}>{[true, true, true, true, false].map((filled, i) => <div key={i} style={{ flex: 1, height: 8, background: filled ? p.borderColor : bg(p), borderRadius: p.borderRadius }} />)}</div>, html: () => `<div class="tv-pg-seg"><span></span><span></span><span></span><span></span><span></span></div>`, css: (p) => `.tv-pg-seg { display: flex; gap: 4px; width: 200px; }\n.tv-pg-seg span { flex: 1; height: 8px; border-radius: ${p.borderRadius}px; }\n.tv-pg-seg span:nth-child(-n+4) { background: ${p.borderColor}; }\n.tv-pg-seg span:nth-child(5) { background: ${bg(p)}; }`, tailwind: (p) => `<div class="flex gap-1 w-48"><span class="flex-1 h-2 bg-[${p.borderColor}] rounded"></span><span class="flex-1 h-2 bg-[${p.borderColor}] rounded"></span><span class="flex-1 h-2 bg-[${p.borderColor}] rounded"></span><span class="flex-1 h-2 bg-[${p.borderColor}] rounded"></span><span class="flex-1 h-2 bg-[${p.bgColor}] rounded"></span></div>` },
  { id: "progress-glow", name: "Glow Progress", category: "Progress", description: "Progress with glow effect", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#0f172a", borderColor: "#6366f1", borderRadius: 20, shadowColor: "#6366f1", shadowBlur: 15 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 8, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden" }}><div style={{ width: "55%", height: "100%", background: p.borderColor, borderRadius: p.borderRadius, boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}` }} /></div>, html: () => `<div class="tv-pg-glow"><div></div></div>`, css: (p) => `.tv-pg-glow { width: 200px; height: 8px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-pg-glow div { width: 55%; height: 100%; background: ${p.borderColor}; border-radius: ${p.borderRadius}px; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}; }`, tailwind: (p) => `<div class="w-48 h-2 bg-[${p.bgColor}] rounded-full overflow-hidden"><div class="h-full w-1/2 bg-[${p.borderColor}] rounded-full shadow-[0_0_15px_${p.shadowColor}]"></div></div>` },

  // ═════ MORE NAVBAR (6) ═════
  { id: "navbar-centered", name: "Centered Navbar", category: "Navbar", description: "Logo centered navbar", defaults: { ...DEFAULT_PROPS, text: "Home  About  BRAND  Services  Contact", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", alignItems: "center", justifyContent: "center", gap: 24, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-center">${p.text}</nav>`, css: (p) => `.tv-nav-center { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; align-items: center; justify-content: center; gap: 24px; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 flex items-center justify-center gap-6">${p.text}</nav>` },
  { id: "navbar-split", name: "Split Navbar", category: "Navbar", description: "Logo left, links right", defaults: { ...DEFAULT_PROPS, text: "Brand    Home  About  Contact", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", justifyContent: "space-between", maxWidth: 350 }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-split">${p.text}</nav>`, css: (p) => `.tv-nav-split { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; justify-content: space-between; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 flex justify-between px-6">${p.text}</nav>` },
  { id: "navbar-gradient", name: "Gradient Navbar", category: "Navbar", description: "Gradient background navbar", defaults: { ...DEFAULT_PROPS, text: "Brand  Home  Features  Login", textColor: "#fff", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#8b5cf6" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, color: p.textColor, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-grad">${p.text}</nav>`, css: (p) => `.tv-nav-grad { background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; padding: ${pad(p)}; display: flex; gap: 24px; }`, tailwind: (p) => `<nav class="bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white py-3 px-6 flex gap-6">${p.text}</nav>` },
  { id: "navbar-transparent", name: "Transparent Navbar", category: "Navbar", description: "Transparent overlay navbar", defaults: { ...DEFAULT_PROPS, text: "Brand  Home  About  Login", bgColor: "rgba(0,0,0,0.3)", textColor: "#fff", borderColor: "rgba(255,255,255,0.1)", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, backdropFilter: "blur(8px)", maxWidth: 350 }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-trans">${p.text}</nav>`, css: (p) => `.tv-nav-trans { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; backdrop-filter: blur(8px); display: flex; gap: 24px; }`, tailwind: (p) => `<nav class="bg-black/30 backdrop-blur-sm text-white border-b border-white/10 py-3 px-6 flex gap-6">${p.text}</nav>` },
  { id: "navbar-dark", name: "Dark Navbar", category: "Navbar", description: "Dark navbar with logo", defaults: { ...DEFAULT_PROPS, text: "🏠 HomeBrand  About  Contact  Login", bgColor: "#000", textColor: "#fff", borderColor: "#1a1a1a", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 16 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-dark">${p.text}</nav>`, css: (p) => `.tv-nav-dark { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; gap: 24px; }`, tailwind: (p) => `<nav class="bg-black text-white border-b border-[${p.borderColor}] py-4 px-6 flex gap-6">${p.text}</nav>` },
  { id: "navbar-rounded", name: "Rounded Navbar", category: "Navbar", description: "Floating rounded navbar", defaults: { ...DEFAULT_PROPS, text: "Brand  Home  Features  Login", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 50, fontSize: 14, fontWeight: 600, paddingX: 24, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 20, maxWidth: 350, justifyContent: "center", alignItems: "center" }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-rounded">${p.text}</nav>`, css: (p) => `.tv-nav-rounded { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; display: flex; gap: 20px; justify-content: center; align-items: center; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-full px-6 py-3 flex gap-5 justify-center items-center">${p.text}</nav>` },

  // ═════ MORE HERO (6) ═════
  { id: "hero-dark", name: "Dark Hero", category: "Hero", description: "Dark themed hero section", defaults: { ...DEFAULT_PROPS, text: "Build Faster\n\nShip products 10x faster with our platform.\n\nGet Started  Learn More", bgColor: "#0a0a0f", textColor: "#e2e8f0", borderRadius: 0, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 48 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<section class="tv-hero-dark">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-dark { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] px-10 py-12 text-center">${p.text}</section>` },
  { id: "hero-gradient", name: "Gradient Hero", category: "Hero", description: "Gradient background hero", defaults: { ...DEFAULT_PROPS, text: "Create Amazing\n\nBeautiful UI in minutes.\n\nStart Free", textColor: "#fff", borderRadius: 0, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 48, useGradient: true, gradientFrom: "#667eea", gradientTo: "#764ba2" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<section class="tv-hero-grad">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-grad { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; }`, tailwind: (p) => `<section class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white px-10 py-12 text-center">${p.text}</section>` },
  { id: "hero-glass", name: "Glass Hero", category: "Hero", description: "Glassmorphism hero", defaults: { ...DEFAULT_PROPS, text: "Glass Effect\n\nModern glassmorphism design.\n\nExplore", bgColor: "rgba(255,255,255,0.1)", textColor: "#fff", borderColor: "rgba(255,255,255,0.2)", borderRadius: 24, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 48 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(16px)", textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<section class="tv-hero-glass">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-glass { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; backdrop-filter: blur(16px); text-align: center; }`, tailwind: (p) => `<section class="bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-3xl px-10 py-12 text-center">${p.text}</section>` },
  { id: "hero-minimal", name: "Minimal Hero", category: "Hero", description: "Clean minimal hero", defaults: { ...DEFAULT_PROPS, text: "Simple.\n\nLess is more.\n\nGet Started", bgColor: "#fff", textColor: "#0f172a", borderColor: "#e2e8f0", borderRadius: 0, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 48 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<section class="tv-hero-min">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-min { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; }`, tailwind: (p) => `<section class="bg-white text-[${p.textColor}] px-10 py-12 text-center">${p.text}</section>` },
  { id: "hero-neon", name: "Neon Hero", category: "Hero", description: "Cyberpunk neon hero", defaults: { ...DEFAULT_PROPS, text: "FUTURE\n\nNext-gen experience.\n\nEnter", bgColor: "#050510", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: 0, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 48, shadowColor: "#22d3ee", shadowBlur: 30 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap", boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}30`, border: `1px solid ${p.borderColor}30` }}>{p.text}</div>, html: (p) => `<section class="tv-hero-neon">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-neon { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}30; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}]/30 px-10 py-12 text-center shadow-[0_0_30px_${p.shadowColor}30]">${p.text}</section>` },
  { id: "hero-split-dark", name: "Split Dark Hero", category: "Hero", description: "Split dark hero with accent", defaults: { ...DEFAULT_PROPS, text: "Powerful Tools\n\nEverything you need in one place.\n\nStart Now", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 0, fontSize: 15, fontWeight: 600, paddingX: 32, paddingY: 40, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#8b5cf6" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350, whiteSpace: "pre-wrap", borderLeft: `4px solid ${p.borderColor}` }}><div style={{ flex: 1 }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-split-d">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-split-d { background: ${bg(p)}; color: ${p.textColor}; border-left: 4px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] border-l-4 border-[${p.borderColor}] px-8 py-10">${p.text}</section>` },

  // ═════ MORE OVERLAY (6) ═════
  { id: "modal-dark", name: "Dark Modal", category: "Overlay", description: "Dark themed modal dialog", defaults: { ...DEFAULT_PROPS, text: "Delete Account?\n\nThis action cannot be undone.\n\nCancel  Delete", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 16, shadowBlur: 40, shadowColor: "#000" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 280, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-modal-dark">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-modal-dark { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 shadow-2xl">${p.text}</div>` },
  { id: "modal-glass", name: "Glass Modal", category: "Overlay", description: "Glassmorphism modal", defaults: { ...DEFAULT_PROPS, text: "Settings\n\nCustomize your experience.\n\nSave", bgColor: "rgba(255,255,255,0.1)", textColor: "#fff", borderColor: "rgba(255,255,255,0.2)", borderRadius: 20, shadowBlur: 40, shadowColor: "#000" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(20px)", boxShadow: shadow(p), maxWidth: 280, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-modal-glass">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-modal-glass { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; backdrop-filter: blur(20px); box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-[${p.borderRadius}px] p-6 shadow-2xl">${p.text}</div>` },
  { id: "toast-error", name: "Error Toast", category: "Overlay", description: "Error toast notification", defaults: { ...DEFAULT_PROPS, text: "❌ Failed to save changes", bgColor: "#fef2f2", textColor: "#991b1b", borderColor: "#ef4444", borderRadius: 12, paddingX: 20, paddingY: 14, shadowY: 8, shadowBlur: 24 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderLeft: `4px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 280 }}>{p.text}</div>, html: (p) => `<div class="tv-toast-error">${p.text}</div>`, css: (p) => `.tv-toast-error { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-left: 4px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] border-l-4 rounded-[${p.borderRadius}px] px-5 py-3 shadow-lg">${p.text}</div>` },
  { id: "toast-info", name: "Info Toast", category: "Overlay", description: "Info toast notification", defaults: { ...DEFAULT_PROPS, text: "ℹ️ New update available", bgColor: "#eff6ff", textColor: "#1e40af", borderColor: "#3b82f6", borderRadius: 12, paddingX: 20, paddingY: 14, shadowY: 8, shadowBlur: 24 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderLeft: `4px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 280 }}>{p.text}</div>, html: (p) => `<div class="tv-toast-info">${p.text}</div>`, css: (p) => `.tv-toast-info { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-left: 4px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] border-l-4 rounded-[${p.borderRadius}px] px-5 py-3 shadow-lg">${p.text}</div>` },
  { id: "toast-dark", name: "Dark Toast", category: "Overlay", description: "Dark themed toast", defaults: { ...DEFAULT_PROPS, text: "✅ Settings saved", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#a6e3a1", borderRadius: 12, paddingX: 20, paddingY: 14, shadowY: 8, shadowBlur: 24 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}30`, borderLeft: `4px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 280 }}>{p.text}</div>, html: (p) => `<div class="tv-toast-dark">${p.text}</div>`, css: (p) => `.tv-toast-dark { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-left: 4px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}]/30 border-l-4 rounded-[${p.borderRadius}px] px-5 py-3 shadow-lg">${p.text}</div>` },
  { id: "modal-confirm", name: "Confirm Modal", category: "Overlay", description: "Confirmation dialog", defaults: { ...DEFAULT_PROPS, text: "Save Changes?\n\nYour unsaved changes will be lost.\n\nDiscard  Save", bgColor: "#fff", textColor: "#1e293b", borderColor: "#e2e8f0", borderRadius: 16, shadowBlur: 40, shadowColor: "#000" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: shadow(p), maxWidth: 280, whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-modal-confirm">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-modal-confirm { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: ${shadow(p)}; }`, tailwind: (p) => `<div class="bg-white text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-6 shadow-2xl">${p.text}</div>` },

  // ═════ MORE STATES (6) ═════
  { id: "state-loading", name: "Loading State", category: "States", description: "Loading skeleton state", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#e2e8f0", borderColor: "#cbd5e1", borderRadius: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, display: "flex", flexDirection: "column", gap: 8 }}><div style={{ width: "100%", height: 12, background: bg(p), borderRadius: p.borderRadius, animation: "tv-shimmer-state 1.5s infinite" }} /><div style={{ width: "80%", height: 12, background: bg(p), borderRadius: p.borderRadius, animation: "tv-shimmer-state 1.5s 0.2s infinite" }} /><div style={{ width: "60%", height: 12, background: bg(p), borderRadius: p.borderRadius, animation: "tv-shimmer-state 1.5s 0.4s infinite" }} /></div>, html: () => `<div class="tv-state-loading"><div></div><div></div><div></div></div>`, css: (p) => `.tv-state-loading { display: flex; flex-direction: column; gap: 8px; }\n.tv-state-loading div { height: 12px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; animation: tv-shimmer-state 1.5s infinite; }\n.tv-state-loading div:nth-child(1) { width: 100%; }\n.tv-state-loading div:nth-child(2) { width: 80%; animation-delay: 0.2s; }\n.tv-state-loading div:nth-child(3) { width: 60%; animation-delay: 0.4s; }\n@keyframes tv-shimmer-state { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`, tailwind: (p) => `<div class="flex flex-col gap-2"><div class="w-full h-3 bg-[${p.bgColor}] rounded animate-pulse"></div><div class="w-4/5 h-3 bg-[${p.bgColor}] rounded animate-pulse"></div><div class="w-3/5 h-3 bg-[${p.bgColor}] rounded animate-pulse"></div></div>` },
  { id: "state-error", name: "Error State", category: "States", description: "Error state display", defaults: { ...DEFAULT_PROPS, text: "❌\n\nSomething went wrong\n\nPlease try again later", bgColor: "transparent", textColor: "#ef4444", borderColor: "#ef4444", borderRadius: 8, paddingX: 32, paddingY: 40, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", padding: pad(p), whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-state-error">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-state-error { color: ${p.textColor}; font-size: ${p.fontSize}px; text-align: center; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="text-[${p.textColor}] text-center py-10">${p.text}</div>` },
  { id: "state-success", name: "Success State", category: "States", description: "Success state display", defaults: { ...DEFAULT_PROPS, text: "✅\n\nAll done!\n\nYour changes have been saved", bgColor: "transparent", textColor: "#10b981", borderColor: "#10b981", borderRadius: 8, paddingX: 32, paddingY: 40, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", padding: pad(p), whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-state-success">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-state-success { color: ${p.textColor}; font-size: ${p.fontSize}px; text-align: center; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="text-[${p.textColor}] text-center py-10">${p.text}</div>` },
  { id: "state-no-permission", name: "No Permission State", category: "States", description: "Access denied state", defaults: { ...DEFAULT_PROPS, text: "🔒\n\nAccess Denied\n\nYou don't have permission to view this page", bgColor: "transparent", textColor: "#64748b", borderColor: "#64748b", borderRadius: 8, paddingX: 32, paddingY: 40, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", padding: pad(p), whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-state-noperm">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-state-noperm { color: ${p.textColor}; font-size: ${p.fontSize}px; text-align: center; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="text-[${p.textColor}] text-center py-10">${p.text}</div>` },
  { id: "state-not-found", name: "404 State", category: "States", description: "Page not found state", defaults: { ...DEFAULT_PROPS, text: "404\n\nPage Not Found\n\nThe page you're looking for doesn't exist", bgColor: "transparent", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 8, paddingX: 32, paddingY: 40, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", padding: pad(p), whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-state-404">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-state-404 { color: ${p.textColor}; font-size: ${p.fontSize}px; text-align: center; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="text-[${p.textColor}] text-center py-10">${p.text}</div>` },
  { id: "state-maintenance", name: "Maintenance State", category: "States", description: "Under maintenance state", defaults: { ...DEFAULT_PROPS, text: "🔧\n\nUnder Maintenance\n\nWe'll be back soon", bgColor: "transparent", textColor: "#f59e0b", borderColor: "#f59e0b", borderRadius: 8, paddingX: 32, paddingY: 40, fontSize: 14, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", padding: pad(p), whiteSpace: "pre-wrap" }}>{p.text}</div>, html: (p) => `<div class="tv-state-maint">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-state-maint { color: ${p.textColor}; font-size: ${p.fontSize}px; text-align: center; padding: ${pad(p)}; }`, tailwind: (p) => `<div class="text-[${p.textColor}] text-center py-10">${p.text}</div>` },

  // ═════ MORE DIVIDERS (6) ═════
  { id: "divider-gradient", name: "Gradient Divider", category: "Dividers", description: "Gradient line divider", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 2, background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius }} />, html: () => `<div class="tv-div-grad"></div>`, css: (p) => `.tv-div-grad { width: 100%; height: 2px; background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}); }`, tailwind: (p) => `<div class="w-full h-0.5 bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}]"></div>` },
  { id: "divider-dashed", name: "Dashed Divider", category: "Dividers", description: "Dashed line", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#64748b", borderRadius: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 2, borderBottom: `2px dashed ${p.borderColor}` }} />, html: () => `<div class="tv-div-dashed"></div>`, css: (p) => `.tv-div-dashed { width: 100%; border-bottom: 2px dashed ${p.borderColor}; }`, tailwind: (p) => `<div class="w-full border-b-2 border-dashed border-[${p.borderColor}]"></div>` },
  { id: "divider-dotted", name: "Dotted Divider", category: "Dividers", description: "Dotted line", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#64748b", borderRadius: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 2, borderBottom: `2px dotted ${p.borderColor}` }} />, html: () => `<div class="tv-div-dotted"></div>`, css: (p) => `.tv-div-dotted { width: 100%; border-bottom: 2px dotted ${p.borderColor}; }`, tailwind: (p) => `<div class="w-full border-b-2 border-dotted border-[${p.borderColor}]"></div>` },
  { id: "divider-double", name: "Double Divider", category: "Dividers", description: "Double line divider", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 4, borderBottom: `4px double ${p.borderColor}` }} />, html: () => `<div class="tv-div-double"></div>`, css: (p) => `.tv-div-double { width: 100%; border-bottom: 4px double ${p.borderColor}; }`, tailwind: (p) => `<div class="w-full border-b-[3px] border-double border-[${p.borderColor}]"></div>` },
  { id: "divider-icon", name: "Icon Divider", category: "Dividers", description: "Divider with icon in center", defaults: { ...DEFAULT_PROPS, text: "✨", bgColor: "transparent", textColor: "#6366f1", borderColor: "#e2e8f0", borderRadius: 0, fontSize: 16, fontWeight: 400 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", gap: 12, width: 200 }}><div style={{ flex: 1, height: 1, background: p.borderColor }} /><span style={{ color: p.textColor, fontSize: p.fontSize }}>{p.text}</span><div style={{ flex: 1, height: 1, background: p.borderColor }} /></div>, html: (p) => `<div class="tv-div-icon"><span></span>${p.text}<span></span></div>`, css: (p) => `.tv-div-icon { display: flex; align-items: center; gap: 12px; }\n.tv-div-icon span { flex: 1; height: 1px; background: ${p.borderColor}; }`, tailwind: (p) => `<div class="flex items-center gap-3"><span class="flex-1 h-px bg-[${p.borderColor}]"></span><span class="text-[${p.fontSize}]px]">${p.text}</span><span class="flex-1 h-px bg-[${p.borderColor}]"></span></div>` },
  { id: "divider-thick", name: "Thick Divider", category: "Dividers", description: "Thick gradient bar", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 4, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#8b5cf6" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 4, background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius }} />, html: () => `<div class="tv-div-thick"></div>`, css: (p) => `.tv-div-thick { width: 100%; height: 4px; background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; }`, tailwind: (p) => `<div class="w-full h-1 bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded"></div>` },

  // ═════ MORE CODE (6) ═════
  { id: "code-terminal", name: "Terminal Code", category: "Code", description: "Terminal style code block", defaults: { ...DEFAULT_PROPS, text: "$ npm install\n$ npm run dev\n> Ready on http://localhost:3000", bgColor: "#0d1117", textColor: "#7ee787", borderColor: "#21262d", borderRadius: 12, fontSize: 13, fontWeight: 400, paddingX: 16, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), borderRadius: p.borderRadius, overflow: "hidden", maxWidth: 300 }}><div style={{ background: "#161b22", padding: "8px 12px", display: "flex", gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff6058" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca42" }} /></div><pre style={{ padding: pad(p), color: p.textColor, fontSize: p.fontSize, fontFamily: "monospace", whiteSpace: "pre" }}>{p.text}</pre></div>, html: (p) => `<div class="tv-code-term"><div class="tv-term-bar"><span></span><span></span><span></span></div><pre>${p.text}</pre></div>`, css: (p) => `.tv-code-term { background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-term-bar { background: #161b22; padding: 8px 12px; display: flex; gap: 6px; }\n.tv-term-bar span { width: 10px; height: 10px; border-radius: 50%; }\n.tv-term-bar span:nth-child(1) { background: #ff6058; }\n.tv-term-bar span:nth-child(2) { background: #ffbd2e; }\n.tv-term-bar span:nth-child(3) { background: #28ca42; }\n.tv-code-term pre { padding: ${pad(p)}; color: ${p.textColor}; font-size: ${p.fontSize}px; font-family: monospace; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] rounded-[${p.borderRadius}px] overflow-hidden"><div class="bg-[#161b22] px-3 py-2 flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#ff6058]"></span><span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span><span class="w-2.5 h-2.5 rounded-full bg-[#28ca42]"></span></div><pre class="p-4 text-[${p.textColor}] text-[${p.fontSize}px] font-mono">${p.text}</pre></div>` },
  { id: "code-inline", name: "Inline Code", category: "Code", description: "Inline code snippet", defaults: { ...DEFAULT_PROPS, text: "const x = 42", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 4, fontSize: 13, fontWeight: 400, paddingX: 6, paddingY: 2 }, controls: COMMON_CONTROLS, render: (p) => <code style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontFamily: "monospace" }}>{p.text}</code>, html: (p) => `<code class="tv-code-inline">${p.text}</code>`, css: (p) => `.tv-code-inline { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-family: monospace; }`, tailwind: (p) => `<code class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded px-1.5 py-0.5 text-[${p.fontSize}px] font-mono">${p.text}</code>` },
  { id: "code-dark", name: "Dark Code Block", category: "Code", description: "Dark themed code block", defaults: { ...DEFAULT_PROPS, text: "function hello() {\n  return 'world';\n}", bgColor: "#1a1a2e", textColor: "#e94560", borderColor: "#16213e", borderRadius: 8, fontSize: 13, fontWeight: 400, paddingX: 16, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <pre style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontFamily: "monospace", maxWidth: 300, whiteSpace: "pre" }}>{p.text}</pre>, html: (p) => `<pre class="tv-code-dark">${p.text}</pre>`, css: (p) => `.tv-code-dark { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-family: monospace; }`, tailwind: (p) => `<pre class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-[${p.borderRadius}px] p-4 font-mono">${p.text}</pre>` },
  { id: "code-glow", name: "Glow Code Block", category: "Code", description: "Code block with glow", defaults: { ...DEFAULT_PROPS, text: "console.log('Hello');", bgColor: "#0d1117", textColor: "#58a6ff", borderColor: "#58a6ff", borderRadius: 8, fontSize: 13, fontWeight: 400, paddingX: 16, paddingY: 12, shadowColor: "#58a6ff", shadowBlur: 20 }, controls: COMMON_CONTROLS, render: (p) => <pre style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}30`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontFamily: "monospace", maxWidth: 300, whiteSpace: "pre", boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}20` }}>{p.text}</pre>, html: (p) => `<pre class="tv-code-glow">${p.text}</pre>`, css: (p) => `.tv-code-glow { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-family: monospace; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}20; }`, tailwind: (p) => `<pre class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}]/30 rounded-[${p.borderRadius}px] p-4 font-mono shadow-[0_0_20px_${p.shadowColor}20]">${p.text}</pre>` },
  { id: "code-gradient", name: "Gradient Code Block", category: "Code", description: "Code with gradient border", defaults: { ...DEFAULT_PROPS, text: "import React from 'react';", bgColor: "#0f172a", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 8, fontSize: 13, fontWeight: 400, paddingX: 16, paddingY: 12, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ padding: "2px", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius }}><pre style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius - 2, padding: pad(p), fontSize: p.fontSize, fontFamily: "monospace", whiteSpace: "pre" }}>{p.text}</pre></div>, html: (p) => `<div class="tv-code-grad"><pre>${p.text}</pre></div>`, css: (p) => `.tv-code-grad { padding: 2px; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; }\n.tv-code-grad pre { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius - 2}px; padding: ${pad(p)}; font-family: monospace; }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-[${p.borderRadius}px] p-0.5"><pre class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius - 2}px] p-4 font-mono">${p.text}</pre></div>` },
  { id: "code-window", name: "Code Window", category: "Code", description: "Code with window controls", defaults: { ...DEFAULT_PROPS, text: "<div>Hello</div>", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 8, fontSize: 13, fontWeight: 400, paddingX: 16, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), borderRadius: p.borderRadius, overflow: "hidden", maxWidth: 300 }}><div style={{ background: "#181825", padding: "8px 12px", display: "flex", gap: 6, alignItems: "center" }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f38ba8" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f9e2af" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#a6e3a1" }} /><span style={{ marginLeft: 8, fontSize: 11, color: "#6c7086" }}>code.js</span></div><pre style={{ padding: pad(p), color: p.textColor, fontSize: p.fontSize, fontFamily: "monospace", whiteSpace: "pre" }}>{p.text}</pre></div>, html: (p) => `<div class="tv-code-window"><div class="tv-win-bar"><span></span><span></span><span></span><label>code.js</label></div><pre>${p.text}</pre></div>`, css: (p) => `.tv-code-window { background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-win-bar { background: #181825; padding: 8px 12px; display: flex; gap: 6px; align-items: center; }\n.tv-win-bar span { width: 10px; height: 10px; border-radius: 50%; }\n.tv-win-bar span:nth-child(1) { background: #f38ba8; }\n.tv-win-bar span:nth-child(2) { background: #f9e2af; }\n.tv-win-bar span:nth-child(3) { background: #a6e3a1; }\n.tv-win-bar label { margin-left: 8px; font-size: 11px; color: #6c7086; }\n.tv-code-window pre { padding: ${pad(p)}; color: ${p.textColor}; font-size: ${p.fontSize}px; font-family: monospace; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] rounded-[${p.borderRadius}px] overflow-hidden"><div class="bg-[#181825] px-3 py-2 flex gap-1.5 items-center"><span class="w-2.5 h-2.5 rounded-full bg-[#f38ba8]"></span><span class="w-2.5 h-2.5 rounded-full bg-[#f9e2af]"></span><span class="w-2.5 h-2.5 rounded-full bg-[#a6e3a1]"></span></div><pre class="p-4 text-[${p.textColor}] text-[${p.fontSize}px] font-mono">${p.text}</pre></div>` },

  // ═════ MORE NAVIGATION (6) ═════
  { id: "nav-tabs", name: "Tab Navigation", category: "Navigation", description: "Tab bar navigation", defaults: { ...DEFAULT_PROPS, text: "Tab 1  Tab 2  Tab 3", bgColor: "#0f172a", textColor: "#64748b", borderColor: "#6366f1", borderRadius: 8, fontSize: 13, fontWeight: 600, paddingX: 16, paddingY: 10 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", gap: 4, background: bg(p), borderRadius: p.borderRadius, padding: 4 }}><span style={{ background: p.borderColor, color: "#fff", borderRadius: p.borderRadius - 2, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>Tab 1</span><span style={{ color: p.textColor, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>Tab 2</span><span style={{ color: p.textColor, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>Tab 3</span></div>, html: (p) => `<div class="tv-nav-tabs"><span class="active">Tab 1</span><span>Tab 2</span><span>Tab 3</span></div>`, css: (p) => `.tv-nav-tabs { display: flex; gap: 4px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; padding: 4px; }\n.tv-nav-tabs span { color: ${p.textColor}; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; border-radius: ${p.borderRadius - 2}px; }\n.tv-nav-tabs span.active { background: ${p.borderColor}; color: #fff; }`, tailwind: (p) => `<div class="flex gap-1 bg-[${p.bgColor}] rounded-[${p.borderRadius}px] p-1"><span class="bg-[${p.borderColor}] text-white rounded px-3 py-2 text-xs font-semibold">Tab 1</span><span class="text-[${p.textColor}] px-3 py-2 text-xs">Tab 2</span></div>` },
  { id: "nav-pills", name: "Pill Navigation", category: "Navigation", description: "Pill style nav", defaults: { ...DEFAULT_PROPS, text: "Home  About  Contact", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 50, fontSize: 13, fontWeight: 600, paddingX: 16, paddingY: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", gap: 8 }}><span style={{ background: p.borderColor, color: "#fff", borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>Home</span><span style={{ color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>About</span><span style={{ color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>Contact</span></div>, html: (p) => `<div class="tv-nav-pills"><span class="active">Home</span><span>About</span><span>Contact</span></div>`, css: (p) => `.tv-nav-pills { display: flex; gap: 8px; }\n.tv-nav-pills span { color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }\n.tv-nav-pills span.active { background: ${p.borderColor}; color: #fff; }`, tailwind: (p) => `<div class="flex gap-2"><span class="bg-[${p.borderColor}] text-white rounded-full px-4 py-2 text-xs font-semibold">Home</span><span class="text-[${p.textColor}] px-4 py-2 text-xs">About</span></div>` },
  { id: "nav-bottom", name: "Bottom Nav", category: "Navigation", description: "Mobile bottom navigation", defaults: { ...DEFAULT_PROPS, text: "🏠  🔍  ➕  ❤️  👤", bgColor: "#0f172a", textColor: "#64748b", borderColor: "#1e293b", borderRadius: 0, fontSize: 20, fontWeight: 400, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", justifyContent: "space-around", background: bg(p), borderTop: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, maxWidth: 300 }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-bottom">${p.text}</nav>`, css: (p) => `.tv-nav-bottom { display: flex; justify-content: space-around; background: ${bg(p)}; border-top: 1px solid ${p.borderColor}; padding: ${pad(p)}; }`, tailwind: (p) => `<nav class="flex justify-around bg-[${p.bgColor}] border-t border-[${p.borderColor}] py-3">${p.text}</nav>` },
  { id: "nav-steps", name: "Step Navigation", category: "Navigation", description: "Multi-step indicator", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 50, fontSize: 13, fontWeight: 600, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", gap: 4 }}>{[1, 2, 3].map((n, i) => <div key={n} style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 28, height: 28, borderRadius: "50%", background: i < 2 ? p.borderColor : "#e2e8f0", color: i < 2 ? "#fff" : "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight }}>{n}</div>{i < 2 && <div style={{ width: 40, height: 2, background: p.borderColor }} />}</div>)}</div>, html: () => `<div class="tv-nav-steps"><span class="done">1</span><span class="line"></span><span class="done">2</span><span class="line"></span><span>3</span></div>`, css: (p) => `.tv-nav-steps { display: flex; align-items: center; gap: 4px; }\n.tv-nav-steps span { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }\n.tv-nav-steps span.done { background: ${p.borderColor}; color: #fff; }\n.tv-nav-steps span:not(.done):not(.line) { background: #e2e8f0; color: #94a3b8; }\n.tv-nav-steps span.line { width: 40px; height: 2px; border-radius: 0; background: ${p.borderColor}; }`, tailwind: (p) => `<div class="flex items-center gap-1"><span class="w-7 h-7 rounded-full bg-[${p.borderColor}] text-white flex items-center justify-center text-xs font-semibold">1</span><span class="w-10 h-0.5 bg-[${p.borderColor}]"></span><span class="w-7 h-7 rounded-full bg-[${p.borderColor}] text-white flex items-center justify-center text-xs font-semibold">2</span></div>` },
  { id: "nav-pagination", name: "Pagination", category: "Navigation", description: "Page number navigation", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 8, fontSize: 13, fontWeight: 600, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", gap: 4 }}><span style={{ color: p.textColor, background: "transparent", border: `1px solid ${p.borderColor}30`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>←</span>{[1, 2, 3].map((n, i) => <span key={n} style={{ background: i === 0 ? p.borderColor : "transparent", color: i === 0 ? "#fff" : p.textColor, border: `1px solid ${i === 0 ? p.borderColor : p.borderColor + "30"}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{n}</span>)}<span style={{ color: p.textColor, background: "transparent", border: `1px solid ${p.borderColor}30`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>→</span></div>, html: () => `<div class="tv-nav-pag"><span>←</span><span class="active">1</span><span>2</span><span>3</span><span>→</span></div>`, css: (p) => `.tv-nav-pag { display: flex; gap: 4px; }\n.tv-nav-pag span { color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }\n.tv-nav-pag span.active { background: ${p.borderColor}; color: #fff; border-color: ${p.borderColor}; }`, tailwind: (p) => `<div class="flex gap-1"><span class="text-[${p.textColor}] border border-[${p.borderColor}]/30 rounded px-2 py-1 text-xs">←</span><span class="bg-[${p.borderColor}] text-white rounded px-2 py-1 text-xs">1</span><span class="text-[${p.textColor}] border border-[${p.borderColor}]/30 rounded px-2 py-1 text-xs">2</span></div>` },
  { id: "nav-tree", name: "Tree Navigation", category: "Navigation", description: "File tree navigation", defaults: { ...DEFAULT_PROPS, text: "📁 src\n  📄 index.js\n  📄 app.js\n📁 public", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 8, fontSize: 13, fontWeight: 400, paddingX: 12, paddingY: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, fontFamily: "monospace", whiteSpace: "pre-wrap", maxWidth: 250 }}>{p.text}</div>, html: (p) => `<div class="tv-nav-tree">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-nav-tree { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-family: monospace; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-[${p.borderRadius}px] p-3 text-[${p.fontSize}px] font-mono">${p.text}</div>` },


  // ─────────────────────────────────────────────────────────────
  // PREMIUM TAGS (8 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "tag-glass", name: "Glass Tag", category: "Tags", description: "Frosted glass tag with blur", defaults: { ...DEFAULT_PROPS, text: "Premium", bgColor: "rgba(255,255,255,0.08)", textColor: "#fff", borderColor: "rgba(255,255,255,0.15)", borderRadius: 8, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 6, shadowBlur: 10 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(12px)", boxShadow: shadow(p), display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }} />{p.text}</span>, html: (p) => `<span class="tv-tag-glass"><span class="tv-glass-dot"></span>${p.text}</span>`, css: (p) => `.tv-tag-glass { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; backdrop-filter: blur(12px); box-shadow: ${shadow(p)}; display: inline-flex; align-items: center; gap: 6px; }\n.tv-glass-dot { width: 6px; height: 6px; border-radius: 50%; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); }`, tailwind: (p) => `<span class="inline-flex items-center gap-1.5 backdrop-blur-md bg-white/10 text-white border border-white/20 rounded px-3 py-1.5 text-xs font-semibold shadow-lg">${p.text}</span>` },
  { id: "tag-neon", name: "Neon Tag", category: "Tags", description: "Cyberpunk glowing tag", defaults: { ...DEFAULT_PROPS, text: "Cyber", bgColor: "transparent", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: 4, fontSize: 12, fontWeight: 700, paddingX: 12, paddingY: 6, shadowColor: "#22d3ee", shadowBlur: 12 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}, inset 0 0 ${p.shadowBlur/2}px ${p.shadowColor}40`, textShadow: `0 0 6px ${p.shadowColor}` }}>{p.text}</span>, html: (p) => `<span class="tv-tag-neon">${p.text}</span>`, css: (p) => `.tv-tag-neon { background: transparent; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}, inset 0 0 ${p.shadowBlur/2}px ${p.shadowColor}40; text-shadow: 0 0 6px ${p.shadowColor}; }`, tailwind: (p) => `<span class="text-[${p.textColor}] border border-[${p.borderColor}] rounded px-3 py-1.5 text-xs font-bold shadow-[0_0_12px_${p.shadowColor}]">${p.text}</span>` },
  { id: "tag-gradient", name: "Gradient Tag", category: "Tags", description: "Gradient fill with shimmer", defaults: { ...DEFAULT_PROPS, text: "New", textColor: "#fff", borderRadius: 6, fontSize: 12, fontWeight: 700, paddingX: 12, paddingY: 6, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", boxShadow: `0 4px 12px ${p.gradientFrom}40` }}>{p.text}</span>, html: (p) => `<span class="tv-tag-grad">${p.text}</span>`, css: (p) => `.tv-tag-grad { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-flex; box-shadow: 0 4px 12px ${p.gradientFrom}40; }`, tailwind: (p) => `<span class="bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded px-3 py-1.5 text-xs font-bold shadow-lg">${p.text}</span>` },
  { id: "tag-outline", name: "Animated Outline Tag", category: "Tags", description: "Border draws on hover", defaults: { ...DEFAULT_PROPS, text: "Hover", bgColor: "transparent", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 4, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}30`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, position: "relative", overflow: "hidden" }}>{p.text}</span>, html: (p) => `<span class="tv-tag-out">${p.text}</span>`, css: (p) => `.tv-tag-out { background: transparent; color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; position: relative; transition: all 0.3s; }\n.tv-tag-out:hover { border-color: ${p.borderColor}; color: #fff; background: ${p.borderColor}; }`, tailwind: (p) => `<span class="text-[${p.textColor}] border border-[${p.borderColor}]/30 hover:bg-[${p.borderColor}] hover:text-white rounded px-3 py-1.5 text-xs font-semibold transition-all">${p.text}</span>` },
  { id: "tag-3d", name: "3D Push Tag", category: "Tags", description: "Pressed-down 3D effect", defaults: { ...DEFAULT_PROPS, text: "Push Me", bgColor: "#6366f1", textColor: "#fff", borderColor: "#4338ca", borderRadius: 8, fontSize: 12, fontWeight: 700, paddingX: 14, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `0 3px 0 ${p.borderColor}, 0 4px 8px rgba(0,0,0,0.3)`, display: "inline-block" }}>{p.text}</span>, html: (p) => `<span class="tv-tag-3d">${p.text}</span>`, css: (p) => `.tv-tag-3d { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; box-shadow: 0 3px 0 ${p.borderColor}, 0 4px 8px rgba(0,0,0,0.3); display: inline-block; transition: all 0.1s; }\n.tv-tag-3d:hover { transform: translateY(2px); box-shadow: 0 1px 0 ${p.borderColor}, 0 2px 4px rgba(0,0,0,0.3); }`, tailwind: (p) => `<span class="bg-[${p.bgColor}] text-white rounded px-3 py-1.5 text-xs font-bold shadow-[0_3px_0_${p.borderColor}]">${p.text}</span>` },
  { id: "tag-shine", name: "Shine Tag", category: "Tags", description: "Light sweep on hover", defaults: { ...DEFAULT_PROPS, text: "Shiny", bgColor: "#1e1e2e", textColor: "#cdd6f4", borderColor: "#313244", borderRadius: 6, fontSize: 12, fontWeight: 600, paddingX: 14, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ position: "relative", background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, overflow: "hidden", display: "inline-block" }}>{p.text}</span>, html: (p) => `<span class="tv-tag-shine">${p.text}</span>`, css: (p) => `.tv-tag-shine { position: relative; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; overflow: hidden; display: inline-block; }\n.tv-tag-shine::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transform: skewX(-20deg); transition: left 0.6s; }\n.tv-tag-shine:hover::before { left: 150%; }`, tailwind: (p) => `<span class="relative bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded px-3 py-1.5 text-xs font-semibold overflow-hidden">${p.text}</span>` },
  { id: "tag-chip-icon", name: "Chip Tag", category: "Tags", description: "Chip with avatar + close", defaults: { ...DEFAULT_PROPS, text: "John Doe", bgColor: "#f1f5f9", textColor: "#0f172a", borderColor: "#e2e8f0", borderRadius: 50, fontSize: 12, fontWeight: 600, paddingX: 4, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 22, height: 22, borderRadius: "50%", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>{p.text.charAt(0)}</span>{p.text}<span style={{ cursor: "pointer", opacity: 0.5, marginLeft: 4 }}>×</span></span>, html: (p) => `<span class="tv-tag-chip"><span class="tv-chip-av">${p.text.charAt(0)}</span>${p.text}<span class="tv-chip-close">×</span></span>`, css: (p) => `.tv-tag-chip { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-flex; align-items: center; gap: 8px; }\n.tv-chip-av { width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; }`, tailwind: (p) => `<span class="inline-flex items-center gap-2 bg-[${p.bgColor}] border border-[${p.borderColor}] rounded-full pl-1 pr-3 py-1 text-xs"><span class="w-5 h-5 rounded-full bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white flex items-center justify-center text-[10px]">${p.text.charAt(0)}</span>${p.text}</span>` },
  { id: "tag-counter", name: "Counter Tag", category: "Tags", description: "Tag with notification counter", defaults: { ...DEFAULT_PROPS, text: "Messages", bgColor: "#fff", textColor: "#0f172a", borderColor: "#e2e8f0", borderRadius: 20, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 6 }}><span>🔔</span>{p.text}<span style={{ background: "#ef4444", color: "#fff", borderRadius: 10, padding: "1px 6px", fontSize: 10, fontWeight: 700 }}>5</span></span>, html: (p) => `<span class="tv-tag-cnt"><span>🔔</span>${p.text}<span class="tv-cnt-badge">5</span></span>`, css: (p) => `.tv-tag-cnt { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-flex; align-items: center; gap: 6px; }\n.tv-cnt-badge { background: #ef4444; color: #fff; border-radius: 10px; padding: 1px 6px; font-size: 10px; font-weight: 700; }`, tailwind: (p) => `<span class="inline-flex items-center gap-1.5 bg-white border border-[${p.borderColor}] rounded-full px-3 py-1.5 text-xs"><span>🔔</span>${p.text}<span class="bg-red-500 text-white rounded-full px-1.5 text-[10px] font-bold">5</span></span>` },

  // ─────────────────────────────────────────────────────────────
  // PREMIUM NAVBARS (6 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "navbar-spotlight", name: "Spotlight Navbar", category: "Navbar", description: "Hover spotlight glow on links", defaults: { ...DEFAULT_PROPS, text: "Brand  Home  Pricing  Docs  Login", bgColor: "#0a0a0f", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350, position: "relative" }}>{p.text}<span style={{ position: "absolute", bottom: -1, left: 0, width: 60, height: 2, background: `linear-gradient(90deg, transparent, ${p.shadowColor}, transparent)` }} /></div>, html: (p) => `<nav class="tv-nav-spot">${p.text}<span class="tv-spot-line"></span></nav>`, css: (p) => `.tv-nav-spot { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; gap: 24px; position: relative; }\n.tv-spot-line { position: absolute; bottom: -1px; left: 0; width: 60px; height: 2px; background: linear-gradient(90deg, transparent, ${p.shadowColor}, transparent); animation: tv-spot-move 4s ease-in-out infinite; }\n@keyframes tv-spot-move { 0%, 100% { left: 0; } 50% { left: calc(100% - 60px); } }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 px-6 flex gap-6">${p.text}</nav>` },
  { id: "navbar-mega", name: "Mega Menu Navbar", category: "Navbar", description: "Navbar with dropdown chevrons", defaults: { ...DEFAULT_PROPS, text: "Logo  Products ▾  Solutions ▾  Pricing  Docs", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350, alignItems: "center" }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-mega">${p.text}</nav>`, css: (p) => `.tv-nav-mega { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; gap: 24px; align-items: center; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 px-6 flex gap-6 items-center">${p.text}</nav>` },
  { id: "navbar-pilled", name: "Pill Floating Navbar", category: "Navbar", description: "Pill navbar with active indicator", defaults: { ...DEFAULT_PROPS, text: "Home  Features  Pricing  About", bgColor: "rgba(15,15,30,0.8)", textColor: "#cdd6f4", borderColor: "rgba(255,255,255,0.1)", borderRadius: 50, fontSize: 13, fontWeight: 600, paddingX: 8, paddingY: 8, shadowBlur: 30, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 4, maxWidth: 350, backdropFilter: "blur(12px)", boxShadow: `0 8px ${p.shadowBlur}px ${p.shadowColor}30`, alignItems: "center" }}><span style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: "#fff", padding: "6px 14px", borderRadius: 50 }}>Home</span><span style={{ padding: "6px 14px" }}>Features</span><span style={{ padding: "6px 14px" }}>Pricing</span><span style={{ padding: "6px 14px" }}>About</span></div>, html: (p) => `<nav class="tv-nav-pill"><span class="active">Home</span><span>Features</span><span>Pricing</span><span>About</span></nav>`, css: (p) => `.tv-nav-pill { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; display: flex; gap: 4px; backdrop-filter: blur(12px); box-shadow: 0 8px ${p.shadowBlur}px ${p.shadowColor}30; align-items: center; }\n.tv-nav-pill span { padding: 6px 14px; border-radius: 50px; }\n.tv-nav-pill span.active { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: #fff; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] backdrop-blur-md text-[${p.textColor}] border border-[${p.borderColor}] rounded-full p-2 flex gap-1"><span class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white px-3 py-1.5 rounded-full">Home</span><span class="px-3 py-1.5">Features</span></nav>` },
  { id: "navbar-sidebar-toggle", name: "Sidebar Toggle Navbar", category: "Navbar", description: "Navbar with hamburger sidebar", defaults: { ...DEFAULT_PROPS, text: "☰  Brand  Home  About  Login", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 16, maxWidth: 350, alignItems: "center" }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-side">${p.text}</nav>`, css: (p) => `.tv-nav-side { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; gap: 16px; align-items: center; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 px-4 flex gap-4 items-center">${p.text}</nav>` },
  { id: "navbar-blur-scroll", name: "Scroll-Aware Navbar", category: "Navbar", description: "Glass blur navbar with shadow", defaults: { ...DEFAULT_PROPS, text: "Brand  Products  Pricing  Login", bgColor: "rgba(15,15,30,0.6)", textColor: "#e2e8f0", borderColor: "rgba(255,255,255,0.08)", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14, shadowBlur: 20, shadowColor: "#000" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350, backdropFilter: "blur(16px)", boxShadow: `0 4px ${p.shadowBlur}px ${p.shadowColor}40` }}>{p.text}</div>, html: (p) => `<nav class="tv-nav-blur">${p.text}</nav>`, css: (p) => `.tv-nav-blur { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; backdrop-filter: blur(16px); box-shadow: 0 4px ${p.shadowBlur}px ${p.shadowColor}40; display: flex; gap: 24px; }`, tailwind: (p) => `<nav class="backdrop-blur-lg bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 px-6 flex gap-6 shadow-lg">${p.text}</nav>` },
  { id: "navbar-search", name: "Navbar with Search", category: "Navbar", description: "Navbar with embedded search bar", defaults: { ...DEFAULT_PROPS, text: "Brand", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 16, maxWidth: 350, alignItems: "center", justifyContent: "space-between" }}><span>{p.text}</span><span style={{ background: "#1e293b", color: "#94a3b8", padding: "4px 10px", borderRadius: 8, fontSize: 12, fontWeight: 400 }}>🔍 Search...</span></div>, html: (p) => `<nav class="tv-nav-search"><span>${p.text}</span><span class="tv-search-box">🔍 Search...</span></nav>`, css: (p) => `.tv-nav-search { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; gap: 16px; align-items: center; justify-content: space-between; }\n.tv-search-box { background: #1e293b; color: #94a3b8; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 400; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 px-6 flex gap-4 justify-between items-center"><span>${p.text}</span><span class="bg-[#1e293b] text-[#94a3b8] px-2.5 py-1 rounded-lg text-xs">🔍 Search...</span></nav>` },
  { id: "navbar-underline", name: "Animated Underline Navbar", category: "Navbar", description: "Links with animated underline", defaults: { ...DEFAULT_PROPS, text: "Home  About  Services  Contact", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 0, fontSize: 14, fontWeight: 600, paddingY: 14 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderBottom: `1px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", gap: 24, maxWidth: 350 }}><span style={{ position: "relative", paddingBottom: 4 }}>{p.text}</span></div>, html: (p) => `<nav class="tv-nav-und"><span>${p.text}</span></nav>`, css: (p) => `.tv-nav-und { background: ${bg(p)}; color: ${p.textColor}; border-bottom: 1px solid ${p.borderColor}; padding: ${pad(p)}; display: flex; gap: 24px; }\n.tv-nav-und span { position: relative; padding-bottom: 4px; }\n.tv-nav-und span::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: ${p.borderColor}; transition: width 0.3s; }\n.tv-nav-und span:hover::after { width: 100%; }`, tailwind: (p) => `<nav class="bg-[${p.bgColor}] text-[${p.textColor}] border-b border-[${p.borderColor}] py-3 px-6 flex gap-6">${p.text}</nav>` },
  { id: "navbar-icon-pills", name: "Icon Pills Navbar", category: "Navbar", description: "Navbar with icon pills", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", textColor: "#cdd6f4", borderColor: "#6366f1", borderRadius: 50, fontSize: 13, fontWeight: 600, paddingX: 8, paddingY: 8, shadowBlur: 20, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", gap: 4, background: "rgba(15,15,30,0.8)", padding: pad(p), borderRadius: p.borderRadius, border: `1px solid ${p.borderColor}30`, backdropFilter: "blur(12px)", boxShadow: `0 8px ${p.shadowBlur}px ${p.shadowColor}30` }}>{["🏠","🔍","🔔","❤️","👤"].map((ic,i) => <span key={i} style={{ width: 32, height: 32, borderRadius: 50, background: i === 0 ? `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` : "transparent", color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{ic}</span>)}</div>, html: (p) => `<nav class="tv-nav-icon"><span class="active">🏠</span><span>🔍</span><span>🔔</span><span>❤️</span><span>👤</span></nav>`, css: (p) => `.tv-nav-icon { display: flex; gap: 4px; background: rgba(15,15,30,0.8); padding: ${pad(p)}; border-radius: ${p.borderRadius}px; border: 1px solid ${p.borderColor}30; backdrop-filter: blur(12px); box-shadow: 0 8px ${p.shadowBlur}px ${p.shadowColor}30; }\n.tv-nav-icon span { width: 32px; height: 32px; border-radius: 50%; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: 14px; }\n.tv-nav-icon span.active { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); }`, tailwind: (p) => `<nav class="flex gap-1 bg-black/50 backdrop-blur-md p-2 rounded-full border border-[${p.borderColor}]/30 shadow-lg"><span class="w-8 h-8 rounded-full bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] flex items-center justify-center text-sm">🏠</span></nav>` },


  // ─────────────────────────────────────────────────────────────
  // PREMIUM HEROES (8 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "hero-aurora", name: "Aurora Hero", category: "Hero", description: "Animated aurora gradient background", defaults: { ...DEFAULT_PROPS, text: "Aurora Effect\n\nBeautiful animated gradients.\n\nGet Started  Learn More", bgColor: "#0a0a14", textColor: "#e2e8f0", borderRadius: 16, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 56, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899", shadowBlur: 60, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap", overflow: "hidden" }}><div style={{ position: "absolute", top: "-30%", left: "-20%", width: "70%", height: "70%", background: `radial-gradient(circle, ${p.gradientFrom}80, transparent)`, filter: "blur(40px)", animation: "tv-aurora-1 8s ease-in-out infinite" }} /><div style={{ position: "absolute", bottom: "-30%", right: "-20%", width: "70%", height: "70%", background: `radial-gradient(circle, ${p.gradientTo}80, transparent)`, filter: "blur(40px)", animation: "tv-aurora-2 8s ease-in-out infinite" }} /><div style={{ position: "relative", zIndex: 1 }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-aurora"><div class="tv-aurora-1"></div><div class="tv-aurora-2"></div><div class="tv-aurora-content">${p.text.replace(/\n/g, "<br>")}</div></section>`, css: (p) => `.tv-hero-aurora { position: relative; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; overflow: hidden; }\n.tv-aurora-1 { position: absolute; top: -30%; left: -20%; width: 70%; height: 70%; background: radial-gradient(circle, ${p.gradientFrom}80, transparent); filter: blur(40px); animation: tv-aurora-1 8s ease-in-out infinite; }\n.tv-aurora-2 { position: absolute; bottom: -30%; right: -20%; width: 70%; height: 70%; background: radial-gradient(circle, ${p.gradientTo}80, transparent); filter: blur(40px); animation: tv-aurora-2 8s ease-in-out infinite; }\n.tv-aurora-content { position: relative; z-index: 1; }\n@keyframes tv-aurora-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(20%, 10%); } }\n@keyframes tv-aurora-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-20%, -10%); } }`, tailwind: (p) => `<section class="relative bg-[${p.bgColor}] text-[${p.textColor}] rounded-2xl px-10 py-14 text-center overflow-hidden">${p.text}</section>` },
  { id: "hero-grid", name: "Grid Pattern Hero", category: "Hero", description: "Hero with grid background pattern", defaults: { ...DEFAULT_PROPS, text: "Build Faster\n\nShip in record time.\n\nStart Free  View Demo", bgColor: "#0a0a0f", textColor: "#e2e8f0", borderColor: "#1e1e2e", borderRadius: 0, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 48 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap", backgroundImage: `linear-gradient(${p.borderColor} 1px, transparent 1px), linear-gradient(90deg, ${p.borderColor} 1px, transparent 1px)`, backgroundSize: "20px 20px" }}><div style={{ position: "relative", zIndex: 1 }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-grid">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-grid { position: relative; background: ${bg(p)}; background-image: linear-gradient(${p.borderColor} 1px, transparent 1px), linear-gradient(90deg, ${p.borderColor} 1px, transparent 1px); background-size: 20px 20px; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] px-10 py-12 text-center [background-image:linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] [background-size:20px_20px]">${p.text}</section>` },
  { id: "hero-spotlight", name: "Mouse Spotlight Hero", category: "Hero", description: "Radial spotlight follows cursor", defaults: { ...DEFAULT_PROPS, text: "Spotlight\n\nInteractive glow effect.\n\nExplore  Docs", bgColor: "#0f0f1e", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 16, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 56, shadowColor: "#6366f1", shadowBlur: 80 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap", overflow: "hidden" }}><div style={{ position: "absolute", inset: 0, background: `radial-gradient(300px circle at 50% 40%, ${p.shadowColor}30, transparent 70%)`, pointerEvents: "none" }} /><div style={{ position: "relative", zIndex: 1 }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-spot"><div class="tv-spot-glow"></div>${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-spot { position: relative; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; overflow: hidden; }\n.tv-spot-glow { position: absolute; inset: 0; background: radial-gradient(300px circle at 50% 40%, ${p.shadowColor}30, transparent 70%); pointer-events: none; animation: tv-spot-move 6s ease-in-out infinite; }\n@keyframes tv-spot-move { 0%, 100% { transform: translate(-10%, -5%); } 50% { transform: translate(10%, 5%); } }`, tailwind: (p) => `<section class="relative bg-[${p.bgColor}] text-[${p.textColor}] rounded-2xl px-10 py-14 text-center overflow-hidden">${p.text}</section>` },
  { id: "hero-floats", name: "Floating Shapes Hero", category: "Hero", description: "Floating geometric shapes", defaults: { ...DEFAULT_PROPS, text: "Creative\n\nDesign without limits.\n\nGet Started", bgColor: "#0f0f17", textColor: "#e2e8f0", borderRadius: 16, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 56, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap", overflow: "hidden" }}><div style={{ position: "absolute", top: 10, left: 10, width: 30, height: 30, background: p.gradientFrom, borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%", opacity: 0.6, animation: "tv-float-1 5s ease-in-out infinite" }} /><div style={{ position: "absolute", bottom: 20, right: 20, width: 24, height: 24, background: p.gradientTo, borderRadius: "50%", opacity: 0.6, animation: "tv-float-2 6s ease-in-out infinite" }} /><div style={{ position: "relative", zIndex: 1 }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-floats"><span class="tv-shape-1"></span><span class="tv-shape-2"></span>${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-floats { position: relative; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; overflow: hidden; }\n.tv-shape-1 { position: absolute; top: 10px; left: 10px; width: 30px; height: 30px; background: ${p.gradientFrom}; border-radius: 30% 70% 70% 30%/30% 30% 70% 70%; opacity: 0.6; animation: tv-float-1 5s ease-in-out infinite; }\n.tv-shape-2 { position: absolute; bottom: 20px; right: 20px; width: 24px; height: 24px; background: ${p.gradientTo}; border-radius: 50%; opacity: 0.6; animation: tv-float-2 6s ease-in-out infinite; }\n@keyframes tv-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(8px, -8px); } }\n@keyframes tv-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-8px, 8px); } }`, tailwind: (p) => `<section class="relative bg-[${p.bgColor}] text-[${p.textColor}] rounded-2xl px-10 py-14 text-center overflow-hidden">${p.text}</section>` },
  { id: "hero-particles", name: "Particles Hero", category: "Hero", description: "Starry particle background", defaults: { ...DEFAULT_PROPS, text: "Cosmic\n\nExplore the universe of design.\n\nLaunch", bgColor: "#050510", textColor: "#fff", borderColor: "#22d3ee", borderRadius: 0, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 56, shadowColor: "#22d3ee", shadowBlur: 20 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, whiteSpace: "pre-wrap", overflow: "hidden" }}>{[...Array(20)].map((_,i) => <span key={i} style={{ position: "absolute", top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, width: 2, height: 2, background: "#fff", borderRadius: "50%", opacity: Math.random()*0.5+0.3, animation: `tv-twinkle ${2+Math.random()*3}s ease-in-out ${Math.random()*2}s infinite` }} />)}<div style={{ position: "relative", zIndex: 1, textShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}` }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-part"><span></span><span></span><span></span>${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-part { position: relative; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; text-align: center; overflow: hidden; }\n.tv-hero-part span { position: absolute; width: 2px; height: 2px; background: #fff; border-radius: 50%; animation: tv-twinkle 3s ease-in-out infinite; }\n@keyframes tv-twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }`, tailwind: (p) => `<section class="relative bg-[${p.bgColor}] text-[${p.textColor}] px-10 py-14 text-center">${p.text}</section>` },
  { id: "hero-card-mosaic", name: "Card Mosaic Hero", category: "Hero", description: "Hero with floating card mosaic", defaults: { ...DEFAULT_PROPS, text: "Drag & Drop Builder\n\nNo code needed.\n\nTry Free", bgColor: "#0f0f17", textColor: "#e2e8f0", borderColor: "#1e1e2e", borderRadius: 16, fontSize: 15, fontWeight: 600, paddingX: 40, paddingY: 48, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#8b5cf6" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 350, whiteSpace: "pre-wrap", position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: 16, opacity: 0.3, transform: "rotate(15deg)" }} /><div style={{ position: "absolute", bottom: -20, right: 30, width: 60, height: 60, background: p.gradientTo, borderRadius: 12, opacity: 0.3, transform: "rotate(-10deg)" }} /><div style={{ position: "relative", zIndex: 1 }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-mos"><span class="tv-mos-1"></span><span class="tv-mos-2"></span>${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-mos { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; position: relative; overflow: hidden; }\n.tv-mos-1 { position: absolute; top: -20px; right: -20px; width: 80px; height: 80px; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: 16px; opacity: 0.3; transform: rotate(15deg); }\n.tv-mos-2 { position: absolute; bottom: -20px; right: 30px; width: 60px; height: 60px; background: ${p.gradientTo}; border-radius: 12px; opacity: 0.3; transform: rotate(-10deg); }`, tailwind: (p) => `<section class="relative bg-[${p.bgColor}] text-[${p.textColor}] rounded-2xl px-10 py-12 overflow-hidden">${p.text}</section>` },
  { id: "hero-terminal", name: "Terminal Hero", category: "Hero", description: "Hero with terminal window mockup", defaults: { ...DEFAULT_PROPS, text: "$ create-app\n✓ Ready in 1.2s\n\nShip Beautiful Apps.", bgColor: "#0d1117", textColor: "#e2e8f0", borderColor: "#1e293b", borderRadius: 12, fontSize: 13, fontWeight: 500, paddingX: 24, paddingY: 20, shadowBlur: 30, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: 0, maxWidth: 350, whiteSpace: "pre-wrap", fontFamily: "monospace", boxShadow: `0 8px ${p.shadowBlur}px ${p.shadowColor}30`, overflow: "hidden" }}><div style={{ background: "#161b22", padding: "8px 12px", display: "flex", gap: 6 }}><span style={{ width: 10, height: 10, background: "#ff5f56", borderRadius: "50%" }} /><span style={{ width: 10, height: 10, background: "#ffbd2e", borderRadius: "50%" }} /><span style={{ width: 10, height: 10, background: "#27c93f", borderRadius: "50%" }} /></div><div style={{ padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div>, html: (p) => `<section class="tv-hero-term"><div class="tv-term-bar"><span></span><span></span><span></span></div><div class="tv-term-body">${p.text.replace(/\n/g, "<br>")}</div></section>`, css: (p) => `.tv-hero-term { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; font-family: monospace; box-shadow: 0 8px ${p.shadowBlur}px ${p.shadowColor}30; overflow: hidden; }\n.tv-term-bar { background: #161b22; padding: 8px 12px; display: flex; gap: 6px; }\n.tv-term-bar span { width: 10px; height: 10px; border-radius: 50%; }\n.tv-term-bar span:nth-child(1) { background: #ff5f56; }\n.tv-term-bar span:nth-child(2) { background: #ffbd2e; }\n.tv-term-bar span:nth-child(3) { background: #27c93f; }\n.tv-term-body { padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-xl overflow-hidden shadow-xl"><div class="bg-[#161b22] px-3 py-2 flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span><span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span><span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span></div><div class="p-5 text-xs">${p.text}</div></section>` },
  { id: "hero-product", name: "Product Showcase Hero", category: "Hero", description: "Hero with floating product card", defaults: { ...DEFAULT_PROPS, text: "Toolbox Pro\n\n$48/mo\n\n✓ 100+ components\n✓ Lifetime updates\n\nBuy Now", bgColor: "#0a0a0f", textColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 16, fontSize: 14, fontWeight: 600, paddingX: 24, paddingY: 24, shadowBlur: 30, shadowColor: "#6366f1", useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}30`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 280, whiteSpace: "pre-wrap", boxShadow: `0 12px ${p.shadowBlur}px ${p.shadowColor}40` }}>{p.text}</div>, html: (p) => `<section class="tv-hero-prod">${p.text.replace(/\n/g, "<br>")}</section>`, css: (p) => `.tv-hero-prod { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}30; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: 0 12px ${p.shadowBlur}px ${p.shadowColor}40; }`, tailwind: (p) => `<section class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}]/30 rounded-2xl p-6 shadow-2xl">${p.text}</section>` },

  // ─────────────────────────────────────────────────────────────
  // PREMIUM DIVIDERS (8 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "divider-wave", name: "Wave Divider", category: "Dividers", description: "SVG wave divider", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", textColor: "#6366f1", borderColor: "#6366f1", borderRadius: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <svg width="200" height="24" viewBox="0 0 200 24" preserveAspectRatio="none" style={{ display: "block" }}><defs><linearGradient id="tv-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={p.gradientFrom} /><stop offset="100%" stopColor={p.gradientTo} /></linearGradient></defs><path d="M0,12 Q25,4 50,12 T100,12 T150,12 T200,12" stroke="url(#tv-wave-grad)" strokeWidth="2" fill="none" /></svg>, html: () => `<svg class="tv-div-wave" viewBox="0 0 200 24" preserveAspectRatio="none"><path d="M0,12 Q25,4 50,12 T100,12 T150,12 T200,12"/></svg>`, css: (p) => `.tv-div-wave { width: 100%; height: 24px; }\n.tv-div-wave path { stroke: ${p.borderColor}; stroke-width: 2; fill: none; }`, tailwind: (p) => `<svg viewBox="0 0 200 24" class="w-full h-6"><path d="M0,12 Q25,4 50,12 T100,12 T150,12 T200,12" stroke="${p.borderColor}" strokeWidth="2" fill="none"/></svg>` },
  { id: "divider-fade", name: "Fade Divider", category: "Dividers", description: "Gradient fade line", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0, useGradient: true, gradientFrom: "transparent", gradientTo: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 1, background: `linear-gradient(90deg, transparent, ${p.gradientTo}, transparent)` }} />, html: () => `<div class="tv-div-fade"></div>`, css: (p) => `.tv-div-fade { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, ${p.gradientTo}, transparent); }`, tailwind: (p) => `<div class="w-full h-px bg-gradient-to-r from-transparent via-[${p.gradientTo}] to-transparent"></div>` },
  { id: "divider-zigzag", name: "Zigzag Divider", category: "Dividers", description: "Zigzag SVG divider", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0 }, controls: COMMON_CONTROLS, render: (p) => <svg width="200" height="12" viewBox="0 0 200 12" preserveAspectRatio="none" style={{ display: "block" }}><polyline points="0,6 20,2 40,10 60,2 80,10 100,2 120,10 140,2 160,10 180,2 200,6" stroke={p.borderColor} strokeWidth="2" fill="none" /></svg>, html: () => `<svg class="tv-div-zig" viewBox="0 0 200 12" preserveAspectRatio="none"><polyline points="0,6 20,2 40,10 60,2 80,10 100,2 120,10 140,2 160,10 180,2 200,6"/></svg>`, css: (p) => `.tv-div-zig { width: 100%; height: 12px; }\n.tv-div-zig polyline { stroke: ${p.borderColor}; stroke-width: 2; fill: none; }`, tailwind: (p) => `<svg viewBox="0 0 200 12" class="w-full h-3"><polyline points="0,6 20,2 40,10 60,2 80,10 100,2" stroke="${p.borderColor}" strokeWidth="2" fill="none"/></svg>` },
  { id: "divider-text", name: "Text Divider", category: "Dividers", description: "Divider with text in middle", defaults: { ...DEFAULT_PROPS, text: "OR", bgColor: "transparent", textColor: "#64748b", borderColor: "#334155", borderRadius: 0, fontSize: 12, fontWeight: 600 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", gap: 12, width: 200 }}><div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${p.borderColor})` }} /><span style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, padding: "0 8px", background: "#0a0a0f" }}>{p.text}</span><div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${p.borderColor}, transparent)` }} /></div>, html: (p) => `<div class="tv-div-txt"><span></span>${p.text}<span></span></div>`, css: (p) => `.tv-div-txt { display: flex; align-items: center; gap: 12px; }\n.tv-div-txt span { flex: 1; height: 1px; }\n.tv-div-txt span:first-child { background: linear-gradient(90deg, transparent, ${p.borderColor}); }\n.tv-div-txt span:last-child { background: linear-gradient(90deg, ${p.borderColor}, transparent); }\n.tv-div-txt { color: ${p.textColor}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; padding: 0 8px; }`, tailwind: (p) => `<div class="flex items-center gap-3"><span class="flex-1 h-px bg-gradient-to-r from-transparent to-[${p.borderColor}]"></span><span class="text-[${p.textColor}] text-xs font-semibold">${p.text}</span><span class="flex-1 h-px bg-gradient-to-r from-[${p.borderColor}] to-transparent"></span></div>` },
  { id: "divider-glow", name: "Glow Divider", category: "Dividers", description: "Glowing animated line", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#22d3ee", borderRadius: 0, shadowColor: "#22d3ee", shadowBlur: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 2, background: p.borderColor, borderRadius: p.borderRadius, boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}` }} />, html: () => `<div class="tv-div-glow"></div>`, css: (p) => `.tv-div-glow { width: 100%; height: 2px; background: ${p.borderColor}; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}; animation: tv-glow-pulse 2s ease-in-out infinite; }\n@keyframes tv-glow-pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }`, tailwind: (p) => `<div class="w-full h-0.5 bg-[${p.borderColor}] shadow-[0_0_12px_${p.shadowColor}]"></div>` },
  { id: "divider-particles", name: "Particle Divider", category: "Dividers", description: "Dots as divider", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, width: 200 }}>{[...Array(5)].map((_,i) => <span key={i} style={{ width: 4, height: 4, background: p.borderColor, borderRadius: "50%", opacity: 1 - i*0.15 }} />)}</div>, html: () => `<div class="tv-div-part"><span></span><span></span><span></span><span></span><span></span></div>`, css: (p) => `.tv-div-part { display: flex; justify-content: center; align-items: center; gap: 8px; }\n.tv-div-part span { width: 4px; height: 4px; background: ${p.borderColor}; border-radius: 50%; }\n.tv-div-part span:nth-child(1) { opacity: 1; }\n.tv-div-part span:nth-child(2) { opacity: 0.85; }\n.tv-div-part span:nth-child(3) { opacity: 0.7; }\n.tv-div-part span:nth-child(4) { opacity: 0.55; }\n.tv-div-part span:nth-child(5) { opacity: 0.4; }`, tailwind: (p) => `<div class="flex justify-center items-center gap-2"><span class="w-1 h-1 bg-[${p.borderColor}] rounded-full"></span><span class="w-1 h-1 bg-[${p.borderColor}] rounded-full opacity-75"></span><span class="w-1 h-1 bg-[${p.borderColor}] rounded-full opacity-50"></span></div>` },
  { id: "divider-mountain", name: "Mountain Divider", category: "Dividers", description: "Triangle peaks divider", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <svg width="200" height="16" viewBox="0 0 200 16" preserveAspectRatio="none" style={{ display: "block" }}><defs><linearGradient id="tv-mtn-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={p.gradientFrom} /><stop offset="100%" stopColor={p.gradientTo} /></linearGradient></defs><polyline points="0,12 20,4 40,12 60,4 80,12 100,4 120,12 140,4 160,12 180,4 200,12" stroke="url(#tv-mtn-grad)" strokeWidth="2" fill="none" /></svg>, html: () => `<svg class="tv-div-mtn" viewBox="0 0 200 16" preserveAspectRatio="none"><polyline points="0,12 20,4 40,12 60,4 80,12 100,4 120,12 140,4 160,12 180,4 200,12"/></svg>`, css: (p) => `.tv-div-mtn { width: 100%; height: 16px; }\n.tv-div-mtn polyline { stroke: ${p.borderColor}; stroke-width: 2; fill: none; }`, tailwind: (p) => `<svg viewBox="0 0 200 16" class="w-full h-4"><polyline points="0,12 20,4 40,12 60,4 80,12 100,4" stroke="${p.borderColor}" strokeWidth="2" fill="none"/></svg>` },
  { id: "divider-3d", name: "3D Shadow Divider", category: "Dividers", description: "3D layered effect", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "transparent", borderColor: "#6366f1", borderRadius: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", width: 200, height: 8 }}><div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 1, background: p.borderColor }} /><div style={{ position: "absolute", top: 3, left: 0, width: "100%", height: 1, background: `${p.borderColor}80` }} /><div style={{ position: "absolute", top: 6, left: 0, width: "100%", height: 1, background: `${p.borderColor}40` }} /></div>, html: () => `<div class="tv-div-3d"><span></span><span></span><span></span></div>`, css: (p) => `.tv-div-3d { position: relative; width: 100%; height: 8px; }\n.tv-div-3d span { position: absolute; left: 0; width: 100%; height: 1px; }\n.tv-div-3d span:nth-child(1) { top: 0; background: ${p.borderColor}; }\n.tv-div-3d span:nth-child(2) { top: 3px; background: ${p.borderColor}80; }\n.tv-div-3d span:nth-child(3) { top: 6px; background: ${p.borderColor}40; }`, tailwind: (p) => `<div class="relative w-full h-2"><span class="absolute top-0 left-0 w-full h-px bg-[${p.borderColor}]"></span><span class="absolute top-1 left-0 w-full h-px bg-[${p.borderColor}]/50"></span></div>` },


  // ─────────────────────────────────────────────────────────────
  // PREMIUM CARDS (4 new)
  // ─────────────────────────────────────────────────────────────
  { id: "card-holographic", name: "Holographic Card", category: "Cards", description: "Rainbow holographic shimmer", defaults: { ...DEFAULT_PROPS, text: "Holographic", textColor: "#fff", borderColor: "rgba(255,255,255,0.2)", borderRadius: 16, fontSize: 14, fontWeight: 700, paddingX: 24, paddingY: 24, useGradient: true, gradientFrom: "#ff00ff", gradientTo: "#00ffff" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius, padding: 2, maxWidth: 250, boxShadow: `0 8px 24px ${p.gradientFrom}40`, overflow: "hidden" }}><div style={{ background: "rgba(0,0,0,0.6)", borderRadius: p.borderRadius - 2, padding: pad(p), color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(10px)" }}>{p.text}</div></div>, html: (p) => `<div class="tv-card-holo"><div class="tv-holo-inner">${p.text}</div></div>`, css: (p) => `.tv-card-holo { position: relative; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; padding: 2px; box-shadow: 0 8px 24px ${p.gradientFrom}40; overflow: hidden; }\n.tv-holo-inner { background: rgba(0,0,0,0.6); border-radius: ${p.borderRadius - 2}px; padding: ${pad(p)}; color: ${p.textColor}; backdrop-filter: blur(10px); }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-2xl p-0.5 max-w-xs"><div class="bg-black/60 backdrop-blur-md rounded-2xl p-6 text-white">${p.text}</div></div>` },
  { id: "card-retro", name: "Retro 80s Card", category: "Cards", description: "Synthwave retro card", defaults: { ...DEFAULT_PROPS, text: "RETRO\n\n80s vibes", bgColor: "#1a0033", textColor: "#ff00ff", borderColor: "#ff00ff", borderRadius: 0, fontSize: 14, fontWeight: 700, paddingX: 24, paddingY: 24, shadowColor: "#ff00ff", shadowBlur: 20 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, border: `2px solid ${p.borderColor}`, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 250, whiteSpace: "pre-wrap", boxShadow: `${p.shadowColor}40 0 0 8px, ${p.shadowColor}80 4px 4px 0 4px`, textShadow: `2px 2px 0 ${p.shadowColor}` }}>{p.text}</div>, html: (p) => `<div class="tv-card-retro">${p.text.replace(/\n/g, "<br>")}</div>`, css: (p) => `.tv-card-retro { background: ${bg(p)}; color: ${p.textColor}; border: 2px solid ${p.borderColor}; padding: ${pad(p)}; box-shadow: ${p.shadowColor}40 0 0 8px, ${p.shadowColor}80 4px 4px 0 4px; text-shadow: 2px 2px 0 ${p.shadowColor}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border-2 border-[${p.borderColor}] p-6 shadow-2xl">${p.text}</div>` },
  { id: "card-neumorph", name: "Neumorphic Card", category: "Cards", description: "Soft UI neumorphic", defaults: { ...DEFAULT_PROPS, text: "Soft UI", bgColor: "#e0e5ec", textColor: "#4a5568", borderColor: "#e0e5ec", borderRadius: 20, fontSize: 14, fontWeight: 600, paddingX: 28, paddingY: 28 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 250, boxShadow: "9px 9px 16px #b8bcc2, -9px -9px 16px #ffffff" }}>{p.text}</div>, html: (p) => `<div class="tv-card-neu">${p.text}</div>`, css: (p) => `.tv-card-neu { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: 9px 9px 16px #b8bcc2, -9px -9px 16px #ffffff; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-2xl p-7 shadow-[9px_9px_16px_#b8bcc2,-9px_-9px_16px_#ffffff]">${p.text}</div>` },
  { id: "card-aurora", name: "Aurora Glow Card", category: "Cards", description: "Animated aurora glow", defaults: { ...DEFAULT_PROPS, text: "Aurora Glow", bgColor: "#0a0a14", textColor: "#e2e8f0", borderColor: "#1e1e2e", borderRadius: 16, fontSize: 14, fontWeight: 600, paddingX: 24, paddingY: 24, shadowColor: "#6366f1", shadowBlur: 40, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 250, overflow: "hidden" }}><div style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: `radial-gradient(circle, ${p.gradientFrom}40, transparent 40%)`, animation: "tv-card-aurora 6s linear infinite", pointerEvents: "none" }} /><div style={{ position: "relative", zIndex: 1 }}>{p.text}</div></div>, html: (p) => `<div class="tv-card-aurora"><div class="tv-aurora-bg"></div>${p.text}</div>`, css: (p) => `.tv-card-aurora { position: relative; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; overflow: hidden; }\n.tv-aurora-bg { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, ${p.gradientFrom}40, transparent 40%); animation: tv-card-aurora 6s linear infinite; }\n@keyframes tv-card-aurora { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`, tailwind: (p) => `<div class="relative bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-2xl p-6 overflow-hidden">${p.text}</div>` },
  { id: "card-paper-fold", name: "Paper Fold Card", category: "Cards", description: "Folded paper corner effect", defaults: { ...DEFAULT_PROPS, text: "Paper Fold", bgColor: "#fff", textColor: "#0f172a", borderColor: "#e2e8f0", borderRadius: 8, fontSize: 14, fontWeight: 600, paddingX: 24, paddingY: 24 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 250, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}><div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "0 20px 20px 0", borderColor: `transparent ${p.borderColor} transparent` }} />{p.text}</div>, html: (p) => `<div class="tv-card-fold"><span class="tv-fold-corner"></span>${p.text}</div>`, css: (p) => `.tv-card-fold { position: relative; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }\n.tv-fold-corner { position: absolute; top: 0; right: 0; width: 0; height: 0; border-style: solid; border-width: 0 20px 20px 0; border-color: transparent ${p.borderColor} transparent; }`, tailwind: (p) => `<div class="relative bg-white text-[${p.textColor}] border border-[${p.borderColor}] rounded-lg p-6 shadow-md">${p.text}</div>` },
  { id: "card-glass-dark", name: "Dark Glass Card", category: "Cards", description: "Dark themed glass card", defaults: { ...DEFAULT_PROPS, text: "Dark Glass", bgColor: "rgba(15,15,30,0.6)", textColor: "#e2e8f0", borderColor: "rgba(255,255,255,0.1)", borderRadius: 20, fontSize: 14, fontWeight: 600, paddingX: 24, paddingY: 24, shadowBlur: 30, shadowColor: "#000" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(16px)", boxShadow: `0 8px ${p.shadowBlur}px ${p.shadowColor}60`, maxWidth: 250 }}>{p.text}</div>, html: (p) => `<div class="tv-card-gd">${p.text}</div>`, css: (p) => `.tv-card-gd { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; backdrop-filter: blur(16px); box-shadow: 0 8px ${p.shadowBlur}px ${p.shadowColor}60; }`, tailwind: (p) => `<div class="bg-black/40 backdrop-blur-xl text-[${p.textColor}] border border-white/10 rounded-3xl p-6 shadow-2xl">${p.text}</div>` },
  { id: "card-perspective", name: "Perspective Card", category: "Cards", description: "3D perspective tilt with layers", defaults: { ...DEFAULT_PROPS, text: "3D Layers", bgColor: "#0f172a", textColor: "#fff", borderColor: "#6366f1", borderRadius: 12, fontSize: 14, fontWeight: 700, paddingX: 24, paddingY: 24, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899", shadowBlur: 30, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ perspective: "1000px" }}><div style={{ position: "relative", transform: "rotateY(-15deg) rotateX(5deg)", transformStyle: "preserve-3d", transition: "transform 0.5s" }}><div style={{ position: "absolute", inset: 0, transform: "translateZ(-30px)", background: `${p.borderColor}40`, borderRadius: p.borderRadius }} /><div style={{ position: "absolute", inset: 0, transform: "translateZ(-15px)", background: `${p.borderColor}80`, borderRadius: p.borderRadius }} /><div style={{ position: "relative", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, transform: "translateZ(0)", boxShadow: `0 12px ${p.shadowBlur}px ${p.shadowColor}60`, maxWidth: 250 }}>{p.text}</div></div></div>, html: (p) => `<div class="tv-card-persp"><div class="tv-persp-back"></div><div class="tv-persp-mid"></div><div class="tv-persp-front">${p.text}</div></div>`, css: (p) => `.tv-card-persp { perspective: 1000px; transform: rotateY(-15deg) rotateX(5deg); transform-style: preserve-3d; position: relative; }\n.tv-persp-back { position: absolute; inset: 0; transform: translateZ(-30px); background: ${p.borderColor}40; border-radius: ${p.borderRadius}px; }\n.tv-persp-mid { position: absolute; inset: 0; transform: translateZ(-15px); background: ${p.borderColor}80; border-radius: ${p.borderRadius}px; }\n.tv-persp-front { position: relative; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; box-shadow: 0 12px ${p.shadowBlur}px ${p.shadowColor}60; }`, tailwind: (p) => `<div class="[perspective:1000px] bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded-xl p-6 shadow-2xl">${p.text}</div>` },
  { id: "card-gradient-mesh", name: "Gradient Mesh Card", category: "Cards", description: "Multi-color gradient mesh", defaults: { ...DEFAULT_PROPS, text: "Mesh Gradient", textColor: "#fff", borderColor: "rgba(255,255,255,0.1)", borderRadius: 20, fontSize: 14, fontWeight: 700, paddingX: 24, paddingY: 24, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, maxWidth: 250, overflow: "hidden" }}><div style={{ position: "absolute", top: 0, left: 0, width: "60%", height: "60%", background: `radial-gradient(circle, ${p.gradientFrom}80, transparent 70%)`, filter: "blur(20px)" }} /><div style={{ position: "absolute", bottom: 0, right: 0, width: "60%", height: "60%", background: `radial-gradient(circle, ${p.gradientTo}80, transparent 70%)`, filter: "blur(20px)" }} /><div style={{ position: "relative", zIndex: 1 }}>{p.text}</div></div>, html: (p) => `<div class="tv-card-mesh"><span class="tv-mesh-1"></span><span class="tv-mesh-2"></span>${p.text}</div>`, css: (p) => `.tv-card-mesh { position: relative; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; overflow: hidden; }\n.tv-mesh-1 { position: absolute; top: 0; left: 0; width: 60%; height: 60%; background: radial-gradient(circle, ${p.gradientFrom}80, transparent 70%); filter: blur(20px); }\n.tv-mesh-2 { position: absolute; bottom: 0; right: 0; width: 60%; height: 60%; background: radial-gradient(circle, ${p.gradientTo}80, transparent 70%); filter: blur(20px); }`, tailwind: (p) => `<div class="relative bg-[${p.bgColor}] text-white border border-white/10 rounded-3xl p-6 overflow-hidden">${p.text}</div>` },

  // ─────────────────────────────────────────────────────────────
  // PREMIUM ALERTS (6 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "alert-glass", name: "Glass Alert", category: "Alerts", description: "Frosted glass alert", defaults: { ...DEFAULT_PROPS, text: "⚠ Glass Alert — frosted background.", bgColor: "rgba(99,102,241,0.1)", textColor: "#e2e8f0", borderColor: "rgba(99,102,241,0.4)", borderRadius: 12, fontSize: 13, fontWeight: 500, paddingX: 16, paddingY: 12, shadowBlur: 20, shadowColor: "#6366f1" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(12px)", boxShadow: `0 4px ${p.shadowBlur}px ${p.shadowColor}30`, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<div class="tv-alert-glass">${p.text}</div>`, css: (p) => `.tv-alert-glass { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; backdrop-filter: blur(12px); box-shadow: 0 4px ${p.shadowBlur}px ${p.shadowColor}30; }`, tailwind: (p) => `<div class="backdrop-blur-md bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-xl px-4 py-3 shadow-lg">${p.text}</div>` },
  { id: "alert-neon", name: "Neon Alert", category: "Alerts", description: "Cyberpunk glowing alert", defaults: { ...DEFAULT_PROPS, text: "◈ Neon Alert — cyberpunk vibes", bgColor: "rgba(34,211,238,0.05)", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: 4, fontSize: 13, fontWeight: 600, paddingX: 16, paddingY: 12, shadowColor: "#22d3ee", shadowBlur: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}, inset 0 0 ${p.shadowBlur/2}px ${p.shadowColor}40`, textShadow: `0 0 4px ${p.shadowColor}`, maxWidth: 350 }}>{p.text}</div>, html: (p) => `<div class="tv-alert-neon">${p.text}</div>`, css: (p) => `.tv-alert-neon { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}, inset 0 0 ${p.shadowBlur/2}px ${p.shadowColor}40; text-shadow: 0 0 4px ${p.shadowColor}; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded px-4 py-3 shadow-[0_0_12px_${p.shadowColor}]">${p.text}</div>` },
  { id: "alert-gradient", name: "Gradient Border Alert", category: "Alerts", description: "Animated gradient border alert", defaults: { ...DEFAULT_PROPS, text: "✨ Pro Tip: Use gradient borders!", bgColor: "#0f172a", textColor: "#e2e8f0", borderRadius: 12, fontSize: 13, fontWeight: 500, paddingX: 2, paddingY: 2, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius, padding: 2, maxWidth: 350 }}><div style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius - 2, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div>, html: (p) => `<div class="tv-alert-grad"><div class="tv-grad-inner">${p.text}</div></div>`, css: (p) => `.tv-alert-grad { background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; padding: 2px; }\n.tv-grad-inner { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius - 2}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded-xl p-0.5"><div class="bg-[${p.bgColor}] text-[${p.textColor}] rounded-xl px-4 py-3">${p.text}</div></div>` },
  { id: "alert-dismissible", name: "Dismissible Alert", category: "Alerts", description: "Alert with close button", defaults: { ...DEFAULT_PROPS, text: "ℹ You can dismiss this alert", bgColor: "#eff6ff", textColor: "#1e40af", borderColor: "#3b82f6", borderRadius: 8, fontSize: 13, fontWeight: 500, paddingX: 16, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 350 }}><span>{p.text}</span><span style={{ cursor: "pointer", opacity: 0.6, fontSize: 18, fontWeight: 400 }}>×</span></div>, html: (p) => `<div class="tv-alert-dismiss">${p.text}<span class="tv-close">×</span></div>`, css: (p) => `.tv-alert-dismiss { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: flex; justify-content: space-between; align-items: center; }\n.tv-close { cursor: pointer; opacity: 0.6; font-size: 18px; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-lg px-4 py-3 flex justify-between items-center"><span>${p.text}</span><span class="cursor-pointer opacity-60 text-lg">×</span></div>` },
  { id: "alert-banner-slide", name: "Banner Slide Alert", category: "Alerts", description: "Top banner with slide-in", defaults: { ...DEFAULT_PROPS, text: "🎉 New: Premium components now available!", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 0, fontSize: 13, fontWeight: 600, paddingX: 16, paddingY: 10 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, textAlign: "center", maxWidth: 350, animation: "tv-banner-slide 0.4s ease-out" }}>{p.text}</div>, html: (p) => `<div class="tv-alert-banner">${p.text}</div>`, css: (p) => `.tv-alert-banner { background: ${bg(p)}; color: ${p.textColor}; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; text-align: center; animation: tv-banner-slide 0.4s ease-out; }\n@keyframes tv-banner-slide { from { transform: translateY(-100%); } to { transform: translateY(0); } }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] px-4 py-2.5 text-center text-xs font-semibold">${p.text}</div>` },
  { id: "alert-icon-block", name: "Icon Block Alert", category: "Alerts", description: "Alert with left icon block", defaults: { ...DEFAULT_PROPS, text: "Success! Your action was completed.", bgColor: "#ecfdf5", textColor: "#065f46", borderColor: "#10b981", borderRadius: 8, fontSize: 13, fontWeight: 500, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, display: "flex", maxWidth: 350, overflow: "hidden" }}><div style={{ background: p.borderColor, color: "#fff", padding: "12px 14px", display: "flex", alignItems: "center", fontWeight: 700 }}>✓</div><div style={{ padding: "12px 16px", fontSize: p.fontSize, fontWeight: p.fontWeight, flex: 1, display: "flex", alignItems: "center" }}>{p.text}</div></div>, html: (p) => `<div class="tv-alert-ico"><span class="tv-ico-side">✓</span><span class="tv-ico-text">${p.text}</span></div>`, css: (p) => `.tv-alert-ico { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; display: flex; overflow: hidden; }\n.tv-ico-side { background: ${p.borderColor}; color: #fff; padding: 12px 14px; display: flex; align-items: center; font-weight: 700; }\n.tv-ico-text { padding: 12px 16px; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; flex: 1; display: flex; align-items: center; }`, tailwind: (p) => `<div class="bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded-lg flex overflow-hidden"><span class="bg-[${p.borderColor}] text-white px-3 py-3 flex items-center font-bold">✓</span><span class="px-4 py-3 text-xs flex items-center flex-1">${p.text}</span></div>` },


  // ─────────────────────────────────────────────────────────────
  // PREMIUM BADGES (3 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "badge-shine", name: "Shine Badge", category: "Badges", description: "Badge with shine sweep", defaults: { ...DEFAULT_PROPS, text: "NEW", bgColor: "#6366f1", textColor: "#fff", borderColor: "transparent", borderRadius: 6, fontSize: 11, fontWeight: 700, paddingX: 10, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ position: "relative", background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, overflow: "hidden", display: "inline-block" }}>{p.text}</span>, html: (p) => `<span class="tv-bdg-shine">${p.text}</span>`, css: (p) => `.tv-bdg-shine { position: relative; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; overflow: hidden; display: inline-block; }\n.tv-bdg-shine::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); transform: skewX(-20deg); animation: tv-bdg-shine 3s infinite; }\n@keyframes tv-bdg-shine { 0% { left: -100%; } 100% { left: 200%; } }`, tailwind: (p) => `<span class="relative bg-[${p.bgColor}] text-white rounded px-2.5 py-1 text-xs font-bold overflow-hidden">${p.text}</span>` },
  { id: "badge-dot", name: "Dot Badge", category: "Badges", description: "Badge with live dot", defaults: { ...DEFAULT_PROPS, text: "LIVE", bgColor: "#ef4444", textColor: "#fff", borderColor: "transparent", borderRadius: 50, fontSize: 11, fontWeight: 700, paddingX: 12, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", animation: "tv-pulse 1.5s infinite" }} />{p.text}</span>, html: (p) => `<span class="tv-bdg-dot"><span class="tv-dot-pulse"></span>${p.text}</span>`, css: (p) => `.tv-bdg-dot { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-flex; align-items: center; gap: 6px; }\n.tv-dot-pulse { width: 6px; height: 6px; border-radius: 50%; background: #fff; animation: tv-pulse 1.5s infinite; }`, tailwind: (p) => `<span class="inline-flex items-center gap-1.5 bg-[${p.bgColor}] text-white rounded-full px-3 py-1 text-xs font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>${p.text}</span>` },
  { id: "badge-3d", name: "3D Badge", category: "Badges", description: "Pressed 3D badge", defaults: { ...DEFAULT_PROPS, text: "PRO", bgColor: "#fbbf24", textColor: "#7c2d12", borderColor: "#92400e", borderRadius: 6, fontSize: 11, fontWeight: 800, paddingX: 10, paddingY: 4 }, controls: COMMON_CONTROLS, render: (p) => <span style={{ background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, display: "inline-block", boxShadow: `0 2px 0 ${p.borderColor}, 0 3px 6px rgba(0,0,0,0.2)`, textShadow: "0 1px 0 rgba(255,255,255,0.4)" }}>{p.text}</span>, html: (p) => `<span class="tv-bdg-3d">${p.text}</span>`, css: (p) => `.tv-bdg-3d { background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; display: inline-block; box-shadow: 0 2px 0 ${p.borderColor}, 0 3px 6px rgba(0,0,0,0.2); text-shadow: 0 1px 0 rgba(255,255,255,0.4); }`, tailwind: (p) => `<span class="bg-[${p.bgColor}] text-[${p.textColor}] rounded px-2.5 py-1 text-xs font-extrabold shadow-[0_2px_0_${p.borderColor}]">${p.text}</span>` },

  // ─────────────────────────────────────────────────────────────
  // PREMIUM INPUTS (4 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "input-glass", name: "Glass Input", category: "Inputs", description: "Frosted glass input field", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "rgba(255,255,255,0.05)", textColor: "#fff", borderColor: "rgba(255,255,255,0.15)", borderRadius: 12, fontSize: 14, fontWeight: 400, paddingX: 16, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <input placeholder="Search..." style={{ background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(12px)", outline: "none", maxWidth: 220 }} />, html: (p) => `<input class="tv-in-glass" placeholder="Search..."/>`, css: (p) => `.tv-in-glass { background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; backdrop-filter: blur(12px); outline: none; }\n.tv-in-glass:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.2); }`, tailwind: (p) => `<input class="backdrop-blur-md bg-white/5 text-white border border-white/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500" placeholder="Search..."/>` },
  { id: "input-icon", name: "Icon Input", category: "Inputs", description: "Input with leading icon", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e293b", textColor: "#e2e8f0", borderColor: "#334155", borderRadius: 8, fontSize: 14, fontWeight: 400, paddingX: 12, paddingY: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", background: bg(p), border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), maxWidth: 220, gap: 8 }}><span style={{ color: p.borderColor, fontSize: 14 }}>🔍</span><input placeholder="Search..." style={{ background: "transparent", color: p.textColor, border: "none", outline: "none", fontSize: p.fontSize, fontWeight: p.fontWeight, flex: 1 }} /></div>, html: (p) => `<div class="tv-in-icon"><span>🔍</span><input placeholder="Search..."/></div>`, css: (p) => `.tv-in-icon { display: flex; align-items: center; background: ${bg(p)}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; gap: 8px; }\n.tv-in-icon input { background: transparent; color: ${p.textColor}; border: none; outline: none; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; flex: 1; }`, tailwind: (p) => `<div class="flex items-center bg-[${p.bgColor}] border border-[${p.borderColor}] rounded-lg px-3 py-3 gap-2"><span class="text-sm">🔍</span><input class="bg-transparent text-[${p.textColor}] outline-none flex-1 text-sm" placeholder="Search..."/></div>` },
  { id: "input-float", name: "Floating Label Input", category: "Inputs", description: "Label floats up on focus", defaults: { ...DEFAULT_PROPS, text: "Email", bgColor: "#fff", textColor: "#0f172a", borderColor: "#e2e8f0", borderRadius: 8, fontSize: 14, fontWeight: 400, paddingX: 16, paddingY: 18 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", background: bg(p), border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), maxWidth: 220 }}><span style={{ position: "absolute", top: 8, left: 16, fontSize: 10, color: "#6366f1", fontWeight: 600 }}>{p.text}</span><div style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight, paddingTop: 8 }}>user@example.com</div></div>, html: (p) => `<div class="tv-in-float"><label>${p.text}</label><span>user@example.com</span></div>`, css: (p) => `.tv-in-float { position: relative; background: ${bg(p)}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; }\n.tv-in-float label { position: absolute; top: 8px; left: 16px; font-size: 10px; color: #6366f1; font-weight: 600; }\n.tv-in-float span { color: ${p.textColor}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; padding-top: 8px; display: block; }\n.tv-in-float:focus-within { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }`, tailwind: (p) => `<div class="relative bg-[${p.bgColor}] border border-[${p.borderColor}] rounded-lg px-4 py-4"><label class="absolute top-2 left-4 text-[10px] text-violet-500 font-semibold">${p.text}</label><span class="block pt-2 text-sm">user@example.com</span></div>` },
  { id: "input-underline", name: "Underline Input", category: "Inputs", description: "Minimal underline input", defaults: { ...DEFAULT_PROPS, text: "Name", bgColor: "transparent", textColor: "#0f172a", borderColor: "#6366f1", borderRadius: 0, fontSize: 16, fontWeight: 400, paddingX: 0, paddingY: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", maxWidth: 220 }}><input placeholder={p.text} style={{ background: "transparent", color: p.textColor, border: "none", borderBottom: `2px solid ${p.borderColor}40`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, outline: "none", width: "100%" }} /><div style={{ position: "absolute", bottom: 0, left: 0, width: "30%", height: 2, background: p.borderColor }} /></div>, html: (p) => `<div class="tv-in-und"><input placeholder="${p.text}"/><span></span></div>`, css: (p) => `.tv-in-und { position: relative; }\n.tv-in-und input { background: transparent; color: ${p.textColor}; border: none; border-bottom: 2px solid ${p.borderColor}40; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; outline: none; width: 100%; }\n.tv-in-und span { position: absolute; bottom: 0; left: 0; width: 30%; height: 2px; background: ${p.borderColor}; transition: width 0.3s; }\n.tv-in-und input:focus ~ span { width: 100%; }`, tailwind: (p) => `<div class="relative"><input class="bg-transparent text-[${p.textColor}] border-b-2 border-[${p.borderColor}]/40 px-0 py-2 text-base outline-none w-full" placeholder="${p.text}"/><span class="absolute bottom-0 left-0 w-1/3 h-0.5 bg-[${p.borderColor}]"></span></div>` },

  // ─────────────────────────────────────────────────────────────
  // PREMIUM AVATARS (8 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "avatar-gradient-ring", name: "Gradient Ring Avatar", category: "Avatars", description: "Avatar with gradient ring", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#1e1e2e", textColor: "#fff", borderColor: "#6366f1", borderRadius: 50, fontSize: 14, fontWeight: 700, paddingX: 0, paddingY: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, padding: 3, display: "inline-flex" }}><div style={{ width: "100%", height: "100%", borderRadius: "50%", background: bg(p), color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div>, html: (p) => `<div class="tv-av-grad"><div>${p.text}</div></div>`, css: (p) => `.tv-av-grad { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); padding: 3px; display: inline-flex; }\n.tv-av-grad > div { width: 100%; height: 100%; border-radius: 50%; background: ${bg(p)}; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="w-14 h-14 rounded-full bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] p-0.5"><div class="w-full h-full rounded-full bg-[${p.bgColor}] text-white flex items-center justify-center text-sm font-bold">${p.text}</div></div>` },
  { id: "avatar-status", name: "Status Avatar", category: "Avatars", description: "Avatar with status dot", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#6366f1", textColor: "#fff", borderColor: "#22c55e", borderRadius: 50, fontSize: 14, fontWeight: 700, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", width: 56, height: 56 }}><div style={{ width: "100%", height: "100%", borderRadius: "50%", background: bg(p), color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div><span style={{ position: "absolute", bottom: 2, right: 2, width: 12, height: 12, borderRadius: "50%", background: p.borderColor, border: "2px solid #fff" }} /></div>, html: (p) => `<div class="tv-av-stat">${p.text}<span class="tv-stat-dot"></span></div>`, css: (p) => `.tv-av-stat { position: relative; width: 56px; height: 56px; border-radius: 50%; background: ${bg(p)}; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }\n.tv-stat-dot { position: absolute; bottom: 2px; right: 2px; width: 12px; height: 12px; border-radius: 50%; background: ${p.borderColor}; border: 2px solid #fff; }`, tailwind: (p) => `<div class="relative w-14 h-14 rounded-full bg-[${p.bgColor}] text-white flex items-center justify-center text-sm font-bold">${p.text}<span class="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-[${p.borderColor}] border-2 border-white"></span></div>` },
  { id: "avatar-group", name: "Avatar Group", category: "Avatars", description: "Overlapping avatars", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#6366f1", textColor: "#fff", borderColor: "#fff", borderRadius: 50, fontSize: 12, fontWeight: 700, paddingX: 0, paddingY: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex" }}>{["#6366f1","#ec4899","#22d3ee","#f59e0b"].map((c, i) => <div key={i} style={{ width: 36, height: 36, borderRadius: "50%", background: c, color: "#fff", border: `2px solid ${p.borderColor}`, marginLeft: i === 0 ? 0 : -10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight, zIndex: 4-i }}>{String.fromCharCode(65+i)}</div>)}<div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1e1e2e", color: p.textColor, border: `2px solid ${p.borderColor}`, marginLeft: -10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight }}>+5</div></div>, html: () => `<div class="tv-av-group"><div>A</div><div>B</div><div>C</div><div>D</div><div>+5</div></div>`, css: (p) => `.tv-av-group { display: flex; }\n.tv-av-group > div { width: 36px; height: 36px; border-radius: 50%; color: #fff; border: 2px solid ${p.borderColor}; margin-left: -10px; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }\n.tv-av-group > div:first-child { margin-left: 0; }\n.tv-av-group > div:nth-child(1) { background: #6366f1; }\n.tv-av-group > div:nth-child(2) { background: #ec4899; }\n.tv-av-group > div:nth-child(3) { background: #22d3ee; }\n.tv-av-group > div:nth-child(4) { background: #f59e0b; }\n.tv-av-group > div:nth-child(5) { background: #1e1e2e; }`, tailwind: (p) => `<div class="flex"><div class="w-9 h-9 rounded-full bg-violet-500 text-white border-2 border-white flex items-center justify-center text-xs font-bold -mr-2">A</div><div class="w-9 h-9 rounded-full bg-pink-500 text-white border-2 border-white flex items-center justify-center text-xs font-bold -mr-2">B</div></div>` },
  { id: "avatar-square", name: "Square Avatar", category: "Avatars", description: "Square rounded avatar", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 12, fontSize: 14, fontWeight: 700, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 56, height: 56, borderRadius: p.borderRadius, background: bg(p), color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div>, html: (p) => `<div class="tv-av-sq">${p.text}</div>`, css: (p) => `.tv-av-sq { width: 56px; height: 56px; border-radius: ${p.borderRadius}px; background: ${bg(p)}; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="w-14 h-14 rounded-xl bg-[${p.bgColor}] text-white flex items-center justify-center text-sm font-bold">${p.text}</div>` },
  { id: "avatar-story", name: "Story Ring Avatar", category: "Avatars", description: "Instagram-style story ring", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#1e1e2e", textColor: "#fff", borderColor: "#ec4899", borderRadius: 50, fontSize: 14, fontWeight: 700, paddingX: 0, paddingY: 0, useGradient: true, gradientFrom: "#fbbf24", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, padding: 3, display: "inline-flex" }}><div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#fff", padding: 2 }}><div style={{ width: "100%", height: "100%", borderRadius: "50%", background: bg(p), color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div></div>, html: (p) => `<div class="tv-av-story"><div class="tv-story-pad"><div>${p.text}</div></div></div>`, css: (p) => `.tv-av-story { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); padding: 3px; display: inline-flex; }\n.tv-story-pad { width: 100%; height: 100%; border-radius: 50%; background: #fff; padding: 2px; }\n.tv-story-pad > div { width: 100%; height: 100%; border-radius: 50%; background: ${bg(p)}; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="w-16 h-16 rounded-full bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] p-1"><div class="w-full h-full rounded-full bg-white p-0.5"><div class="w-full h-full rounded-full bg-[${p.bgColor}] text-white flex items-center justify-center text-sm font-bold">${p.text}</div></div></div>` },
  { id: "avatar-glow", name: "Glow Avatar", category: "Avatars", description: "Avatar with glow effect", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 50, fontSize: 14, fontWeight: 700, paddingX: 0, paddingY: 0, shadowColor: "#6366f1", shadowBlur: 20 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 56, height: 56, borderRadius: "50%", background: bg(p), color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}` }}>{p.text}</div>, html: (p) => `<div class="tv-av-glow">${p.text}</div>`, css: (p) => `.tv-av-glow { width: 56px; height: 56px; border-radius: 50%; background: ${bg(p)}; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}; }`, tailwind: (p) => `<div class="w-14 h-14 rounded-full bg-[${p.bgColor}] text-white flex items-center justify-center text-sm font-bold shadow-[0_0_20px_${p.shadowColor}]">${p.text}</div>` },
  { id: "avatar-hex", name: "Hexagon Avatar", category: "Avatars", description: "Hexagonal clip-path avatar", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 0, fontSize: 14, fontWeight: 700, paddingX: 0, paddingY: 0 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 56, height: 56, background: bg(p), color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>{p.text}</div>, html: (p) => `<div class="tv-av-hex">${p.text}</div>`, css: (p) => `.tv-av-hex { width: 56px; height: 56px; background: ${bg(p)}; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }`, tailwind: (p) => `<div class="w-14 h-14 bg-[${p.bgColor}] text-white flex items-center justify-center text-sm font-bold [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">${p.text}</div>` },
  { id: "avatar-burst", name: "Burst Avatar", category: "Avatars", description: "Avatar with burst rays", defaults: { ...DEFAULT_PROPS, text: "JD", bgColor: "#6366f1", textColor: "#fff", borderColor: "#6366f1", borderRadius: 50, fontSize: 14, fontWeight: 700, paddingX: 0, paddingY: 0, shadowColor: "#6366f1", shadowBlur: 30 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", width: 56, height: 56, borderRadius: "50%", background: `radial-gradient(circle, ${p.shadowColor}30, transparent 70%)` }}><div style={{ position: "absolute", inset: 8, borderRadius: "50%", background: bg(p), color: p.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.fontSize, fontWeight: p.fontWeight }}>{p.text}</div></div>, html: (p) => `<div class="tv-av-burst"><div>${p.text}</div></div>`, css: (p) => `.tv-av-burst { position: relative; width: 56px; height: 56px; border-radius: 50%; background: radial-gradient(circle, ${p.shadowColor}30, transparent 70%); }\n.tv-av-burst > div { position: absolute; inset: 8px; border-radius: 50%; background: ${bg(p)}; color: ${p.textColor}; display: flex; align-items: center; justify-content: center; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; }`, tailwind: (p) => `<div class="relative w-14 h-14 rounded-full bg-[radial-gradient(circle,${p.shadowColor}_30%,transparent_70%)]"><div class="absolute inset-2 rounded-full bg-[${p.bgColor}] text-white flex items-center justify-center text-sm font-bold">${p.text}</div></div>` },

  // ─────────────────────────────────────────────────────────────
  // PREMIUM TOOLTIPS (8 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "tooltip-top", name: "Top Tooltip", category: "Tooltips", description: "Arrow tooltip top", defaults: { ...DEFAULT_PROPS, text: "Click here!", bgColor: "#0f172a", textColor: "#fff", borderColor: "#1e293b", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8, background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}<span style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderStyle: "solid", borderWidth: "5px 5px 0 5px", borderColor: `${bg(p)} transparent transparent transparent` }} /></div><span style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: 8, display: "inline-block" }}>Hover Me</span></div>, html: (p) => `<div class="tv-tip-top"><div class="tv-tip-content">${p.text}<span class="tv-tip-arrow"></span></div><span>Hover Me</span></div>`, css: (p) => `.tv-tip-top { position: relative; display: inline-block; }\n.tv-tip-content { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; font-weight: ${p.fontWeight}; white-space: nowrap; }\n.tv-tip-arrow { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-style: solid; border-width: 5px 5px 0 5px; border-color: ${bg(p)} transparent transparent transparent; }`, tailwind: (p) => `<div class="relative inline-block"><div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[${p.bgColor}] text-white rounded px-2 py-1 text-xs whitespace-nowrap">${p.text}</div><span class="bg-violet-500 text-white px-4 py-2 rounded-lg inline-block">Hover Me</span></div>` },
  { id: "tooltip-glass", name: "Glass Tooltip", category: "Tooltips", description: "Frosted glass tooltip", defaults: { ...DEFAULT_PROPS, text: "Premium feature", bgColor: "rgba(15,15,30,0.7)", textColor: "#fff", borderColor: "rgba(255,255,255,0.15)", borderRadius: 8, fontSize: 12, fontWeight: 500, paddingX: 12, paddingY: 8 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8, background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, backdropFilter: "blur(12px)", whiteSpace: "nowrap" }}>{p.text}</div><span style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: 8 }}>Hover</span></div>, html: (p) => `<div class="tv-tip-glass"><div class="tv-glass-tip">${p.text}</div><span>Hover</span></div>`, css: (p) => `.tv-tip-glass { position: relative; display: inline-block; }\n.tv-glass-tip { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; backdrop-filter: blur(12px); white-space: nowrap; }`, tailwind: (p) => `<div class="relative inline-block"><div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 backdrop-blur-md bg-black/50 text-white border border-white/15 rounded-lg px-3 py-2 text-xs">${p.text}</div><span class="bg-violet-500 text-white px-4 py-2 rounded-lg">Hover</span></div>` },
  { id: "tooltip-bottom", name: "Bottom Tooltip", category: "Tooltips", description: "Arrow tooltip bottom", defaults: { ...DEFAULT_PROPS, text: "More info below", bgColor: "#0f172a", textColor: "#fff", borderColor: "#1e293b", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><span style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: 8 }}>Hover Me</span><div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8, background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}</div></div>, html: (p) => `<div class="tv-tip-bot"><span>Hover Me</span><div class="tv-tip-bot-c">${p.text}</div></div>`, css: (p) => `.tv-tip-bot { position: relative; display: inline-block; }\n.tv-tip-bot-c { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); margin-top: 8px; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; }`, tailwind: (p) => `<div class="relative inline-block"><span class="bg-violet-500 text-white px-4 py-2 rounded-lg">Hover Me</span><div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[${p.bgColor}] text-white rounded px-2 py-1 text-xs whitespace-nowrap">${p.text}</div></div>` },
  { id: "tooltip-neon", name: "Neon Tooltip", category: "Tooltips", description: "Glowing neon tooltip", defaults: { ...DEFAULT_PROPS, text: "Cyberpunk tip", bgColor: "#0a0a14", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: 4, fontSize: 12, fontWeight: 600, paddingX: 10, paddingY: 6, shadowColor: "#22d3ee", shadowBlur: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8, background: bg(p), color: p.textColor, border: `1px solid ${p.borderColor}`, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}`, textShadow: `0 0 4px ${p.shadowColor}`, whiteSpace: "nowrap" }}>{p.text}</div><span style={{ background: "#22d3ee", color: "#0a0a14", padding: "8px 16px", borderRadius: 8, fontWeight: 700 }}>Hover</span></div>, html: (p) => `<div class="tv-tip-neon"><div class="tv-neon-tip">${p.text}</div><span>Hover</span></div>`, css: (p) => `.tv-tip-neon { position: relative; display: inline-block; }\n.tv-neon-tip { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: ${bg(p)}; color: ${p.textColor}; border: 1px solid ${p.borderColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}; text-shadow: 0 0 4px ${p.shadowColor}; white-space: nowrap; }`, tailwind: (p) => `<div class="relative inline-block"><div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[${p.bgColor}] text-[${p.textColor}] border border-[${p.borderColor}] rounded px-2 py-1 text-xs shadow-[0_0_12px_${p.shadowColor}]">${p.text}</div><span class="bg-[${p.borderColor}] text-black px-4 py-2 rounded-lg font-bold">Hover</span></div>` },
  { id: "tooltip-left", name: "Left Tooltip", category: "Tooltips", description: "Arrow tooltip left", defaults: { ...DEFAULT_PROPS, text: "Left tip", bgColor: "#0f172a", textColor: "#fff", borderColor: "#1e293b", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><div style={{ position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8, background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}</div><span style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: 8 }}>Hover</span></div>, html: (p) => `<div class="tv-tip-left"><div class="tv-left-tip">${p.text}</div><span>Hover</span></div>`, css: (p) => `.tv-tip-left { position: relative; display: inline-block; }\n.tv-left-tip { position: absolute; right: 100%; top: 50%; transform: translateY(-50%); margin-right: 8px; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; }`, tailwind: (p) => `<div class="relative inline-block"><div class="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-[${p.bgColor}] text-white rounded px-2 py-1 text-xs whitespace-nowrap">${p.text}</div><span class="bg-violet-500 text-white px-4 py-2 rounded-lg">Hover</span></div>` },
  { id: "tooltip-right", name: "Right Tooltip", category: "Tooltips", description: "Arrow tooltip right", defaults: { ...DEFAULT_PROPS, text: "Right tip", bgColor: "#0f172a", textColor: "#fff", borderColor: "#1e293b", borderRadius: 6, fontSize: 12, fontWeight: 500, paddingX: 10, paddingY: 6 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><span style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: 8 }}>Hover</span><div style={{ position: "absolute", left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8, background: bg(p), color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "nowrap" }}>{p.text}</div></div>, html: (p) => `<div class="tv-tip-right"><span>Hover</span><div class="tv-right-tip">${p.text}</div></div>`, css: (p) => `.tv-tip-right { position: relative; display: inline-block; }\n.tv-right-tip { position: absolute; left: 100%; top: 50%; transform: translateY(-50%); margin-left: 8px; background: ${bg(p)}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: nowrap; }`, tailwind: (p) => `<div class="relative inline-block"><span class="bg-violet-500 text-white px-4 py-2 rounded-lg">Hover</span><div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-[${p.bgColor}] text-white rounded px-2 py-1 text-xs whitespace-nowrap">${p.text}</div></div>` },
  { id: "tooltip-rich", name: "Rich Tooltip", category: "Tooltips", description: "Tooltip with title and desc", defaults: { ...DEFAULT_PROPS, text: "Pro Tip\nUse cmd+k to search", bgColor: "#0f172a", textColor: "#e2e8f0", borderColor: "#6366f1", borderRadius: 8, fontSize: 12, fontWeight: 400, paddingX: 12, paddingY: 10 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8, background: bg(p), border: `1px solid ${p.borderColor}`, color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, whiteSpace: "pre-wrap", minWidth: 140 }}><strong style={{ color: p.borderColor, fontWeight: 700, display: "block", marginBottom: 4 }}>Pro Tip</strong>Use cmd+k to search</div><span style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: 8 }}>Hover</span></div>, html: () => `<div class="tv-tip-rich"><div class="tv-rich-tip"><strong>Pro Tip</strong>Use cmd+k to search</div><span>Hover</span></div>`, css: (p) => `.tv-tip-rich { position: relative; display: inline-block; }\n.tv-rich-tip { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: ${bg(p)}; border: 1px solid ${p.borderColor}; color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; white-space: pre-wrap; min-width: 140px; }\n.tv-rich-tip strong { color: ${p.borderColor}; font-weight: 700; display: block; margin-bottom: 4px; }`, tailwind: (p) => `<div class="relative inline-block"><div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[${p.bgColor}] border border-[${p.borderColor}] text-white rounded-lg p-3 text-xs min-w-[140px]"><strong class="text-violet-500 block mb-1">Pro Tip</strong>Use cmd+k to search</div><span class="bg-violet-500 text-white px-4 py-2 rounded-lg">Hover</span></div>` },
  { id: "tooltip-gradient", name: "Gradient Tooltip", category: "Tooltips", description: "Gradient background tooltip", defaults: { ...DEFAULT_PROPS, text: "Beautiful gradient tip", textColor: "#fff", borderRadius: 8, fontSize: 12, fontWeight: 600, paddingX: 12, paddingY: 8, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ position: "relative", display: "inline-block" }}><div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8, background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`, color: p.textColor, borderRadius: p.borderRadius, padding: pad(p), fontSize: p.fontSize, fontWeight: p.fontWeight, boxShadow: `0 4px 12px ${p.gradientFrom}60`, whiteSpace: "nowrap" }}>{p.text}</div><span style={{ background: "#1e1e2e", color: "#fff", padding: "8px 16px", borderRadius: 8 }}>Hover</span></div>, html: (p) => `<div class="tv-tip-grad"><div class="tv-grad-tip">${p.text}</div><span>Hover</span></div>`, css: (p) => `.tv-tip-grad { position: relative; display: inline-block; }\n.tv-grad-tip { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo}); color: ${p.textColor}; border-radius: ${p.borderRadius}px; padding: ${pad(p)}; font-size: ${p.fontSize}px; box-shadow: 0 4px 12px ${p.gradientFrom}60; white-space: nowrap; }`, tailwind: (p) => `<div class="relative inline-block"><div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gradient-to-br from-[${p.gradientFrom}] to-[${p.gradientTo}] text-white rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-lg">${p.text}</div><span class="bg-[#1e1e2e] text-white px-4 py-2 rounded-lg">Hover</span></div>` },

  // ─────────────────────────────────────────────────────────────
  // PREMIUM PROGRESS (8 new, total 10)
  // ─────────────────────────────────────────────────────────────
  { id: "progress-glow", name: "Glow Progress Bar", category: "Progress", description: "Glowing animated bar", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e1e2e", borderColor: "#22d3ee", borderRadius: 4, shadowColor: "#22d3ee", shadowBlur: 12 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 6, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden", boxShadow: `inset 0 0 4px rgba(0,0,0,0.3)` }}><div style={{ width: "65%", height: "100%", background: p.borderColor, borderRadius: p.borderRadius, boxShadow: `0 0 ${p.shadowBlur}px ${p.shadowColor}`, animation: "tv-prog-glow 2s ease-in-out infinite" }} /></div>, html: () => `<div class="tv-prog-glow"><div></div></div>`, css: (p) => `.tv-prog-glow { width: 100%; height: 6px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-prog-glow > div { width: 65%; height: 100%; background: ${p.borderColor}; border-radius: ${p.borderRadius}px; box-shadow: 0 0 ${p.shadowBlur}px ${p.shadowColor}; animation: tv-prog-glow 2s ease-in-out infinite; }\n@keyframes tv-prog-glow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }`, tailwind: (p) => `<div class="w-48 h-1.5 bg-[${p.bgColor}] rounded overflow-hidden"><div class="w-2/3 h-full bg-[${p.borderColor}] rounded shadow-[0_0_12px_${p.shadowColor}]"></div></div>` },
  { id: "progress-stripes", name: "Striped Progress", category: "Progress", description: "Animated diagonal stripes", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e293b", borderColor: "#6366f1", borderRadius: 4, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#8b5cf6" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 8, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden" }}><div style={{ width: "70%", height: "100%", background: `linear-gradient(45deg, ${p.gradientFrom} 25%, ${p.gradientTo} 25%, ${p.gradientTo} 50%, ${p.gradientFrom} 50%, ${p.gradientFrom} 75%, ${p.gradientTo} 75%, ${p.gradientTo})`, backgroundSize: "20px 20px", borderRadius: p.borderRadius, animation: "tv-stripes-move 1s linear infinite" }} /></div>, html: () => `<div class="tv-prog-stripe"><div></div></div>`, css: (p) => `.tv-prog-stripe { width: 100%; height: 8px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; }\n.tv-prog-stripe > div { width: 70%; height: 100%; background: linear-gradient(45deg, ${p.gradientFrom} 25%, ${p.gradientTo} 25%, ${p.gradientTo} 50%, ${p.gradientFrom} 50%, ${p.gradientFrom} 75%, ${p.gradientTo} 75%, ${p.gradientTo}); background-size: 20px 20px; border-radius: ${p.borderRadius}px; animation: tv-stripes-move 1s linear infinite; }\n@keyframes tv-stripes-move { 0% { background-position: 0 0; } 100% { background-position: 20px 0; } }`, tailwind: (p) => `<div class="w-48 h-2 bg-[${p.bgColor}] rounded overflow-hidden"><div class="w-3/4 h-full bg-[linear-gradient(45deg,${p.gradientFrom}_25%,${p.gradientTo}_25%)] bg-[length:20px_20px] rounded"></div></div>` },
  { id: "progress-circular", name: "Circular Progress", category: "Progress", description: "Circular SVG progress", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e1e2e", borderColor: "#6366f1", borderRadius: 0, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <svg width="60" height="60" viewBox="0 0 60 60"><defs><linearGradient id="tv-circ-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={p.gradientFrom} /><stop offset="100%" stopColor={p.gradientTo} /></linearGradient></defs><circle cx="30" cy="30" r="24" stroke={p.bgColor} strokeWidth="6" fill="none" /><circle cx="30" cy="30" r="24" stroke="url(#tv-circ-grad)" strokeWidth="6" fill="none" strokeDasharray="150" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 30 30)" /></svg>, html: () => `<svg class="tv-prog-circ" viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" class="tv-circ-bg"/><circle cx="30" cy="30" r="24" class="tv-circ-fg"/></svg>`, css: (p) => `.tv-prog-circ { width: 60px; height: 60px; }\n.tv-prog-circ .tv-circ-bg { stroke: ${bg(p)}; stroke-width: 6; fill: none; }\n.tv-prog-circ .tv-circ-fg { stroke: ${p.borderColor}; stroke-width: 6; fill: none; stroke-dasharray: 150; stroke-dashoffset: 50; stroke-linecap: round; transform: rotate(-90deg); transform-origin: center; }`, tailwind: (p) => `<svg viewBox="0 0 60 60" class="w-16 h-16"><circle cx="30" cy="30" r="24" stroke="${p.bgColor}" strokeWidth="6" fill="none"/><circle cx="30" cy="30" r="24" stroke="${p.borderColor}" strokeWidth="6" fill="none" strokeDasharray="150" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 30 30)"/></svg>` },
  { id: "progress-gradient", name: "Gradient Progress", category: "Progress", description: "Gradient bar with shine", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e1e2e", borderRadius: 4, useGradient: true, gradientFrom: "#6366f1", gradientTo: "#ec4899" }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 6, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden", position: "relative" }}><div style={{ width: "75%", height: "100%", background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`, borderRadius: p.borderRadius, position: "relative" }} /></div>, html: () => `<div class="tv-prog-grad"><div></div></div>`, css: (p) => `.tv-prog-grad { width: 100%; height: 6px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; position: relative; }\n.tv-prog-grad > div { width: 75%; height: 100%; background: linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo}); border-radius: ${p.borderRadius}px; position: relative; }\n.tv-prog-grad > div::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%; background: rgba(255,255,255,0.2); border-radius: ${p.borderRadius}px ${p.borderRadius}px 0 0; }`, tailwind: (p) => `<div class="w-48 h-1.5 bg-[${p.bgColor}] rounded overflow-hidden"><div class="w-3/4 h-full bg-gradient-to-r from-[${p.gradientFrom}] to-[${p.gradientTo}] rounded"></div></div>` },
  { id: "progress-steps", name: "Step Progress", category: "Progress", description: "Multi-step progress indicator", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e1e2e", borderColor: "#6366f1", borderRadius: 50 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ display: "flex", alignItems: "center", gap: 4, width: 200 }}>{[true, true, true, false, false].map((done, i) => <div key={i} style={{ flex: 1, display: "flex", alignItems: "center" }}><div style={{ width: 14, height: 14, borderRadius: "50%", background: done ? p.borderColor : bg(p), border: `1px solid ${done ? p.borderColor : p.borderColor + "50"}` }} />{i < 4 && <div style={{ flex: 1, height: 2, background: done ? p.borderColor : bg(p) }} />}</div>)}</div>, html: () => `<div class="tv-prog-steps"><span class="done"></span><span class="done"></span><span class="done"></span><span></span><span></span></div>`, css: (p) => `.tv-prog-steps { display: flex; align-items: center; gap: 4px; }\n.tv-prog-steps span { width: 14px; height: 14px; border-radius: 50%; border: 1px solid ${p.borderColor}; background: ${bg(p)}; flex: none; }\n.tv-prog-steps span.done { background: ${p.borderColor}; }`, tailwind: (p) => `<div class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-[${p.borderColor}] border border-[${p.borderColor}]"></span><span class="w-3.5 h-3.5 rounded-full bg-[${p.bgColor}] border border-[${p.borderColor}]/50"></span></div>` },
  { id: "progress-wave", name: "Wave Progress", category: "Progress", description: "Wave animation in bar", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e1e2e", borderColor: "#22d3ee", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 24, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden", position: "relative" }}><div style={{ position: "absolute", bottom: 0, left: 0, width: "65%", height: "100%", background: p.borderColor, borderRadius: p.borderRadius }} /><div style={{ position: "absolute", bottom: "60%", left: 0, width: "65%", height: "100%", background: `${p.borderColor}60`, borderRadius: "50%", filter: "blur(2px)" }} /></div>, html: () => `<div class="tv-prog-wave"><div class="tv-wave-fill"></div><div class="tv-wave-top"></div></div>`, css: (p) => `.tv-prog-wave { width: 100%; height: 24px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; position: relative; }\n.tv-wave-fill { position: absolute; bottom: 0; left: 0; width: 65%; height: 100%; background: ${p.borderColor}; border-radius: ${p.borderRadius}px; }\n.tv-wave-top { position: absolute; bottom: 60%; left: 0; width: 65%; height: 100%; background: ${p.borderColor}60; border-radius: 50%; filter: blur(2px); animation: tv-wave-anim 2s ease-in-out infinite; }\n@keyframes tv-wave-anim { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(10px); } }`, tailwind: (p) => `<div class="w-48 h-6 bg-[${p.bgColor}] rounded overflow-hidden relative"><div class="absolute bottom-0 left-0 w-2/3 h-full bg-[${p.borderColor}] rounded"></div></div>` },
  { id: "progress-pulse", name: "Pulse Progress", category: "Progress", description: "Pulsing bar end", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#1e1e2e", borderColor: "#6366f1", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 8, background: bg(p), borderRadius: p.borderRadius, overflow: "hidden", position: "relative" }}><div style={{ width: "60%", height: "100%", background: p.borderColor, borderRadius: p.borderRadius, position: "relative" }}><span style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 20, background: "#fff", opacity: 0.5, animation: "tv-pulse-end 1.5s ease-in-out infinite" }} /></div></div>, html: () => `<div class="tv-prog-pulse"><div><span></span></div></div>`, css: (p) => `.tv-prog-pulse { width: 100%; height: 8px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; overflow: hidden; position: relative; }\n.tv-prog-pulse > div { width: 60%; height: 100%; background: ${p.borderColor}; border-radius: ${p.borderRadius}px; position: relative; }\n.tv-prog-pulse span { position: absolute; right: 0; top: 0; bottom: 0; width: 20px; background: #fff; opacity: 0.5; animation: tv-pulse-end 1.5s ease-in-out infinite; }\n@keyframes tv-pulse-end { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }`, tailwind: (p) => `<div class="w-48 h-2 bg-[${p.bgColor}] rounded overflow-hidden"><div class="w-3/5 h-full bg-[${p.borderColor}] rounded relative"><span class="absolute right-0 top-0 bottom-0 w-5 bg-white opacity-50 animate-pulse"></span></div></div>` },
  { id: "progress-3d", name: "3D Progress Bar", category: "Progress", description: "3D effect progress", defaults: { ...DEFAULT_PROPS, text: "", bgColor: "#0f172a", borderColor: "#6366f1", borderRadius: 4 }, controls: COMMON_CONTROLS, render: (p) => <div style={{ width: 200, height: 12, background: bg(p), borderRadius: p.borderRadius, boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)", overflow: "hidden" }}><div style={{ width: "70%", height: "100%", background: `linear-gradient(180deg, ${p.borderColor}, ${p.borderColor}cc)`, borderRadius: p.borderRadius, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} /></div>, html: () => `<div class="tv-prog-3d"><div></div></div>`, css: (p) => `.tv-prog-3d { width: 100%; height: 12px; background: ${bg(p)}; border-radius: ${p.borderRadius}px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); overflow: hidden; }\n.tv-prog-3d > div { width: 70%; height: 100%; background: linear-gradient(180deg, ${p.borderColor}, ${p.borderColor}cc); border-radius: ${p.borderRadius}px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.3); }`, tailwind: (p) => `<div class="w-48 h-3 bg-[${p.bgColor}] rounded shadow-inner overflow-hidden"><div class="w-3/4 h-full bg-[${p.borderColor}] rounded"></div></div>` },

];


// ─── Named React component wrappers ───────────────────

export interface LibraryComponentProps extends Partial<ComponentProps> {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const SolidButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-solid");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const OutlineButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-outline");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PillButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-pill");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-icon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const _3DButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-3d");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BasicCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-basic");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeonCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-neon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PricingCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-pricing");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const InfoAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-info");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SuccessAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-success");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const WarningAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-warning");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ErrorAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-error");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SolidBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-solid");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const OutlineBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-outline");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DotBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-dot");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TextInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-text");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SearchBar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-search");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CircleAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-circle");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SquareAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-square");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TooltipTop: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-top");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TooltipBottom: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-bottom");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ProgressBar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-bar");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CircularProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-circle");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const LineDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-line");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TextDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-text");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SkeletonLoader: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "skeleton");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RemovableTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-removable");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const StatusTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-status");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GhostButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-ghost");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FABButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-fab");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ToggleSwitch: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-toggle");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const LinkButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-link");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BlockButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-block");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientTextButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-grad-text");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const HoverLiftCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-lift");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SpotlightCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-spotlight");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const StatsCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-stats");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ProfileCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-profile");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const _3DFlipCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-3d");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Textarea: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-textarea");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Select: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-select");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Checkbox: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-checkbox");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SimpleNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-simple");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CenteredHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-centered");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SplitHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-split");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CodeBlock: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "code-block");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Breadcrumb: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "breadcrumb");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ModalDialog: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "modal-dialog");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ToastNotification: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "toast");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RingSpinner: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "loader-ring");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const EmptyState: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "empty-state");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MagneticButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-magnetic");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SlideBackground: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-slide-bg");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const WaveButton: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-wave");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowPulse: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-glow-pulse");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientShift: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-gradient-hover");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconBounce: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "btn-icon-bounce");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientBorderCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-glow-border");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ShineCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-shine");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MorphCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-morph");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FloatingCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-float");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TiltCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-tilt");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassHoverCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-glass-hover");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BounceDots: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "loader-dots-bounce");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const EqualizerBars: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "loader-bars");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PulseRing: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "loader-pulse-ring");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CubeFlip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "loader-cube");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ProgressBarLoader: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "loader-progress");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Orbit: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "loader-orbit");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientText: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "text-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeonText: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "text-neon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlitchText: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "text-glitch");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ShimmerText: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "text-shimmer");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FireText: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "text-fire");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TypingEffect: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "text-typing");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GridPattern: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "bg-grid");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MeshGradient: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "bg-mesh");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Aurora: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "bg-aurora");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Starfield: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "bg-stars");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FloatingOrbs: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "bg-orbs");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AnimatedWaves: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "bg-waves");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AnimatedUnderline: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hover-underline");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ZoomReveal: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hover-zoom");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const LiftUp: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hover-lift");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Rotate360: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hover-rotate");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Shake: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hover-shake");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FlipX: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hover-flip");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientBorder: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowBorder: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CornerBrackets: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-corners");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeonPulseBorder: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-neon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DashedFlow: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-dashed");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DoubleBorder: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-double");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AnimatedBorder: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-animated");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ShadowBorder: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-shadow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const InsetBorder: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "border-inset");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientInfoAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-info-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BorderedAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-bordered");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RoundedAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-rounded");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BannerAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-banner");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DismissibleAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-dismissible");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ActionAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-action");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ShimmerBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-shimmer");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PulseBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-pulse");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ChipBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-chip");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-icon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CountBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-count");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RoundedInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-rounded");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const UnderlinedInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-underlined");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FloatingLabel: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-floating");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconLeftInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-icon-left");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PasswordInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-password");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SwitchToggle: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-switch");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RingAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-ring");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const StatusAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-status");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AvatarGroup: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-group");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const LargeAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-xl");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RoundedRectAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-rounded-rect");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TooltipRight: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-right");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TooltipLeft: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-left");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowTooltip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ArrowTooltip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-arrow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientTooltip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkTooltip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AnimatedProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-animated");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ThinProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-thin");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CircularProgress_progresscircular: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-circular");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SegmentedProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-segments");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CenteredNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-centered");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SplitNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-split");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TransparentNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-transparent");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RoundedNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-rounded");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MinimalHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-minimal");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeonHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-neon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SplitDarkHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-split-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkModal: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "modal-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassModal: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "modal-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ErrorToast: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "toast-error");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const InfoToast: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "toast-info");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkToast: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "toast-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ConfirmModal: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "modal-confirm");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const LoadingState: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "state-loading");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ErrorState: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "state-error");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SuccessState: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "state-success");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NoPermissionState: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "state-no-permission");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const _404State: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "state-not-found");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MaintenanceState: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "state-maintenance");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DashedDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-dashed");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DottedDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-dotted");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DoubleDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-double");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-icon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ThickDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-thick");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TerminalCode: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "code-terminal");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const InlineCode: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "code-inline");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkCodeBlock: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "code-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowCodeBlock: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "code-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientCodeBlock: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "code-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CodeWindow: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "code-window");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TabNavigation: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "nav-tabs");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PillNavigation: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "nav-pills");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BottomNav: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "nav-bottom");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const StepNavigation: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "nav-steps");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Pagination: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "nav-pagination");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TreeNavigation: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "nav-tree");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeonTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-neon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AnimatedOutlineTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-outline");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const _3DPushTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-3d");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ShineTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-shine");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ChipTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-chip-icon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CounterTag: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tag-counter");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SpotlightNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-spotlight");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MegaMenuNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-mega");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PillFloatingNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-pilled");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const SidebarToggleNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-sidebar-toggle");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ScrollAwareNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-blur-scroll");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NavbarwithSearch: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-search");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AnimatedUnderlineNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-underline");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconPillsNavbar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "navbar-icon-pills");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AuroraHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-aurora");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GridPatternHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-grid");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MouseSpotlightHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-spotlight");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FloatingShapesHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-floats");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ParticlesHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-particles");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const CardMosaicHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-card-mosaic");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const TerminalHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-terminal");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ProductShowcaseHero: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "hero-product");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const WaveDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-wave");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FadeDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-fade");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ZigzagDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-zigzag");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ParticleDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-particles");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const MountainDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-mountain");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const _3DShadowDivider: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "divider-3d");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const HolographicCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-holographic");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const Retro80sCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-retro");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeumorphicCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-neumorph");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const AuroraGlowCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-aurora");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PaperFoldCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-paper-fold");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const DarkGlassCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-glass-dark");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PerspectiveCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-perspective");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientMeshCard: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "card-gradient-mesh");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeonAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-neon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientBorderAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-gradient");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BannerSlideAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-banner-slide");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconBlockAlert: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "alert-icon-block");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const ShineBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-shine");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const _3DBadge: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "badge-3d");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const IconInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-icon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const FloatingLabelInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-float");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const UnderlineInput: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "input-underline");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GradientRingAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-gradient-ring");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const StoryRingAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-story");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlowAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-glow");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const HexagonAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-hex");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const BurstAvatar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "avatar-burst");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const GlassTooltip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-glass");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const NeonTooltip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-neon");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const RichTooltip: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "tooltip-rich");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const StripedProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-stripes");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const StepProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-steps");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const WaveProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-wave");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const PulseProgress: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-pulse");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

export const _3DProgressBar: React.FC<LibraryComponentProps> = (props) => {
  const comp = COMPONENTS.find(c => c.id === "progress-3d");
  if (!comp) return null;
  const mergedProps: ComponentProps = { ...DEFAULT_PROPS, ...comp.defaults, ...props };
  return <>{comp.render(mergedProps)}</>;
};

// Export the COMPONENTS array and types for advanced usage
export { COMPONENTS, DEFAULT_PROPS };
export const CATEGORIES = ["All", "Buttons", "Cards", "Alerts", "Badges", "Inputs", "Avatars", "Tooltips", "Progress", "Dividers", "Loaders", "Tags", "Navbar", "Hero", "Code", "Navigation", "Overlay", "States"];
export type { ComponentProps, ComponentDef, ControlDef };
