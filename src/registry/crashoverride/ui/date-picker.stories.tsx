import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { format } from "date-fns"
import { DatePicker } from "./date-picker"

/**
 * DatePicker — a button trigger + popover Calendar. Composes our Popover (the
 * floating panel) and Calendar (the month grid). The trigger matches the Input
 * voice (hairline border, sharp radius, leading calendar glyph); the picked date
 * is formatted with date-fns. Controlled via `value` + `onChange`, or
 * uncontrolled with `defaultValue`.
 */
const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Input-styled trigger that opens a single-select Calendar in a Popover. `placeholder` shows when empty; `dateFormat` is a date-fns format string for the trigger label (default `PPP`). Use `value` + `onChange` for controlled, or `defaultValue` for uncontrolled.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Trigger text when no date is selected.",
      table: { defaultValue: { summary: "Pick a date" } },
    },
    dateFormat: {
      control: "text",
      description: "date-fns format string for the trigger label.",
      table: { defaultValue: { summary: "PPP" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable the trigger.",
      table: { defaultValue: { summary: "false" } },
    },
    value: { control: false, description: "Controlled selected date." },
    onChange: { control: false, description: "Called with the picked Date." },
  },
  args: {
    placeholder: "Pick a date",
    disabled: false,
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — open the popover and pick a date. */
export const Playground: Story = {
  render: (args) => (
    <div className="w-64">
      <DatePicker {...args} />
    </div>
  ),
}

/** Preselected via `defaultValue`. */
export const WithValue: Story = {
  render: () => (
    <div className="w-64">
      <DatePicker defaultValue={new Date()} />
    </div>
  ),
}

/** A custom date-fns format string on the trigger. */
export const CustomFormat: Story = {
  render: () => (
    <div className="w-64">
      <DatePicker defaultValue={new Date()} dateFormat="yyyy-MM-dd" />
    </div>
  ),
}

/** Disabled trigger. */
export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <DatePicker defaultValue={new Date()} disabled />
    </div>
  ),
}

/** Controlled — the live selection is echoed below the trigger. */
export const Controlled: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    return (
      <div className="flex w-64 flex-col gap-2">
        <DatePicker value={date} onChange={setDate} />
        <p className="font-mono text-[11px] text-muted-foreground">
          selected: {date ? format(date, "yyyy-MM-dd") : "—"}
        </p>
      </div>
    )
  },
}
