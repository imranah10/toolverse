"use client";
import React from "react";

// ═══════════════════════════════════════════════════════
// AUTO-GENERATED — DO NOT EDIT
// Source: src/data/toolverse-icons.ts
// All 1009 icons exported as named React components.
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// TOOLVERSE CRYSTAL ICON LIBRARY
// Original, unique geometric icon design with crystal accents.
// Does NOT match react-icons, fontawesome, lucide, heroicons, phosphor,
// material icons, or any other library. Distinctive style:
//   - 24x24 viewBox, 1.75 stroke width
//   - Rounded line caps/joins
//   - Geometric paths with subtle "crystal" accents (small dots, facets, asymmetric cuts)
//   - Bold, distinctive silhouettes
// ═══════════════════════════════════════════════════════════════

export type IconVariant = "line" | "solid" | "duotone" | "aurora" | "neon" | "glass" | "crystal3d";

export interface ToolverseIcon {
  id: string;
  name: string;
  category: string;
  tags: string[];
  // SVG inner content (paths, circles, rects). Will be wrapped with <svg>.
  body: string;
}

// Helper: each icon's body uses unique path strings.
// Style markers that make these distinct:
//   - Small "crystal dot" accents (circles r=1.2 filled)
//   - Asymmetric path extensions (one side longer)
//   - Subtle inner facets (small triangles/diamonds)
//   - Sharp angles mixed with rounded corners

