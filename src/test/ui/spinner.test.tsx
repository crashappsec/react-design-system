import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Spinner } from "@/registry/crashoverride/ui/spinner"

describe("Spinner", () => {
  it("renders a spinning, neon-tinted status indicator", () => {
    render(<Spinner />)
    const el = screen.getByRole("status")
    expect(el.getAttribute("class")).toMatch(/animate-spin/)
    expect(el.getAttribute("class")).toMatch(/text-primary/)
  })

  it("is labelled for assistive tech", () => {
    render(<Spinner />)
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading")
  })

  it("merges sizing utilities via className", () => {
    render(<Spinner className="size-4" />)
    expect(screen.getByRole("status").getAttribute("class")).toMatch(/size-4/)
  })
})
