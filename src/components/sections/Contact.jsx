import { Container } from '@ui/Container';
import { ContactCard } from '@ui/ContactCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { contactInfo } from '@/data/contact';

export function Contact() {
  return (
    <section id="contact" className="section-py relative bg-background" aria-label="Contact">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{contactInfo.subtitle}</p>
          <h2 className="section-title">{contactInfo.title}</h2>
        </AnimatedSection>

        {/* Contact Details — centered grid */}
        <div className="mx-auto max-w-3xl">
          <AnimatedSection className="grid gap-4 sm:grid-cols-2">
            {contactInfo.details.map((detail, index) => (
              <ContactCard
                key={detail.id}
                label={detail.label}
                value={detail.value}
                href={detail.href}
                icon={detail.icon}
                external={detail.external}
                index={index}
              />
            ))}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
