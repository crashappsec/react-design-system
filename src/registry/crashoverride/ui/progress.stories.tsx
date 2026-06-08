import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress } from "./progress"

/**
 * Progress — a determinate progress bar: a neon `--primary` fill riding a muted
 * track, with a smooth width transition. `value` is a 0–100 percentage. Recolour
 * the fill by targeting the indicator (`[&>div]:bg-chart-3`).
 */
const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Determinate progress bar built on Radix Progress. `value` (0–100) sets the fill width; the indicator animates between values. Width comes from the container — size it with a utility like `w-72`.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Completion percentage (0–100).",
    },
    className: {
      control: "text",
      description: "Utilities on the track — set width here (e.g. `w-72`).",
    },
  },
  args: {
    value: 64,
    className: "w-72",
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

/** Playground — drag the `value` slider in Controls. */
export const Playground: Story = {}

export const Empty: Story = {
  args: { value: 0 },
}

export const Half: Story = {
  args: { value: 50 },
}

export const Complete: Story = {
  args: { value: 100 },
}

/** A recoloured fill — amber via the indicator selector. */
export const AmberFill: Story = {
  args: { value: 42, className: "w-72 [&>div]:bg-chart-3" },
}

/** Several scan stages at a glance. */
export const Steps: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      {[
        ["Inventory", 100],
        ["Health scoring", 72],
        ["Report", 18],
      ].map(([label, value]) => (
        <div key={label as string} className="flex flex-col gap-1.5">
          <div className="flex justify-between font-mono text-[11px] text-muted-foreground">
            <span>{label}</span>
            <span className="tabular-nums">{value}%</span>
          </div>
          <Progress value={value as number} />
        </div>
      ))}
    </div>
  ),
}

/** Animated — the fill steps up on an interval to show the transition. */
export const Animated: Story = {
  render: () => {
    const [value, setValue] = React.useState(12)
    React.useEffect(() => {
      const id = setInterval(
        () => setValue((v) => (v >= 100 ? 12 : v + 11)),
        700,
      )
      return () => clearInterval(id)
    }, [])
    return <Progress value={value} className="w-72" />
  },
}
