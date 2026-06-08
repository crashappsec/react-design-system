import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Input } from "@/registry/crashoverride/ui/input"

describe("Input", () => {
  it("renders with the hairline --input border and sharp radius", () => {
    render(<Input placeholder="you@company.com" />)
    const el = screen.getByPlaceholderText("you@company.com")
    expect(el.className).toMatch(/border-input/)
    expect(el.className).toMatch(/rounded-md/)
  })

  it("uses the neon focus ring", () => {
    render(<Input placeholder="key" />)
    const el = screen.getByPlaceholderText("key")
    expect(el.className).toMatch(/focus-visible:ring-ring/)
  })

  it("flips to the destructive token when aria-invalid", () => {
    render(<Input aria-invalid placeholder="bad" />)
    const el = screen.getByPlaceholderText("bad")
    expect(el.getAttribute("aria-invalid")).toBe("true")
    expect(el.className).toMatch(/aria-invalid:border-destructive/)
  })
})
