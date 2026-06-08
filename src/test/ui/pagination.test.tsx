import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/registry/crashoverride/ui/pagination"

function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

describe("Pagination", () => {
  it("renders a labelled pagination nav", () => {
    render(<Example />)
    expect(
      screen.getByRole("navigation", { name: "pagination" }),
    ).toBeInTheDocument()
  })

  it("marks the active page and tints it with the primary fill", () => {
    render(<Example />)
    const active = screen.getByText("2")
    expect(active.getAttribute("aria-current")).toBe("page")
    expect(active.className).toMatch(/bg-primary/)
    const inactive = screen.getByText("1")
    expect(inactive.getAttribute("aria-current")).toBeNull()
  })

  it("exposes prev/next controls and an ellipsis", () => {
    render(<Example />)
    expect(
      screen.getByRole("link", { name: /previous page/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /next page/i })).toBeInTheDocument()
    expect(screen.getByText("More pages")).toBeInTheDocument()
  })
})
