import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-graphite mb-2 uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-white border border-[#D1D1D1] rounded-none px-5 py-4 text-base font-body outline-none transition-colors duration-200 focus:border-charcoal placeholder:text-warm-gray',
            error && 'border-error focus:border-error',
            className
          )}
          {...props}
        />
        {error && <span className="mt-1 text-sm text-error">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-graphite mb-2 uppercase tracking-wider">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full bg-white border border-[#D1D1D1] rounded-none px-5 py-4 text-base font-body outline-none transition-colors duration-200 focus:border-charcoal placeholder:text-warm-gray',
            error && 'border-error focus:border-error',
            className
          )}
          {...props}
        />
        {error && <span className="mt-1 text-sm text-error">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
