import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/registry/crashoverride/ui/drawer"

function Example({ open }: { open?: boolean }) {
  return (
    <Drawer open={open}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quick actions</DrawerTitle>
          <DrawerDescription>Run a task on this service.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

describe("Drawer", () => {
  it("renders the trigger", () => {
    render(<Example />)
    expect(screen.getByText("Open")).toBeInTheDocument()
  })

  it("shows content on the popover surface when open", () => {
    render(<Example open />)
    const dialog = screen.getByRole("dialog")
    expect(dialog.className).toMatch(/bg-popover/)
    expect(dialog.className).toMatch(/rounded-t-lg/)
    expect(screen.getByText("Quick actions")).toBeInTheDocument()
  })
})
