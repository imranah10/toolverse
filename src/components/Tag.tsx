// ═══════════════════════════════════════════════════════
// Tag.tsx — Toolverse Tag (removable chip)
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type TagVariant = "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "neutral";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
}

const TAG_COLORS: Record<TagVariant, { bg: string; fg: string }> = {
  primary:   { bg: "#6366f122", fg: "#6366f1" },
  secondary: { bg: "#8b5cf622", fg: "#8b5cf6" },
  accent:    { bg: "#ec489922", fg: "#ec4899" },
  success:   { bg: "#10b98122", fg: "#10b981" },
  warning:   { bg: "#f59e0b22", fg: "#f59e0b" },
  danger:    { bg: "#ef444422", fg: "#ef4444" },
  neutral:   { bg: "#64748b22", fg: "#64748b" },
};

export const Tag: React.FC<TagProps> = ({
  variant = "primary", removable = false, onRemove, icon, children, style, ...rest
}) => {
  const theme = useToolverseTheme();
  const c = TAG_COLORS[variant];

  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: c.bg, color: c.fg,
        padding: "4px 10px", borderRadius: theme.radii.sm,
        fontSize: "12px", fontWeight: 600,
        fontFamily: theme.fonts.sans,
        ...style,
      }}
      {...rest}
    >
      {icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          aria-label="Remove tag"
          style={{
            background: "transparent", border: "none", cursor: "pointer",
            color: c.fg, padding: 0, display: "inline-flex",
            marginLeft: 2, opacity: 0.7,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
        >
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
