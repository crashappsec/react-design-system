import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Empty } from "@/registry/crashoverride/ui/empty"

describe("Empty", () => {
  it("renders the icon slot, title, description, and action", () => {
    render(
      <Empty
        icon={<svg data-testid="inbox" />}
        title="No deployments yet"
        description="Ship something and it'll beacon back here."
        action={<button>Read the docs</button>}
      />,
    )
    expect(screen.getByTestId("inbox")).toBeInTheDocument()
    expect(screen.getByText("No deployments yet")).toBeInTheDocument()
    expect(
      screen.getByText("Ship something and it'll beacon back here."),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Read the docs" }),
    ).toBeInTheDocument()
  })
})
