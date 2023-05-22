import { cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import cn from '~/utils/classNames';
import type { VariantProps } from 'class-variance-authority';
const buttonVariants = cva('button', {
  variants: {
    variant: {
      default: '',
      primary: '',
      secondary: '',
      accent: '',
      outline: '',
      ghost: '',
      link: '',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
    radius: {
      default: '',
      base: 'rounded-md',
      full: 'rounded-full',
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isIcon?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, isIcon, size, radius, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            radius,
            className,
          })
        )}
        {...props}
      ></button>
    );
  }
);

Button.displayName = 'Button';
