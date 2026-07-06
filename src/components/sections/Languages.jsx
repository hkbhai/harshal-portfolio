import { Container } from '@ui/Container';
import { AnimatedSection } from '@common/AnimatedSection';
import { languages } from '@/data/languages';

export function Languages() {
  return (
    <section id="languages" className="section-py relative bg-background" aria-label="Languages">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{languages.subtitle}</p>
          <h2 className="section-title">{languages.title}</h2>
        </AnimatedSection>

        {/* Languages Grid */}
        <AnimatedSection>
          <div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Languages"
          >
            {languages.items.map((language) => (
              <div
                key={language.name}
                className="card-glass card-hover p-6 text-center"
                role="listitem"
              >
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {language.name}
                </h3>
                <p className="mt-1 text-[14px] text-foreground-secondary">
                  {language.proficiency}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default Languages;
