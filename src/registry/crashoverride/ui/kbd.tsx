import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Kbd
 * Keyboard key hint. Mono, hairline border, subtle fill, sharp brand corners.
 * Combine for chords.
 *
 *   <span><Kbd>⌘</Kbd> <Kbd>K</Kbd></span>
 */
export function Kbd({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-sm border border-border bg-secondary px-1.5",
        "font-mono text-[11px] font-medium leading-none text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}
