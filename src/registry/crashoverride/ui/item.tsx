import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Item
 * A versatile media row: leading media (icon/avatar), title + description, and
 * trailing actions. The building block for lists, settings rows, and results.
 * Card surface with a hairline border; `interactive` adds a hover lift + pointer.
 *
 *   <Item
 *     media={<Avatar name="Floyd Miles" />}
 *     title="Floyd Miles"
 *     description="floyd@crashoverride.com"
 *     actions={<Badge tone="neon">admin</Badge>}
 *   />
 */
export interface ItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  media?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  /** Adds hover affordance + pointer cursor for clickable rows. */
  interactive?: boolean
}

export function Item({
  media,
  title,
  description,
  actions,
  interactive = false,
  className,
  ...props
}: ItemProps) {
  return (
    <div
      data-slot="item"
      data-interactive={interactive || undefined}
      className={cn(
        "flex items-center gap-3 rounded-md border border-border bg-card px-3.5 py-3 transition-colors",
        interactive && "cursor-pointer hover:bg-accent",
        className,
      )}
      {...props}
    >
      {media && (
        <span className="inline-flex shrink-0 items-center text-muted-foreground">
          {media}
        </span>
      )}
      <div className="min-w-0 flex-1">
        {title && (
          <div className="text-sm font-semibold text-foreground">{title}</div>
        )}
        {description && (
          <div className="mt-0.5 truncate text-xs text-muted-foreground">
            {description}
          </div>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  )
}
