import { Container } from '@ui/Container';
import { AchievementCard } from '@ui/AchievementCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { achievements } from '@/data/achievements';

export function Achievements() {
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

        {/* Achievements Grid */}
        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          role="list"
          aria-label="Achievement highlights"
        >
          {achievements.items.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
              index={index}
              role="listitem"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Achievements;
