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
            'group inline-flex items-center gap-1.5 rounded-full',
            'border border-primary/15 px-3 py-1.5',
            'text-sm font-medium text-foreground-secondary',
            'transition-all duration-300 hover:-translate-y-0.5',
            'hover:border-primary/40 hover:text-foreground',
            'hover:shadow-[0_4px_16px_var(--primary-glow)]',
            itemClassName
          )}
          style={{
            backgroundColor: 'color-mix(in srgb, var(--primary) 6%, var(--bg-card))',
          }}
        >
          <span
            className="h-1.5 w-1.5 flex-shrink-0 rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            style={{ backgroundImage: 'var(--primary-gradient)' }}
            aria-hidden="true"
          />
          {item}
        </motion.span>
      ))}
    </div>
  );
}
