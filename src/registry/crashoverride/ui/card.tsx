import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Card
 * The flat surface primitive. Sits on the slate `--card` surface and pops via a
 * hairline `--border`, never a heavy shadow. Optional capability `accent` draws a
 * 3px bar on the top edge (mapped to the brand chart palette, or any colour);
 * `interactive` enables a hover state (border brightens, surface lifts to accent).
 *
 * Slots follow the shadcn anatomy: CardHeader / CardTitle / CardDescription /
 * CardAction / CardContent / CardFooter.
 */
const ACCENTS = {
  neon: "var(--color-chart-4)",
  cobalt: "var(--color-chart-1)",
  magenta: "var(--color-chart-2)",
  amber: "var(--color-chart-3)",
  teal: "var(--color-chart-5)",
} as const

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Capability accent bar on the top edge — a palette key or any CSS colour. */
  accent?: keyof typeof ACCENTS | (string & {})
  /** Enables the hover state (pointer cursor, brighter border, accent surface). */
  interactive?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent, interactive = false, style, ...props }, ref) => {
    const accentColor = accent
      ? ACCENTS[accent as keyof typeof ACCENTS] ?? accent
      : undefined
    return (
      <div
        ref={ref}
        data-slot="card"
        style={
          accentColor
            ? { borderTopWidth: "3px", borderTopColor: accentColor, ...style }
            : style
        }
        className={cn(
          "flex flex-col gap-6 rounded-md border border-border bg-card py-6 text-card-foreground",
          "transition-[background-color,border-color,transform] duration-150 ease-out",
          interactive &&
            "cursor-pointer hover:border-muted-foreground/40 hover:bg-accent",
          className,
        )}
        {...props}
      />
    )
  },
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn(
      "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[[data-slot=card-action]]:grid-cols-[1fr_auto]",
      className,
    )}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-title"
    className={cn("font-display font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-action"
    className={cn(
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
      className,
    )}
    {...props}
  />
))
CardAction.displayName = "CardAction"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn("px-6", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn("flex items-center px-6", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
}
