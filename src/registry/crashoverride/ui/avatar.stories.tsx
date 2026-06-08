import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarImage, AvatarFallback, initials } from "./avatar"

/**
 * Avatar — a circular user mark. Renders an image, falling back to up-to-two
 * initials on a muted surface in the mono voice. Sizes `xs | sm | md | lg`;
 * `ring` adds a neon `--primary` border offset from the background. The
 * `initials(name)` helper derives the fallback text.
 */
const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Circular avatar built on Radix Avatar. Compose `AvatarImage` (with `alt`) + `AvatarFallback` (initials). `size` controls the diameter (xs 20 · sm 28 · md 36 · lg 44px) and `ring` adds an accent border. The exported `initials()` helper turns a display name into up-to-two uppercase initials.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg"],
      description: "Diameter: xs 20 · sm 28 · md 36 · lg 44px.",
      table: { defaultValue: { summary: "md" } },
    },
    ring: {
      control: "boolean",
      description: "Neon accent ring offset from the background.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  args: {
    size: "md",
    ring: false,
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const IMG = "https://i.pravatar.cc/96?img=12"

/** Playground — tune `size` and `ring` from Controls. */
export const Playground: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={IMG} alt="Floyd Miles" />
      <AvatarFallback>{initials("Floyd Miles")}</AvatarFallback>
    </Avatar>
  ),
}

/** With an image — the photo fills the circle. */
export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={IMG} alt="Floyd Miles" />
      <AvatarFallback>{initials("Floyd Miles")}</AvatarFallback>
    </Avatar>
  ),
}

/** Fallback initials — when the image is missing, the mono initials show. */
export const FallbackInitials: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="" alt="Savannah Nguyen" />
      <AvatarFallback>{initials("Savannah Nguyen")}</AvatarFallback>
    </Avatar>
  ),
}

/** Ring — the neon accent border for a highlighted user. */
export const WithRing: Story = {
  args: { ring: true, size: "lg" },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>{initials("Esther Howard")}</AvatarFallback>
    </Avatar>
  ),
}

/** Every size, smallest to largest. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarImage src={IMG} alt="Floyd Miles" />
          <AvatarFallback>FM</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

/** A stacked group — overlapping avatars for a team. */
export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      {["Floyd Miles", "Savannah Nguyen", "Esther Howard", "Jacob Jones"].map(
        (name, i) => (
          <Avatar key={name} className="ring-2 ring-background" size="md">
            <AvatarImage src={`https://i.pravatar.cc/96?img=${i + 5}`} alt={name} />
            <AvatarFallback>{initials(name)}</AvatarFallback>
          </Avatar>
        ),
      )}
    </div>
  ),
}
