import { TechPill } from '@ui/TechPill';
import { trustedTechnologies } from '@/data/skills';

export function TrustedTechnologies() {
  // Duplicate technologies for seamless marquee loop
  const marqueeItems = [...trustedTechnologies, ...trustedTechnologies];

  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-background-surface/30 py-10 md:py-12"
      aria-label="Trusted technologies"
    >
      {/* Desktop: Slow Infinite Marquee — full width with edge fades */}
      <div className="relative hidden lg:block" aria-hidden="true">
        <div className="marquee-track gap-4 px-4">
          {marqueeItems.map((tech, index) => (
            <TechPill
              key={`${tech.name}-${index}`}
              name={tech.name}
              icon={tech.icon}
              className="bg-background-surface"
            />
          ))}
        </div>
        {/* Edge fade overlays */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ backgroundImage: 'linear-gradient(to right, var(--bg-default), transparent)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ backgroundImage: 'linear-gradient(to left, var(--bg-default), transparent)' }}
        />
      </div>

      {/* Tablet: Responsive Grid */}
      <div
        className="hidden grid-cols-4 gap-3 px-6 md:grid lg:hidden"
        role="list"
        aria-label="Technology grid"
      >
        {trustedTechnologies.map((tech, index) => (
          <TechPill key={tech.name} name={tech.name} icon={tech.icon} index={index} />
        ))}
      </div>

      {/* Mobile: Horizontal Scroll with Snap */}
      <div
        className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide md:hidden"
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
    </section>
  );
}

export default TrustedTechnologies;
