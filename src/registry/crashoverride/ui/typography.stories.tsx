import type { Meta, StoryObj } from "@storybook/react-vite"
import { H1, H2, H3, P, Lead, Blockquote, InlineCode, Muted } from "./typography"

/**
 * Typography — prose primitives carrying the brand type system. Use for rendered
 * long-form content (docs, blog, KB) so headings/body/code stay on-brand.
 * Headings ride the display face; inline code is mono; muted variants track
 * light/dark via `--muted-foreground`.
 */
const meta = {
  title: "Components/Typography",
  component: H1,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "className-first prose primitives: `H1`/`H2`/`H3` (display face), `P` (body), `Lead` (muted intro), `Blockquote` (lime rule), `InlineCode` (mono pill), and `Muted` (mono caption). Compose with utilities and override freely.",
      },
    },
  },
  argTypes: {
    children: { control: "text", description: "Heading / prose content." },
  },
} satisfies Meta<typeof H1>

export default meta
type Story = StoryObj<typeof meta>

/** The full type scale rendered together. */
export const Playground: Story = {
  render: () => (
    <div className="flex max-w-2xl flex-col gap-4">
      <H1>Tag. Track. Trust.</H1>
      <Lead>The Data Plane for Software in the AI Era.</Lead>
      <P>
        Body copy in Inter. COMPASS monitors repository health across portfolios.
        Drop an <InlineCode>chalk insert</InlineCode> into your build and every
        artifact beacons back.
      </P>
      <H2>How it works</H2>
      <P>
        Health scoring is the core capability; llms.txt, reports, and lifecycle
        actions are features built on health data.
      </P>
      <H3>You can't secure what you can't see</H3>
      <Blockquote>
        Every artifact carries a verifiable identity from build to production.
      </Blockquote>
      <Muted>last scanned 3 minutes ago · zero-test-org</Muted>
    </div>
  ),
}

/** The three heading levels in the display face. */
export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <H1>Heading one</H1>
      <H2>Heading two</H2>
      <H3>Heading three</H3>
    </div>
  ),
}

/** Body, lead, and muted text. */
export const BodyText: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-3">
      <Lead>A lead paragraph introduces the section in a muted, larger voice.</Lead>
      <P>
        A regular paragraph carries the body copy. It uses Inter at a comfortable
        reading size with relaxed leading.
      </P>
      <Muted>A muted mono caption — for timestamps and footnotes.</Muted>
    </div>
  ),
}

/** Inline code and blockquote. */
export const Inline: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-3">
      <P>
        Install with <InlineCode>npx shadcn add @crashoverride/theme</InlineCode>.
      </P>
      <Blockquote>You can't secure what you can't see.</Blockquote>
    </div>
  ),
}
