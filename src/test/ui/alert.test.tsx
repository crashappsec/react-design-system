import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/registry/crashoverride/ui/alert"

describe("Alert", () => {
  it("renders a banner with an alert role and a mono title", () => {
    render(
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Something happened.</AlertDescription>
      </Alert>,
    )
    const banner = screen.getByRole("alert")
    expect(banner).toBeInTheDocument()
    expect(screen.getByText("Heads up").className).toMatch(/font-mono/)
    expect(screen.getByText("Something happened.").className).toMatch(
      /text-muted-foreground/,
    )
  })

  it("maps the success variant to the neon --primary accent", () => {
    render(
      <Alert variant="success">
        <AlertTitle>Tagged</AlertTitle>
      </Alert>,
    )
    const banner = screen.getByRole("alert")
    expect(banner).toHaveAttribute("data-variant", "success")
    expect(banner.className).toMatch(/border-l-primary/)
    expect(screen.getByText("Tagged").className).toMatch(/text-primary/)
  })

  it("maps the destructive variant to the --destructive accent", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Certificate expired</AlertTitle>
      </Alert>,
    )
    const banner = screen.getByRole("alert")
    expect(banner).toHaveAttribute("data-variant", "destructive")
    expect(banner.className).toMatch(/border-l-destructive/)
    expect(screen.getByText("Certificate expired").className).toMatch(
      /text-destructive/,
    )
  })

  it("maps info to cobalt (chart-1) and warning to amber (chart-3)", () => {
    const { rerender } = render(
      <Alert variant="info">
        <AlertTitle>FYI</AlertTitle>
      </Alert>,
    )
    expect(screen.getByText("FYI").className).toMatch(/text-chart-1/)
    rerender(
      <Alert variant="warning">
        <AlertTitle>Careful</AlertTitle>
      </Alert>,
    )
    expect(screen.getByText("Careful").className).toMatch(/text-chart-3/)
  })
})
