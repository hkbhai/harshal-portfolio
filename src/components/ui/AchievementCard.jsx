import { motion } from 'framer-motion';
import { Building2, BrainCircuit, Search, Monitor, Gauge, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const iconMap = { Building2, BrainCircuit, Search, Monitor, Gauge, Users };

export function AchievementCard({ title, description, icon, index = 0, wide = false, className }) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[icon] || Building2;

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -5, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] } }}
      className={cn(
        'card-base card-hover group relative overflow-hidden p-6',
        wide ? 'flex flex-col gap-5 sm:flex-row sm:items-center' : 'flex flex-col',
        'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background',
        className,
      )}
      tabIndex={0}
      role="listitem"
      aria-label={`${title}: ${description}`}
    >
      {/* Hover glow orb */}
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        className={cn(
          'icon-box relative flex h-12 w-12 flex-shrink-0 rounded-2xl',
          'transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3',
          'group-hover:bg-[image:var(--primary-gradient)] group-hover:text-white',
          'group-hover:shadow-[0_4px_16px_var(--primary-glow)]',
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <div className="relative min-w-0">
        <h3 className="text-[17px] font-bold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-foreground-secondary">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
