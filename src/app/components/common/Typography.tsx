import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-large' | 'caption' | 'overline' | 'quote';
  color?: 'default' | 'muted' | 'white' | 'copper' | 'accent' | 'charcoal' | 'error';
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as, variant = 'body', color = 'default', children, ...props }, ref) => {
    const Component = as || (variant.startsWith('h') ? variant : 'p') as any;

    const variants = {
      h1: 'font-heading text-4xl md:text-5xl lg:text-[60px] tracking-tight leading-[1.1]',
      h2: 'font-heading text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15]',
      h3: 'font-heading text-2xl md:text-3xl lg:text-[32px] leading-[1.25]',
      h4: 'font-heading text-xl md:text-2xl lg:text-[24px] leading-[1.3]',
      h5: 'font-heading text-lg md:text-xl lg:text-[20px] leading-[1.3]',
      h6: 'font-heading text-base md:text-lg lg:text-[18px] leading-[1.3]',
      body: 'font-body text-base leading-[1.7] tracking-wide',
      'body-large': 'font-body text-lg leading-[1.7] tracking-wide',
      caption: 'font-body text-xs md:text-sm font-medium tracking-wider uppercase',
      overline: 'font-body text-xs font-bold tracking-[0.15em] uppercase',
      quote: 'font-accent text-xl md:text-2xl italic leading-relaxed',
    };

    const colors = {
      default: 'text-inherit',
      muted: 'text-stone',
      white: 'text-white',
      copper: 'text-copper',
      accent: 'text-rose-gold',
      charcoal: 'text-charcoal',
      error: 'text-error',
    };

    return (
      <Component
        ref={ref}
        className={cn(variants[variant], colors[color], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
