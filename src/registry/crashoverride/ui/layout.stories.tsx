import type { Meta, StoryObj } from "@storybook/react-vite"
import { Stack, Group, Center, Box, Grid } from "./layout"

/**
 * Layout — className-first flex/grid primitives. They carry only a base layout
 * (Stack = vertical flex, Group = horizontal flex centered, Center = both axes,
 * Box = plain div, Grid = CSS grid) and lean on Tailwind utilities for gap,
 * columns and alignment. Every primitive accepts `asChild` (Radix Slot) and any
 * div prop. There is no single root "component" — pick the primitive you need
 * and tune it with utility classes.
 */
const meta = {
  title: "Components/Layout",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "className-first layout primitives: `Stack` (vertical flex), `Group` (horizontal flex, items centered), `Center` (centers on both axes), `Box` (polymorphic div passthrough), and `Grid` (CSS grid). Spacing/columns/alignment come from utilities (`gap-4`, `grid-cols-3`, `items-start`). Each accepts `asChild` to render as another element.",
      },
    },
  },
  argTypes: {
    asChild: {
      control: false,
      description: "Render the child element instead of a <div> (Radix Slot).",
    },
    className: {
      control: "text",
      description: "Utility classes drive spacing, columns and alignment.",
    },
  },
  args: {},
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

const Tile = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-12 min-w-12 items-center justify-center rounded-md border border-border bg-card px-3 font-mono text-xs text-muted-foreground">
    {children}
  </div>
)

/** Playground — a Stack you can tune from the className control. */
export const Playground: Story = {
  args: { className: "gap-3" },
  render: (args) => (
    <Stack {...args}>
      <Tile>one</Tile>
      <Tile>two</Tile>
      <Tile>three</Tile>
    </Stack>
  ),
}

/** Stack — vertical flex. `gap-*` sets the rhythm between children. */
export const StackVertical: Story = {
  render: () => (
    <Stack className="gap-4">
      <Tile>deploy</Tile>
      <Tile>build</Tile>
      <Tile>scan</Tile>
    </Stack>
  ),
}

/** Group — horizontal flex, vertically centered. */
export const GroupHorizontal: Story = {
  render: () => (
    <Group className="gap-3">
      <Tile>track</Tile>
      <Tile>monitor</Tile>
      <Tile>inspect</Tile>
    </Group>
  ),
}

/** Center — children sit dead-centre on both axes. */
export const Centered: Story = {
  render: () => (
    <Center className="h-32 w-full rounded-md border border-dashed border-border">
      <Tile>centered</Tile>
    </Center>
  ),
}

/** Grid — columns via `grid-cols-*`; `gap-*` spaces every cell. */
export const GridColumns: Story = {
  render: () => (
    <Grid className="w-80 grid-cols-3 gap-3">
      {Array.from({ length: 6 }, (_, i) => (
        <Tile key={i}>{i + 1}</Tile>
      ))}
    </Grid>
  ),
}

/** Box — the unstyled passthrough; add whatever utilities you need. */
export const BoxPassthrough: Story = {
  render: () => (
    <Box className="rounded-md border border-border bg-card p-4 text-sm text-muted-foreground">
      A plain Box with a border and padding applied via utilities.
    </Box>
  ),
}

/** Every primitive side by side. */
export const AllPrimitives: Story = {
  render: () => (
    <Stack className="gap-6">
      <Box>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          Stack
        </p>
        <Stack className="gap-2">
          <Tile>a</Tile>
          <Tile>b</Tile>
        </Stack>
      </Box>
      <Box>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          Group
        </p>
        <Group className="gap-2">
          <Tile>a</Tile>
          <Tile>b</Tile>
        </Group>
      </Box>
      <Box>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          Grid
        </p>
        <Grid className="w-60 grid-cols-3 gap-2">
          <Tile>a</Tile>
          <Tile>b</Tile>
          <Tile>c</Tile>
        </Grid>
      </Box>
    </Stack>
  ),
}
