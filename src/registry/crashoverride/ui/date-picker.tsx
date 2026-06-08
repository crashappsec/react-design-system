import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/registry/crashoverride/lib/utils"
import { Calendar } from "@/registry/crashoverride/ui/calendar"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/crashoverride/ui/popover"

/**
 * Crash Override — DatePicker
 * A button trigger + popover Calendar. Composes our Popover (the floating panel)
 * and Calendar (the month grid) — no new package. The trigger matches the Input
 * voice (hairline border, sharp radius, leading calendar glyph); the picked date
 * is formatted with date-fns and shown on the trigger.
 *
 *   <DatePicker placeholder="Pick a date" onChange={setDate} />
 *
 * Controlled via `value` + `onChange`, or uncontrolled with `defaultValue`.
 */
export interface DatePickerProps {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  /** date-fns format string for the trigger label. @default "PPP" */
  dateFormat?: string
  className?: string
  disabled?: boolean
}

function DatePicker({
  value,
  defaultValue,
  onChange,
  placeholder = "Pick a date",
  dateFormat = "PPP",
  className,
  disabled,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState<Date | undefined>(defaultValue)
  const selected = value ?? internal

  function pick(next: Date | undefined) {
    setInternal(next)
    onChange?.(next)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          data-slot="date-picker-trigger"
          data-empty={!selected}
          className={cn(
            "flex h-10 w-full min-w-[200px] items-center gap-2.5 rounded-md border border-input bg-background px-3 text-left text-sm outline-none",
            selected ? "text-foreground" : "text-muted-foreground",
            "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
        >
          <CalendarIcon className="size-4 shrink-0 text-muted-foreground" />
          {selected ? format(selected, dateFormat) : placeholder}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={pick}
          defaultMonth={selected}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
