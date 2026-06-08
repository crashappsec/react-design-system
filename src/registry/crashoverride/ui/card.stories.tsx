import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./card"
import { Button } from "./button"

/**
 * TEMPLATE STORY — composite component pattern. Card has a slot anatomy
 * (Header / Title / Description / Action / Content / Footer), so stories
 * `render` the full composition while still exposing the Card's own props
 * (`accent`, `interactive`) as interactive controls.
 */
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Flat surface primitive. Sits on `--card`, separates via a hairline border (never a heavy shadow). `accent` draws a 3px capability bar on the top edge; `interactive` enables a hover lift.",
      },
    },
  },
  argTypes: {
    accent: {
      control: "select",
      options: [undefined, "neon", "cobalt", "magenta", "amber", "teal"],
      description:
        "Capability accent bar on the top edge — a palette key (Track/Monitor/Inspect/Tag/AI) or any CSS colour.",
    },
    interactive: {
      control: "boolean",
      description: "Hover state: pointer cursor, brighter border, accent surface.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  args: {
    accent: undefined,
    interactive: false,
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — toggle `accent` and `interactive` from Controls. */
export const Playground: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Service health</CardTitle>
        <CardDescription>compass-api · production</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            View
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          12 deployments this week · 0 failed builds · SBOM verified.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Open service</Button>
      </CardFooter>
    </Card>
  ),
}

/** The plain surface — no accent, no hover. */
export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Plain card</CardTitle>
        <CardDescription>Hairline border, sharp 4px radius.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          The flat surface that everything else is built on.
        </p>
      </CardContent>
    </Card>
  ),
}

/** A capability card — 3px lime "Track" accent on the top edge. */
export const WithAccent: Story = {
  args: { accent: "neon" },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Track</CardTitle>
        <CardDescription>Atomic-lime capability accent.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          AirTags beacon back from production.
        </p>
      </CardContent>
    </Card>
  ),
}

/** Interactive — the whole card responds to hover. */
export const Interactive: Story = {
  args: { interactive: true },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Hover me</CardTitle>
        <CardDescription>Border brightens, surface lifts to accent.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Use for clickable list items and tiles.
        </p>
      </CardContent>
    </Card>
  ),
}

/** One card per capability accent. */
export const CapabilityRow: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(
        [
          ["cobalt", "Monitor"],
          ["magenta", "Inspect"],
          ["amber", "Tag"],
          ["neon", "Track"],
          ["teal", "AI"],
        ] as const
      ).map(([accent, label]) => (
        <Card key={label} accent={accent} className="w-44">
          <CardHeader>
            <CardTitle>{label}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  ),
}
