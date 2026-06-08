import type { Meta, StoryObj } from "@storybook/react-vite"
import { Globe, GitBranch, ShieldCheck } from "lucide-react"
import { Tag } from "./tag"

/**
 * Tag — the workhorse of the console's dense info rows. Muted mono voice. Pass
 * `icon` + `label` for a meta item, `label` + `value` for a key→value pair, or
 * `onRemove` to render a removable chip (gains a hairline border + subtle fill).
 */
const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Inline metadata item and removable chip. `icon` + `label` makes a meta fact; `label` + `value` makes a key→value pair (value emphasised). Setting `onRemove` turns it into a dismissible chip with a trailing close button.",
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Primary label text." },
    value: {
      control: "text",
      description: "Emphasised value rendered after the label.",
    },
    icon: { control: false, description: "Leading icon node (line icon)." },
    onRemove: {
      control: false,
      description: "When set, renders a trailing dismiss button.",
    },
  },
  args: {
    label: "us-east-1",
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — set `label` and `value` from Controls. */
export const Playground: Story = {}

/** Meta item with a leading icon. */
export const WithIcon: Story = {
  render: () => <Tag icon={<Globe />} label="us-east-1" />,
}

/** Key→value pair — the value renders emphasised. */
export const KeyValue: Story = {
  render: () => <Tag label="SLSA" value="Level 2" />,
}

/** Removable chip — gains a border + fill and a trailing close button. */
export const Removable: Story = {
  render: () => (
    <Tag label="kubernetes" onRemove={() => alert("removed")} />
  ),
}

/** A dense meta row — the typical console usage. */
export const MetaRow: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <Tag icon={<Globe />} label="us-east-1" />
      <Tag icon={<GitBranch />} label="main" />
      <Tag label="contributors" value="12" />
      <Tag icon={<ShieldCheck />} label="SLSA" value="Level 2" />
    </div>
  ),
}

/** A row of removable filter chips. */
export const ChipRow: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {["prod", "kubernetes", "go", "us-east-1"].map((t) => (
        <Tag key={t} label={t} onRemove={() => alert(`removed ${t}`)} />
      ))}
    </div>
  ),
}
