import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatCardRow } from "./stat-card-row"

/**
 * StatCardRow (block) — a console-grade metric strip: a responsive row of stat
 * cards, each carrying a capability accent bar, a large display-face value, a
 * label, and a mono trend delta. Composes the registry's Card + Grid; everything
 * rides the theme tokens.
 */
const meta = {
  title: "Blocks/StatCardRow",
  component: StatCardRow,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A responsive metric grid. Pass `stats` (`{ label, value, delta?, accent? }`) and an optional `columns` count. Each card draws its capability accent bar on the top edge; the value rides the display face.",
      },
    },
  },
  argTypes: {
    columns: {
      control: { type: "number", min: 1, max: 4 },
      description: "Column count at the widest breakpoint (defaults to stats.length).",
    },
    stats: { control: false, description: "The stat definitions." },
  },
  args: {
    stats: [
      { label: "Services tracked", value: "1,284", delta: "+12 this week", accent: "neon" },
      { label: "Builds today", value: "346", delta: "+8%", accent: "cobalt" },
    ],
  },
} satisfies Meta<typeof StatCardRow>

export default meta
type Story = StoryObj<typeof meta>

const DASHBOARD = [
  { label: "Services tracked", value: "1,284", delta: "+12 this week", accent: "neon" },
  { label: "Builds today", value: "346", delta: "+8%", accent: "cobalt" },
  { label: "Open findings", value: "27", delta: "-5 since Monday", accent: "magenta" },
  { label: "Health score", value: "91%", delta: "+3 pts", accent: "amber" },
] as const

/** Fully interactive — the console dashboard metric strip. */
export const Playground: Story = {
  render: (args) => (
    <div className="p-6">
      <StatCardRow {...args} stats={[...DASHBOARD]} />
    </div>
  ),
}

/** The four-up dashboard strip — one accent per capability. */
export const Dashboard: Story = {
  render: () => (
    <div className="p-6">
      <StatCardRow stats={[...DASHBOARD]} />
    </div>
  ),
}

/** Three stats — collapses to a three-column grid. */
export const ThreeUp: Story = {
  render: () => (
    <div className="p-6">
      <StatCardRow
        stats={[
          { label: "Repositories", value: "412", delta: "across 6 orgs", accent: "neon" },
          { label: "Contributors", value: "1,902", delta: "+34 this month", accent: "cobalt" },
          { label: "Stale repos", value: "18", delta: "needs triage", accent: "amber" },
        ]}
      />
    </div>
  ),
}

/** Values without deltas — the compact form. */
export const NoDeltas: Story = {
  render: () => (
    <div className="p-6">
      <StatCardRow
        stats={[
          { label: "Healthy", value: "1,140", accent: "neon" },
          { label: "Needs attention", value: "98", accent: "amber" },
          { label: "At risk", value: "32", accent: "magenta" },
          { label: "Stale", value: "14", accent: "teal" },
        ]}
      />
    </div>
  ),
}
