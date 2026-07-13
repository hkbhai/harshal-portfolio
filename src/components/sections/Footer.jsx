import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Heart } from 'lucide-react';
import { Container } from '@ui/Container';
import { SocialLinks } from '@ui/SocialLinks';
import { ThemeToggle } from '@ui/ThemeToggle';
import { Button } from '@ui/Button';
import { LogoFull } from '@ui/LogoMark';
import { AnimatedSection } from '@common/AnimatedSection';
import { socialLinks } from '@/data/socialLinks';
import { contactInfo } from '@/data/contact';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const techStack = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'];

export function Footer() {
  const reducedMotion = useReducedMotion();

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open('/resume/harshal-katrodiya-resume.pdf', '_blank');
  };

  const contactDetails = contactInfo.details.filter(
    (d) => d.id === 'email' || d.id === 'phone' || d.id === 'location'
  );

  const iconMap = {
    email: Mail,
    phone: Phone,
    location: MapPin,
  };

  return (
    <footer
      className="relative border-t border-border bg-background-surface/60 pt-16 backdrop-blur-xl md:pt-20"
      aria-label="Footer"
    >
      {/* Subtle gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <AnimatedSection>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
                aria-label="Harshal Katrodiya — back to top"
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
              >
                <LogoFull />
              </a>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-secondary">
                Building scalable enterprise applications with Laravel, React and AI-assisted
                workflows.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-3" role="list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-foreground-secondary transition-colors hover:text-primary"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Contact */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                Quick Contact
              </h3>
              <ul className="space-y-3" role="list">
                {contactDetails.map((detail) => {
                  const Icon = iconMap[detail.id] || Mail;
                  const isClickable = detail.href && detail.href !== '#';

                  return (
                    <li key={detail.id}>
                      {isClickable ? (
                        <a
                          href={detail.href}
                          target={detail.external ? '_blank' : undefined}
                          rel={detail.external ? 'noopener noreferrer' : undefined}
                          className="group flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-primary"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          <span>{detail.value}</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm text-foreground-secondary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {detail.value}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 4: Social & Resume */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                Connect & Resume
              </h3>
              <SocialLinks links={socialLinks} className="mb-5" />
              <Button
                size="sm"
                variant="secondary"
                leftIcon={Download}
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border py-6 md:flex-row">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-foreground-muted">
            <span>Designed & Developed with</span>
            <Heart className="h-4 w-4 text-error" aria-hidden="true" />
            <span>using</span>
            {techStack.map((tech, index) => (
              <span key={tech}>
                <span className="font-medium text-foreground-secondary">{tech}</span>
                {index < techStack.length - 1 && <span className="ml-2">·</span>}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
