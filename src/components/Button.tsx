// ═══════════════════════════════════════════════════════
// Button.tsx — Toolverse Button
//
// Usage:
//   import { Button } from 'toolverse';
//   <Button variant="primary" size="md">Click Me</Button>
//
// Customized export (from Toolverse web app):
//   import { IndigoGradientButton as MyBtn } from 'toolverse';
//   <MyBtn>Save</MyBtn>
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "ghost"
  | "outline";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  gradient?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = (
  theme: ReturnType<typeof useToolverseTheme>,
  variant: ButtonVariant
): React.CSSProperties => {
  const map: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: theme.colors.primary,
      color: "#ffffff",
      border: `1px solid ${theme.colors.primary}`,
    },
    secondary: {
      background: theme.colors.secondary,
      color: "#ffffff",
      border: `1px solid ${theme.colors.secondary}`,
    },
    accent: {
      background: theme.colors.accent,
      color: "#ffffff",
      border: `1px solid ${theme.colors.accent}`,
    },
    success: {
      background: theme.colors.success,
      color: "#ffffff",
      border: `1px solid ${theme.colors.success}`,
    },
    warning: {
      background: theme.colors.warning,
      color: "#ffffff",
      border: `1px solid ${theme.colors.warning}`,
    },
    danger: {
      background: theme.colors.danger,
      color: "#ffffff",
      border: `1px solid ${theme.colors.danger}`,
    },
    ghost: {
      background: "transparent",
      color: theme.colors.primary,
      border: "1px solid transparent",
    },
    outline: {
      background: "transparent",
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
    },
  };
  return map[variant];
};

const sizeStyles = (size: ButtonSize): React.CSSProperties => {
  const map: Record<ButtonSize, React.CSSProperties> = {
    sm: { padding: "6px 12px", fontSize: "12px" },
    md: { padding: "10px 18px", fontSize: "14px" },
    lg: { padding: "14px 24px", fontSize: "16px" },
    xl: { padding: "18px 32px", fontSize: "18px" },
  };
  return map[size];
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  gradient = false,
  fullWidth = false,
  loading = false,
  disabled,
  children,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();
  const v = variantStyles(theme, variant);
  const s = sizeStyles(size);

  const computedStyle: React.CSSProperties = {
    ...v,
    ...s,
    fontWeight: 600,
    borderRadius: theme.radii.md,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "all 0.15s ease",
    fontFamily: theme.fonts.sans,
    ...(gradient && {
      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      border: "1px solid transparent",
    }),
    ...style,
  };

  return (
    <button
      style={computedStyle}
      disabled={disabled || loading}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = theme.shadows.md;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
      {...rest}
    >
      {loading && (
        <span
          style={{
            display: "inline-block",
            width: "14px",
            height: "14px",
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "tv-spin 0.6s linear infinite",
          }}
        />
      )}
      {children}
      <style>{`@keyframes tv-spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
};

// ───────────────────────────────────────────────────────
// Pre-customized variants — what the web app generates
// when a user customizes a Button and clicks "Export".
// These ship with the npm package so users can `import`
// them by name.
// ───────────────────────────────────────────────────────

export const IndigoGradientButton: React.FC<ButtonProps> = (props) => (
  <Button variant="primary" gradient {...props} />
);

export const PillButton: React.FC<ButtonProps> = (props) => (
  <Button variant="primary" style={{ borderRadius: "9999px" }} {...props} />
);

export const GlowButton: React.FC<ButtonProps> = (props) => {
  const theme = useToolverseTheme();
  return (
    <Button
      variant="primary"
      style={{ boxShadow: theme.shadows.glow }}
      {...props}
    />
  );
};

export const OutlineButton: React.FC<ButtonProps> = (props) => (
  <Button variant="outline" {...props} />
);

export const GhostButton: React.FC<ButtonProps> = (props) => (
  <Button variant="ghost" {...props} />
);

export default Button;
