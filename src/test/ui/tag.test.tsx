import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Tag } from "@/registry/crashoverride/ui/tag"

describe("Tag", () => {
  it("renders the label in the brand's mono voice", () => {
    render(<Tag label="us-east-1" data-testid="t" />)
    expect(screen.getByText("us-east-1")).toBeInTheDocument()
    expect(screen.getByTestId("t").className).toMatch(/font-mono/)
  })

  it("renders a key→value pair when both label and value are set", () => {
    render(<Tag label="SLSA" value="Level 2" />)
    expect(screen.getByText("SLSA")).toBeInTheDocument()
    expect(screen.getByText("Level 2")).toBeInTheDocument()
  })

  it("shows a remove affordance and fires onRemove when clicked", () => {
    const onRemove = vi.fn()
    render(<Tag label="k8s" onRemove={onRemove} />)
    const remove = screen.getByRole("button", { name: /remove/i })
    fireEvent.click(remove)
    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})
