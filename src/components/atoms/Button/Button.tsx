import { cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import cn from '~/utils/classNames';
import type { VariantProps } from 'class-variance-authority';
const buttonVariants = cva('py-3 px-5', {
  variants: {
    variant: {
      default: 'border border-gray-500',
      primary: 'bg-primary',
      secondary: 'bg-secondary',

      outline: 'bg-transparent border',
      ghost: 'bg-transparent border-none',
      link: 'underline',
    },
    colors: {
      default: 'text-white',
      primary: 'text-primary',
      secondary: 'text-secondary',
      black: 'text-black',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-[20px] px-8',
      xl: 'text-xl',
    },
    radius: {
      default: '',
      base: 'rounded-md',
      large: 'rounded-3xl px-11',
      circle: 'rounded-full',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      colors: 'default',
      class: 'text-black',
    },
    {
      variant: 'ghost',
      colors: 'default',
      class: 'text-black',
    },
    {
      variant: 'link',
      colors: 'default',
      class: 'text-blue-600',
    },
    {
      variant: 'outline',
      colors: 'default',
      class: 'text-black border-black',
    },
    {
      variant: 'outline',
      colors: 'primary',
      class: ' border-primary',
    },
    {
      variant: 'outline',
      colors: 'secondary',
      class: 'border-secondary',
    },
    {
      radius: 'circle',
      class: 'w-16 h-16 p-0',
    },
  ],
});
type ButtonWithIconProps = {
  withIcon: true;
  isLoading?: boolean;
  icon: React.ReactNode;
  isFullWidth?: boolean;
} & VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonWithoutIconProps = {
  withIcon?: false;
  isLoading?: boolean;
  icon?: React.ReactNode;
  isFullWidth?: boolean;
} & VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = ButtonWithIconProps | ButtonWithoutIconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      withIcon = false,
      size = 'md',
      radius = 'base',
      icon,
      isFullWidth = false,
      colors = 'default',
      isLoading,
      children,
      className,

      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={isLoading}
        className={cn(
          buttonVariants({
            variant,
            size,
            radius,
            colors,
            className,
          }),
          {
            'w-full': isFullWidth,
            'flex items-center': withIcon,
          }
        )}
        {...props}
      >
        {isLoading ? (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className=" !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : null}

        {withIcon ? icon : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
