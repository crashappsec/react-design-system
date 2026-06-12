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
    "@crashoverride": "https://crashappsec.github.io/react-registry/r/{name}.json"
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
`https://crashappsec.github.io/react-registry/r/<name>.json`.

## Pinning to a registry major version

The unversioned path (`r/{name}.json`) always resolves to the current major. If you
need a stable pin -- for example, when you want to control exactly when you absorb
breaking token changes -- use the versioned path instead:

```jsonc
// components.json
{
  "registries": {
    "@crashoverride": "https://crashappsec.github.io/react-registry/r/v1/{name}.json"
  }
}
```

**Support policy.** The latest two released majors are actively maintained. Once a
third major ships, the oldest major enters its end-of-life window; its frozen JSON
remains served from GitHub Pages but receives no further updates.

**How versioning works.** After `shadcn build` emits `public/r/*.json`,
`scripts/version-registry.mjs` copies those files into `public/r/v{M}/`. The
unversioned path is the latest-major alias by construction. When a breaking change
requires a new major, the prior `public/r/v{M}/` snapshot is committed under
`frozen/r/v{M}/` and is served verbatim by Pages from that point forward; it is
never regenerated from source.

**Composing pinning with automated refresh.** The `registry-refresh.yml` workflow
(described in "Staying current" below) re-runs `npx shadcn add --overwrite` using
whichever URL is in your `components.json`:

- **Pinned consumers** (`r/v1/{name}.json`) re-vendor the latest files within their
  major. They receive non-breaking updates automatically and absorb a major bump only
  when they deliberately update the version number in `components.json`.
- **Unpinned consumers** (`r/{name}.json`) always track the current major. The
  refresh workflow pulls the newest files on each run, including across major bumps.

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
    uses: crashappsec/react-registry/.github/workflows/registry-refresh.yml@main
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

## Token and guideline canon

The **source of truth for brand tokens and design guidelines** is the
[crashappsec/brand-visual](https://github.com/crashappsec/brand-visual) repository,
published to https://crashappsec.github.io/brand-visual/.

This repo (`react-registry`) is the **React implementation layer**: it consumes
`@crashoverride/brand-tokens` (published from brand-visual) to materialize
`src/registry/crashoverride/theme/tokens.css`, and packages the result as a shadcn
registry (components + the theme item). Design decisions, color values, typography
specs, and brand assets all originate in brand-visual; changes to the token canon
flow into this repo through the automated staleness-gate CI and registry-refresh workflow.

## Live site

The registry and its brand guidelines are published to GitHub Pages:

- **Landing page:** https://crashappsec.github.io/react-registry/
- **Registry items:** `https://crashappsec.github.io/react-registry/r/<name>.json`
- **Brand guidelines:** `https://crashappsec.github.io/react-registry/guidelines/`

## Develop locally

```bash
npm install
npm run dev             # specimen app — visual QA of every registry item
npm run registry:build  # compile registry.json -> public/r/*.json (shadcn build)
npm run test            # vitest (smoke tests + build validation)
npm run test:storybook  # axe a11y smoke-check (needs a served storybook-static)
npm run build           # type-check + vite production build
npm run lint            # eslint
```

The **specimen app** (`src/specimen/`) renders every item in both light and dark for
visual review; it is the human gate. `src/test/registry-build.test.ts` is the machine
gate that validates the build output.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the component recipe (how to add a new item).

## Accessibility

The components are built on **Radix primitives, which carry the interaction
accessibility** (keyboard, focus management, ARIA roles and states) for us. On top of
that, an **axe smoke-check keeps the rendered, themed output honest**: the Storybook
a11y addon runs in `test: error` mode, so every story is scanned by axe and any
violation (missing accessible name, bad role nesting, insufficient contrast) **fails the
story test**. The `a11y` CI job builds Storybook, serves it, and runs the test runner on
every push and PR.

Run it locally:

```bash
npm run build-storybook
npx http-server storybook-static -p 6006 -s &
npx wait-on http://127.0.0.1:6006
npm run test:storybook -- --url http://127.0.0.1:6006
```

> **Known contrast debt.** A handful of brand-palette tones (Fandango cobalt and
> Jazzberry magenta text, and `muted-foreground` micro-text) sit just under the 4.5:1
> AA ratio at small sizes on the dark surface. Those values come from the
> [brand-visual](https://github.com/crashappsec/brand-visual) token canon (materialized
> into `theme/tokens.css` and gated by CI here), so the fix belongs upstream. Those few
> stories scope **only** the `color-contrast` rule off, each with a justifying comment;
> every other axe rule still runs on them.

## Visual regression on token bumps

A **token change should not silently restyle the system**, so a Playwright screenshot
suite (`src/test/visual/`) snapshots a representative slice of the Storybook build (the
Foundations pages + one story per component/block family) and compares it to committed
baselines. The `visual-regression` workflow runs **only when a token-affecting path
changes** (`package.json`, `package-lock.json`, `src/registry/crashoverride/theme/**`),
uploads the diff images as an artifact on failure, and an intentional change is accepted
by refreshing the baselines.

```bash
npm run build-storybook
npx http-server storybook-static -p 6006 -s &
npx wait-on http://127.0.0.1:6006
npm run test:visual                      # verify against committed baselines
npm run test:visual -- --update-snapshots  # accept an intentional visual change
```

> **Baselines are per-OS.** chromium renders fonts differently on macOS vs Linux, so
> snapshots carry a `-{platform}` suffix. The committed `-darwin` set is the local
> reference; the **`-linux` set used by CI is generated in CI**. Run the
> `visual-regression` workflow's `workflow_dispatch` (Actions tab) to seed or refresh it
> on a branch. This avoids the flaky-baseline trap of committing macOS pixels that CI
> can never match.

## Plan & spec

The implementation plan and design spec live in the COMPASS repository under
`docs/superpowers/plans/2026-06-08-crash-override-react-design-system.md`.

## License

[MIT](./LICENSE) © Crash Override, Inc. Free to use, copy, modify, and vendor into your
own applications (including via `shadcn add`). The Crash Override name, logo, and visual
identity remain trademarks of Crash Override, Inc.
