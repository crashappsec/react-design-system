import { defineConfig, devices } from "@playwright/test"

/**
 * Visual-regression config. The token-bump guard.
 *
 * Snapshots a representative slice of the Storybook static build (the foundation
 * pages + one story per component/block family) so a change to the brand tokens
 * surfaces as an image diff. Runs ONLY against the already-built, already-served
 * `storybook-static` (we do not start a dev server here): build + serve it on
 * 6006 first, e.g.
 *
 *   npm run build-storybook
 *   npx http-server storybook-static -p 6006 -s &
 *   npx wait-on http://127.0.0.1:6006
 *   npm run test:visual                 # verify against committed baselines
 *   npm run test:visual -- --update-snapshots   # accept an intentional change
 *
 * Baselines live next to the spec under src/test/__screenshots__/ (see
 * snapshotPathTemplate). They are committed; CI refreshes/verifies them.
 */
const BASE_URL = process.env.STORYBOOK_URL ?? "http://127.0.0.1:6006"

export default defineConfig({
  testDir: "./src/test/visual",
  // Our visual specs are *.visual.ts so the vitest unit glob never picks them up.
  testMatch: /.*\.visual\.ts/,
  // {platform} keeps per-OS baselines side by side: chromium renders fonts
  // differently on macOS vs Linux, so a single shared baseline would always
  // diff in CI. The committed -darwin set is the local reference; CI generates
  // and commits the -linux set (see the workflow's update mode).
  snapshotPathTemplate:
    "src/test/__screenshots__/{testFileName}/{arg}-{platform}{ext}",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // No retries: a snapshot is deterministic or it is a real diff.
  retries: 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  use: {
    baseURL: BASE_URL,
    // Brand surface is dark; keep the colour scheme pinned so it never flips.
    colorScheme: "dark",
  },
  // Pixel-diff tolerance. Calibrated against a real token change: flipping the
  // primary accent diffed the affected stories by ~1% of pixels, so the ceiling
  // sits well under that (0.5%) to catch a token shift, while still absorbing
  // the sub-pixel antialiasing that differs between local and CI rendering
  // (typically < 0.1%). `threshold` is the per-pixel colour sensitivity.
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.005,
      threshold: 0.15,
      animations: "disabled",
      caret: "hide",
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1024, height: 768 } },
    },
  ],
})
