import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ButtonGroup } from "@/registry/crashoverride/ui/button-group"
import { Button } from "@/registry/crashoverride/ui/button"

describe("ButtonGroup", () => {
  it("renders its buttons inside a group role", () => {
    render(
      <ButtonGroup>
        <Button variant="secondary">Day</Button>
        <Button variant="secondary">Week</Button>
        <Button variant="secondary">Month</Button>
      </ButtonGroup>,
    )
    const group = screen.getByRole("group")
    expect(group).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Day" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Month" })).toBeInTheDocument()
  })

  it("collapses inner borders for a horizontal segmented control", () => {
    const { container } = render(
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
      </ButtonGroup>,
    )
    const group = container.firstElementChild as HTMLElement
    expect(group.className).toMatch(/-ml-px/)
    expect(group.getAttribute("data-orientation")).toBe("horizontal")
  })

  it("stacks vertically when orientation=vertical", () => {
    const { container } = render(
      <ButtonGroup orientation="vertical">
        <Button>A</Button>
        <Button>B</Button>
      </ButtonGroup>,
    )
    const group = container.firstElementChild as HTMLElement
    expect(group.className).toMatch(/flex-col/)
    expect(group.className).toMatch(/-mt-px/)
  })
})
