// ═══════════════════════════════════════════════════════
// Divider.tsx — Toolverse Divider
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: "solid" | "dashed" | "dotted";
  label?: React.ReactNode;
  labelPosition?: "left" | "center" | "right";
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  label,
  labelPosition = "center",
}) => {
  const theme = useToolverseTheme();
  const borderStyle = variant;

  if (orientation === "vertical") {
    return (
      <div
        style={{
          width: 0, height: "100%",
          borderLeft: `1px ${borderStyle} ${theme.colors.border}`,
          flexShrink: 0,
        }}
      />
    );
  }

  if (label) {
    return (
      <div
        style={{
          display: "flex", alignItems: "center", gap: 12,
          justifyContent: labelPosition === "left" ? "flex-start"
            : labelPosition === "right" ? "flex-end" : "center",
          fontFamily: theme.fonts.sans,
        }}
      >
        {labelPosition !== "left" && (
          <div style={{ flex: 1, borderTop: `1px ${borderStyle} ${theme.colors.border}` }} />
        )}
        <span style={{ fontSize: 12, color: theme.colors.textMuted, whiteSpace: "nowrap" }}>
          {label}
        </span>
        {labelPosition !== "right" && (
          <div style={{ flex: 1, borderTop: `1px ${borderStyle} ${theme.colors.border}` }} />
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        borderTop: `1px ${borderStyle} ${theme.colors.border}`,
        width: "100%",
      }}
    />
  );
};

export default Divider;
