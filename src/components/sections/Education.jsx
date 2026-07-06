import { Container } from '@ui/Container';
import { EducationCard } from '@ui/EducationCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { education } from '@/data/education';

export function Education() {
  return (
    <section
      id="education"
      className="section-py relative bg-background-surface/30"
      aria-label="Education"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{education.subtitle}</p>
          <h2 className="section-title">{education.title}</h2>
        </AnimatedSection>

        {/* Education Card */}
        <EducationCard education={education} />

        {/* Simple Milestone */}
        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background-card px-5 py-2.5 shadow-sm">
            <span className="text-lg" aria-hidden="true">
              🎓
            </span>
            <span className="text-sm font-medium text-foreground-secondary md:text-base">
              <span className="font-bold text-foreground">{education.milestone.year}</span>
              {' — '}
              {education.milestone.description}
            </span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default Education;
