# Crash Override — Marketing React Design System

A public **shadcn registry** that packages the Crash Override Design System: a brand
theme (the oklch light+dark token bridge + fonts) plus 60+ branded components and a
handful of composite blocks. Any shadcn app installs branded UI with one command:

```bash
npx shadcn add @crashoverride/<name>
```

> **Tag. Track. Trust.** — The Data Plane for Software in the AI Era.

> **Scope.** This design system is for Crash Override's **marketing properties** (the
> corporate site `crashoverride.com` and the marketing/ops admin) and **open-source
> projects** (Chalk, Ocular, con4m, COMPASS). The **product Console / Platform is not in
> scope yet** — don't adopt it there until it's been formally onboarded.

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

## Staying current — automated refresh PRs

shadcn installs are **vendored copies**: once added, your app holds a snapshot and
does not update itself when the registry changes. Add the refresh workflow and your
app gets a PR whenever the upstream design system publishes changes:

```yaml
# .github/workflows/design-refresh.yml
name: Design system refresh
on:
  schedule:
    - cron: "23 7 * * 1-5"   # weekday mornings UTC
  workflow_dispatch:
permissions:
  contents: write
  pull-requests: write
jobs:
  refresh:
    uses: crashappsec/react-design-system/.github/workflows/registry-refresh.yml@main
    with:
      items: theme                  # space-separated registry items to track
      # working-directory: ui       # if components.json is not at the repo root
```

It re-runs `npx shadcn add --overwrite` for the listed items; if nothing changed it
exits quietly, otherwise it opens a `design-refresh/registry` PR with the diff.
Requires the repo/org Actions setting "Allow GitHub Actions to create and approve
pull requests". PRs opened with the default token do not trigger your CI — pass a
PAT/App token as the `token` secret if you want CI on refresh PRs.

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
