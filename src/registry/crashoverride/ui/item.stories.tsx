import type { Meta, StoryObj } from "@storybook/react-vite"
import { Folder, KeyRound } from "lucide-react"
import { Item } from "./item"
import { Avatar, AvatarImage, AvatarFallback, initials } from "./avatar"
import { Badge } from "./badge"
import { StatusBadge } from "./status-badge"
import { Button } from "./button"

/**
 * Item — a versatile media row: leading media (icon/avatar), title + description,
 * and trailing actions. The building block for lists, settings rows, and
 * results. Card surface with a hairline border; `interactive` adds a hover lift.
 */
const meta = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A media row composing `media` (leading icon/avatar), `title` + `description`, and trailing `actions`. Set `interactive` for clickable rows (hover lift + pointer). Use for member lists, settings, and search results.",
      },
    },
  },
  argTypes: {
    title: { control: "text", description: "Primary title line." },
    description: { control: "text", description: "Muted secondary line." },
    interactive: {
      control: "boolean",
      description: "Hover affordance + pointer cursor for clickable rows.",
      table: { defaultValue: { summary: "false" } },
    },
    media: { control: false, description: "Leading media node." },
    actions: { control: false, description: "Trailing action nodes." },
  },
  args: {
    title: "Floyd Miles",
    description: "floyd@crashoverride.com",
    interactive: false,
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — edit fields and toggle `interactive` from Controls. */
export const Playground: Story = {
  render: (args) => (
    <Item
      {...args}
      className="w-96"
      media={
        <Avatar size="md">
          <AvatarImage src="https://i.pravatar.cc/72?img=12" alt="Floyd Miles" />
          <AvatarFallback>{initials("Floyd Miles")}</AvatarFallback>
        </Avatar>
      }
      actions={<Badge tone="neon">admin</Badge>}
    />
  ),
}

/** A member row with an avatar and role badge. */
export const Member: Story = {
  render: () => (
    <Item
      className="w-96"
      media={
        <Avatar size="md">
          <AvatarImage src="https://i.pravatar.cc/72?img=5" alt="Jane Cooper" />
          <AvatarFallback>{initials("Jane Cooper")}</AvatarFallback>
        </Avatar>
      }
      title="Jane Cooper"
      description="jane@crashoverride.com"
      actions={<Badge tone="cobalt">owner</Badge>}
    />
  ),
}

/** A service row with an icon, status, and action. */
export const ServiceRow: Story = {
  render: () => (
    <Item
      interactive
      className="w-96"
      media={<Folder className="size-5" />}
      title="compass-api"
      description="production · go"
      actions={
        <>
          <StatusBadge status="healthy" />
          <Button variant="ghost" size="sm">
            Open
          </Button>
        </>
      }
    />
  ),
}

/** A vertical list of interactive rows. */
export const List: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-2">
      <Item
        interactive
        media={<KeyRound className="size-5" />}
        title="Production token"
        description="created 3 days ago"
        actions={<StatusBadge status="healthy" />}
      />
      <Item
        interactive
        media={<KeyRound className="size-5" />}
        title="CI token"
        description="created 41 days ago"
        actions={<StatusBadge status="needs_attention" />}
      />
      <Item
        interactive
        media={<KeyRound className="size-5" />}
        title="Legacy token"
        description="created 2 years ago"
        actions={<StatusBadge status="stale" />}
      />
    </div>
  ),
}
