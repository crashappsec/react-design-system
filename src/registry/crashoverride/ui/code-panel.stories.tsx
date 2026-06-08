import type { Meta, StoryObj } from "@storybook/react-vite"
import { CodePanel } from "./code-panel"

/**
 * CodePanel — the signature developer surface: a terminal / BBS-aesthetic code
 * block on the slate `--card` surface with optional macOS traffic-light chrome.
 * Mono voice, hairline border, sharp brand corners. Omit `title` for a
 * chrome-free panel.
 */
const meta = {
  title: "Components/CodePanel",
  component: CodePanel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A terminal-style code block. Setting `title` adds the traffic-light chrome bar with a label; omitting it gives a bare slate code surface. The body is a `<pre>`, so whitespace and line breaks render verbatim.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title-bar label. When set, renders the traffic-light chrome.",
    },
    children: { control: "text", description: "Verbatim code body." },
  },
  args: {
    title: "bash",
    children: "npx shadcn add @crashoverride/theme",
  },
} satisfies Meta<typeof CodePanel>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — edit the title and code from Controls. */
export const Playground: Story = {
  render: (args) => <CodePanel {...args} className="w-[28rem]" />,
}

/** With chrome — the traffic-light title bar. */
export const WithChrome: Story = {
  render: () => (
    <CodePanel title="bash" className="w-[28rem]">
      npx shadcn add @crashoverride/theme
    </CodePanel>
  ),
}

/** Chrome-free — just the slate code surface. */
export const NoChrome: Story = {
  render: () => (
    <CodePanel className="w-[28rem]">
      GET /v1/services/compass-api/health
    </CodePanel>
  ),
}

/** A multi-line block — line breaks render verbatim. */
export const MultiLine: Story = {
  render: () => (
    <CodePanel title="install.sh" className="w-[28rem]">
      {`# add the registry
npx shadcn add @crashoverride/button
npx shadcn add @crashoverride/card

# tag every artifact
chalk insert`}
    </CodePanel>
  ),
}
