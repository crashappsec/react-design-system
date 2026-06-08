import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tagline } from "./tagline"

/**
 * Tagline — the brand liturgy, "Tag. Track. Trust.", as the signature
 * traffic-light device: three words on a black plate, lit red → amber → green.
 * Each word carries a `.t-tag` / `.t-track` / `.t-trust` hook, while the built-in
 * traffic-light tokens keep it on-brand with zero extra CSS. Set in the display
 * face.
 */
const meta = {
  title: "Components/Tagline",
  component: Tagline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The 'Tag. Track. Trust.' lockup. Renders three display-face words on a black plate, coloured with the brand traffic-light tokens (red → amber → green). The plate and sizing can be overridden via `className`.",
      },
    },
  },
  argTypes: {
    className: {
      control: false,
      description: "Override the plate, sizing, or word colours.",
    },
  },
} satisfies Meta<typeof Tagline>

export default meta
type Story = StoryObj<typeof meta>

/** The default lockup on its black plate. */
export const Playground: Story = {}

/** Default — the canonical brand liturgy. */
export const Default: Story = {}

/** Larger — bumped up via a className override. */
export const Large: Story = {
  render: () => <Tagline className="px-6 py-3 text-2xl" />,
}

/** Sizes side by side. */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Tagline className="text-sm" />
      <Tagline />
      <Tagline className="px-6 py-3 text-2xl" />
    </div>
  ),
}
