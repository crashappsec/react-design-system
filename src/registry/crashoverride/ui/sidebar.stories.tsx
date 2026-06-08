import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "./sidebar"
import {
  LayoutDashboard,
  Boxes,
  ShieldAlert,
  Settings,
  Search,
  Activity,
} from "lucide-react"

/**
 * Sidebar — the app's collapsible left rail, on the `--sidebar-*` tokens. It
 * MUST live inside a `SidebarProvider`. Drop a `Sidebar` (header / scrollable
 * `SidebarContent` of `SidebarGroup`s + `SidebarMenu`s / footer) beside a
 * `SidebarInset`, and toggle it with `SidebarTrigger` (or ⌘/Ctrl-B). The active
 * `SidebarMenuButton` carries the neon left-border accent. Collapses to an icon
 * rail (`collapsible="icon"`) on desktop and a Sheet on mobile. Click the
 * trigger in any story to collapse/expand it live.
 */
const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Canonical shadcn sidebar set — composing the brand Sheet, Tooltip, Separator, Skeleton, Button and Input. Wrap your layout in `SidebarProvider` (drives open/collapsed state, the ⌘/Ctrl-B shortcut, and the mobile Sheet). `collapsible` chooses how it collapses: `offcanvas` (default), `icon` (rail), or `none`.",
      },
    },
  },
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["left", "right"],
      description: "Edge the rail anchors to.",
      table: { defaultValue: { summary: "left" } },
    },
    variant: {
      control: "inline-radio",
      options: ["sidebar", "floating", "inset"],
      description: "Surface treatment of the rail.",
      table: { defaultValue: { summary: "sidebar" } },
    },
    collapsible: {
      control: "inline-radio",
      options: ["offcanvas", "icon", "none"],
      description: "How the rail collapses when toggled.",
      table: { defaultValue: { summary: "offcanvas" } },
    },
  },
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "icon",
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const nav = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Boxes, label: "Services", badge: "42" },
  { icon: Activity, label: "Activity" },
  { icon: ShieldAlert, label: "Advisories", badge: "3" },
]

function AppFrame({
  children,
  title = "Overview",
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <>
      {children}
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b border-border px-3">
          <SidebarTrigger />
          <SidebarSeparator orientation="vertical" className="mx-1 h-4" />
          <span className="font-display text-sm font-medium">{title}</span>
        </header>
        <div className="p-6 text-sm text-muted-foreground">
          Toggle the rail with the trigger (or ⌘/Ctrl-B). The active item keeps
          its neon accent in both states.
        </div>
      </SidebarInset>
    </>
  )
}

function CatalogSidebar(args: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...args}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-1.5 py-1 font-display text-sm font-semibold">
          <span className="grid size-6 place-items-center rounded-sm bg-sidebar-primary/15 text-sidebar-primary">
            CO
          </span>
          <span className="group-data-[collapsible=icon]:hidden">Compass</span>
        </div>
        <div className="relative group-data-[collapsible=icon]:hidden">
          <Search className="pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <SidebarInput placeholder="Search…" className="pl-7" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Catalog</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map(({ icon: Icon, label, active, badge }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton isActive={active} tooltip={label}>
                    <Icon />
                    <span>{label}</span>
                  </SidebarMenuButton>
                  {badge && <SidebarMenuBadge>{badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

/** Playground — a realistic catalog rail; toggle it from the header trigger. */
export const Playground: Story = {
  render: (args) => (
    <SidebarProvider>
      <AppFrame>
        <CatalogSidebar {...args} />
      </AppFrame>
    </SidebarProvider>
  ),
}

/** Collapses to an icon rail — the default for app chrome. */
export const CollapsibleIcon: Story = {
  args: { collapsible: "icon" },
  render: (args) => (
    <SidebarProvider>
      <AppFrame>
        <CatalogSidebar {...args} />
      </AppFrame>
    </SidebarProvider>
  ),
}

/** Off-canvas — slides fully out of view when collapsed. */
export const OffCanvas: Story = {
  args: { collapsible: "offcanvas" },
  render: (args) => (
    <SidebarProvider>
      <AppFrame>
        <CatalogSidebar {...args} />
      </AppFrame>
    </SidebarProvider>
  ),
}

/** Floating variant — the rail lifts onto its own rounded surface. */
export const Floating: Story = {
  args: { variant: "floating", collapsible: "icon" },
  render: (args) => (
    <SidebarProvider>
      <AppFrame>
        <CatalogSidebar {...args} />
      </AppFrame>
    </SidebarProvider>
  ),
}

/** Loading — `SidebarMenuSkeleton` rows while the catalog streams in. */
export const Loading: Story = {
  render: (args) => (
    <SidebarProvider>
      <AppFrame title="Loading">
        <Sidebar {...args}>
          <SidebarHeader>
            <div className="px-1.5 py-1 font-display text-sm font-semibold group-data-[collapsible=icon]:hidden">
              Compass
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Catalog</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {Array.from({ length: 6 }, (_, i) => (
                    <SidebarMenuItem key={i}>
                      <SidebarMenuSkeleton showIcon />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </AppFrame>
    </SidebarProvider>
  ),
}
