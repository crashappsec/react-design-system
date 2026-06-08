import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { CodePanel } from "@/registry/crashoverride/ui/code-panel"

describe("CodePanel", () => {
  it("renders its children inside a mono <pre>", () => {
    render(
      <CodePanel>
        <span>npm install @crashoverride/theme</span>
      </CodePanel>,
    )
    const code = screen.getByText("npm install @crashoverride/theme")
    const pre = code.closest("pre")
    expect(pre).not.toBeNull()
    expect(pre!.className).toMatch(/font-mono/)
  })

  it("uses the slate card surface", () => {
    render(<CodePanel data-testid="panel">echo hi</CodePanel>)
    expect(screen.getByTestId("panel").className).toMatch(/bg-card/)
  })

  it("renders a title bar with the title when provided", () => {
    render(<CodePanel title="bash">echo hi</CodePanel>)
    expect(screen.getByText("bash")).toBeInTheDocument()
  })

  it("shows three traffic-light dots in the title bar", () => {
    const { container } = render(<CodePanel title="bash">echo hi</CodePanel>)
    const dots = container.querySelectorAll('[data-slot="code-panel-dot"]')
    expect(dots).toHaveLength(3)
  })

  it("omits the title bar when no title is given", () => {
    const { container } = render(<CodePanel>echo hi</CodePanel>)
    expect(
      container.querySelector('[data-slot="code-panel-bar"]'),
    ).toBeNull()
  })
})
