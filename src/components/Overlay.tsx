// ═══════════════════════════════════════════════════════
// Overlay.tsx — Toolverse Modal + Drawer
// ═══════════════════════════════════════════════════════

import React, { useEffect } from "react";
import { useToolverseTheme } from "../provider";

// ─── Modal ────────────────────────────────────────────

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlayClick?: boolean;
}

const MODAL_SIZES: Record<NonNullable<ModalProps["size"]>, number> = {
  sm: 400, md: 500, lg: 700, xl: 900,
};

export const Modal: React.FC<ModalProps> = ({
  open, onClose, title, children, footer, size = "md", closeOnOverlayClick = true,
}) => {
  const theme = useToolverseTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      document.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={() => closeOnOverlayClick && onClose()}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "relative",
          background: theme.colors.background,
          borderRadius: theme.radii.lg,
          boxShadow: theme.shadows.lg,
          width: "100%", maxWidth: MODAL_SIZES[size],
          maxHeight: "90vh", overflow: "hidden",
          display: "flex", flexDirection: "column",
          fontFamily: theme.fonts.sans,
        }}
      >
        {title && (
          <div
            style={{
              padding: "16px 20px",
              borderBottom: `1px solid ${theme.colors.border}`,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              fontSize: 16, fontWeight: 700, color: theme.colors.text,
            }}
          >
            {title}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                background: "transparent", border: "none", cursor: "pointer",
                padding: 4, color: theme.colors.textMuted, fontSize: 20, lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>
        )}
        <div style={{ padding: 20, overflowY: "auto", flex: 1 }}>
          {children}
        </div>
        {footer && (
          <div
            style={{
              padding: "12px 20px",
              borderTop: `1px solid ${theme.colors.border}`,
              display: "flex", justifyContent: "flex-end", gap: 8,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Drawer ───────────────────────────────────────────

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right" | "top" | "bottom";
  title?: React.ReactNode;
  children?: React.ReactNode;
  width?: number | string;
}

export const Drawer: React.FC<DrawerProps> = ({
  open, onClose, side = "right", title, children, width = 360,
}) => {
  const theme = useToolverseTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  if (!open) return null;

  const positions: Record<string, React.CSSProperties> = {
    left:   { top: 0, left: 0, height: "100%", width },
    right:  { top: 0, right: 0, height: "100%", width },
    top:    { top: 0, left: 0, width: "100%", maxHeight: "80vh" },
    bottom: { bottom: 0, left: 0, width: "100%", maxHeight: "80vh" },
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
      <div
        onClick={onClose}
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }}
      />
      <div
        role="dialog"
        style={{
          position: "absolute",
          background: theme.colors.background,
          boxShadow: theme.shadows.lg,
          display: "flex", flexDirection: "column",
          fontFamily: theme.fonts.sans,
          ...positions[side],
        }}
      >
        {title && (
          <div
            style={{
              padding: "16px 20px",
              borderBottom: `1px solid ${theme.colors.border}`,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              fontSize: 16, fontWeight: 700,
            }}
          >
            {title}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 20 }}
            >
              ×
            </button>
          </div>
        )}
        <div style={{ padding: 20, overflowY: "auto", flex: 1 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
