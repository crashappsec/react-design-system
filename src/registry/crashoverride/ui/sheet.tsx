import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Sheet
 * Edge-anchored side panel that slides in over a scrim. `side` = right
 * (default) / left / top / bottom. The panel rides on the `--popover` surface
 * with a single hairline border on its anchored edge; title in the brand voice,
 * description muted. Built on Radix Dialog. Canonical shadcn structure.
 *
 *   <Sheet>
 *     <SheetTrigger asChild><Button>Filters</Button></SheetTrigger>
 *     <SheetContent side="right">
 *       <SheetHeader>
 *         <SheetTitle>Filters</SheetTitle>
 *         <SheetDescription>Narrow the result set.</SheetDescription>
 *       </SheetHeader>
 *     </SheetContent>
 *   </Sheet>
 */
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    data-slot="sheet-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-[2px]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
))
SheetOverlay.displayName = "SheetOverlay"

const sheetVariants = cva(
  cn(
    "fixed z-50 flex flex-col gap-4 overflow-y-auto bg-popover p-6 text-popover-foreground shadow-lg transition ease-in-out",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  ),
  {
    variants: {
      side: {
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l border-border sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        left:
          "inset-y-0 left-0 h-full w-3/4 border-r border-border sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        top:
          "inset-x-0 top-0 h-auto border-b border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 h-auto border-t border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      },
    },
    defaultVariants: { side: "right" },
  },
)

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> &
    VariantProps<typeof sheetVariants>
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      data-slot="sheet-content"
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close
        className={cn(
          "absolute top-4 right-4 rounded-sm text-muted-foreground opacity-70 transition-opacity outline-none",
          "hover:opacity-100 focus-visible:ring-[3px] focus-visible:ring-ring/40",
          "disabled:pointer-events-none",
        )}
      >
        <X className="size-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = "SheetContent"

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  )
}
SheetHeader.displayName = "SheetHeader"

function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2", className)}
      {...props}
    />
  )
}
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    data-slot="sheet-title"
    className={cn(
      "font-display text-base font-bold tracking-[-0.01em] text-foreground",
      className,
    )}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    data-slot="sheet-description"
    className={cn("text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
