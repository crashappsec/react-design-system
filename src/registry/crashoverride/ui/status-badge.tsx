import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — StatusBadge
 * A health/status pill that maps a semantic status to a brand colour + leading
 * dot. Lowercase mono, sharp brand corners. Colours resolve from the theme's
 * `--chart-*` capability tokens so light/dark both come from the bridge:
 *   healthy → chart-4 (lime) · needs_attention / at_risk → chart-3 (amber) ·
 *   critical → destructive · stale → muted.
 *
 *   <StatusBadge status="healthy" />
 */
const STATUS = {
  healthy: "text-chart-4 border-chart-4/40",
  needs_attention: "text-chart-3 border-chart-3/40",
  at_risk: "text-chart-3 border-chart-3/40",
  critical: "text-destructive border-destructive/40",
  stale: "text-muted-foreground border-border",
} as const

export type Status = keyof typeof STATUS

export function StatusBadge({
  status,
  className,
  ...props
}: { status: Status } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="status-badge"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5",
        "font-mono text-xs lowercase",
        STATUS[status],
        className,
      )}
      {...props}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {status.replace("_", " ")}
    </span>
  )
}
