import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Label } from "@/registry/crashoverride/ui/label"

describe("Label", () => {
  it("renders in the brand's uppercase mono voice", () => {
    render(<Label htmlFor="email">Work email</Label>)
    const el = screen.getByText("Work email")
    expect(el.className).toMatch(/uppercase/)
    expect(el.className).toMatch(/font-mono/)
  })

  it("associates with its control via htmlFor", () => {
    render(<Label htmlFor="email">Work email</Label>)
    const el = screen.getByText("Work email")
    expect(el.getAttribute("for")).toBe("email")
  })
})
