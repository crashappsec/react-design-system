# Contributing

This repo is a **shadcn registry**: `registry.json` is the single source of truth, and
`npx shadcn build` compiles it to static JSON in `public/r/`. Every change lands as an
item in `registry.json`, a source file under `src/registry/crashoverride/`, a test, and
a specimen entry.

## The component recipe

Adding a component (or block) is the same six steps every time:

1. **Source the base.** For a stock shadcn/Radix component, pull it into our source dir
   so our aliases (`components.json`) route it correctly:

   ```bash
   npx shadcn@latest add <base>      # writes to src/registry/crashoverride/ui/<name>.tsx
   ```

   For a brand-specific component or a block, author the file directly under
   `src/registry/crashoverride/ui/` (components) or `src/registry/crashoverride/blocks/`
   (composites).

2. **Apply brand deltas.** Theme it with the bridge tokens — never hardcode colours or
   fonts. Use semantic Tailwind classes that resolve through the theme:
   - colours: `bg-primary`, `text-muted-foreground`, `border-border`, `text-destructive`,
     capability palette `text-chart-1..5`
   - fonts: `font-display` (JetBrains Mono), `font-sans` (Inter), `font-mono` (Geist Mono)
   - radius: the brand 4px comes from `--radius`; use `rounded-md` etc.
   - import `cn` from `@/registry/crashoverride/lib/utils`
   - keep Radix `asChild` support where the base offers it

3. **Write a test.** Stock components get a render **smoke test**; brand components and
   blocks (which carry logic) get fuller assertions. Test files mirror the source path:
   - `src/test/ui/<name>.test.tsx` for components
   - `src/test/blocks/<name>.test.tsx` for blocks

   ```bash
   npx vitest run src/test/ui/<name>.test.tsx
   ```

4. **Register the item** in `registry.json`. Pick the right `type`:
   - `registry:ui` — a component · `registry:block` — a composite · `registry:hook` —
     a hook · `registry:style` — the theme.

   List `dependencies` (npm packages) and `registryDependencies` — always include
   `@crashoverride/theme`, plus any `@crashoverride/<component>` a block composes:

   ```jsonc
   {
     "name": "service-table",
     "type": "registry:block",
     "title": "Service table",
     "description": "…",
     "registryDependencies": [
       "@crashoverride/theme",
       "@crashoverride/table",
       "@crashoverride/status-badge"
     ],
     "files": [
       { "path": "src/registry/crashoverride/blocks/service-table.tsx", "type": "registry:block" }
     ]
   }
   ```

5. **Add it to the specimen** (`src/specimen/App.tsx`) so it renders in light + dark for
   visual QA.

6. **Build + verify + commit:**

   ```bash
   npx shadcn build && npx vitest run
   git add -A && git commit -m "feat(ui): <name>"
   ```

## Verify before opening a PR

```bash
npm run test            # vitest — all green
npm run registry:build  # shadcn build — your item appears in public/r/<name>.json
npm run build           # type-check + vite production build
npm run lint            # eslint — clean
```

The specimen app (`npm run dev`) is the human gate; review your component in both modes.

## Brand adherence lint

The design system ships an **adherence lint** ruleset that flags off-brand patterns
(deep imports into component internals, off-system colours/spacing, forbidden elements).
A copy lives at [`.adherence.oxlintrc.json`](./.adherence.oxlintrc.json) — treat it as the
canonical brand checklist.

```bash
npx oxlint --config .adherence.oxlintrc.json src/registry
```

> The ruleset originates from the design-system bundle and targets a specific
> oxlint/eslint toolchain; some rules (e.g. `no-restricted-syntax`) may not be recognised
> by every oxlint version. If the config fails to load, use it as a manual review
> reference (or pin a compatible toolchain in CI). The rules to internalise either way:
> import from item entry points (not internals), keep colours/fonts/spacing on the theme
> tokens, and prefer the registry's own primitives over ad-hoc markup.

## Public-repo hygiene (secret scanning)

This is a **public** repository. CI runs **gitleaks** on every push and pull request
(see `.github/workflows/`), and a finding fails the build. Never commit tokens, keys, or
credentials — not even in tests or fixtures. Use placeholders (`ghp_…`, `zero-test-org`).
If gitleaks flags a false positive, add a scoped allow rule rather than disabling the scan.

## License

The repository license is **still being finalized** by Crash Override, Inc. (see
[LICENSE](./LICENSE)). Until it is chosen, do not add third-party code under a license
that would constrain that decision, and flag any new runtime dependency's license in your PR.
