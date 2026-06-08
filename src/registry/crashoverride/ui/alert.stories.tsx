import type { Meta, StoryObj } from "@storybook/react-vite"
import { Alert, AlertTitle, AlertDescription } from "./alert"
import { Info, CircleCheck, TriangleAlert, OctagonAlert } from "lucide-react"

/**
 * Alert — an inline message banner. A flat tinted fill, a hairline border and a
 * 3px tinted left accent in the variant colour. Variants map to the brand status
 * palette. Drop a lucide glyph as the first child to give it a leading icon
 * (it takes the variant colour); the `AlertTitle` runs in the mono voice and
 * `AlertDescription` runs muted.
 */
const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Inline banner with a variant-coloured left accent: `default` (neutral), `info` (cobalt), `success` (neon), `warning` (amber), `destructive` (red). Compose `AlertTitle` + `AlertDescription` inside; an optional leading lucide icon is the first child.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
      description: "Status colour of the accent, fill and title.",
      table: { defaultValue: { summary: "default" } },
    },
  },
  args: {
    variant: "default",
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

const ICONS = {
  default: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  destructive: OctagonAlert,
} as const

/** Playground — switch the variant from Controls; the icon follows. */
export const Playground: Story = {
  render: (args) => {
    const Icon = ICONS[(args.variant ?? "default") as keyof typeof ICONS]
    return (
      <Alert {...args} className="w-[28rem]">
        <Icon />
        <AlertTitle>Scan complete</AlertTitle>
        <AlertDescription>
          5 services scored · 1 needs attention.
        </AlertDescription>
      </Alert>
    )
  },
}

export const Default: Story = {
  args: { variant: "default" },
  render: (args) => (
    <Alert {...args} className="w-[28rem]">
      <Info />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        A neutral note with no status colour.
      </AlertDescription>
    </Alert>
  ),
}

export const InfoVariant: Story = {
  name: "Info",
  args: { variant: "info" },
  render: (args) => (
    <Alert {...args} className="w-[28rem]">
      <Info />
      <AlertTitle>New scan available</AlertTitle>
      <AlertDescription>
        A fresh inventory snapshot is ready to import.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  args: { variant: "success" },
  render: (args) => (
    <Alert {...args} className="w-[28rem]">
      <CircleCheck />
      <AlertTitle>Artifact tagged</AlertTitle>
      <AlertDescription>
        Provenance recorded and beaconing from production.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  args: { variant: "warning" },
  render: (args) => (
    <Alert {...args} className="w-[28rem]">
      <TriangleAlert />
      <AlertTitle>Approaching rate limit</AlertTitle>
      <AlertDescription>
        4,800 / 5,000 GitHub requests used this hour.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: { variant: "destructive" },
  render: (args) => (
    <Alert {...args} className="w-[28rem]">
      <OctagonAlert />
      <AlertTitle>Scan failed</AlertTitle>
      <AlertDescription>
        Token lacks `repo` scope — re-authenticate to continue.
      </AlertDescription>
    </Alert>
  ),
}

/** Title only — no description, no icon. */
export const TitleOnly: Story = {
  args: { variant: "info" },
  render: (args) => (
    <Alert {...args} className="w-[28rem]">
      <AlertTitle>Snapshot imported.</AlertTitle>
    </Alert>
  ),
}

/** Every variant stacked. */
export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[28rem] flex-col gap-3">
      {(["default", "info", "success", "warning", "destructive"] as const).map(
        (variant) => {
          const Icon = ICONS[variant]
          return (
            <Alert key={variant} variant={variant}>
              <Icon />
              <AlertTitle>{variant}</AlertTitle>
              <AlertDescription>
                The {variant} banner variant.
              </AlertDescription>
            </Alert>
          )
        },
      )}
    </div>
  ),
}
