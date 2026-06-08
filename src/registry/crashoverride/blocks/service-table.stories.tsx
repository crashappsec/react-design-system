import type { Meta, StoryObj } from "@storybook/react-vite"
import { ServiceTable } from "./service-table"

/**
 * ServiceTable (block) — a catalog table with a health status column: mono
 * service name, environment, a StatusBadge, and a right-aligned numeric column.
 * Composes the registry Table set with StatusBadge; rows lift to `--accent` on
 * hover.
 */
const meta = {
  title: "Blocks/ServiceTable",
  component: ServiceTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A catalog table keyed to health. Pass `rows` (`{ name, env?, status, builds? }`) and an optional `caption`. The status column renders a StatusBadge; the trailing builds column is right-aligned and tabular-mono.",
      },
    },
  },
  argTypes: {
    caption: { control: "text", description: "Optional caption under the table." },
    rows: { control: false, description: "The service rows." },
  },
  args: {
    rows: [
      { name: "chalk", env: "prod", status: "healthy", builds: "1,204" },
      { name: "compass", env: "staging", status: "needs_attention", builds: "318" },
    ],
  },
} satisfies Meta<typeof ServiceTable>

export default meta
type Story = StoryObj<typeof meta>

const ROWS = [
  { name: "chalk", env: "prod", status: "healthy", builds: "1,204" },
  { name: "compass", env: "staging", status: "needs_attention", builds: "318" },
  { name: "ocular", env: "prod", status: "at_risk", builds: "742" },
  { name: "beacon", env: "dev", status: "critical", builds: "56" },
  { name: "legacy-agent", env: "prod", status: "stale", builds: "0" },
] as const

/** Fully interactive — the deployments catalog. */
export const Playground: Story = {
  render: (args) => (
    <div className="max-w-3xl p-6">
      <ServiceTable {...args} rows={[...ROWS]} />
    </div>
  ),
}

/** A full catalog with every health status represented. */
export const Catalog: Story = {
  render: () => (
    <div className="max-w-3xl p-6">
      <ServiceTable rows={[...ROWS]} caption="5 services · last scanned 3 minutes ago" />
    </div>
  ),
}

/** All healthy — the happy path. */
export const AllHealthy: Story = {
  render: () => (
    <div className="max-w-3xl p-6">
      <ServiceTable
        rows={[
          { name: "chalk", env: "prod", status: "healthy", builds: "1,204" },
          { name: "compass", env: "prod", status: "healthy", builds: "918" },
          { name: "ocular", env: "prod", status: "healthy", builds: "742" },
        ]}
      />
    </div>
  ),
}
