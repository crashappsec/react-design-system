import * as React from "react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Typography
 * Prose primitives carrying the brand type system — use for rendered long-form
 * content (docs, blog, KB) so headings/body/code stay on-brand. className-first
 * (compose with utilities, override freely). Headings ride the display face
 * (JetBrains Mono via `font-display`); inline code is `font-mono`; the muted
 * variants resolve to `--muted-foreground` so they track light/dark.
 *
 *   <H1>Tag. Track. Trust.</H1>
 *   <Lead>The Data Plane for Software in the AI Era.</Lead>
 *   <P>Body copy in Inter. <InlineCode>chalk insert</InlineCode>.</P>
 *   <Blockquote>You can't secure what you can't see.</Blockquote>
 */

export const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    data-slot="typography-h1"
    className={cn(
      "font-display text-4xl font-bold tracking-tight text-balance text-foreground",
      className,
    )}
    {...props}
  />
))
H1.displayName = "H1"

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    data-slot="typography-h2"
    className={cn(
      "font-display text-2xl font-bold tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
))
H2.displayName = "H2"

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="typography-h3"
    className={cn(
      "font-display text-xl font-semibold tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
))
H3.displayName = "H3"

export const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="typography-p"
    className={cn("text-[0.9375rem] leading-relaxed text-foreground", className)}
    {...props}
  />
))
P.displayName = "P"

export const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="typography-lead"
    className={cn("text-lg leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
Lead.displayName = "Lead"

export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    data-slot="typography-blockquote"
    className={cn(
      "border-l-[3px] border-primary pl-4 text-base italic leading-relaxed text-muted-foreground",
      className,
    )}
    {...props}
  />
))
Blockquote.displayName = "Blockquote"

export const InlineCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    data-slot="typography-inline-code"
    className={cn(
      "rounded-sm border border-border bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-foreground",
      className,
    )}
    {...props}
  />
))
InlineCode.displayName = "InlineCode"

export const Muted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="typography-muted"
    className={cn("font-mono text-xs text-muted-foreground", className)}
    {...props}
  />
))
Muted.displayName = "Muted"
