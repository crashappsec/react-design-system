import type { Meta, StoryObj } from "@storybook/react-vite"
import { Divider } from "./divider"

/**
 * Divider — the brand name for a hairline rule. It is a thin alias over
 * `Separator`, so it carries the same API: `orientation` ("horizontal" |
 * "vertical") and `decorative`. Horizontal fills its container width; vertical
 * fills its container height (give it a height utility + sit it in a flex row).
 */
const meta = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A hairline rule keyed to the `--border` token, re-exported under the brand name `Divider` (an alias of `Separator`). Use it to split sections (horizontal) or inline items (vertical). Decorative by default; pass `decorative={false}` for an announced separator.",
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
        "When true (default) the rule is purely visual; false announces it as a separator.",
      table: { defaultValue: { summary: "true" } },
    },
  },
  args: {
    orientation: "horizontal",
    decorative: true,
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

/** Playground — flip `orientation` from Controls. */
export const Playground: Story = {
  render: (args) => (
    <div className="w-72">
      <p className="text-sm text-muted-foreground">Above the rule.</p>
      <Divider {...args} className="my-3" />
      <p className="text-sm text-muted-foreground">Below the rule.</p>
    </div>
  ),
}

/** Horizontal — the default; splits stacked sections. */
export const Horizontal: Story = {
  render: () => (
    <div className="w-72">
      <p className="font-mono text-[13px] font-semibold">Service health</p>
      <Divider className="my-3" />
      <p className="text-sm text-muted-foreground">
        12 deployments this week · SBOM verified.
      </p>
    </div>
  ),
}

/** Vertical — separates inline items inside a flex row. */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-6 items-center gap-3 text-sm text-muted-foreground">
      <span>main</span>
      <Divider orientation="vertical" />
      <span>1,204 builds</span>
      <Divider orientation="vertical" />
      <span>0 failing</span>
    </div>
  ),
}
