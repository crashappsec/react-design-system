# Crash Override — React Design System

A public **shadcn registry** that packages the Crash Override Design System: a brand
theme (the oklch light+dark token bridge + fonts) plus 60+ branded components and a
handful of composite blocks. Any shadcn app installs branded UI with one command:

```bash
npx shadcn add @crashoverride/<name>
```

> **Tag. Track. Trust.** — The Data Plane for Software in the AI Era.

## Brand in one breath

Dark-first surfaces · **Atomic-lime** primary (Fandango in light mode) · **JetBrains
Mono** (display) / **Inter** (body) / **Geist Mono** (mono) · sharp **4px** radius. The
`theme` item ships the oklch light+dark bridge so every component tracks both modes
automatically — no per-component theming required.

## Consume the registry

**1. Point `components.json` at the `@crashoverride` namespace.** Add the `registries`
block (or merge it into your existing one):

```jsonc
// components.json
{
  "registries": {
    "@crashoverride": "https://crashappsec.github.io/react-design-system/r/{name}.json"
  }
}
```

**2. Install the theme first** — it is the keystone every component depends on (it
carries the brand tokens and fonts):

```bash
npx shadcn add @crashoverride/theme
```

**3. Add components and blocks** as you need them:

```bash
npx shadcn add @crashoverride/button
npx shadcn add @crashoverride/card
npx shadcn add @crashoverride/stat-card-row   # a composite block
```

Each item resolves to JSON served from GitHub Pages at
`https://crashappsec.github.io/react-design-system/r/<name>.json`.

## What's in the registry

- **theme** — brand token bridge (oklch light+dark) + JetBrains Mono / Inter / Geist Mono.
- **Components (64)** — real shadcn/Radix components themed for the brand: layout
  primitives, forms, overlays, navigation, data display, plus brand-specific extras
  (`status-badge`, `tag`, `code-panel`, `typography`, `chart`, `logo`, `tagline`).
- **Blocks (3)** — composites built from the components above:
  `stat-card-row`, `service-detail-header`, `service-table`.
- **Hooks** — `use-mobile`.

The authoritative list of items lives in [`registry.json`](./registry.json), and the
generated JSON in `public/r/` after a build.

## Live site

The registry and its brand guidelines are published to GitHub Pages:

- **Landing page:** https://crashappsec.github.io/react-design-system/
- **Registry items:** `https://crashappsec.github.io/react-design-system/r/<name>.json`
- **Brand guidelines:** `https://crashappsec.github.io/react-design-system/guidelines/`

## Develop locally

```bash
npm install
npm run dev             # specimen app — visual QA of every registry item
npm run registry:build  # compile registry.json -> public/r/*.json (shadcn build)
npm run test            # vitest (smoke tests + build validation)
npm run build           # type-check + vite production build
npm run lint            # eslint
```

The **specimen app** (`src/specimen/`) renders every item in both light and dark for
visual review; it is the human gate. `src/test/registry-build.test.ts` is the machine
gate that validates the build output.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the component recipe (how to add a new item).

## Plan & spec

The implementation plan and design spec live in the COMPASS repository under
`docs/superpowers/plans/2026-06-08-crash-override-react-design-system.md`.

## License

[MIT](./LICENSE) © Crash Override, Inc. Free to use, copy, modify, and vendor into your
own applications (including via `shadcn add`). The Crash Override name, logo, and visual
identity remain trademarks of Crash Override, Inc.
