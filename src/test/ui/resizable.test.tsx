import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/registry/crashoverride/ui/resizable"

describe("Resizable", () => {
  it("renders both panels and the handle", () => {
    const { container } = render(
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={50}>
          <span>left pane</span>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <span>right pane</span>
        </ResizablePanel>
      </ResizablePanelGroup>,
    )
    expect(screen.getByText("left pane")).toBeInTheDocument()
    expect(screen.getByText("right pane")).toBeInTheDocument()
    expect(
      container.querySelector('[data-slot="resizable-handle"]'),
    ).not.toBeNull()
  })

  it("carries the panel-group slot", () => {
    const { container } = render(
      <ResizablePanelGroup>
        <ResizablePanel>a</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>b</ResizablePanel>
      </ResizablePanelGroup>,
    )
    expect(
      container.querySelector('[data-slot="resizable-panel-group"]'),
    ).not.toBeNull()
  })
})