export const TOOLVERSE_ICONS: ToolverseIcon[] = [
  // ─── ACTIONS (10) ───
  {
    id: "plus", name: "Plus", category: "Actions", tags: ["add", "new", "create", "insert"],
    body: `<path d="M12 4v16"/><path d="M4 12h16"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "minus", name: "Minus", category: "Actions", tags: ["remove", "subtract", "delete"],
    body: `<path d="M4 12h16"/><path d="M6 9l1.5 0M16.5 15l1.5 0"/>`,
  },
  {
    id: "check", name: "Check", category: "Actions", tags: ["done", "tick", "confirm", "yes"],
    body: `<path d="M4 13l5 5L20 6"/><circle cx="6" cy="18" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "cross", name: "Cross", category: "Actions", tags: ["close", "x", "cancel", "dismiss"],
    body: `<path d="M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "edit", name: "Edit", category: "Actions", tags: ["pencil", "write", "modify"],
    body: `<path d="M14 4l6 6L8 22H2v-6L14 4z"/><path d="M11 7l6 6"/><circle cx="5" cy="19" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "trash", name: "Trash", category: "Actions", tags: ["delete", "bin", "remove"],
    body: `<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/><path d="M10 11v6M14 11v6"/><circle cx="12" cy="2.5" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "save", name: "Save", category: "Actions", tags: ["disk", "store", "persist"],
    body: `<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v6h7V4"/><path d="M8 14h8v6H8z"/><circle cx="16" cy="17" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "copy", name: "Copy", category: "Actions", tags: ["duplicate", "clone", "paste"],
    body: `<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4V4h11v1"/><circle cx="4" cy="4" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "cut", name: "Cut", category: "Actions", tags: ["scissors", "slice"],
    body: `<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8 8l12 8M8 16L20 8"/>`,
  },
  {
    id: "paste", name: "Paste", category: "Actions", tags: ["clipboard", "copy"],
    body: `<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2"/><path d="M9 11h6M9 15h4"/>`,
  },

  // ─── ARROWS (10) ───
  {
    id: "arrow-up", name: "Arrow Up", category: "Arrows", tags: ["up", "north", "rise"],
    body: `<path d="M12 20V4"/><path d="M5 11l7-7 7 7"/><circle cx="12" cy="20" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "arrow-down", name: "Arrow Down", category: "Arrows", tags: ["down", "south", "fall"],
    body: `<path d="M12 4v16"/><path d="M5 13l7 7 7-7"/><circle cx="12" cy="4" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "arrow-left", name: "Arrow Left", category: "Arrows", tags: ["left", "west", "back"],
    body: `<path d="M20 12H4"/><path d="M11 5l-7 7 7 7"/><circle cx="20" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "arrow-right", name: "Arrow Right", category: "Arrows", tags: ["right", "east", "next"],
    body: `<path d="M4 12h16"/><path d="M13 5l7 7-7 7"/><circle cx="4" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "refresh", name: "Refresh", category: "Arrows", tags: ["reload", "sync", "rotate"],
    body: `<path d="M4 12a8 8 0 0 1 14-5l2 2"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M4 20v-5h5"/>`,
  },
  {
    id: "chevron-up", name: "Chevron Up", category: "Arrows", tags: ["collapse", "up"],
    body: `<path d="M5 14l7-7 7 7"/><path d="M5 18h14"/>`,
  },
  {
    id: "chevron-down", name: "Chevron Down", category: "Arrows", tags: ["expand", "down"],
    body: `<path d="M5 10l7 7 7-7"/><path d="M5 6h14"/>`,
  },
  {
    id: "chevron-left", name: "Chevron Left", category: "Arrows", tags: ["back", "left"],
    body: `<path d="M14 5l-7 7 7 7"/><path d="M18 5v14"/>`,
  },
  {
    id: "chevron-right", name: "Chevron Right", category: "Arrows", tags: ["forward", "right"],
    body: `<path d="M10 5l7 7-7 7"/><path d="M6 5v14"/>`,
  },
  {
    id: "expand", name: "Expand", category: "Arrows", tags: ["maximize", "fullscreen"],
    body: `<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`,
  },

  // ─── UI (10) ───
  {
    id: "menu", name: "Menu", category: "UI", tags: ["hamburger", "lines", "navigation"],
    body: `<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="4" cy="7" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "close", name: "Close", category: "UI", tags: ["x", "dismiss", "cancel"],
    body: `<path d="M5 5l14 14M19 5L5 19"/><path d="M5 5l2 0M17 19l2 0"/>`,
  },
  {
    id: "search", name: "Search", category: "UI", tags: ["find", "lookup", "magnify"],
    body: `<circle cx="11" cy="11" r="6"/><path d="M16 16l5 5"/><path d="M8 11h6"/>`,
  },
  {
    id: "filter", name: "Filter", category: "UI", tags: ["funnel", "sort", "refine"],
    body: `<path d="M4 5h16l-6 8v6l-4 2v-8z"/><circle cx="12" cy="3" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "settings", name: "Settings", category: "UI", tags: ["gear", "cog", "config"],
    body: `<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19 5l-2 2M7 17l-2 2M19 19l-2-2M7 7L5 5"/>`,
  },
  {
    id: "sliders", name: "Sliders", category: "UI", tags: ["adjust", "tune", "controls"],
    body: `<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2" fill="currentColor" stroke="currentColor"/><circle cx="8" cy="17" r="2" fill="currentColor" stroke="currentColor"/>`,
  },
  {
    id: "grid", name: "Grid", category: "UI", tags: ["layout", "tiles", "squares"],
    body: `<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/><circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "list", name: "List", category: "UI", tags: ["bullet", "items", "menu-list"],
    body: `<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1.3" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "eye", name: "Eye", category: "UI", tags: ["view", "show", "watch"],
    body: `<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><circle cx="18" cy="6" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "eye-off", name: "Eye Off", category: "UI", tags: ["hide", "invisible", "blind"],
    body: `<path d="M3 3l18 18"/><path d="M10.6 10.6a3 3 0 0 0 4.2 4.2"/><path d="M9.4 5.2A10.4 10.4 0 0 1 12 5c6 0 10 7 10 7a17.5 17.5 0 0 1-3.1 3.8M6.1 6.1A17.4 17.4 0 0 0 2 12s4 7 10 7a10 10 0 0 0 4.5-1.1"/>`,
  },

  // ─── COMMUNICATION (10) ───
  {
    id: "mail", name: "Mail", category: "Communication", tags: ["email", "envelope", "message"],
    body: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/><circle cx="3" cy="5" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "phone", name: "Phone", category: "Communication", tags: ["call", "telephone", "contact"],
    body: `<path d="M5 4h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 6a2 2 0 0 1 2-2z"/>`,
  },
  {
    id: "message", name: "Message", category: "Communication", tags: ["chat", "bubble", "speech"],
    body: `<path d="M4 5h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="M7 10h6M7 13h4"/>`,
  },
  {
    id: "bell", name: "Bell", category: "Communication", tags: ["notification", "alert", "alarm"],
    body: `<path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21a2 2 0 0 0 4 0"/><circle cx="18" cy="5" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "send", name: "Send", category: "Communication", tags: ["paper-plane", "share", "submit"],
    body: `<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/><circle cx="22" cy="2" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "share", name: "Share", category: "Communication", tags: ["distribute", "social"],
    body: `<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 11l6-4M9 13l6 4"/>`,
  },
  {
    id: "at", name: "At Sign", category: "Communication", tags: ["email", "mention", "handle"],
    body: `<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>`,
  },
  {
    id: "inbox", name: "Inbox", category: "Communication", tags: ["tray", "receive"],
    body: `<path d="M3 13l3-8h12l3 8"/><path d="M3 13h5l2 4h4l2-4h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`,
  },
  {
    id: "reply", name: "Reply", category: "Communication", tags: ["undo", "respond"],
    body: `<path d="M9 17l-6-6 6-6"/><path d="M3 11h11a6 6 0 0 1 6 6v3"/>`,
  },
  {
    id: "forward", name: "Forward", category: "Communication", tags: ["send", "pass-on"],
    body: `<path d="M15 17l6-6-6-6"/><path d="M21 11H10a6 6 0 0 0-6 6v3"/>`,
  },

  // ─── MEDIA (10) ───
  {
    id: "play", name: "Play", category: "Media", tags: ["start", "video", "triangle"],
    body: `<path d="M6 4l14 8-14 8z"/><circle cx="6" cy="4" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "pause", name: "Pause", category: "Media", tags: ["hold", "stop"],
    body: `<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>`,
  },
  {
    id: "stop", name: "Stop", category: "Media", tags: ["halt", "square"],
    body: `<rect x="5" y="5" width="14" height="14" rx="2"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "skip", name: "Skip Forward", category: "Media", tags: ["next", "forward-media"],
    body: `<path d="M5 5l9 7-9 7z"/><rect x="16" y="5" width="3" height="14" rx="1"/>`,
  },
  {
    id: "volume", name: "Volume", category: "Media", tags: ["sound", "audio", "speaker"],
    body: `<path d="M3 10v4h4l5 4V6L7 10z"/><path d="M15 9a4 4 0 0 1 0 6"/><path d="M18 7a8 8 0 0 1 0 10"/>`,
  },
  {
    id: "mute", name: "Mute", category: "Media", tags: ["silent", "off", "no-sound"],
    body: `<path d="M3 10v4h4l5 4V6L7 10z"/><path d="M22 9l-6 6M16 9l6 6"/>`,
  },
  {
    id: "camera", name: "Camera", category: "Media", tags: ["photo", "capture", "lens"],
    body: `<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l2-3h4l2 3"/><circle cx="12" cy="13" r="4"/><circle cx="18" cy="9" r="1" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "image", name: "Image", category: "Media", tags: ["picture", "photo", "gallery"],
    body: `<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M3 18l5-5 4 4 3-3 6 6"/>`,
  },
  {
    id: "video", name: "Video", category: "Media", tags: ["film", "movie", "record"],
    body: `<rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l5-3v10l-5-3z"/><circle cx="3" cy="6" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "music", name: "Music", category: "Media", tags: ["audio", "note", "song"],
    body: `<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>`,
  },

  // ─── FILES (10) ───
  {
    id: "folder", name: "Folder", category: "Files", tags: ["directory", "container"],
    body: `<path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="3" cy="7" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "folder-open", name: "Folder Open", category: "Files", tags: ["open", "directory"],
    body: `<path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2H3z"/><path d="M3 9h18l-2 9a2 2 0 0 1-2 1H5a2 2 0 0 1-2-2z"/>`,
  },
  {
    id: "file", name: "File", category: "Files", tags: ["document", "page"],
    body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4"/><circle cx="5" cy="3" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "download", name: "Download", category: "Files", tags: ["save", "fetch", "down"],
    body: `<path d="M12 3v12"/><path d="M7 11l5 5 5-5"/><path d="M4 21h16"/><circle cx="12" cy="3" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "upload", name: "Upload", category: "Files", tags: ["push", "up", "send"],
    body: `<path d="M12 21V9"/><path d="M7 13l5-5 5 5"/><path d="M4 21h16"/><circle cx="12" cy="21" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "cloud", name: "Cloud", category: "Files", tags: ["weather", "storage", "sky"],
    body: `<path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 18 9a4 4 0 0 1 1 7.9"/><circle cx="6" cy="18" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "drive", name: "Drive", category: "Files", tags: ["storage", "disk"],
    body: `<path d="M5 4h14l4 8-11 8L5 12z"/><path d="M5 12h14l4-8M5 12l4-8M19 12l-4 8"/>`,
  },
  {
    id: "archive", name: "Archive", category: "Files", tags: ["box", "store", "backup"],
    body: `<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>`,
  },
  {
    id: "book", name: "Book", category: "Files", tags: ["read", "manual", "guide"],
    body: `<path d="M5 4h11a3 3 0 0 1 3 3v14H8a3 3 0 0 1-3-3z"/><path d="M5 4a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3"/><path d="M9 9h6M9 13h6"/>`,
  },
  {
    id: "notebook", name: "Notebook", category: "Files", tags: ["notes", "journal"],
    body: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18M3 8h4M3 12h4M3 16h4"/>`,
  },

  // ─── PEOPLE (10) ───
  {
    id: "user", name: "User", category: "People", tags: ["person", "profile", "account"],
    body: `<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/><circle cx="4" cy="21" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "users", name: "Users", category: "People", tags: ["group", "people", "team"],
    body: `<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 4a4 4 0 0 1 0 8"/><path d="M18 21a7 7 0 0 0-3-5.7"/>`,
  },
  {
    id: "user-plus", name: "User Plus", category: "People", tags: ["add-user", "invite"],
    body: `<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M19 5v6M16 8h6"/>`,
  },
  {
    id: "user-minus", name: "User Minus", category: "People", tags: ["remove-user"],
    body: `<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 8h6"/>`,
  },
  {
    id: "profile", name: "Profile Card", category: "People", tags: ["id", "card"],
    body: `<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="11" r="2.5"/><path d="M5 16a4 4 0 0 1 8 0M14 9h5M14 13h3"/>`,
  },
  {
    id: "id", name: "ID Badge", category: "People", tags: ["identification", "badge"],
    body: `<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 16a4 4 0 0 1 8 0"/>`,
  },
  {
    id: "lock", name: "Lock", category: "People", tags: ["secure", "closed", "padlock"],
    body: `<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "unlock", name: "Unlock", category: "People", tags: ["open", "unlocked"],
    body: `<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>`,
  },
  {
    id: "key", name: "Key", category: "People", tags: ["password", "token", "access"],
    body: `<circle cx="8" cy="8" r="4"/><path d="M11 11l9 9"/><path d="M16 16l2-2M19 19l2-2"/>`,
  },
  {
    id: "shield", name: "Shield", category: "People", tags: ["protect", "security", "armor"],
    body: `<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>`,
  },

  // ─── COMMERCE (10) ───
  {
    id: "cart", name: "Shopping Cart", category: "Commerce", tags: ["basket", "buy", "checkout"],
    body: `<path d="M3 4h2l2 11h11l2-7H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><circle cx="3" cy="4" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "bag", name: "Shopping Bag", category: "Commerce", tags: ["shop", "purchase"],
    body: `<path d="M5 8h14l-1 13H6z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/>`,
  },
  {
    id: "tag", name: "Tag", category: "Commerce", tags: ["label", "price", "marker"],
    body: `<path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "gift", name: "Gift", category: "Commerce", tags: ["present", "wrap", "ribbon"],
    body: `<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9"/><path d="M12 8v13"/><path d="M12 8C9 8 6 6 9 4c2-1 3 2 3 4 0-2 1-5 3-4 3 2 0 4-3 4z"/>`,
  },
  {
    id: "credit-card", name: "Credit Card", category: "Commerce", tags: ["pay", "money", "bank"],
    body: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 14h3"/><circle cx="3" cy="5" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "wallet", name: "Wallet", category: "Commerce", tags: ["money", "purse"],
    body: `<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 8V5a2 2 0 0 1 2-2h12"/><circle cx="17" cy="13" r="1.5" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "coins", name: "Coins", category: "Commerce", tags: ["money", "cash", "currency"],
    body: `<circle cx="9" cy="14" r="5"/><path d="M14 9a5 5 0 1 1 6 6"/><path d="M9 11v8M7 12.5l4 3"/>`,
  },
  {
    id: "receipt", name: "Receipt", category: "Commerce", tags: ["invoice", "bill"],
    body: `<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 12h8M8 16h5"/>`,
  },
  {
    id: "store", name: "Store", category: "Commerce", tags: ["shop", "market"],
    body: `<path d="M4 9l1-5h14l1 5"/><path d="M4 9h16v11H4z"/><path d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M10 20v-5h4v5"/>`,
  },
  {
    id: "crown", name: "Crown", category: "Commerce", tags: ["king", "premium", "vip"],
    body: `<path d="M3 18h18M4 8l4 4 4-7 4 7 4-4-2 10H6z"/><circle cx="4" cy="8" r="1.3" fill="currentColor" stroke="none"/>`,
  },

  // ─── DEV (10) ───
  {
    id: "code", name: "Code", category: "Dev", tags: ["programming", "developer", "brackets"],
    body: `<path d="M9 8l-5 4 5 4M15 8l5 4-5 4"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "terminal", name: "Terminal", category: "Dev", tags: ["console", "command", "shell"],
    body: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/><circle cx="3" cy="4" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "bug", name: "Bug", category: "Dev", tags: ["insect", "error", "issue"],
    body: `<path d="M8 9a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0z"/><path d="M8 9L5 7M16 9l3-2M8 13H4M16 13h4M8 17l-3 2M16 17l3 2M12 9v8"/>`,
  },
  {
    id: "branch", name: "Branch", category: "Dev", tags: ["git", "version", "fork"],
    body: `<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 8v8M6 12c0-3 4-3 7-3"/>`,
  },
  {
    id: "server", name: "Server", category: "Dev", tags: ["host", "cloud", "stack"],
    body: `<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><circle cx="7" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="7" cy="16.5" r="1" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "database", name: "Database", category: "Dev", tags: ["storage", "data", "db"],
    body: `<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>`,
  },
  {
    id: "cube", name: "Cube", category: "Dev", tags: ["3d", "box", "package"],
    body: `<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12L3 7M12 12v10"/>`,
  },
  {
    id: "git", name: "Git", category: "Dev", tags: ["version", "vcs"],
    body: `<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 8v8M8 6h6a4 4 0 0 1 4 4"/>`,
  },
  {
    id: "api", name: "API", category: "Dev", tags: ["endpoint", "service", "interface"],
    body: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l-2 3 2 3M17 9l2 3-2 3M13 8l-2 8"/>`,
  },
  {
    id: "package", name: "Package", category: "Dev", tags: ["npm", "module", "library"],
    body: `<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/><path d="M7.5 4.5l9 5"/>`,
  },

  // ─── MISC (10) ───
  {
    id: "home", name: "Home", category: "Misc", tags: ["house", "main", "landing"],
    body: `<path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/><circle cx="3" cy="12" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "star", name: "Star", category: "Misc", tags: ["favorite", "rate", "review"],
    body: `<path d="M12 3l3 7 7 .5-5 4.5 1.5 7L12 18l-6.5 4 1.5-7-5-4.5 7-.5z"/><circle cx="12" cy="3" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "heart", name: "Heart", category: "Misc", tags: ["love", "like", "favorite"],
    body: `<path d="M12 21C5 16 3 12 3 8a4 4 0 0 1 7-2.5A4 4 0 0 1 21 8c0 4-2 8-9 13z"/><circle cx="3" cy="8" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "bookmark", name: "Bookmark", category: "Misc", tags: ["save", "mark", "tag"],
    body: `<path d="M5 3h14v18l-7-5-7 5z"/><circle cx="5" cy="3" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "flag", name: "Flag", category: "Misc", tags: ["mark", "report", "milestone"],
    body: `<path d="M5 21V4M5 4h11l-2 4 2 4H5"/><circle cx="5" cy="21" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "lightbulb", name: "Lightbulb", category: "Misc", tags: ["idea", "tip", "innovation"],
    body: `<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>`,
  },
  {
    id: "fire", name: "Fire", category: "Misc", tags: ["flame", "hot", "trending"],
    body: `<path d="M12 3c0 4-6 5-6 11a6 6 0 0 0 12 0c0-3-2-4-2-7 0 0-2 1-2 3 0-3-2-5-2-7z"/>`,
  },
  {
    id: "zap", name: "Zap", category: "Misc", tags: ["lightning", "fast", "quick"],
    body: `<path d="M13 3L4 14h7l-2 7 9-11h-7z"/><circle cx="13" cy="3" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "trophy", name: "Trophy", category: "Misc", tags: ["award", "winner", "prize"],
    body: `<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M9 14h6M10 18h4M8 21h8"/>`,
  },
  {
    id: "rocket", name: "Rocket", category: "Misc", tags: ["launch", "space", "start"],
    body: `<path d="M5 19c2-7 5-13 12-15-2 7-8 10-15 12z"/><path d="M5 19l3 3c2-3 2-5 0-8M14 5a3 3 0 1 0-4 4"/>`,
  },

  // ─── TIME (5) ───
  {
    id: "clock", name: "Clock", category: "Time", tags: ["time", "watch", "hour"],
    body: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "calendar", name: "Calendar", category: "Time", tags: ["date", "schedule", "event"],
    body: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/><circle cx="3" cy="5" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "history", name: "History", category: "Time", tags: ["past", "undo", "recent"],
    body: `<path d="M3 12a9 9 0 1 0 3-7L3 8M3 3v5h5"/><path d="M12 7v5l3 3"/>`,
  },
  {
    id: "timer", name: "Timer", category: "Time", tags: ["stopwatch", "countdown"],
    body: `<circle cx="12" cy="13" r="8"/><path d="M12 13V9M9 2h6M19 4l2 2"/>`,
  },
  {
    id: "alarm", name: "Alarm", category: "Time", tags: ["wake", "ring", "alert"],
    body: `<circle cx="12" cy="13" r="8"/><path d="M12 13V8M5 3L3 5M19 3l2 2M5 19l-2 2M19 19l2 2"/>`,
  },

  // ─── NAVIGATION (5) ───
  {
    id: "compass", name: "Compass", category: "Navigation", tags: ["direction", "north", "explore"],
    body: `<circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6z"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "map", name: "Map", category: "Navigation", tags: ["location", "pin", "guide"],
    body: `<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>`,
  },
  {
    id: "pin", name: "Pin", category: "Navigation", tags: ["location", "marker", "place"],
    body: `<path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/>`,
  },
  {
    id: "navigation", name: "Navigation", category: "Navigation", tags: ["arrow", "compass"],
    body: `<path d="M3 11l18-8-8 18-2-8z"/>`,
  },
  {
    id: "route", name: "Route", category: "Navigation", tags: ["path", "direction", "journey"],
    body: `<circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/>`,
  },

  // ─── WEATHER (5) ───
  {
    id: "sun", name: "Sun", category: "Weather", tags: ["day", "light", "bright"],
    body: `<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>`,
  },
  {
    id: "moon", name: "Moon", category: "Weather", tags: ["night", "dark", "sleep"],
    body: `<path d="M21 13A9 9 0 0 1 11 3a7 7 0 1 0 10 10z"/><circle cx="11" cy="3" r="1.2" fill="currentColor" stroke="none"/>`,
  },
  {
    id: "cloud-rain", name: "Cloud Rain", category: "Weather", tags: ["weather", "rain", "storm"],
    body: `<path d="M7 14a5 5 0 0 1-1-9.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>`,
  },
  {
    id: "snow", name: "Snowflake", category: "Weather", tags: ["cold", "winter", "ice"],
    body: `<path d="M12 2v20M4 7l16 10M20 7L4 17M2 12h20"/>`,
  },
  {
    id: "wind", name: "Wind", category: "Weather", tags: ["air", "breeze", "flow"],
    body: `<path d="M3 8h12a3 3 0 1 0-3-3M3 16h16a3 3 0 1 1-3 3M3 12h8"/>`,
  },

  // ─── STATUS (5) ───
  {
    id: "info", name: "Info", category: "Status", tags: ["information", "help", "details"],
    body: `<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 8v0.5"/>`,
  },
  {
    id: "warning", name: "Warning", category: "Status", tags: ["alert", "caution", "triangle"],
    body: `<path d="M12 3l10 18H2z"/><path d="M12 9v5M12 17v0.5"/>`,
  },
  {
    id: "success", name: "Success", category: "Status", tags: ["ok", "complete", "verified"],
    body: `<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>`,
  },
  {
    id: "error", name: "Error", category: "Status", tags: ["fail", "danger", "wrong"],
    body: `<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>`,
  },
  {
    id: "loading", name: "Loading", category: "Status", tags: ["spinner", "wait", "progress"],
    body: `<path d="M12 3a9 9 0 1 0 9 9" /><circle cx="12" cy="3" r="1.4" fill="currentColor" stroke="none"/>`,
  },

  // ═════════════════════════════════════════════════════════════
  // EXPANDED COLLECTION — 150+ new icons for 250+ total
  // Unique crystal-style with distinctive accents
  // ═════════════════════════════════════════════════════════════

  // ─── DEVICES (12) ───
  { id: "laptop", name: "Laptop", category: "Devices", tags: ["computer", "notebook", "screen"], body: `<rect x="3" y="5" width="18" height="11" rx="2"/><path d="M2 20h20l-2-3H4z"/>` },
  { id: "desktop", name: "Desktop", category: "Devices", tags: ["monitor", "pc", "computer"], body: `<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>` },
  { id: "mobile", name: "Mobile", category: "Devices", tags: ["phone", "smartphone", "device"], body: `<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>` },
  { id: "tablet", name: "Tablet", category: "Devices", tags: ["ipad", "device"], body: `<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "watch", name: "Watch", category: "Devices", tags: ["smartwatch", "wearable"], body: `<rect x="7" y="7" width="10" height="10" rx="3"/><path d="M9 7V3h6v4M9 17v4h6v-4"/>` },
  { id: "headphones", name: "Headphones", category: "Devices", tags: ["audio", "music", "sound"], body: `<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/>` },
  { id: "speaker", name: "Speaker", category: "Devices", tags: ["audio", "loud", "sound"], body: `<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="7" r="1" fill="currentColor" stroke="none"/>` },
  { id: "keyboard", name: "Keyboard", category: "Devices", tags: ["type", "input", "keys"], body: `<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h0M11 10h0M15 10h0M7 13h0M11 13h0M15 13h0M9 16h6"/>` },
  { id: "mouse", name: "Mouse", category: "Devices", tags: ["click", "pointer", "computer"], body: `<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/>` },
  { id: "printer", name: "Printer", category: "Devices", tags: ["print", "office"], body: `<path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M7 14h10v6H7z"/>` },
  { id: "camera-front", name: "Camera Front", category: "Devices", tags: ["selfie", "front"], body: `<rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3"/><path d="M9 6l1-2h4l1 2"/>` },
  { id: "tv", name: "TV", category: "Devices", tags: ["television", "screen", "display"], body: `<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8M12 18v4"/>` },

  // ─── SHAPES (12) ───
  { id: "circle", name: "Circle", category: "Shapes", tags: ["round", "ring"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>` },
  { id: "square", name: "Square", category: "Shapes", tags: ["box", "rect"], body: `<rect x="4" y="4" width="16" height="16" rx="1"/>` },
  { id: "triangle", name: "Triangle", category: "Shapes", tags: ["delta", "three"], body: `<path d="M12 3l9 17H3z"/>` },
  { id: "hexagon", name: "Hexagon", category: "Shapes", tags: ["six", "honey"], body: `<path d="M12 2l9 5v10l-9 5-9-5V7z"/>` },
  { id: "octagon", name: "Octagon", category: "Shapes", tags: ["eight", "stop-sign"], body: `<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8z"/>` },
  { id: "diamond", name: "Diamond", category: "Shapes", tags: ["rhombus", "gem"], body: `<path d="M12 3l9 9-9 9-9-9z"/>` },
  { id: "pentagon", name: "Pentagon", category: "Shapes", tags: ["five", "star-base"], body: `<path d="M12 3l9 7-3.5 11h-11L3 10z"/>` },
  { id: "star-outline", name: "Star Outline", category: "Shapes", tags: ["outline", "shape"], body: `<path d="M12 3l3 7 7 .5-5 4.5 1.5 7L12 18l-6.5 4 1.5-7-5-4.5 7-.5z"/>` },
  { id: "crescent", name: "Crescent", category: "Shapes", tags: ["moon", "curve"], body: `<path d="M16 4a8 8 0 1 0 4 14 6 6 0 0 1-4-14z"/>` },
  { id: "heart-outline", name: "Heart Outline", category: "Shapes", tags: ["love", "outline"], body: `<path d="M12 21C5 16 3 12 3 8a4 4 0 0 1 7-2.5A4 4 0 0 1 21 8c0 4-2 8-9 13z"/>` },
  { id: "cloud-shape", name: "Cloud Shape", category: "Shapes", tags: ["weather", "sky"], body: `<path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 18 9a4 4 0 0 1 1 7.9z"/>` },
  { id: "spiral", name: "Spiral", category: "Shapes", tags: ["swirl", "loop"], body: `<path d="M12 12a3 3 0 1 1 3 3 5 5 0 0 1-5-5 7 7 0 0 1 7-7"/>` },

  // ─── NATURE (12) ───
  { id: "leaf", name: "Leaf", category: "Nature", tags: ["plant", "green", "eco"], body: `<path d="M3 21c0-9 6-15 18-18-2 12-8 18-15 18z"/><path d="M9 15c2-2 4-3 6-4"/>` },
  { id: "tree", name: "Tree", category: "Nature", tags: ["plant", "forest"], body: `<path d="M12 2l6 9h-3l4 6h-5v6h-4v-6H5l4-6H6z"/>` },
  { id: "flower", name: "Flower", category: "Nature", tags: ["bloom", "petal"], body: `<circle cx="12" cy="12" r="2"/><path d="M12 10V4M14 12h6M12 14v6M10 12H4M13.5 10.5l4-4M13.5 13.5l4 4M10.5 13.5l-4 4M10.5 10.5l-4-4"/>` },
  { id: "mountain", name: "Mountain", category: "Nature", tags: ["peak", "hill"], body: `<path d="M3 20l5-9 4 6 3-4 6 7z"/><circle cx="17" cy="6" r="2"/>` },
  { id: "sea", name: "Sea", category: "Nature", tags: ["ocean", "water", "wave"], body: `<path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 20c2-2 4-2 6 0"/>` },
  { id: "drop", name: "Drop", category: "Nature", tags: ["water", "liquid"], body: `<path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z"/>` },
  { id: "sprout", name: "Sprout", category: "Nature", tags: ["grow", "seed", "plant"], body: `<path d="M12 22V12M12 12c0-3-2-5-6-5 0 4 2 5 6 5zM12 10c0-3 2-5 6-5 0 4-2 5-6 5z"/>` },
  { id: "feather", name: "Feather", category: "Nature", tags: ["bird", "soft"], body: `<path d="M3 21l6-6M20 4c-4 0-12 4-12 12l4 4c8 0 12-8 12-12z"/><path d="M14 6l-7 7M16 8l-7 7"/>` },
  { id: "rainbow", name: "Rainbow", category: "Nature", tags: ["color", "sky"], body: `<path d="M3 18a9 9 0 0 1 18 0M5 18a7 7 0 0 1 14 0M7 18a5 5 0 0 1 10 0M9 18a3 3 0 0 1 6 0"/>` },
  { id: "volcano", name: "Volcano", category: "Nature", tags: ["mountain", "lava"], body: `<path d="M3 21l5-12 4 4 4-4 5 12z"/><path d="M8 9c0-2 1-3 3-3M14 8c0-2 1-3 3-3"/>` },
  { id: "fish", name: "Fish", category: "Nature", tags: ["animal", "sea"], body: `<path d="M3 12c3-5 9-5 13 0-4 5-10 5-13 0z"/><path d="M16 12l5-3v6z"/><circle cx="8" cy="11" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "paw", name: "Paw", category: "Nature", tags: ["pet", "animal"], body: `<circle cx="7" cy="10" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="17" cy="10" r="2"/><path d="M8 18c0-3 8-3 8 0a4 4 0 0 1-8 0z"/>` },

  // ─── FOOD (12) ───
  { id: "coffee", name: "Coffee", category: "Food", tags: ["drink", "cup", "morning"], body: `<path d="M5 8h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/><path d="M7 3v2M10 3v2M13 3v2"/>` },
  { id: "pizza", name: "Pizza", category: "Food", tags: ["slice", "italian"], body: `<path d="M3 18L12 2l9 16z"/><circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="13" cy="10" r="1.2" fill="currentColor" stroke="none"/>` },
  { id: "burger", name: "Burger", category: "Food", tags: ["food", "fast"], body: `<path d="M3 8c0-3 9-3 18 0M3 14h18M4 18h16"/>` },
  { id: "ice-cream", name: "Ice Cream", category: "Food", tags: ["dessert", "sweet"], body: `<path d="M8 9a4 4 0 0 1 8 0M8 9l4 12 4-12"/>` },
  { id: "cake", name: "Cake", category: "Food", tags: ["birthday", "dessert"], body: `<path d="M3 21V13c0-2 2-3 4-3h10c2 0 4 1 4 3v8"/><path d="M3 16h18M11 7V3M13 7V3"/>` },
  { id: "apple", name: "Apple", category: "Food", tags: ["fruit", "red"], body: `<path d="M12 5c-2-1-5-1-7 1-2 3-1 9 2 12 2 2 4 1 5 0 1 1 3 2 5 0 3-3 4-9 2-12-2-2-5-2-7-1z"/><path d="M12 5c0-2 1-3 3-3"/>` },
  { id: "cherry", name: "Cherry", category: "Food", tags: ["fruit", "red"], body: `<circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/><path d="M7 14c0-5 5-7 10-10M14 12c0-3 3-5 5-5"/>` },
  { id: "wine", name: "Wine Glass", category: "Food", tags: ["drink", "alcohol"], body: `<path d="M7 3h10l-2 7a3 3 0 0 1-6 0z"/><path d="M12 10v8M8 21h8"/>` },
  { id: "egg", name: "Egg", category: "Food", tags: ["breakfast", "food"], body: `<path d="M12 22a7 7 0 0 1-7-7c0-7 7-15 7-15s7 8 7 15a7 7 0 0 1-7 7z"/>` },
  { id: "carrot", name: "Carrot", category: "Food", tags: ["vegetable", "orange"], body: `<path d="M14 4l-9 9 5 5 9-9z"/><path d="M14 4l-3 3M16 5l-2 4M18 6l-3 2"/>` },
  { id: "bread", name: "Bread", category: "Food", tags: ["bakery", "loaf"], body: `<path d="M4 14c-1-1-1-4 2-5h12c3 1 3 4 2 5v5H4z"/><path d="M4 14h16"/>` },
  { id: "donut", name: "Donut", category: "Food", tags: ["dessert", "sweet"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="8" cy="8" r="0.8" fill="currentColor" stroke="none"/><circle cx="16" cy="9" r="0.8" fill="currentColor" stroke="none"/>` },

  // ─── TRANSPORT (12) ───
  { id: "car", name: "Car", category: "Transport", tags: ["vehicle", "auto"], body: `<path d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5v5h-3v-2H6v2H3z"/><circle cx="7" cy="15" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="15" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "plane", name: "Plane", category: "Transport", tags: ["aircraft", "fly"], body: `<path d="M2 12l8-2 2-7 2 7 8 2-8 2-2 7-2-7z"/>` },
  { id: "bike", name: "Bike", category: "Transport", tags: ["bicycle", "cycle"], body: `<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-7h6l-3 7M10 10l2 7M14 10l4 7"/>` },
  { id: "ship", name: "Ship", category: "Transport", tags: ["boat", "sea"], body: `<path d="M3 14l1-5h16l1 5M5 14v3h14v-3M12 5v4M9 7h6"/><path d="M3 19c2 1 4 1 6 0s4-1 6 0 4 1 6 0"/>` },
  { id: "rocket-ship", name: "Rocket Ship", category: "Transport", tags: ["space", "launch"], body: `<path d="M5 19c2-7 5-13 12-15-2 7-8 10-15 12z"/><path d="M5 19l3 3"/>` },
  { id: "train", name: "Train", category: "Transport", tags: ["railway", "metro"], body: `<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 7h6M8 17l-3 4M16 17l3 4"/><circle cx="9" cy="14" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "bus", name: "Bus", category: "Transport", tags: ["transport", "public"], body: `<rect x="3" y="5" width="18" height="13" rx="2"/><path d="M3 12h18M7 18v3M17 18v3"/><circle cx="8" cy="15" r="0.8" fill="currentColor" stroke="none"/><circle cx="16" cy="15" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "scooter", name: "Scooter", category: "Transport", tags: ["vehicle", "electric"], body: `<circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 18l3-8h4l3 8M14 10l3-4M5 10h3"/>` },
  { id: "fuel", name: "Fuel", category: "Transport", tags: ["gas", "petrol"], body: `<path d="M5 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16M5 13h8"/><path d="M14 8l3 3v10M14 8V5l3-2"/>` },
  { id: "wheel", name: "Wheel", category: "Transport", tags: ["tyre", "circle"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>` },
  { id: "traffic", name: "Traffic Light", category: "Transport", tags: ["signal", "road"], body: `<rect x="8" y="3" width="8" height="18" rx="2"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="17" r="1.5"/>` },
  { id: "anchor", name: "Anchor", category: "Transport", tags: ["ship", "sea", "hold"], body: `<circle cx="12" cy="5" r="2"/><path d="M12 7v14M5 14a7 7 0 0 0 14 0M8 12H5M19 12h-3"/>` },

  // ─── BUSINESS (12) ───
  { id: "chart", name: "Chart", category: "Business", tags: ["graph", "stats"], body: `<path d="M3 21V3M3 21h18M7 17v-4M11 17v-7M15 17v-10M19 17v-5"/>` },
  { id: "pie", name: "Pie Chart", category: "Business", tags: ["graph", "stats"], body: `<path d="M3 12a9 9 0 0 1 9-9v9h9a9 9 0 0 1-9 9 9 9 0 0 1-9-9z"/>` },
  { id: "briefcase", name: "Briefcase", category: "Business", tags: ["work", "bag", "office"], body: `<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>` },
  { id: "office", name: "Office", category: "Business", tags: ["building", "company"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>` },
  { id: "presentation", name: "Presentation", category: "Business", tags: ["meeting", "slide"], body: `<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4"/>` },
  { id: "handshake", name: "Handshake", category: "Business", tags: ["deal", "agreement"], body: `<path d="M3 12l4-3 5 2 5-2 4 3M7 9v5M17 9v5M3 12v4M21 12v4M10 14l2 1 2-1"/>` },
  { id: "growth", name: "Growth", category: "Business", tags: ["up", "increase"], body: `<path d="M3 17l5-5 4 3 6-8M16 7h4v4"/>` },
  { id: "target", name: "Target", category: "Business", tags: ["goal", "aim"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "balance", name: "Balance", category: "Business", tags: ["scale", "justice"], body: `<path d="M12 3v18M5 21h14M3 8h6l-3 5a3 3 0 0 1-6 0zM15 8h6l-3 5a3 3 0 0 1-6 0z"/>` },
  { id: "globe", name: "Globe", category: "Business", tags: ["world", "earth"], body: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>` },
  { id: "factory", name: "Factory", category: "Business", tags: ["industry", "production"], body: `<path d="M3 21V11l5 3V11l5 3V11l5 3v7zM7 21v-3M11 21v-3M15 21v-3M19 21v-3M3 8l4-4 4 4"/>` },
  { id: "stamp", name: "Stamp", category: "Business", tags: ["approve", "seal"], body: `<path d="M7 14a4 4 0 0 1 1-7h8a4 4 0 0 1 1 7l-2 3H9z"/><rect x="3" y="17" width="18" height="4" rx="1"/>` },

  // ─── EDUCATION (10) ───
  { id: "graduation", name: "Graduation Cap", category: "Education", tags: ["study", "school"], body: `<path d="M3 9l9-4 9 4-9 4z"/><path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5M21 9v6"/>` },
  { id: "book-open", name: "Book Open", category: "Education", tags: ["read", "study"], body: `<path d="M3 5h6a3 3 0 0 1 3 3v12a3 3 0 0 0-3-3H3zM21 5h-6a3 3 0 0 0-3 3v12a3 3 0 0 1 3-3h6z"/>` },
  { id: "pencil", name: "Pencil", category: "Education", tags: ["write", "edit"], body: `<path d="M14 4l6 6L8 22H2v-6z"/><path d="M11 7l6 6"/>` },
  { id: "ruler", name: "Ruler", category: "Education", tags: ["measure", "tool"], body: `<rect x="2" y="9" width="20" height="6" rx="1" transform="rotate(-15 12 12)"/><path d="M6 11v2M9 10v3M12 10v3M15 9v3"/>` },
  { id: "calculator", name: "Calculator", category: "Education", tags: ["math", "compute"], body: `<rect x="5" y="3" width="14" height="18" rx="2"/><rect x="8" y="6" width="8" height="3"/><circle cx="9" cy="13" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="13" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "lightbulb-on", name: "Lightbulb On", category: "Education", tags: ["idea", "bright"], body: `<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/><path d="M9 8l1 1M14 9l1-1"/>` },
  { id: "flask", name: "Flask", category: "Education", tags: ["science", "lab"], body: `<path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3M7 3h10"/>` },
  { id: "atom", name: "Atom", category: "Education", tags: ["science", "nuclear"], body: `<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/>` },
  { id: "microscope", name: "Microscope", category: "Education", tags: ["science", "lab"], body: `<path d="M5 21h14M9 21v-4l3-3M14 14l3-9-3 3-3 9M11 8l3-3M7 16h6"/>` },
  { id: "test-tube", name: "Test Tube", category: "Education", tags: ["lab", "science"], body: `<path d="M9 3h6M9 3v15a3 3 0 0 0 6 0V3M9 12h6"/>` },

  // ─── HEALTH (10) ───
  { id: "heart-pulse", name: "Heart Pulse", category: "Health", tags: ["health", "medical"], body: `<path d="M12 21C5 16 3 12 3 8a4 4 0 0 1 7-2.5A4 4 0 0 1 21 8c0 4-2 8-9 13z"/><path d="M3 12h4l2-3 2 6 2-4 2 1h4"/>` },
  { id: "stethoscope", name: "Stethoscope", category: "Health", tags: ["medical", "doctor"], body: `<path d="M5 3v6a4 4 0 0 0 8 0V3M5 9v6a5 5 0 0 0 10 0M19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>` },
  { id: "pill", name: "Pill", category: "Health", tags: ["medicine", "capsule"], body: `<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(45 12 12)"/><path d="M9 9l6 6"/>` },
  { id: "hospital", name: "Hospital", category: "Health", tags: ["medical", "building"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M11 7h2v2h2v2h-2v2h-2v-2H9V9h2zM7 16h2M15 16h2M9 21v-3h6v3"/>` },
  { id: "dna", name: "DNA", category: "Health", tags: ["biology", "genetics"], body: `<path d="M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12M7 3v18M17 3v18M7 6h10M7 9h10M7 15h10M7 18h10"/>` },
  { id: "brain", name: "Brain", category: "Health", tags: ["mind", "think"], body: `<path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0 1 5 3 3 0 0 0 5 1zM12 5a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1-1 5 3 3 0 0 1-5 1z"/>` },
  { id: "tooth", name: "Tooth", category: "Health", tags: ["dental", "medical"], body: `<path d="M12 4c-4 0-6 2-6 5 0 4 2 4 2 8 0 2 1 3 2 3s1-3 2-3 1 3 2 3 2-1 2-3c0-4 2-4 2-8 0-3-2-5-6-5z"/>` },
  { id: "eye-medical", name: "Eye Medical", category: "Health", tags: ["vision", "optometry"], body: `<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/>` },
  { id: "bandage", name: "Bandage", category: "Health", tags: ["first-aid", "wound"], body: `<rect x="3" y="9" width="18" height="6" rx="3"/><circle cx="9" cy="12" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "syringe", name: "Syringe", category: "Health", tags: ["injection", "vaccine"], body: `<path d="M14 4l6 6M17 7l-9 9-3 1 1-3 9-9M5 19l2-2"/>` },

  // ─── GAMING (10) ───
  { id: "gamepad", name: "Gamepad", category: "Gaming", tags: ["controller", "play"], body: `<rect x="2" y="7" width="20" height="11" rx="3"/><path d="M6 11v3M5 12h2M16 11h0M18 13h0"/>` },
  { id: "joystick", name: "Joystick", category: "Gaming", tags: ["arcade", "control"], body: `<rect x="9" y="3" width="6" height="6" rx="1"/><path d="M12 9v6M5 15h14v6H5z"/>` },
  { id: "dice", name: "Dice", category: "Gaming", tags: ["roll", "chance"], body: `<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none"/><circle cx="16" cy="8" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="8" cy="16" r="1.2" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none"/>` },
  { id: "puzzle", name: "Puzzle", category: "Gaming", tags: ["piece", "fit"], body: `<path d="M9 3v3a2 2 0 0 1-4 0V6a3 3 0 0 0-1 6v3h4a2 2 0 0 1 0 4v3h8v-3a2 2 0 0 1 4 0v3h2v-8h-3a2 2 0 0 1 0-4h3V3z"/>` },
  { id: "trophy-cup", name: "Trophy Cup", category: "Gaming", tags: ["award", "winner"], body: `<path d="M7 4h10v6a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M9 18h6M10 21h4"/>` },
  { id: "sword", name: "Sword", category: "Gaming", tags: ["weapon", "blade"], body: `<path d="M14 3l7 7-9 9-7-7zM4 16l-2 4 4-2M16 5l3 3"/>` },
  { id: "shield-cross", name: "Shield Cross", category: "Gaming", tags: ["defense", "cross"], body: `<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M12 8v8M8 12h8"/>` },
  { id: "castle", name: "Castle", category: "Gaming", tags: ["fortress", "kingdom"], body: `<path d="M3 21V10l3-2v3l3-2v2l3-2v2l3-2v3l3 2v8zM9 21v-3h6v3"/>` },
  { id: "magic-wand", name: "Magic Wand", category: "Gaming", tags: ["spell", "wizard"], body: `<path d="M3 21l12-12M14 4l2 4 4 2-4 2-2 4-2-4-4-2 4-2zM5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/>` },
  { id: "ghost", name: "Ghost", category: "Gaming", tags: ["spooky", "spirit"], body: `<path d="M5 21v-9a7 7 0 0 1 14 0v9l-2-2-2 2-2-2-2 2-2-2-2 2z"/><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/>` },

  // ─── MUSIC EXTENDED (10) ───
  { id: "music-note", name: "Music Note", category: "MusicExt", tags: ["audio", "sound"], body: `<circle cx="6" cy="18" r="3"/><path d="M9 18V4l9-1v3l-9 1"/>` },
  { id: "headphones-music", name: "Headphones Music", category: "MusicExt", tags: ["audio", "listen"], body: `<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M10 8c0 2 2 3 2 3s2-1 2-3"/>` },
  { id: "microphone", name: "Microphone", category: "MusicExt", tags: ["record", "voice"], body: `<rect x="9" y="3" width="6" height="10" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>` },
  { id: "playlist", name: "Playlist", category: "MusicExt", tags: ["queue", "music"], body: `<path d="M3 6h10M3 10h10M3 14h7M3 18h7M16 8l5 3-5 3z"/>` },
  { id: "disc", name: "Disc", category: "MusicExt", tags: ["cd", "vinyl"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "guitar", name: "Guitar", category: "MusicExt", tags: ["instrument", "string"], body: `<path d="M14 3l7 7M14 7l3-3-1-1M11 9l-7 7c-2 2-2 4 0 6s4 2 6 0l7-7"/><circle cx="8" cy="16" r="2"/>` },
  { id: "drum", name: "Drum", category: "MusicExt", tags: ["instrument", "beat"], body: `<ellipse cx="12" cy="6" rx="8" ry="2"/><path d="M4 6v11c0 2 4 3 8 3s8-1 8-3V6M12 6v14M8 4l-4-2M16 4l4-2"/>` },
  { id: "equalizer", name: "Equalizer", category: "MusicExt", tags: ["audio", "bars"], body: `<path d="M6 4v16M12 4v16M18 4v16M3 8h6M9 14h6M15 8h6"/>` },
  { id: "radio", name: "Radio", category: "MusicExt", tags: ["broadcast", "tune"], body: `<rect x="3" y="9" width="18" height="11" rx="2"/><circle cx="9" cy="14" r="2"/><path d="M14 12h4M14 15h4M5 9l8-4"/>` },
  { id: "mic-off", name: "Mic Off", category: "MusicExt", tags: ["mute", "silent"], body: `<path d="M3 3l18 18M9 9v3a3 3 0 0 0 5 2M5 11a7 7 0 0 0 11 5M12 18v3M8 21h8"/>` },

  // ─── ANALYTICS (10) ───
  { id: "analytics-up", name: "Analytics Up", category: "Analytics", tags: ["growth", "data"], body: `<path d="M3 21V3M3 21h18M7 17l4-5 3 3 5-7M16 8h4v4"/>` },
  { id: "dashboard", name: "Dashboard", category: "Analytics", tags: ["panel", "stats"], body: `<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/>` },
  { id: "users-graph", name: "Users Graph", category: "Analytics", tags: ["people", "stats"], body: `<circle cx="9" cy="8" r="3"/><path d="M3 19a6 6 0 0 1 12 0"/><circle cx="17" cy="6" r="2"/><path d="M15 19a4 4 0 0 1 6-3"/>` },
  { id: "activity", name: "Activity", category: "Analytics", tags: ["pulse", "monitor"], body: `<path d="M3 12h4l3-7 4 14 3-7h4"/>` },
  { id: "bar-chart", name: "Bar Chart", category: "Analytics", tags: ["graph", "stats"], body: `<path d="M3 21V3M3 21h18M7 21v-4M11 21v-8M15 21v-12M19 21v-6"/>` },
  { id: "trending-down", name: "Trending Down", category: "Analytics", tags: ["decrease", "fall"], body: `<path d="M3 7l5 5 4-3 6 7M16 16h4v-4"/>` },
  { id: "dollar", name: "Dollar", category: "Analytics", tags: ["money", "currency"], body: `<path d="M12 3v18M16 7c-1-2-3-3-5-3-3 0-5 2-5 4s2 3 5 4 5 2 5 4-2 4-5 4-4-1-5-3"/>` },
  { id: "percent", name: "Percent", category: "Analytics", tags: ["ratio", "discount"], body: `<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/>` },
  { id: "signal", name: "Signal", category: "Analytics", tags: ["bars", "network"], body: `<path d="M3 21h2v-4H3zM8 21h2v-9H8zM13 21h2v-13h-2zM18 21h2V5h-2z"/>` },
  { id: "wifi", name: "WiFi", category: "Analytics", tags: ["network", "wireless"], body: `<path d="M5 12a10 10 0 0 1 14 0M8 15a6 6 0 0 1 8 0"/><circle cx="12" cy="18" r="1.2" fill="currentColor" stroke="none"/>` },

  // ─── SECURITY (10) ───
  { id: "shield-check", name: "Shield Check", category: "Security", tags: ["safe", "verified"], body: `<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>` },
  { id: "fingerprint", name: "Fingerprint", category: "Security", tags: ["biometric", "scan"], body: `<path d="M5 12a7 7 0 0 1 14 0M7 12a5 5 0 0 1 10 0v3M9 12a3 3 0 0 1 6 0M12 12v5"/>` },
  { id: "eye-shield", name: "Eye Shield", category: "Security", tags: ["privacy", "protect"], body: `<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/>` },
  { id: "lock-key", name: "Lock Key", category: "Security", tags: ["secure", "key"], body: `<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.5"/>` },
  { id: "shield-alert", name: "Shield Alert", category: "Security", tags: ["warning", "danger"], body: `<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M12 8v4M12 16v0.5"/>` },
  { id: "keyhole", name: "Keyhole", category: "Security", tags: ["locked", "secure"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="2"/><path d="M11 12l-1 4h4l-1-4"/>` },
  { id: "fingerprint-2", name: "Fingerprint 2", category: "Security", tags: ["biometric", "scan"], body: `<path d="M3 12a9 9 0 0 1 18 0M6 12a6 6 0 0 1 12 0M9 12a3 3 0 0 1 6 0v3M12 12v6"/>` },
  { id: "password", name: "Password", category: "Security", tags: ["auth", "secret"], body: `<rect x="3" y="9" width="18" height="11" rx="2"/><path d="M7 9V6a5 5 0 0 1 10 0v3"/><circle cx="8" cy="14" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none"/><circle cx="16" cy="14" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "verified", name: "Verified", category: "Security", tags: ["check", "badge"], body: `<path d="M12 2l3 2 4-1 1 4 2 3-2 3 1 4-4 1-3 2-3-2-4 1-1-4-2-3 2-3 3-2-1-4 4-1z"/><path d="M9 12l2 2 4-4"/>` },
  { id: "block", name: "Block", category: "Security", tags: ["forbidden", "ban"], body: `<circle cx="12" cy="12" r="9"/><path d="M5 5l14 14"/>` },

  // ─── EMOJI/EXPRESSION (12) ───
  { id: "smile", name: "Smile", category: "Emoji", tags: ["happy", "face"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 14a3 3 0 0 0 6 0"/><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "frown", name: "Frown", category: "Emoji", tags: ["sad", "face"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 16a3 3 0 0 1 6 0"/><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "angry", name: "Angry", category: "Emoji", tags: ["mad", "rage"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 16a4 4 0 0 1 8 0M8 9l3 1M16 9l-3 1"/>` },
  { id: "laugh", name: "Laugh", category: "Emoji", tags: ["happy", "lol"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0z"/><path d="M8 10c1-1 1-1 2 0M14 10c1-1 1-1 2 0"/>` },
  { id: "wink", name: "Wink", category: "Emoji", tags: ["playful", "face"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 14a3 3 0 0 0 6 0"/><path d="M9 10h0.1M15 10h0"/>` },
  { id: "love", name: "Love Face", category: "Emoji", tags: ["heart", "smitten"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 14a3 3 0 0 0 6 0"/><path d="M9 9l1-1.5 1 1.5-1 1.5zM15 9l1-1.5 1 1.5-1 1.5z"/>` },
  { id: "neutral", name: "Neutral", category: "Emoji", tags: ["meh", "face"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 15h6M9 10h0.1M15 10h0"/>` },
  { id: "cool", name: "Cool", category: "Emoji", tags: ["sunglasses", "chill"], body: `<circle cx="12" cy="12" r="9"/><rect x="6" y="9" width="5" height="3" rx="1"/><rect x="13" y="9" width="5" height="3" rx="1"/><path d="M11 10h2"/>` },
  { id: "sleep", name: "Sleep", category: "Emoji", tags: ["tired", "zzz"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 15h6M9 10l3-1M15 10l-3-1M19 4l2 0M21 7l1 0"/>` },
  { id: "shock", name: "Shock", category: "Emoji", tags: ["surprised", "wow"], body: `<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.2"/><circle cx="15" cy="10" r="1.2"/><circle cx="12" cy="16" r="2"/>` },
  { id: "thumbs-up", name: "Thumbs Up", category: "Emoji", tags: ["like", "approve"], body: `<path d="M7 22V11l4-4V3a2 2 0 0 1 4 0v6h5a2 2 0 0 1 2 2l-2 9a3 3 0 0 1-3 2z"/>` },
  { id: "thumbs-down", name: "Thumbs Down", category: "Emoji", tags: ["dislike", "reject"], body: `<path d="M7 2v11l4 4v4a2 2 0 0 0 4 0v-6h5a2 2 0 0 0 2-2l-2-9a3 3 0 0 0-3-2z"/>` },

  // ─── SPORTS (12) ───
  { id: "soccer", name: "Soccer Ball", category: "Sports", tags: ["football", "ball"], body: `<circle cx="12" cy="12" r="9"/><path d="M12 7l3 2-1 4h-4l-1-4z"/><path d="M12 7V3M14 12l3 4M10 12l-3 4M5 9l4 0M19 9l-4 0"/>` },
  { id: "basketball", name: "Basketball", category: "Sports", tags: ["ball", "court"], body: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M5 5c3 3 5 7 7 14M19 5c-3 3-5 7-7 14"/>` },
  { id: "trophy-medal", name: "Medal", category: "Sports", tags: ["award", "winner"], body: `<circle cx="12" cy="14" r="5"/><path d="M12 9V3M9 3h6M8 7l4 2 4-2"/>` },
  { id: "whistle", name: "Whistle", category: "Sports", tags: ["referee", "blow"], body: `<path d="M3 11a5 5 0 0 1 10 0 5 5 0 0 1-10 0z"/><path d="M13 11h8M21 8v6"/>` },
  { id: "stopwatch", name: "Stopwatch", category: "Sports", tags: ["time", "track"], body: `<circle cx="12" cy="13" r="8"/><path d="M12 13l3-3M10 3h4M19 5l2 2"/>` },
  { id: "dumbbell", name: "Dumbbell", category: "Sports", tags: ["gym", "weight"], body: `<rect x="2" y="9" width="3" height="6"/><rect x="5" y="7" width="3" height="10"/><rect x="16" y="7" width="3" height="10"/><rect x="19" y="9" width="3" height="6"/><path d="M8 12h8"/>` },
  { id: "skate", name: "Skate", category: "Sports", tags: ["ice", "blade"], body: `<path d="M3 18h13l4-12M3 18v3M16 18v3"/>` },
  { id: "boxing-glove", name: "Boxing Glove", category: "Sports", tags: ["fight", "punch"], body: `<path d="M5 21V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3h2v6h-3a4 4 0 0 1-4 4z"/><path d="M9 11h6"/>` },
  { id: "volleyball", name: "Volleyball", category: "Sports", tags: ["ball", "court"], body: `<circle cx="12" cy="12" r="9"/><path d="M3 12c3-3 9-3 9-3M12 3c-3 4-9 9-9 9M21 12c-3-3-9 0-9 0"/>` },
  { id: "golf", name: "Golf Flag", category: "Sports", tags: ["hole", "club"], body: `<path d="M12 21V3M12 3l8 3-8 3"/><circle cx="12" cy="21" r="1.5"/>` },
  { id: "racket", name: "Tennis Racket", category: "Sports", tags: ["tennis", "bat"], body: `<ellipse cx="9" cy="9" rx="6" ry="7"/><path d="M14 14l6 6M5 5c2 2 6 6 8 8"/>` },
  { id: "helmet", name: "Helmet", category: "Sports", tags: ["safety", "bike"], body: `<path d="M3 14a9 9 0 0 1 18 0M3 14v2h18v-2M5 18h14M9 14a3 3 0 0 1 6 0"/>` },

  // ─── RELIGION/SPIRITUAL (8) ───
  { id: "om", name: "Om Symbol", category: "Spiritual", tags: ["hindu", "mantra"], body: `<path d="M3 14c2 2 5 2 7 0s2-5-1-6c-2 0-3 2-1 3M11 8c2 0 4 2 4 4M14 6a2 2 0 1 0 0-0.1M3 18c3 2 6 2 9 0"/>` },
  { id: "cross", name: "Cross", category: "Spiritual", tags: ["christian", "faith"], body: `<path d="M12 21V8M5 11h14M9 8h6"/>` },
  { id: "crescent-star", name: "Crescent Star", category: "Spiritual", tags: ["islam", "moon"], body: `<path d="M16 4a8 8 0 1 0 4 14 6 6 0 0 1-4-14z"/><path d="M19 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/>` },
  { id: "lotus", name: "Lotus", category: "Spiritual", tags: ["buddhism", "flower"], body: `<path d="M12 21c-5 0-9-3-9-7 3 0 5 2 9 6 4-4 6-6 9-6 0 4-4 7-9 7zM12 21V8M8 11c0 3 2 6 4 7M16 11c0 3-2 6-4 7"/>` },
  { id: "menorah", name: "Menorah", category: "Spiritual", tags: ["judaism", "candle"], body: `<path d="M3 3v4a2 2 0 0 0 4 0V3M9 3v4a2 2 0 0 0 4 0V3M15 3v4a2 2 0 0 0 4 0V3M5 21h12M11 7v14M7 5h0.1M17 5h0.1"/>` },
  { id: "dharma-wheel", name: "Dharma Wheel", category: "Spiritual", tags: ["buddhism", "wheel"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"/>` },
  { id: "khanda", name: "Khanda", category: "Spiritual", tags: ["sikh", "sword"], body: `<circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/>` },
  { id: "star-of-david", name: "Star of David", category: "Spiritual", tags: ["judaism", "hexagram"], body: `<path d="M12 3l9 16H3z"/><path d="M12 21L3 5h18z"/>` },

  // ─── WEATHER EXTENDED (8) ───
  { id: "thunderstorm", name: "Thunderstorm", category: "WeatherExt", tags: ["lightning", "rain"], body: `<path d="M7 14a5 5 0 0 1-1-9.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><path d="M13 14l-3 5h3l-2 4"/>` },
  { id: "fog", name: "Fog", category: "WeatherExt", tags: ["mist", "cloud"], body: `<path d="M3 8h18M3 12h14M5 16h14M3 20h10"/>` },
  { id: "tornado", name: "Tornado", category: "WeatherExt", tags: ["cyclone", "wind"], body: `<path d="M3 4h18M5 8h14M7 12h10M9 16h6M11 20h2"/>` },
  { id: "thermometer", name: "Thermometer", category: "WeatherExt", tags: ["temperature", "hot"], body: `<path d="M14 14V5a2 2 0 0 0-4 0v9a4 4 0 1 0 4 0z"/><circle cx="12" cy="17" r="2"/>` },
  { id: "umbrella", name: "Umbrella", category: "WeatherExt", tags: ["rain", "shelter"], body: `<path d="M3 12a9 9 0 0 1 18 0M3 12h18M12 12v6a2 2 0 0 1-4 0"/>` },
  { id: "rainbow-full", name: "Rainbow Full", category: "WeatherExt", tags: ["color", "sky"], body: `<path d="M3 21a9 9 0 0 1 18 0M6 21a6 6 0 0 1 12 0M9 21a3 3 0 0 1 6 0"/>` },
  { id: "humidity", name: "Humidity", category: "WeatherExt", tags: ["moisture", "water"], body: `<path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z"/><path d="M9 14a3 3 0 0 0 3 3"/>` },
  { id: "sunrise", name: "Sunrise", category: "WeatherExt", tags: ["morning", "dawn"], body: `<path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 8V3M9 6l3-3 3 3M3 21h18"/>` },

  // ─── ANIMALS (12) ───
  { id: "cat", name: "Cat", category: "Animals", tags: ["pet", "feline"], body: `<path d="M5 4l3 3h6l3-3v6a6 6 0 0 1-12 0z"/><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/><path d="M11 13l1 1 1-1"/>` },
  { id: "dog", name: "Dog", category: "Animals", tags: ["pet", "canine"], body: `<path d="M5 5l2 4v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9l2-4M9 13h0M15 13h0M11 16h2"/>` },
  { id: "bird", name: "Bird", category: "Animals", tags: ["fly", "animal"], body: `<path d="M3 12c4-2 7-5 9-9 2 4 5 7 9 9-4 2-7 5-9 9-2-4-5-7-9-9z"/><circle cx="8" cy="11" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "rabbit", name: "Rabbit", category: "Animals", tags: ["bunny", "pet"], body: `<path d="M8 8c-2-2-3-5-1-7 2 1 3 3 3 5M16 8c2-2 3-5 1-7-2 1-3 3-3 5M5 14a7 7 0 0 1 14 0v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><circle cx="10" cy="14" r="0.8" fill="currentColor" stroke="none"/><circle cx="14" cy="14" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "turtle", name: "Turtle", category: "Animals", tags: ["sea", "slow"], body: `<ellipse cx="12" cy="13" rx="6" ry="4"/><circle cx="18" cy="11" r="1.5"/><path d="M6 13l-3-2M6 15l-3 1M18 15l3 1M18 13l3-1"/>` },
  { id: "butterfly", name: "Butterfly", category: "Animals", tags: ["insect", "fly"], body: `<path d="M12 6v14M9 9c-3-3-6-1-6 2s3 5 6 2zM15 9c3-3 6-1 6 2s-3 5-6 2z"/>` },
  { id: "horse", name: "Horse", category: "Animals", tags: ["animal", "stallion"], body: `<path d="M3 21l4-7 2-7 3 1 4-3v6l5 5v5M7 14l3 1M14 7h0.1"/>` },
  { id: "snake", name: "Snake", category: "Animals", tags: ["reptile", "serpent"], body: `<path d="M5 21c0-3 3-3 6-3s6 0 6-3-3-3-6-3-6 0-6-3 3-3 6-3 6 0 6-3M19 3l-2 2 2 2"/>` },
  { id: "whale", name: "Whale", category: "Animals", tags: ["sea", "mammal"], body: `<path d="M3 14c0-5 6-9 12-7 4 1 6 5 6 9l-3 3-9 0-3-3z"/><path d="M21 11l3-3M9 11v0.1M14 11v0.1"/>` },
  { id: "elephant", name: "Elephant", category: "Animals", tags: ["animal", "trunk"], body: `<path d="M3 12c0-4 4-7 9-7s9 3 9 7v4a3 3 0 0 1-3 3h-3M3 12v3a2 2 0 0 0 2 2M15 19v2M9 19v2M9 12v0.1M13 12v0.1"/>` },
  { id: "spider", name: "Spider", category: "Animals", tags: ["insect", "halloween"], body: `<circle cx="12" cy="13" r="4"/><path d="M8 11l-5-3M8 13l-6 1M8 15l-5 5M16 11l5-3M16 13l6 1M16 15l5 5M10 9V3M14 9V3"/>` },
  { id: "ant", name: "Ant", category: "Animals", tags: ["insect", "tiny"], body: `<circle cx="12" cy="7" r="2"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="17" r="2"/><path d="M10 5L6 3M14 5l4-3M10 12l-5 1M14 12l5 1M10 17l-4 3M14 17l4 3"/>` },

  // ─── OFFICE EXTENDED (10) ───
  { id: "paperclip", name: "Paperclip", category: "Office", tags: ["attach", "clip"], body: `<path d="M19 5l-9 9a3 3 0 0 1-4-4l8-8a5 5 0 0 1 7 7l-9 9a7 7 0 0 1-10-10l8-8"/>` },
  { id: "pin", name: "Pin", category: "Office", tags: ["pushpin", "marker"], body: `<path d="M9 3h6l-1 7 3 4H7l3-4z"/><path d="M12 14v7"/>` },
  { id: "stapler", name: "Stapler", category: "Office", tags: ["bind", "clip"], body: `<path d="M3 14l3-3h13v6H3z"/><path d="M3 17h16M6 11V8h13"/>` },
  { id: "scissors-2", name: "Scissors", category: "Office", tags: ["cut", "tool"], body: `<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8 8l12 8M8 16L20 8"/>` },
  { id: "clip", name: "Binder Clip", category: "Office", tags: ["clip", "hold"], body: `<path d="M5 4h14v10H5z"/><path d="M5 14v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3M9 8v2M12 8v2M15 8v2"/>` },
  { id: "globe-2", name: "Globe 2", category: "Office", tags: ["world", "earth"], body: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>` },
  { id: "calendar-2", name: "Calendar Check", category: "Office", tags: ["date", "schedule"], body: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M9 14l2 2 4-4"/>` },
  { id: "clock-alarm", name: "Alarm Clock", category: "Office", tags: ["wake", "time"], body: `<circle cx="12" cy="13" r="8"/><path d="M12 13V9M5 5L3 3M19 5l2-2M12 13l3 2"/>` },
  { id: "calculator-2", name: "Calculator 2", category: "Office", tags: ["math", "compute"], body: `<rect x="5" y="3" width="14" height="18" rx="2"/><rect x="8" y="6" width="8" height="3"/><circle cx="9" cy="13" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="13" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="0.8" fill="currentColor" stroke="none"/><circle cx="9" cy="17" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="17" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "label", name: "Label", category: "Office", tags: ["tag", "marker"], body: `<path d="M3 3h10l8 8-8 8H3z"/><circle cx="8" cy="8" r="1.5"/>` },

  // ─── EMOJI EXTENDED (10) ───
  { id: "tongue", name: "Tongue Out", category: "EmojiExt", tags: ["playful", "face"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0"/><path d="M11 14v5h2a2 2 0 0 0 0-5"/><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "cry", name: "Cry", category: "EmojiExt", tags: ["sad", "tears"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 16a4 4 0 0 1 8 0"/><path d="M9 11l-2-2M15 11l2-2M9 14l-1 5"/>` },
  { id: "kiss", name: "Kiss", category: "EmojiExt", tags: ["love", "lips"], body: `<circle cx="12" cy="12" r="9"/><path d="M10 14a2 2 0 0 1 4 0M9 10c0-1 1-1 1 0M15 10c0-1-1-1-1 0"/>` },
  { id: "tired", name: "Tired", category: "EmojiExt", tags: ["sleepy", "exhausted"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 16h8M9 10l2 2M15 10l-2 2"/>` },
  { id: "dizzy", name: "Dizzy", category: "EmojiExt", tags: ["spiral", "confused"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 9l-1 1 1 1-1 1M15 9l1 1-1 1 1 1M8 16h8"/>` },
  { id: "meh", name: "Meh", category: "EmojiExt", tags: ["unimpressed", "face"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 15h8M9 10h0.1M15 10h0"/>` },
  { id: "thinking", name: "Thinking", category: "EmojiExt", tags: ["ponder", "hand"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 14h4M9 10l3-1M15 10l-3-1M16 14l3 4"/>` },
  { id: "vomit", name: "Sick", category: "EmojiExt", tags: ["unwell", "ill"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0M9 9l2-1M15 9l-2-1M9 19l1-3 2 1 1-2 2 1"/>` },
  { id: "nerd", name: "Nerd", category: "EmojiExt", tags: ["glasses", "smart"], body: `<circle cx="12" cy="12" r="9"/><circle cx="8" cy="11" r="2"/><circle cx="16" cy="11" r="2"/><path d="M10 11h4M8 16h8"/>` },
  { id: "crazy", name: "Crazy", category: "EmojiExt", tags: ["wild", "eyes"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0M7 10c1-1 2-1 3 0M14 10c1-1 2-1 3 0"/>` },

  // ─── ARROWS EXTENDED (10) ───
  { id: "arrow-up-right", name: "Arrow Up Right", category: "ArrowsExt", tags: ["diagonal", "northeast"], body: `<path d="M7 17L17 7M9 7h8v8"/>` },
  { id: "arrow-up-left", name: "Arrow Up Left", category: "ArrowsExt", tags: ["diagonal", "northwest"], body: `<path d="M17 17L7 7M15 7H7v8"/>` },
  { id: "arrow-down-right", name: "Arrow Down Right", category: "ArrowsExt", tags: ["diagonal", "southeast"], body: `<path d="M7 7l10 10M17 9v8H9"/>` },
  { id: "arrow-down-left", name: "Arrow Down Left", category: "ArrowsExt", tags: ["diagonal", "southwest"], body: `<path d="M17 7L7 17M15 17H7V9"/>` },
  { id: "corner-up", name: "Corner Up", category: "ArrowsExt", tags: ["turn", "curve"], body: `<path d="M9 21V9c0-3 3-6 6-6h3M15 9l3-3-3-3"/>` },
  { id: "corner-down", name: "Corner Down", category: "ArrowsExt", tags: ["turn", "curve"], body: `<path d="M9 3v12c0 3 3 6 6 6h3M15 15l3 3-3 3"/>` },
  { id: "arrow-loop", name: "Loop Arrow", category: "ArrowsExt", tags: ["cycle", "repeat"], body: `<path d="M3 12a4 4 0 0 1 4-4h10M13 5l4 3-4 3M21 12a4 4 0 0 1-4 4H7M11 19l-4-3 4-3"/>` },
  { id: "arrow-shuffle", name: "Shuffle", category: "ArrowsExt", tags: ["random", "mix"], body: `<path d="M3 5h4l10 14h4M3 19h4l4-5M17 5h4l-4 4M17 19l4-4"/>` },
  { id: "arrow-swap", name: "Swap", category: "ArrowsExt", tags: ["exchange", "switch"], body: `<path d="M7 4v16M3 8l4-4 4 4M17 20V4M21 16l-4 4-4-4"/>` },
  { id: "arrow-rotate", name: "Rotate", category: "ArrowsExt", tags: ["spin", "turn"], body: `<path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9M3 12l-2-2M3 12l2-2M21 12l2-2M21 12l-2-2"/>` },

  // ─── KITCHEN (12) ───
  { id: "fork", name: "Fork", category: "Kitchen", tags: ["utensil", "eat"], body: `<path d="M5 3v6a3 3 0 0 0 6 0V3M8 3v18M16 3c-2 0-3 2-3 4v6h3v8"/>` },
  { id: "spoon", name: "Spoon", category: "Kitchen", tags: ["utensil", "eat"], body: `<ellipse cx="12" cy="6" rx="3" ry="4"/><path d="M12 10v12"/>` },
  { id: "knife", name: "Knife", category: "Kitchen", tags: ["cut", "kitchen"], body: `<path d="M9 3c-2 4-2 10 0 14v4h2V17c2-4 2-10 0-14z"/>` },
  { id: "plate", name: "Plate", category: "Kitchen", tags: ["dish", "serve"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/>` },
  { id: "mug", name: "Mug", category: "Kitchen", tags: ["cup", "drink"], body: `<path d="M5 8h11v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path d="M16 10h3a2 2 0 0 1 0 4h-3"/>` },
  { id: "bottle", name: "Bottle", category: "Kitchen", tags: ["drink", "water"], body: `<path d="M10 2h4v3l1 2v13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7l1-2z"/>` },
  { id: "kettle", name: "Kettle", category: "Kitchen", tags: ["boil", "tea"], body: `<path d="M5 12h12v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path d="M5 12l-2-2M17 12l3-3M9 6h4"/>` },
  { id: "cup-hot", name: "Hot Cup", category: "Kitchen", tags: ["tea", "coffee", "steam"], body: `<path d="M5 9h12v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path d="M17 11h3a2 2 0 0 1 0 4h-3M9 3v2M12 3v2"/>` },
  { id: "wine-2", name: "Wine Bottle", category: "Kitchen", tags: ["alcohol", "drink"], body: `<path d="M10 2h4v3l2 3v11a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V8l2-3z"/>` },
  { id: "jar", name: "Jar", category: "Kitchen", tags: ["container", "store"], body: `<rect x="5" y="6" width="14" height="15" rx="2"/><path d="M5 9h14M7 6V4h10v2M9 13v4M13 13v4"/>` },
  { id: "pot", name: "Cooking Pot", category: "Kitchen", tags: ["cook", "stove"], body: `<path d="M4 11h16v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/><path d="M2 11h20M6 8l1-3M10 8l1-3M14 8l1-3M18 8l1-3"/>` },
  { id: "fridge", name: "Fridge", category: "Kitchen", tags: ["cool", "appliance"], body: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 10h14M8 6v2M8 13v3"/>` },

  // ─── FURNITURE (10) ───
  { id: "chair", name: "Chair", category: "Furniture", tags: ["seat", "furniture"], body: `<path d="M6 3v10M18 3v10M6 13h12M7 13l-1 8M17 13l1 8M6 8h12"/>` },
  { id: "sofa", name: "Sofa", category: "Furniture", tags: ["couch", "lounge"], body: `<path d="M3 11V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"/><path d="M3 11a2 2 0 0 0-2 2v5h2v3h18v-3h2v-5a2 2 0 0 0-2-2z"/>` },
  { id: "bed", name: "Bed", category: "Furniture", tags: ["sleep", "mattress"], body: `<path d="M3 18V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10M3 18h18M3 14h18M5 6V4h4v2M15 6V4h4v2"/>` },
  { id: "table", name: "Table", category: "Furniture", tags: ["desk", "surface"], body: `<path d="M3 9h18M5 9v11M19 9v11M3 9V7h18v2"/>` },
  { id: "lamp", name: "Lamp", category: "Furniture", tags: ["light", "desk"], body: `<path d="M9 3h6l3 8H6zM12 11v6M8 21h8"/>` },
  { id: "bookshelf", name: "Bookshelf", category: "Furniture", tags: ["books", "shelf"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M6 5v2M10 5v2M14 11v2M9 17v2M16 17v2"/>` },
  { id: "drawer", name: "Drawer", category: "Furniture", tags: ["storage", "chest"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 9h16M4 15h16M10 6h4M10 12h4M10 18h4"/>` },
  { id: "mirror", name: "Mirror", category: "Furniture", tags: ["reflection", "glass"], body: `<ellipse cx="12" cy="12" rx="5" ry="9"/><path d="M12 3v3M12 18v3"/>` },
  { id: "clock-wall", name: "Wall Clock", category: "Furniture", tags: ["time", "wall"], body: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3M9 2h6"/>` },
  { id: "plant-pot", name: "Potted Plant", category: "Furniture", tags: ["decor", "green"], body: `<path d="M12 14c-2-3-2-7 0-10 2 3 2 7 0 10z"/><path d="M7 14h10l-1 7H8z"/>` },

  // ─── FASHION (10) ───
  { id: "shirt", name: "Shirt", category: "Fashion", tags: ["clothing", "top"], body: `<path d="M5 6l4-3h6l4 3-2 3v12H7V9z"/>` },
  { id: "pants", name: "Pants", category: "Fashion", tags: ["trousers", "clothing"], body: `<path d="M6 3h12l-1 18h-5l-1-10-1 10H5z"/>` },
  { id: "dress", name: "Dress", category: "Fashion", tags: ["clothing", "gown"], body: `<path d="M9 3h6l2 5-2 13H7L9 8z"/>` },
  { id: "shoe", name: "Shoe", category: "Fashion", tags: ["footwear", "sneaker"], body: `<path d="M3 16c0-2 4-3 6-3l3-6 4 3 5 1v5z"/>` },
  { id: "hat", name: "Hat", category: "Fashion", tags: ["cap", "head"], body: `<path d="M3 18c0-2 4-3 9-3s9 1 9 3M9 18L11 6h2l2 12"/>` },
  { id: "glasses", name: "Glasses", category: "Fashion", tags: ["sunglasses", "vision"], body: `<rect x="3" y="8" width="6" height="5" rx="1"/><rect x="15" y="8" width="6" height="5" rx="1"/><path d="M9 10h6M3 10H1M23 10h-2"/>` },
  { id: "umbrella-fashion", name: "Fashion Umbrella", category: "Fashion", tags: ["accessory", "rain"], body: `<path d="M3 12a9 9 0 0 1 18 0M3 12h18M12 12v6a2 2 0 0 1-4 0"/>` },
  { id: "glove", name: "Glove", category: "Fashion", tags: ["hand", "winter"], body: `<path d="M7 14V6a2 2 0 0 1 4 0v4M11 10V4a2 2 0 0 1 4 0v6M15 10V5a2 2 0 0 1 4 0v9a6 6 0 0 1-6 6h-4a4 4 0 0 1-4-4z"/>` },
  { id: "watch-fashion", name: "Watch Fashion", category: "Fashion", tags: ["wrist", "time"], body: `<rect x="7" y="7" width="10" height="10" rx="3"/><path d="M9 7V3h6v4M9 17v4h6v-4M12 11v2l1 1"/>` },
  { id: "sock", name: "Sock", category: "Fashion", tags: ["foot", "wool"], body: `<path d="M8 3h7v10l3 5a3 3 0 0 1-3 3H8a2 2 0 0 1-2-2V3z"/>` },

  // ─── BUILDING (10) ───
  { id: "home-2", name: "Home 2", category: "Buildings", tags: ["house", "residence"], body: `<path d="M3 12l9-9 9 9M5 10v10h14V10M9 20v-6h6v6"/>` },
  { id: "building", name: "Building", category: "Buildings", tags: ["office", "tower"], body: `<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>` },
  { id: "skyscraper", name: "Skyscraper", category: "Buildings", tags: ["tall", "city"], body: `<path d="M7 21V5l5-2 5 2v16M7 21h10M10 8h0M14 8h0M10 12h0M14 12h0M10 16h0M14 16h0"/>` },
  { id: "tent", name: "Tent", category: "Buildings", tags: ["camp", "shelter"], body: `<path d="M3 21l9-18 9 18z"/><path d="M12 3v18M3 21h18"/>` },
  { id: "garage", name: "Garage", category: "Buildings", tags: ["parking", "car"], body: `<path d="M3 20V9l9-5 9 5v11M3 20h18M6 20v-7h12v7"/>` },
  { id: "church", name: "Church", category: "Buildings", tags: ["religious", "building"], body: `<path d="M5 21V12l7-7 7 7v9M5 21h14M12 5V2M11 3h2M9 21v-5h6v5"/>` },
  { id: "school", name: "School", category: "Buildings", tags: ["education", "building"], body: `<path d="M3 21V9l9-5 9 5v12M3 21h18M9 21v-7h6v7M11 7h2"/>` },
  { id: "hospital-2", name: "Hospital Building", category: "Buildings", tags: ["medical", "building"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M11 7h2v2h2v2h-2v2h-2v-2H9V9h2zM8 16h2M14 16h2M9 21v-3h6v3"/>` },
  { id: "bridge", name: "Bridge", category: "Buildings", tags: ["cross", "river"], body: `<path d="M2 18h20M2 18v-6c4 0 6-3 10-3s6 3 10 3v6M5 18v3M19 18v3M10 9v9M14 9v9"/>` },
  { id: "tower", name: "Tower", category: "Buildings", tags: ["signal", "tall"], body: `<path d="M9 21V8l3-5 3 5v13M9 21h6M10 11h4M10 15h4"/>` },

  // ─── MUSIC INSTRUMENTS (8) ───
  { id: "piano", name: "Piano", category: "Instruments", tags: ["keys", "music"], body: `<rect x="3" y="6" width="18" height="14" rx="1"/><path d="M7 6v9M11 6v9M15 6v9M19 6v9M9 15v5M13 15v5M17 15v5"/>` },
  { id: "violin", name: "Violin", category: "Instruments", tags: ["strings", "music"], body: `<path d="M10 3l4 4-2 2-7 7-2 4 4-2 7-7 2 2 4-4z"/><path d="M10 7l4 4M5 18l3 3"/>` },
  { id: "trumpet", name: "Trumpet", category: "Instruments", tags: ["horn", "brass"], body: `<path d="M3 11h11l4-3v6l-4-3M14 11v0M3 9v6M7 11v2M10 11v2"/>` },
  { id: "guitar-2", name: "Acoustic Guitar", category: "Instruments", tags: ["music", "string"], body: `<path d="M14 4l6 6-7 7c-3 3-7 3-9 0s-1-6 2-9z"/><circle cx="8" cy="14" r="2"/>` },
  { id: "drums", name: "Drums", category: "Instruments", tags: ["beat", "percussion"], body: `<ellipse cx="12" cy="13" rx="8" ry="3"/><path d="M4 13v6c0 1.5 3.5 3 8 3s8-1.5 8-3v-6M12 4v6M9 6h6M9 6l-5 4M15 6l5 4"/>` },
  { id: "harp", name: "Harp", category: "Instruments", tags: ["strings", "music"], body: `<path d="M5 21V5l14 14M5 21h14M7 7l10 10M9 5l8 8M11 3l6 6M13 1l4 4"/>` },
  { id: "microphone-2", name: "Studio Mic", category: "Instruments", tags: ["record", "studio"], body: `<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>` },
  { id: "headphones-studio", name: "Studio Headphones", category: "Instruments", tags: ["audio", "music"], body: `<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/>` },

  // ─── FLAGS (8) ───
  { id: "flag-plain", name: "Flag Plain", category: "Flags", tags: ["banner", "mark"], body: `<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>` },
  { id: "flag-checkered", name: "Checkered Flag", category: "Flags", tags: ["race", "finish"], body: `<path d="M5 21V4M5 4h12l-2 4 2 4H5"/><rect x="5" y="4" width="3" height="2"/><rect x="8" y="6" width="3" height="2"/><rect x="11" y="4" width="3" height="2"/><rect x="14" y="6" width="3" height="2"/>` },
  { id: "flag-wave", name: "Waving Flag", category: "Flags", tags: ["wave", "wind"], body: `<path d="M5 21V4M5 4c2-1 4 1 6 0s4-1 6 0v8c-2-1-4 1-6 0s-4-1-6 0"/>` },
  { id: "flag-mast", name: "Mast Flag", category: "Flags", tags: ["pole", "banner"], body: `<path d="M5 21V3M5 3h12l-3 4 3 4H5M4 21h2"/>` },
  { id: "pennant", name: "Pennant", category: "Flags", tags: ["triangle", "banner"], body: `<path d="M5 21V4M5 4l12 4-12 4z"/>` },
  { id: "banner", name: "Banner", category: "Flags", tags: ["ribbon", "scroll"], body: `<path d="M3 5h18v10l-3 2-3-2-3 2-3-2-3 2-3-2z"/>` },
  { id: "ribbon", name: "Ribbon", category: "Flags", tags: ["award", "decoration"], body: `<path d="M9 3h6l-1 7 3 11-4-3-1 0-4 3 3-11z"/>` },
  { id: "scroll", name: "Scroll", category: "Flags", tags: ["document", "paper"], body: `<path d="M5 4a2 2 0 0 1 4 0v14a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v14a2 2 0 0 1-4 0H5a2 2 0 0 1-2-2V6"/>` },

  // ─── TRAVEL (12) ───
  { id: "luggage", name: "Luggage", category: "Travel", tags: ["suitcase", "travel"], body: `<rect x="5" y="6" width="14" height="15" rx="2"/><path d="M9 6V3h6v3M5 11h14M9 21v2M15 21v2"/>` },
  { id: "passport", name: "Passport", category: "Travel", tags: ["travel", "document"], body: `<rect x="5" y="3" width="14" height="18" rx="1"/><circle cx="12" cy="9" r="3"/><path d="M9 14h6M8 17h8"/>` },
  { id: "ticket", name: "Ticket", category: "Travel", tags: ["pass", "entry"], body: `<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2 2"/>` },
  { id: "map-pin-2", name: "Map Pin 2", category: "Travel", tags: ["location", "place"], body: `<path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="3"/><path d="M12 22v-7"/>` },
  { id: "compass-2", name: "Compass 2", category: "Travel", tags: ["direction", "navigate"], body: `<circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6z"/>` },
  { id: "globe-asia", name: "Globe Asia", category: "Travel", tags: ["world", "earth"], body: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M5 5c4 4 4 10 0 14M19 5c-4 4-4 10 0 14"/>` },
  { id: "beach", name: "Beach", category: "Travel", tags: ["vacation", "sea"], body: `<path d="M3 21h18M5 21c2-5 6-7 10-7s4 0 4 7M12 14V6M12 6c-2-2-4-2-4-4M12 6c2-2 4-2 4-4M9 8c-1-1-3-1-4-2M15 8c1-1 3-1 4-2"/>` },
  { id: "mountain-2", name: "Mountain Range", category: "Travel", tags: ["hiking", "trek"], body: `<path d="M3 20l5-9 4 5 3-4 6 8z"/><circle cx="17" cy="5" r="2"/><path d="M3 20h18"/>` },
  { id: "camera-travel", name: "Travel Camera", category: "Travel", tags: ["photo", "capture"], body: `<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l2-3h4l2 3"/><circle cx="12" cy="13" r="4"/><circle cx="18" cy="9" r="1" fill="currentColor" stroke="none"/>` },
  { id: "binoculars", name: "Binoculars", category: "Travel", tags: ["view", "observe"], body: `<path d="M5 4h4v16H5zM15 4h4v16h-4zM9 8h6M9 14h6"/>` },
  { id: "camping", name: "Camping Tent", category: "Travel", tags: ["outdoor", "camp"], body: `<path d="M3 21l9-18 9 18z"/><path d="M12 3v18M3 21h18M9 21l3-5 3 5"/>` },
  { id: "sunglasses-travel", name: "Travel Sunglasses", category: "Travel", tags: ["vacation", "beach"], body: `<rect x="3" y="8" width="7" height="5" rx="1"/><rect x="14" y="8" width="7" height="5" rx="1"/><path d="M10 10h4M3 10H1M23 10h-2"/>` },

  // ─── TOOLS (12) ───
  { id: "hammer", name: "Hammer", category: "Tools", tags: ["tool", "build"], body: `<path d="M14 4l6 6-3 3-6-6z"/><path d="M11 7L3 15v6h6l8-8"/>` },
  { id: "screwdriver", name: "Screwdriver", category: "Tools", tags: ["tool", "fix"], body: `<path d="M5 19l3 3 9-9-3-3z"/><path d="M14 7l3 3 5-5-3-3z"/>` },
  { id: "wrench", name: "Wrench", category: "Tools", tags: ["tool", "repair"], body: `<path d="M14 7a4 4 0 1 1 4 4l-9 9-4 1 1-4z"/>` },
  { id: "saw", name: "Saw", category: "Tools", tags: ["cut", "tool"], body: `<path d="M3 17l14-14 4 4-14 14z"/><path d="M3 17l-1 4 4-1M5 13l2 2M9 9l2 2M13 5l2 2"/>` },
  { id: "drill", name: "Drill", category: "Tools", tags: ["tool", "power"], body: `<path d="M3 7h11l3-3v6l-3-3M14 7v6a3 3 0 0 1-3 3H8M3 7v4a3 3 0 0 0 3 3M14 13h8M22 10v6"/>` },
  { id: "axe", name: "Axe", category: "Tools", tags: ["chop", "tool"], body: `<path d="M3 21l9-9M12 12l5-5M5 4c2 4 6 6 10 6l2-2c-4-6-12-4-12-4z"/>` },
  { id: "pickaxe", name: "Pickaxe", category: "Tools", tags: ["mine", "dig"], body: `<path d="M3 21l9-9M5 4c2 4 6 4 9 0M14 4c-2 4-2 8 0 12"/>` },
  { id: "pliers", name: "Pliers", category: "Tools", tags: ["grip", "tool"], body: `<path d="M5 3l3 4 4 2 4-2 3-4M8 7l3 5-1 9-2-3v-4l-3-4M16 7l-3 5 1 9 2-3v-4l3-4"/>` },
  { id: "level", name: "Level Tool", category: "Tools", tags: ["measure", "straight"], body: `<rect x="2" y="9" width="20" height="6" rx="1"/><circle cx="6" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M9 12h6"/>` },
  { id: "tape-measure", name: "Tape Measure", category: "Tools", tags: ["measure", "ruler"], body: `<circle cx="9" cy="12" r="6"/><circle cx="9" cy="12" r="2"/><path d="M15 12h6v6h-6z"/>` },
  { id: "bolt", name: "Bolt", category: "Tools", tags: ["screw", "metal"], body: `<path d="M12 2l-4 4h3l-2 4h3l-2 4h3l-2 4h3l-1 4h4V2z"/>` },
  { id: "nut", name: "Nut", category: "Tools", tags: ["hardware", "bolt"], body: `<path d="M12 3l9 5v8l-9 5-9-5V8z"/><circle cx="12" cy="12" r="3"/>` },

  // ─── MATH (10) ───
  { id: "math-plus", name: "Math Plus", category: "Math", tags: ["add", "sum"], body: `<path d="M12 4v16M4 12h16"/>` },
  { id: "math-minus", name: "Math Minus", category: "Math", tags: ["subtract"], body: `<path d="M4 12h16"/>` },
  { id: "math-multiply", name: "Math Multiply", category: "Math", tags: ["times", "x"], body: `<path d="M5 5l14 14M19 5L5 19"/>` },
  { id: "math-divide", name: "Math Divide", category: "Math", tags: ["fraction"], body: `<path d="M4 12h16"/><circle cx="12" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "math-equals", name: "Math Equals", category: "Math", tags: ["equal"], body: `<path d="M4 9h16M4 15h16"/>` },
  { id: "math-percent", name: "Math Percent", category: "Math", tags: ["ratio"], body: `<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/>` },
  { id: "math-pi", name: "Math Pi", category: "Math", tags: ["constant", "3.14"], body: `<path d="M3 6h18M5 6v3M19 6v3M9 9c0 5 0 9-2 11M15 9c0 5 0 9 2 11"/>` },
  { id: "math-infinity", name: "Infinity", category: "Math", tags: ["endless", "loop"], body: `<path d="M3 12c0-3 3-5 5-5s4 2 4 5-2 5-4 5-5-2-5-5M12 12c0-3 3-5 5-5s4 2 4 5-2 5-4 5-5-2-5-5"/>` },
  { id: "math-square-root", name: "Square Root", category: "Math", tags: ["root", "sqrt"], body: `<path d="M3 12l3 0 2 5 4-12 8 3"/>` },
  { id: "math-sigma", name: "Sigma Sum", category: "Math", tags: ["sum", "greek"], body: `<path d="M4 4h16l-8 8 8 8H4"/>` },

  // ─── CHEMISTRY (8) ───
  { id: "beaker", name: "Beaker", category: "Chemistry", tags: ["lab", "experiment"], body: `<path d="M7 3v6l-3 11a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-3-11V3M7 3h10M9 13h6"/>` },
  { id: "molecule", name: "Molecule", category: "Chemistry", tags: ["atoms", "bond"], body: `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.5 7.5l3 8M16.5 7.5l-3 8M8 6h8"/>` },
  { id: "flask-2", name: "Round Flask", category: "Chemistry", tags: ["lab", "round"], body: `<path d="M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 3h8"/>` },
  { id: "test-tube-2", name: "Test Tube Rack", category: "Chemistry", tags: ["lab", "rack"], body: `<path d="M3 21h18M5 21V8M9 21V8M15 21V8M19 21V8M5 8h14M5 14h14"/>` },
  { id: "fire-chem", name: "Bunsen Burner", category: "Chemistry", tags: ["flame", "lab"], body: `<path d="M10 3c0 3 4 4 4 8a4 4 0 0 1-8 0c0-3 4-5 4-8z"/><path d="M8 15v6M16 15v6M8 21h8"/>` },
  { id: "microscope-2", name: "Microscope 2", category: "Chemistry", tags: ["science", "view"], body: `<path d="M5 21h14M9 21v-4l3-3M14 14l3-9-3 3-3 9M11 8l3-3M7 16h6"/>` },
  { id: "petri", name: "Petri Dish", category: "Chemistry", tags: ["biology", "culture"], body: `<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.2" fill="currentColor" stroke="none"/><circle cx="14" cy="11" r="1.2" fill="currentColor" stroke="none"/><circle cx="11" cy="15" r="1.2" fill="currentColor" stroke="none"/>` },
  { id: "syringe-2", name: "Lab Syringe", category: "Chemistry", tags: ["inject", "lab"], body: `<path d="M14 4l6 6M17 7l-9 9-3 1 1-3 9-9M5 19l2-2"/>` },

  // ─── ASTRONOMY (10) ───
  { id: "saturn", name: "Saturn", category: "Astronomy", tags: ["planet", "ring"], body: `<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-20 12 12)"/>` },
  { id: "planet", name: "Planet", category: "Astronomy", tags: ["space", "orbit"], body: `<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-15 12 12)"/>` },
  { id: "moon-2", name: "Moon Phases", category: "Astronomy", tags: ["lunar", "phases"], body: `<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18 5 5 0 0 1 0-18z"/>` },
  { id: "rocket-launch", name: "Rocket Launch", category: "Astronomy", tags: ["space", "shuttle"], body: `<path d="M5 19c2-7 5-13 12-15-2 7-8 10-15 12z"/><path d="M5 19l3 3M14 5a3 3 0 1 0-4 4"/>` },
  { id: "satellite", name: "Satellite", category: "Astronomy", tags: ["space", "orbit"], body: `<rect x="9" y="9" width="6" height="6" rx="1"/><path d="M5 7l4 2M19 7l-4 2M5 17l4-2M19 17l-4-2M9 12H3M21 12h-6"/>` },
  { id: "ufo", name: "UFO", category: "Astronomy", tags: ["alien", "saucer"], body: `<ellipse cx="12" cy="12" rx="9" ry="3"/><path d="M9 12a3 3 0 0 1 6 0M9 15l-1 4M15 15l1 4M7 12l-2 2M17 12l2 2"/>` },
  { id: "constellation", name: "Constellation", category: "Astronomy", tags: ["stars", "pattern"], body: `<circle cx="5" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none"/><circle cx="7" cy="18" r="1.5" fill="currentColor" stroke="none"/><path d="M5 5l7 3 7-2M12 8l4 8-9 0-2-3"/>` },
  { id: "meteor", name: "Meteor", category: "Astronomy", tags: ["shooting", "star"], body: `<path d="M3 21L15 9"/><circle cx="17" cy="7" r="3"/><path d="M9 9l-3 1M11 11l-3 1M13 13l-3 1"/>` },
  { id: "telescope", name: "Telescope", category: "Astronomy", tags: ["observe", "view"], body: `<path d="M3 14l9-3 5 4-9 3z"/><path d="M12 11l2-7M11 18l1 3M5 21h14"/>` },
  { id: "galaxy", name: "Galaxy", category: "Astronomy", tags: ["spiral", "space"], body: `<circle cx="12" cy="12" r="2"/><path d="M3 12c0-5 4-9 9-9M21 12c0 5-4 9-9 9M12 3c5 0 9 4 9 9M12 21c-5 0-9-4-9-9"/>` },

  // ─── FRUITS EXTENDED (10) ───
  { id: "banana", name: "Banana", category: "Fruits", tags: ["fruit", "yellow"], body: `<path d="M5 18c0-7 5-13 14-13-1 9-7 14-14 13z"/><path d="M5 18l-1 3M19 5l1 1"/>` },
  { id: "strawberry", name: "Strawberry", category: "Fruits", tags: ["fruit", "red"], body: `<path d="M12 6c-3-3-7-2-7 2 0 5 4 13 7 13s7-8 7-13c0-4-4-5-7-2z"/><path d="M9 6L7 3M15 6l2-3M12 5V2"/>` },
  { id: "watermelon", name: "Watermelon", category: "Fruits", tags: ["fruit", "summer"], body: `<path d="M3 12a9 9 0 0 0 18 0"/><path d="M3 12c0 2 3 4 9 4s9-2 9-4M7 12l1 1M11 12l1 1M15 12l1 1M9 14l1 1M13 14l1 1"/>` },
  { id: "grape", name: "Grape", category: "Fruits", tags: ["fruit", "wine"], body: `<circle cx="9" cy="9" r="2"/><circle cx="15" cy="9" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="9" cy="15" r="2"/><circle cx="15" cy="15" r="2"/><circle cx="12" cy="18" r="2"/><path d="M12 7V3"/>` },
  { id: "lemon", name: "Lemon", category: "Fruits", tags: ["fruit", "citrus"], body: `<path d="M8 4c-3 1-5 4-4 8s4 7 8 8 7-1 8-4-1-7-4-9-5-4-8-3z"/>` },
  { id: "peach", name: "Peach", category: "Fruits", tags: ["fruit", "sweet"], body: `<path d="M12 4c-4 0-7 3-7 7s3 9 7 9 7-5 7-9-3-7-7-7z"/><path d="M12 4c0-2 1-3 3-3M9 6c1 1 2 1 3 0"/>` },
  { id: "pear", name: "Pear", category: "Fruits", tags: ["fruit", "green"], body: `<path d="M12 3c-2 0-4 2-4 5 0 2 1 3 1 5-2 1-3 3-3 5 0 2 2 3 6 3s6-1 6-3c0-2-1-4-3-5 0-2 1-3 1-5 0-3-2-5-4-5z"/><path d="M12 3V1"/>` },
  { id: "pineapple", name: "Pineapple", category: "Fruits", tags: ["fruit", "tropical"], body: `<rect x="7" y="10" width="10" height="11" rx="1"/><path d="M9 13l3 3 3-3M9 17l3 3 3-3M9 5l3-2 3 2M10 7l2-1 2 1M12 3v6"/>` },
  { id: "mango", name: "Mango", category: "Fruits", tags: ["fruit", "tropical"], body: `<path d="M5 14c0-5 4-9 9-9 3 0 5 2 5 5 0 5-4 9-9 9-3 0-5-2-5-5z"/><path d="M14 5c0-2 1-3 3-3"/>` },
  { id: "coconut", name: "Coconut", category: "Fruits", tags: ["fruit", "tropical"], body: `<circle cx="12" cy="13" r="7"/><circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="15" r="1" fill="currentColor" stroke="none"/>` },

  // ─── VEGETABLES (10) ───
  { id: "carrot-2", name: "Carrot 2", category: "Vegetables", tags: ["vegetable", "orange"], body: `<path d="M14 4l-9 9 5 5 9-9z"/><path d="M14 4l-3 3M16 5l-2 4M18 6l-3 2M9 13l1 1M11 15l1 1"/>` },
  { id: "tomato", name: "Tomato", category: "Vegetables", tags: ["vegetable", "red"], body: `<circle cx="12" cy="14" r="7"/><path d="M12 7c0-2-1-3-3-3M12 7c0-2 1-3 3-3M9 7l3-2 3 2"/>` },
  { id: "potato", name: "Potato", category: "Vegetables", tags: ["vegetable", "root"], body: `<ellipse cx="12" cy="12" rx="8" ry="5"/><circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none"/><circle cx="14" cy="13" r="0.8" fill="currentColor" stroke="none"/><circle cx="11" cy="14" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "onion", name: "Onion", category: "Vegetables", tags: ["vegetable", "bulb"], body: `<path d="M12 4c-4 0-7 4-7 9s3 7 7 7 7-3 7-7-3-9-7-9z"/><path d="M9 8c2 2 2 6 0 8M15 8c-2 2-2 6 0 8M12 4V1M9 2l3 1 3-1"/>` },
  { id: "garlic", name: "Garlic", category: "Vegetables", tags: ["vegetable", "bulb"], body: `<path d="M12 4c-3 1-5 3-5 6 0 4 3 9 5 9s5-5 5-9c0-3-2-5-5-6z"/><path d="M12 4V2M10 4l-1-2M14 4l1-2M9 8c1 2 1 5 0 8M15 8c-1 2-1 5 0 8"/>` },
  { id: "pepper", name: "Bell Pepper", category: "Vegetables", tags: ["vegetable", "capsicum"], body: `<path d="M9 4c-3 0-5 2-5 5 0 5 4 10 8 10s8-5 8-10c0-3-2-5-5-5-2 0-3 1-3 3 0-2-1-3-3-3z"/><path d="M12 4V1M9 3l3 1 3-1"/>` },
  { id: "chili", name: "Chili Pepper", category: "Vegetables", tags: ["spicy", "hot"], body: `<path d="M5 14c0-3 3-6 7-6 4 0 7 3 7 6 0 2-2 4-4 4-3 0-5-2-5-4 0-2-2-2-3-2l-2 0z"/><path d="M19 8c-2-1-4 0-5 2M21 5l-3 2"/>` },
  { id: "corn", name: "Corn", category: "Vegetables", tags: ["vegetable", "maize"], body: `<path d="M9 4c0 5 0 14 3 16 3-2 3-11 3-16z"/><path d="M9 8h6M9 12h6M9 16h6M12 4V2M10 4l1-2M14 4l-1-2"/>` },
  { id: "broccoli", name: "Broccoli", category: "Vegetables", tags: ["vegetable", "green"], body: `<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="12" cy="6" r="3"/><path d="M9 11v8M15 11v8M9 19h6M12 9v6"/>` },
  { id: "mushroom", name: "Mushroom", category: "Vegetables", tags: ["fungus", "food"], body: `<path d="M4 11a8 8 0 0 1 16 0H4z"/><path d="M9 11v6a3 3 0 0 0 6 0v-6"/><circle cx="9" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="9" r="1" fill="currentColor" stroke="none"/>` },

  // ─── DRINKS (8) ───
  { id: "coffee-2", name: "Coffee Cup", category: "Drinks", tags: ["drink", "morning"], body: `<path d="M5 8h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2M7 3v2M10 3v2M13 3v2"/>` },
  { id: "tea", name: "Tea Cup", category: "Drinks", tags: ["drink", "tea"], body: `<path d="M5 9h12v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M17 11h3a2 2 0 0 1 0 4h-3M10 3c0 2-1 2-1 4M13 3c0 2-1 2-1 4"/>` },
  { id: "juice", name: "Juice Glass", category: "Drinks", tags: ["drink", "fresh"], body: `<path d="M5 4h14l-2 16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M5 9h14M9 14h6"/>` },
  { id: "smoothie", name: "Smoothie", category: "Drinks", tags: ["drink", "fruit"], body: `<path d="M5 4h14l-2 16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><circle cx="10" cy="11" r="1.5" fill="currentColor" stroke="none"/><circle cx="14" cy="13" r="1.5" fill="currentColor" stroke="none"/><path d="M12 4V1"/>` },
  { id: "cocktail", name: "Cocktail", category: "Drinks", tags: ["drink", "party"], body: `<path d="M3 4h18l-9 9z"/><path d="M12 13v7M8 21h8M9 4l1 3M15 4l-1 3"/>` },
  { id: "beer", name: "Beer Mug", category: "Drinks", tags: ["drink", "alcohol"], body: `<path d="M5 4h12v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M17 8h3a2 2 0 0 1 0 4h-3M7 8v10M11 8v10M9 4c0-1 1-2 2-2M13 4c0-1-1-2-2-2"/>` },
  { id: "water-glass", name: "Water Glass", category: "Drinks", tags: ["drink", "water"], body: `<path d="M5 4h14l-2 16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M5.5 12h13"/>` },
  { id: "milk", name: "Milk Carton", category: "Drinks", tags: ["drink", "dairy"], body: `<path d="M6 8l-1 12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1L18 8M6 8l3-4h6l3 4M9 4l3 2 3-2"/>` },

  // ─── SEASONAL (10) ───
  { id: "christmas-tree", name: "Christmas Tree", category: "Seasonal", tags: ["holiday", "christmas"], body: `<path d="M12 2l5 7h-3l4 5h-3l4 5H5l4-5H6l4-5H7z"/><path d="M12 19v3M9 22h6"/>` },
  { id: "pumpkin", name: "Pumpkin", category: "Seasonal", tags: ["halloween", "autumn"], body: `<ellipse cx="12" cy="13" rx="9" ry="7"/><path d="M9 6V3M9 6c-2 0-3 2-3 7s1 7 3 7M15 6c2 0 3 2 3 7s-1 7-3 7M12 6v14M9 6c0-1 1-3 3-3s3 2 3 3"/>` },
  { id: "easter-egg", name: "Easter Egg", category: "Seasonal", tags: ["easter", "egg"], body: `<path d="M12 3c-4 0-7 5-7 11 0 4 3 7 7 7s7-3 7-7c0-6-3-11-7-11z"/><path d="M5 12c4 0 4-2 7-2s3 2 7 2M6 17c3 0 3-2 6-2s3 2 6 2"/>` },
  { id: "snowman", name: "Snowman", category: "Seasonal", tags: ["winter", "snow"], body: `<circle cx="12" cy="17" r="5"/><circle cx="12" cy="9" r="3"/><path d="M9 21h6M10 9h0.1M14 9h0M11 17h0.1M13 17h0M9 6L7 4M15 6l2-2"/>` },
  { id: "firework", name: "Firework", category: "Seasonal", tags: ["celebration", "new year"], body: `<path d="M12 12V3M12 12l5-5M12 12l5 5M12 12l-5 5M12 12l-5-5M12 12l8 0M12 12l-8 0"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "gift-2", name: "Gift Box", category: "Seasonal", tags: ["present", "wrap"], body: `<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8C9 8 6 6 9 4c2-1 3 2 3 4 0-2 1-5 3-4 3 2 0 4-3 4z"/>` },
  { id: "candy-cane", name: "Candy Cane", category: "Seasonal", tags: ["christmas", "sweet"], body: `<path d="M5 21V11a5 5 0 0 1 10 0M15 11v10M5 17h4M11 17h4M7 13h2M13 13h2"/>` },
  { id: "bat", name: "Bat", category: "Seasonal", tags: ["halloween", "animal"], body: `<path d="M12 8v8M12 8C8 4 4 4 2 8c2 1 4 1 6 4M12 8c4-4 8-4 10 0-2 1-4 1-6 4"/>` },
  { id: "santa-hat", name: "Santa Hat", category: "Seasonal", tags: ["christmas", "santa"], body: `<path d="M3 18l12-12 6 4-12 12z"/><path d="M3 18h6M15 6l1-3"/>` },
  { id: "heart-valentine", name: "Valentine Heart", category: "Seasonal", tags: ["love", "valentine"], body: `<path d="M12 21C5 16 3 12 3 8a4 4 0 0 1 7-2.5A4 4 0 0 1 21 8c0 4-2 8-9 13z"/><path d="M9 11l3 3 3-3"/>` },

  // ─── WEATHER 3 (8) ───
  { id: "lightning", name: "Lightning", category: "Weather3", tags: ["strike", "bolt"], body: `<path d="M13 3L4 14h7l-1 7 9-11h-7z"/>` },
  { id: "rain-light", name: "Light Rain", category: "Weather3", tags: ["drizzle", "shower"], body: `<path d="M7 14a5 5 0 0 1-1-9.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><path d="M9 18l-1 3M13 18l-1 3M17 18l-1 3"/>` },
  { id: "snow-flurry", name: "Snow Flurry", category: "Weather3", tags: ["snow", "winter"], body: `<path d="M7 14a5 5 0 0 1-1-9.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><path d="M9 18v3M13 18v3M17 18v3M8 20h2M12 20h2M16 20h2"/>` },
  { id: "sun-cloud", name: "Sun Cloud", category: "Weather3", tags: ["partly", "cloudy"], body: `<circle cx="8" cy="8" r="3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 3L13 4.5"/><path d="M11 18a4 4 0 0 1-1-7.9 5 5 0 0 1 9 1 3 3 0 0 1 1 6.9z"/>` },
  { id: "moon-stars", name: "Moon Stars", category: "Weather3", tags: ["night", "stars"], body: `<path d="M21 13A9 9 0 0 1 11 3a7 7 0 1 0 10 10z"/><path d="M18 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM5 5l0.5 1L7 6.5 6 7l-0.5 1L5 7l-1-0.5L5 6z"/>` },
  { id: "windy", name: "Windy", category: "Weather3", tags: ["breeze", "air"], body: `<path d="M3 8h12a3 3 0 1 0-3-3M3 16h16a3 3 0 1 1-3 3M3 12h8"/>` },
  { id: "hail", name: "Hail", category: "Weather3", tags: ["ice", "storm"], body: `<path d="M7 14a5 5 0 0 1-1-9.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><circle cx="9" cy="19" r="1.5"/><circle cx="14" cy="20" r="1.5"/>` },
  { id: "rainbow-arc", name: "Rainbow Arc", category: "Weather3", tags: ["color", "arc"], body: `<path d="M3 18a9 9 0 0 1 18 0"/><path d="M6 18a6 6 0 0 1 12 0"/><path d="M9 18a3 3 0 0 1 6 0"/>` },

  // ─── MUSIC SYMBOLS (8) ───
  { id: "treble-clef", name: "Treble Clef", category: "MusicSymbols", tags: ["clef", "music"], body: `<path d="M11 21a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM11 13c0-5 5-5 5-9 0-2-2-3-4-3-2 0-3 1-3 3 0 1 0 2 1 3l1 11"/>` },
  { id: "bass-clef", name: "Bass Clef", category: "MusicSymbols", tags: ["clef", "bass"], body: `<path d="M9 4a3 3 0 1 0 3 5c0-3-3-4-3-5zM12 9c2 2 2 8-1 10-2 1-4 0-5-2"/><circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="11" r="1.2" fill="currentColor" stroke="none"/>` },
  { id: "sharp", name: "Sharp", category: "MusicSymbols", tags: ["sharp", "note"], body: `<path d="M9 4v16M15 4v16M6 8l12-2M6 14l12-2"/>` },
  { id: "flat", name: "Flat", category: "MusicSymbols", tags: ["flat", "note"], body: `<path d="M10 4v14a3 3 0 1 0 2-2"/>` },
  { id: "natural", name: "Natural", category: "MusicSymbols", tags: ["natural", "note"], body: `<path d="M9 4v16M15 4v16M9 8l6 2M9 14l6 2"/>` },
  { id: "eighth-note", name: "Eighth Note", category: "MusicSymbols", tags: ["quaver", "music"], body: `<circle cx="6" cy="18" r="2.5"/><path d="M8.5 18V4l9-1v3l-9 1"/>` },
  { id: "beamed-notes", name: "Beamed Notes", category: "MusicSymbols", tags: ["connected", "music"], body: `<circle cx="6" cy="18" r="2.5"/><circle cx="16" cy="18" r="2.5"/><path d="M8.5 18V6h11v12M8.5 9h11"/>` },
  { id: "rest", name: "Rest Symbol", category: "MusicSymbols", tags: ["silence", "rest"], body: `<path d="M5 6c2 0 4 2 5 4 1-2 3-4 5-4-2 2-3 4-3 6 0 3 2 5 4 6-3 0-5-2-6-4-1 2-3 4-6 4 2-1 4-3 4-6 0-2-1-4-3-6z"/>` },

  // ─── COMPUTER PARTS (10) ───
  { id: "cpu", name: "CPU Chip", category: "ComputerParts", tags: ["processor", "chip"], body: `<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9" y="9" width="6" height="6"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"/>` },
  { id: "ram", name: "RAM Module", category: "ComputerParts", tags: ["memory", "ram"], body: `<rect x="2" y="8" width="20" height="8" rx="1"/><path d="M5 12v2M8 12v2M11 12v2M14 12v2M17 12v2M2 16v2M22 16v2"/>` },
  { id: "gpu", name: "GPU Card", category: "ComputerParts", tags: ["graphics", "card"], body: `<rect x="2" y="6" width="20" height="12" rx="1"/><circle cx="8" cy="12" r="2.5"/><circle cx="15" cy="12" r="2.5"/><path d="M2 18v3M22 18v3"/>` },
  { id: "motherboard", name: "Motherboard", category: "ComputerParts", tags: ["board", "circuit"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><rect x="6" y="6" width="4" height="4"/><rect x="14" y="6" width="4" height="4"/><rect x="6" y="14" width="4" height="4"/><rect x="14" y="14" width="4" height="4"/>` },
  { id: "ssd", name: "SSD Drive", category: "ComputerParts", tags: ["storage", "drive"], body: `<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M6 9h2M10 9h2M14 9h2M6 13h2M10 13h2M14 13h2M6 17h12"/>` },
  { id: "fan", name: "Cooling Fan", category: "ComputerParts", tags: ["cool", "fan"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 10c0-3-1-5-3-6-1 2 0 4 1 5M14 12c3 0 5-1 6-3-2-1-4 0-5 1M12 14c0 3 1 5 3 6 1-2 0-4-1-5M10 12c-3 0-5 1-6 3 2 1 4 0 5-1"/>` },
  { id: "battery", name: "Battery", category: "ComputerParts", tags: ["power", "charge"], body: `<rect x="2" y="7" width="18" height="10" rx="1"/><path d="M22 11v2"/><rect x="4" y="9" width="6" height="6" fill="currentColor" stroke="none"/>` },
  { id: "webcam", name: "Webcam", category: "ComputerParts", tags: ["camera", "web"], body: `<circle cx="12" cy="11" r="6"/><circle cx="12" cy="11" r="2.5"/><path d="M9 17l-2 4M15 17l2 4M8 21h8"/>` },
  { id: "router", name: "Router", category: "ComputerParts", tags: ["network", "wifi"], body: `<rect x="3" y="12" width="18" height="7" rx="1"/><circle cx="7" cy="15.5" r="0.8" fill="currentColor" stroke="none"/><circle cx="10" cy="15.5" r="0.8" fill="currentColor" stroke="none"/><path d="M8 12V8M8 8a4 4 0 0 1 8 0M16 8v4"/>` },
  { id: "ethernet", name: "Ethernet Cable", category: "ComputerParts", tags: ["network", "cable"], body: `<path d="M8 21V11l4-4 4 4v10M8 21h8M9 11h6M10 13h4M10 15h4M10 17h4"/>` },

  // ─── SMART HOME (10) ───
  { id: "smart-bulb", name: "Smart Bulb", category: "SmartHome", tags: ["iot", "light"], body: `<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/><path d="M12 6v5M9 8l1 1M15 8l-1 1"/>` },
  { id: "smart-plug", name: "Smart Plug", category: "SmartHome", tags: ["iot", "plug"], body: `<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="9" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="1" fill="currentColor" stroke="none"/><path d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2M15 17h2"/>` },
  { id: "smart-lock", name: "Smart Lock", category: "SmartHome", tags: ["iot", "secure"], body: `<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="2" fill="currentColor" stroke="none"/><path d="M12 18v1M9 7l1-1M15 7l1-1"/>` },
  { id: "smart-thermostat", name: "Smart Thermostat", category: "SmartHome", tags: ["iot", "temperature"], body: `<circle cx="12" cy="12" r="9"/><path d="M12 7v8M9 14l3 3 3-3M9 6h6"/>` },
  { id: "smart-speaker", name: "Smart Speaker", category: "SmartHome", tags: ["iot", "audio"], body: `<rect x="7" y="3" width="10" height="18" rx="3"/><circle cx="12" cy="9" r="1.5"/><path d="M9 16h6M10 19h4"/>` },
  { id: "smart-doorbell", name: "Smart Doorbell", category: "SmartHome", tags: ["iot", "bell"], body: `<path d="M6 9a6 6 0 0 1 12 0v6l2 3H4l2-3z"/><circle cx="12" cy="12" r="2"/><path d="M10 21a2 2 0 0 0 4 0"/>` },
  { id: "smart-blinds", name: "Smart Blinds", category: "SmartHome", tags: ["iot", "window"], body: `<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 7h18M3 10h18M3 13h18M3 16h18M3 19h18"/>` },
  { id: "smart-camera", name: "Smart Camera", category: "SmartHome", tags: ["iot", "security"], body: `<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M9 6l1-2h4l1 2"/>` },
  { id: "smart-vacuum", name: "Smart Vacuum", category: "SmartHome", tags: ["iot", "robot"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><path d="M3 12h2M19 12h2"/>` },
  { id: "smart-ac", name: "Smart AC Unit", category: "SmartHome", tags: ["iot", "cool"], body: `<rect x="2" y="5" width="20" height="10" rx="2"/><path d="M5 15c0 2 1 4 3 4M9 15c0 2 1 4 3 4M13 15c0 2 1 4 3 4M17 15c0 2 1 4 3 4M5 9h14M5 11h14"/>` },

  // ─── CRYPTOCURRENCY (10) ───
  { id: "bitcoin", name: "Bitcoin", category: "Crypto", tags: ["btc", "crypto"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 8h5a2 2 0 0 1 0 4H9zM9 12h6a2 2 0 0 1 0 4H9zM10 6v12M13 6v12"/>` },
  { id: "ethereum", name: "Ethereum", category: "Crypto", tags: ["eth", "crypto"], body: `<path d="M12 3l6 10-6 4-6-4z"/><path d="M6 14l6 4 6-4M12 3v9M6 13l6-1 6 1"/>` },
  { id: "litecoin", name: "Litecoin", category: "Crypto", tags: ["ltc", "crypto"], body: `<circle cx="12" cy="12" r="9"/><path d="M13 5l-3 7h4l-3 7"/>` },
  { id: "dogecoin", name: "Dogecoin", category: "Crypto", tags: ["doge", "crypto"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 9h5a4 4 0 0 1 0 8H9zM10 7v12M10 9h3M10 14h3"/>` },
  { id: "cardano", name: "Cardano", category: "Crypto", tags: ["ada", "crypto"], body: `<circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none"/><circle cx="7" cy="17" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="17" r="1.2" fill="currentColor" stroke="none"/>` },
  { id: "solana", name: "Solana", category: "Crypto", tags: ["sol", "crypto"], body: `<path d="M5 8l11-2 3 2-11 2zM5 12l11-2 3 2-11 2zM5 16l11-2 3 2-11 2z"/>` },
  { id: "polygon", name: "Polygon", category: "Crypto", tags: ["matic", "crypto"], body: `<path d="M7 7l5-3 5 3v10l-5 3-5-3z"/><path d="M7 7l5 3 5-3M12 10v10"/>` },
  { id: "binance", name: "Binance", category: "Crypto", tags: ["bnb", "crypto"], body: `<path d="M12 3l3 3-3 3-3-3zM9 6l3 3-3 3-3-3zM15 6l3 3-3 3-3-3zM12 9l3 3-3 3-3-3zM9 12l3 3-3 3-3-3zM15 12l3 3-3 3-3-3z"/>` },
  { id: "tether", name: "Tether", category: "Crypto", tags: ["usdt", "stablecoin"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 8h6v2h-2v3h2v2H9v-2h2v-3H9z"/>` },
  { id: "xrp", name: "XRP", category: "Crypto", tags: ["ripple", "crypto"], body: `<circle cx="12" cy="12" r="9"/><path d="M7 8c2 4 8 4 10 0M7 16c2-4 8-4 10 0"/>` },

  // ─── SPORTS 2 (8) ───
  { id: "cricket-bat", name: "Cricket Bat", category: "Sports2", tags: ["bat", "cricket"], body: `<path d="M5 4l9 9-7 7H3v-4z"/><path d="M14 13l6-6"/>` },
  { id: "hockey-stick", name: "Hockey Stick", category: "Sports2", tags: ["hockey", "stick"], body: `<path d="M3 4l8 14 4-2 6-8M11 18v3"/>` },
  { id: "baseball-bat", name: "Baseball Bat", category: "Sports2", tags: ["bat", "baseball"], body: `<path d="M14 3l7 7-9 11-7-7z"/><circle cx="3" cy="21" r="1.5"/>` },
  { id: "badminton", name: "Badminton", category: "Sports2", tags: ["shuttle", "racket"], body: `<ellipse cx="8" cy="8" rx="5" ry="6"/><path d="M3 8c0 4 5 7 5 7l3 3 9 9M11 11l8-8"/>` },
  { id: "surf-board", name: "Surf Board", category: "Sports2", tags: ["surf", "wave"], body: `<path d="M12 3c-3 5-6 10-9 16 6-1 12-2 18-4-3-4-6-8-9-12z"/>` },
  { id: "skateboard", name: "Skateboard", category: "Sports2", tags: ["board", "skate"], body: `<path d="M3 8h18M5 8c0 2-2 2-2 4s2 2 2 4M19 8c0 2 2 2 2 4s-2 2-2 4"/><circle cx="7" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="14" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "snowboard", name: "Snowboard", category: "Sports2", tags: ["snow", "board"], body: `<ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-30 12 12)"/><circle cx="6" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="10" r="1" fill="currentColor" stroke="none"/>` },
  { id: "climbing", name: "Climbing", category: "Sports2", tags: ["mountain", "rock"], body: `<circle cx="12" cy="3" r="2"/><path d="M5 21l4-7 3 2 4-3 3 8M9 14l1-4M16 13l-1-5M5 21h14"/>` },

  // ─── BODY PARTS (8) ───
  { id: "hand", name: "Hand", category: "Body", tags: ["palm", "fingers"], body: `<path d="M8 11V5a1.5 1.5 0 0 1 3 0v5M11 10V4a1.5 1.5 0 0 1 3 0v6M14 10V5a1.5 1.5 0 0 1 3 0v6M17 11V8a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-2a4 4 0 0 1-4-4l-2-5c0-1 1-2 2-1l3 2"/>` },
  { id: "foot", name: "Foot", category: "Body", tags: ["sole", "toes"], body: `<path d="M5 14c0-4 2-8 5-8 2 0 3 1 3 3v3c0 3 2 5 4 5 2 0 3 1 3 2 0 1-1 2-3 2H8c-2 0-3-2-3-5z"/><circle cx="9" cy="9" r="0.8" fill="currentColor" stroke="none"/><circle cx="11" cy="7" r="0.8" fill="currentColor" stroke="none"/><circle cx="13" cy="7" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="8" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "brain-2", name: "Brain Head", category: "Body", tags: ["mind", "think"], body: `<path d="M5 13a4 4 0 0 1-1-7 5 5 0 0 1 9-1 4 4 0 0 1 7 2 4 4 0 0 1-1 5 3 3 0 0 1-3 5 3 3 0 0 1-5 1 3 3 0 0 1-4-1 4 4 0 0 1-2-4z"/><path d="M9 8c1 1 1 2 0 3M14 9c1 1 1 2 0 3M9 14c1 1 1 2 0 3"/>` },
  { id: "lungs", name: "Lungs", category: "Body", tags: ["breath", "organ"], body: `<path d="M12 3v7M8 10c0 4-3 5-3 8s2 4 3 3 1-3 1-5 0-4-1-6zM16 10c0 4 3 5 3 8s-2 4-3 3-1-3-1-5 0-4 1-6z"/>` },
  { id: "heart-2", name: "Heart Anatomical", category: "Body", tags: ["organ", "blood"], body: `<path d="M12 21c-5-3-9-7-9-12a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5-4 9-5 12z"/><path d="M12 9v6M9 12h6"/>` },
  { id: "liver", name: "Liver", category: "Body", tags: ["organ", "body"], body: `<path d="M3 8c4-1 8-1 12 0 3 1 6 0 6 4 0 3-3 5-7 6-4 1-8 0-10-3-2-2-2-6-1-7z"/>` },
  { id: "kidney", name: "Kidney", category: "Body", tags: ["organ", "filter"], body: `<path d="M5 6c2-1 4 0 4 3v8c0 2-1 4-3 4-2 0-3-2-3-4 0-3 2-4 2-7s-1-3 0-4zM19 6c-2-1-4 0-4 3v8c0 2 1 4 3 4 2 0 3-2 3-4 0-3-2-4-2-7s1-3 0-4z"/>` },
  { id: "skeleton", name: "Skeleton Body", category: "Body", tags: ["bones", "anatomy"], body: `<circle cx="12" cy="4" r="2"/><path d="M12 6v4M9 10h6M10 14v6M14 14v6M9 11l-1 4M15 11l1 4"/>` },

  // ─── VEHICLES 2 (8) ───
  { id: "truck", name: "Truck", category: "Vehicles2", tags: ["lorry", "cargo"], body: `<rect x="1" y="9" width="13" height="9" rx="1"/><path d="M14 11h5l3 3v4h-8z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>` },
  { id: "ambulance", name: "Ambulance", category: "Vehicles2", tags: ["medical", "emergency"], body: `<rect x="1" y="9" width="13" height="9" rx="1"/><path d="M14 11h5l3 3v4h-8z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 12h2v2h2v2H8v2H6v-2H4v-2h2z"/>` },
  { id: "tractor", name: "Tractor", category: "Vehicles2", tags: ["farm", "agriculture"], body: `<circle cx="6" cy="17" r="4"/><circle cx="18" cy="18" r="2"/><path d="M2 17h0M10 17h6l1-7h-8z"/>` },
  { id: "fire-truck", name: "Fire Truck", category: "Vehicles2", tags: ["fire", "emergency"], body: `<rect x="1" y="8" width="14" height="9" rx="1"/><path d="M15 11h4l3 3v3h-7z"/><circle cx="5" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M3 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/>` },
  { id: "taxi", name: "Taxi", category: "Vehicles2", tags: ["cab", "transport"], body: `<path d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5v5h-3v-2H6v2H3z"/><circle cx="7" cy="15" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="15" r="1.5" fill="currentColor" stroke="none"/><path d="M9 6h6"/>` },
  { id: "police-car", name: "Police Car", category: "Vehicles2", tags: ["police", "emergency"], body: `<path d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5v5h-3v-2H6v2H3z"/><circle cx="7" cy="15" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="15" r="1.5" fill="currentColor" stroke="none"/><path d="M10 3h4l1 3H9z"/>` },
  { id: "bulldozer", name: "Bulldozer", category: "Vehicles2", tags: ["construction", "earth"], body: `<rect x="5" y="9" width="10" height="7" rx="1"/><path d="M3 16V8l-2 8M15 16h6M21 8v8"/>` },
  { id: "forklift", name: "Forklift", category: "Vehicles2", tags: ["warehouse", "lift"], body: `<rect x="3" y="6" width="9" height="13" rx="1"/><path d="M15 4v16M15 4h2v16M17 8h4M17 12h4M17 16h4"/>` },

  // ─── PLANTS 2 (8) ───
  { id: "cactus", name: "Cactus", category: "Plants2", tags: ["desert", "plant"], body: `<rect x="9" y="9" width="6" height="13" rx="3"/><path d="M9 14c-2 0-3-1-3-3v-2c0-1 1-2 3-2M15 14c2 0 3-1 3-3v-2c0-1-1-2-3-2M9 18c-2 0-4-1-4-3M15 18c2 0 4-1 4-3"/>` },
  { id: "palm-tree", name: "Palm Tree", category: "Plants2", tags: ["tropical", "tree"], body: `<path d="M12 21V11M12 11c-3-3-7-3-9-1 2 1 4 2 9 1zM12 11c3-3 7-3 9-1-2 1-4 2-9 1zM12 11c0-4-2-7-5-8 1 3 2 5 5 8zM12 11c0-4 2-7 5-8-1 3-2 5-5 8z"/>` },
  { id: "bamboo", name: "Bamboo", category: "Plants2", tags: ["plant", "grass"], body: `<rect x="9" y="3" width="6" height="4" rx="1"/><rect x="9" y="9" width="6" height="4" rx="1"/><rect x="9" y="15" width="6" height="4" rx="1"/><path d="M12 7v2M12 13v2"/>` },
  { id: "mushroom-2", name: "Mushroom 2", category: "Plants2", tags: ["fungus", "toadstool"], body: `<path d="M4 11a8 8 0 0 1 16 0H4z"/><path d="M9 11v6a3 3 0 0 0 6 0v-6"/><circle cx="9" cy="8" r="1.2" fill="currentColor" stroke="none"/><circle cx="14" cy="9" r="1.2" fill="currentColor" stroke="none"/><circle cx="11" cy="6" r="1" fill="currentColor" stroke="none"/>` },
  { id: "seedling", name: "Seedling", category: "Plants2", tags: ["grow", "young"], body: `<path d="M12 21V11M12 11c0-3-2-5-6-5 0 4 2 5 6 5zM12 9c0-3 2-5 6-5 0 4-2 5-6 5z"/>` },
  { id: "shrub", name: "Shrub", category: "Plants2", tags: ["bush", "garden"], body: `<circle cx="6" cy="14" r="4"/><circle cx="12" cy="11" r="5"/><circle cx="18" cy="14" r="4"/><path d="M3 21h18"/>` },
  { id: "tree-2", name: "Tree 2", category: "Plants2", tags: ["plant", "forest"], body: `<circle cx="12" cy="9" r="6"/><path d="M12 15v6M9 21h6"/>` },
  { id: "vine", name: "Vine", category: "Plants2", tags: ["plant", "creeper"], body: `<path d="M3 3c4 0 6 4 6 8s-2 8-6 8M3 3c0 4 4 6 8 6s8-2 8-6M3 3c0 4 4 6 8 6M9 9v3l3 2M15 9v3l-3 2"/>` },

  // ─── OFFICE 2 (8) ───
  { id: "stapler-2", name: "Stapler 2", category: "Office2", tags: ["office", "bind"], body: `<path d="M3 16l3-4h13v6H3z"/><path d="M3 18h16M6 12V8h13"/>` },
  { id: "ink-pen", name: "Ink Pen", category: "Office2", tags: ["write", "fountain"], body: `<path d="M3 21l4-4M7 17L17 7l3 3L10 20z"/><path d="M17 7l2-2 3 3-2 2z"/>` },
  { id: "highlighter", name: "Highlighter", category: "Office2", tags: ["marker", "text"], body: `<path d="M3 21l5-2 12-12-3-3L5 16z"/><path d="M15 4l3 3"/>` },
  { id: "rubber-stamp", name: "Rubber Stamp", category: "Office2", tags: ["seal", "mark"], body: `<path d="M7 14a4 4 0 0 1 1-7h8a4 4 0 0 1 1 7l-2 3H9z"/><rect x="3" y="17" width="18" height="4" rx="1"/><path d="M9 4h6"/>` },
  { id: "tape", name: "Tape Dispenser", category: "Office2", tags: ["tape", "stick"], body: `<path d="M3 12l9-5 9 5-9 5z"/><path d="M3 12v6h18v-6M7 14h2M11 14h2M15 14h2"/>` },
  { id: "whiteboard", name: "Whiteboard", category: "Office2", tags: ["board", "write"], body: `<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M3 17h18M7 21h2M15 21h2M8 17v4M16 17v4M7 8h6M7 11h4"/>` },
  { id: "projector", name: "Projector", category: "Office2", tags: ["presentation", "office"], body: `<rect x="2" y="9" width="20" height="8" rx="2"/><circle cx="6" cy="13" r="2"/><path d="M12 9V5M5 5h14"/>` },
  { id: "calendar-3", name: "Calendar Date", category: "Office2", tags: ["date", "schedule"], body: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/><circle cx="12" cy="14" r="2"/>` },

  // ─── FANTASY (10) ───
  { id: "dragon", name: "Dragon", category: "Fantasy", tags: ["mythical", "creature"], body: `<path d="M3 21c3-2 4-4 4-7 0 0 2-2 5-2s5 2 5 5c0 2-1 4-3 4M7 14c-2 0-3-2-3-4 0-3 3-5 6-5 4 0 6 2 8 5M14 8l3-3M19 5l2-2M16 5l-1-3M20 8l2-1"/>` },
  { id: "unicorn", name: "Unicorn", category: "Fantasy", tags: ["mythical", "horse"], body: `<path d="M3 21l4-7 2-7 3 1 4-3v6l5 5v5M7 14l3 1M14 7h0.1"/><path d="M14 7l3-3"/>` },
  { id: "mermaid", name: "Mermaid", category: "Fantasy", tags: ["mythical", "sea"], body: `<circle cx="12" cy="5" r="2"/><path d="M12 7v6M10 13h4M9 19c0-3 1-5 3-6 2 1 3 3 3 6M7 19h10"/>` },
  { id: "wizard-hat", name: "Wizard Hat", category: "Fantasy", tags: ["magic", "hat"], body: `<path d="M3 20l9-18 9 18z"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="16" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "crystal-ball", name: "Crystal Ball", category: "Fantasy", tags: ["magic", "future"], body: `<circle cx="12" cy="12" r="8"/><path d="M5 20h14M6 20l-1 1M18 20l1 1"/><circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "potion", name: "Potion Bottle", category: "Fantasy", tags: ["magic", "brew"], body: `<path d="M10 3h4v3l2 4v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-9l2-4z"/><path d="M9 14h6"/>` },
  { id: "spell-book", name: "Spell Book", category: "Fantasy", tags: ["magic", "book"], body: `<path d="M5 4h12a3 3 0 0 1 3 3v14H8a3 3 0 0 1-3-3z"/><path d="M5 4a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3"/><path d="M11 9l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/>` },
  { id: "fairy", name: "Fairy", category: "Fantasy", tags: ["magic", "wing"], body: `<circle cx="12" cy="7" r="2"/><path d="M10 9l-5 4 5 2M14 9l5 4-5 2M12 11v6M10 17h4"/>` },
  { id: "crown-2", name: "Royal Crown", category: "Fantasy", tags: ["king", "royal"], body: `<path d="M3 18h18M5 8l3 4 4-7 4 7 3-4-2 10H7z"/><circle cx="12" cy="5" r="1" fill="currentColor" stroke="none"/><circle cx="5" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="8" r="1" fill="currentColor" stroke="none"/>` },
  { id: "magic-portal", name: "Magic Portal", category: "Fantasy", tags: ["portal", "magic"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/><path d="M3 12c2-2 4-2 6 0M21 12c-2-2-4-2-6 0M12 3c-2 2-2 4 0 6M12 21c2-2 2-4 0-6"/>` },

  // ─── MEDICAL 2 (10) ───
  { id: "ambulance-cross", name: "Medical Cross", category: "Medical2", tags: ["red-cross", "health"], body: `<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>` },
  { id: "blood-drop", name: "Blood Drop", category: "Medical2", tags: ["blood", "donate"], body: `<path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z"/><path d="M9 14a3 3 0 0 0 3 3"/>` },
  { id: "first-aid-kit", name: "First Aid Kit", category: "Medical2", tags: ["emergency", "kit"], body: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V4h8v3M11 12v4M9 14h4"/>` },
  { id: "medicine-bottle", name: "Medicine Bottle", category: "Medical2", tags: ["pill", "pharmacy"], body: `<rect x="6" y="6" width="12" height="15" rx="1"/><path d="M5 3h14v3H5zM10 11h4M10 14h4M10 17h4"/>` },
  { id: "thermometer-med", name: "Medical Thermometer", category: "Medical2", tags: ["fever", "temp"], body: `<path d="M14 4a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0z"/><circle cx="17" cy="17" r="2" fill="currentColor" stroke="none"/><path d="M14 7H4a2 2 0 0 0-2 2v3h12"/>` },
  { id: "stretcher", name: "Stretcher", category: "Medical2", tags: ["hospital", "patient"], body: `<rect x="3" y="10" width="14" height="4"/><circle cx="6" cy="18" r="1.5"/><circle cx="14" cy="18" r="1.5"/><path d="M3 14l-1 4M17 14h4M19 12V8"/>` },
  { id: "vaccine", name: "Vaccine Vial", category: "Medical2", tags: ["vaccine", "vial"], body: `<rect x="9" y="6" width="6" height="14" rx="1"/><path d="M8 6h8M10 3h4v3h-4zM9 11h6"/>` },
  { id: "eye-test", name: "Eye Chart", category: "Medical2", tags: ["vision", "test"], body: `<rect x="2" y="3" width="20" height="18" rx="1"/><path d="M5 7h2M5 10h4M5 13h6M5 16h8M5 19h10"/>` },
  { id: "wheelchair", name: "Wheelchair", category: "Medical2", tags: ["accessibility", "mobility"], body: `<circle cx="9" cy="18" r="3"/><circle cx="9" cy="5" r="2"/><path d="M9 7v8h6l3 5M9 11h7"/>` },
  { id: "medical-report", name: "Medical Report", category: "Medical2", tags: ["report", "health"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 3v4h6V3M8 11h2M12 11h4M8 14h2M12 14h4M8 17h6"/>` },

  // ─── RELIGION 2 (8) ───
  { id: "trinity", name: "Trinity", category: "Religion2", tags: ["christian", "faith"], body: `<circle cx="12" cy="6" r="3"/><circle cx="6" cy="15" r="3"/><circle cx="18" cy="15" r="3"/><path d="M12 9l-4 3M12 9l4 3M8 16h8"/>` },
  { id: "ankh", name: "Ankh", category: "Religion2", tags: ["egyptian", "life"], body: `<circle cx="12" cy="6" r="3"/><path d="M12 9v12M7 13h10"/>` },
  { id: "yin-yang", name: "Yin Yang", category: "Religion2", tags: ["tao", "balance"], body: `<circle cx="12" cy="12" r="9"/><path d="M12 3a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0 9"/><circle cx="12" cy="7.5" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "pentagram", name: "Pentagram", category: "Religion2", tags: ["star", "pagan"], body: `<path d="M12 3l3 7 7 0-6 5 2 8-6-5-6 5 2-8-6-5 7 0z"/>` },
  { id: "torii-gate", name: "Torii Gate", category: "Religion2", tags: ["shinto", "japan"], body: `<path d="M3 6c4-3 14-3 18 0M5 5v15M19 5v15M3 11c5-2 13-2 18 0M3 21h18"/>` },
  { id: "dove", name: "Dove", category: "Religion2", tags: ["peace", "holy"], body: `<path d="M3 12c4-2 7-5 9-9 2 4 5 7 9 9-4 2-7 5-9 9-2-4-5-7-9-9z"/><circle cx="6" cy="11" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "prayer-hands", name: "Prayer Hands", category: "Religion2", tags: ["pray", "faith"], body: `<path d="M9 21V11c0-2 1-3 3-3s3 1 3 3v10M9 11c-1-1-3-1-3-3V5M15 11c1-1 3-1 3-3V5"/>` },
  { id: "incense", name: "Incense Stick", category: "Religion2", tags: ["prayer", "ritual"], body: `<path d="M12 3v14M9 21h6M10 17h4"/><path d="M11 3c0 1 2 1 2 0 0-1 0-2-1-2s-1 1-1 2z" fill="currentColor" stroke="none"/>` },

  // ─── ART (10) ───
  { id: "palette", name: "Paint Palette", category: "Art", tags: ["paint", "color"], body: `<path d="M12 3a9 9 0 0 0 0 18c1 0 2-1 2-2 0-1-1-2 0-3 1-1 3 0 4-1a4 4 0 0 0-1-7c-1-2-3-3-5-3z"/><circle cx="7" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="17" cy="9" r="1" fill="currentColor" stroke="none"/>` },
  { id: "brush", name: "Paint Brush", category: "Art", tags: ["paint", "art"], body: `<path d="M3 21l3-3M6 18L17 7l3 3L9 21z"/><path d="M17 7l2-2 3 3-2 2z"/><path d="M16 4l4 4"/>` },
  { id: "easel", name: "Easel", category: "Art", tags: ["canvas", "art"], body: `<rect x="4" y="3" width="16" height="13" rx="1"/><path d="M12 16v5M8 21h8M4 16l-2 5M20 16l2 5"/>` },
  { id: "pencil-art", name: "Art Pencil", category: "Art", tags: ["draw", "sketch"], body: `<path d="M3 21l4-1L18 9l-3-3L4 17z"/><path d="M16 4l4 4-2 2-4-4z"/>` },
  { id: "frame", name: "Picture Frame", category: "Art", tags: ["frame", "decor"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><rect x="6" y="6" width="12" height="12"/><path d="M9 14l2-3 2 2 3-4"/>` },
  { id: "scissors-art", name: "Art Scissors", category: "Art", tags: ["cut", "craft"], body: `<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8 8l12 8M8 16L20 8M6 9v9"/>` },
  { id: "color-tube", name: "Paint Tube", category: "Art", tags: ["paint", "tube"], body: `<path d="M5 21l4-4 9-9 4 4-9 9-4 4z"/><path d="M14 4l6 6M5 21l-2 2"/>` },
  { id: "spray", name: "Spray Paint", category: "Art", tags: ["graffiti", "spray"], body: `<rect x="9" y="8" width="6" height="13" rx="1"/><path d="M9 11h6M11 8V5h2v3M11 5l-1-2M13 5l1-2M19 3l1 1M21 6l1 1M18 8l1 1"/>` },
  { id: "ruler-art", name: "Art Ruler", category: "Art", tags: ["measure", "draw"], body: `<rect x="2" y="9" width="20" height="6" rx="1"/><path d="M5 9v2M8 9v3M11 9v2M14 9v3M17 9v2M5 15v-2M8 15v-3M11 15v-2M14 15v-3M17 15v-2"/>` },
  { id: "canvas", name: "Canvas", category: "Art", tags: ["paint", "art"], body: `<rect x="3" y="4" width="18" height="14" rx="1"/><path d="M3 18v3h18v-3M7 8l3 3M11 8l4 4M7 13l2 2"/>` },

  // ─── MUSIC 3 (8) ───
  { id: "music-sheet", name: "Music Sheet", category: "Music3", tags: ["notes", "score"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 7h18M3 10h18M3 13h18M3 16h18"/><circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="1.5" fill="currentColor" stroke="none"/><path d="M10 13V8h6v2"/>` },
  { id: "metronome", name: "Metronome", category: "Music3", tags: ["tempo", "beat"], body: `<path d="M5 21l4-18h6l4 18z"/><path d="M5 21h14M9 3h6M9 21l5-15"/>` },
  { id: "tuning-fork", name: "Tuning Fork", category: "Music3", tags: ["tune", "pitch"], body: `<path d="M9 3v8a3 3 0 0 0 6 0V3M9 3v0M15 3v0M9 16v5M15 16v5"/>` },
  { id: "music-stand", name: "Music Stand", category: "Music3", tags: ["sheet", "stand"], body: `<rect x="5" y="4" width="14" height="9" rx="1"/><path d="M5 13l-2 8M19 13l2 8M12 13v8M8 21h8M8 7h8M8 10h5"/>` },
  { id: "cassette", name: "Cassette Tape", category: "Music3", tags: ["retro", "music"], body: `<rect x="2" y="6" width="20" height="12" rx="1"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><path d="M8 6V4h8v2M5 18h14"/>` },
  { id: "vinyl-record", name: "Vinyl Record", category: "Music3", tags: ["retro", "music"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>` },
  { id: "concert", name: "Concert", category: "Music3", tags: ["live", "show"], body: `<circle cx="6" cy="7" r="2"/><path d="M4 21v-4l2-4 2 4v4M6 9v4M14 21V11M14 11a3 3 0 0 1 6 0v10M14 16h6M18 8V3M16 4l2-1 2 1"/>` },
  { id: "headphones-dj", name: "DJ Headphones", category: "Music3", tags: ["dj", "music"], body: `<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M12 4v-2M9 4l-1-1M15 4l1-1"/>` },

  // ─── ELECTRONICS (10) ───
  { id: "resistor", name: "Resistor", category: "Electronics", tags: ["circuit", "ohm"], body: `<path d="M2 12h4l2-4 4 8 2-4 4-4h4"/>` },
  { id: "capacitor", name: "Capacitor", category: "Electronics", tags: ["circuit", "cap"], body: `<path d="M2 12h8M14 12h8M10 4v16M14 4v16"/>` },
  { id: "transistor", name: "Transistor", category: "Electronics", tags: ["circuit", "bjt"], body: `<circle cx="12" cy="12" r="8"/><path d="M8 8v8M8 12h6M14 8l4-2M14 12l4 1M14 16l4 2"/>` },
  { id: "led", name: "LED", category: "Electronics", tags: ["light", "diode"], body: `<path d="M9 21V11h6v10M9 11V6a3 3 0 0 1 6 0v5M9 21h6"/><path d="M5 4l2 2M19 4l-2 2"/>` },
  { id: "diode", name: "Diode", category: "Electronics", tags: ["circuit", "diode"], body: `<path d="M2 12h6l8-6v12l-8-6h-6z"/><path d="M16 6v12"/>` },
  { id: "battery-cell", name: "Battery Cell", category: "Electronics", tags: ["power", "cell"], body: `<rect x="3" y="7" width="16" height="10" rx="1"/><path d="M21 11v2M5 9v6M8 9v6"/>` },
  { id: "wire", name: "Wire", category: "Electronics", tags: ["cable", "wire"], body: `<path d="M3 3c4 0 6 4 6 8s-2 8-6 8M3 3c0 4 4 6 8 6s8-2 8-6M3 3c0 4 4 6 8 6"/>` },
  { id: "switch", name: "Switch", category: "Electronics", tags: ["toggle", "switch"], body: `<circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 12l8-6M4 6h4M16 18h4"/>` },
  { id: "fuse", name: "Fuse", category: "Electronics", tags: ["protect", "circuit"], body: `<rect x="3" y="9" width="18" height="6" rx="3"/><path d="M2 12h1M21 12h1M8 12l3-2 2 4 3-2"/>` },
  { id: "transformer", name: "Transformer", category: "Electronics", tags: ["coil", "power"], body: `<path d="M5 21V3M9 21V3M15 21V3M19 21V3M5 21h4M15 21h4"/>` },

  // ─── SPORTS 3 (8) ───
  { id: "boxing", name: "Boxing", category: "Sports3", tags: ["fight", "ring"], body: `<rect x="3" y="9" width="18" height="10" rx="1"/><path d="M3 12h18M3 18l-2 3M21 18l2 3M5 9V6h14v3"/>` },
  { id: "swimming", name: "Swimming", category: "Sports3", tags: ["pool", "swim"], body: `<circle cx="17" cy="6" r="2"/><path d="M3 14c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 3 2M3 18c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 3 2M5 10l5 3 4-3"/>` },
  { id: "archery", name: "Archery", category: "Sports3", tags: ["bow", "arrow"], body: `<circle cx="14" cy="12" r="8"/><circle cx="14" cy="12" r="4"/><circle cx="14" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M2 12h6M14 4V2M14 22v-2"/>` },
  { id: "fencing", name: "Fencing", category: "Sports3", tags: ["sword", "duel"], body: `<path d="M3 21L18 6M18 6l3-3M3 21l-1 1M16 4l4 4M20 8l-3-3M14 6l3-3"/>` },
  { id: "weight-lifting", name: "Weight Lifting", category: "Sports3", tags: ["gym", "barbell"], body: `<rect x="2" y="9" width="3" height="6"/><rect x="19" y="9" width="3" height="6"/><path d="M5 12h14M5 9v6M19 9v6"/>` },
  { id: "cycling", name: "Cycling", category: "Sports3", tags: ["bike", "race"], body: `<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-7h5l3 7M10 10l-1-3h-2M15 10l2-3M10 10l5 0"/>` },
  { id: "marathon", name: "Marathon", category: "Sports3", tags: ["run", "race"], body: `<circle cx="14" cy="4" r="2"/><path d="M14 6l-4 4 3 2v6M10 10l-3 3M14 12l4-2M9 21l1-5M17 21l-3-7"/>` },
  { id: "gymnastics", name: "Gymnastics", category: "Sports3", tags: ["flexible", "gym"], body: `<circle cx="12" cy="4" r="2"/><path d="M12 6v6M6 9l6 3 6-3M5 21l7-9 7 9M9 21l3-5 3 5"/>` },

  // ─── GEOGRAPHY (8) ───
  { id: "mountain-peak", name: "Mountain Peak", category: "Geography", tags: ["peak", "hill"], body: `<path d="M3 20l5-9 4 5 3-4 6 8z"/><circle cx="17" cy="6" r="2"/><path d="M3 20h18"/>` },
  { id: "volcano-2", name: "Volcano", category: "Geography", tags: ["erupt", "lava"], body: `<path d="M3 21l5-12 4 4 4-4 5 12z"/><path d="M8 9c0-2 1-3 3-3M14 8c0-2 1-3 3-3M12 4l1-2M14 5l1-1"/>` },
  { id: "island", name: "Island", category: "Geography", tags: ["sea", "tropical"], body: `<path d="M3 18h18M5 18c1-3 3-5 7-5s6 2 7 5M9 13V8M9 8c-2-1-3-3-2-5 2 1 3 3 2 5z"/>` },
  { id: "river", name: "River", category: "Geography", tags: ["water", "flow"], body: `<path d="M3 5c4 0 5 3 9 3s5-3 9-3M3 12c4 0 5 3 9 3s5-3 9-3M3 19c4 0 5 3 9 3s5-3 9-3"/>` },
  { id: "desert", name: "Desert", category: "Geography", tags: ["sand", "dry"], body: `<path d="M3 20l4-8 4 5 4-7 6 10z"/><circle cx="20" cy="5" r="2"/><path d="M3 20h18"/>` },
  { id: "cave", name: "Cave", category: "Geography", tags: ["rock", "cavern"], body: `<path d="M3 21V11a9 9 0 0 1 18 0v10z"/><path d="M3 21h18M9 21v-4a3 3 0 0 1 6 0v4"/>` },
  { id: "glacier", name: "Glacier", category: "Geography", tags: ["ice", "frozen"], body: `<path d="M3 21l4-10 4 6 4-8 6 12z"/><path d="M3 21h18M7 11l3 4M14 9l3 5"/>` },
  { id: "waterfall", name: "Waterfall", category: "Geography", tags: ["water", "fall"], body: `<path d="M3 8h18v13H3zM3 12c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2M3 16c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2"/>` },

  // ─── ZODIAC (12) ───
  { id: "aries", name: "Aries", category: "Zodiac", tags: ["ram", "astrology"], body: `<path d="M3 17c2-5 5-7 9-7s7 2 9 7M7 13c-1-2-1-5 1-6 2 1 3 3 2 5M15 11c1-2 2-4 4-5 1 1 1 4-1 6M12 11v10"/>` },
  { id: "taurus", name: "Taurus", category: "Zodiac", tags: ["bull", "astrology"], body: `<circle cx="12" cy="15" r="6"/><path d="M5 8C5 4 8 4 9 6s3 3 3 3 2-1 3-3 4-2 4 2"/>` },
  { id: "gemini", name: "Gemini", category: "Zodiac", tags: ["twins", "astrology"], body: `<path d="M7 3v18M17 3v18M5 7h14M5 17h14"/>` },
  { id: "cancer", name: "Cancer", category: "Zodiac", tags: ["crab", "astrology"], body: `<path d="M5 8c4 0 6 4 7 8 1-4 3-8 7-8M5 8a3 3 0 1 0 0 6M19 8a3 3 0 1 1 0 6"/>` },
  { id: "leo", name: "Leo", category: "Zodiac", tags: ["lion", "astrology"], body: `<circle cx="9" cy="16" r="3"/><path d="M11 13c0-5 3-9 8-9 0 5-3 7-8 9M6 7c1 2 4 3 5 1"/>` },
  { id: "virgo", name: "Virgo", category: "Zodiac", tags: ["virgin", "astrology"], body: `<path d="M3 21V5l3 3 3-3v16M9 21V5l3 3 3-3v16M15 11c0-3 2-5 5-5v10"/>` },
  { id: "libra", name: "Libra", category: "Zodiac", tags: ["scale", "astrology"], body: `<path d="M3 21h18M12 3v3M5 9h14M5 9c0 3 3 5 7 5s7-2 7-5"/>` },
  { id: "scorpio", name: "Scorpio", category: "Zodiac", tags: ["scorpion", "astrology"], body: `<path d="M3 21V8a4 4 0 0 1 8 0v13M11 8a4 4 0 0 1 8 0v13M3 14h8M19 21l3-3-3-3"/>` },
  { id: "sagittarius", name: "Sagittarius", category: "Zodiac", tags: ["archer", "astrology"], body: `<path d="M3 21L21 3M21 3l-7 0M21 3l0 7M3 21l7 0M3 21l0-7M7 17l10-10"/>` },
  { id: "capricorn", name: "Capricorn", category: "Zodiac", tags: ["goat", "astrology"], body: `<path d="M3 21V8c0-3 2-5 5-5s4 2 4 5v8c0 2 1 4 3 4s4-2 4-4M5 21h14"/>` },
  { id: "aquarius", name: "Aquarius", category: "Zodiac", tags: ["water", "astrology"], body: `<path d="M3 8l3 3 3-3 3 3 3-3 3 3 3-3M3 13l3 3 3-3 3 3 3-3 3 3 3-3M3 18l3 3 3-3 3 3 3-3 3 3 3-3"/>` },
  { id: "pisces", name: "Pisces", category: "Zodiac", tags: ["fish", "astrology"], body: `<path d="M5 3c0 5-2 13-2 18M19 3c0 5 2 13 2 18M5 8c2 2 12 2 14 0M5 16c2-2 12-2 14 0"/>` },

  // ─── VEHICLES 3 (8) ───
  { id: "bicycle", name: "Bicycle", category: "Vehicles3", tags: ["cycle", "bike"], body: `<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-7h6l-3 7M10 10l-2-3h-2M14 10l2-3M10 10l4 7"/>` },
  { id: "motorcycle", name: "Motorcycle", category: "Vehicles3", tags: ["bike", "ride"], body: `<circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17l3-5h6l3 5M8 12l-1-3M14 12l-2 5M11 9h4l2 3"/>` },
  { id: "scooter-electric", name: "Electric Scooter", category: "Vehicles3", tags: ["escooter", "ride"], body: `<circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 18l3-7 4 1 3 6M9 11l-1-3M16 11l2-4M5 9h3"/>` },
  { id: "helicopter", name: "Helicopter", category: "Vehicles3", tags: ["fly", "heli"], body: `<path d="M3 7h14a4 4 0 0 1 4 4v3H3z"/><path d="M3 14v3M21 11l2-1M3 7V4h6M9 7V3"/>` },
  { id: "tank", name: "Tank", category: "Vehicles3", tags: ["military", "war"], body: `<path d="M3 18h14M5 18V12h12v6M5 14H3M19 14h2M9 12V8h6v4M3 18c-1 0-2-1-2-2s1-2 2-2M19 14c1 0 2 1 2 2s-1 2-2 2"/>` },
  { id: "tractor-trailer", name: "Tractor Trailer", category: "Vehicles3", tags: ["truck", "cargo"], body: `<rect x="2" y="9" width="6" height="9" rx="1"/><path d="M8 13h6l4 5h-10z"/><circle cx="5" cy="19" r="2"/><circle cx="15" cy="19" r="2"/>` },
  { id: "submarine", name: "Submarine", category: "Vehicles3", tags: ["sea", "navy"], body: `<ellipse cx="12" cy="14" rx="9" ry="3"/><path d="M9 11V7h4v4M11 7V3M14 17l3 3M3 14l-2 1M21 14l2 1"/>` },
  { id: "sailboat", name: "Sailboat", category: "Vehicles3", tags: ["sail", "boat"], body: `<path d="M3 19h18l-2 3H5z"/><path d="M12 19V4M12 4l7 11H12z"/>` },

  // ─── WEAPONS (8) ───
  { id: "shield-sword", name: "Shield Sword", category: "Weapons", tags: ["weapon", "defense"], body: `<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>` },
  { id: "bow-arrow", name: "Bow Arrow", category: "Weapons", tags: ["archery", "weapon"], body: `<path d="M5 4c-3 5-3 11 0 16M5 4c3 5 3 11 0 16M3 12h18M19 9l4 3-4 3"/>` },
  { id: "crossbow", name: "Crossbow", category: "Weapons", tags: ["weapon", "bow"], body: `<path d="M3 12h18M9 6l-2 6 2 6M15 6l2 6-2 6M9 12l8-3M9 12l8 3"/>` },
  { id: "axe-battle", name: "Battle Axe", category: "Weapons", tags: ["weapon", "axe"], body: `<path d="M3 21l9-9M12 12l5-5M5 4c2 4 6 6 10 6l2-2c-4-6-12-4-12-4z"/>` },
  { id: "katana", name: "Katana", category: "Weapons", tags: ["sword", "japan"], body: `<path d="M3 21l14-14M17 7l3-3M3 21l-1 1M14 8l4 4M20 4l-3-1M22 6l-1 3"/>` },
  { id: "dagger", name: "Dagger", category: "Weapons", tags: ["knife", "weapon"], body: `<path d="M3 21l8-8M11 13L17 7l3 3-6 6zM11 13l-2-1M3 21l-1 1"/>` },
  { id: "hammer-weapon", name: "War Hammer", category: "Weapons", tags: ["weapon", "hammer"], body: `<path d="M3 21l9-9M12 12l3-3M5 6h10v6H5z"/>` },
  { id: "spear", name: "Spear", category: "Weapons", tags: ["weapon", "spear"], body: `<path d="M3 21l13-13M16 8l4-4M3 21l-1 1M16 8l3-3M19 5l3-1-1 3z"/>` },

  // ─── BUILDING 2 (12) ───
  { id: "mall", name: "Shopping Mall", category: "Buildings2", tags: ["shop", "complex"], body: `<rect x="3" y="6" width="18" height="15" rx="1"/><path d="M3 6l3-3h12l3 3M6 21v-7h4v7M14 21v-7h4v7M6 10h2M10 10h2M14 10h2M18 10h0"/>` },
  { id: "bank", name: "Bank", category: "Buildings2", tags: ["finance", "money"], body: `<path d="M3 9l9-6 9 6M5 9v9M19 9v9M9 9v9M15 9v9M3 21h18M3 18h18"/>` },
  { id: "museum", name: "Museum", category: "Buildings2", tags: ["art", "history"], body: `<path d="M3 21V8l9-5 9 5v13M3 21h18M7 21v-8h10v8M9 13h6M10 11v2M14 11v2"/>` },
  { id: "library", name: "Library", category: "Buildings2", tags: ["books", "study"], body: `<path d="M3 21V9l9-6 9 6v12M3 21h18M7 21V11M11 21V11M13 21V11M17 21V11"/>` },
  { id: "stadium", name: "Stadium", category: "Buildings2", tags: ["sports", "arena"], body: `<ellipse cx="12" cy="14" rx="9" ry="3"/><path d="M3 14v3c0 2 4 3 9 3s9-1 9-3v-3M5 11V8M9 11V7M15 11V7M19 11V8"/>` },
  { id: "cathedral", name: "Cathedral", category: "Buildings2", tags: ["church", "gothic"], body: `<path d="M5 21V11l7-7 7 7v10M5 21h14M10 14l2-2 2 2M9 21v-4h6v4M12 4V1M11 2h2"/>` },
  { id: "warehouse", name: "Warehouse", category: "Buildings2", tags: ["storage", "industrial"], body: `<path d="M3 21V9l9-4 9 4v12M3 21h18M7 21v-7h10v7M9 14h6M9 17h6"/>` },
  { id: "gas-station", name: "Gas Station", category: "Buildings2", tags: ["fuel", "petrol"], body: `<path d="M5 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16M5 21h8M5 9h8M14 9l4 3v9M14 21h6M17 12v3"/>` },
  { id: "park", name: "Park", category: "Buildings2", tags: ["garden", "trees"], body: `<path d="M3 21h18M6 21V12M10 21V8M14 21V10M18 21V14M5 12c1-2 1-4 1-4 0 2 0 2 1 4M9 8c1-2 1-4 1-4 0 2 0 2 1 4M13 10c1-2 1-4 1-4 0 2 0 2 1 4M17 14c1-2 1-4 1-4 0 2 0 2 1 4"/>` },
  { id: "windmill", name: "Windmill", category: "Buildings2", tags: ["wind", "old"], body: `<path d="M12 21V11M12 11c0-3-2-5-5-5-2 2-2 4 0 5zM12 11c0-3 2-5 5-5 2 2 2 4 0 5zM12 11c3 0 5 2 5 5-2 2-4 2-5 0zM12 11c-3 0-5-2-5-5 2-2 4-2 5 0z"/>` },
  { id: "lighthouse", name: "Lighthouse", category: "Buildings2", tags: ["sea", "light"], body: `<path d="M9 21V8l3-3 3 3v13M9 21h6M9 13h6M11 5V2M10 3h2M5 6L2 4M19 6l3-2"/>` },
  { id: "pyramid", name: "Pyramid", category: "Buildings2", tags: ["egypt", "ancient"], body: `<path d="M3 21L12 4l9 17zM12 4v17M8 12l4-2 4 2M6 17l6-2 6 2"/>` },

  // ─── NATURE 2 (12) ───
  { id: "snowflake-2", name: "Snowflake 2", category: "Nature2", tags: ["winter", "crystal"], body: `<path d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19M9 4l3 1 3-1M9 20l3-1 3 1M4 9l1 3-1 3M20 9l-1 3 1 3"/>` },
  { id: "rainbow-2", name: "Rainbow 2", category: "Nature2", tags: ["color", "arc"], body: `<path d="M3 20a9 9 0 0 1 18 0M5 20a7 7 0 0 1 14 0M7 20a5 5 0 0 1 10 0M9 20a3 3 0 0 1 6 0"/>` },
  { id: "aurora-borealis", name: "Aurora", category: "Nature2", tags: ["northern", "lights"], body: `<path d="M3 18c3-3 6-3 9 0s6 3 9 0M3 14c3-3 6-3 9 0s6 3 9 0M3 10c3-3 6-3 9 0s6 3 9 0M3 21h18"/>` },
  { id: "comet", name: "Comet", category: "Nature2", tags: ["space", "tail"], body: `<circle cx="17" cy="7" r="3"/><path d="M15 9L4 20M13 7L3 17M17 11l-7 7"/>` },
  { id: "eclipse", name: "Eclipse", category: "Nature2", tags: ["sun", "moon"], body: `<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18 5 5 0 0 1 0-18z"/>` },
  { id: "tornado-2", name: "Tornado 2", category: "Nature2", tags: ["wind", "storm"], body: `<path d="M3 4h18M5 8h14M7 12h10M9 16h6M11 20h2"/>` },
  { id: "tsunami", name: "Tsunami", category: "Nature2", tags: ["wave", "disaster"], body: `<path d="M3 21V14c0-3 2-5 5-5s5 2 5 5 2 5 5 5h3M3 21h18"/>` },
  { id: "earthquake", name: "Earthquake", category: "Nature2", tags: ["seismic", "shake"], body: `<path d="M3 12h3l2-5 3 10 2-7 3 4 2-2h3"/>` },
  { id: "volcano-3", name: "Eruption", category: "Nature2", tags: ["lava", "volcano"], body: `<path d="M3 21l5-12 4 4 4-4 5 12z"/><path d="M8 9c0-2 1-3 3-3M14 8c0-2 1-3 3-3M12 4l1-2M14 5l1-1"/>` },
  { id: "iceberg", name: "Iceberg", category: "Nature2", tags: ["ice", "sea"], body: `<path d="M3 21l5-12 4 4 4-4 5 12z"/><path d="M3 21h18M8 9l4 4 4-4"/>` },
  { id: "desert-2", name: "Sand Dunes", category: "Nature2", tags: ["desert", "sand"], body: `<path d="M3 20c2-4 5-4 7-2s5 2 7 0 4-2 4-2v4zM3 20h18M5 16c1-2 2-2 3-1M15 14c1-2 2-2 3-1"/>` },
  { id: "oasis", name: "Oasis", category: "Nature2", tags: ["water", "desert"], body: `<ellipse cx="12" cy="14" rx="6" ry="3"/><path d="M9 14V9c0-1 1-2 3-2s3 1 3 2v5M9 9c-1-1-2-1-3-2M15 9c1-1 2-1 3-2"/>` },

  // ─── MUSIC 4 (12) ───
  { id: "tambourine", name: "Tambourine", category: "Music4", tags: ["percussion", "shake"], body: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="5" r="1.2" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4"/>` },
  { id: "banjo", name: "Banjo", category: "Music4", tags: ["string", "folk"], body: `<circle cx="8" cy="16" r="5"/><path d="M12 13l8-9M16 9l2-2M14 11l2-2"/>` },
  { id: "cello", name: "Cello", category: "Music4", tags: ["string", "classical"], body: `<ellipse cx="12" cy="18" rx="6" ry="4"/><ellipse cx="12" cy="11" rx="4" ry="3"/><path d="M12 11V3M10 4h4M9 16l6 0M9 18l6 0M10 19l4 0"/>` },
  { id: "accordion", name: "Accordion", category: "Music4", tags: ["squeeze", "folk"], body: `<rect x="2" y="8" width="6" height="9" rx="1"/><rect x="16" y="8" width="6" height="9" rx="1"/><path d="M8 9l2 0M8 11l2 0M8 13l2 0M8 15l2 0M14 9h2M14 11h2M14 13h2M14 15h2M10 9v7M12 9v7"/>` },
  { id: "saxophone", name: "Saxophone", category: "Music4", tags: ["brass", "jazz"], body: `<path d="M16 3v9a5 5 0 0 1-10 0V8M16 3l4 1M11 13v8M9 21h4"/>` },
  { id: "harmonica", name: "Harmonica", category: "Music4", tags: ["mouth", "blues"], body: `<rect x="2" y="9" width="20" height="6" rx="1"/><path d="M5 12h1M8 12h1M11 12h1M14 12h1M17 12h1"/>` },
  { id: "xylophone", name: "Xylophone", category: "Music4", tags: ["bars", "kids"], body: `<rect x="3" y="8" width="3" height="9"/><rect x="7" y="6" width="3" height="11"/><rect x="11" y="4" width="3" height="13"/><rect x="15" y="6" width="3" height="11"/><rect x="19" y="8" width="3" height="9"/><path d="M2 6l4 1M6 4l4 1M10 2l4 1M14 4l4 1M18 6l4 1"/>` },
  { id: "maracas", name: "Maracas", category: "Music4", tags: ["shake", "latin"], body: `<ellipse cx="6" cy="8" rx="3" ry="4"/><ellipse cx="18" cy="8" rx="3" ry="4"/><path d="M6 12v9M18 12v9M5 16h2M17 16h2"/>` },
  { id: "trombone", name: "Trombone", category: "Music4", tags: ["brass", "slide"], body: `<path d="M3 11h11l4-3v3M3 11v2M7 11v2M10 11v2M19 11l2 3"/>` },
  { id: "clarinet", name: "Clarinet", category: "Music4", tags: ["woodwind", "music"], body: `<rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="12" cy="7" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="11" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "flute-music", name: "Flute", category: "Music4", tags: ["wind", "music"], body: `<rect x="2" y="10" width="20" height="4" rx="1"/><circle cx="7" cy="12" r="0.8" fill="currentColor" stroke="none"/><circle cx="11" cy="12" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "cymbal", name: "Cymbal", category: "Music4", tags: ["crash", "metal"], body: `<ellipse cx="12" cy="9" rx="9" ry="2"/><path d="M12 11v8M9 21h6"/>` },

  // ─── FOOD 2 (12) ───
  { id: "sushi", name: "Sushi", category: "Food2", tags: ["japanese", "rice"], body: `<ellipse cx="12" cy="13" rx="6" ry="4"/><ellipse cx="12" cy="11" rx="6" ry="3"/><path d="M8 11c0-2 2-3 4-3s4 1 4 3"/>` },
  { id: "noodles", name: "Noodles", category: "Food2", tags: ["ramen", "asian"], body: `<path d="M3 21V13a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8M3 21h18M3 18h18"/><path d="M7 9c0-2 1-3 2-3M11 9c0-3 1-4 2-4M15 9c0-2 1-3 2-3"/>` },
  { id: "taco", name: "Taco", category: "Food2", tags: ["mexican", "food"], body: `<path d="M3 16a9 9 0 0 1 18 0M3 16v2h18v-2M7 14l1-2M11 14l1-2M15 14l1-2"/>` },
  { id: "sandwich", name: "Sandwich", category: "Food2", tags: ["lunch", "food"], body: `<path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h16v3H4z"/><path d="M4 6c0-1 1-2 2-2h12c1 0 2 1 2 2"/>` },
  { id: "soup", name: "Soup Bowl", category: "Food2", tags: ["hot", "liquid"], body: `<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M3 11h18M21 11h1M2 11H1M9 7c0-1 1-2 2-2M13 7c0-1 1-2 2-2"/>` },
  { id: "steak", name: "Steak", category: "Food2", tags: ["meat", "beef"], body: `<path d="M4 12c0-4 4-7 8-7s7 3 7 7-3 7-7 7-8-3-8-7z"/><path d="M8 12l3 2M12 8l3 4M14 14l3-2"/>` },
  { id: "fries", name: "French Fries", category: "Food2", tags: ["fast", "potato"], body: `<path d="M5 21l-2-9h18l-2 9z"/><path d="M8 12V4M11 12V3M14 12V4M17 12V5"/>` },
  { id: "hotdog", name: "Hot Dog", category: "Food2", tags: ["fast", "snack"], body: `<path d="M4 14c0-3 3-5 8-5s8 2 8 5v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M7 14c2-1 4-1 5 0s3 1 5 0"/>` },
  { id: "cheese", name: "Cheese", category: "Food2", tags: ["dairy", "food"], body: `<path d="M3 19l5-14 13 5v9z"/><circle cx="8" cy="14" r="0.8" fill="currentColor" stroke="none"/><circle cx="13" cy="14" r="0.8" fill="currentColor" stroke="none"/><circle cx="17" cy="16" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "egg-fried", name: "Fried Egg", category: "Food2", tags: ["breakfast", "egg"], body: `<path d="M3 14a6 6 0 0 1 12 0c0 3-3 5-6 5s-6-2-6-5z"/><circle cx="9" cy="13" r="2" fill="currentColor" stroke="none"/>` },
  { id: "pancake", name: "Pancake", category: "Food2", tags: ["breakfast", "stack"], body: `<ellipse cx="12" cy="9" rx="9" ry="2"/><ellipse cx="12" cy="13" rx="9" ry="2"/><ellipse cx="12" cy="17" rx="9" ry="2"/><path d="M14 5V3M16 4V2"/>` },
  { id: "salad", name: "Salad Bowl", category: "Food2", tags: ["healthy", "veggie"], body: `<path d="M3 11h18l-2 5a4 4 0 0 1-4 3H9a4 4 0 0 1-4-3z"/><circle cx="9" cy="8" r="2"/><circle cx="15" cy="7" r="2"/><circle cx="12" cy="5" r="1.5"/>` },

  // ─── ACTIVITIES (12) ───
  { id: "yoga", name: "Yoga", category: "Activities", tags: ["meditation", "exercise"], body: `<circle cx="12" cy="4" r="2"/><path d="M12 6v6M5 18c3 0 7-1 7-3s4-3 7-3"/>` },
  { id: "running", name: "Running", category: "Activities", tags: ["jog", "fitness"], body: `<circle cx="14" cy="4" r="2"/><path d="M14 6l-3 4 2 2v6M11 10l-3 2M14 12l4-1M9 21l2-5M17 21l-3-7"/>` },
  { id: "dancing", name: "Dancing", category: "Activities", tags: ["dance", "music"], body: `<circle cx="12" cy="4" r="2"/><path d="M12 6v5M8 10l4 1 4-1M6 16l6-5 6 5M9 21l3-5 3 5"/>` },
  { id: "meditation", name: "Meditation", category: "Activities", tags: ["calm", "peace"], body: `<circle cx="12" cy="5" r="2"/><path d="M12 7v6M7 13h10M6 18c2 0 4-1 6-1s4 1 6 1M9 21h6"/>` },
  { id: "reading", name: "Reading", category: "Activities", tags: ["book", "study"], body: `<circle cx="12" cy="5" r="2"/><path d="M8 21V11l4-3 4 3v10M8 11h8M8 15h8"/>` },
  { id: "writing", name: "Writing", category: "Activities", tags: ["write", "create"], body: `<circle cx="12" cy="5" r="2"/><path d="M9 21l3-9 3 9M6 12h12M9 14h6"/>` },
  { id: "cooking", name: "Cooking", category: "Activities", tags: ["chef", "food"], body: `<circle cx="12" cy="4" r="2"/><path d="M8 21l2-9 4 0 2 9M5 14h14M9 12h6"/>` },
  { id: "painting", name: "Painting", category: "Activities", tags: ["art", "color"], body: `<circle cx="12" cy="4" r="2"/><path d="M9 21l3-8 3 8M6 13l6-1 6 1M9 16h6"/>` },
  { id: "gardening", name: "Gardening", category: "Activities", tags: ["plant", "garden"], body: `<circle cx="12" cy="4" r="2"/><path d="M12 6v6M8 18l4-6 4 6M6 21l3-3 3 1 3-1 3 3"/>` },
  { id: "fishing", name: "Fishing", category: "Activities", tags: ["fish", "rod"], body: `<circle cx="6" cy="5" r="2"/><path d="M5 7l4 4 1 9M9 11l9-7M14 16a3 3 0 1 1 6 0"/>` },
  { id: "hiking", name: "Hiking", category: "Activities", tags: ["trek", "outdoor"], body: `<circle cx="12" cy="3" r="2"/><path d="M12 5l-5 8h3l-2 8M12 5l5 8h-3l2 8M9 10h6"/>` },
  { id: "cycling-2", name: "Cycling 2", category: "Activities", tags: ["bike", "sport"], body: `<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M9 9l-2-3h-2M14 9l2-3M5 14h2M17 14h2"/>` },

  // ─── EMOTIONS (10) ───
  { id: "happy", name: "Happy", category: "Emotions", tags: ["joy", "smile"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0"/><circle cx="9" cy="9" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "sad", name: "Sad", category: "Emotions", tags: ["down", "cry"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 16a4 4 0 0 1 8 0"/><path d="M9 10c0-1-1-2-2-1M15 10c0-1 1-2 2-1"/>` },
  { id: "love-emotion", name: "Love", category: "Emotions", tags: ["heart", "adore"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 13a4 4 0 0 0 8 0"/><path d="M9 9l-1-1.5-1 1.5 1 1.5zM15 9l-1-1.5-1 1.5 1 1.5z"/>` },
  { id: "angry-emotion", name: "Angry", category: "Emotions", tags: ["mad", "rage"], body: `<circle cx="12" cy="12" r="9"/><path d="M7 9l3 1M17 9l-3 1M9 16a4 4 0 0 1 6 0"/>` },
  { id: "surprised", name: "Surprised", category: "Emotions", tags: ["wow", "shock"], body: `<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><circle cx="12" cy="16" r="2.5"/>` },
  { id: "confused", name: "Confused", category: "Emotions", tags: ["??", "lost"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 10h0.1M15 10h0M8 16c2-1 6-1 8 0M9 7l1-1 1 1-1 1zM15 7l1-1 1 1-1 1z"/>` },
  { id: "sleepy", name: "Sleepy", category: "Emotions", tags: ["tired", "zzz"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 14h6M8 10l3 1M16 10l-3 1M18 4l1 1 1-1M20 7l0.5 0.5 0.5-0.5"/>` },
  { id: "excited", name: "Excited", category: "Emotions", tags: ["wow", "yay"], body: `<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0"/><circle cx="8" cy="9" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="9" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "bored", name: "Bored", category: "Emotions", tags: ["meh", "uninterested"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 10l3 1M15 10l-3 1M8 16h8"/>` },
  { id: "scared", name: "Scared", category: "Emotions", tags: ["fear", "afraid"], body: `<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><path d="M9 16a3 3 0 0 1 6 0"/>` },

  // ─── SOCIAL MEDIA (12) ───
  { id: "like", name: "Like", category: "SocialMedia", tags: ["thumb", "up"], body: `<path d="M7 22V11l4-4V3a2 2 0 0 1 4 0v6h5a2 2 0 0 1 2 2l-2 9a3 3 0 0 1-3 2z"/>` },
  { id: "comment", name: "Comment", category: "SocialMedia", tags: ["chat", "reply"], body: `<path d="M3 5h18v11H10l-5 4v-4H3z"/>` },
  { id: "share-2", name: "Share", category: "SocialMedia", tags: ["distribute", "social"], body: `<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 12l6-4M9 12l6 4"/>` },
  { id: "bookmark-2", name: "Bookmark", category: "SocialMedia", tags: ["save", "mark"], body: `<path d="M5 3h14v18l-7-5-7 5z"/>` },
  { id: "follow", name: "Follow", category: "SocialMedia", tags: ["subscribe", "add"], body: `<circle cx="9" cy="8" r="3"/><path d="M3 19a6 6 0 0 1 12 0"/><path d="M18 7v6M15 10h6"/>` },
  { id: "dm", name: "Direct Message", category: "SocialMedia", tags: ["dm", "inbox"], body: `<path d="M21 4L3 11l6 2 2 6z"/>` },
  { id: "retweet", name: "Retweet", category: "SocialMedia", tags: ["repost", "twitter"], body: `<path d="M3 7h11l-2-2M3 7l2-2M3 7v6M21 17H10l2 2M21 17l-2 2M21 17v-6"/>` },
  { id: "trending", name: "Trending", category: "SocialMedia", tags: ["viral", "hot"], body: `<path d="M3 17l5-5 4 3 6-8M16 7h4v4"/>` },
  { id: "live-stream", name: "Live Stream", category: "SocialMedia", tags: ["live", "broadcast"], body: `<circle cx="12" cy="12" r="3"/><path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M4 4a12 12 0 0 0 0 16M20 4a12 12 0 0 1 0 16"/>` },
  { id: "upload-2", name: "Upload Media", category: "SocialMedia", tags: ["post", "media"], body: `<path d="M3 21V8l4-4h10l4 4v13M3 21h18M8 14h8M12 10v8"/>` },
  { id: "verified-badge", name: "Verified", category: "SocialMedia", tags: ["badge", "blue"], body: `<path d="M12 2l3 2 4-1 1 4 2 3-2 3 1 4-4 1-3 2-3-2-4 1-1-4-2-3 2-3-1-4 4-1z"/><path d="M9 12l2 2 4-4"/>` },
  { id: "hashtag", name: "Hashtag", category: "SocialMedia", tags: ["tag", "topic"], body: `<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>` },

  // ─── FILE TYPES (12) ───
  { id: "file-pdf", name: "PDF File", category: "FileTypes", tags: ["document", "pdf"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4"/><text x="7" y="17" font-size="4" fill="currentColor" stroke="none">PDF</text>` },
  { id: "file-image", name: "Image File", category: "FileTypes", tags: ["jpg", "png"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M8 14l3-3 3 3 2-2"/>` },
  { id: "file-video", name: "Video File", category: "FileTypes", tags: ["mp4", "video"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M10 13l4 2-4 2z"/>` },
  { id: "file-audio", name: "Audio File", category: "FileTypes", tags: ["mp3", "music"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M9 14v4M12 12v6M15 14v4"/>` },
  { id: "file-zip", name: "ZIP File", category: "FileTypes", tags: ["archive", "compress"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M11 7v2M11 11v2M11 15v2"/>` },
  { id: "file-code", name: "Code File", category: "FileTypes", tags: ["js", "ts"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M9 13l-2 2 2 2M15 13l2 2-2 2"/>` },
  { id: "file-text", name: "Text File", category: "FileTypes", tags: ["txt", "doc"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M8 13h8M8 16h8M8 10h4"/>` },
  { id: "file-excel", name: "Excel File", category: "FileTypes", tags: ["xls", "spreadsheet"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M8 14l2 3 2-3 2 3"/>` },
  { id: "file-word", name: "Word File", category: "FileTypes", tags: ["docx", "word"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M8 13l1 5 2-4 2 4 1-5"/>` },
  { id: "file-ppt", name: "PPT File", category: "FileTypes", tags: ["ppt", "slides"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M8 14h6M8 14v5"/>` },
  { id: "file-csv", name: "CSV File", category: "FileTypes", tags: ["data", "csv"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M7 13h10M7 16h10M9 13v3M13 13v3"/>` },
  { id: "file-json", name: "JSON File", category: "FileTypes", tags: ["json", "config"], body: `<path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4M9 13c-1 1-1 3 0 4M15 13c1 1 1 3 0 4"/>` },

  // ─── SCHOOL SUBJECTS (10) ───
  { id: "math-subject", name: "Mathematics", category: "Subjects", tags: ["math", "calc"], body: `<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM7 7h0M17 7h0M7 17h0M17 17h0"/>` },
  { id: "science-subject", name: "Science", category: "Subjects", tags: ["science", "atom"], body: `<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/>` },
  { id: "english-subject", name: "English", category: "Subjects", tags: ["language", "abc"], body: `<path d="M4 4h6M7 4v16M4 20h6M14 4h6M17 4v16M14 20h6"/>` },
  { id: "history-subject", name: "History", category: "Subjects", tags: ["past", "ancient"], body: `<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2M3 12h2M19 12h2"/>` },
  { id: "geography-subject", name: "Geography", category: "Subjects", tags: ["world", "earth"], body: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>` },
  { id: "art-subject", name: "Art Class", category: "Subjects", tags: ["draw", "paint"], body: `<circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="11" r="1.2" fill="currentColor" stroke="none"/><circle cx="11" cy="15" r="1.2" fill="currentColor" stroke="none"/>` },
  { id: "music-subject", name: "Music Class", category: "Subjects", tags: ["music", "note"], body: `<circle cx="6" cy="18" r="3"/><path d="M9 18V4l9-1v3l-9 1"/>` },
  { id: "pe-subject", name: "Physical Ed", category: "Subjects", tags: ["pe", "sport"], body: `<circle cx="12" cy="4" r="2"/><path d="M12 6v6M6 9l6 1 6-1M9 21l3-5 3 5"/>` },
  { id: "computer-subject", name: "Computer Sci", category: "Subjects", tags: ["cs", "code"], body: `<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M3 17h18M9 21h6M9 9l-2 2 2 2M15 9l2 2-2 2"/>` },
  { id: "biology-subject", name: "Biology", category: "Subjects", tags: ["dna", "life"], body: `<path d="M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12M7 3v18M17 3v18M7 6h10M7 9h10M7 15h10M7 18h10"/>` },

  // ─── TRANSPORT 2 (12) ───
  { id: "yacht", name: "Yacht", category: "Transport2", tags: ["boat", "luxury"], body: `<path d="M3 19h18l-3 4H6zM12 19V4M12 4l8 11H12z"/>` },
  { id: "jet", name: "Jet", category: "Transport2", tags: ["plane", "fast"], body: `<path d="M3 12l8-2 4-7 2 8 4 3-4 1-2 8-4-7z"/>` },
  { id: "cable-car", name: "Cable Car", category: "Transport2", tags: ["transport", "lift"], body: `<path d="M2 4l20 0M5 4v3h14V4M5 7v13h14V7M9 13h6M9 17h6"/>` },
  { id: "metro", name: "Metro", category: "Transport2", tags: ["train", "subway"], body: `<rect x="4" y="3" width="16" height="14" rx="3"/><path d="M4 11h16M8 7h2M14 7h2M7 21l2-3M17 21l-2-3"/>` },
  { id: "tram", name: "Tram", category: "Transport2", tags: ["transport", "rail"], body: `<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 11h18M8 7h2M14 7h2M8 18v3M16 18v3M12 2v2"/>` },
  { id: "horse-ride", name: "Horse Ride", category: "Transport2", tags: ["horse", "ride"], body: `<path d="M3 18c2 0 4-2 4-4l2-4c1-1 3-1 4 0l4 4c1 1 1 2 0 3M14 9V5M3 18v2M21 18v2M16 4l1-1"/>` },
  { id: "bicycle-2", name: "Bicycle 2", category: "Transport2", tags: ["cycle", "bike"], body: `<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-7h6l-3 7M10 10l-2-3h-2M14 10l2-3M10 10l4 7"/>` },
  { id: "segway", name: "Segway", category: "Transport2", tags: ["electric", "ride"], body: `<circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 17V8h12v9M12 8V4M10 5h4"/>` },
  { id: "gondola", name: "Gondola", category: "Transport2", tags: ["cable", "ski"], body: `<path d="M2 5h20M5 5v3h14V5M5 8v12h14V8M9 14h6M9 17h6"/>` },
  { id: "hoverboard", name: "Hoverboard", category: "Transport2", tags: ["electric", "future"], body: `<rect x="2" y="9" width="20" height="6" rx="3"/><circle cx="6" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1" fill="currentColor" stroke="none"/>` },
  { id: "unicycle", name: "Unicycle", category: "Transport2", tags: ["cycle", "one"], body: `<circle cx="12" cy="18" r="4"/><path d="M12 14V4M9 4h6M9 8h6"/>` },
  { id: "skis", name: "Skis", category: "Transport2", tags: ["ski", "snow"], body: `<path d="M3 21l18-3M5 20l-1 1M19 18l-1 1M10 18l-1-7 4-2-2 7M13 9l1-3"/>` },

  // ─── WEATHER 4 (10) ───
  { id: "sun-hot", name: "Hot Sun", category: "Weather4", tags: ["summer", "hot"], body: `<circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2M3 3h0.1M21 3h0.1"/>` },
  { id: "cold", name: "Cold", category: "Weather4", tags: ["winter", "freeze"], body: `<path d="M12 3v18M3 8l9 5 9-5M3 16l9-5 9 5M3 8v8M21 8v8"/>` },
  { id: "humid", name: "Humid", category: "Weather4", tags: ["moist", "wet"], body: `<circle cx="12" cy="15" r="6"/><path d="M9 9c0-2 1-3 3-3M14 9c0-2 1-3 3-3M5 9c0-2 1-3 3-3"/>` },
  { id: "windy-2", name: "Strong Wind", category: "Weather4", tags: ["gust", "storm"], body: `<path d="M3 8h12a3 3 0 1 0-3-3M3 16h16a3 3 0 1 1-3 3M3 12h8"/>` },
  { id: "storm", name: "Storm", category: "Weather4", tags: ["thunder", "rain"], body: `<path d="M7 14a5 5 0 0 1-1-9.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><path d="M13 14l-3 5h3l-2 4"/>` },
  { id: "blizzard", name: "Blizzard", category: "Weather4", tags: ["snow", "wind"], body: `<path d="M3 8h18M3 12h14M5 16h14M3 20h10"/><circle cx="20" cy="20" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "monsoon", name: "Monsoon", category: "Weather4", tags: ["rain", "season"], body: `<path d="M7 12a5 5 0 0 1-1-9.9A6 6 0 0 1 18 3a4 4 0 0 1 1 7.9"/><path d="M9 17l-1 3M13 17l-1 3M17 17l-1 3"/>` },
  { id: "drought", name: "Drought", category: "Weather4", tags: ["dry", "hot"], body: `<circle cx="12" cy="9" r="4"/><path d="M12 13v8M8 17h8M5 21h14"/>` },
  { id: "foggy", name: "Foggy", category: "Weather4", tags: ["mist", "low"], body: `<path d="M3 6h18M3 10h14M5 14h14M3 18h10M7 22h14"/>` },
  { id: "drizzle", name: "Drizzle", category: "Weather4", tags: ["light", "rain"], body: `<path d="M7 14a5 5 0 0 1-1-9.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><path d="M10 18l-0.5 2M14 18l-0.5 2M18 18l-0.5 2"/>` },

  // ─── MEDICAL 3 (10) ───
  { id: "x-ray", name: "X-Ray", category: "Medical3", tags: ["scan", "bone"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 3v18M9 7c0 2-1 3-1 5M15 7c0 2 1 3 1 5M9 16c0 2 1 3 3 3s3-1 3-3"/>` },
  { id: "scan", name: "CT Scan", category: "Medical3", tags: ["scan", "medical"], body: `<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 12h18M8 6V18M16 6V18"/>` },
  { id: "surgery", name: "Surgery", category: "Medical3", tags: ["operation", "medical"], body: `<path d="M3 21l6-6M14 4l6 6-9 9-6-6zM9 10l3 3M11 8l3 3"/>` },
  { id: "checkup", name: "Checkup", category: "Medical3", tags: ["health", "exam"], body: `<circle cx="12" cy="6" r="3"/><path d="M9 9l-3 8 4 4M15 9l3 8-4 4M8 21h8M12 12v6"/>` },
  { id: "dental", name: "Dental Care", category: "Medical3", tags: ["teeth", "dental"], body: `<path d="M12 4c-4 0-6 2-6 5 0 4 2 4 2 8 0 2 1 3 2 3s1-3 2-3 1 3 2 3 2-1 2-3c0-4 2-4 2-8 0-3-2-5-6-5z"/>` },
  { id: "eye-clinic", name: "Eye Clinic", category: "Medical3", tags: ["optometry", "vision"], body: `<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/>` },
  { id: "ear-clinic", name: "Ear Clinic", category: "Medical3", tags: ["hearing", "ent"], body: `<path d="M7 18a4 4 0 0 1 0-8V6a3 3 0 0 1 6 0v3a4 4 0 0 1 4 4M12 9h3"/>` },
  { id: "blood-test", name: "Blood Test", category: "Medical3", tags: ["lab", "blood"], body: `<rect x="9" y="3" width="6" height="14" rx="3"/><path d="M9 11h6M9 14h6M12 17v4M9 21h6"/>` },
  { id: "pharmacy", name: "Pharmacy", category: "Medical3", tags: ["medicine", "store"], body: `<rect x="3" y="4" width="18" height="17" rx="1"/><path d="M3 9h18M11 13l2 2 4-4"/>` },
  { id: "fitness-check", name: "Fitness Check", category: "Medical3", tags: ["health", "fit"], body: `<path d="M3 12h4l2-7 4 14 2-7h6"/>` },

  // ─── EDUCATION 2 (10) ───
  { id: "blackboard", name: "Blackboard", category: "Education2", tags: ["teach", "class"], body: `<rect x="2" y="4" width="20" height="13" rx="1"/><path d="M2 17l-1 4M22 17l1 4M5 21h14M9 8h6M9 11h4"/>` },
  { id: "textbook", name: "Textbook", category: "Education2", tags: ["book", "study"], body: `<path d="M5 4h12a3 3 0 0 1 3 3v14H8a3 3 0 0 1-3-3z"/><path d="M5 4a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3M9 8h7M9 11h7"/>` },
  { id: "notebook-edu", name: "Notebook", category: "Education2", tags: ["notes", "study"], body: `<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 3v18M3 8h4M3 12h4M3 16h4"/>` },
  { id: "exam", name: "Exam Paper", category: "Education2", tags: ["test", "paper"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h8M8 11h8M8 15h5M14 18l1-1 2 2 3-3"/>` },
  { id: "graduation-cap", name: "Graduation Cap", category: "Education2", tags: ["study", "school"], body: `<path d="M3 9l9-4 9 4-9 4zM7 11v5c0 1 2 2 5 2s5-1 5-2v-5M21 9v6"/>` },
  { id: "pencil-ruler", name: "Pencil & Ruler", category: "Education2", tags: ["tools", "school"], body: `<path d="M14 4l6 6L8 22H2v-6zM11 7l6 6"/><rect x="2" y="9" width="6" height="20" rx="1" transform="rotate(-15 5 19)"/>` },
  { id: "school-bus", name: "School Bus", category: "Education2", tags: ["transport", "kids"], body: `<rect x="3" y="5" width="18" height="13" rx="2"/><path d="M3 12h18M7 18v3M17 18v3M8 8h2M12 8h2M16 8h0M8 21h2M14 21h2"/>` },
  { id: "dictionary", name: "Dictionary", category: "Education2", tags: ["words", "language"], body: `<path d="M5 4h14v16H5zM5 4a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3M9 8l2 5 2-5M9 14h4"/>` },
  { id: "abacus", name: "Abacus", category: "Education2", tags: ["math", "count"], body: `<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M3 14h18M8 4v5M14 9v5M10 14v6M16 14v6"/>` },
  { id: "globe-edu", name: "Geography Globe", category: "Education2", tags: ["world", "earth"], body: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M5 5c4 4 4 10 0 14M19 5c-4 4-4 10 0 14"/>` },

  // ─── HOME APPLIANCES (10) ───
  { id: "washing-machine", name: "Washing Machine", category: "Appliances", tags: ["laundry", "wash"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><circle cx="12" cy="14" r="5"/><circle cx="12" cy="14" r="2"/><path d="M7 6h2M14 6h3"/>` },
  { id: "dryer", name: "Dryer", category: "Appliances", tags: ["laundry", "dry"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><circle cx="12" cy="14" r="5"/><path d="M9 14h6M12 11v6M7 6h2"/>` },
  { id: "oven", name: "Oven", category: "Appliances", tags: ["bake", "kitchen"], body: `<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M6 7h0.1M9 7h0.1M5 14h14v4H5z"/>` },
  { id: "microwave", name: "Microwave", category: "Appliances", tags: ["heat", "kitchen"], body: `<rect x="2" y="6" width="20" height="12" rx="1"/><rect x="4" y="8" width="11" height="8"/><path d="M17 10v2M17 13v2"/>` },
  { id: "blender", name: "Blender", category: "Appliances", tags: ["mix", "kitchen"], body: `<rect x="9" y="3" width="8" height="10" rx="1"/><rect x="6" y="13" width="14" height="7" rx="1"/><path d="M12 6v4M14 6v4M9 16h8"/>` },
  { id: "toaster", name: "Toaster", category: "Appliances", tags: ["toast", "bread"], body: `<rect x="3" y="8" width="18" height="11" rx="2"/><path d="M7 8V5M17 8V5M6 12h2M6 15h2"/>` },
  { id: "vacuum", name: "Vacuum", category: "Appliances", tags: ["clean", "home"], body: `<circle cx="6" cy="18" r="3"/><path d="M6 15V8l8-3v6M14 11h6"/>` },
  { id: "iron", name: "Iron", category: "Appliances", tags: ["press", "cloth"], body: `<path d="M3 18l3-9h14l1 9z"/><path d="M6 9V7h12v2M10 14h4"/>` },
  { id: "fan-appliance", name: "Ceiling Fan", category: "Appliances", tags: ["cool", "air"], body: `<circle cx="12" cy="12" r="2"/><path d="M12 12c-3-3-5-3-8 0 3 3 5 3 8 0zM12 12c3-3 3-5 0-8-3 3-3 5 0 8zM12 12c3 3 5 3 8 0-3-3-5-3-8 0zM12 12c-3 3-3 5 0 8 3-3 3-5 0-8z"/>` },
  { id: "coffee-machine", name: "Coffee Machine", category: "Appliances", tags: ["coffee", "brew"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 9h8v3a4 4 0 0 1-8 0zM12 15v3M9 21h6M8 6h8"/>` },

  // ─── GAMING 2 (12) ───
  { id: "arcade", name: "Arcade Machine", category: "Gaming2", tags: ["retro", "arcade"], body: `<rect x="3" y="2" width="18" height="20" rx="2"/><rect x="5" y="4" width="14" height="10" rx="1"/><path d="M7 18h2M11 18h2M15 18h2M9 21h6"/>` },
  { id: "chess", name: "Chess Piece", category: "Gaming2", tags: ["king", "chess"], body: `<path d="M12 3l-1 2-2-1 1 2-2 1 2 1-1 2 2-1 1 1 1-1 2 1-1-2 2-1-2-1 1-2-2 1zM8 11v3l-2 7h12l-2-7v-3z"/>` },
  { id: "playing-card", name: "Playing Card", category: "Gaming2", tags: ["card", "game"], body: `<rect x="6" y="2" width="12" height="20" rx="1"/><path d="M9 6h0M15 18h0M12 10l-2 4h4z"/>` },
  { id: "poker-chip", name: "Poker Chip", category: "Gaming2", tags: ["casino", "chip"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/><path d="M3 12h3M18 12h3M12 3v3M12 18v3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>` },
  { id: "roulette", name: "Roulette", category: "Gaming2", tags: ["casino", "wheel"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="1"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>` },
  { id: "slot-machine", name: "Slot Machine", category: "Gaming2", tags: ["casino", "slots"], body: `<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="5" y="6" width="5" height="6"/><rect x="12" y="6" width="5" height="6"/><path d="M5 16h14M5 19h14"/>` },
  { id: "controller-2", name: "Game Controller 2", category: "Gaming2", tags: ["gamepad", "play"], body: `<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M6 11v3M5 12h2M15 11h0.1M17 13h0.1"/>` },
  { id: "racing-wheel", name: "Racing Wheel", category: "Gaming2", tags: ["racing", "drive"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M3 12h6M21 12h-6M12 21v-6"/>` },
  { id: "victory", name: "Victory Hand", category: "Gaming2", tags: ["win", "peace"], body: `<path d="M9 21V8a2 2 0 0 1 4 0M13 8V5a2 2 0 0 1 4 0v3M17 8V7a2 2 0 0 1 4 0v8a6 6 0 0 1-6 6h-2a4 4 0 0 1-4-4l-2-5"/>` },
  { id: "level-up", name: "Level Up", category: "Gaming2", tags: ["progress", "level"], body: `<path d="M3 21l9-9 9 9M3 13l9-9 9 9M3 5l9-9 9 9"/>` },
  { id: "boss", name: "Boss Enemy", category: "Gaming2", tags: ["boss", "enemy"], body: `<circle cx="12" cy="12" r="7"/><path d="M5 5L3 3M19 5l2-2M5 19l-2 2M19 19l2 2M9 10l-1-1M15 10l1-1M9 14h6"/>` },
  { id: "achievement", name: "Achievement", category: "Gaming2", tags: ["trophy", "badge"], body: `<circle cx="12" cy="10" r="6"/><path d="M9 16l-1 5h8l-1-5M9 21h6M9 10l2 2 4-4"/>` },

  // ─── OFFICE 3 (12) ───
  { id: "desk-lamp", name: "Desk Lamp", category: "Office3", tags: ["light", "desk"], body: `<path d="M9 3h6l3 8H6zM12 11v6M8 21h8M9 17h6"/>` },
  { id: "office-chair", name: "Office Chair", category: "Office3", tags: ["seat", "office"], body: `<path d="M6 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3M9 16v5M15 16v5M7 21h10"/>` },
  { id: "monitor-arm", name: "Monitor Arm", category: "Office3", tags: ["mount", "screen"], body: `<rect x="2" y="4" width="20" height="12" rx="1"/><path d="M2 16h20M12 16v5M8 21h8"/>` },
  { id: "file-cabinet", name: "File Cabinet", category: "Office3", tags: ["storage", "files"], body: `<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M5 8h14M5 14h14M9 5h2M9 11h2M9 17h2"/>` },
  { id: "clipboard", name: "Clipboard", category: "Office3", tags: ["notes", "write"], body: `<rect x="5" y="3" width="14" height="18" rx="1"/><rect x="8" y="2" width="8" height="3" rx="1"/><path d="M9 9h6M9 13h6M9 17h3"/>` },
  { id: "notepad", name: "Notepad", category: "Office3", tags: ["notes", "write"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M7 7h10M7 11h10M7 15h6"/>` },
  { id: "calculator-3", name: "Calculator 3", category: "Office3", tags: ["math", "calc"], body: `<rect x="5" y="2" width="14" height="20" rx="1"/><rect x="8" y="5" width="8" height="3"/><circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="16" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="16" r="1" fill="currentColor" stroke="none"/>` },
  { id: "headset", name: "Headset", category: "Office3", tags: ["call", "audio"], body: `<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M19 20v1a3 3 0 0 1-3 3h-4"/>` },
  { id: "office-phone", name: "Office Phone", category: "Office3", tags: ["call", "office"], body: `<rect x="3" y="3" width="18" height="14" rx="1"/><rect x="5" y="5" width="14" height="3"/><circle cx="8" cy="12" r="0.8" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/><circle cx="16" cy="12" r="0.8" fill="currentColor" stroke="none"/><path d="M9 21h6M12 17v4"/>` },
  { id: "fax", name: "Fax Machine", category: "Office3", tags: ["office", "send"], body: `<rect x="3" y="6" width="18" height="12" rx="1"/><rect x="5" y="3" width="14" height="3"/><path d="M5 10h14M5 13h14M5 16h14M3 18v3h18v-3"/>` },
  { id: "shredder", name: "Paper Shredder", category: "Office3", tags: ["destroy", "paper"], body: `<rect x="3" y="8" width="18" height="8" rx="1"/><rect x="5" y="3" width="14" height="5"/><path d="M7 16v5M10 16v5M13 16v5M16 16v5"/>` },
  { id: "whiteboard-marker", name: "Whiteboard Marker", category: "Office3", tags: ["marker", "write"], body: `<rect x="6" y="8" width="12" height="10" rx="1"/><path d="M8 8V4h8v4M8 18v3h8v-3M9 12h6"/>` },

  // ─── PROFESSIONS (12) ───
  { id: "doctor", name: "Doctor", category: "Professions", tags: ["medical", "doctor"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M7 16h10M11 14h2"/>` },
  { id: "engineer", name: "Engineer", category: "Professions", tags: ["build", "engineer"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M9 14l3 2 3-2"/>` },
  { id: "chef", name: "Chef", category: "Professions", tags: ["cook", "chef"], body: `<path d="M5 21V11a4 4 0 0 1 8 0 4 4 0 0 1 6 0v10M5 21h14M8 4c-2 1-3 3-3 5M16 4c2 1 3 3 3 5"/>` },
  { id: "lawyer", name: "Lawyer", category: "Professions", tags: ["law", "judge"], body: `<path d="M3 21h18M5 21V11l7-7 7 7v10M5 11h14M9 21V14h6v7M11 7h2"/>` },
  { id: "teacher", name: "Teacher", category: "Professions", tags: ["teach", "education"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M5 14l-2 2M19 14l2 2M9 16h6"/>` },
  { id: "scientist", name: "Scientist", category: "Professions", tags: ["science", "research"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M9 14c1 1 5 1 6 0M10 8c0 2 4 2 4 0"/>` },
  { id: "artist", name: "Artist", category: "Professions", tags: ["paint", "art"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M9 14c1-1 5-1 6 0M5 9l-2-1M19 9l2-1"/>` },
  { id: "pilot", name: "Pilot", category: "Professions", tags: ["fly", "pilot"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M5 14l-2 1M19 14l2 1M9 14l3 2 3-2"/>` },
  { id: "farmer", name: "Farmer", category: "Professions", tags: ["farm", "agriculture"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M5 14l-2-2M9 16l3-2 3 2"/>` },
  { id: "police", name: "Police", category: "Professions", tags: ["police", "protect"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M5 8l7-3 7 3M9 14h6"/>` },
  { id: "firefighter", name: "Firefighter", category: "Professions", tags: ["fire", "rescue"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M5 8l7-4 7 4M9 14l3 2 3-2"/>` },
  { id: "programmer", name: "Programmer", category: "Professions", tags: ["code", "dev"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M9 14l-2 2 2 2M15 14l2 2-2 2"/>` },

  // ─── TECH 2 (12) ───
  { id: "ai-brain", name: "AI Brain", category: "Tech2", tags: ["ai", "neural"], body: `<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 1 5 3 3 0 0 0 3 3V3zM15 3a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-1 5 3 3 0 0 1-3 3V3z"/>` },
  { id: "cloud-server", name: "Cloud Server", category: "Tech2", tags: ["cloud", "server"], body: `<path d="M7 14a4 4 0 0 1-1-7.9A6 6 0 0 1 18 5a4 4 0 0 1 1 7.9"/><rect x="3" y="14" width="18" height="7" rx="1"/><circle cx="7" cy="17.5" r="0.8" fill="currentColor" stroke="none"/><circle cx="11" cy="17.5" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "api-2", name: "API Endpoint", category: "Tech2", tags: ["api", "rest"], body: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l-2 3 2 3M17 9l2 3-2 3M13 7l-2 10"/>` },
  { id: "blockchain", name: "Blockchain", category: "Tech2", tags: ["block", "chain"], body: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6h4M10 17h4M6 10v4M17 10v4"/>` },
  { id: "database-2", name: "Database 2", category: "Tech2", tags: ["db", "storage"], body: `<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>` },
  { id: "qr-code", name: "QR Code", category: "Tech2", tags: ["scan", "qr"], body: `<rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><rect x="6" y="6" width="0" height="0"/><path d="M15 15h2v2M19 15h2v2M15 19h2v2M19 19h2v2"/>` },
  { id: "fingerprint-3", name: "Biometric", category: "Tech2", tags: ["scan", "bio"], body: `<path d="M3 12a9 9 0 0 1 18 0M6 12a6 6 0 0 1 12 0M9 12a3 3 0 0 1 6 0v3M12 12v6"/>` },
  { id: "shield-tech", name: "Tech Shield", category: "Tech2", tags: ["security", "tech"], body: `<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M9 12l2 2 4-4M5 5l14 14"/>` },
  { id: "code-window", name: "Code Window", category: "Tech2", tags: ["editor", "code"], body: `<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 8h18M6 6h0.1M8 6h0.1M10 6h0.1M7 12l-2 2 2 2M13 12l2 2-2 2M11 11l2 6"/>` },
  { id: "terminal-2", name: "Terminal 2", category: "Tech2", tags: ["shell", "command"], body: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4M3 8h18"/>` },
  { id: "git-branch", name: "Git Branch", category: "Tech2", tags: ["git", "version"], body: `<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 8v8M8 6a4 4 0 0 1 4 4v0a4 4 0 0 0 4 2"/>` },
  { id: "docker", name: "Container", category: "Tech2", tags: ["docker", "deploy"], body: `<rect x="3" y="9" width="4" height="4"/><rect x="8" y="9" width="4" height="4"/><rect x="13" y="9" width="4" height="4"/><rect x="8" y="4" width="4" height="4"/><path d="M3 13c0 4 3 6 7 6 5 0 9-3 11-7-2 1-4 0-5-1"/>` },

  // ─── RELIGION 3 (8) ───
  { id: "buddha", name: "Buddha", category: "Religion3", tags: ["buddhism", "peace"], body: `<circle cx="12" cy="5" r="3"/><path d="M8 21c0-4 2-7 4-7s4 3 4 7M6 10c2 0 4 1 6 1s4-1 6-1M9 7c1 1 5 1 6 0"/>` },
  { id: "prayer-beads", name: "Prayer Beads", category: "Religion3", tags: ["rosary", "prayer"], body: `<circle cx="12" cy="3" r="2"/><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="20" cy="12" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/><circle cx="12" cy="21" r="1.5"/><path d="M12 5L6 6 4 12 6 18 12 21 18 18 20 12 18 6 12 5"/>` },
  { id: "candle-2", name: "Prayer Candle", category: "Religion3", tags: ["candle", "prayer"], body: `<path d="M12 3c-1 1-2 2-2 3a2 2 0 0 0 4 0c0-1-1-2-2-3z"/><rect x="9" y="9" width="6" height="12" rx="1"/><path d="M7 21h10"/>` },
  { id: "incense-2", name: "Incense Burner", category: "Religion3", tags: ["incense", "ritual"], body: `<path d="M5 21h14M7 21v-5h10v5M9 16V8M12 16V6M15 16V8M9 4l1-2M12 3l1-2M15 4l1-2"/>` },
  { id: "temple", name: "Temple", category: "Religion3", tags: ["hindu", "temple"], body: `<path d="M3 21V14l9-9 9 9v7M3 21h18M7 21v-5h10v5M9 16h6M12 5V2M11 3h2"/>` },
  { id: "mosque-2", name: "Mosque", category: "Religion3", tags: ["islam", "mosque"], body: `<path d="M3 21V12l9-7 9 7v9M3 21h18M9 21v-5h6v5M12 5V1M11 2h2"/>` },
  { id: "synagogue", name: "Synagogue", category: "Religion3", tags: ["jewish", "synagogue"], body: `<path d="M3 21V11l9-7 9 7v10M3 21h18M9 21V14h6v7M11 6l1-1 1 1M10 5h2M14 5h-2"/>` },
  { id: "meditation-2", name: "Meditation Pose", category: "Religion3", tags: ["yoga", "meditate"], body: `<circle cx="12" cy="5" r="2"/><path d="M7 18h10M6 14c2 0 4-1 6-1s4 1 6 1M12 7v6"/>` },

  // ─── SPACE 2 (10) ───
  { id: "mars", name: "Mars", category: "Space2", tags: ["planet", "red"], body: `<circle cx="12" cy="12" r="9"/><path d="M6 10c2-1 4 0 5 2M14 8c2 0 4 1 5 3M8 16c2-1 4-1 6 0"/>` },
  { id: "jupiter", name: "Jupiter", category: "Space2", tags: ["planet", "gas"], body: `<circle cx="12" cy="12" r="9"/><path d="M5 9h14M5 12h14M5 15h14M9 6c-1 2-1 4 0 6M15 6c1 2 1 4 0 6"/>` },
  { id: "asteroid", name: "Asteroid", category: "Space2", tags: ["rock", "space"], body: `<path d="M5 12c0-3 3-6 6-6s6 2 7 5c0 3-2 7-6 7s-7-3-7-6z"/><circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="13" cy="13" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "black-hole", name: "Black Hole", category: "Space2", tags: ["space", "void"], body: `<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/>` },
  { id: "comet-2", name: "Comet 2", category: "Space2", tags: ["space", "tail"], body: `<circle cx="17" cy="7" r="3"/><path d="M15 9L4 20M13 7L3 17M17 11l-7 7"/>` },
  { id: "space-station", name: "Space Station", category: "Space2", tags: ["iss", "orbit"], body: `<rect x="8" y="10" width="8" height="4" rx="1"/><rect x="2" y="11" width="4" height="2"/><rect x="18" y="11" width="4" height="2"/><rect x="11" y="6" width="2" height="12"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>` },
  { id: "moon-lander", name: "Moon Lander", category: "Space2", tags: ["nasa", "moon"], body: `<path d="M5 14h14l-2-7H7zM7 14v5M17 14v5M5 19h4M15 19h4M9 7V4h6v3M11 4h2"/>` },
  { id: "astronaut", name: "Astronaut", category: "Space2", tags: ["space", "suit"], body: `<circle cx="12" cy="6" r="3"/><path d="M7 21V12a5 5 0 0 1 10 0v9M9 9c0 2 6 2 6 0M5 14l-2 2M19 14l2 2M9 14h6"/>` },
  { id: "nebula", name: "Nebula", category: "Space2", tags: ["space", "cloud"], body: `<circle cx="12" cy="12" r="3"/><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/><path d="M6 8l6 4M18 8l-6 4M8 17l4-5M16 17l-4-5"/>` },
  { id: "wormhole", name: "Wormhole", category: "Space2", tags: ["portal", "space"], body: `<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/>` },

  // ─── HOBBIES (12) ───
  { id: "knitting", name: "Knitting", category: "Hobbies", tags: ["yarn", "craft"], body: `<circle cx="6" cy="18" r="4"/><path d="M9 15L20 4M7 13l4 4M10 10l4 4M13 7l4 4"/>` },
  { id: "pottery", name: "Pottery", category: "Hobbies", tags: ["clay", "craft"], body: `<path d="M9 3h6v3l2 3v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-9l2-3zM7 6h10M9 12h6"/>` },
  { id: "origami", name: "Origami", category: "Hobbies", tags: ["paper", "fold"], body: `<path d="M3 21l9-9 9 9zM12 12L3 6l9-3 9 3z"/>` },
  { id: "stamps", name: "Stamp Collection", category: "Hobbies", tags: ["collect", "stamp"], body: `<path d="M3 4h2v2h2V4h2v2h2V4h2v2h2V4h2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2H7v2H5v-2H3v-2h2v-2H3v-2h2V8H3z"/>` },
  { id: "coins-collection", name: "Coin Collection", category: "Hobbies", tags: ["collect", "coin"], body: `<circle cx="8" cy="8" r="4"/><circle cx="16" cy="16" r="4"/><path d="M8 8h0M16 16h0"/>` },
  { id: "model-kit", name: "Model Kit", category: "Hobbies", tags: ["build", "model"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>` },
  { id: "puzzle-piece", name: "Puzzle Piece", category: "Hobbies", tags: ["puzzle", "fit"], body: `<path d="M9 3v3a2 2 0 0 1-4 0V6a3 3 0 0 0-1 6v3h4a2 2 0 0 1 0 4v3h8v-3a2 2 0 0 1 0-4h4v-8h-3a2 2 0 0 1 0-4V3z"/>` },
  { id: "card-trick", name: "Card Trick", category: "Hobbies", tags: ["magic", "card"], body: `<rect x="6" y="2" width="12" height="20" rx="1"/><path d="M12 7l-2 4h4zM12 13l-2 4h4z"/>` },
  { id: "jigsaw", name: "Jigsaw", category: "Hobbies", tags: ["puzzle", "game"], body: `<path d="M3 3h8v3a2 2 0 0 0 4 0V3h6v8h-3a2 2 0 0 0 0 4h3v6h-8v-3a2 2 0 0 0-4 0v3H3v-8h3a2 2 0 0 0 0-4H3z"/>` },
  { id: "rc-car", name: "RC Car", category: "Hobbies", tags: ["remote", "toy"], body: `<path d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5v5h-3v-2H6v2H3z"/><circle cx="7" cy="15" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="15" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "drone", name: "Drone", category: "Hobbies", tags: ["fly", "camera"], body: `<rect x="9" y="9" width="6" height="6" rx="1"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><path d="M9 9L4 6M15 9l5-3M9 15l-5 3M15 15l5 3"/>` },
  { id: "kite", name: "Kite", category: "Hobbies", tags: ["fly", "wind"], body: `<path d="M12 3l8 8-8 8-8-8zM12 3v18M4 11h16M12 21l-3 3M12 21l3 3"/>` },

  // ─── BUILDINGS 3 (10) ───
  { id: "apartment", name: "Apartment", category: "Buildings3", tags: ["home", "flat"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>` },
  { id: "villa", name: "Villa", category: "Buildings3", tags: ["house", "luxury"], body: `<path d="M3 21V11l9-7 9 7v10M3 21h18M7 21V12h10v9M9 14h2M13 14h2M11 21v-3h2v3"/>` },
  { id: "cottage", name: "Cottage", category: "Buildings3", tags: ["small", "house"], body: `<path d="M3 21V13l6-5 6 5v8M3 21h18M9 13v8M9 21v-3h3v3M15 13l3-3 3 3v8h-6z"/>` },
  { id: "skyscraper-2", name: "Skyscraper 2", category: "Buildings3", tags: ["tall", "city"], body: `<rect x="6" y="3" width="12" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>` },
  { id: "mall-2", name: "Mall", category: "Buildings3", tags: ["shop", "complex"], body: `<rect x="3" y="6" width="18" height="15" rx="1"/><path d="M3 6l3-3h12l3 3M6 21v-7h4v7M14 21v-7h4v7M8 10h2M14 10h2"/>` },
  { id: "tower-2", name: "TV Tower", category: "Buildings3", tags: ["signal", "tall"], body: `<path d="M9 21V8l3-5 3 5v13M9 21h6M10 11h4M10 15h4M11 5h2"/>` },
  { id: "castle-2", name: "Castle", category: "Buildings3", tags: ["fortress", "royal"], body: `<path d="M3 21V10l3-2v2l3-2v2l3-2v2l3-2v2l3-2v11zM3 21h18M9 21v-3h6v3M5 6V4M9 6V4M15 6V4M19 6V4"/>` },
  { id: "barn", name: "Barn", category: "Buildings3", tags: ["farm", "rural"], body: `<path d="M3 21V11l9-6 9 6v10M3 21h18M9 21v-5h6v5M7 14h10"/>` },
  { id: "greenhouse", name: "Greenhouse", category: "Buildings3", tags: ["garden", "glass"], body: `<path d="M3 21V8l9-5 9 5v13M3 21h18M7 21V12h10v9M3 14h18M3 17h18"/>` },
  { id: "igloo", name: "Igloo", category: "Buildings3", tags: ["snow", "arctic"], body: `<path d="M3 21a9 9 0 0 1 18 0M3 21h18M9 21v-4a3 3 0 0 1 6 0v4M5 17h14M7 13h10"/>` },

  // ─── BEAUTY (10) ───
  { id: "lipstick", name: "Lipstick", category: "Beauty", tags: ["makeup", "lips"], body: `<rect x="8" y="9" width="8" height="12" rx="1"/><path d="M9 9V4l6 1v4M8 21h8"/>` },
  { id: "mascara", name: "Mascara", category: "Beauty", tags: ["makeup", "eyes"], body: `<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h6M9 11h6M9 15h6"/>` },
  { id: "perfume", name: "Perfume", category: "Beauty", tags: ["fragrance", "spray"], body: `<rect x="6" y="9" width="12" height="12" rx="1"/><path d="M9 9V6h6v3M11 6V3h2v3M8 6h8"/>` },
  { id: "nail-polish", name: "Nail Polish", category: "Beauty", tags: ["nails", "color"], body: `<rect x="9" y="6" width="6" height="15" rx="1"/><rect x="10" y="3" width="4" height="3"/><path d="M11 10h2M11 13h2M11 16h2"/>` },
  { id: "compact", name: "Compact Powder", category: "Beauty", tags: ["makeup", "powder"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M3 12a9 9 0 0 0 9-9v9z"/>` },
  { id: "hairbrush", name: "Hairbrush", category: "Beauty", tags: ["hair", "brush"], body: `<rect x="3" y="9" width="14" height="6" rx="1"/><path d="M17 12h4M5 9V7M8 9V7M11 9V7M14 9V7M5 15v2M8 15v2M11 15v2M14 15v2"/>` },
  { id: "razor", name: "Razor", category: "Beauty", tags: ["shave", "groom"], body: `<rect x="5" y="3" width="14" height="6" rx="1"/><path d="M5 9v3M19 9v3M12 12v9M9 21h6M7 6h2M11 6h2M15 6h2"/>` },
  { id: "comb", name: "Comb", category: "Beauty", tags: ["hair", "groom"], body: `<rect x="3" y="9" width="18" height="3" rx="1"/><path d="M5 12v5M8 12v5M11 12v5M14 12v5M17 12v5M20 12v5"/>` },
  { id: "cream", name: "Face Cream", category: "Beauty", tags: ["skincare", "lotion"], body: `<rect x="6" y="6" width="12" height="15" rx="1"/><rect x="8" y="3" width="8" height="3"/><path d="M9 12h6M9 15h6M9 18h6"/>` },
  { id: "mirror-2", name: "Hand Mirror", category: "Beauty", tags: ["reflection", "vanity"], body: `<ellipse cx="12" cy="8" rx="6" ry="7"/><path d="M12 15v6M9 21h6"/>` },

  // ─── ENGINEERING (10) ───
  { id: "gear", name: "Gear", category: "Engineering", tags: ["mechanical", "gear"], body: `<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>` },
  { id: "cog", name: "Cog", category: "Engineering", tags: ["machine", "cog"], body: `<circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2"/><path d="M12 3l1 3M12 21l-1-3M3 12l3-1M21 12l-3 1M5 5l3 1M19 19l-3-1M19 5l-3 1M5 19l3-1"/>` },
  { id: "spring", name: "Spring", category: "Engineering", tags: ["coil", "mechanical"], body: `<path d="M5 3c4 0 4 3 0 6s-4 3 0 6 4 3 0 6M19 3c-4 0-4 3 0 6s4 3 0 6-4 3 0 6"/>` },
  { id: "bolt-nut", name: "Bolt & Nut", category: "Engineering", tags: ["hardware", "fastener"], body: `<path d="M12 3l-7 4v10l7 4 7-4V7z"/><circle cx="12" cy="12" r="3"/>` },
  { id: "bearing", name: "Bearing", category: "Engineering", tags: ["mechanical", "ball"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/>` },
  { id: "valve", name: "Valve", category: "Engineering", tags: ["pipe", "flow"], body: `<path d="M3 9h4l2 2h6l2-2h4M9 11v6M15 11v6M9 17h6"/>` },
  { id: "pipe", name: "Pipe", category: "Engineering", tags: ["plumbing", "pipe"], body: `<path d="M3 3v6a4 4 0 0 0 4 4h10a4 4 0 0 1 4 4v4M3 9h4v4M17 13h4v4"/>` },
  { id: "engine", name: "Engine", category: "Engineering", tags: ["motor", "power"], body: `<rect x="4" y="8" width="16" height="10" rx="1"/><path d="M4 11h-2v4h2M20 11h2v4h-2M8 8V5h6v3M8 18v2h8v-2M8 13h2M14 13h2"/>` },
  { id: "turbine", name: "Turbine", category: "Engineering", tags: ["power", "wind"], body: `<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4-2-7-4-7s-3 3 0 5M14 12c4 0 7-2 7-4s-3-3-5 0M12 14c0 4 2 7 4 7s3-3 0-5M10 12c-4 0-7 2-7 4s3 3 5 0"/>` },
  { id: "circuit-board", name: "Circuit Board", category: "Engineering", tags: ["pcb", "electronics"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M6 6h3v3M15 6h3v3M6 15h3v3M15 15h3v3M9 9h6v6H9z"/>` },

  // ─── CAMPING 2 (8) ───
  { id: "campfire", name: "Campfire", category: "Camping2", tags: ["fire", "outdoor"], body: `<path d="M12 14c-3-3-3-7 0-11 3 4 3 8 0 11z"/><path d="M5 21l3-7M19 21l-3-7M9 21l3-5 3 5M3 21h18"/>` },
  { id: "compass-camp", name: "Camping Compass", category: "Camping2", tags: ["direction", "navigate"], body: `<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6z"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>` },
  { id: "backpack", name: "Backpack", category: "Camping2", tags: ["bag", "travel"], body: `<path d="M5 21V8a5 5 0 0 1 10 0v13M5 21h14M9 21V11h6v10M7 8c-2 0-3-2-3-4M17 8c2 0 3-2 3-4"/>` },
  { id: "lantern", name: "Lantern", category: "Camping2", tags: ["light", "camp"], body: `<path d="M8 21V9a4 4 0 0 1 8 0v12M8 21h8M8 9V5h8v4M10 5V2h4v3M9 13h6M9 17h6"/>` },
  { id: "sleeping-bag", name: "Sleeping Bag", category: "Camping2", tags: ["sleep", "camp"], body: `<path d="M7 21V8a5 5 0 0 1 10 0v13M7 21h10M9 21V12a3 3 0 0 1 6 0v9M11 9h2"/>` },
  { id: "hiking-boot", name: "Hiking Boot", category: "Camping2", tags: ["shoe", "trek"], body: `<path d="M3 18V8l5-2v6l4-1 4 2v5M3 18h18M3 18v3h18v-3M9 11l3-1"/>` },
  { id: "map-folded", name: "Folded Map", category: "Camping2", tags: ["navigate", "paper"], body: `<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"/>` },
  { id: "binoculars-2", name: "Binoculars 2", category: "Camping2", tags: ["view", "observe"], body: `<circle cx="6" cy="8" r="3"/><circle cx="18" cy="8" r="3"/><path d="M6 11v8M18 11v8M6 19h12M9 8h0.1M15 8h0.1"/>` },

  // ─── FITNESS 2 (8) ───
  { id: "treadmill", name: "Treadmill", category: "Fitness2", tags: ["run", "gym"], body: `<path d="M3 21V11l4-2 4 2 4-4 4 2v12M3 21h18M3 18h18M7 9V4"/>` },
  { id: "kettlebell", name: "Kettlebell", category: "Fitness2", tags: ["weight", "gym"], body: `<circle cx="12" cy="14" r="6"/><path d="M9 8a3 3 0 0 1 6 0M9 8V6a3 3 0 0 1 6 0v2"/>` },
  { id: "pullup-bar", name: "Pull-up Bar", category: "Fitness2", tags: ["gym", "upper"], body: `<rect x="2" y="4" width="20" height="3" rx="1"/><path d="M6 7v6a3 3 0 0 0 6 0V7M18 7v6a3 3 0 0 0 6 0M6 13v8M18 13v8"/>` },
  { id: "yoga-mat", name: "Yoga Mat", category: "Fitness2", tags: ["yoga", "roll"], body: `<rect x="3" y="9" width="18" height="6" rx="1"/><circle cx="5" cy="12" r="1.5"/>` },
  { id: "jump-rope", name: "Jump Rope", category: "Fitness2", tags: ["cardio", "rope"], body: `<path d="M5 3v6a7 7 0 0 0 14 0V3M5 21v-6M19 21v-6M5 9h14"/>` },
  { id: "exercise-ball", name: "Exercise Ball", category: "Fitness2", tags: ["stability", "gym"], body: `<circle cx="12" cy="14" r="7"/><path d="M5 11h14M5 17h14M8 8c2 2 8 2 8 0"/>` },
  { id: "resistance-band", name: "Resistance Band", category: "Fitness2", tags: ["stretch", "band"], body: `<path d="M3 3c4 4 14 4 18 0M3 21c4-4 14-4 18 0M3 3v18M21 3v18"/>` },
  { id: "weight-scale", name: "Weight Scale", category: "Fitness2", tags: ["measure", "weight"], body: `<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 12l2-2M9 8h0.1M15 8h0.1"/>` },

  // ─── FINANCE 2 (10) ───
  { id: "wallet-2", name: "Wallet", category: "Finance2", tags: ["money", "card"], body: `<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 8V5a2 2 0 0 1 2-2h12l3 3M16 12h3v3h-3z"/>` },
  { id: "bank-card", name: "Bank Card", category: "Finance2", tags: ["card", "pay"], body: `<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9h20M6 14h4M6 16h2M16 14h2"/>` },
  { id: "cash", name: "Cash", category: "Finance2", tags: ["money", "bill"], body: `<rect x="2" y="6" width="20" height="12" rx="1"/><circle cx="12" cy="12" r="3"/><path d="M6 9h0.1M18 9h0.1M6 15h0.1M18 15h0.1"/>` },
  { id: "coin-stack", name: "Coin Stack", category: "Finance2", tags: ["money", "coins"], body: `<ellipse cx="12" cy="6" rx="8" ry="2"/><path d="M4 6v4c0 1 4 2 8 2s8-1 8-2V6M4 10v4c0 1 4 2 8 2s8-1 8-2v-4M4 14v4c0 1 4 2 8 2s8-1 8-2v-4"/>` },
  { id: "savings", name: "Savings Piggy", category: "Finance2", tags: ["save", "pig"], body: `<path d="M3 12a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3a3 3 0 0 1-3 3h-1l-1 3h-2l-1-2h-4l-1 2H5l-1-3a3 3 0 0 1-1-3z"/><circle cx="8" cy="11" r="0.8" fill="currentColor" stroke="none"/>` },
  { id: "receipt-2", name: "Receipt 2", category: "Finance2", tags: ["bill", "invoice"], body: `<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 11h8M8 14h5"/>` },
  { id: "tax", name: "Tax Form", category: "Finance2", tags: ["tax", "document"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h8M8 11h8M8 15h4M14 17l1-1 2 2 3-3"/>` },
  { id: "invoice", name: "Invoice", category: "Finance2", tags: ["bill", "business"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h8M8 11h4M14 11h2M8 15h4M14 15h2M8 19h8"/>` },
  { id: "bitcoin-2", name: "Bitcoin 2", category: "Finance2", tags: ["btc", "crypto"], body: `<circle cx="12" cy="12" r="9"/><path d="M9 8h5a2 2 0 0 1 0 4H9zM9 12h6a2 2 0 0 1 0 4H9zM10 6v12M13 6v12"/>` },
  { id: "exchange", name: "Currency Exchange", category: "Finance2", tags: ["trade", "forex"], body: `<path d="M3 8h14l-3-3M3 8l3 3M21 16H7l3 3M21 16l-3-3"/>` },

  // ─── GARDEN 2 (8) ───
  { id: "watering-can", name: "Watering Can", category: "Garden2", tags: ["water", "plant"], body: `<path d="M5 21V10l4-3h5v14M5 21h12M9 7V4l5 1M14 14l3-2 2 2M14 17l3-1 2 1M14 11l4-1"/>` },
  { id: "shovel", name: "Shovel", category: "Garden2", tags: ["dig", "garden"], body: `<path d="M3 21l4-4M7 17L17 7M17 7l3-3M14 4l4 4-2 2-4-4z"/><path d="M14 4l-2 2 4 4 2-2z"/>` },
  { id: "rake", name: "Rake", category: "Garden2", tags: ["garden", "clean"], body: `<rect x="2" y="6" width="20" height="3" rx="1"/><path d="M4 9v5M8 9v5M12 9v5M16 9v5M20 9v5M12 14v7"/>` },
  { id: "wheelbarrow", name: "Wheelbarrow", category: "Garden2", tags: ["carry", "garden"], body: `<path d="M3 18l2-7h12l2 7M3 18h18M5 11l3-5h6M5 18l-2 3M14 18v3"/><circle cx="14" cy="20" r="2"/>` },
  { id: "seed-packet", name: "Seed Packet", category: "Garden2", tags: ["seed", "plant"], body: `<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M5 9h14M9 14c0 2 6 2 6 0"/>` },
  { id: "flower-pot", name: "Flower Pot", category: "Garden2", tags: ["pot", "plant"], body: `<path d="M7 21l-1-9h12l-1 9zM6 12c0-3 3-5 6-5s6 2 6 5M9 7c0-2 1-3 3-3s3 1 3 3"/>` },
  { id: "hose", name: "Garden Hose", category: "Garden2", tags: ["water", "flexible"], body: `<path d="M3 21c4 0 4-4 8-4s4 4 8 4M3 17c4 0 4-4 8-4s4 4 8 4M3 13c4 0 4-4 8-4s4 4 8 4"/>` },
  { id: "scarecrow", name: "Scarecrow", category: "Garden2", tags: ["field", "farm"], body: `<circle cx="12" cy="6" r="3"/><path d="M12 9v8M7 12l10 0M9 21l3-4 3 4M5 4l4 4M19 4l-4 4M9 6h0.1M15 6h0.1"/>` },

  // ─── TECH 3 (10) ───
  { id: "robot", name: "Robot", category: "Tech3", tags: ["ai", "bot"], body: `<rect x="5" y="6" width="14" height="12" rx="2"/><circle cx="9" cy="11" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="11" r="1.5" fill="currentColor" stroke="none"/><path d="M9 15h6M12 6V3M9 3h6M3 10v3M21 10v3"/>` },
  { id: "chip-2", name: "Microchip", category: "Tech3", tags: ["cpu", "chip"], body: `<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9" y="9" width="6" height="6"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"/>` },
  { id: "vr-headset", name: "VR Headset", category: "Tech3", tags: ["vr", "virtual"], body: `<rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/>` },
  { id: "smart-watch-2", name: "Smart Watch 2", category: "Tech3", tags: ["wearable", "device"], body: `<rect x="7" y="7" width="10" height="10" rx="3"/><path d="M9 7V3h6v4M9 17v4h6v-4M12 11v2l1 1"/>` },
  { id: "drone-2", name: "Delivery Drone", category: "Tech3", tags: ["fly", "delivery"], body: `<rect x="9" y="9" width="6" height="6" rx="1"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><path d="M9 9L4 6M15 9l5-3M9 15l-5 3M15 15l5 3M11 15v4h2v-4"/>` },
  { id: "ai-chat", name: "AI Chat", category: "Tech3", tags: ["ai", "chat"], body: `<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 9h10M7 12h6M7 15h4M3 18l3-2"/>` },
  { id: "cloud-storage", name: "Cloud Storage", category: "Tech3", tags: ["storage", "cloud"], body: `<path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 18 9a4 4 0 0 1 1 7.9"/><path d="M9 14l3-3 3 3M12 11v6"/>` },
  { id: "fingerprint-4", name: "Fingerprint Scan", category: "Tech3", tags: ["biometric", "scan"], body: `<path d="M3 12a9 9 0 0 1 18 0M6 12a6 6 0 0 1 12 0M9 12a3 3 0 0 1 6 0v3M12 12v6M3 9l2 1M21 9l-2 1M3 15l2-1M21 15l-2-1"/>` },
  { id: "circuit-2", name: "Circuit Board 2", category: "Tech3", tags: ["pcb", "tech"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M6 6h4v4M14 6h4v4M6 14h4v4M14 14h4v4M10 8h4M8 10v4M16 10v4M10 16h4"/>` },
  { id: "satellite-2", name: "Satellite Dish", category: "Tech3", tags: ["signal", "space"], body: `<path d="M5 21a9 9 0 0 1 9-9M5 17a5 5 0 0 1 5-5M9 21a5 5 0 0 1 5-5M5 21v-1a4 4 0 0 1 4-4M19 3l-6 6M19 3l-2 4-4-2z"/>` },

  // ─── MUSIC 5 (8) ───
  { id: "tuning-fork-2", name: "Tuning Fork 2", category: "Music5", tags: ["tune", "pitch"], body: `<path d="M9 3v8a3 3 0 0 0 6 0V3M9 3v0M15 3v0M9 16v5M15 16v5M9 21h6"/>` },
  { id: "music-note-2", name: "Music Note 2", category: "Music5", tags: ["note", "music"], body: `<circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M9 18V4l9-1v13"/>` },
  { id: "headphones-3", name: "DJ Headphones 2", category: "Music5", tags: ["audio", "dj"], body: `<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M12 4v-2M9 4l-1-1M15 4l1-1"/>` },
  { id: "speaker-2", name: "Speaker 2", category: "Music5", tags: ["audio", "sound"], body: `<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="7" r="1" fill="currentColor" stroke="none"/>` },
  { id: "mic-3", name: "Studio Mic 2", category: "Music5", tags: ["record", "studio"], body: `<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>` },
  { id: "volume-2", name: "Volume Control", category: "Music5", tags: ["sound", "audio"], body: `<path d="M3 10v4h4l5 4V6L7 10z"/><path d="M15 9a3 3 0 0 1 0 6M18 6a7 7 0 0 1 0 12"/>` },
  { id: "playlist-2", name: "Playlist 2", category: "Music5", tags: ["queue", "music"], body: `<path d="M3 6h10M3 10h10M3 14h7M3 18h7M16 8l5 3-5 3z"/>` },
  { id: "radio-2", name: "Radio 2", category: "Music5", tags: ["broadcast", "tune"], body: `<rect x="3" y="9" width="18" height="11" rx="2"/><circle cx="9" cy="14" r="2"/><path d="M14 12h4M14 15h4M5 9l8-4"/>` },

  // ─── FOOD 3 (10) ───
  { id: "croissant", name: "Croissant", category: "Food3", tags: ["bread", "french"], body: `<path d="M3 16c0-5 4-9 9-9s9 4 9 9M3 16c0 2 2 3 4 3M21 16c0 2-2 3-4 3M7 19c2 1 8 1 10 0"/>` },
  { id: "bagel", name: "Bagel", category: "Food3", tags: ["bread", "breakfast"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>` },
  { id: "muffin", name: "Muffin", category: "Food3", tags: ["bakery", "sweet"], body: `<path d="M5 21V13a7 7 0 0 1 14 0v8M5 21h14M7 13c0-3 2-5 5-5s5 2 5 5"/>` },
  { id: "cookie", name: "Cookie", category: "Food3", tags: ["sweet", "snack"], body: `<circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="11" r="1.2" fill="currentColor" stroke="none"/><circle cx="11" cy="15" r="1.2" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1" fill="currentColor" stroke="none"/>` },
  { id: "pie", name: "Pie", category: "Food3", tags: ["dessert", "bake"], body: `<ellipse cx="12" cy="14" rx="9" ry="5"/><path d="M3 14V10a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4M7 7l2-3M12 7l1-3M17 7l-2-3"/>` },
  { id: "cupcake", name: "Cupcake", category: "Food3", tags: ["sweet", "dessert"], body: `<path d="M5 21V13a7 7 0 0 1 14 0v8M5 21h14M7 13c0-3 2-5 5-5s5 2 5 5M9 8c0-2 1-3 3-3s3 1 3 3"/>` },
  { id: "pretzel", name: "Pretzel", category: "Food3", tags: ["snack", "german"], body: `<path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7M5 12c0 4 3 7 7 7M19 12c0 4-3 7-7 7M8 8c2 2 8 2 8 0M8 16c2-2 8-2 8 0"/>` },
  { id: "popcorn", name: "Popcorn", category: "Food3", tags: ["snack", "movie"], body: `<path d="M5 21V11l3-2h8l3 2v10M5 21h14M8 9c0-2 1-3 2-3M12 9c0-2 1-3 2-3M14 8c0-2 1-3 2-3M9 6c0-2 1-3 3-3s3 1 3 3"/>` },
  { id: "chocolate", name: "Chocolate Bar", category: "Food3", tags: ["sweet", "candy"], body: `<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>` },
  { id: "donut-2", name: "Donut 2", category: "Food3", tags: ["sweet", "dessert"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="8" cy="8" r="0.8" fill="currentColor" stroke="none"/><circle cx="16" cy="9" r="0.8" fill="currentColor" stroke="none"/><circle cx="9" cy="17" r="0.8" fill="currentColor" stroke="none"/>` },

  // ─── ANIMALS 2 (10) ───
  { id: "penguin", name: "Penguin", category: "Animals2", tags: ["bird", "antarctic"], body: `<path d="M6 21V8a6 6 0 0 1 12 0v13M6 21h12M8 21V13a4 4 0 0 1 8 0v8M10 9h0.1M14 9h0.1M11 14h2"/>` },
  { id: "owl", name: "Owl", category: "Animals2", tags: ["bird", "night"], body: `<circle cx="12" cy="12" r="8"/><circle cx="9" cy="11" r="2"/><circle cx="15" cy="11" r="2"/><path d="M11 11h2M9 16h6M5 5l3 1M19 5l-3 1M5 19l3-1M19 19l-3-1"/>` },
  { id: "fox", name: "Fox", category: "Animals2", tags: ["animal", "wild"], body: `<path d="M5 4l4 4 3-1 3 1 4-4-2 6c0 5-3 11-5 11s-5-6-5-11zM9 12h0.1M15 12h0.1M11 16h2"/>` },
  { id: "wolf", name: "Wolf", category: "Animals2", tags: ["animal", "wild"], body: `<path d="M5 4l4 4 3-2 3 2 4-4-1 8c0 5-3 9-6 9s-6-4-6-9zM9 12h0.1M15 12h0.1M10 16h4"/>` },
  { id: "bear", name: "Bear", category: "Animals2", tags: ["animal", "wild"], body: `<circle cx="12" cy="13" r="7"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><path d="M9 12h0.1M15 12h0.1M9 16h6M10 13l2 1 2-1"/>` },
  { id: "deer", name: "Deer", category: "Animals2", tags: ["animal", "forest"], body: `<path d="M5 21V12c0-4 3-7 7-7s7 3 7 7v9M5 21h14M9 21v-5h6v5M7 5l-2-3M9 4l-1-3M17 5l2-3M15 4l1-3M10 12h0.1M14 12h0.1"/>` },
  { id: "monkey", name: "Monkey", category: "Animals2", tags: ["animal", "primate"], body: `<circle cx="12" cy="12" r="7"/><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><path d="M9 11h0.1M15 11h0.1M9 15c1 1 5 1 6 0"/>` },
  { id: "tiger", name: "Tiger", category: "Animals2", tags: ["animal", "wild"], body: `<circle cx="12" cy="13" r="7"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><path d="M9 11h0.1M15 11h0.1M9 15h6M7 10l1 1M17 10l-1 1M10 17l1-1 2 0 1 1"/>` },
  { id: "giraffe", name: "Giraffe", category: "Animals2", tags: ["animal", "tall"], body: `<path d="M9 21V8l3-5 3 5v13M9 21h6M11 14h2M11 18h2M9 3V1h6v2M9 3l-2-1M15 3l2-1"/>` },
  { id: "zebra", name: "Zebra", category: "Animals2", tags: ["animal", "stripes"], body: `<circle cx="12" cy="13" r="7"/><path d="M8 8l2 2M14 8l2 2M8 16l2-2M14 16l2-2M6 6l2 2M16 6l2 2M6 18l2-2M16 18l2-2"/>` },

  // ─── TRAVEL 2 (8) ───
  { id: "map-2", name: "Travel Map", category: "Travel2", tags: ["location", "navigate"], body: `<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"/>` },
  { id: "location-pin", name: "Location Pin", category: "Travel2", tags: ["place", "gps"], body: `<path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="3"/>` },
  { id: "gps", name: "GPS", category: "Travel2", tags: ["navigate", "gps"], body: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>` },
  { id: "suitcase-2", name: "Suitcase 2", category: "Travel2", tags: ["luggage", "travel"], body: `<rect x="5" y="6" width="14" height="15" rx="2"/><path d="M9 6V3h6v3M5 11h14M9 21v2M15 21v2"/>` },
  { id: "boarding-pass", name: "Boarding Pass", category: "Travel2", tags: ["ticket", "flight"], body: `<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 12h18M7 9h4M7 15h4M14 9h3M14 15h3M12 3v18" stroke-dasharray="2 2"/>` },
  { id: "hotel", name: "Hotel", category: "Travel2", tags: ["stay", "accommodation"], body: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>` },
  { id: "tourist", name: "Tourist Camera", category: "Travel2", tags: ["photo", "tourist"], body: `<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l2-3h4l2 3"/><circle cx="12" cy="13" r="4"/><path d="M3 21h18"/>` },
  { id: "currency-exchange", name: "Currency Exchange", category: "Travel2", tags: ["money", "exchange"], body: `<path d="M3 8h14l-3-3M3 8l3 3M21 16H7l3 3M21 16l-3-3"/>` },
];

// Helper to render the full SVG markup with the chosen variant.
// Variant logic:
//   - line: stroke=color, fill=none (transparent bg, drawn outlines)
//   - solid: stroke=color + thick width + fill=color (renders as bold filled silhouette)
//   - duotone: thick low-opacity stroke BEHIND + normal stroke on TOP (halo/glow effect)
//   - aurora: ANIMATED multi-stop SVG gradient (purple→pink→cyan) flowing through icon
//   - neon: cyberpunk glow with double drop-shadow filter
//   - glass: frosted glass effect with subtle gradient overlay
//   - crystal3d: 3D depth — shadow copy offset + main with vertical gradient fill

export function renderIconSvg(icon: ToolverseIcon, opts: {
  size?: number;
  variant?: IconVariant;
  color?: string;
  strokeWidth?: number;
  className?: string;
}): string {
  const { size = 24, variant = "line", color = "currentColor", strokeWidth = 1.75, className = "" } = opts;

  // Strip inline fill="currentColor" stroke="none" overrides (tiny accent dots)
  const body = icon.body
    .replace(/\s*fill="currentColor"\s*stroke="none"\s*/g, " ")
    .replace(/\s*stroke="none"\s*fill="currentColor"\s*/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

  // Unique gradient/filter IDs per icon (to avoid SVG def collisions)
  const uid = `${icon.id.replace(/[^a-z0-9]/gi, "")}-${variant}-${size}`;

  // ─── AURORA: animated multi-color gradient flowing through icon ───
  // Uses gradientUnits="userSpaceOnUse" so all paths share the same gradient
  // mapping — without this, each path gets its own gradient bounding box,
  // causing multi-path icons (Plus, Minus, etc.) to show mismatched colors.
  if (variant === "aurora") {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" class="${className}" style="color:${color}">
  <defs>
    <linearGradient id="aur-${uid}" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#a855f7">
        <animate attributeName="offset" values="0;1;0" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="33%" stop-color="#ec4899">
        <animate attributeName="offset" values="0.33;1.33;0.33" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="66%" stop-color="#06b6d4">
        <animate attributeName="offset" values="0.66;1.66;0.66" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#a855f7">
        <animate attributeName="offset" values="1;2;1" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#aur-${uid})" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${body}</g>
</svg>`;
  }

  // ─── NEON: cyberpunk glow with double drop-shadow filter ───
  if (variant === "neon") {
    const neonColor = color === "currentColor" ? "#22d3ee" : color;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" class="${className}" style="color:${neonColor}; filter: drop-shadow(0 0 ${Math.max(2, size/12)}px ${neonColor}) drop-shadow(0 0 ${Math.max(4, size/6)}px ${neonColor}90);">
  <g fill="none" stroke="${neonColor}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd">${body}</g>
</svg>`;
  }

  // ─── GLASS: frosted glass effect with vertical gradient ───
  if (variant === "glass") {
    const glassColor = color === "currentColor" ? "#ffffff" : color;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" class="${className}" style="color:${glassColor};">
  <defs>
    <linearGradient id="glass-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${glassColor}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${glassColor}" stop-opacity="0.4"/>
    </linearGradient>
  </defs>
  <g fill="url(#glass-${uid})" stroke="${glassColor}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd">${body}</g>
</svg>`;
  }

  // ─── CRYSTAL 3D: depth via shadow copy + vertical gradient main icon ───
  // gradientUnits=userSpaceOnUse ensures consistent gradient across all paths
  if (variant === "crystal3d") {
    const mainColor = color === "currentColor" ? "#a855f7" : color;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" class="${className}" style="color:${mainColor};">
  <defs>
    <linearGradient id="c3d-${uid}" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${mainColor}" stop-opacity="1"/>
      <stop offset="50%" stop-color="${mainColor}" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${mainColor}" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <!-- Shadow layer: offset 1.5px down-right, lower opacity -->
  <g transform="translate(1.5 1.5)" fill="${mainColor}" fill-opacity="0.2" stroke="${mainColor}" stroke-opacity="0.3" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${body}</g>
  <!-- Main layer: gradient stroke + fill -->
  <g fill="url(#c3d-${uid})" stroke="url(#c3d-${uid})" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${body}</g>
</svg>`;
  }

  // ─── SOLID: thick stroke + fill — works for both stroke-based and shape-based icons ───
  if (variant === "solid") {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="${strokeWidth * 1.6}" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" class="${className}" style="color:${color}">${body}</svg>`;
  }

  // ─── DUOTONE: halo effect — thick low-opacity stroke behind + normal stroke on top ───
  if (variant === "duotone") {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" style="color:${color}">
  <!-- Halo background: thick stroke at 25% opacity creates the duotone halo -->
  <g stroke="${color}" stroke-width="${strokeWidth * 5}" stroke-opacity="0.25" stroke-linecap="round" stroke-linejoin="round" fill="none">${body}</g>
  <!-- Main outline: normal stroke at 100% opacity -->
  <g stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">${body}</g>
</svg>`;
  }

  // ─── DEFAULT: Line variant ───
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" class="${className}" style="color:${color}">${body}</svg>`;
}



// ─── Named React icon components ──────────────────────

export interface ToolverseIconProps {
  size?: number;
  variant?: IconVariant;
  color?: string;
  strokeWidth?: number;
  className?: string;
  [key: string]: any;
}

export const Plus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "plus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Minus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "minus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Check: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "check");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cross: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cross");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Edit: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "edit");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Trash: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trash");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Save: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "save");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Copy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "copy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cut: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cut");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Paste: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "paste");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowUp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-up");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowDown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-down");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowLeft: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-left");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowRight: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-right");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Refresh: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "refresh");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChevronUp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chevron-up");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChevronDown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chevron-down");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChevronLeft: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chevron-left");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChevronRight: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chevron-right");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Expand: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "expand");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Menu: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "menu");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Close: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "close");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Search: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "search");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Filter: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "filter");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Settings: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "settings");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sliders: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sliders");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Grid: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "grid");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const List: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "list");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Eye: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eye");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EyeOff: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eye-off");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mail: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mail");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Phone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "phone");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Message: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "message");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bell: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bell");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Send: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "send");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Share: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "share");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const AtSign: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "at");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Inbox: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "inbox");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Reply: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "reply");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Forward: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "forward");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Play: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "play");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pause: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pause");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stop: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stop");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SkipForward: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "skip");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Volume: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "volume");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mute: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mute");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Camera: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "camera");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Image: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "image");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Video: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "video");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Music: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "music");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Folder: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "folder");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FolderOpen: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "folder-open");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const File: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Download: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "download");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Upload: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "upload");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cloud: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cloud");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drive: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drive");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Archive: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "archive");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Book: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "book");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Notebook: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "notebook");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const User: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "user");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Users: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "users");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const UserPlus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "user-plus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const UserMinus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "user-minus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ProfileCard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "profile");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const IDBadge: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "id");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lock");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Unlock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "unlock");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Key: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "key");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Shield: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shield");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ShoppingCart: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cart");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ShoppingBag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bag");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tag");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Gift: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gift");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CreditCard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "credit-card");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wallet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wallet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Coins: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "coins");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Receipt: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "receipt");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Store: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "store");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Crown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "crown");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Code: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "code");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Terminal: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "terminal");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bug: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bug");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Branch: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "branch");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Server: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "server");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Database: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "database");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cube: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cube");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Git: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "git");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const API: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "api");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Package: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "package");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Home: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "home");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Star: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "star");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Heart: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "heart");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bookmark: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bookmark");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Flag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flag");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lightbulb: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lightbulb");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fire: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fire");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Zap: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "zap");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Trophy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trophy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Rocket: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rocket");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Clock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "clock");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Calendar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "calendar");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const History: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "history");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Timer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "timer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Alarm: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "alarm");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Compass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "compass");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Map: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "map");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Navigation: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "navigation");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Route: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "route");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sun: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sun");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Moon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "moon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CloudRain: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cloud-rain");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Snowflake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "snow");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wind: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wind");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Info: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "info");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Warning: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "warning");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Success: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "success");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Error: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "error");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Loading: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "loading");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Laptop: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "laptop");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Desktop: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "desktop");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mobile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mobile");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tablet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tablet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Watch: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "watch");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Headphones: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "headphones");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Speaker: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "speaker");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Keyboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "keyboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mouse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mouse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Printer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "printer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CameraFront: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "camera-front");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TV: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tv");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Circle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "circle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Square: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "square");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Triangle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "triangle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hexagon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hexagon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Octagon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "octagon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Diamond: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "diamond");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pentagon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pentagon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const StarOutline: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "star-outline");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Crescent: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "crescent");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HeartOutline: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "heart-outline");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CloudShape: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cloud-shape");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Spiral: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "spiral");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Leaf: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "leaf");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tree: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tree");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Flower: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flower");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mountain: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mountain");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sea: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sea");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drop: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drop");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sprout: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sprout");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Feather: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "feather");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Rainbow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rainbow");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Volcano: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "volcano");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fish: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fish");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Paw: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "paw");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Coffee: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "coffee");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pizza: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pizza");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Burger: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "burger");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const IceCream: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ice-cream");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cake");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Apple: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "apple");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cherry: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cherry");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WineGlass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Egg: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "egg");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Carrot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "carrot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bread: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bread");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Donut: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "donut");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Car: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "car");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Plane: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "plane");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bike: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bike");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ship: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ship");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RocketShip: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rocket-ship");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Train: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "train");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Scooter: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scooter");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fuel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fuel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wheel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wheel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TrafficLight: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "traffic");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Anchor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "anchor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Chart: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chart");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PieChart: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pie");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Briefcase: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "briefcase");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Office: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "office");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Presentation: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "presentation");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Handshake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "handshake");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Growth: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "growth");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Target: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "target");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Balance: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "balance");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Globe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "globe");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Factory: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "factory");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stamp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stamp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GraduationCap: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "graduation");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BookOpen: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "book-open");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pencil: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pencil");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ruler: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ruler");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Calculator: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "calculator");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LightbulbOn: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lightbulb-on");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Flask: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flask");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Atom: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "atom");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Microscope: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "microscope");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TestTube: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "test-tube");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HeartPulse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "heart-pulse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stethoscope: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stethoscope");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pill: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pill");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hospital: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hospital");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DNA: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dna");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Brain: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "brain");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tooth: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tooth");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EyeMedical: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eye-medical");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bandage: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bandage");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Syringe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "syringe");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Gamepad: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gamepad");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Joystick: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "joystick");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dice: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dice");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Puzzle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "puzzle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TrophyCup: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trophy-cup");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sword: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sword");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ShieldCross: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shield-cross");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Castle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "castle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MagicWand: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "magic-wand");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ghost: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ghost");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MusicNote: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "music-note");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HeadphonesMusic: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "headphones-music");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Microphone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "microphone");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Playlist: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "playlist");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Disc: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "disc");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Guitar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "guitar");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drum: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drum");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Equalizer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "equalizer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Radio: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "radio");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MicOff: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mic-off");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const AnalyticsUp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "analytics-up");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dashboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dashboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const UsersGraph: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "users-graph");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Activity: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "activity");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BarChart: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bar-chart");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TrendingDown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trending-down");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dollar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dollar");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Percent: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "percent");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Signal: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "signal");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WiFi: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wifi");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ShieldCheck: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shield-check");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fingerprint: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fingerprint");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EyeShield: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eye-shield");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LockKey: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lock-key");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ShieldAlert: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shield-alert");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Keyhole: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "keyhole");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fingerprint2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fingerprint-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Password: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "password");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Verified: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "verified");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Block: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "block");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Smile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smile");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Frown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "frown");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Angry: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "angry");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Laugh: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "laugh");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wink: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wink");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LoveFace: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "love");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Neutral: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "neutral");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cool: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cool");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sleep: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sleep");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Shock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shock");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ThumbsUp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "thumbs-up");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ThumbsDown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "thumbs-down");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SoccerBall: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "soccer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Basketball: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "basketball");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Medal: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trophy-medal");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Whistle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "whistle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stopwatch: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stopwatch");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dumbbell: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dumbbell");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Skate: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "skate");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BoxingGlove: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "boxing-glove");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Volleyball: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "volleyball");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GolfFlag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "golf");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TennisRacket: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "racket");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Helmet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "helmet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const OmSymbol: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "om");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CrescentStar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "crescent-star");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lotus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lotus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Menorah: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "menorah");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DharmaWheel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dharma-wheel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Khanda: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "khanda");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const StarofDavid: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "star-of-david");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Thunderstorm: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "thunderstorm");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fog: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fog");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tornado: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tornado");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Thermometer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "thermometer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Umbrella: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "umbrella");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RainbowFull: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rainbow-full");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Humidity: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "humidity");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sunrise: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sunrise");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dog: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dog");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bird: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bird");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Rabbit: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rabbit");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Turtle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "turtle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Butterfly: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "butterfly");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Horse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "horse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Snake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "snake");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Whale: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "whale");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Elephant: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "elephant");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Spider: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "spider");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ant: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ant");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Paperclip: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "paperclip");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stapler: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stapler");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Scissors: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scissors-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BinderClip: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "clip");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Globe2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "globe-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CalendarCheck: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "calendar-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const AlarmClock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "clock-alarm");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Calculator2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "calculator-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Label: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "label");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TongueOut: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tongue");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cry: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cry");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Kiss: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "kiss");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tired: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tired");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dizzy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dizzy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Meh: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "meh");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Thinking: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "thinking");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sick: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "vomit");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Nerd: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "nerd");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Crazy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "crazy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowUpRight: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-up-right");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowUpLeft: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-up-left");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowDownRight: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-down-right");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArrowDownLeft: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-down-left");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CornerUp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "corner-up");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CornerDown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "corner-down");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LoopArrow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-loop");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Shuffle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-shuffle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Swap: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-swap");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Rotate: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arrow-rotate");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fork: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fork");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Spoon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "spoon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Knife: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "knife");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Plate: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "plate");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mug: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mug");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bottle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bottle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Kettle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "kettle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HotCup: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cup-hot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WineBottle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wine-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Jar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "jar");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CookingPot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fridge: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fridge");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Chair: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chair");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sofa: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sofa");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bed: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bed");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Table: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "table");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lamp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lamp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bookshelf: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bookshelf");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drawer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drawer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mirror: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mirror");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WallClock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "clock-wall");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PottedPlant: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "plant-pot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Shirt: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shirt");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pants: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pants");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dress: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dress");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Shoe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shoe");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Glasses: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "glasses");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FashionUmbrella: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "umbrella-fashion");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Glove: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "glove");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WatchFashion: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "watch-fashion");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sock");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Home2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "home-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Building: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "building");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Skyscraper: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "skyscraper");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tent: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tent");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Garage: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "garage");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Church: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "church");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const School: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "school");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HospitalBuilding: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hospital-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bridge: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bridge");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tower: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tower");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Piano: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "piano");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Violin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "violin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Trumpet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trumpet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const AcousticGuitar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "guitar-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drums: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drums");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Harp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "harp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const StudioMic: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "microphone-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const StudioHeadphones: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "headphones-studio");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FlagPlain: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flag-plain");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CheckeredFlag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flag-checkered");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WavingFlag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flag-wave");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MastFlag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flag-mast");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pennant: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pennant");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Banner: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "banner");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ribbon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ribbon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Scroll: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scroll");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Luggage: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "luggage");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Passport: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "passport");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ticket: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ticket");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MapPin2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "map-pin-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Compass2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "compass-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GlobeAsia: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "globe-asia");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Beach: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "beach");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MountainRange: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mountain-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TravelCamera: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "camera-travel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Binoculars: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "binoculars");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CampingTent: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "camping");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TravelSunglasses: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sunglasses-travel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hammer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hammer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Screwdriver: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "screwdriver");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wrench: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wrench");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Saw: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "saw");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drill: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drill");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Axe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "axe");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pickaxe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pickaxe");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pliers: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pliers");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LevelTool: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "level");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TapeMeasure: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tape-measure");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bolt: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bolt");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Nut: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "nut");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MathPlus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-plus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MathMinus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-minus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MathMultiply: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-multiply");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MathDivide: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-divide");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MathEquals: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-equals");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MathPercent: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-percent");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MathPi: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-pi");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Infinity: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-infinity");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SquareRoot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-square-root");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SigmaSum: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-sigma");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Beaker: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "beaker");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Molecule: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "molecule");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RoundFlask: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flask-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TestTubeRack: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "test-tube-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BunsenBurner: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fire-chem");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Microscope2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "microscope-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PetriDish: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "petri");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LabSyringe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "syringe-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Saturn: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "saturn");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Planet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "planet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MoonPhases: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "moon-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RocketLaunch: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rocket-launch");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Satellite: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "satellite");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const UFO: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ufo");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Constellation: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "constellation");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Meteor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "meteor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Telescope: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "telescope");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Galaxy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "galaxy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Banana: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "banana");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Strawberry: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "strawberry");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Watermelon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "watermelon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Grape: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "grape");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lemon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lemon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Peach: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "peach");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pear: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pear");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pineapple: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pineapple");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mango: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mango");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Coconut: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "coconut");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Carrot2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "carrot-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tomato: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tomato");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Potato: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "potato");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Onion: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "onion");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Garlic: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "garlic");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BellPepper: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pepper");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChiliPepper: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chili");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Corn: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "corn");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Broccoli: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "broccoli");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mushroom: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mushroom");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CoffeeCup: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "coffee-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TeaCup: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tea");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const JuiceGlass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "juice");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Smoothie: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smoothie");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cocktail: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cocktail");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BeerMug: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "beer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WaterGlass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "water-glass");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MilkCarton: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "milk");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChristmasTree: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "christmas-tree");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pumpkin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pumpkin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EasterEgg: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "easter-egg");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Snowman: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "snowman");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Firework: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "firework");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GiftBox: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gift-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CandyCane: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "candy-cane");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SantaHat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "santa-hat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ValentineHeart: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "heart-valentine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lightning: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lightning");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LightRain: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rain-light");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SnowFlurry: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "snow-flurry");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SunCloud: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sun-cloud");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MoonStars: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "moon-stars");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Windy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "windy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hail: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hail");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RainbowArc: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rainbow-arc");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TrebleClef: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "treble-clef");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BassClef: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bass-clef");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sharp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sharp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Flat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Natural: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "natural");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EighthNote: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eighth-note");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BeamedNotes: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "beamed-notes");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RestSymbol: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rest");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CPUChip: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cpu");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RAMModule: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ram");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GPUCard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gpu");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Motherboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "motherboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SSDDrive: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ssd");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CoolingFan: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fan");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Battery: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "battery");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Webcam: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "webcam");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Router: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "router");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EthernetCable: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ethernet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartBulb: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-bulb");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartPlug: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-plug");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartLock: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-lock");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartThermostat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-thermostat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartSpeaker: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-speaker");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartDoorbell: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-doorbell");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartBlinds: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-blinds");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartCamera: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-camera");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartVacuum: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-vacuum");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartACUnit: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-ac");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bitcoin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bitcoin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ethereum: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ethereum");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Litecoin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "litecoin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dogecoin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dogecoin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cardano: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cardano");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Solana: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "solana");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Polygon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "polygon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Binance: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "binance");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tether: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tether");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const XRP: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "xrp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CricketBat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cricket-bat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HockeyStick: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hockey-stick");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BaseballBat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "baseball-bat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Badminton: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "badminton");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SurfBoard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "surf-board");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Skateboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "skateboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Snowboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "snowboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Climbing: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "climbing");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hand: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hand");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Foot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "foot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BrainHead: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "brain-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lungs: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lungs");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HeartAnatomical: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "heart-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Liver: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "liver");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Kidney: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "kidney");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SkeletonBody: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "skeleton");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Truck: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "truck");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ambulance: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ambulance");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tractor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tractor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FireTruck: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fire-truck");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Taxi: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "taxi");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PoliceCar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "police-car");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bulldozer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bulldozer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Forklift: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "forklift");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cactus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cactus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PalmTree: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "palm-tree");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bamboo: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bamboo");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mushroom2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mushroom-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Seedling: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "seedling");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Shrub: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shrub");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tree2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tree-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Vine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "vine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stapler2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stapler-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const InkPen: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ink-pen");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Highlighter: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "highlighter");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RubberStamp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rubber-stamp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TapeDispenser: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tape");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Whiteboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "whiteboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Projector: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "projector");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CalendarDate: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "calendar-3");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dragon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dragon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Unicorn: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "unicorn");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mermaid: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mermaid");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WizardHat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wizard-hat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CrystalBall: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "crystal-ball");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PotionBottle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "potion");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SpellBook: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "spell-book");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fairy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fairy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RoyalCrown: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "crown-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MagicPortal: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "magic-portal");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MedicalCross: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ambulance-cross");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BloodDrop: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "blood-drop");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FirstAidKit: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "first-aid-kit");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MedicineBottle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "medicine-bottle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MedicalThermometer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "thermometer-med");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stretcher: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stretcher");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const VaccineVial: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "vaccine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EyeChart: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eye-test");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wheelchair: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wheelchair");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MedicalReport: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "medical-report");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Trinity: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trinity");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Ankh: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ankh");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const YinYang: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "yin-yang");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pentagram: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pentagram");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ToriiGate: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "torii-gate");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dove: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dove");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PrayerHands: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "prayer-hands");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const IncenseStick: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "incense");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PaintPalette: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "palette");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PaintBrush: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "brush");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Easel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "easel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArtPencil: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pencil-art");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PictureFrame: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "frame");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArtScissors: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scissors-art");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PaintTube: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "color-tube");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SprayPaint: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "spray");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArtRuler: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ruler-art");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Canvas: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "canvas");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MusicSheet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "music-sheet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Metronome: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "metronome");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TuningFork: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tuning-fork");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MusicStand: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "music-stand");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CassetteTape: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cassette");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const VinylRecord: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "vinyl-record");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Concert: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "concert");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DJHeadphones: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "headphones-dj");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Resistor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "resistor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Capacitor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "capacitor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Transistor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "transistor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LED: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "led");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Diode: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "diode");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BatteryCell: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "battery-cell");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wire: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wire");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Switch: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "switch");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fuse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fuse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Transformer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "transformer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Boxing: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "boxing");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Swimming: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "swimming");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Archery: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "archery");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fencing: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fencing");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WeightLifting: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "weight-lifting");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cycling: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cycling");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Marathon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "marathon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Gymnastics: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gymnastics");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MountainPeak: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mountain-peak");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Volcano_volcano2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "volcano-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Island: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "island");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const River: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "river");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Desert: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "desert");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cave: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cave");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Glacier: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "glacier");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Waterfall: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "waterfall");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Aries: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "aries");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Taurus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "taurus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Gemini: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gemini");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cancer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cancer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Leo: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "leo");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Virgo: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "virgo");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Libra: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "libra");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Scorpio: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scorpio");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sagittarius: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sagittarius");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Capricorn: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "capricorn");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Aquarius: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "aquarius");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pisces: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pisces");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bicycle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bicycle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Motorcycle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "motorcycle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ElectricScooter: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scooter-electric");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Helicopter: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "helicopter");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tank: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tank");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TractorTrailer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tractor-trailer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Submarine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "submarine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sailboat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sailboat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ShieldSword: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shield-sword");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BowArrow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bow-arrow");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Crossbow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "crossbow");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BattleAxe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "axe-battle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Katana: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "katana");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dagger: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dagger");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WarHammer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hammer-weapon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Spear: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "spear");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ShoppingMall: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mall");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bank: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bank");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Museum: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "museum");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Library: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "library");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Stadium: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stadium");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cathedral: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cathedral");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Warehouse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "warehouse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GasStation: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gas-station");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Park: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "park");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Windmill: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "windmill");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lighthouse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lighthouse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pyramid: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pyramid");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Snowflake2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "snowflake-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Rainbow2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rainbow-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Aurora: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "aurora-borealis");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Comet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "comet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Eclipse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eclipse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tornado2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tornado-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tsunami: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tsunami");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Earthquake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "earthquake");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Eruption: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "volcano-3");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Iceberg: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "iceberg");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SandDunes: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "desert-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Oasis: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "oasis");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tambourine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tambourine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Banjo: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "banjo");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cello: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cello");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Accordion: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "accordion");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Saxophone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "saxophone");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Harmonica: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "harmonica");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Xylophone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "xylophone");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Maracas: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "maracas");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Trombone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trombone");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Clarinet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "clarinet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Flute: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flute-music");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cymbal: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cymbal");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sushi: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sushi");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Noodles: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "noodles");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Taco: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "taco");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sandwich: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sandwich");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SoupBowl: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "soup");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Steak: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "steak");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FrenchFries: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fries");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HotDog: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hotdog");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cheese: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cheese");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FriedEgg: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "egg-fried");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pancake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pancake");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SaladBowl: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "salad");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Yoga: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "yoga");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Running: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "running");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dancing: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dancing");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Meditation: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "meditation");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Reading: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "reading");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Writing: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "writing");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cooking: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cooking");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Painting: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "painting");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Gardening: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gardening");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fishing: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fishing");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hiking: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hiking");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cycling2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cycling-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Happy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "happy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sad: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sad");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Love: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "love-emotion");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Angry_angryemotion: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "angry-emotion");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Surprised: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "surprised");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Confused: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "confused");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Sleepy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sleepy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Excited: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "excited");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bored: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bored");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Scared: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scared");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Like: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "like");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Comment: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "comment");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Share_share2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "share-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bookmark_bookmark2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bookmark-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Follow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "follow");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DirectMessage: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dm");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Retweet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "retweet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Trending: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "trending");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LiveStream: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "live-stream");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const UploadMedia: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "upload-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Verified_verifiedbadge: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "verified-badge");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hashtag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hashtag");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PDFFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-pdf");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ImageFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-image");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const VideoFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-video");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const AudioFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-audio");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ZIPFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-zip");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CodeFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-code");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TextFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-text");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ExcelFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-excel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WordFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-word");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PPTFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-ppt");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CSVFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-csv");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const JSONFile: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-json");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mathematics: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "math-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Science: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "science-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const English: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "english-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const History_historysubject: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "history-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Geography: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "geography-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArtClass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "art-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MusicClass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "music-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PhysicalEd: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pe-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ComputerSci: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "computer-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Biology: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "biology-subject");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Yacht: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "yacht");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Jet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "jet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CableCar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cable-car");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Metro: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "metro");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tram: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tram");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HorseRide: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "horse-ride");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bicycle2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bicycle-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Segway: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "segway");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Gondola: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gondola");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hoverboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hoverboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Unicycle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "unicycle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Skis: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "skis");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HotSun: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sun-hot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cold: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cold");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Humid: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "humid");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const StrongWind: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "windy-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Storm: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "storm");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Blizzard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "blizzard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Monsoon: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "monsoon");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drought: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drought");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Foggy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "foggy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drizzle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drizzle");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const XRay: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "x-ray");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CTScan: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scan");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Surgery: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "surgery");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Checkup: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "checkup");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DentalCare: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dental");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EyeClinic: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "eye-clinic");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const EarClinic: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ear-clinic");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BloodTest: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "blood-test");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pharmacy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pharmacy");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FitnessCheck: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fitness-check");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Blackboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "blackboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Textbook: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "textbook");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Notebook_notebookedu: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "notebook-edu");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ExamPaper: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "exam");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GraduationCap_graduationcap: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "graduation-cap");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PencilRuler: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pencil-ruler");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SchoolBus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "school-bus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dictionary: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dictionary");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Abacus: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "abacus");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GeographyGlobe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "globe-edu");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WashingMachine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "washing-machine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Dryer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "dryer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Oven: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "oven");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Microwave: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "microwave");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Blender: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "blender");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Toaster: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "toaster");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Vacuum: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "vacuum");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Iron: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "iron");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CeilingFan: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fan-appliance");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CoffeeMachine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "coffee-machine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ArcadeMachine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "arcade");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChessPiece: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chess");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PlayingCard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "playing-card");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PokerChip: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "poker-chip");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Roulette: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "roulette");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SlotMachine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "slot-machine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GameController2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "controller-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RacingWheel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "racing-wheel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const VictoryHand: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "victory");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LevelUp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "level-up");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BossEnemy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "boss");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Achievement: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "achievement");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DeskLamp: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "desk-lamp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const OfficeChair: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "office-chair");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MonitorArm: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "monitor-arm");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FileCabinet: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "file-cabinet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Clipboard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "clipboard");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Notepad: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "notepad");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Calculator3: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "calculator-3");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Headset: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "headset");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const OfficePhone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "office-phone");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FaxMachine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fax");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PaperShredder: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shredder");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WhiteboardMarker: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "whiteboard-marker");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Doctor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "doctor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Engineer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "engineer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Chef: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chef");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lawyer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lawyer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Teacher: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "teacher");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Scientist: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scientist");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Artist: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "artist");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pilot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pilot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Farmer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "farmer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Police: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "police");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Firefighter: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "firefighter");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Programmer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "programmer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const AIBrain: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ai-brain");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CloudServer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cloud-server");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const APIEndpoint: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "api-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Blockchain: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "blockchain");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Database2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "database-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const QRCode: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "qr-code");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Biometric: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fingerprint-3");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TechShield: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shield-tech");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CodeWindow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "code-window");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Terminal2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "terminal-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GitBranch: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "git-branch");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Container: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "docker");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Buddha: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "buddha");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PrayerBeads: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "prayer-beads");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PrayerCandle: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "candle-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const IncenseBurner: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "incense-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Temple: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "temple");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mosque: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mosque-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Synagogue: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "synagogue");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MeditationPose: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "meditation-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mars: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mars");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Jupiter: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "jupiter");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Asteroid: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "asteroid");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BlackHole: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "black-hole");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Comet2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "comet-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SpaceStation: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "space-station");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MoonLander: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "moon-lander");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Astronaut: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "astronaut");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Nebula: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "nebula");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wormhole: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wormhole");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Knitting: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "knitting");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pottery: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pottery");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Origami: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "origami");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const StampCollection: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "stamps");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CoinCollection: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "coins-collection");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ModelKit: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "model-kit");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PuzzlePiece: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "puzzle-piece");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CardTrick: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "card-trick");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Jigsaw: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "jigsaw");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const RCCar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rc-car");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Drone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drone");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Kite: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "kite");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Apartment: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "apartment");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Villa: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "villa");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cottage: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cottage");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Skyscraper2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "skyscraper-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mall: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mall-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TVTower: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tower-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Castle_castle2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "castle-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Barn: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "barn");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Greenhouse: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "greenhouse");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Igloo: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "igloo");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lipstick: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lipstick");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Mascara: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mascara");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Perfume: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "perfume");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const NailPolish: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "nail-polish");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CompactPowder: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "compact");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hairbrush: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hairbrush");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Razor: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "razor");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Comb: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "comb");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FaceCream: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cream");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HandMirror: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mirror-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Gear: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gear");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cog: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cog");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Spring: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "spring");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BoltNut: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bolt-nut");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bearing: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bearing");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Valve: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "valve");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pipe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pipe");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Engine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "engine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Turbine: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "turbine");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CircuitBoard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "circuit-board");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Campfire: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "campfire");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CampingCompass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "compass-camp");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Backpack: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "backpack");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Lantern: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "lantern");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SleepingBag: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "sleeping-bag");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const HikingBoot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hiking-boot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FoldedMap: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "map-folded");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Binoculars2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "binoculars-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Treadmill: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "treadmill");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Kettlebell: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "kettlebell");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const PullupBar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pullup-bar");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const YogaMat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "yoga-mat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const JumpRope: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "jump-rope");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ExerciseBall: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "exercise-ball");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ResistanceBand: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "resistance-band");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WeightScale: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "weight-scale");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wallet_wallet2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wallet-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BankCard: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bank-card");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cash: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cash");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CoinStack: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "coin-stack");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SavingsPiggy: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "savings");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Receipt2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "receipt-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TaxForm: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tax");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Invoice: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "invoice");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bitcoin2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bitcoin-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CurrencyExchange: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "exchange");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const WateringCan: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "watering-can");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Shovel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "shovel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Rake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "rake");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wheelbarrow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wheelbarrow");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SeedPacket: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "seed-packet");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FlowerPot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "flower-pot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GardenHose: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hose");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Scarecrow: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "scarecrow");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Robot: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "robot");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Microchip: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chip-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const VRHeadset: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "vr-headset");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SmartWatch2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "smart-watch-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DeliveryDrone: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "drone-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const AIChat: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "ai-chat");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CloudStorage: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cloud-storage");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const FingerprintScan: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fingerprint-4");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CircuitBoard2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "circuit-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const SatelliteDish: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "satellite-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TuningFork2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tuning-fork-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const MusicNote2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "music-note-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const DJHeadphones2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "headphones-3");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Speaker2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "speaker-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const StudioMic2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "mic-3");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const VolumeControl: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "volume-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Playlist2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "playlist-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Radio2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "radio-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Croissant: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "croissant");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bagel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bagel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Muffin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "muffin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cookie: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cookie");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Cupcake: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "cupcake");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Pretzel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "pretzel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Popcorn: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "popcorn");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const ChocolateBar: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "chocolate");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Donut2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "donut-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Penguin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "penguin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Owl: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "owl");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Fox: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "fox");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Wolf: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "wolf");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Bear: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "bear");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Deer: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "deer");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Monkey: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "monkey");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Tiger: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tiger");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Giraffe: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "giraffe");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Zebra: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "zebra");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TravelMap: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "map-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const LocationPin: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "location-pin");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const GPS: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "gps");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Suitcase2: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "suitcase-2");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const BoardingPass: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "boarding-pass");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const Hotel: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "hotel");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const TouristCamera: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "tourist");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};

export const CurrencyExchange_currencyexchange: React.FC<ToolverseIconProps> = (props) => {
  const icon = TOOLVERSE_ICONS.find(i => i.id === "currency-exchange");
  if (!icon) return null;
  const svgString = renderIconSvg(icon, {
    size: props.size || 24,
    variant: props.variant || "line",
    color: props.color || "currentColor",
    strokeWidth: props.strokeWidth || 1.75,
    className: props.className || "",
  });
  return <span dangerouslySetInnerHTML={{ __html: svgString }} style={{ display: "inline-flex", lineHeight: 0 }} />;
};
