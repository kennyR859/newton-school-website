import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full';

    const variants = {
      primary: 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_4px_15px_rgba(255,107,157,0.4)] hover:shadow-[0_8px_25px_rgba(255,107,157,0.5)] hover:scale-[1.02] hover:-translate-y-0.5',
      secondary: 'bg-white/70 backdrop-blur-sm text-[#1F1F1F] border border-white/50 hover:bg-white hover:shadow-[0_8px_25px_rgba(255,107,157,0.2)]',
      accent: 'bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white shadow-[0_4px_15px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.5)] hover:scale-[1.02]',
      outline: 'bg-transparent text-white border-2 border-white/70 hover:bg-white/10 hover:border-white backdrop-blur-sm',
      ghost: 'bg-transparent text-[#FF6B9D] hover:text-[#A855F7] hover:bg-[#FDF2F8]',
    };

    const sizes = {
      sm: 'text-xs px-6 py-3',
      md: 'text-sm px-8 py-4',
      lg: 'text-base px-10 py-5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
