// ═══════════════════════════════════════════════════════
// Badge.tsx — Toolverse Badge
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  dot = false,
  children,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();

  const variantMap: Record<BadgeVariant, { bg: string; fg: string }> = {
    primary: { bg: theme.colors.primary + "22", fg: theme.colors.primary },
    secondary: { bg: theme.colors.secondary + "22", fg: theme.colors.secondary },
    accent: { bg: theme.colors.accent + "22", fg: theme.colors.accent },
    success: { bg: theme.colors.success + "22", fg: theme.colors.success },
    warning: { bg: theme.colors.warning + "22", fg: theme.colors.warning },
    danger: { bg: theme.colors.danger + "22", fg: theme.colors.danger },
    neutral: { bg: theme.colors.textMuted + "22", fg: theme.colors.textMuted },
  };

  const c = variantMap[variant];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: c.bg,
        color: c.fg,
        padding: "2px 10px",
        borderRadius: theme.radii.full,
        fontSize: "11px",
        fontWeight: 600,
        fontFamily: theme.fonts.sans,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: c.fg,
          }}
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
