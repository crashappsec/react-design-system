import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/registry/crashoverride/ui/dropdown-menu"

function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>More</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Service</DropdownMenuLabel>
        <DropdownMenuItem>Rename</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

describe("DropdownMenu", () => {
  it("renders the trigger and keeps the menu closed until clicked", () => {
    render(<Example />)
    expect(screen.getByRole("button", { name: "More" })).toBeInTheDocument()
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("opens on click onto the popover surface with mono uppercase labels", () => {
    render(<Example />)
    // Radix opens its menu on pointerdown, not a synthetic click.
    fireEvent.pointerDown(
      screen.getByRole("button", { name: "More" }),
      { button: 0, ctrlKey: false, pointerType: "mouse" },
    )
    const menu = screen.getByRole("menu")
    expect(menu.className).toMatch(/bg-popover/)
    expect(menu.className).toMatch(/border-border/)
    const label = screen.getByText("Service")
    expect(label.className).toMatch(/uppercase/)
    expect(label.className).toMatch(/font-mono/)
  })

  it("maps destructive items to the destructive token", () => {
    render(<Example />)
    fireEvent.pointerDown(
      screen.getByRole("button", { name: "More" }),
      { button: 0, ctrlKey: false, pointerType: "mouse" },
    )
    const del = screen.getByText("Delete")
    expect(del.getAttribute("data-variant")).toBe("destructive")
    expect(del.className).toMatch(/data-\[variant=destructive\]:text-destructive/)
  })
})
