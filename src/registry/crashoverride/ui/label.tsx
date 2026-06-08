import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Label
 * Form field label in the brand's mono, uppercase, wide-tracked voice. Built on
 * Radix Label so clicking the label focuses its associated control. Pair with
 * Input / Textarea / Field.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot="label"
    className={cn(
      "inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase leading-none tracking-[0.06em] text-muted-foreground select-none",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
