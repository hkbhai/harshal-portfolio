import { Suspense, lazy } from 'react';
import { Navbar } from '@layout/Navbar';
import { GradientBackground } from '@common/GradientBackground';
import { BackToTop } from '@common/BackToTop';
import { SkipToContent } from '@common/SkipToContent';
import { SEO } from '@common/SEO';
import { ErrorBoundary } from '@common/ErrorBoundary';
import { Hero } from '@sections/Hero';

// Lazy load below-the-fold sections for better initial load performance
const TrustedTechnologies = lazy(() => import('@sections/TrustedTechnologies'));
const CoreExpertise = lazy(() => import('@sections/CoreExpertise'));
const About = lazy(() => import('@sections/About'));
const Experience = lazy(() => import('@sections/Experience'));
const Projects = lazy(() => import('@sections/Projects'));
const TechnicalSkills = lazy(() => import('@sections/TechnicalSkills'));
const Languages = lazy(() => import('@sections/Languages'));
const Achievements = lazy(() => import('@sections/Achievements'));
const ResumeCTA = lazy(() => import('@sections/ResumeCTA'));
const Contact = lazy(() => import('@sections/Contact'));
const Education = lazy(() => import('@sections/Education'));
const Footer = lazy(() => import('@sections/Footer'));

function SectionLoader() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary"
        aria-hidden="true"
      />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <SEO />
      <SkipToContent />
      <div className="relative min-h-screen bg-background text-foreground">
        <GradientBackground />
        <Navbar />
        <main id="main-content">
          <Hero />
          <Suspense fallback={<SectionLoader />}>
            <TrustedTechnologies />
            <CoreExpertise />
            <About />
            <Experience />
            <Projects />
            <TechnicalSkills />
            <Languages />
            <Achievements />
            <ResumeCTA />
            <Contact />
            <Education />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <BackToTop />
      </div>
    </ErrorBoundary>
  );
}

export default App;
