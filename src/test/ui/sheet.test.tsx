import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/registry/crashoverride/ui/sheet"

function Example({ side }: { side?: "right" | "left" | "top" | "bottom" }) {
  return (
    <Sheet>
      <SheetTrigger>Filters</SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

describe("Sheet", () => {
  it("renders the trigger and stays closed until clicked", () => {
    render(<Example />)
    expect(screen.getByText("Filters")).toBeInTheDocument()
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("opens to the right edge by default on the popover surface", () => {
    render(<Example />)
    fireEvent.click(screen.getByText("Filters"))
    const panel = screen.getByRole("dialog")
    expect(panel.className).toMatch(/bg-popover/)
    expect(panel.className).toMatch(/right-0/)
    expect(panel.className).toMatch(/border-l/)
  })

  it("anchors to the left edge when side=left", () => {
    render(<Example side="left" />)
    fireEvent.click(screen.getByText("Filters"))
    const panel = screen.getByRole("dialog")
    expect(panel.className).toMatch(/left-0/)
    expect(panel.className).toMatch(/border-r/)
  })
})
