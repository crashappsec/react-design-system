# Gibson Home / Brand Spec (canonical)

**Provenance:** Mark Curphey, 2026-06-12. This is the canonical design prompt
for the Gibson admin homepage ("Mission Control") and nav restructure. It is
recorded here because the **`gibson-theme` registry item is the brand carrier
for internal apps**: any app that vendors `gibson-theme` inherits this design
language, and changes to the theme must stay consistent with it.

Implementation of record: `crashappsec/digital-marketing` PR #1767
(`packages/admin`), spec mirror at `docs/gibson/gibson-home-spec.md` in that
repo. Theme consumer wiring: digital-marketing PR #1769.

## What the theme must express (from the prompt)

- **Dark-led, lime/phosphor primary** — "Theme to verify against: dark (lime
  primary, registry tokens)". The `gibson-theme` item carries near-black
  indigo surfaces with phosphor-lime primary; the light block stays the corp
  light. Internal-app chrome (terminal hero, ticker tape, status chips,
  amber DEV pills) must be expressible in registry tokens so the theme — not
  per-app CSS — carries the brand.
- **Mono-led status chrome** — uppercase mono pills (amber "DEV"), stock-style
  ticker entries, terminal/boot-sequence styling. Production surfaces stay
  unmarked; status is the quiet default.
- **Real data only** — tickers, counts and activity surfaces render only real
  feeds (GitHub, Netlify, CMS). No fabricated numbers, ever.
- **Reduced-motion parity** — every animated brand element (teletype boot,
  marquee tape) must have an instant/static prefers-reduced-motion rendering.

## The canonical prompt (verbatim)

> Implement the Gibson admin nav restructure + new homepage (packages/admin):
>
> NAV (src/components/sidebar/sidebarConfig.ts):
> - Dissolve "The Mainframe" group: Home, Feed (the intranet feed, moved off /),
>   Calendar, What's Happening and People become standalone top-level links.
> - Rename the "Pages" subgroup to "Templates" and merge all "Global" items
>   (Header Menu, Footer, Testimonials, Media, Global Components) into it.
> - Merge "Publishing" into "Editorial" (Content Calendar, Slop Audit, Docs Sync
>   join Editorial; the Publishing subgroup disappears).
> - Add status: "production" | "development" | "coming-soon" to NavItem.
>   Dev today: Feed/Intranet, Calendar, What's Happening, Slop Audit. Existing
>   disabled placeholders (SEO & AEO, Behavior, System Status) become
>   coming-soon and keep the greyed-out treatment.
> - Render in-development items with a small uppercase mono pill (amber "DEV")
>   right-aligned on the row. Production items stay unmarked (status is the
>   quiet default).
> - Prefer deriving status from the Features stage registry (/settings/features)
>   over hardcoding, so badges can't go stale.
>
> HOMEPAGE (/): replace the Mainframe feed default with a landing page —
> variant A "Mission Control": Status-board: live console columns, area grid,
> hack strip.
>
> First-visit boot terminal — style "Hero shell": The terminal IS the hero —
> boots at the top, homepage content visible below. The shell replaces any
> standalone hero heading/vision section (no "THE GIBSON" text block — the
> sidebar wordmark anchors the brand); homepage content stays visible below the
> shell. Types teletype-style (click to skip), dismissible, dismissal persisted
> in localStorage so it never auto-plays again; a small mono ">_" button
> (aria-label "Replay boot sequence") brings it back. prefers-reduced-motion
> renders the lines instantly.
>
> PERMANENT stock-style ticker tape (part of the chrome, always on):
> symbol-style entries from real data only — running deploys, open-PR +
> open-issue counts, P0 issues (red), fresh merges, latest deploy. PLACEMENT:
> while the boot shell is present the tape sits directly BELOW it; once the
> shell is dismissed the tape is the TOP element of the page and
> position:sticky so it stays pinned while scrolling. The ">_" replay control
> docks into the tape's right edge when the shell is dismissed. Live updates:
> the feeding queries poll (~60s refetchInterval) while the page is open.
> Marquee pauses on hover/focus; prefers-reduced-motion renders a static row;
> What's Happening items can feed it later.
>
> Modules: what Gibson is + where it's heading (source copy from
> docs/gibson/gibson-platform-spec.md — wording needs Mark's sign-off before
> ship), Now/Next/Later roadmap, live dev activity (deploys, open PRs, open
> issues via real GitHub/Netlify data — no fabricated numbers), and a "hack on
> Gibson" panel with the real worktree + dev:mainframe commands. The feed
> itself moves to its own route (e.g. /feed) marked in-development.
>
> Theme to verify against: dark (lime primary, registry tokens).
