import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Badge } from "@/registry/crashoverride/ui/badge"

describe("Badge", () => {
  it("renders the label in the brand's lowercase mono voice", () => {
    render(<Badge>Active</Badge>)
    const el = screen.getByText("Active")
    expect(el.className).toMatch(/lowercase/)
    expect(el.className).toMatch(/font-mono/)
  })

  it("applies the neon soft tone (lime primary token)", () => {
    render(<Badge tone="neon">active</Badge>)
    const el = screen.getByText("active")
    expect(el.className).toMatch(/text-primary/)
    expect(el.className).toMatch(/bg-primary\/15/)
  })

  it("supports the outline variant with an accent border", () => {
    render(
      <Badge tone="magenta" variant="outline">
        inspect
      </Badge>,
    )
    const el = screen.getByText("inspect")
    expect(el.className).toMatch(/bg-transparent/)
    expect(el.className).toMatch(/border-chart-2\/40/)
  })

  it("renders a leading status dot when dot is set", () => {
    const { container } = render(<Badge dot>active</Badge>)
    const dot = container.querySelector('[aria-hidden]')
    expect(dot).not.toBeNull()
    expect(dot?.className).toMatch(/bg-current/)
  })
})
