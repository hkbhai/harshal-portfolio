import { Container } from '@ui/Container';
import { ExpertiseCard } from '@ui/ExpertiseCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { expertiseAreas } from '@/data/expertise';

export function CoreExpertise() {
  return (
    <section
      id="expertise"
      className="section-py relative bg-background-surface/30"
      aria-label="Core expertise"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">Why Hire Me</p>
          <h2 className="section-title">Core Expertise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary">
            A focused set of capabilities built over 5+ years of delivering production-ready
            software for real businesses.
          </p>
        </AnimatedSection>

        {/* Expertise Grid */}
        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          role="list"
          aria-label="Core expertise areas"
        >
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={area.id}
              title={area.title}
              description={area.description}
              icon={area.icon}
              index={index}
              role="listitem"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CoreExpertise;
