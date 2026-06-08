import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — CodePanel
 * The signature developer surface: a terminal / BBS-aesthetic code block on the
 * slate `--card` surface with optional macOS traffic-light chrome. Mono voice,
 * hairline border, sharp brand corners. The code body lives in a `<pre>` so
 * whitespace and line breaks are preserved verbatim.
 *
 *   <CodePanel title="bash">
 *     npx shadcn add @crashoverride/theme
 *   </CodePanel>
 *
 * Omit `title` for a chrome-free panel (just the slate code surface).
 */
export interface CodePanelProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Title-bar label (e.g. "bash"). When set, renders the traffic-light chrome. */
  title?: React.ReactNode
}

/** The three macOS-style traffic-light dots, in the brand's terminal palette. */
const DOTS = [
  "bg-[var(--color-traffic-red)]",
  "bg-[var(--color-traffic-yellow)]",
  "bg-[var(--color-traffic-green)]",
] as const

export const CodePanel = React.forwardRef<HTMLDivElement, CodePanelProps>(
  ({ title, className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="code-panel"
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card font-mono text-card-foreground",
        className,
      )}
      {...props}
    >
      {title != null && (
        <div
          data-slot="code-panel-bar"
          className="flex items-center gap-2 border-b border-border px-3.5 py-2.5"
        >
          {DOTS.map((dot, i) => (
            <span
              key={i}
              data-slot="code-panel-dot"
              aria-hidden
              className={cn("size-2.5 rounded-full", dot)}
            />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">{title}</span>
        </div>
      )}
      <pre
        data-slot="code-panel-body"
        className="overflow-x-auto px-4 py-4 font-mono text-[0.8125rem] leading-relaxed"
      >
        {children}
      </pre>
    </div>
  ),
)
CodePanel.displayName = "CodePanel"
