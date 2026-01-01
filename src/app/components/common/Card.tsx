import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'hover';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'rounded-3xl overflow-hidden transition-all duration-300';

    const variants = {
      default: 'bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-[0_8px_32px_rgba(255,107,157,0.1)]',
      glass: 'bg-white/50 backdrop-blur-2xl border border-white/30 p-8 shadow-[0_8px_32px_rgba(168,85,247,0.1)]',
      hover: 'bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-[0_8px_32px_rgba(255,107,157,0.1)] hover:shadow-[0_12px_40px_rgba(255,107,157,0.2)] hover:-translate-y-1 hover:border-[#FF6B9D]/30',
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
