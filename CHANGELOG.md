# Changelog

All notable changes to **Toolverse** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.5.0] — 2026-09-12

### ⚡ Fixed — real tree-shaking (97% smaller bundles)
- **Icons**: every icon component now carries its own inline definition (was: shared `TOOLVERSE_ICONS.find()` lookup that forced bundlers to include all 1,009 icons for any single import)
- **Library components**: same fix — 243 components each carry their own def (was: shared `COMPONENTS.find()` lookup + a 338 KB dead array)
- **Verified with esbuild**: `import { Button, Plus }` bundle went from **317 KB → 8.8 KB minified** (~2.5 KB gzipped). Unused icons/components are fully dropped
- `TOTAL_COMPONENTS` / `TOTAL_ICONS` constants corrected to honest values (274 / 1,009)

### 🎉 Added — CLI v2 (zero dependencies, instant)
- **`add` now covers all 18 handcrafted component files** (was 5). Sources are copied live from the installed package's `src/components/` — zero duplication, always in sync. Aliases included (`spinner`→loader, `chip`→tag, `modal`→overlay…)
- **`npx toolverse icons <query>`** — icon search engine: search all 1,009 icons by name/tag/category, prints exact `import { X } from "toolverse"` snippets with all 7 variants. Bare `icons` lists categories with counts
- **`npx toolverse theme <preset>`** — 7 drop-in theme presets (indigo · midnight · rose · ocean · forest · cyber · mono). Writes a ready-to-paste `toolverse-theme.ts` with `ToolverseProvider` usage snippet
- **`npx toolverse stats`** — honest package contents at a glance
- **`npx toolverse doctor`** — Node/React/package environment health check

### 🔧 Changed
- **Honest counts everywhere**: 274 components (31 handcrafted + 243 library) + 1,009 icons — verified from `dist/index.d.ts` (1,286+ named exports). Old "263 / 1,099" figures were overstated
- package.json description + keywords updated (added `cli`)

### 📚 Docs
- README: full CLI v2 reference, corrected counts, cleaned maintainer section

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
