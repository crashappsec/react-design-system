import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/crashoverride/ui/tabs"

function Example() {
  return (
    <Tabs defaultValue="30d">
      <TabsList>
        <TabsTrigger value="30d">30 days</TabsTrigger>
        <TabsTrigger value="all">All time</TabsTrigger>
      </TabsList>
      <TabsContent value="30d">Last 30 days of activity.</TabsContent>
      <TabsContent value="all">Everything ever recorded.</TabsContent>
    </Tabs>
  )
}

describe("Tabs", () => {
  it("shows the default tab's content with a neon underline on the active trigger", () => {
    render(<Example />)
    const active = screen.getByRole("tab", { name: "30 days" })
    expect(active).toHaveAttribute("data-state", "active")
    expect(active.className).toMatch(/data-\[state=active\]:border-primary/)
    expect(active.className).toMatch(/font-mono/)
    expect(screen.getByText("Last 30 days of activity.")).toBeInTheDocument()
    expect(
      screen.queryByText("Everything ever recorded."),
    ).not.toBeInTheDocument()
  })

  it("switches content when another tab is selected", () => {
    render(<Example />)
    const tab = screen.getByRole("tab", { name: "All time" })
    // Radix Tabs activates on pointer/mouse down, not a synthetic click.
    fireEvent.mouseDown(tab, { button: 0, ctrlKey: false })
    expect(tab).toHaveAttribute("data-state", "active")
    expect(screen.getByText("Everything ever recorded.")).toBeInTheDocument()
    expect(
      screen.queryByText("Last 30 days of activity."),
    ).not.toBeInTheDocument()
  })
})
