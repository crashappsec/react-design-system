import type { Meta, StoryObj } from "@storybook/react-vite"
import { Inbox, SearchX, PackageOpen } from "lucide-react"
import { Empty } from "./empty"
import { Button } from "./button"

/**
 * Empty — an empty-state block: a centered icon chip, title, description, and an
 * optional action. Dashed hairline frame, brand display title, muted body copy.
 */
const meta = {
  title: "Components/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Centered empty-state with a dashed frame. Compose `icon`, `title`, `description`, and an `action` (typically a Button). Use for zero-result lists, unconfigured panels, and first-run states.",
      },
    },
  },
  argTypes: {
    title: { control: "text", description: "Display-face title line." },
    description: { control: "text", description: "Muted body copy." },
    icon: { control: false, description: "Icon node shown in the chip." },
    action: { control: false, description: "Optional action node (Button)." },
  },
  args: {
    title: "No deployments yet",
    description: "Ship something and it'll beacon back here.",
  },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — edit the title/description from Controls. */
export const Playground: Story = {
  render: (args) => (
    <Empty {...args} className="w-96" icon={<Inbox />} />
  ),
}

/** The full composition — icon, title, description, action. */
export const WithAction: Story = {
  render: () => (
    <Empty
      className="w-96"
      icon={<Inbox />}
      title="No deployments yet"
      description="Ship something and it'll beacon back here."
      action={<Button>Read the docs</Button>}
    />
  ),
}

/** A no-results state for a filtered list. */
export const NoResults: Story = {
  render: () => (
    <Empty
      className="w-96"
      icon={<SearchX />}
      title="No services match"
      description="Try a broader query or clear the active filters."
      action={
        <Button variant="secondary" size="sm">
          Clear filters
        </Button>
      }
    />
  ),
}

/** Title only — the most compact form. */
export const TitleOnly: Story = {
  render: () => (
    <Empty className="w-96" icon={<PackageOpen />} title="Nothing here yet" />
  ),
}
