import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table"
import { StatusBadge } from "./status-badge"

/**
 * Table — the semantic shadcn table set, themed for the brand: hairline row
 * rules, an uppercase mono header voice, and rows that lift to `--accent` on
 * hover. Compose `TableHeader` / `TableBody` / (optional) `TableFooter` of
 * `TableRow`s, with `TableHead` for header cells and `TableCell` for data.
 * Right-align numeric columns with `text-right font-mono tabular-nums`.
 */
const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Semantic data table (`Table` / `TableHeader` / `TableBody` / `TableFooter` / `TableRow` / `TableHead` / `TableCell` / `TableCaption`). Numeric columns read best right-aligned in the mono voice. Drop a `StatusBadge` into a cell for health columns. Mark the current row with `data-state=\"selected\"`.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Utilities on the <table> element.",
    },
  },
  args: {},
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const rows = [
  { service: "chalk", branch: "main", builds: 1204, status: "healthy" as const },
  { service: "compass-api", branch: "main", builds: 318, status: "needs_attention" as const },
  { service: "beacon", branch: "release", builds: 96, status: "at_risk" as const },
  { service: "legacy-proxy", branch: "main", builds: 4, status: "stale" as const },
  { service: "edge-relay", branch: "hotfix", builds: 0, status: "critical" as const },
]

/** Playground — a realistic portfolio health table with a status column. */
export const Playground: Story = {
  render: (args) => (
    <Table {...args} className="w-[34rem]">
      <TableCaption>Portfolio health · last scan 6 min ago.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead className="text-right font-mono tabular-nums">Builds</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.service}>
            <TableCell className="font-medium">{r.service}</TableCell>
            <TableCell className="font-mono text-xs text-muted-foreground">
              {r.branch}
            </TableCell>
            <TableCell className="text-right font-mono tabular-nums">
              {r.builds.toLocaleString()}
            </TableCell>
            <TableCell>
              <StatusBadge status={r.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

/** A plain table — no caption, no footer. */
export const Basic: Story = {
  render: () => (
    <Table className="w-96">
      <TableHeader>
        <TableRow>
          <TableHead>Repository</TableHead>
          <TableHead className="text-right font-mono tabular-nums">Stars</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>crashappsec/chalk</TableCell>
          <TableCell className="text-right font-mono tabular-nums">2,431</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>crashappsec/compass</TableCell>
          <TableCell className="text-right font-mono tabular-nums">512</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/** With a footer — totals run in the mono voice on the muted surface. */
export const WithFooter: Story = {
  render: () => (
    <Table className="w-[30rem]">
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead className="text-right font-mono tabular-nums">Builds</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.slice(0, 3).map((r) => (
          <TableRow key={r.service}>
            <TableCell>{r.service}</TableCell>
            <TableCell className="text-right font-mono tabular-nums">
              {r.builds.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right font-mono tabular-nums">
            {(1204 + 318 + 96).toLocaleString()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

/** A selected row sits on the `--accent` surface (`data-state="selected"`). */
export const SelectedRow: Story = {
  render: () => (
    <Table className="w-96">
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>chalk</TableCell>
          <TableCell>
            <StatusBadge status="healthy" />
          </TableCell>
        </TableRow>
        <TableRow data-state="selected">
          <TableCell>compass-api</TableCell>
          <TableCell>
            <StatusBadge status="needs_attention" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>beacon</TableCell>
          <TableCell>
            <StatusBadge status="at_risk" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
