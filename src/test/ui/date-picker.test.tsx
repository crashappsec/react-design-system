import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { DatePicker } from "@/registry/crashoverride/ui/date-picker"

describe("DatePicker", () => {
  it("renders the placeholder on the trigger while no date is picked", () => {
    render(<DatePicker placeholder="Pick a date" />)
    const trigger = screen.getByRole("button", { name: /pick a date/i })
    expect(trigger).toBeInTheDocument()
    // Closed: the popover calendar is not mounted yet.
    expect(screen.queryByRole("grid")).not.toBeInTheDocument()
  })

  it("opens the popover Calendar on click", () => {
    render(<DatePicker placeholder="Pick a date" />)
    fireEvent.click(screen.getByRole("button", { name: /pick a date/i }))
    expect(screen.getByRole("grid")).toBeInTheDocument()
  })

  it("shows the formatted selected date on the trigger", () => {
    render(<DatePicker defaultValue={new Date(2026, 5, 15)} />)
    // date-fns "PPP" => "June 15th, 2026"
    expect(
      screen.getByRole("button", { name: /June 15.*2026/ }),
    ).toBeInTheDocument()
  })
})
