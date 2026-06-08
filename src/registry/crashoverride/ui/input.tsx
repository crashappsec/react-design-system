import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Input
 * Text field on the one dark surface. Contrast comes from the hairline `--input`
 * border + the neon focus ring (`--ring`), never a background shift. Sharp brand
 * radius. Canonical shadcn `<input>` — pair with Label / Field for help + errors.
 *
 * `aria-invalid` flips the border + ring to the destructive token.
 */
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    data-slot="input"
    className={cn(
      "flex h-10 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-none transition-[color,border-color,box-shadow] outline-none",
      "placeholder:text-muted-foreground placeholder:font-mono",
      "file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
      "selection:bg-primary selection:text-primary-foreground",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
      className,
    )}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }
