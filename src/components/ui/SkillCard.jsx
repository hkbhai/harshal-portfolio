import { motion } from 'framer-motion';
import { TechIcon } from '@ui/TechIcon';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function SkillCard({ skill, category, index = 0 }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.35, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
      className={cn(
        'group relative overflow-hidden rounded-xl',
        'border border-border bg-background-card',
        'p-4 shadow-card transition-all duration-200',
        'hover:border-primary/30 hover:shadow-card-hover',
      )}
      tabIndex={0}
      aria-label={`${skill.name}, ${category}`}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex items-start gap-3.5">
        {/* Icon */}
        <div
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
            'bg-background-surface text-foreground',
            'border border-border transition-all duration-200',
            'group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary',
          )}
        >
          <TechIcon icon={skill.icon} lucideIcon={skill.lucideIcon} size={22} monochrome />
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-[15px] font-bold text-foreground">{skill.name}</h4>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
            {category}
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-foreground-muted">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
