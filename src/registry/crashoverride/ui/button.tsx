import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Button
 * Branded over the shadcn/Radix base. Mono-ish label (font-display, semibold,
 * 0.01em tracking), sharp brand radius, punchy ease-out hover.
 *
 * Variants (brand): primary (neon-lime, dark text) · secondary (outline grey,
 * the docs/self-serve path) · enterprise (cobalt fill, hero CTA bands) ·
 * ghost (quiet). Sizes sm/md/lg → 32/40/48px.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-display font-semibold tracking-[0.01em] leading-none transition-[background-color,border-color,filter,transform] duration-150 ease-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border border-primary bg-primary text-primary-foreground hover:brightness-110",
        secondary:
          "border border-input bg-transparent text-foreground hover:bg-accent",
        enterprise:
          "border border-chart-1 bg-chart-1 text-white hover:brightness-110",
        ghost:
          "border border-transparent bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 px-3 text-[13px]",
        md: "h-10 px-[18px] text-sm",
        lg: "h-12 px-6 text-[15px]",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
