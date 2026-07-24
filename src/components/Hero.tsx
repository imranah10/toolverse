// ═══════════════════════════════════════════════════════
// Hero.tsx — Toolverse Hero section
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export interface HeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  align?: "left" | "center";
  variant?: "default" | "gradient" | "minimal";
  children?: React.ReactNode;        // custom content area
}

export const Hero: React.FC<HeroProps> = ({
  title, subtitle, badge, primaryAction, secondaryAction,
  align = "center", variant = "default", children,
}) => {
  const theme = useToolverseTheme();
  const isCenter = align === "center";

  const backgrounds: Record<string, React.CSSProperties> = {
    default: { background: theme.colors.surface },
    gradient: {
      background: `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}15)`,
    },
    minimal: { background: theme.colors.background },
  };

  return (
    <section
      style={{
        ...backgrounds[variant],
        padding: "80px 24px",
        borderRadius: variant === "default" ? theme.radii.lg : 0,
        textAlign: isCenter ? "center" : "left",
        fontFamily: theme.fonts.sans,
      }}
    >
      <div style={{ maxWidth: 800, margin: isCenter ? "0 auto" : "0" }}>
        {badge && (
          <span
            style={{
              display: "inline-block",
              background: theme.colors.primary + "22",
              color: theme.colors.primary,
              padding: "4px 12px", borderRadius: 9999,
              fontSize: 12, fontWeight: 600,
              marginBottom: 16,
            }}
          >
            {badge}
          </span>
        )}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800, lineHeight: 1.1,
            color: theme.colors.text,
            margin: 0, marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.5,
              color: theme.colors.textMuted,
              margin: 0, marginBottom: 32,
            }}
          >
            {subtitle}
          </p>
        )}
        {(primaryAction || secondaryAction) && (
          <div
            style={{
              display: "flex", gap: 12,
              justifyContent: isCenter ? "center" : "flex-start",
              flexWrap: "wrap",
            }}
          >
            {primaryAction && (
              <a
                href={primaryAction.href}
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  color: "#fff",
                  padding: "12px 24px", borderRadius: theme.radii.md,
                  fontSize: 15, fontWeight: 600, textDecoration: "none",
                  boxShadow: theme.shadows.md,
                  transition: "transform 0.15s",
                }}
              >
                {primaryAction.label}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent",
                  color: theme.colors.text,
                  padding: "12px 24px", borderRadius: theme.radii.md,
                  fontSize: 15, fontWeight: 600, textDecoration: "none",
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Hero;
