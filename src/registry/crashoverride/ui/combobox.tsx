import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/registry/crashoverride/lib/utils"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/crashoverride/ui/popover"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/registry/crashoverride/ui/command"

/**
 * Crash Override — Combobox
 * Autocomplete input + filtered dropdown. Composes our Popover (the floating
 * panel) and Command (the searchable list) — not a new Radix primitive. The
 * trigger matches the Input voice (hairline border, sharp radius, neon focus
 * ring); the selected option carries a neon --primary check.
 *
 *   <Combobox
 *     options={["us-east-1", "eu-west-1", "ap-south-1"]}
 *     onChange={setRegion}
 *   />
 *
 * `options` may be plain strings or `{ value, label }`. Controlled via
 * `value` + `onChange`, or uncontrolled with `defaultValue`.
 */
type ComboboxOption = string | { value: string; label: string }

export interface ComboboxProps {
  options?: ComboboxOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  className?: string
  disabled?: boolean
}

function Combobox({
  options = [],
  value,
  defaultValue = "",
  onChange,
  placeholder = "Select…",
  searchPlaceholder = "Search…",
  emptyText = "No match.",
  className,
  disabled,
}: ComboboxProps) {
  const opts = React.useMemo(
    () =>
      options.map((o) =>
        typeof o === "string" ? { value: o, label: o } : o,
      ),
    [options],
  )
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState(defaultValue)
  const current = value ?? internal
  const selectedLabel = opts.find((o) => o.value === current)?.label

  function pick(next: string) {
    const resolved = next === current ? "" : next
    setInternal(resolved)
    onChange?.(resolved)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          data-slot="combobox-trigger"
          className={cn(
            "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 text-sm outline-none",
            selectedLabel ? "text-foreground" : "text-muted-foreground",
            "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
        >
          {selectedLabel ?? placeholder}
          <ChevronsUpDown className="size-4 shrink-0 text-muted-foreground" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] min-w-[12rem] p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {opts.map((o) => (
                <CommandItem
                  key={o.value}
                  value={o.label}
                  onSelect={() => pick(o.value)}
                >
                  {o.label}
                  <Check
                    className={cn(
                      "ml-auto size-4 text-primary",
                      o.value === current ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox }
