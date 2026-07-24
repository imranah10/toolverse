# Changelog

All notable changes to **Toolverse** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.0] — 2026-07-24

### 🎉 Added
- **Single-file React export** — Customized components now export as ONE `.tsx` file with embedded CSS (no more 2-file problem)
- **Comprehensive documentation** — 7 tabs in Developer Studio (Quick Start, Components, Icons, Custom Components, All Names, CLI, Theme)
- **All 257 component names listed** in documentation with searchable interface
- **Icon export formats table** — 8 formats explained (SVG, React, Vue, Svelte, JSX, PNG, Figma, Data URL)
- **Custom component workflow** — Step-by-step guide for using exported components

### 🔧 Fixed
- React export no longer requires separate `.css` file — styles embedded via `<style>` tag
- Improved error handling in CodeBrain API

---

## [1.2.0] — 2026-07-24

### 🎉 Added
- **246 library components** auto-generated from web app's Component Builder
- **999 library icons** auto-generated from web app's icon library
- **Total: 263 components + 1,099 icons = 1,260+ named exports**
- Framework-agnostic export formats (Vue, Svelte, Angular, HTML)

---

## [1.1.0] — 2026-07-23

### 🎉 Added
- **12 new handcrafted components**:
  - `Avatar`, `AvatarGroup` — image/initials, 5 sizes, 3 shapes, status, ring
  - `Tooltip` — 4 positions, configurable delay
  - `Progress`, `CircularProgress` — linear + circular, striped/animated
  - `Divider` — 3 styles, 2 orientations, optional label
  - `Spinner`, `Skeleton`, `DotsLoader` — three loader styles
  - `Tag` — removable chips, 7 variants
  - `Navbar` — responsive with mobile drawer
  - `Hero` — 3 variants with badge, CTAs
  - `Code`, `InlineCode` — syntax-styled code block with copy button
  - `Tabs`, `Breadcrumb` — navigation components
  - `Modal`, `Drawer` — overlay components
  - `EmptyState`, `ErrorState`, `SuccessState` — pre-built states
- **100 handcrafted icons** with 7 variants each (line, solid, duotone, aurora, neon, glass, crystal3d)

---

## [1.0.0] — 2026-07-23

### 🎉 Initial Release
- **5 handcrafted components**: Button, Card, Alert, Badge, Input
- **Theme system** with `ToolverseProvider` and `useToolverseTheme` hook
- **CLI** — `npx toolverse add <component>` (shadcn/ui style)
- **TypeScript** — full type definitions
- **MIT License**

---

## How to Update This Changelog

When you make changes, add an entry under "Unreleased" at the top:

```markdown
## [Unreleased]

### Added
- New feature X

### Changed
- Improved Y

### Fixed
- Bug Z
```

When you publish a new version to npm:
1. Replace `[Unreleased]` with `[1.X.0] — YYYY-MM-DD`
2. Commit: `git commit -am "chore: release v1.X.0"`
3. Tag: `git tag v1.X.0`
4. Push: `git push origin main --tags`
5. Publish: `npm publish`
