import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 min-w-max",
      },
      radius: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  compact?: boolean;
  icon?: React.ReactNode;
  tooltipContent?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      radius,
      size,
      asChild = false,
      compact = false,
      icon: Icon,
      children,
      tooltipContent,
      ...props
    },
    ref
  ) => {
    const isIconExist = !!Icon;

    if (isIconExist && asChild) {
      throw new Error(
        "'asChild = true' expects only a single React Element, Please use only one children or remove the Icon prop"
      );
    }

    const Comp = asChild ? Slot : "button";

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Comp
            className={cn(buttonVariants({ variant, size, radius, className }))}
            ref={ref}
            {...props}
            children={
              isIconExist ? (
                <>
                  {Icon} {!compact && children}
                </>
              ) : (
                children
              )
            }
          />
        </TooltipTrigger>
        {tooltipContent && <TooltipContent>{tooltipContent}</TooltipContent>}
      </Tooltip>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
