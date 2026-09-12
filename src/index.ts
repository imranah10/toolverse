// ═══════════════════════════════════════════════════════
// Toolverse — Premium UI Component & Icon Library
// ═══════════════════════════════════════════════════════
//
// 17 handcrafted premium components (Button, Card, Alert, etc.)
// + 246 library components (SolidButton, GradientCard, etc.)
// + 999 icons
// = 1,260+ named exports total
//
// INSTALL (primary workflow — no file creation needed):
//   npm install toolverse
//
// USAGE:
//   import { Button, SolidButton, Card, Plus, Search } from "toolverse";
//
//   <Button variant="primary" gradient>Click Me</Button>
//   <SolidButton text="Save" bgColor="#ff0000" />
//   <Plus size={24} color="#6366f1" />
// ═══════════════════════════════════════════════════════

// ─── Theme system ─────────────────────────────────────
export { ToolverseProvider, useToolverseTheme } from "./provider";
export type { ToolverseTheme } from "./theme";
export { defaultTheme, mergeTheme } from "./theme";

// ─── Handcrafted premium components (17 categories) ───
export {
  Button, IndigoGradientButton, PillButton, GlowButton, OutlineButton, GhostButton,
} from "./components/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./components/Button";

export { Card, CardHeader, CardBody, CardFooter } from "./components/Card";
export type { CardProps } from "./components/Card";

export { Alert } from "./components/Alert";
export type { AlertProps, AlertVariant } from "./components/Alert";

export { Badge } from "./components/Badge";
export type { BadgeProps, BadgeVariant } from "./components/Badge";

export { Input, Textarea } from "./components/Input";
export type { InputProps, TextareaProps } from "./components/Input";

export { Avatar, AvatarGroup } from "./components/Avatar";
export type { AvatarProps, AvatarShape } from "./components/Avatar";

export { Tooltip } from "./components/Tooltip";
export type { TooltipProps, TooltipPosition } from "./components/Tooltip";

export { Progress, CircularProgress } from "./components/Progress";
export type { ProgressProps, ProgressVariant } from "./components/Progress";

export { Divider } from "./components/Divider";
export type { DividerProps, DividerOrientation } from "./components/Divider";

export { Spinner, Skeleton, DotsLoader } from "./components/Loader";
export type { SpinnerProps, SkeletonProps, DotsLoaderProps } from "./components/Loader";

export { Tag } from "./components/Tag";
export type { TagProps, TagVariant } from "./components/Tag";

export { Navbar } from "./components/Navbar";
export type { NavbarProps, NavItem } from "./components/Navbar";

export { Hero } from "./components/Hero";
export type { HeroProps } from "./components/Hero";

export { Code, InlineCode } from "./components/Code";
export type { CodeProps, InlineCodeProps } from "./components/Code";

export { Tabs, Breadcrumb } from "./components/Navigation";
export type { TabsProps, TabItem, BreadcrumbProps, BreadcrumbItem } from "./components/Navigation";

export { Modal, Drawer } from "./components/Overlay";
export type { ModalProps, DrawerProps } from "./components/Overlay";

export { State, EmptyState, ErrorState, SuccessState } from "./components/States";
export type { StateProps, StateVariant } from "./components/States";

// ─── Handcrafted icons (100+) ─────────────────────────
export {
  Heart, Star, Bookmark, Share, Download, Upload, Trash, Edit, Copy, Check, X, Plus as PlusIcon, Minus,
  Search as SearchIcon, Filter, Settings as SettingsIcon,
  Home as HomeIcon, Menu, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight, ChevronLeft, ChevronUp,
  ChevronDown, ExternalLink, LogOut,
  Mail, Phone, MessageSquare, MessageCircle, Send, Bell,
  Image as ImageIcon, Video, Music, Mic, Camera, Play, Pause, Volume, Eye, EyeOff,
  File as FileIcon, FileText, Folder, FolderOpen, Archive,
  User, Users, UserPlus, UserCheck,
  CheckCircle, XCircle, AlertCircle, AlertTriangle, Info, HelpCircle,
  Cart, CreditCard, DollarSign, Tag as TagIcon, Gift, Package,
  Clock, Calendar, Timer,
  Code as CodeIcon, Terminal, GitBranch, GitCommit, Database, Server, Cloud, Wifi, Cpu, HardDrive,
  Grid, List, Columns, Maximize, Minimize, Layers,
  Lock, Unlock, Key, Shield, Zap, Fire, Sparkles, Globe, MapPin, Link as LinkIcon, QrCode, RefreshCw,
  Github, Twitter, Linkedin, Youtube, Facebook, Instagram,
  BookmarkChecked, ThumbsUp, ThumbsDown, Smile, Frown, Meh,
} from "./components/Icons";
export type { IconProps } from "./components/Icons";

// ─── Library components (246 customizable components) ─
// Auto-generated from web app's ComponentBuilder.
// Each component is a thin React wrapper around its render() function.
// Customize via ComponentProps (bgColor, textColor, borderRadius, etc.).
export * from "./generated";

// Version
export const VERSION = "1.2.0";
export const TOTAL_COMPONENTS = 274;   // 31 handcrafted + 243 library
export const TOTAL_ICONS = 1012;        // original crystal set — 7 variants each
