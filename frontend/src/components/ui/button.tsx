import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 [color-scheme:light]:bg-[#0f172a] [color-scheme:light]:text-white [color-scheme:dark]:bg-white [color-scheme:dark]:text-[#0f172a]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 [color-scheme:light]:bg-[#dc2626] [color-scheme:light]:text-white [color-scheme:dark]:bg-[#ef4444] [color-scheme:dark]:text-white",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 [color-scheme:light]:bg-white [color-scheme:light]:text-[#0f172a] [color-scheme:dark]:bg-[#1e293b] [color-scheme:dark]:text-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 [color-scheme:light]:bg-[#f1f5f9] [color-scheme:light]:text-[#0f172a] [color-scheme:dark]:bg-[#1e293b] [color-scheme:dark]:text-white",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 [color-scheme:light]:text-[#0f172a] [color-scheme:light]:hover:bg-[#f1f5f9] [color-scheme:dark]:text-white [color-scheme:dark]:hover:bg-[#1e293b]",
        link: "text-primary underline-offset-4 hover:underline [color-scheme:light]:text-[#0f172a] [color-scheme:dark]:text-white",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
