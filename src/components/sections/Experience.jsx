import { motion } from 'framer-motion';
import { Container } from '@ui/Container';
import { ExperienceCard } from '@ui/ExperienceCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { experience } from '@/data/experience';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Experience() {
  const reducedMotion = useReducedMotion();
  const job = experience.jobs[0];

  return (
    <section
      id="experience"
      className="section-py relative bg-background-surface/30"
      aria-label="Professional experience"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{experience.subtitle}</p>
          <h2 className="section-title">{experience.title}</h2>
        </AnimatedSection>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Horizontal timeline line */}
            <div className="absolute left-0 right-0 top-[88px] h-px bg-border" aria-hidden="true" />

            <div className="grid grid-cols-[1fr_2.5fr_1fr] items-start gap-8">
              {/* Start Marker */}
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="pt-16 text-right"
              >
                <div className="card-base inline-block p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                    Started
                  </p>
                  <p className="mt-1 text-lg font-bold text-foreground">{job.startDate}</p>
                </div>
              </motion.div>

              {/* Experience Card */}
              <ExperienceCard job={job} index={0} />

              {/* End Marker */}
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="pt-16"
              >
                <div className="inline-block rounded-2xl border border-primary/30 bg-primary/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Today
                  </p>
                  <p className="mt-1 text-lg font-bold text-foreground">{job.endDate}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tablet Vertical Timeline */}
        <div className="hidden md:block lg:hidden">
          <div className="relative flex gap-8">
            {/* Vertical line */}
            <div className="relative flex flex-col items-center">
              <div className="h-4 w-4 rounded-full border-4 border-background bg-primary" />
              <div className="mt-2 h-full w-px bg-border" />
              <div className="mt-2 h-4 w-4 rounded-full border-4 border-background bg-accent" />
            </div>

            <div className="pb-8">
              <ExperienceCard job={job} index={0} />
            </div>
          </div>
        </div>

        {/* Mobile Single Card */}
        <div className="md:hidden">
          <ExperienceCard job={job} index={0} />
        </div>
      </Container>
    </section>
  );
}

export default Experience;
