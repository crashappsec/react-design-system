import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"

/**
 * TEMPLATE STORY — the pattern every component story in this registry follows.
 *
 * Recipe:
 *  - `title`: "Components/<Name>" so it lands under the Components sidebar group.
 *  - `tags: ["autodocs"]`: generates the Docs page (props table + live controls).
 *  - `argTypes`: expose the key props as interactive controls (select for unions,
 *    boolean for flags). Add a one-line `description` per prop.
 *  - `args`: sensible defaults on the meta so every story inherits them.
 *  - A `Playground` story (fully interactive) plus several named stories that
 *    showcase each meaningful variant/size.
 */
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Branded button over the shadcn/Radix base. Atomic-lime primary on dark (Fandango in light), sharp brand radius, display-face label. Use `asChild` to render as a link or other element.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "enterprise", "ghost"],
      description:
        "Visual style. `primary` = lime action, `secondary` = outline (docs path), `enterprise` = cobalt CTA, `ghost` = quiet.",
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Height: sm 32px · md 40px · lg 48px.",
      table: { defaultValue: { summary: "md" } },
    },
    fullWidth: {
      control: "boolean",
      description: "Stretch to the container width.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable interaction (45% opacity, no pointer events).",
    },
    asChild: {
      control: false,
      description: "Render the child element instead of a <button> (Radix Slot).",
    },
    children: {
      control: "text",
      description: "Button label.",
    },
  },
  args: {
    children: "Get started",
    variant: "primary",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — drive every prop from the Controls panel. */
export const Playground: Story = {}

export const Primary: Story = {
  args: { variant: "primary", children: "Track artifact" },
}

export const Secondary: Story = {
  args: { variant: "secondary", children: "View docs" },
}

export const Enterprise: Story = {
  args: { variant: "enterprise", children: "Talk to sales" },
}

export const Ghost: Story = {
  args: { variant: "ghost", children: "Cancel" },
}

export const Disabled: Story = {
  args: { disabled: true, children: "Unavailable" },
}

/** All sizes side by side. */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
}

/** Every variant in one view. */
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="enterprise">
        Enterprise
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
}
