// ═══════════════════════════════════════════════════════
// Avatar.tsx — Toolverse Avatar
// ═══════════════════════════════════════════════════════

import React from "react";
import { useToolverseTheme } from "../provider";

export type AvatarShape = "circle" | "square" | "rounded";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;          // for initials fallback
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: AvatarShape;
  ring?: boolean;
  status?: "online" | "offline" | "away" | "busy";
}

const SIZE_MAP: Record<NonNullable<AvatarProps["size"]>, number> = {
  xs: 24, sm: 32, md: 40, lg: 56, xl: 80,
};

const STATUS_COLORS: Record<NonNullable<AvatarProps["status"]>, string> = {
  online: "#10b981", offline: "#94a3b8", away: "#f59e0b", busy: "#ef4444",
};

function getInitials(name?: string): string {
  if (!name) return "?";
  return name.split(" ").slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}

export const Avatar: React.FC<AvatarProps> = ({
  src, alt, name, size = "md", shape = "circle", ring = false, status,
  style, ...rest
}) => {
  const theme = useToolverseTheme();
  const px = SIZE_MAP[size];
  const radius = shape === "circle" ? "50%" : shape === "rounded" ? theme.radii.md : "0";

  return (
    <div
      style={{
        position: "relative",
        width: px,
        height: px,
        borderRadius: radius,
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img
          src={src}
          alt={alt || name || "avatar"}
          style={{
            width: "100%", height: "100%", borderRadius: radius, objectFit: "cover",
            border: ring ? `2px solid ${theme.colors.primary}` : "none",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%", height: "100%", borderRadius: radius,
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700,
            fontSize: px * 0.4,
            border: ring ? `2px solid ${theme.colors.primary}` : "none",
            fontFamily: theme.fonts.sans,
          }}
        >
          {getInitials(name)}
        </div>
      )}
      {status && (
        <span
          style={{
            position: "absolute", bottom: 0, right: 0,
            width: px * 0.3, height: px * 0.3,
            borderRadius: "50%", background: STATUS_COLORS[status],
            border: `2px solid ${theme.colors.background}`,
          }}
        />
      )}
    </div>
  );
};

// AvatarGroup — stacked avatars
export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarProps["size"];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, max = 4, size = "md" }) => {
  const items = React.Children.toArray(children);
  const visible = items.slice(0, max);
  const overflow = items.length - max;
  const px = SIZE_MAP[size || "md"];

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {visible.map((child, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : -px * 0.25, zIndex: visible.length - i }}>
          {child}
        </div>
      ))}
      {overflow > 0 && (
        <div
          style={{
            marginLeft: -px * 0.25,
            width: px, height: px, borderRadius: "50%",
            background: "#e2e8f0", color: "#475569",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 600, fontSize: px * 0.35,
            border: "2px solid #fff",
          }}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
};

export default Avatar;
