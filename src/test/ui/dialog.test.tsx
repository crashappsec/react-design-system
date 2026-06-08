import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/registry/crashoverride/ui/dialog"

function Example() {
  return (
    <Dialog>
      <DialogTrigger>Rotate key</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rotate API key</DialogTitle>
          <DialogDescription>Your current key stops working immediately.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

describe("Dialog", () => {
  it("renders the trigger and keeps content closed until clicked", () => {
    render(<Example />)
    expect(screen.getByText("Rotate key")).toBeInTheDocument()
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("opens on trigger click and shows content on the popover surface with a hairline border", () => {
    render(<Example />)
    fireEvent.click(screen.getByText("Rotate key"))
    const dialog = screen.getByRole("dialog")
    expect(dialog.className).toMatch(/bg-popover/)
    expect(dialog.className).toMatch(/border-border/)
    expect(screen.getByText("Rotate API key")).toBeInTheDocument()
  })
})
