import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea, ScrollBar } from "./scroll-area"
import { Separator } from "./separator"

/**
 * ScrollArea — a scroll container with a slim, brand-styled scrollbar (thumb on
 * the `--border` token, transparent track). Set a height (and/or width) on the
 * root; overflow content scrolls. Add a horizontal `ScrollBar` for wide content.
 */
const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Canonical shadcn/Radix ScrollArea. Constrain the root with a height (vertical) or width (horizontal) and the content inside it scrolls behind a slim brand scrollbar. For horizontal overflow, render a `<ScrollBar orientation=\"horizontal\" />` inside.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Constrain the viewport here (e.g. `h-60 w-72`).",
    },
  },
  args: {
    className: "h-60 w-72 rounded-md border border-border",
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 40 }, (_, i) => `v0.${i}.0`)

/** Playground — a vertical list that overflows its 60-unit-tall box. */
export const Playground: Story = {
  render: (args) => (
    <ScrollArea {...args}>
      <div className="p-4">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          Releases
        </p>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="py-1.5 font-mono text-sm">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

/** Vertical — the default; a long changelog list. */
export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-52 w-64 rounded-md border border-border p-4">
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i}>Changelog entry #{i + 1} — fixed an edge case.</p>
        ))}
      </div>
    </ScrollArea>
  ),
}

/** Horizontal — wide content with a horizontal `ScrollBar`. */
export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-80 rounded-md border border-border whitespace-nowrap">
      <div className="flex gap-3 p-4">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className="flex size-24 shrink-0 items-center justify-center rounded-md border border-border bg-card font-mono text-xs text-muted-foreground"
          >
            tile {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
