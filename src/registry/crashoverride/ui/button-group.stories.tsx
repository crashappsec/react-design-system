import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonGroup } from "./button-group"
import { Button } from "./button"
import { IconButton } from "./icon-button"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

/**
 * ButtonGroup — joins related Buttons into one segmented control with shared
 * borders. Inner corners square off and adjacent borders collapse into a single
 * hairline, so the row reads as one sharp control. Wrap any Buttons (or
 * button-like nodes); pairs best with `variant="secondary"`. `orientation`
 * stacks the segments vertically.
 */
const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A segmented control that collapses adjacent borders between wrapped buttons. Use it for view switchers, alignment toolbars and split actions. `orientation` chooses horizontal (default) or vertical stacking.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Lay the segments in a row or a column.",
      table: { defaultValue: { summary: "horizontal" } },
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

/** Playground — a day/week/month switcher; flip `orientation`. */
export const Playground: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Day</Button>
      <Button variant="secondary">Week</Button>
      <Button variant="secondary">Month</Button>
    </ButtonGroup>
  ),
}

/** Horizontal — the default segmented row. */
export const Horizontal: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary">Overview</Button>
      <Button variant="secondary">Activity</Button>
      <Button variant="secondary">Settings</Button>
    </ButtonGroup>
  ),
}

/** Vertical — segments stacked into a column. */
export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">Top</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Bottom</Button>
    </ButtonGroup>
  ),
}

/** Icon segments — an alignment toolbar built from IconButtons. */
export const IconSegments: Story = {
  render: () => (
    <ButtonGroup>
      <IconButton variant="outline" label="Align left">
        <AlignLeft />
      </IconButton>
      <IconButton variant="outline" label="Align center">
        <AlignCenter />
      </IconButton>
      <IconButton variant="outline" label="Align right">
        <AlignRight />
      </IconButton>
    </ButtonGroup>
  ),
}

/** A split action — a primary plus a paired secondary. */
export const SplitAction: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Deploy</Button>
      <Button variant="secondary">…</Button>
    </ButtonGroup>
  ),
}
