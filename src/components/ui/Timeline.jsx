import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Timeline({ items, className }) {
  return (
    <div className={cn('relative', className)} role="list" aria-label="Professional timeline">
      {/* Vertical connector */}
      <div
        className="absolute left-[18px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-[21px]"
        aria-hidden="true"
      />

      {items.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex gap-4 pb-7 last:pb-0"
          role="listitem"
        >
          {/* Dot */}
          <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background-card shadow-card md:h-[42px] md:w-[42px]">
            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
          </div>

          <div className="pt-0.5">
            <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
              {item.year}
            </span>
            <h4 className="mt-1.5 text-[15px] font-bold text-foreground">{item.title}</h4>
            <p className="mt-0.5 text-[13px] leading-relaxed text-foreground-secondary">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
