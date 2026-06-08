import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { type DateRange } from "react-day-picker"
import { Calendar } from "./calendar"

/**
 * Calendar — a month-grid date picker built on `react-day-picker`. Branded: nav
 * arrows reuse the ghost Button voice, the selected day fills with the neon
 * `--primary` token, and today gets a subtle accent ring. Supports single,
 * multiple, and range selection.
 */
const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A `react-day-picker` month grid styled with the brand voice. Drive selection via `mode` (`single` | `multiple` | `range`) with `selected` + `onSelect`. `captionLayout=\"dropdown\"` swaps the month/year label for select menus; `showOutsideDays` toggles the leading/trailing days.",
      },
    },
  },
  argTypes: {
    showOutsideDays: {
      control: "boolean",
      description: "Render leading/trailing days from adjacent months.",
      table: { defaultValue: { summary: "true" } },
    },
    captionLayout: {
      control: "inline-radio",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "Month/year header style.",
      table: { defaultValue: { summary: "label" } },
    },
    mode: { control: false, description: "single | multiple | range." },
  },
  args: {
    showOutsideDays: true,
    captionLayout: "label",
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — single-day selection, controlled by state. */
export const Playground: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        {...args}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-border"
      />
    )
  },
}

/** Single selection — the picked day fills with the neon primary. */
export const Single: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-border"
      />
    )
  },
}

/** Range selection — start and end fill, the span tints to accent. */
export const Range: Story = {
  render: () => {
    const today = new Date()
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: today,
      to: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
    })
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border border-border"
      />
    )
  },
}

/** Multiple selection — pick several discrete days. */
export const Multiple: Story = {
  render: () => {
    const [days, setDays] = React.useState<Date[] | undefined>([new Date()])
    return (
      <Calendar
        mode="multiple"
        selected={days}
        onSelect={setDays}
        className="rounded-md border border-border"
      />
    )
  },
}

/** Dropdown caption — pick month and year from select menus. */
export const DropdownCaption: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        captionLayout="dropdown"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-border"
      />
    )
  },
}
