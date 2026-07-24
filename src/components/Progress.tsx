// ═══════════════════════════════════════════════════════
// Progress.tsx — Toolverse Progress (linear + circular)
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type ProgressVariant = "primary" | "success" | "warning" | "danger";

export interface ProgressProps {
  value: number;              // 0-100
  max?: number;               // default 100
  variant?: ProgressVariant;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  striped?: boolean;
  animated?: boolean;
}

const VARIANT_COLORS: Record<ProgressVariant, string> = {
  primary: "#6366f1", success: "#10b981", warning: "#f59e0b", danger: "#ef4444",
};

const SIZES: Record<NonNullable<ProgressProps["size"]>, number> = {
  sm: 4, md: 8, lg: 12,
};

export const Progress: React.FC<ProgressProps> = ({
  value, max = 100, variant = "primary", size = "md",
  showLabel = false, striped = false, animated = false,
}) => {
  const theme = useToolverseTheme();
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const color = VARIANT_COLORS[variant];
  const h = SIZES[size];

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%", height: h,
          background: theme.colors.border, borderRadius: 9999,
          overflow: "hidden", position: "relative",
        }}
      >
        <div
          style={{
            width: `${pct}%`, height: "100%",
            background: color, borderRadius: 9999,
            transition: "width 0.3s ease",
            backgroundImage: striped
              ? `linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)`
              : undefined,
            backgroundSize: striped ? "16px 16px" : undefined,
            animation: animated ? "tv-progress-stripes 1s linear infinite" : undefined,
          }}
        />
        {animated && (
          <style>{`@keyframes tv-progress-stripes { from { background-position: 0 0; } to { background-position: 16px 0; } }`}</style>
        )}
      </div>
      {showLabel && (
        <div style={{ fontSize: 11, color: theme.colors.textMuted, marginTop: 4, textAlign: "right" }}>
          {Math.round(pct)}%
        </div>
      )}
    </div>
  );
};

// ─── CircularProgress ─────────────────────────────────

export interface CircularProgressProps {
  value: number;                // 0-100
  size?: number;                // px, default 60
  strokeWidth?: number;         // default 6
  variant?: ProgressVariant;
  showLabel?: boolean;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value, size = 60, strokeWidth = 6, variant = "primary", showLabel = false,
}) => {
  const theme = useToolverseTheme();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(100, Math.max(0, value));
  const offset = circumference - (pct / 100) * circumference;
  const color = VARIANT_COLORS[variant];

  return (
    <div style={{ position: "relative", width: size, height: size, display: "inline-block" }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={theme.colors.border}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
      {showLabel && (
        <div
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: size * 0.22, fontWeight: 700,
            color: theme.colors.text, fontFamily: theme.fonts.sans,
          }}
        >
          {Math.round(pct)}%
        </div>
      )}
    </div>
  );
};

export default Progress;
