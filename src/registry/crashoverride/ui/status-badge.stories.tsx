import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatusBadge, type Status } from "./status-badge"

const STATUSES: Status[] = [
  "healthy",
  "needs_attention",
  "at_risk",
  "critical",
  "stale",
]

/**
 * StatusBadge — a health/status pill mapping a semantic status to a brand colour
 * + leading dot. Lowercase mono, sharp corners. Colours resolve from the theme's
 * capability tokens so light and dark both come from the bridge.
 */
const meta = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Maps a semantic `status` to a colour + leading dot: `healthy` (lime), `needs_attention` / `at_risk` (amber), `critical` (destructive), `stale` (muted). The underscore in a status renders as a space in the label.",
      },
    },
  },
  argTypes: {
    status: {
      control: "select",
      options: STATUSES,
      description: "Semantic health status driving colour + label.",
      table: { defaultValue: { summary: "healthy" } },
    },
  },
  args: {
    status: "healthy",
  },
} satisfies Meta<typeof StatusBadge>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — pick a status from Controls. */
export const Playground: Story = {}

export const Healthy: Story = { args: { status: "healthy" } }
export const NeedsAttention: Story = { args: { status: "needs_attention" } }
export const AtRisk: Story = { args: { status: "at_risk" } }
export const Critical: Story = { args: { status: "critical" } }
export const Stale: Story = { args: { status: "stale" } }

/** Every status in one view — the full colour mapping. */
export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {STATUSES.map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
    </div>
  ),
}
