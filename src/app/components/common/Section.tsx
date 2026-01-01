import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'warm' | 'charcoal' | 'copper';
  container?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background = 'white', container = true, spacing = 'xl', children, ...props }, ref) => {
    const backgrounds = {
      white: 'bg-pure-white text-onyx',
      warm: 'bg-warm-white text-onyx',
      charcoal: 'bg-charcoal text-white',
      copper: 'bg-copper text-white',
    };

    const spacings = {
      none: 'py-0',
      sm: 'py-12',
      md: 'py-16 md:py-24',
      lg: 'py-20 md:py-32',
      xl: 'py-24 md:py-40',
    };

    return (
      <section
        ref={ref}
        className={cn(backgrounds[background], spacings[spacing], className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-6 md:px-12 max-w-[1320px]">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';
