import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function TechStack({ items, className, itemClassName }) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            'inline-flex items-center rounded-full border border-border bg-background-hover',
            'px-3 py-1.5 text-sm font-medium text-foreground-secondary',
            'transition-colors hover:border-border-strong hover:text-foreground',
            itemClassName
          )}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
