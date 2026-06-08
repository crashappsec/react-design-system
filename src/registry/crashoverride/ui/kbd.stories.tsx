import type { Meta, StoryObj } from "@storybook/react-vite"
import { Kbd } from "./kbd"

/**
 * Kbd — a keyboard key hint. Mono voice, hairline border, subtle fill, sharp
 * brand corners. Combine several with spacing to render a chord.
 */
const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Inline keyboard key. Renders a `<kbd>` styled with the mono brand voice — hairline border, secondary fill, sharp 2px corners. Pass the key glyph as children; combine multiple for chords.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "The key glyph or label.",
    },
  },
  args: {
    children: "K",
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — edit the key label from Controls. */
export const Playground: Story = {}

/** A single key. */
export const Single: Story = {
  args: { children: "Esc" },
}

/** A chord — combine keys with spacing. */
export const Chord: Story = {
  render: () => (
    <span className="inline-flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </span>
  ),
}

/** Inline in body copy. */
export const InCopy: Story = {
  render: () => (
    <p className="text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette, or{" "}
      <Kbd>Esc</Kbd> to dismiss it.
    </p>
  ),
}

/** Common keys side by side. */
export const Keys: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {["⌘", "⇧", "⌥", "⌃", "↵", "⌫", "Tab", "Esc", "F"].map((k) => (
        <Kbd key={k}>{k}</Kbd>
      ))}
    </div>
  ),
}
