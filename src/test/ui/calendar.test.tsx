import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Calendar } from "@/registry/crashoverride/ui/calendar"

describe("Calendar", () => {
  it("renders a month grid with the brand nav arrows", () => {
    render(<Calendar month={new Date(2026, 5, 1)} />)
    // react-day-picker labels its month nav buttons.
    expect(
      screen.getByRole("button", { name: /previous month/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /next month/i }),
    ).toBeInTheDocument()
  })

  it("marks the selected day with the neon --primary fill", () => {
    const selected = new Date(2026, 5, 15)
    render(
      <Calendar mode="single" selected={selected} month={selected} />,
    )
    const dayBtn = screen.getByRole("button", { name: /15/ })
    expect(dayBtn.getAttribute("data-selected-single")).toBe("true")
    expect(dayBtn.className).toMatch(/data-\[selected-single=true\]:bg-primary/)
  })
})
