import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-semibold",
  {
    variants: {
      variant: {
        default:
          "bg-gold text-foreground hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-gold underline-offset-4 hover:underline",
        hero: "bg-gold text-foreground hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 active:translate-y-0 text-lg",
        "hero-outline":
          "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-foreground text-lg",
        cta: "bg-gold text-foreground hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 active:translate-y-0 w-full",
        // For navy background sections
        "navy-primary": "bg-gold text-foreground hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 active:translate-y-0",
        "navy-outline": "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-foreground",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-lg",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
