import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Alert
 * Inline message banner. A flat tinted fill, a hairline border, and a 3px
 * tinted left accent in the variant colour. Variants map to the brand status
 * palette: `default` (neutral), `info` (cobalt), `success` (neon),
 * `warning` (amber), `destructive` (red). An optional leading icon (drop a
 * lucide glyph as the first child) takes the variant colour; the title runs in
 * the brand mono voice and the body runs muted. Canonical shadcn/Radix Alert.
 *
 *   <Alert variant="success">
 *     <CircleCheck />
 *     <AlertTitle>Artifact tagged</AlertTitle>
 *     <AlertDescription>Provenance recorded and beaconing.</AlertDescription>
 *   </Alert>
 */
const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-md border border-border border-l-[3px] px-3.5 py-3 text-sm has-[>svg]:grid-cols-[1.75rem_1fr] has-[>svg]:gap-x-1 [&>svg]:size-4 [&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "border-l-border bg-card [&>svg]:text-foreground",
        info: "border-l-chart-1 bg-chart-1/10 [&>svg]:text-chart-1",
        success: "border-l-primary bg-primary/10 [&>svg]:text-primary",
        warning: "border-l-chart-3 bg-chart-3/12 [&>svg]:text-chart-3",
        destructive:
          "border-l-destructive bg-destructive/10 [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const titleColor: Record<string, string> = {
  default: "text-foreground",
  info: "text-chart-1",
  success: "text-primary",
  warning: "text-chart-3",
  destructive: "text-destructive",
}

const AlertContext = React.createContext<{ variant: string }>({
  variant: "default",
})

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <AlertContext.Provider value={{ variant: variant ?? "default" }}>
    <div
      ref={ref}
      role="alert"
      data-slot="alert"
      data-variant={variant ?? "default"}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  </AlertContext.Provider>
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(AlertContext)
  return (
    <div
      ref={ref}
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-mono text-[13px] font-semibold tracking-[0.01em]",
        titleColor[variant] ?? titleColor.default,
        className,
      )}
      {...props}
    />
  )
})
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-description"
    className={cn(
      "col-start-2 text-[13px] leading-relaxed text-muted-foreground",
      className,
    )}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }
