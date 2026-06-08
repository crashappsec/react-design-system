import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — ButtonGroup
 * Joins related Buttons into one segmented control with shared borders. Inner
 * corners square off and adjacent borders collapse into a single hairline, so
 * the row reads as one sharp control. Wrap any Buttons (or button-like nodes);
 * pair best with `variant="secondary"` for the segmented-toolbar look.
 *
 *   <ButtonGroup>
 *     <Button variant="secondary">Day</Button>
 *     <Button variant="secondary">Week</Button>
 *     <Button variant="secondary">Month</Button>
 *   </ButtonGroup>
 */
export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(
        "inline-flex isolate",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        // Collapse adjacent borders so seams read as a single hairline.
        orientation === "horizontal"
          ? "[&>*:not(:first-child)]:-ml-px"
          : "[&>*:not(:first-child)]:-mt-px",
        // Square the inner corners; keep the outer corners brand-radiused.
        orientation === "horizontal"
          ? "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none"
          : "[&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
        // Lift the focused/hovered segment above its neighbours so its ring/border wins.
        "[&>*]:relative [&>*:hover]:z-10 [&>*:focus-visible]:z-10",
        className,
      )}
      {...props}
    />
  ),
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
