import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/registry/crashoverride/lib/utils"
import { type ButtonProps, buttonVariants } from "@/registry/crashoverride/ui/button"

/**
 * Crash Override — Pagination
 * Page navigation with prev/next + numbered pages. The cells reuse the brand
 * Button styling — the active page lifts to the neon `--primary` fill, the rest
 * stay quiet `ghost`, all in the brand's mono voice. Composable shadcn/Radix
 * structure; wire `isActive` / `aria-current` to your router state.
 *
 *   <Pagination>
 *     <PaginationContent>
 *       <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
 *       <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
 *       <PaginationItem><PaginationEllipsis /></PaginationItem>
 *       <PaginationItem><PaginationNext href="#" /></PaginationItem>
 *     </PaginationContent>
 *   </Pagination>
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-slot="pagination-content"
    className={cn("flex flex-row items-center gap-1.5", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} data-slot="pagination-item" className={className} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "sm",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "primary" : "ghost",
          size,
        }),
        "min-w-9 cursor-pointer font-mono font-medium tracking-normal",
        !isActive && "text-foreground",
        className,
      )}
      {...props}
    />
  )
}
PaginationLink.displayName = "PaginationLink"

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="sm"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <ChevronLeft className="size-4" />
      <span className="hidden sm:inline">Previous</span>
    </PaginationLink>
  )
}
PaginationPrevious.displayName = "PaginationPrevious"

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="sm"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:inline">Next</span>
      <ChevronRight className="size-4" />
    </PaginationLink>
  )
}
PaginationNext.displayName = "PaginationNext"

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-9 items-center justify-center text-muted-foreground",
        className,
      )}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
