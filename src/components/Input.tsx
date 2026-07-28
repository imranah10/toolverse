// ═══════════════════════════════════════════════════════
// Input.tsx — Toolverse Input + Textarea
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && (
        <label
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: theme.colors.text,
            fontFamily: theme.fonts.sans,
          }}
        >
          {label}
        </label>
      )}
      <input
        style={{
          width: "100%",
          padding: "10px 14px",
          fontSize: "14px",
          fontFamily: theme.fonts.sans,
          color: theme.colors.text,
          background: theme.colors.background,
          border: `1px solid ${error ? theme.colors.danger : theme.colors.border}`,
          borderRadius: theme.radii.md,
          outline: "none",
          transition: "border-color 0.15s, box-shadow 0.15s",
          ...style,
        }}
        onFocus={(e) => {
          if (!error) {
            e.currentTarget.style.borderColor = theme.colors.primary;
            e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.primary}22`;
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error
            ? theme.colors.danger
            : theme.colors.border;
          e.currentTarget.style.boxShadow = "none";
        }}
        {...rest}
      />
      {error && (
        <span
          style={{ fontSize: "11px", color: theme.colors.danger }}
        >
          {error}
        </span>
      )}
      {hint && !error && (
        <span
          style={{ fontSize: "11px", color: theme.colors.textMuted }}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  style,
  ...rest
}) => {
  const theme = useToolverseTheme();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && (
        <label
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: theme.colors.text,
          }}
        >
          {label}
        </label>
      )}
      <textarea
        style={{
          width: "100%",
          padding: "10px 14px",
          fontSize: "14px",
          fontFamily: theme.fonts.sans,
          color: theme.colors.text,
          background: theme.colors.background,
          border: `1px solid ${error ? theme.colors.danger : theme.colors.border}`,
          borderRadius: theme.radii.md,
          outline: "none",
          resize: "vertical",
          minHeight: "80px",
          ...style,
        }}
        {...rest}
      />
      {error && (
        <span style={{ fontSize: "11px", color: theme.colors.danger }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
