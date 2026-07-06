import { cn } from '@/lib/utils';

export function Container({ children, className, ...props }) {
  return (
    <div className={cn('container-page', className)} {...props}>
      {children}
    </div>
  );
}
