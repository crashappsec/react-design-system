import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Tag
 * Inline metadata item and removable chip — the workhorse of the console's
 * dense info rows ("us-east-1", "12 contributors", "SLSA Level 2"). Muted mono
 * voice. Pass `icon` + `label` for a meta item, or `label` + `value` for a
 * key→value pair. When `onRemove` is set it renders a trailing dismiss button
 * and the chip gains a hairline border + subtle fill.
 *
 *   <Tag icon={<GlobeIcon />} label="us-east-1" />
 *   <Tag label="SLSA" value="Level 2" />
 *   <Tag label="k8s" onRemove={() => …} />
 */
export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "onRemove"> {
  /** Leading icon node (line icon recommended). */
  icon?: React.ReactNode
  label?: React.ReactNode
  /** When set, rendered emphasised after the label as the value. */
  value?: React.ReactNode
  /** When provided, renders a trailing dismiss button and fires on click. */
  onRemove?: () => void
}

export function Tag({
  icon,
  label,
  value,
  onRemove,
  className,
  children,
  ...props
}: TagProps) {
  const removable = typeof onRemove === "function"
  return (
    <span
      data-slot="tag"
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs leading-tight text-muted-foreground",
        removable &&
          "rounded-md border border-border bg-muted px-2 py-0.5 text-foreground",
        className,
      )}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0 [&>svg]:size-3.5">{icon}</span>}
      {label != null && <span>{label}</span>}
      {value != null && (
        <span className="font-semibold text-foreground">{value}</span>
      )}
      {children}
      {removable && (
        <button
          type="button"
          aria-label="Remove"
          onClick={onRemove}
          className="-mr-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-3" />
        </button>
      )}
    </span>
  )
}
