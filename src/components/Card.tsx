// ═══════════════════════════════════════════════════════
// Card.tsx — Toolverse Card
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  padding = "md",
  hover = false,
  glow = false,
  children,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();
  const padMap = { sm: theme.spacing.md, md: theme.spacing.lg, lg: theme.spacing.xl };

  return (
    <div
      style={{
        background: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radii.lg,
        padding: padMap[padding],
        boxShadow: glow ? theme.shadows.glow : theme.shadows.sm,
        transition: "all 0.2s ease",
        fontFamily: theme.fonts.sans,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = theme.shadows.lg;
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = glow ? theme.shadows.glow : theme.shadows.sm;
        }
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

// Sub-components for structured cards
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();
  return (
    <div
      style={{
        marginBottom: theme.spacing.sm,
        fontWeight: 700,
        fontSize: "16px",
        color: theme.colors.text,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  ...rest
}) => (
  <div style={{ fontSize: "14px", lineHeight: 1.5, ...style }} {...rest}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();
  return (
    <div
      style={{
        marginTop: theme.spacing.md,
        display: "flex",
        gap: theme.spacing.sm,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
