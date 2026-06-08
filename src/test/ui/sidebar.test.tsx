import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarInset,
  SidebarTrigger,
} from "@/registry/crashoverride/ui/sidebar"

function Example() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>Crash Override</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Catalog</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Services</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Packages</SidebarMenuButton>
                <SidebarMenuBadge>12</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger />
        <span>Main content</span>
      </SidebarInset>
    </SidebarProvider>
  )
}

describe("Sidebar", () => {
  it("mounts within its provider and renders menu + content", () => {
    render(<Example />)
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Catalog")).toBeInTheDocument()
    expect(screen.getByText("Main content")).toBeInTheDocument()
  })

  it("renders the group label in the brand mono voice", () => {
    render(<Example />)
    const label = screen.getByText("Catalog")
    expect(label.className).toMatch(/font-mono/)
    expect(label.className).toMatch(/uppercase/)
  })

  it("marks the active item with the neon left-border accent", () => {
    render(<Example />)
    const active = screen.getByText("Services")
    expect(active.getAttribute("data-active")).toBe("true")
    expect(active.className).toMatch(/data-\[active=true\]:border-sidebar-primary/)
    expect(active.className).toMatch(/data-\[active=true\]:text-sidebar-primary/)
  })

  it("toggles state when the trigger is clicked", () => {
    render(<Example />)
    const sidebar = document.querySelector('[data-slot="sidebar"]')
    expect(sidebar?.getAttribute("data-state")).toBe("expanded")
    fireEvent.click(screen.getByRole("button", { name: /toggle sidebar/i }))
    expect(sidebar?.getAttribute("data-state")).toBe("collapsed")
  })
})
