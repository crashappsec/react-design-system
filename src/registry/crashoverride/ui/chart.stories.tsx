import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  XAxis,
} from "recharts"
import { ChartContainer, ChartTooltip } from "./chart"

/**
 * Chart — a thin wrapper over Recharts that wires the brand's *capability
 * palette* into every chart. `ChartContainer` injects the five capability
 * accents as `--chart-1..5` CSS vars, so Recharts series can reference
 * `var(--chart-N)` and stay on-brand in light/dark. `ChartTooltip` is the
 * branded Recharts tooltip (slate popover surface, hairline border, mono labels).
 *
 * Capability spine: --chart-1 Monitor · --chart-2 Inspect · --chart-3 Tag ·
 * --chart-4 Track · --chart-5 AI.
 */
const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Wrap a single Recharts chart element in `ChartContainer`; it injects the brand capability palette as `--chart-1..5` and supplies a sized `ResponsiveContainer`. Reference `var(--chart-N)` on series fills/strokes. Drop `ChartTooltip` inside for the branded tooltip. Constrain height via `className` (e.g. `h-64`).",
      },
    },
  },
  argTypes: {
    palette: {
      control: false,
      description: "Override individual capability slots over the brand palette.",
    },
    children: { control: false, description: "A single Recharts chart element." },
  },
  args: {
    children: (
      <BarChart data={[]}>
        <Bar dataKey="builds" fill="var(--chart-4)" radius={2} />
      </BarChart>
    ),
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

const BUILDS = [
  { day: "Mon", builds: 42 },
  { day: "Tue", builds: 58 },
  { day: "Wed", builds: 51 },
  { day: "Thu", builds: 73 },
  { day: "Fri", builds: 66 },
  { day: "Sat", builds: 24 },
  { day: "Sun", builds: 19 },
]

const HEALTH = [
  { week: "W1", score: 72 },
  { week: "W2", score: 78 },
  { week: "W3", score: 75 },
  { week: "W4", score: 84 },
  { week: "W5", score: 88 },
  { week: "W6", score: 91 },
]

/** Fully interactive — a branded bar chart on the capability palette. */
export const Playground: Story = {
  render: () => (
    <ChartContainer className="h-64 w-[36rem]">
      <BarChart data={BUILDS}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <ChartTooltip />
        <Bar dataKey="builds" fill="var(--chart-4)" radius={2} />
      </BarChart>
    </ChartContainer>
  ),
}

/** A bar chart — builds per day, lit by the Track accent. */
export const Bars: Story = {
  render: () => (
    <ChartContainer className="h-64 w-[36rem]">
      <BarChart data={BUILDS}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <ChartTooltip />
        <Bar dataKey="builds" fill="var(--chart-4)" radius={2} />
      </BarChart>
    </ChartContainer>
  ),
}

/** A line chart — health score trend on the Monitor accent. */
export const LineSeries: Story = {
  name: "Line",
  render: () => (
    <ChartContainer className="h-64 w-[36rem]">
      <LineChart data={HEALTH}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="week" tickLine={false} axisLine={false} />
        <ChartTooltip />
        <Line
          dataKey="score"
          stroke="var(--chart-1)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  ),
}

/** The full capability palette — one bar per accent slot, in spine order. */
export const CapabilityPalette: Story = {
  render: () => {
    const data = [
      { capability: "Monitor", value: 80, slot: "var(--chart-1)" },
      { capability: "Inspect", value: 64, slot: "var(--chart-2)" },
      { capability: "Tag", value: 72, slot: "var(--chart-3)" },
      { capability: "Track", value: 91, slot: "var(--chart-4)" },
      { capability: "AI", value: 55, slot: "var(--chart-5)" },
    ]
    return (
      <ChartContainer className="h-64 w-[36rem]">
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="capability" tickLine={false} axisLine={false} />
          <ChartTooltip />
          <Bar dataKey="value" radius={2}>
            {data.map((d) => (
              <Cell key={d.capability} fill={d.slot} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    )
  },
}
