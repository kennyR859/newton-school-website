import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] btn-ripple",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white shadow-[0_4px_15px_rgba(255,107,157,0.4)] hover:shadow-[0_8px_25px_rgba(255,107,157,0.5)] hover:scale-[1.02] hover:-translate-y-0.5",
        secondary:
          "rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-sm text-foreground border border-white/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 hover:shadow-lg",
        accent:
          "rounded-full bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white shadow-[0_4px_15px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.5)] hover:scale-[1.02] hover:-translate-y-0.5",
        outline:
          "rounded-full bg-transparent text-white border-2 border-white/70 hover:bg-white/10 hover:border-white backdrop-blur-sm",
        ghost:
          "rounded-full bg-transparent text-[#FF6B9D] hover:text-[#A855F7] hover:bg-[#FF6B9D]/10",
        destructive:
          "rounded-full bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-6 py-2 text-xs",
        default: "h-11 px-8 py-3 text-sm",
        lg: "h-13 px-10 py-4 text-base",
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
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, fullWidth = false, isLoading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          fullWidth && "w-full",
          isLoading && "cursor-wait"
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
