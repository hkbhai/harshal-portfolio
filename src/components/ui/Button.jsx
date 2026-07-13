import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const variants = {
  primary: [
    'bg-primary bg-[image:var(--primary-gradient)] text-white border border-primary/80',
    'hover:brightness-110 hover:border-primary hover:shadow-glow',
    'active:brightness-100 active:scale-[0.98]',
  ].join(' '),
  secondary: [
    'bg-background-card text-foreground border border-border-strong',
    'hover:bg-background-hover hover:border-primary/40',
    'active:bg-background-surface',
  ].join(' '),
  ghost: [
    'bg-transparent text-foreground-secondary border border-transparent',
    'hover:bg-background-hover hover:text-foreground',
  ].join(' '),
  outline: [
    'bg-transparent text-foreground border border-border',
    'hover:bg-background-surface hover:border-border-strong',
  ].join(' '),
};

const sizes = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-6 text-[14px]',
  lg: 'h-[52px] px-8 text-[15px]',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  isLoading = false,
  loading = false,
  disabled = false,
  type = 'button',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}) {
  const loadingState = isLoading || loading;
  const isDisabled = disabled || loadingState;

  return (
    <motion.button
      type={type}
      whileHover={isDisabled ? undefined : { y: -2, scale: 1.015 }}
      whileTap={isDisabled ? undefined : { y: 0, scale: 0.975 }}
      transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold shadow-card transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loadingState && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {!loadingState && LeftIcon && <LeftIcon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {!loadingState && RightIcon && <RightIcon className="h-4 w-4" aria-hidden="true" />}
    </motion.button>
  );
}
