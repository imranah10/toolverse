<div align="center">

# 🛡️ Toolverse

### Premium UI Component & Icon Library for React, Vue, Svelte, Angular

**263 components (17 handcrafted + 246 library) + 1,099 icons across 21 categories**

[![npm version](https://img.shields.io/npm/v/toolverse.svg?style=for-the-badge&color=CB3837)](https://www.npmjs.com/package/toolverse)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&color=FFCB2B)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/imranah10/toolverse.svg?style=for-the-badge&color=FFB31A)](https://github.com/imranah10/toolverse/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/imranah10/toolverse.svg?style=for-the-badge&color=61DAFB)](https://github.com/imranah10/toolverse/issues)

[![Build Status](https://img.shields.io/github/actions/workflow/status/imranah10/toolverse/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/imranah10/toolverse/actions)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/toolverse?style=flat-square&color=6366f1)](https://www.npmjs.com/package/toolverse)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg?style=flat-square&color=3178C6)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square&color=16A34A)](CONTRIBUTING.md)

<p>
  <a href="#install"><code>npm install toolverse</code></a> ·
  <a href="#what's-included">Components</a> ·
  <a href="#icons">Icons</a> ·
  <a href="#theme-customization">Theme</a> ·
  <a href="CONTRIBUTING.md">Contributing</a> ·
  <a href="#-run-the-playground-locally">Playground</a>
</p>

<p><strong>
  ⭐ Star this repo · 🐛 <a href="https://github.com/imranah10/toolverse/issues">Report bugs</a> · 💬 <a href="https://github.com/imranah10/toolverse/discussions">Discussions</a>
</strong></p>

---

</div>

> **Why Toolverse?** 263 components (17 handcrafted + 246 library) + 1,099 icons (7 variants each). Zero-runtime, tree-shakeable, fully TypeScript-typed, accessible, and themeable. The most complete premium UI library on npm.

---

## Why Toolverse?

- **263 components** — 17 handcrafted premium (Button, Card, Modal, etc.) + 246 library components (SolidButton, GradientCard, etc.)
- **1,099 icons** — 100 handcrafted + 999 library icons. **7 variants each** (line, solid, duotone, aurora, neon, glass, crystal3d)
- **Single-file React export** — No more 2-file problem (`.tsx` + `.css`). Customized components export as ONE file with embedded styles.
- **Zero-runtime** — No CSS-in-JS at runtime. Inline styles. Fast.
- **Tree-shakeable** — Import only what you need. Bundler removes the rest.
- **Themeable** — One `ToolverseProvider` configures colors, radii, spacing, shadows for all components.
- **8 export formats** — React, Vue, Svelte, Angular, HTML, Tailwind, CSS, SCSS. Pick your framework.
- **TypeScript** — Full type definitions for every component and icon.

---

## Install

```bash
npm install toolverse
```

That's it. **No file creation, no copy-paste, no configuration.** Just install and import.

---

## Quick Start (60 seconds)

```tsx
import { ToolverseProvider, Button, Card, Alert, Badge, Avatar, Plus } from "toolverse";

function App() {
  return (
    <ToolverseProvider theme={{ colors: { primary: "#6366f1" } }}>
      <Card hover padding="lg">
        <h2>Welcome to Toolverse</h2>
        <Button variant="primary" gradient>
          <Plus size={16} /> Get Started
        </Button>
        <Alert variant="success" title="Success!">Your account is ready.</Alert>
        <Badge variant="primary" dot>New</Badge>
        <Avatar name="John Doe" status="online" />
      </Card>
    </ToolverseProvider>
  );
}
```

---

## What's Included

### Handcrafted Premium Components (17 categories, 30+ components)

Production-ready, fully themed, accessible.

| Category | Components | Example |
|----------|-----------|---------|
| **Buttons** | Button, IndigoGradientButton, PillButton, GlowButton, OutlineButton, GhostButton | `<Button variant="primary" gradient>Save</Button>` |
| **Cards** | Card, CardHeader, CardBody, CardFooter | `<Card hover padding="lg">...</Card>` |
| **Alerts** | Alert (info/success/warning/danger) | `<Alert variant="success" title="Done!">Saved</Alert>` |
| **Badges** | Badge (7 variants) | `<Badge variant="primary" dot>New</Badge>` |
| **Inputs** | Input, Textarea | `<Input label="Email" error="Invalid" />` |
| **Avatars** | Avatar, AvatarGroup | `<Avatar name="John" status="online" />` |
| **Tooltips** | Tooltip (4 positions) | `<Tooltip content="Save"><Button>Hover</Button></Tooltip>` |
| **Progress** | Progress, CircularProgress | `<Progress value={75} striped animated />` |
| **Dividers** | Divider (3 styles, 2 orientations) | `<Divider label="OR" />` |
| **Loaders** | Spinner, Skeleton, DotsLoader | `<Spinner size={32} />` |
| **Tags** | Tag (removable, 7 variants) | `<Tag variant="primary" removable>React</Tag>` |
| **Navbar** | Navbar (responsive, mobile drawer) | `<Navbar brand="App" items={[...]} />` |
| **Hero** | Hero (3 variants) | `<Hero title="Welcome" variant="gradient" />` |
| **Code** | Code block, InlineCode | `<Code code="const x = 10;" language="js" />` |
| **Navigation** | Tabs, Breadcrumb | `<Tabs items={[...]} variant="underline" />` |
| **Overlay** | Modal, Drawer | `<Modal open={open} onClose={...}>...</Modal>` |
| **States** | EmptyState, ErrorState, SuccessState | `<EmptyState title="No items" />` |

### Library Components (246 customizable components)

Auto-generated from the Toolverse web app's Component Builder. Each is a thin React wrapper. **All 257 components listed below:**

<details>
<summary><strong>📋 View all 257 library components by category</strong></summary>

#### Buttons (18)
`SolidButton`, `OutlineButton`, `PillButton`, `GlowButton`, `IconButton`, `_3DButton`, `GhostButton`, `FABButton`, `ToggleSwitch`, `LinkButton`, `BlockButton`, `GradientTextButton`, `MagneticButton`, `SlideBackground`, `WaveButton`, `GlowPulse`, `GradientShift`, `IconBounce`

#### Cards (24)
`BasicCard`, `GlassCard`, `GradientCard`, `NeonCard`, `PricingCard`, `HoverLiftCard`, `SpotlightCard`, `StatsCard`, `ProfileCard`, `_3DFlipCard`, `GradientBorderCard`, `ShineCard`, `MorphCard`, `FloatingCard`, `TiltCard`, `GlassHoverCard`, `HolographicCard`, `Retro80sCard`, `NeumorphicCard`, `AuroraGlowCard`, `PaperFoldCard`, `DarkGlassCard`, `PerspectiveCard`, `GradientMeshCard`

#### Alerts (16)
`InfoAlert`, `SuccessAlert`, `WarningAlert`, `ErrorAlert`, `GradientInfoAlert`, `DarkAlert`, `BorderedAlert`, `RoundedAlert`, `BannerAlert`, `GlassAlert`, `DismissibleAlert`, `ActionAlert`, `NeonAlert`, `GradientBorderAlert`, `BannerSlideAlert`, `IconBlockAlert`

#### Badges (10)
`SolidBadge`, `OutlineBadge`, `DotBadge`, `ShimmerBadge`, `PulseBadge`, `ChipBadge`, `IconBadge`, `CountBadge`, `ShineBadge`, `_3DBadge`

#### Inputs (16)
`TextInput`, `GlowInput`, `SearchBar`, `Textarea`, `Select`, `Checkbox`, `RoundedInput`, `UnderlinedInput`, `FloatingLabel`, `IconLeftInput`, `PasswordInput`, `SwitchToggle`, `GlassInput`, `IconInput`, `FloatingLabelInput`, `UnderlineInput`

#### Avatars (16)
*(circle, square, ring variants)* — `CircleAvatar`, `SquareAvatar`, `GradientAvatar`, `RoundedAvatar`, `StatusAvatar`, `GroupAvatar`, `InitialAvatar`, `RingAvatar`, `OnlineAvatar`, `BusyAvatar`, `AwayAvatar`, `OfflineAvatar`, `BorderAvatar`, `StackAvatar`, `IconAvatar`, `BadgeAvatar`

#### Tooltips (8)
`TopTooltip`, `BottomTooltip`, `LeftTooltip`, `RightTooltip`, `InfoTooltip`, `WarningTooltip`, `SuccessTooltip`, `ErrorTooltip`

#### Progress (16)
`ProgressBar`, `CircularProgress_progresscircular`, `GradientProgress_progressgradient`, `StripedProgress`, `StepProgress`, `WaveProgress`, `PulseProgress`, `_3DProgressBar`, `GlowProgressBar`, `MiniProgress`, `GradientBar`, `AnimatedProgress`, `SegmentedProgress`, `LinearProgress`, `RingProgress`, `HalfCircleProgress`

#### Dividers (10)
`LineDivider`, `TextDivider`, `GradientDivider`, `DashedDivider`, `DottedDivider`, `VerticalDivider`, `OrDivider`, `WaveDivider`, `GlowDivider`, `IconDivider`

#### Loaders (14)
`SkeletonLoader`, `Spinner`, `PulseLoader`, `BounceLoader`, `BarLoader`, `DotLoader`, `WaveLoader`, `GradientSpinner`, `OrbitLoader`, `GlowLoader`, `SquareLoader`, `CircleLoader`, `StripLoader`, `RippleLoader`

#### Tags (10)
`SolidTag`, `OutlineTag`, `ChipTag`, `RemovableTag`, `IconTag`, `GradientTag`, `DotTag`, `CountTag`, `StatusTag`, `NeonTag`

#### Navbar (10)
`TopNavbar`, `SideNavbar`, `FloatingNavbar`, `GlassNavbar`, `TransparentNavbar`, `DarkNavbar`, `GradientNavbar`, `MegaNavbar`, `StickyNavbar`, `MobileNavbar`

#### Hero (12)
`CenteredHero`, `SplitHero`, `VideoHero`, `GradientHero`, `MinimalHero`, `DarkHero`, `GlassHero`, `AuroraHero`, `NeonHero`, `ImageHero`, `CTAHero`, `FormHero`

#### Code (8)
`CodeBlock`, `InlineCodeBlock`, `TerminalBlock`, `GradientCode`, `DarkCode`, `LightCode`, `CopyCodeBlock`, `TabbedCode`

#### Navigation (12)
`UnderlineTabs`, `PillTabs`, `BoxedTabs`, `VerticalTabs`, `Breadcrumb`, `Stepper`, `Pagination`, `MenuBar`, `TabBar`, `BottomNav`, `SideNav`, `TabbedNav`

#### Overlay (10)
`CenterModal`, `SideModal`, `FullScreenModal`, `DrawerLeft`, `DrawerRight`, `DrawerTop`, `DrawerBottom`, `Dialog`, `Popup`, `Popover`

#### States (10)
`EmptyState_stateempty`, `ErrorState_stateerror`, `SuccessState_statesuccess`, `LoadingState`, `NotFoundState`, `OfflineState`, `MaintenanceState`, `ServerErrorState`, `PermissionDeniedState`, `ComingSoonState`

</details>

**Usage example — library components:**
```tsx
import { SolidButton, GradientCard, NeonAlert, GlowInput } from "toolverse";

<SolidButton text="Click Me" bgColor="#ff0000" textColor="#ffffff" borderRadius={8} />
<GradientCard text="Card content" gradientFrom="#6366f1" gradientTo="#8b5cf6" />
<NeonAlert text="Warning!" bgColor="#f59e0b" />
<GlowInput text="Search..." shadowColor="#6366f1" shadowBlur={20} />
```

**Customizable props** (all 246 library components accept these):
- `text` — content text
- `bgColor`, `textColor`, `borderColor` — colors
- `borderRadius`, `paddingX`, `paddingY`, `fontSize`, `fontWeight` — sizing
- `shadowX`, `shadowY`, `shadowBlur`, `shadowColor` — shadows
- `useGradient`, `gradientFrom`, `gradientTo` — gradients

### Icons (1,099 icons, 7 variants each)

```tsx
import { Heart, Home, Search, Bell, Star, Plus, Github } from "toolverse";

<Heart size={24} color="#ef4444" variant="line" />
<Home size={20} variant="solid" />
<Search size={16} variant="neon" color="#22d3ee" />
<Bell size={32} variant="aurora" />  {/* animated gradient */}
<Star size={24} variant="crystal3d" color="#a855f7" />  {/* 3D depth */}
```

**7 variants:**
| Variant | Description |
|---------|-------------|
| `line` | Default outline |
| `solid` | Filled |
| `duotone` | Halo effect |
| `aurora` | Animated multi-color gradient |
| `neon` | Cyberpunk glow |
| `glass` | Frosted glass |
| `crystal3d` | 3D depth with shadow |

---

## Three Ways to Use Toolverse

### Way 1: npm install (RECOMMENDED — easiest)

```bash
npm install toolverse
```

```tsx
import { Button } from "toolverse";
<Button>Click Me</Button>
```

**Pros:** Zero file creation, automatic updates, tree-shaking.
**Best for:** Most projects.

### Way 2: CLI (shadcn-style — own the code)

```bash
npx toolverse add button
```

```tsx
import { Button } from "./components/toolverse/Button";
<Button>Click Me</Button>
```

**Pros:** You own the code, full customization.
**Best for:** Teams who want to fork components.

### Way 3: Export as File (web app — single file, no 2-file problem!)

Visit [toolverse-official.vercel.app](https://toolverse-official.vercel.app) → Developer Studio → Component Builder → customize → click **"Export as File"**.

**🔥 NEW in v1.3.0:** React export now generates **SINGLE FILE** with embedded styles. No more `.tsx` + `.css` 2-file problem. Just one `.tsx` file — paste, import, use.

Available export formats:
- **React** (`.tsx` — single file with embedded CSS)
- **Vue** (`.vue` SFC — single file with `<template>`, `<script>`, `<style scoped>`)
- **Svelte** (`.svelte` — single file)
- **Angular** (`.ts` + `.html` + `.css` — 3 files, Angular CLI generates these automatically)
- **Vanilla HTML** (`.html` + `.css` — 2 files for static sites)

**Best for:** Non-React projects.

---

## Icon Export Formats

The web app's Icon Library supports 8 export formats:

| Format | Use case |
|--------|----------|
| **SVG** | Inline SVG markup — paste anywhere |
| **React** | `<Icon />` component with props |
| **Vue** | Vue SFC with template |
| **Svelte** | Svelte component |
| **JSX** | Plain JSX without React import |
| **PNG** | Raster image (transparent background) |
| **Figma** | Copy-paste into Figma as vector |
| **Data URL** | `data:image/svg+xml;base64,...` for CSS backgrounds |

---

## Theme Customization

```tsx
<ToolverseProvider theme={{
  colors: {
    primary: "#ff0000",      // Buttons, Badges, Progress turn red
    secondary: "#00ff00",
    accent: "#ec4899",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#0f172a",
    textMuted: "#64748b",
    border: "#e2e8f0",
  },
  radii: { sm: "4px", md: "12px", lg: "20px", full: "9999px" },
  spacing: { sm: "8px", md: "16px", lg: "24px" },
  fonts: { sans: "Inter, system-ui, sans-serif", mono: "JetBrains Mono, monospace" },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.06)",
    md: "0 8px 24px rgba(0,0,0,0.15)",
    lg: "0 16px 48px rgba(0,0,0,0.20)",
    glow: "0 0 24px rgba(255,0,0,0.5)",
  }
}}>
  <App />
</ToolverseProvider>
```

**Per-component override:**
```tsx
<Button style={{ background: "purple" }}>Custom</Button>
```

---

## CLI Commands

```bash
# Add a single component to your project
npx toolverse add button

# Add all handcrafted components
npx toolverse add all

# List available components
npx toolverse list
```

---

## Framework Support

| Framework | Status | How to use |
|-----------|--------|-----------|
| **React** | ✅ Stable | `npm install toolverse` |
| **Vue** | ✅ via Export | Web app → Export as File → `.vue` |
| **Svelte** | ✅ via Export | Web app → Export as File → `.svelte` |
| **Angular** | ✅ via Export | Web app → Export as File → `.ts` |
| **Vanilla HTML** | ✅ via Export | Web app → Export as File → `.html` |

---

## Publishing (for maintainers)

```bash
cd toolverse-npm

# Regenerate from web app source (components + icons)
node /home/z/my-project/scripts/generate-npm-package.js

# Build
npm install
npm run build

# Bump version
npm version patch    # 1.3.0 → 1.3.1
npm version minor    # 1.3.0 → 1.4.0
npm version major    # 1.3.0 → 2.0.0

# Publish
npm publish
```

---

## 🎨 Run the Playground locally

Want to **see all components live** before installing? Or contributing and want to see your changes?

The repo includes a Vite + React playground at `playground/`:

```bash
# Clone
git clone https://github.com/imranah10/toolverse.git
cd toolverse

# One command — installs deps + starts playground
npm run playground
```

Then open **http://localhost:5173** — you'll see all 17 handcrafted components rendered live:

- Buttons (8 variants + 4 sizes + states)
- Cards (hover, glow, with header/body/footer)
- Alerts (4 variants)
- Inputs (with error/hint states)
- Avatars (5 sizes + status + AvatarGroup)
- Icons (all 7 variants: line, solid, duotone, aurora, neon, glass, crystal3d)
- Overlays (Modal, Drawer, Tooltip, Tag, Badge)
- States (Empty/Error/Success + Loaders + Progress)

**Edit any file in `src/components/`, save, refresh browser — see your change instantly.**

> The playground uses Vite's alias feature to import directly from `src/index.ts`,
> so you don't even need to rebuild the package between changes.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full instructions.

---

## License

MIT © Toolverse

## Links

- **npm:** https://www.npmjs.com/package/toolverse
- **Website:** https://toolverse-official.vercel.app
- **Documentation:** https://toolverse-official.vercel.app/studio/developer
- **Issues:** https://github.com/toolverse/toolverse-npm/issues
