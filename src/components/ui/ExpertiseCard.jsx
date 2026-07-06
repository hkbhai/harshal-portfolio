import { motion } from 'framer-motion';
import { Boxes, Component, Webhook, BrainCircuit, Search, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const iconMap = { Boxes, Component, Webhook, BrainCircuit, Search, Rocket };

export function ExpertiseCard({ title, description, icon, index = 0 }) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[icon] || Boxes;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -5, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] } }}
      className={cn(
        'card-base card-hover group relative overflow-hidden p-6 md:p-7',
        'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background',
      )}
      tabIndex={0}
      aria-label={`${title}: ${description}`}
    >
      {/* Hover glow */}
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className={cn('icon-box icon-box-hover mb-5 flex h-12 w-12 rounded-xl')}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mb-2.5 text-[17px] font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-[14px] leading-relaxed text-foreground-secondary">{description}</p>
    </motion.article>
  );
}
