import type { Meta, StoryObj } from "@storybook/react-vite"
import { AspectRatio } from "./aspect-ratio"

/**
 * AspectRatio — constrains its children to a fixed width:height ratio. Pass
 * `ratio` (e.g. `16 / 9`); the child fills the box, so set `object-cover` on
 * media to crop cleanly. It has no brand surface of its own — it's purely a
 * layout constraint. Width comes from the parent.
 */
const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Canonical shadcn/Radix AspectRatio. Wrap media (or any block) and give the wrapper a width; the box keeps the chosen `ratio` as it scales. Add `object-cover` to images so they crop rather than distort.",
      },
    },
  },
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.25, max: 4, step: 0.05 },
      description: "width / height (e.g. 16/9 ≈ 1.78, 1 = square, 4/3 ≈ 1.33).",
      table: { defaultValue: { summary: "1" } },
    },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

const IMG =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"

const Filler = ({ label }: { label: string }) => (
  <div className="flex size-full items-center justify-center rounded-md border border-border bg-card font-mono text-sm text-muted-foreground">
    {label}
  </div>
)

/** Playground — drag `ratio` and watch the box reshape. */
export const Playground: Story = {
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args}>
        <Filler label={`ratio ${args.ratio?.toFixed(2)}`} />
      </AspectRatio>
    </div>
  ),
}

/** 16:9 — the canonical video/thumbnail ratio, with a cropped image. */
export const Widescreen: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9}>
        <img
          src={IMG}
          alt="Code on a screen"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

/** 1:1 — a perfect square. */
export const Square: Story = {
  render: () => (
    <div className="w-64">
      <AspectRatio ratio={1}>
        <Filler label="1 : 1" />
      </AspectRatio>
    </div>
  ),
}

/** 4:3 — the classic photo ratio. */
export const Portrait: Story = {
  render: () => (
    <div className="w-64">
      <AspectRatio ratio={3 / 4}>
        <Filler label="3 : 4" />
      </AspectRatio>
    </div>
  ),
}
