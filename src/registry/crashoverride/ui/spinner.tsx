import * as React from "react"
import { LoaderCircle } from "lucide-react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Spinner
 * An indeterminate loading indicator — a spinning lucide ring tinted with the
 * neon `--primary` by default. Inherits the current font size (`size-[1em]`)
 * so it lines up inside buttons and labels; size it with a text utility or
 * override `className`. Carries `role="status"` for assistive tech.
 *
 *   <Spinner />
 *   <Button disabled><Spinner className="mr-2 size-4" /> Saving…</Button>
 */
function Spinner({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof LoaderCircle>) {
  return (
    <LoaderCircle
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      className={cn("size-[1em] animate-spin text-primary", className)}
      {...props}
    />
  )
}

export { Spinner }
