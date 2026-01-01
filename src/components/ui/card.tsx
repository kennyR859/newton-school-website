import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-3xl transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 p-8 shadow-[0_8px_32px_rgba(255,107,157,0.1)]",
        glass:
          "bg-white/50 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/10 p-8",
        hover:
          "bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-transparent p-8 shadow-[0_8px_32px_rgba(255,107,157,0.1)] hover:shadow-[0_12px_40px_rgba(255,107,157,0.2)] hover:border-[#FF6B9D]/30 hover:-translate-y-1",
        solid:
          "bg-white dark:bg-[#1F1F2E] p-8 shadow-lg",
        tilt:
          "bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 p-8 shadow-[0_8px_32px_rgba(255,107,157,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  tiltEnabled?: boolean;
  tiltMaxAngle?: number;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, tiltEnabled = false, tiltMaxAngle = 10, onMouseMove, onMouseLeave, style, ...props }, ref) => {
    const [tiltStyle, setTiltStyle] = React.useState<React.CSSProperties>({});
    const cardRef = React.useRef<HTMLDivElement>(null);

    // Use combined ref
    React.useImperativeHandle(ref, () => cardRef.current!);

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!tiltEnabled || !cardRef.current) {
          onMouseMove?.(e);
          return;
        }

        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          onMouseMove?.(e);
          return;
        }

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle rotation - max angle divided by 2 for gentler effect
        const rotateX = ((y - centerY) / centerY) * (-tiltMaxAngle * 0.5);
        const rotateY = ((x - centerX) / centerX) * (tiltMaxAngle * 0.5);

        setTiltStyle({
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
          boxShadow: `${rotateY * -1}px ${rotateX * 1}px 25px rgba(255, 107, 157, 0.15)`,
        });

        onMouseMove?.(e);
      },
      [tiltEnabled, tiltMaxAngle, onMouseMove]
    );

    const handleMouseLeave = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (tiltEnabled) {
          setTiltStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            boxShadow: '0 8px 32px rgba(255, 107, 157, 0.1)',
          });
        }
        onMouseLeave?.(e);
      },
      [tiltEnabled, onMouseLeave]
    );

    return (
      <div
        ref={cardRef}
        className={cn(
          cardVariants({ variant: tiltEnabled ? 'tilt' : variant, className }),
          tiltEnabled && 'transform-gpu will-change-transform'
        )}
        style={{ ...style, ...tiltStyle, transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1)' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-6", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
