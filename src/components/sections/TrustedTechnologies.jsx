import { Container } from '@ui/Container';
import { TechPill } from '@ui/TechPill';
import { AnimatedSection } from '@common/AnimatedSection';
import { trustedTechnologies } from '@/data/skills';

export function TrustedTechnologies() {
  // Duplicate technologies for seamless marquee loop
  const marqueeItems = [...trustedTechnologies, ...trustedTechnologies];

  return (
    <section
      id="technologies"
      className="relative border-y border-border bg-background-surface/30 py-14 md:py-16 lg:py-20"
      aria-label="Trusted technologies"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">
            Trusted Technologies
          </p>
        </AnimatedSection>

        {/* Desktop: Slow Infinite Marquee */}
        <div className="hidden overflow-hidden lg:block" aria-hidden="true">
          <div className="marquee-track gap-4">
            {marqueeItems.map((tech, index) => (
              <TechPill
                key={`${tech.name}-${index}`}
                name={tech.name}
                icon={tech.icon}
                className="bg-background-surface"
              />
            ))}
          </div>
        </div>

        {/* Tablet: Responsive Grid */}
        <div
          className="hidden grid-cols-4 gap-3 md:grid lg:hidden"
          role="list"
          aria-label="Technology grid"
        >
          {trustedTechnologies.map((tech, index) => (
            <TechPill key={tech.name} name={tech.name} icon={tech.icon} index={index} />
          ))}
        </div>

        {/* Mobile: Horizontal Scroll with Snap */}
        <div
          className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide md:hidden"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
          role="list"
          aria-label="Technology scroll"
        >
          {trustedTechnologies.map((tech, index) => (
            <TechPill
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              index={index}
              className="snap-center"
            />
          ))}
        </div>

        {/* Accessibility-only list for screen readers on desktop marquee */}
        <ul className="sr-only" aria-label="All trusted technologies">
          {trustedTechnologies.map((tech) => (
            <li key={tech.name}>{tech.name}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default TrustedTechnologies;
