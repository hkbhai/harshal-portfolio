import { motion } from 'framer-motion';
import {
  Code2, Component, Braces, Database, Webhook, Paintbrush, LayoutTemplate,
  Search, Cloud, Globe, GitBranch, Github, MessageSquare, MousePointer2,
  Sparkles, Plane, Binary, Zap, Triangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const iconMap = {
  Code2, Component, Braces, Database, Webhook, Paintbrush, LayoutTemplate,
  Search, Cloud, Globe, GitBranch, Github, MessageSquare, MousePointer2,
  Sparkles, Plane, Binary, Zap, Triangle,
};

export function TechPill({ name, icon = 'Code2', className, index = 0 }) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, delay: index * 0.025, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -3, scale: 1.03, transition: { duration: 0.18 } }}
      className={cn(
        'group inline-flex shrink-0 snap-start items-center gap-2.5',
        'rounded-full border border-border bg-background-card px-4 py-2',
        'shadow-card transition-all duration-200',
        'hover:border-primary/40 hover:bg-background-hover hover:shadow-glow',
        'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background',
        className,
      )}
      tabIndex={0}
      role="listitem"
      aria-label={name}
    >
      <span
        className={cn(
          'flex h-6 w-6 items-center justify-center rounded-full',
          'bg-primary/[0.08] text-primary/70',
          'transition-all duration-300 group-hover:bg-[image:var(--primary-gradient)] group-hover:text-white',
          'group-hover:shadow-[0_2px_10px_var(--primary-glow)]',
        )}
      >
        <Icon className="h-3 w-3" aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap text-[13px] font-medium text-foreground-secondary transition-colors duration-200 group-hover:text-foreground">
        {name}
      </span>
    </motion.div>
  );
}
