// ═══════════════════════════════════════════════════════
// Loader.tsx — Toolverse Loader (Spinner + Skeleton + Dots)
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export interface SpinnerProps {
  size?: number;           // px, default 24
  variant?: "primary" | "secondary" | "accent" | "neutral";
  thickness?: number;      // default 3
}

const SPINNER_COLORS: Record<NonNullable<SpinnerProps["variant"]>, string> = {
  primary: "#6366f1", secondary: "#8b5cf6", accent: "#ec4899", neutral: "#94a3b8",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 24, variant = "primary", thickness = 3,
}) => (
  <span
    style={{
      display: "inline-block",
      width: size, height: size,
      border: `${thickness}px solid ${SPINNER_COLORS[variant]}33`,
      borderTopColor: SPINNER_COLORS[variant],
      borderRadius: "50%",
      animation: "tv-spinner 0.6s linear infinite",
    }}
  >
    <style>{`@keyframes tv-spinner { to { transform: rotate(360deg); } }`}</style>
  </span>
);

// ─── Skeleton ─────────────────────────────────────────

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  count?: number;       // number of skeleton lines
  gap?: number;         // px between lines
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%", height = 14, borderRadius = 4, count = 1, gap = 8,
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap }}>
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        style={{
          width: i === count - 1 && count > 1 ? "60%" : width,
          height, borderRadius,
          background: "linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)",
          backgroundSize: "200% 100%",
          animation: "tv-skeleton 1.5s ease-in-out infinite",
        }}
      />
    ))}
    <style>{`@keyframes tv-skeleton { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
  </div>
);

// ─── Dots ─────────────────────────────────────────────

export interface DotsLoaderProps {
  size?: number;        // dot size, default 8
  variant?: SpinnerProps["variant"];
}

export const DotsLoader: React.FC<DotsLoaderProps> = ({ size = 8, variant = "primary" }) => {
  const color = SPINNER_COLORS[variant || "primary"];
  return (
    <div style={{ display: "inline-flex", gap: size * 0.5, alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: size, height: size, borderRadius: "50%", background: color,
            animation: `tv-dots 1.2s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
      <style>{`@keyframes tv-dots { 0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; } 40% { transform: scale(1); opacity: 1; } }`}</style>
    </div>
  );
};

export default Spinner;
