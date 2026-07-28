# Contributing to Toolverse

First off, thanks for taking the time to contribute! 🎉

This document describes how to set up the project and submit changes.

## Prerequisites

- Node.js 16+
- npm 8+

## Setup

```bash
# Clone your fork
git clone https://github.com/<your-username>/toolverse.git
cd toolverse

# Install dependencies
npm install

# Build the package
npm run build
```

## 🎨 Run the Playground (SEE YOUR CHANGES LIVE)

The playground is a Vite + React app that imports the local package, so any change
you make to `src/` is immediately visible in the browser.

```bash
# One command — installs playground deps + starts dev server
npm run playground

# Or step by step:
npm run playground:install   # first time only
npm run playground:dev        # start dev server
```

Then open **http://localhost:5173** — you'll see all 17 handcrafted components live:

- Buttons (8 variants + 4 sizes + states)
- Cards (hover, glow, with header/body/footer)
- Alerts (info/success/warning/danger)
- Inputs (with error/hint states)
- Avatars (5 sizes + status + AvatarGroup)
- Icons (all 7 variants: line, solid, duotone, aurora, neon, glass, crystal3d)
- Overlays (Modal, Drawer, Tooltip, Tag, Badge)
- States (Empty/Error/Success + Loaders + Progress)

**Edit any file in `src/components/`, save, refresh browser — see your change instantly.**

> The playground uses Vite's alias feature to import directly from `../src/index.ts`,
> so you don't even need to rebuild the package between changes.

## Project Structure

```
toolverse/
├── src/
│   ├── components/          # 17 handcrafted premium components
│   ├── generated/           # AUTO-GENERATED — 246 library components + 999 icons
│   ├── provider.tsx         # ToolverseProvider + theme context
│   ├── theme.ts             # Theme system
│   └── index.ts             # Barrel export
├── playground/              # 🎨 Vite + React app for LIVE preview
│   ├── src/
│   │   ├── App.tsx          # Showcase of all components
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts       # Aliases "toolverse" to ../src
│   └── index.html
├── cli/
│   └── index.js             # npx toolverse add <component> CLI
├── dist/                    # Built output (gitignored)
├── package.json
├── tsconfig.json
└── README.md
```

## Adding a New Component (handcrafted)

1. Create `src/components/MyComponent.tsx`:

```tsx
"use client";
import React from "react";
import { useToolverseTheme } from "../provider";

export interface MyComponentProps {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export const MyComponent: React.FC<MyComponentProps> = ({ variant = "primary", children }) => {
  const theme = useToolverseTheme();
  return <div style={{ color: theme.colors[variant] }}>{children}</div>;
};

export default MyComponent;
```

2. Export it from `src/index.ts`:

```ts
export { MyComponent } from "./components/MyComponent";
export type { MyComponentProps } from "./components/MyComponent";
```

3. Build and test:

```bash
npm run build
npm pack --dry-run
```

4. Submit a pull request describing what you added and why.

## Adding a New Icon (handcrafted)

1. Add to `src/components/Icons.tsx`:

```tsx
export const MyIcon: React.FC<IconProps> = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
  </Svg>
);
```

2. Export from `src/index.ts`.

## Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new Modal component
fix: Tooltip positioning on mobile
docs: update README with icon examples
chore: bump dependencies
refactor: simplify Button variants
```

## Pull Request Process

1. Fork the repo and create your branch from `main`.
2. Make your changes. Keep commits focused — one feature per PR is best.
3. Test locally: `npm run build`.
4. Update README.md if you add a new component or change public API.
5. Open a pull request with a clear description.

## Code Style

- TypeScript strict mode
- Functional components with hooks
- Inline styles (no CSS-in-JS runtime)
- Props typed with interfaces
- Default exports for components, named for utilities

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
