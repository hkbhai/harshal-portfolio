import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Container } from '@ui/Container';
import { Button } from '@ui/Button';
import { AnimatedSection } from '@common/AnimatedSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ResumeCTA() {
  const reducedMotion = useReducedMotion();

  const handleDownloadResume = () => {
    window.open('/resume/harshal-katrodiya-resume.pdf', '_blank');
  };

  const handleContactScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="resume-cta"
      className="section-py relative overflow-hidden bg-background-surface/30"
      aria-label="Resume call to action"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-4xl">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-[1px] shadow-card"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-background-surface/90 p-8 text-center backdrop-blur-xl md:p-12 lg:p-16">
              {/* Inner glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"
                aria-hidden="true"
              />

              <div className="relative">
                <h2 className="section-title">Interested in Working Together?</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground-secondary md:text-body-lg">
                  Download my resume to explore my professional experience, technical expertise, and
                  real-world projects in more detail.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    leftIcon={Download}
                    onClick={handleDownloadResume}
                    aria-label="Download Harshal Katrodiya's resume PDF"
                  >
                    Download Resume
                  </Button>
                </div>

                <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-foreground-muted">
                  Currently working as a Full Stack Laravel Developer at Quebix Technology, building
                  enterprise applications with Laravel, React, and modern AI-assisted workflows.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default ResumeCTA;
