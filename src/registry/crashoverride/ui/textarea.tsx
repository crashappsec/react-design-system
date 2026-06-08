import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Textarea
 * Multi-line text input on the one dark surface. Hairline `--input` border, neon
 * focus ring (`--ring`), sharp brand radius, vertical resize. Canonical shadcn
 * `<textarea>` — pair with Label / Field for help + errors.
 *
 * `aria-invalid` flips the border + ring to the destructive token.
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    data-slot="textarea"
    className={cn(
      "flex min-h-20 w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground shadow-none transition-[color,border-color,box-shadow] outline-none",
      "placeholder:text-muted-foreground placeholder:font-mono",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
      className,
    )}
    {...props}
  />
))
Textarea.displayName = "Textarea"

export { Textarea }
