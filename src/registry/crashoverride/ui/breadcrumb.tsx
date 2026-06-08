import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Breadcrumb
 * Hierarchical path; the last item is the current page. Links run in the brand's
 * muted mono voice and lift to the foreground on hover; the current page is the
 * bold foreground. Composable shadcn/Radix structure (the link/separator use
 * `@radix-ui/react-slot` so you can swap in a router link or custom glyph).
 *
 *   <Breadcrumb>
 *     <BreadcrumbList>
 *       <BreadcrumbItem><BreadcrumbLink href="#">Services</BreadcrumbLink></BreadcrumbItem>
 *       <BreadcrumbSeparator />
 *       <BreadcrumbItem><BreadcrumbPage>prod-bandwidth-system</BreadcrumbPage></BreadcrumbItem>
 *     </BreadcrumbList>
 *   </Breadcrumb>
 */
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => (
  <nav ref={ref} aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
))
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    data-slot="breadcrumb-list"
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words font-mono text-[12.5px] text-muted-foreground sm:gap-2",
      className,
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-slot="breadcrumb-item"
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
  return (
    <Comp
      ref={ref}
      data-slot="breadcrumb-link"
      className={cn(
        "text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:text-foreground",
        className,
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="breadcrumb-page"
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-semibold text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("text-muted-foreground [&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
