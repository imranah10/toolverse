// ═══════════════════════════════════════════════════════
// Alert.tsx — Toolverse Alert banner
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
}

const alertColors = {
  info: { bg: "#eff6ff", fg: "#1e40af", border: "#3b82f6" },
  success: { bg: "#ecfdf5", fg: "#065f46", border: "#10b981" },
  warning: { bg: "#fffbeb", fg: "#92400e", border: "#f59e0b" },
  danger: { bg: "#fef2f2", fg: "#991b1b", border: "#ef4444" },
};

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();
  const c = alertColors[variant];

  return (
    <div
      role="alert"
      style={{
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.border}`,
        borderRadius: theme.radii.md,
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        fontSize: "13px",
        fontFamily: theme.fonts.sans,
        ...style,
      }}
      {...rest}
    >
      {title && (
        <div style={{ fontWeight: 700, marginBottom: "4px" }}>{title}</div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Alert;
