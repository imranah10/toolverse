// ═══════════════════════════════════════════════════════
// Tooltip.tsx — Toolverse Tooltip
// ═══════════════════════════════════════════════════════

import React, { useState } from "react";
import { useToolverseTheme } from "../provider";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;            // ms
  children: React.ReactElement;
}

const POSITIONS: Record<TooltipPosition, React.CSSProperties> = {
  top:    { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
  bottom: { top: "100%",    left: "50%", transform: "translateX(-50%)", marginTop: 8 },
  left:   { right: "100%",  top: "50%",  transform: "translateY(-50%)", marginRight: 8 },
  right:  { left: "100%",   top: "50%",  transform: "translateY(-50%)", marginLeft: 8 },
};

export const Tooltip: React.FC<TooltipProps> = ({
  content, position = "top", delay = 100, children,
}) => {
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const theme = useToolverseTheme();

  const show = () => {
    if (timer) clearTimeout(timer);
    const t = setTimeout(() => setVisible(true), delay);
    setTimer(t);
  };
  const hide = () => {
    if (timer) clearTimeout(timer);
    setVisible(false);
  };

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            background: theme.colors.text,
            color: theme.colors.background,
            padding: "4px 10px",
            borderRadius: theme.radii.sm,
            fontSize: "11px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            fontFamily: theme.fonts.sans,
            zIndex: 9999,
            pointerEvents: "none",
            boxShadow: theme.shadows.md,
            ...POSITIONS[position],
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
