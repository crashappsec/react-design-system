import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Drawer
 * Bottom drawer with a grab handle (mobile-first), sliding up over a scrim.
 * The panel rides on the `--popover` surface with a hairline top border, sharp
 * brand radius on its top corners, and a muted grab handle; title runs in the
 * brand voice, description muted. Built on `vaul`. Canonical shadcn structure.
 *
 *   <Drawer>
 *     <DrawerTrigger asChild><Button>Open</Button></DrawerTrigger>
 *     <DrawerContent>
 *       <DrawerHeader>
 *         <DrawerTitle>Quick actions</DrawerTitle>
 *         <DrawerDescription>Run a task on this service.</DrawerDescription>
 *       </DrawerHeader>
 *     </DrawerContent>
 *   </Drawer>
 */
function Drawer({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return (
    <DrawerPrimitive.Root
      data-slot="drawer"
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  )
}
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerPortal = DrawerPrimitive.Portal
const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    data-slot="drawer-overlay"
    className={cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-[2px]", className)}
    {...props}
  />
))
DrawerOverlay.displayName = "DrawerOverlay"

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      data-slot="drawer-content"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-lg border border-border bg-popover text-popover-foreground",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-1 w-9 shrink-0 rounded-full bg-border" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("grid gap-1.5 p-6 text-left", className)}
      {...props}
    />
  )
}
DrawerHeader.displayName = "DrawerHeader"

function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-6", className)}
      {...props}
    />
  )
}
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    data-slot="drawer-title"
    className={cn(
      "font-display text-base font-bold tracking-[-0.01em] text-foreground",
      className,
    )}
    {...props}
  />
))
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    data-slot="drawer-description"
    className={cn("text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
