import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Tooltip
 * Hover/focus tooltip. The bubble floats on the `--popover` surface with a
 * hairline border and the brand's compact mono voice. Wrap your app (or a
 * subtree) in `TooltipProvider`. Canonical shadcn/Radix Tooltip.
 *
 *   <TooltipProvider>
 *     <Tooltip>
 *       <TooltipTrigger asChild><Button variant="ghost">Copy</Button></TooltipTrigger>
 *       <TooltipContent>Copy SBOM</TooltipContent>
 *     </Tooltip>
 *   </TooltipProvider>
 */
const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-fit rounded-sm border border-border bg-popover px-2.5 py-1.5 font-mono text-xs text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
