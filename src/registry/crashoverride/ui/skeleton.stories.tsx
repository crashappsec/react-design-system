import type { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton } from "./skeleton"

/**
 * Skeleton — a loading placeholder block: a muted surface with a subtle pulse.
 * It has no intrinsic size — set width/height with utilities and compose several
 * to mimic the layout you're waiting on.
 */
const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A pulsing placeholder on the `--muted` surface. Size it entirely with utilities (`h-5 w-44`, `size-9 rounded-full`) and stack several to sketch the shape of the content being loaded.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Utilities set the size and shape (no intrinsic dimensions).",
    },
  },
  args: {
    className: "h-5 w-44",
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

/** Playground — resize via the className control. */
export const Playground: Story = {}

/** A single line placeholder. */
export const Line: Story = {
  args: { className: "h-4 w-60" },
}

/** A circular placeholder for an avatar. */
export const Circle: Story = {
  args: { className: "size-10 rounded-full" },
}

/** A few stacked text lines of varying width. */
export const TextBlock: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-11/12" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  ),
}

/** A loading card — avatar + title + lines, the way it composes in app. */
export const Card: Story = {
  render: () => (
    <div className="w-80 rounded-md border border-border bg-card p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
    </div>
  ),
}
