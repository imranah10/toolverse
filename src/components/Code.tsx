// ═══════════════════════════════════════════════════════
// Code.tsx — Toolverse Code block
// ═══════════════════════════════════════════════════════

import React, { useState } from "react";
import { useToolverseTheme } from "../provider";

export interface CodeProps {
  code: string;
  language?: string;            // e.g. "tsx", "js", "python"
  filename?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;           // default true
  maxHeight?: number | string;
}

export const Code: React.FC<CodeProps> = ({
  code, language, filename, showLineNumbers = false, copyable = true, maxHeight,
}) => {
  const theme = useToolverseTheme();
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  const copy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: "#0d1117",
        borderRadius: theme.radii.md,
        overflow: "hidden",
        fontFamily: theme.fonts.mono,
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "8px 14px",
          background: "#161b22",
          borderBottom: `1px solid ${theme.colors.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Three dots */}
          <span style={{ display: "inline-flex", gap: 5 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
          </span>
          <span style={{ color: "#8b949e", fontSize: 12, marginLeft: 8 }}>
            {filename || language || "code"}
          </span>
        </div>
        {copyable && (
          <button
            onClick={copy}
            style={{
              background: copied ? "#238636" : "transparent",
              color: copied ? "#fff" : "#8b949e",
              border: `1px solid ${copied ? "#238636" : "#30363d"}`,
              borderRadius: 4, padding: "3px 10px",
              fontSize: 11, fontWeight: 600, cursor: "pointer",
              fontFamily: theme.fonts.sans,
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
      {/* Code content */}
      <pre
        style={{
          margin: 0, padding: "14px 16px",
          overflow: "auto",
          maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
        }}
      >
        <code style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.5 }}>
          {showLineNumbers
            ? lines.map((line, i) => (
              <div key={i} style={{ display: "flex" }}>
                <span style={{ color: "#484f58", paddingRight: 16, minWidth: 32, textAlign: "right", userSelect: "none" }}>
                  {i + 1}
                </span>
                <span>{line || " "}</span>
              </div>
            ))
            : code}
        </code>
      </pre>
    </div>
  );
};

// Inline code
export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const InlineCode: React.FC<InlineCodeProps> = ({ children, style, ...rest }) => {
  const theme = useToolverseTheme();
  return (
    <code
      style={{
        background: theme.colors.primary + "15",
        color: theme.colors.primary,
        padding: "2px 6px",
        borderRadius: theme.radii.sm,
        fontSize: "0.9em",
        fontFamily: theme.fonts.mono,
        ...style,
      }}
      {...rest}
    >
      {children}
    </code>
  );
};

export default Code;
