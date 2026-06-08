import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Field } from "@/registry/crashoverride/ui/field"
import { Input } from "@/registry/crashoverride/ui/input"

describe("Field", () => {
  it("composes a label, control, and the children", () => {
    render(
      <Field label="Work email" htmlFor="email">
        <Input id="email" type="email" />
      </Field>,
    )
    expect(screen.getByText("Work email")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("shows the error message and marks the control invalid + describedby", () => {
    render(
      <Field label="Work email" htmlFor="email" error="Required">
        <Input id="email" type="email" />
      </Field>,
    )
    const msg = screen.getByText("Required")
    expect(msg.className).toMatch(/text-destructive/)
    const input = screen.getByRole("textbox")
    expect(input.getAttribute("aria-invalid")).toBe("true")
    expect(input.getAttribute("aria-describedby")).toBe("email-message")
  })

  it("shows hint text in the muted voice and renders the required marker", () => {
    render(
      <Field label="API key" htmlFor="key" hint="Read-only token" required>
        <Input id="key" />
      </Field>,
    )
    const hint = screen.getByText("Read-only token")
    expect(hint.className).toMatch(/text-muted-foreground/)
    expect(screen.getByText("*")).toBeInTheDocument()
  })
})
