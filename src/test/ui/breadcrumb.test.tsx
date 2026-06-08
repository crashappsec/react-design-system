import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/crashoverride/ui/breadcrumb"

function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Services</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>prod-bandwidth-system</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

describe("Breadcrumb", () => {
  it("renders a labelled nav with the mono voice", () => {
    render(<Example />)
    const nav = screen.getByRole("navigation", { name: "breadcrumb" })
    expect(nav).toBeInTheDocument()
    const list = nav.querySelector("ol")
    expect(list?.className).toMatch(/font-mono/)
  })

  it("renders links muted and the current page bold", () => {
    render(<Example />)
    const link = screen.getByRole("link", { name: "Services" })
    expect(link.className).toMatch(/text-muted-foreground/)
    expect(link.className).toMatch(/hover:text-foreground/)
    const page = screen.getByText("prod-bandwidth-system")
    expect(page.getAttribute("aria-current")).toBe("page")
    expect(page.className).toMatch(/font-semibold/)
  })

  it("marks the separator presentational and hidden", () => {
    render(<Example />)
    const sep = document.querySelector('[data-slot="breadcrumb-separator"]')
    expect(sep?.getAttribute("aria-hidden")).toBe("true")
    expect(sep?.querySelector("svg")).toBeTruthy()
  })
})
