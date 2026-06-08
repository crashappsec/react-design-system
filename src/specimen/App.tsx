import { useState } from "react"
import { Stack, Group, Center, Box, Grid } from "@/registry/crashoverride/ui/layout"
import { Divider } from "@/registry/crashoverride/ui/divider"
import { Button } from "@/registry/crashoverride/ui/button"

/**
 * Specimen app — local visual QA for the Crash Override registry.
 * Dark is the brand default; a toggle flips to light via [data-theme="light"]
 * on the document root. Each registry item gets a section here as it lands.
 */
export function App() {
  const [light, setLight] = useState(false)

  function toggle() {
    const root = document.documentElement
    const next = !light
    setLight(next)
    // Support both selector conventions the theme keys off of.
    root.setAttribute("data-theme", next ? "light" : "dark")
    root.classList.toggle("light", next)
    root.classList.toggle("dark", !next)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <header className="flex items-center justify-between border-b border-border pb-6 mb-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-chart-1">
            01 · design system
          </p>
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Crash Override
          </h1>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="bg-secondary text-secondary-foreground rounded-md px-4 h-10 font-mono text-sm border border-border"
        >
          {light ? "→ dark" : "→ light"}
        </button>
      </header>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Theme proof
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-primary text-primary-foreground rounded-md px-4 h-10 font-semibold">
            Primary action
          </button>
          <div className="bg-card text-card-foreground border border-border rounded-md px-4 py-3">
            Raised card surface
          </div>
          <span className="text-destructive font-mono text-sm">destructive</span>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Button
        </h2>
        <Group className="flex-wrap">
          <Button>Get Started</Button>
          <Button variant="secondary">Read the docs</Button>
          <Button variant="enterprise">Talk to a Human</Button>
          <Button variant="ghost">Cancel</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Layout primitives
        </h2>
        <Stack className="gap-4">
          <Group className="gap-2">
            <Box className="bg-card border border-border rounded-md px-3 py-2">Group A</Box>
            <Box className="bg-card border border-border rounded-md px-3 py-2">Group B</Box>
          </Group>
          <Divider />
          <Grid className="grid-cols-3">
            <Box className="bg-card border border-border rounded-md p-4">1</Box>
            <Box className="bg-card border border-border rounded-md p-4">2</Box>
            <Box className="bg-card border border-border rounded-md p-4">3</Box>
          </Grid>
          <Center className="h-24 bg-card border border-border rounded-md">
            <span className="font-mono text-sm">centered</span>
          </Center>
        </Stack>
      </section>
    </div>
  )
}
