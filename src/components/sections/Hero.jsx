import { Container } from '@ui/Container';
import { ScrollIndicator } from '@common/ScrollIndicator';
import { HeroContent } from './hero/HeroContent';
import { HeroVisual } from './hero/HeroVisual';

export function Hero() {
  return (
    <section
      id="hero"
      className="section-py relative flex min-h-screen items-center overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <Container>
        <div className="grid min-h-[calc(100vh-12rem)] items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-0">
          {/* Left — text content */}
          <HeroContent />

          {/* Right — photo + visuals */}
          <HeroVisual />
        </div>

        {/* Scroll indicator — shown on lg+ */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex">
          <ScrollIndicator target="#about" />
        </div>
      </Container>
    </section>
  );
}
