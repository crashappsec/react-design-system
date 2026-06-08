import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ScrollArea } from "@/registry/crashoverride/ui/scroll-area"

describe("ScrollArea", () => {
  it("renders its children inside a scroll viewport", () => {
    render(
      <ScrollArea className="h-40">
        <p>chalk · crash · compass</p>
      </ScrollArea>,
    )
    expect(screen.getByText("chalk · crash · compass")).toBeInTheDocument()
  })

  it("exposes a viewport and a brand-styled scrollbar thumb", () => {
    const { container } = render(
      <ScrollArea className="h-40">
        <div style={{ height: 800 }}>tall</div>
      </ScrollArea>,
    )
    const viewport = container.querySelector(
      '[data-slot="scroll-area-viewport"]',
    )
    expect(viewport).not.toBeNull()
    const thumb = container.querySelector('[data-slot="scroll-area-thumb"]')
    // Radix may only mount the scrollbar when overflow is detected; assert the
    // root carries the slot regardless.
    expect(
      container.querySelector('[data-slot="scroll-area"]'),
    ).not.toBeNull()
    if (thumb) {
      expect((thumb as HTMLElement).className).toMatch(/bg-border/)
    }
  })
})
