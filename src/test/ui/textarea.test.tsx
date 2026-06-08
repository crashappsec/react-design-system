import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Textarea } from "@/registry/crashoverride/ui/textarea"

describe("Textarea", () => {
  it("renders with the hairline --input border and sharp radius", () => {
    render(<Textarea placeholder="Describe the incident…" />)
    const el = screen.getByPlaceholderText("Describe the incident…")
    expect(el.className).toMatch(/border-input/)
    expect(el.className).toMatch(/rounded-md/)
  })

  it("uses the neon focus ring and is vertically resizable", () => {
    render(<Textarea placeholder="notes" />)
    const el = screen.getByPlaceholderText("notes")
    expect(el.className).toMatch(/focus-visible:ring-ring/)
    expect(el.className).toMatch(/resize-y/)
  })

  it("flips to the destructive token when aria-invalid", () => {
    render(<Textarea aria-invalid placeholder="bad" />)
    const el = screen.getByPlaceholderText("bad")
    expect(el.getAttribute("aria-invalid")).toBe("true")
    expect(el.className).toMatch(/aria-invalid:border-destructive/)
  })
})
