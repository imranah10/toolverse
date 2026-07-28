// ═══════════════════════════════════════════════════════
// Navbar.tsx — Toolverse Navbar
// ═══════════════════════════════════════════════════════

import React, { useState } from "react";
import { useToolverseTheme } from "../provider";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  brand?: React.ReactNode;
  items?: NavItem[];
  children?: React.ReactNode;
  sticky?: boolean;
  actions?: React.ReactNode;     // right-side actions (buttons, etc.)
}

export const Navbar: React.FC<NavbarProps> = ({
  brand, items = [], children, sticky = true, actions,
}) => {
  const theme = useToolverseTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: sticky ? "sticky" : "static",
        top: 0, zIndex: 40,
        background: `${theme.colors.background}f5`,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${theme.colors.border}`,
        fontFamily: theme.fonts.sans,
      }}
    >
      <div
        style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0 16px", height: 64,
          display: "flex", alignItems: "center", gap: 24,
        }}
      >
        {/* Brand */}
        {brand && <div style={{ fontWeight: 800, fontSize: 18, color: theme.colors.primary }}>{brand}</div>}

        {/* Desktop nav items */}
        {items.length > 0 && (
          <nav className="tv-navbar-desktop" style={{ display: "flex", gap: 4, flex: 1 }}>
            {items.map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{
                  padding: "8px 14px", borderRadius: theme.radii.md,
                  fontSize: 14, fontWeight: 500,
                  color: item.active ? theme.colors.primary : theme.colors.textMuted,
                  background: item.active ? theme.colors.primary + "11" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {children && <div style={{ flex: 1 }}>{children}</div>}

        {/* Right-side actions */}
        {actions && <div style={{ display: "flex", gap: 8, alignItems: "center" }}>{actions}</div>}

        {/* Mobile menu button */}
        {items.length > 0 && (
          <button
            className="tv-navbar-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none", background: "transparent", border: "none",
              cursor: "pointer", padding: 8, color: theme.colors.text,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && items.length > 0 && (
        <div
          className="tv-navbar-mobile"
          style={{
            background: theme.colors.background,
            borderTop: `1px solid ${theme.colors.border}`,
            padding: 12,
          }}
        >
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", padding: "10px 14px", borderRadius: theme.radii.md,
                fontSize: 14, fontWeight: 500,
                color: item.active ? theme.colors.primary : theme.colors.text,
                background: item.active ? theme.colors.primary + "11" : "transparent",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .tv-navbar-desktop { display: none !important; }
          .tv-navbar-mobile-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
