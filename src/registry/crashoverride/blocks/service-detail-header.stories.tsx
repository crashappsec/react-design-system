import type { Meta, StoryObj } from "@storybook/react-vite"
import { Cloud, Globe, GitBranch, ShieldCheck } from "lucide-react"
import { ServiceDetailHeader } from "./service-detail-header"
import { Button } from "@/registry/crashoverride/ui/button"

/**
 * ServiceDetailHeader (block) — the header for a console resource page: a square
 * media tile, the service name with a health StatusBadge, a mono identifier
 * line, a row of meta Tags, and a primary action on the right. Composes Button,
 * StatusBadge, Tag, and the layout primitives.
 */
const meta = {
  title: "Blocks/ServiceDetailHeader",
  component: ServiceDetailHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A resource-page header. `name` + `status` render the title row; `identifier` is a mono sub-line; `media` is a leading tile; `meta` is an array of `{ label, value?, icon? }` rendered as Tags; `action` pins button(s) to the right.",
      },
    },
  },
  argTypes: {
    name: { control: "text", description: "Service / resource name." },
    status: {
      control: "select",
      options: ["healthy", "needs_attention", "at_risk", "critical", "stale"],
      description: "Health status pill alongside the name.",
    },
    identifier: { control: "text", description: "Mono sub-line (account id, ARN)." },
    media: { control: false, description: "Leading media tile." },
    meta: { control: false, description: "Meta facts rendered as Tags." },
    action: { control: false, description: "Primary action(s) on the right." },
  },
  args: {
    name: "prod-bandwidth-system",
    status: "healthy",
    identifier: "224111541501",
  },
} satisfies Meta<typeof ServiceDetailHeader>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — edit the name/status/identifier from Controls. */
export const Playground: Story = {
  render: (args) => (
    <div className="max-w-3xl p-6">
      <ServiceDetailHeader
        {...args}
        media={<Cloud />}
        meta={[
          { icon: <Globe />, label: "us-east-1" },
          { icon: <GitBranch />, label: "main" },
          { icon: <ShieldCheck />, label: "SLSA", value: "Level 2" },
        ]}
        action={<Button>Redeploy</Button>}
      />
    </div>
  ),
}

/** The full header — media, status, identifier, meta, and a primary action. */
export const Full: Story = {
  render: () => (
    <div className="max-w-3xl p-6">
      <ServiceDetailHeader
        name="prod-bandwidth-system"
        status="healthy"
        identifier="224111541501"
        media={<Cloud />}
        meta={[
          { icon: <Globe />, label: "us-east-1" },
          { icon: <GitBranch />, label: "main" },
          { icon: <ShieldCheck />, label: "SLSA", value: "Level 2" },
          { label: "contributors", value: "12" },
        ]}
        action={
          <>
            <Button variant="secondary">View logs</Button>
            <Button>Redeploy</Button>
          </>
        }
      />
    </div>
  ),
}

/** A degraded service — needs_attention status. */
export const NeedsAttention: Story = {
  render: () => (
    <div className="max-w-3xl p-6">
      <ServiceDetailHeader
        name="compass-api"
        status="needs_attention"
        identifier="arn:aws:ecs:us-west-2:9921:service/compass-api"
        media={<Cloud />}
        meta={[
          { icon: <Globe />, label: "us-west-2" },
          { label: "language", value: "go" },
        ]}
        action={<Button variant="enterprise">Investigate</Button>}
      />
    </div>
  ),
}

/** Minimal — name and status only, no media or action. */
export const Minimal: Story = {
  render: () => (
    <div className="max-w-3xl p-6">
      <ServiceDetailHeader name="zero-test-org" status="stale" />
    </div>
  ),
}
