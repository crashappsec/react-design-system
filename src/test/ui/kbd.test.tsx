import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Kbd } from "@/registry/crashoverride/ui/kbd"

describe("Kbd", () => {
  it("renders the key as a <kbd> in the mono, bordered brand voice", () => {
    render(<Kbd>K</Kbd>)
    const el = screen.getByText("K")
    expect(el.tagName).toBe("KBD")
    expect(el.className).toMatch(/font-mono/)
    expect(el.className).toMatch(/border/)
  })
})
