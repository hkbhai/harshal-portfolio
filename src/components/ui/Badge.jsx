import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-background-hover text-foreground-secondary border border-border',
  primary: 'bg-primary/10 text-primary border border-primary/25 shadow-[0_0_8px_var(--primary-glow)]',
  accent: 'bg-accent/10 text-accent border border-accent/25',
  success: 'bg-success/10 text-success border border-success/20',
};

const sizes = {
  sm: 'px-2.5 py-0.5 text-[11px]',
  md: 'px-3 py-1 text-[12px]',
};

function PulseDot({ color }) {
  const colorMap = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    success: 'bg-success',
  };
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
      <span
        className={cn('absolute inline-flex h-full w-full animate-ping-slow rounded-full opacity-50', colorMap[color])}
      />
      <span className={cn('relative inline-flex h-2 w-2 rounded-full', colorMap[color])} />
    </span>
  );
}

export function Badge({ children, variant = 'default', size = 'md', className, ...props }) {
  const hasDot = variant === 'primary' || variant === 'accent' || variant === 'success';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {hasDot && <PulseDot color={variant} />}
      {children}
    </span>
  );
}
