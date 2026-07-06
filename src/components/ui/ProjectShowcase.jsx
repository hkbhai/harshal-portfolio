import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ProjectImage } from '@ui/ProjectImage';
import { TechStack } from '@ui/TechStack';
import { Badge } from '@ui/Badge';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ProjectShowcase({ project, reverse = false, index = 0 }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'grid items-start gap-8 lg:grid-cols-2 lg:gap-12',
        reverse ? 'lg:grid-flow-dense' : ''
      )}
    >
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <ProjectImage
          src={project.image}
          alt={project.name}
          initials={project.initials}
          gradient={project.gradient}
        />
      </div>

      <div className={cn('flex flex-col gap-4', reverse ? 'lg:col-start-1 lg:row-start-1' : '')}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" size="sm">{project.businessDomain}</Badge>
          <Badge variant="success" size="sm">{project.status}</Badge>
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 text-[14px] font-semibold text-primary">{project.role}</p>
        </div>

        <p className="text-[15px] leading-relaxed text-foreground-secondary">{project.overview}</p>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">
            Key Responsibilities
          </h4>
          <ul className="space-y-2" role="list">
            {project.responsibilities.slice(0, 5).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-2.5 w-2.5" aria-hidden="true" />
                </span>
                <span className="text-[14px] leading-relaxed text-foreground-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">
            Technologies
          </h4>
          <TechStack items={project.techStack} />
        </div>
      </div>
    </motion.div>
  );
}
