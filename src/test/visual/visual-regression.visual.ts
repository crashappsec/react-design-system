import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { test, expect } from "@playwright/test"

/**
 * Visual regression on token bumps.
 *
 * The harness is the Storybook static build. We snapshot a representative slice:
 *  - every Foundations docs page (Colors, Typography, Spacing & Radius, Theming,
 *    Introduction, Brand Assets). These render the tokens directly, so a token
 *    change shows here first.
 *  - one story per component/block family, for broad component coverage without
 *    snapshotting all ~380 entries.
 *
 * The set is DERIVED from storybook-static/index.json at runtime (no hardcoded
 * id list to drift) so new components are picked up automatically; refresh the
 * baselines when that happens.
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const INDEX = path.resolve(__dirname, "../../../storybook-static/index.json")

type Entry = { id: string; title: string; name: string; type: "story" | "docs" }

function representativeIds(): { id: string; slug: string }[] {
  if (!fs.existsSync(INDEX)) {
    throw new Error(
      `storybook-static/index.json not found at ${INDEX}. Run \`npm run build-storybook\` first.`,
    )
  }
  const entries: Entry[] = Object.values(
    (JSON.parse(fs.readFileSync(INDEX, "utf8")) as { entries: Record<string, Entry> })
      .entries,
  )

  // Foundations docs pages.
  const foundations = entries
    .filter((e) => e.type === "docs" && e.id.startsWith("foundations-"))
    .map((e) => e.id)

  // One story per component/block family. Prefer a stable, representative story
  // name when present, else the first story declared for that title.
  const preferred = ["Playground", "Default", "Primary", "Basic", "AllVariants"]
  const byTitle = new Map<string, Entry[]>()
  for (const e of entries) {
    if (e.type !== "story") continue
    if (!(e.title.startsWith("Components/") || e.title.startsWith("Blocks/"))) continue
    const list = byTitle.get(e.title) ?? []
    list.push(e)
    byTitle.set(e.title, list)
  }
  const families: string[] = []
  for (const list of byTitle.values()) {
    const chosen =
      preferred.map((p) => list.find((e) => e.name === p)).find(Boolean) ?? list[0]
    if (chosen) families.push(chosen.id)
  }

  return [...foundations, ...families]
    .sort()
    .map((id) => ({ id, slug: `${id}.png` }))
}

const STORIES = representativeIds()

test.describe("visual regression (token-bump guard)", () => {
  for (const { id, slug } of STORIES) {
    test(id, async ({ page }) => {
      // iframe.html renders the bare story (no Storybook chrome) so the snapshot
      // is the component on the brand surface, not the manager UI.
      await page.goto(`/iframe.html?id=${id}&viewMode=story`)

      // Let webfonts settle (a font swap would otherwise produce a flaky diff).
      await page.evaluate(() => (document as Document & { fonts: FontFaceSet }).fonts.ready)
      await page.waitForLoadState("networkidle")

      await expect(page).toHaveScreenshot(slug, { fullPage: true })
    })
  }
})
