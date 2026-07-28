// ═══════════════════════════════════════════════════════
// States.tsx — Toolverse Empty + Error + Success states
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type StateVariant = "empty" | "error" | "success" | "loading";

export interface StateProps {
  variant?: StateVariant;
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

const STATE_STYLES: Record<NonNullable<StateProps["variant"]>, { color: string; emoji: string }> = {
  empty:   { color: "#94a3b8", emoji: "📭" },
  error:   { color: "#ef4444", emoji: "⚠️" },
  success: { color: "#10b981", emoji: "✅" },
  loading: { color: "#6366f1", emoji: "⏳" },
};

export const State: React.FC<StateProps> = ({
  variant = "empty", icon, title, description, action,
}) => {
  const theme = useToolverseTheme();
  const s = STATE_STYLES[variant];

  return (
    <div
      style={{
        padding: "48px 24px",
        textAlign: "center",
        fontFamily: theme.fonts.sans,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      }}
    >
      <div style={{ fontSize: 48, lineHeight: 1 }}>
        {icon || s.emoji}
      </div>
      <h3 style={{
        fontSize: 18, fontWeight: 700,
        color: theme.colors.text, margin: 0,
      }}>
        {title}
      </h3>
      {description && (
        <p style={{
          fontSize: 14, color: theme.colors.textMuted,
          margin: 0, maxWidth: 400, lineHeight: 1.5,
        }}>
          {description}
        </p>
      )}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
};

// EmptyState — convenience alias
export const EmptyState: React.FC<Omit<StateProps, "variant">> = (props) => (
  <State variant="empty" {...props} />
);

// ErrorState
export const ErrorState: React.FC<Omit<StateProps, "variant">> = (props) => (
  <State variant="error" {...props} />
);

// SuccessState
export const SuccessState: React.FC<Omit<StateProps, "variant">> = (props) => (
  <State variant="success" {...props} />
);

export default State;
