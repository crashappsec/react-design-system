import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/crashoverride/ui/popover"

function Example() {
  return (
    <Popover>
      <PopoverTrigger>Info</PopoverTrigger>
      <PopoverContent>Beaconing from prod since 14:02.</PopoverContent>
    </Popover>
  )
}

describe("Popover", () => {
  it("renders the trigger and keeps content closed until clicked", () => {
    render(<Example />)
    expect(screen.getByRole("button", { name: "Info" })).toBeInTheDocument()
    expect(screen.queryByText("Beaconing from prod since 14:02.")).not.toBeInTheDocument()
  })

  it("opens on click and floats content on the popover surface with a hairline border", () => {
    render(<Example />)
    fireEvent.click(screen.getByRole("button", { name: "Info" }))
    const content = screen.getByText("Beaconing from prod since 14:02.")
    expect(content).toBeInTheDocument()
    expect(content.className).toMatch(/bg-popover/)
    expect(content.className).toMatch(/border-border/)
    expect(content.className).toMatch(/rounded-md/)
  })
})
