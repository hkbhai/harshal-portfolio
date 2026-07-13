import { motion } from 'framer-motion';
import { Container } from '@ui/Container';
import { AchievementCard } from '@ui/AchievementCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { achievements } from '@/data/achievements';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Achievements() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="achievements"
      className="section-py relative bg-background"
      aria-label="Achievements and professional highlights"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{achievements.subtitle}</p>
          <h2 className="section-title">{achievements.title}</h2>
        </AnimatedSection>

        {/* Grid + Timeline: alternating cards around a center line */}
        <div className="relative mx-auto max-w-5xl" role="list" aria-label="Achievement highlights">
          {/* Center connector line (desktop) */}
          <div
            className="absolute left-1/2 top-2 hidden h-[calc(100%-16px)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-border to-transparent md:block"
            aria-hidden="true"
          />
          {/* Left connector line (mobile) */}
          <div
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:hidden"
            aria-hidden="true"
          />

          {achievements.items.map((achievement, index) => {
            const left = index % 2 === 0;
            return (
              <div key={achievement.id} className="relative pb-6 last:pb-0 md:grid md:grid-cols-2 md:gap-12 md:pb-10">
                {/* Timeline node */}
                <motion.span
                  initial={reducedMotion ? {} : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.35, delay: index * 0.08, ease: 'backOut' }}
                  className="absolute left-0 top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-background-card shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_20%,transparent)] md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundImage: 'var(--primary-gradient)' }}
                  />
                </motion.span>

                {/* Card — alternating columns on desktop */}
                <div className={left ? 'pl-7 md:col-start-1 md:pl-0 md:pr-2' : 'pl-7 md:col-start-2 md:pl-2'}>
                  <AchievementCard
                    title={achievement.title}
                    description={achievement.description}
                    icon={achievement.icon}
                    index={index}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Achievements;
