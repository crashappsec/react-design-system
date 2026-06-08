import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/registry/crashoverride/ui/carousel"

describe("Carousel", () => {
  it("renders slides inside a carousel region", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>slide one</CarouselItem>
          <CarouselItem>slide two</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    )
    expect(screen.getByRole("region")).toBeInTheDocument()
    expect(screen.getByText("slide one")).toBeInTheDocument()
    expect(screen.getByText("slide two")).toBeInTheDocument()
  })

  it("exposes labelled prev/next controls", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>only</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    )
    expect(
      screen.getByRole("button", { name: "Previous slide" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Next slide" }),
    ).toBeInTheDocument()
  })
})
