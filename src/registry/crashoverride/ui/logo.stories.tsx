import type { Meta, StoryObj } from "@storybook/react-vite"
import { Logo } from "./logo"

/**
 * Logo — the brand lockup: the "needle" mark (inline SVG drawn in
 * `currentColor`, so it tints to the surrounding text colour — lime on dark,
 * fandango on light) with an optional JetBrains-Mono wordmark.
 */
const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Crash Override mark, inlined as SVG drawn in `currentColor` so it inherits the surrounding text colour. `size` sets the square px dimension; `withWordmark` appends the display-face wordmark.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "range", min: 16, max: 96, step: 4 },
      description: "Mark size in px (square).",
      table: { defaultValue: { summary: "32" } },
    },
    withWordmark: {
      control: "boolean",
      description: "Render the 'Crash Override' wordmark next to the mark.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  args: {
    size: 32,
    withWordmark: false,
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — tune `size` and `withWordmark` from Controls. */
export const Playground: Story = {}

/** Mark only — the bare needle glyph. */
export const MarkOnly: Story = {
  args: { withWordmark: false, size: 48 },
}

/** The full lockup — mark + wordmark. */
export const WithWordmark: Story = {
  args: { withWordmark: true, size: 28 },
}

/** Size scale. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {[16, 24, 32, 48, 64].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Logo size={size} />
          <span className="font-mono text-[11px] text-muted-foreground">
            {size}px
          </span>
        </div>
      ))}
    </div>
  ),
}

/** Inherits the surrounding text colour — here tinted to the lime primary. */
export const Tinted: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Logo size={40} withWordmark />
      <Logo size={40} withWordmark className="text-primary" />
    </div>
  ),
}
