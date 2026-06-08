import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Badge
 * Small status / label pill keyed to the brand palette. Lowercase, mono, wide
 * tracking. Two fills: `soft` (tinted bg + accent text, default) and `outline`
 * (transparent, accent border + text). Sharp brand corners. `tone` maps to the
 * brand palette including the four capability colours, expressed via the theme's
 * chart tokens so light/dark both resolve from the bridge.
 *
 * `dot` adds a leading status dot in the current text colour.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] font-semibold lowercase leading-none tracking-[0.04em] whitespace-nowrap [&>svg]:size-3 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      tone: {
        neutral: "",
        neon: "",
        cobalt: "",
        magenta: "",
        amber: "",
        teal: "",
        danger: "",
      },
      variant: {
        soft: "",
        outline: "bg-transparent",
      },
    },
    compoundVariants: [
      // soft — tinted background + accent text, transparent border
      { tone: "neutral", variant: "soft", className: "border-transparent bg-muted text-muted-foreground" },
      { tone: "neon", variant: "soft", className: "border-transparent bg-primary/15 text-primary" },
      { tone: "cobalt", variant: "soft", className: "border-transparent bg-chart-1/15 text-chart-1" },
      { tone: "magenta", variant: "soft", className: "border-transparent bg-chart-2/15 text-chart-2" },
      { tone: "amber", variant: "soft", className: "border-transparent bg-chart-3/15 text-chart-3" },
      { tone: "teal", variant: "soft", className: "border-transparent bg-chart-5/15 text-chart-5" },
      { tone: "danger", variant: "soft", className: "border-transparent bg-destructive/15 text-destructive" },
      // outline — transparent fill, accent border + text
      { tone: "neutral", variant: "outline", className: "border-border text-muted-foreground" },
      { tone: "neon", variant: "outline", className: "border-primary/40 text-primary" },
      { tone: "cobalt", variant: "outline", className: "border-chart-1/40 text-chart-1" },
      { tone: "magenta", variant: "outline", className: "border-chart-2/40 text-chart-2" },
      { tone: "amber", variant: "outline", className: "border-chart-3/40 text-chart-3" },
      { tone: "teal", variant: "outline", className: "border-chart-5/40 text-chart-5" },
      { tone: "danger", variant: "outline", className: "border-destructive/40 text-destructive" },
    ],
    defaultVariants: {
      tone: "neutral",
      variant: "soft",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
  /** Leading status dot in the current text colour. */
  dot?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone, variant, asChild = false, dot = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "span"
    return (
      <Comp
        ref={ref}
        data-slot="badge"
        className={cn(badgeVariants({ tone, variant }), className)}
        {...props}
      >
        {dot && (
          <span
            aria-hidden
            className="size-1.5 shrink-0 rounded-full bg-current"
          />
        )}
        {children}
      </Comp>
    )
  },
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
