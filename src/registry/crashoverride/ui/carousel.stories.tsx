import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel"
import { Card, CardContent } from "./card"

/**
 * Carousel — a horizontal (or vertical) slide carousel with prev/next controls,
 * built on `embla-carousel-react`. The viewport clips; `CarouselItem` holds each
 * slide. Prev/Next reuse the brand IconButton (outline) and disable at the ends.
 * Arrow keys scroll when the region is focused.
 */
const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Slide carousel composing `CarouselContent` + `CarouselItem` with `CarouselPrevious` / `CarouselNext` controls. Set `orientation` to `vertical` for a stacked axis; `opts` forwards to embla (e.g. `{ loop: true }`). Note the controls sit `-left-12 / -right-12`, so leave horizontal padding around the carousel.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Scroll axis.",
      table: { defaultValue: { summary: "horizontal" } },
    },
    opts: { control: false, description: "Embla options (loop, align, …)." },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

function Slide({ n }: { n: number }) {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="font-display text-4xl font-bold">{n}</span>
      </CardContent>
    </Card>
  )
}

/** Fully interactive — drag, click the arrows, or use ← / →. */
export const Playground: Story = {
  render: (args) => (
    <div className="mx-12 w-64">
      <Carousel {...args}>
        <CarouselContent>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i}>
              <Slide n={i + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

/** Multiple slides per view via per-item basis utilities. */
export const MultipleSlides: Story = {
  render: () => (
    <div className="mx-12 w-80">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {Array.from({ length: 8 }, (_, i) => (
            <CarouselItem key={i} className="basis-1/3">
              <Slide n={i + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

/** Looping — the ends wrap, so the arrows never disable. */
export const Loop: Story = {
  render: () => (
    <div className="mx-12 w-64">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i}>
              <Slide n={i + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

/** Vertical orientation — controls move above/below the viewport. */
export const Vertical: Story = {
  render: () => (
    <div className="my-12 h-64">
      <Carousel orientation="vertical" className="w-48">
        <CarouselContent className="h-64">
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i} className="basis-1/2">
              <Slide n={i + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
