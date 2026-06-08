import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./navigation-menu"
import { Activity, Eye, Search, Tag } from "lucide-react"

/**
 * NavigationMenu — horizontal site nav with mega-menu dropdowns. Triggers run in
 * the display voice and lift to `--accent` on hover/open; the dropdown viewport
 * floats on the `--popover` surface. Items with a dropdown use
 * `NavigationMenuTrigger` + `NavigationMenuContent`; plain links use
 * `NavigationMenuLink`. Hover/click the triggers in any story to open them.
 */
const meta = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Canonical shadcn/Radix NavigationMenu. Compose `NavigationMenuList` of `NavigationMenuItem`s — a `NavigationMenuTrigger` + `NavigationMenuContent` for dropdowns, or a `NavigationMenuLink` (use `asChild` for a router link) for plain links. Set `viewport={false}` to anchor dropdowns under each item instead of a shared floating viewport.",
      },
    },
  },
  argTypes: {
    viewport: {
      control: "boolean",
      description:
        "Shared floating viewport (true) vs. per-item anchored dropdowns (false).",
      table: { defaultValue: { summary: "true" } },
    },
  },
  args: {
    viewport: true,
  },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const capabilities = [
  { icon: Activity, title: "Track", desc: "Beacon artifacts back from production." },
  { icon: Eye, title: "Monitor", desc: "Watch repository health over time." },
  { icon: Search, title: "Inspect", desc: "Drill into a single service's signals." },
  { icon: Tag, title: "Tag", desc: "Record provenance on every release." },
]

/** Playground — a Product mega-menu next to plain links. */
export const Playground: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[28rem] grid-cols-2 gap-1 p-2">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <li key={title}>
                  <NavigationMenuLink href="#">
                    <div className="flex items-center gap-2">
                      <Icon />
                      <span className="font-display text-sm font-medium text-foreground">
                        {title}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className="font-display text-sm font-medium"
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className="font-display text-sm font-medium"
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

/** A single dropdown — the simplest mega-menu. */
export const SingleDropdown: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Capabilities</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1 p-2">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <li key={title}>
                  <NavigationMenuLink href="#">
                    <div className="flex items-center gap-2">
                      <Icon />
                      <span className="font-medium text-foreground">{title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

/** Plain links only — no dropdowns. */
export const LinksOnly: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        {["Overview", "Services", "Advisories", "Settings"].map((label) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink
              href="#"
              className="font-display text-sm font-medium"
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

/** Anchored dropdowns — `viewport={false}` drops the menu under its item. */
export const AnchoredViewport: Story = {
  args: { viewport: false },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1 p-2">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <li key={title}>
                  <NavigationMenuLink href="#">
                    <div className="flex items-center gap-2">
                      <Icon />
                      <span className="font-medium text-foreground">{title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
