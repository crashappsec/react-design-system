import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Button } from "@/registry/crashoverride/ui/button"

describe("Button", () => {
  it("renders the label and primary classes by default", () => {
    render(<Button>Get Started</Button>)
    const el = screen.getByRole("button", { name: "Get Started" })
    expect(el.className).toMatch(/bg-primary/)
  })

  it("applies the enterprise variant", () => {
    render(<Button variant="enterprise">Talk to a Human</Button>)
    const el = screen.getByRole("button", { name: "Talk to a Human" })
    expect(el.className).toMatch(/bg-chart-1/)
  })

  it("renders as a child element via asChild", () => {
    render(
      <Button asChild>
        <a href="/docs">Read the docs</a>
      </Button>,
    )
    const link = screen.getByRole("link", { name: "Read the docs" })
    expect(link.getAttribute("href")).toBe("/docs")
    expect(link.className).toMatch(/bg-primary/)
  })
})
