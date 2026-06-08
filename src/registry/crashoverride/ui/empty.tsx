import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Empty
 * Empty-state block: a centered icon chip, title, description, and an optional
 * action. Dashed hairline frame, brand display title, muted body copy.
 *
 *   <Empty
 *     icon={<InboxIcon />}
 *     title="No deployments yet"
 *     description="Ship something and it'll beacon back here."
 *     action={<Button>Read the docs</Button>}
 *   />
 */
export interface EmptyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

export function Empty({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyProps) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-border px-6 py-11 text-center",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-1.5 inline-flex size-12 items-center justify-center rounded-md bg-secondary text-muted-foreground [&>svg]:size-6">
          {icon}
        </div>
      )}
      {title && (
        <div className="font-display text-base font-bold text-foreground">
          {title}
        </div>
      )}
      {description && (
        <div className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          {description}
        </div>
      )}
      {action && <div className="mt-3">{action}</div>}
    </div>
  )
}
