import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "./separator"

/**
 * Separator — a hairline divider keyed to the `--border` token. Horizontal
 * (default) fills its container width; vertical fills its container height (give
 * it a height + sit it in a flex row). Decorative by default; pass
 * `decorative={false}` for an announced separator.
 */
const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Canonical shadcn/Radix Separator. `orientation` chooses the axis; `decorative` (default true) keeps it purely visual or, when false, announces it to assistive tech. The brand also re-exports this as `Divider`.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Axis of the rule. Vertical needs a height + a flex row.",
      table: { defaultValue: { summary: "horizontal" } },
    },
    decorative: {
      control: "boolean",
      description:
        "When true (default) purely visual; false announces it as a separator.",
      table: { defaultValue: { summary: "true" } },
    },
  },
  args: {
    orientation: "horizontal",
    decorative: true,
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

/** Playground — flip `orientation` from Controls. */
export const Playground: Story = {
  render: (args) =>
    args.orientation === "vertical" ? (
      <div className="flex h-6 items-center gap-3 text-sm text-muted-foreground">
        <span>Left</span>
        <Separator {...args} />
        <span>Right</span>
      </div>
    ) : (
      <div className="w-72">
        <p className="text-sm text-muted-foreground">Above.</p>
        <Separator {...args} className="my-3" />
        <p className="text-sm text-muted-foreground">Below.</p>
      </div>
    ),
}

/** Horizontal — splits stacked sections. */
export const Horizontal: Story = {
  render: () => (
    <div className="w-72">
      <p className="font-mono text-[13px] font-semibold">Crash Override</p>
      <p className="text-sm text-muted-foreground">Repository health, mapped.</p>
      <Separator className="my-3" />
      <p className="text-sm text-muted-foreground">
        Track · Monitor · Inspect · Tag.
      </p>
    </div>
  ),
}

/** Vertical — separates inline items inside a flex row. */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-6 items-center gap-3 text-sm text-muted-foreground">
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>API</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  ),
}
