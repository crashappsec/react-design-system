import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./resizable"

/**
 * Resizable — two-or-more panels split by a draggable handle. The handle is a
 * hairline `--border` rule that lights to neon `--ring` on focus; `withHandle`
 * adds a grip badge. Built on `react-resizable-panels` v4 (Group/Panel/
 * Separator), surfaced under the familiar shadcn names. Drag the divider in any
 * story to resize. The group needs a height — wrap it in a sized box.
 */
const meta = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Draggable split panels. Compose a `ResizablePanelGroup` (set `orientation`) of `ResizablePanel`s separated by `ResizableHandle`s. `defaultSize` (a percentage) seeds each panel; pass `withHandle` for a visible grip. The group fills its container, so give that container a height.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Split axis: side-by-side (horizontal) or stacked (vertical).",
      table: { defaultValue: { summary: "horizontal" } },
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

const Pane = ({ label }: { label: string }) => (
  <div className="flex size-full items-center justify-center p-4 font-mono text-sm text-muted-foreground">
    {label}
  </div>
)

/** Playground — drag the grip; flip `orientation` from Controls. */
export const Playground: Story = {
  render: (args) => (
    <div className="h-60 w-[34rem] rounded-md border border-border">
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          <Pane label="Panel one" />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Pane label="Panel two" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

/** Horizontal — a two-pane split that drags side to side. */
export const Horizontal: Story = {
  render: () => (
    <div className="h-60 w-[34rem] rounded-md border border-border">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={35}>
          <Pane label="Sidebar" />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65}>
          <Pane label="Content" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

/** Vertical — a stacked split that drags up and down. */
export const Vertical: Story = {
  render: () => (
    <div className="h-72 w-96 rounded-md border border-border">
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel defaultSize={60}>
          <Pane label="Editor" />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <Pane label="Terminal" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

/** Three panes — nested-feeling layout with two handles. */
export const ThreePanels: Story = {
  render: () => (
    <div className="h-60 w-[40rem] rounded-md border border-border">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={25}>
          <Pane label="Nav" />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Pane label="Main" />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <Pane label="Inspector" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

/** A bare handle — no grip badge, just the hairline rule. */
export const NoGrip: Story = {
  render: () => (
    <div className="h-48 w-96 rounded-md border border-border">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={50}>
          <Pane label="Left" />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <Pane label="Right" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}
