import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconButton } from "./icon-button"
import {
  Settings,
  Trash2,
  Star,
  RefreshCw,
  Pencil,
  EllipsisVertical,
} from "lucide-react"

/**
 * IconButton — a square, icon-only action for dense chrome (toolbars, panel
 * headers, table rows). `label` is required: it sets both the accessible name
 * (`aria-label`) and the native tooltip (`title`). Drop a single lucide glyph as
 * the child. Variants: ghost (quiet, default) · outline (hairline) · solid.
 */
const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Square icon-only button reusing the Button surface vocabulary. `label` is mandatory (an icon alone is not a label). Variants ghost/outline/solid; sizes sm/md/lg map to 28/36/44px. Use `asChild` to render as a link.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["ghost", "outline", "solid"],
      description: "ghost (quiet) · outline (hairline) · solid (raised invert).",
      table: { defaultValue: { summary: "ghost" } },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Footprint: sm 28 · md 36 · lg 44px.",
      table: { defaultValue: { summary: "md" } },
    },
    label: {
      control: "text",
      description: "Accessible name + tooltip (required).",
    },
    disabled: {
      control: "boolean",
      description: "Disable interaction (45% opacity).",
    },
    asChild: {
      control: false,
      description: "Render the child element instead of a <button> (Radix Slot).",
    },
  },
  args: {
    variant: "ghost",
    size: "md",
    label: "Settings",
    disabled: false,
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

/** Playground — tune variant/size, hover for the tooltip. */
export const Playground: Story = {
  render: (args) => (
    <IconButton {...args}>
      <Settings />
    </IconButton>
  ),
}

export const Ghost: Story = {
  args: { variant: "ghost", label: "Refresh" },
  render: (args) => (
    <IconButton {...args}>
      <RefreshCw />
    </IconButton>
  ),
}

export const Outline: Story = {
  args: { variant: "outline", label: "Edit" },
  render: (args) => (
    <IconButton {...args}>
      <Pencil />
    </IconButton>
  ),
}

export const Solid: Story = {
  args: { variant: "solid", label: "Favourite" },
  render: (args) => (
    <IconButton {...args}>
      <Star />
    </IconButton>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, label: "Delete (disabled)" },
  render: (args) => (
    <IconButton {...args}>
      <Trash2 />
    </IconButton>
  ),
}

/** Every size, smallest to largest. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <IconButton key={size} size={size} label={`More (${size})`}>
          <EllipsisVertical />
        </IconButton>
      ))}
    </div>
  ),
}

/** A realistic toolbar — mixed variants in a row. */
export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-md border border-border bg-card p-1">
      <IconButton variant="ghost" label="Refresh">
        <RefreshCw />
      </IconButton>
      <IconButton variant="ghost" label="Edit">
        <Pencil />
      </IconButton>
      <IconButton variant="ghost" label="Settings">
        <Settings />
      </IconButton>
      <IconButton variant="ghost" label="Delete">
        <Trash2 />
      </IconButton>
    </div>
  ),
}
