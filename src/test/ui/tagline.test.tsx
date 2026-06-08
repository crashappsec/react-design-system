import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Tagline } from "@/registry/crashoverride/ui/tagline"

describe("Tagline", () => {
  it("renders the three liturgy words", () => {
    render(<Tagline />)
    expect(screen.getByText(/Tag\./)).toBeInTheDocument()
    expect(screen.getByText(/Track\./)).toBeInTheDocument()
    expect(screen.getByText(/Trust\./)).toBeInTheDocument()
  })

  it("colours the words as a traffic light (red → amber → green)", () => {
    render(<Tagline />)
    const tag = screen.getByText(/Tag\./)
    const track = screen.getByText(/Track\./)
    const trust = screen.getByText(/Trust\./)
    // three distinct colour classes
    const classes = [tag.className, track.className, trust.className]
    expect(new Set(classes).size).toBe(3)
    // semantic slot hooks so consumers can theme each word
    expect(tag.className).toMatch(/t-tag/)
    expect(track.className).toMatch(/t-track/)
    expect(trust.className).toMatch(/t-trust/)
  })

  it("sits on a black plate", () => {
    render(<Tagline data-testid="plate" />)
    expect(screen.getByTestId("plate").className).toMatch(/bg-black/)
  })

  it("merges a custom className", () => {
    render(<Tagline data-testid="plate" className="rounded-xl" />)
    expect(screen.getByTestId("plate").className).toMatch(/rounded-xl/)
  })
})
