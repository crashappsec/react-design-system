import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Tabs
 * Underline tab strip for switching views or filters. The list runs along a
 * hairline baseline; the active trigger carries a neon --primary underline and
 * a bright label, while inactive triggers run muted in the brand mono voice.
 * Canonical shadcn/Radix Tabs.
 *
 *   <Tabs defaultValue="30d">
 *     <TabsList>
 *       <TabsTrigger value="30d">30 days</TabsTrigger>
 *       <TabsTrigger value="all">All time</TabsTrigger>
 *     </TabsList>
 *     <TabsContent value="30d">…</TabsContent>
 *     <TabsContent value="all">…</TabsContent>
 *   </Tabs>
 */
const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    data-slot="tabs"
    className={cn("flex flex-col gap-4", className)}
    {...props}
  />
))
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="tabs-list"
    className={cn(
      "inline-flex items-center gap-1 border-b border-border",
      className,
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot="tabs-trigger"
    className={cn(
      "-mb-px inline-flex items-center gap-2 border-b-2 border-transparent px-3.5 py-2.5 font-mono text-[13px] font-normal whitespace-nowrap text-muted-foreground outline-none transition-colors",
      "hover:text-foreground/80",
      "focus-visible:ring-[3px] focus-visible:ring-ring/40",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=active]:text-foreground",
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    data-slot="tabs-content"
    className={cn(
      "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40",
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
