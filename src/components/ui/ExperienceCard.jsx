import { motion } from 'framer-motion';
import { Check, MapPin, Calendar, Building2 } from 'lucide-react';
import { Badge } from '@ui/Badge';
import { TechStack } from '@ui/TechStack';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ExperienceCard({ job, index = 0 }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -5, transition: { duration: 0.22 } }}
      className={cn(
        'card-glass card-hover group relative overflow-hidden p-6 md:p-8 lg:p-10',
        'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background',
      )}
      tabIndex={0}
      aria-label={`${job.role} at ${job.company}`}
    >
      <div className="card-gradient-accent" aria-hidden="true" />

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div className={cn('icon-box flex h-12 w-12 shrink-0 rounded-xl md:h-14 md:w-14')}>
            <Building2 className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              {job.company}
            </h3>
            <p className="mt-0.5 text-[15px] font-semibold text-primary">{job.role}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-[13px] text-foreground-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {job.duration}
              </span>
            </div>
          </div>
        </div>
        {job.isCurrent && (
          <Badge variant="primary" size="md" className="w-fit">
            Current
          </Badge>
        )}
      </div>

      {/* Summary */}
      <p className="mt-6 text-[15px] leading-relaxed text-foreground-secondary">{job.summary}</p>

      {/* Responsibilities */}
      <div className="mt-7">
        <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">
          Key Responsibilities
        </h4>
        <ul className="grid gap-2.5 sm:grid-cols-2" role="list">
          {job.responsibilities.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-2.5"
            >
              <span className={cn('icon-box mt-0.5 flex h-5 w-5 shrink-0 rounded-full')}>
                <Check className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
              <span className="text-[13px] leading-relaxed text-foreground-secondary md:text-[14px]">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-7">
        <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">
          Tech Stack
        </h4>
        <TechStack items={job.techStack} />
      </div>
    </motion.article>
  );
}
