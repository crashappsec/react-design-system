import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { StatusBadge } from "@/registry/crashoverride/ui/status-badge"

describe("StatusBadge", () => {
  it("renders the status label lowercased", () => {
    render(<StatusBadge status="healthy" />)
    expect(screen.getByText("healthy")).toBeInTheDocument()
  })
  it("maps critical to the destructive token", () => {
    render(<StatusBadge status="critical" data-testid="b" />)
    expect(screen.getByTestId("b").className).toMatch(/text-destructive|bg-destructive/)
  })
})
