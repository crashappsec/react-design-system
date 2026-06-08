import * as React from "react"
import { GripVertical } from "lucide-react"
import {
  Group as PanelGroup,
  Panel as PanelPrimitive,
  Separator as PanelSeparator,
} from "react-resizable-panels"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Resizable
 * Two-or-more panels split by a draggable handle. The handle is a hairline
 * `--border` rule that lights to neon `--ring` on focus; an optional grip badge
 * sits on the `--secondary` surface. Built on `react-resizable-panels` (v4 API:
 * Group/Panel/Separator), surfaced under the familiar shadcn names.
 *
 *   <ResizablePanelGroup orientation="horizontal">
 *     <ResizablePanel defaultSize={50}>One</ResizablePanel>
 *     <ResizableHandle withHandle />
 *     <ResizablePanel defaultSize={50}>Two</ResizablePanel>
 *   </ResizablePanelGroup>
 */
function ResizablePanelGroup({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof PanelGroup>) {
  return (
    <PanelGroup
      data-slot="resizable-panel-group"
      orientation={orientation}
      className={cn(
        "flex h-full w-full data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof PanelPrimitive>) {
  return <PanelPrimitive data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelSeparator> & { withHandle?: boolean }) {
  return (
    <PanelSeparator
      data-slot="resizable-handle"
      className={cn(
        "relative flex w-px items-center justify-center bg-border outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
        "data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full",
        "data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-5 w-3 items-center justify-center rounded-sm border border-border bg-secondary">
          <GripVertical className="size-2.5 text-muted-foreground" />
        </div>
      )}
    </PanelSeparator>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
