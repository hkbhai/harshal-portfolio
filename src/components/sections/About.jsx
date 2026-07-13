import { Container } from '@ui/Container';
import { InfoCard } from '@ui/InfoCard';
import { Timeline } from '@ui/Timeline';
import { AnimatedSection } from '@common/AnimatedSection';
import { aboutContent } from '@/data/about';

export function About() {
  return (
    <section id="about" className="section-py relative bg-background" aria-label="About me">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{aboutContent.subtitle}</p>
          <h2 className="section-title">{aboutContent.title}</h2>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Story */}
          <AnimatedSection direction="left" className="space-y-6">
            <div className="space-y-5">
              {aboutContent.story.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-foreground-secondary md:text-body-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Timeline */}
            <div className="pt-6">
              <h3 className="mb-6 text-lg font-bold text-foreground">My Journey</h3>
              <Timeline items={aboutContent.timeline} />
            </div>
          </AnimatedSection>

          {/* Right: Photo + Info Panel */}
          <AnimatedSection direction="right" className="lg:pl-8">
            {/* Workspace photo — landscape aspect, no cropping */}
            <div className="group mb-8 overflow-hidden rounded-3xl border border-border shadow-card gradient-border">
              <img
                src="/images/profile/Harshal-desk-photo.png"
                alt="Harshal Katrodiya at his workspace"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            <div className="card-glass p-6 md:p-8" aria-label="Professional information">
              <h3 className="mb-6 text-xl font-bold text-foreground md:text-heading-4">
                Professional Snapshot
              </h3>
              <div className="space-y-3">
                {aboutContent.infoPanel.map((item, index) => (
                  <InfoCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    icon={item.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export default About;
