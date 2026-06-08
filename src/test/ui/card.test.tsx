import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/crashoverride/ui/card"

describe("Card", () => {
  it("renders a flat slate surface with a hairline border (no shadow)", () => {
    const { container } = render(<Card>Plain card</Card>)
    const el = container.firstElementChild as HTMLElement
    expect(el.className).toMatch(/bg-card/)
    expect(el.className).toMatch(/border-border/)
    expect(el.className).not.toMatch(/shadow-/)
  })

  it("enables the hover state when interactive", () => {
    const { container } = render(<Card interactive>Capability card</Card>)
    const el = container.firstElementChild as HTMLElement
    expect(el.className).toMatch(/cursor-pointer/)
    expect(el.className).toMatch(/hover:bg-accent/)
  })

  it("draws a capability accent bar on the top edge", () => {
    const { container } = render(<Card accent="magenta">Accented</Card>)
    const el = container.firstElementChild as HTMLElement
    expect(el.style.borderTopWidth).toBe("3px")
    expect(el.style.borderTopColor).toBe("var(--color-chart-2)")
  })

  it("composes header slots", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Service health</CardTitle>
          <CardDescription>last scanned 2m ago</CardDescription>
        </CardHeader>
        <CardContent>body</CardContent>
      </Card>,
    )
    expect(screen.getByText("Service health")).toBeInTheDocument()
    expect(screen.getByText("last scanned 2m ago")).toBeInTheDocument()
    expect(screen.getByText("body")).toBeInTheDocument()
  })
})
