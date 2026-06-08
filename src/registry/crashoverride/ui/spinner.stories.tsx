import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner } from "./spinner"
import { Button } from "./button"

/**
 * Spinner — an indeterminate loading indicator: a spinning lucide ring tinted
 * with neon `--primary`. It inherits the current font size (`size-[1em]`) so it
 * lines up inside buttons and labels; size it with a text utility or a `size-*`
 * override. Carries `role="status"` for assistive tech.
 */
const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "An indeterminate spinner (lucide ring) in the neon `--primary` colour. Defaults to `1em` so it matches surrounding text; override with `size-4`/`size-6` or recolour via `text-*`. Announced as `role=\"status\"`.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Size and colour utilities (e.g. `size-6 text-chart-3`).",
    },
  },
  args: {
    className: "size-6",
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

/** Playground — resize/recolour via the className control. */
export const Playground: Story = {}

/** Sizes — driven by text/size utilities. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-10" />
    </div>
  ),
}

/** Colours — recolour the ring with a `text-*` utility. */
export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-6" />
      <Spinner className="size-6 text-chart-1" />
      <Spinner className="size-6 text-chart-3" />
      <Spinner className="size-6 text-muted-foreground" />
    </div>
  ),
}

/** Inside a button — the canonical pending-action pattern. */
export const InButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner className="mr-2 size-4 text-current" /> Saving…
    </Button>
  ),
}

/** Inline with a label — inherits the surrounding font size. */
export const Inline: Story = {
  render: () => (
    <p className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner /> Scanning zero-test-org…
    </p>
  ),
}
