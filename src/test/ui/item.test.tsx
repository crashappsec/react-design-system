import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Item } from "@/registry/crashoverride/ui/item"

describe("Item", () => {
  it("renders the media, title, description, and trailing actions slots", () => {
    render(
      <Item
        media={<span data-testid="avatar">FM</span>}
        title="Floyd Miles"
        description="floyd@crashoverride.com"
        actions={<span data-testid="role">Admin</span>}
      />,
    )
    expect(screen.getByTestId("avatar")).toBeInTheDocument()
    expect(screen.getByText("Floyd Miles")).toBeInTheDocument()
    expect(screen.getByText("floyd@crashoverride.com")).toBeInTheDocument()
    expect(screen.getByTestId("role")).toBeInTheDocument()
  })

  it("fires onClick when interactive", () => {
    const onClick = vi.fn()
    render(<Item interactive title="Row" onClick={onClick} />)
    fireEvent.click(screen.getByText("Row"))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
