// ═══════════════════════════════════════════════════════
// Navigation.tsx — Toolverse Tabs + Breadcrumb
// ═══════════════════════════════════════════════════════

import React, { useState } from "react";
import { useToolverseTheme } from "../provider";

// ─── Tabs ─────────────────────────────────────────────

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
  badge?: string;
}

export interface TabsProps {
  items: TabItem[];
  defaultActive?: string;
  variant?: "underline" | "pills" | "boxed";
  onChange?: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  items, defaultActive, variant = "underline", onChange,
}) => {
  const [active, setActive] = useState(defaultActive || items[0]?.id);
  const theme = useToolverseTheme();
  const activeItem = items.find((i) => i.id === active);

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div style={{ fontFamily: theme.fonts.sans }}>
      {/* Tab bar */}
      <div
        style={{
          display: "flex", gap: variant === "pills" ? 8 : 0,
          borderBottom: variant === "underline" ? `1px solid ${theme.colors.border}` : "none",
        }}
      >
        {items.map((item) => {
          const isActive = active === item.id;
          const baseStyle: React.CSSProperties = {
            padding: "8px 16px",
            fontSize: 14, fontWeight: isActive ? 600 : 500,
            cursor: item.disabled ? "not-allowed" : "pointer",
            opacity: item.disabled ? 0.5 : 1,
            border: "none", background: "transparent",
            color: isActive ? theme.colors.primary : theme.colors.textMuted,
            position: "relative",
            display: "inline-flex", alignItems: "center", gap: 6,
            fontFamily: theme.fonts.sans,
          };

          if (variant === "pills") {
            Object.assign(baseStyle, {
              background: isActive ? theme.colors.primary : theme.colors.surface,
              color: isActive ? "#fff" : theme.colors.textMuted,
              borderRadius: 9999,
            });
          } else if (variant === "boxed") {
            Object.assign(baseStyle, {
              border: `1px solid ${isActive ? theme.colors.primary : theme.colors.border}`,
              borderBottom: isActive ? `1px solid ${theme.colors.background}` : `1px solid ${theme.colors.border}`,
              borderRadius: "8px 8px 0 0",
              marginBottom: -1,
            });
          }

          return (
            <button
              key={item.id}
              onClick={() => !item.disabled && handleClick(item.id)}
              style={baseStyle}
            >
              {item.label}
              {item.badge && (
                <span
                  style={{
                    background: isActive ? "#fff33" : theme.colors.primary + "22",
                    color: isActive ? "#fff" : theme.colors.primary,
                    padding: "1px 6px", borderRadius: 9999,
                    fontSize: 10, fontWeight: 700,
                  }}
                >
                  {item.badge}
                </span>
              )}
              {variant === "underline" && isActive && (
                <span
                  style={{
                    position: "absolute", bottom: -1, left: 0, right: 0,
                    height: 2, background: theme.colors.primary,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeItem?.content && (
        <div style={{ padding: "16px 0" }}>
          {activeItem.content}
        </div>
      )}
    </div>
  );
};

// ─── Breadcrumb ───────────────────────────────────────

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator }) => {
  const theme = useToolverseTheme();
  const sep = separator || (
    <span style={{ color: theme.colors.textMuted, fontSize: 12 }}>›</span>
  );

  return (
    <nav
      aria-label="breadcrumb"
      style={{
        display: "flex", alignItems: "center", gap: 8,
        fontFamily: theme.fonts.sans, fontSize: 13,
      }}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {item.href && !isLast ? (
              <a
                href={item.href}
                style={{
                  color: theme.colors.textMuted,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ) : (
              <span
                style={{
                  color: isLast ? theme.colors.text : theme.colors.textMuted,
                  fontWeight: isLast ? 600 : 400,
                }}
              >
                {item.label}
              </span>
            )}
            {!isLast && sep}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Tabs;
