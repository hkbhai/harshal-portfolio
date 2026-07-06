import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { Badge } from '@ui/Badge';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function EducationCard({ education }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -5, transition: { duration: 0.22 } }}
      className={cn(
        'card-glass card-hover group relative mx-auto max-w-2xl overflow-hidden p-8 text-center md:p-12',
        'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background',
      )}
      tabIndex={0}
      aria-label={`${education.degree} from ${education.college}`}
    >
      <div className="card-gradient-accent" aria-hidden="true" />
      <div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className={cn('icon-box icon-box-hover mx-auto mb-5 flex h-16 w-16 rounded-2xl')}>
        <GraduationCap className="h-8 w-8" aria-hidden="true" />
      </div>

      <Badge variant="primary" size="md" className="mb-4">
        Graduated {education.year}
      </Badge>

      <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
        {education.degree}
      </h3>
      <p className="mt-2.5 text-[15px] font-semibold text-foreground-secondary">
        {education.college}
      </p>
      <p className="mt-1.5 inline-flex items-center justify-center gap-1.5 text-[14px] text-foreground-muted">
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        {education.location}
      </p>
    </motion.article>
  );
}
