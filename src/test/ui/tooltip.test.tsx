import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/registry/crashoverride/ui/tooltip"

function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Copy</TooltipTrigger>
        <TooltipContent>Copy SBOM</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

describe("Tooltip", () => {
  it("renders the trigger", () => {
    render(<Example />)
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument()
  })

  it("reveals the content in the brand's mono voice on focus", () => {
    render(<Example />)
    fireEvent.focus(screen.getByRole("button", { name: "Copy" }))
    // Radix renders both an aria role="tooltip" copy and a visually-hidden copy.
    const contents = screen.getAllByText("Copy SBOM")
    expect(contents.length).toBeGreaterThan(0)
    const styled = contents.find((el) => el.className.includes("bg-popover"))
    expect(styled).toBeDefined()
    expect(styled!.className).toMatch(/font-mono/)
    expect(styled!.className).toMatch(/border-border/)
  })
})
