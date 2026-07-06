import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Check, Layers, Zap } from 'lucide-react';
import { Container } from '@ui/Container';
import { Badge } from '@ui/Badge';
import { TechStack } from '@ui/TechStack';
import { ProjectImage } from '@ui/ProjectImage';
import { AnimatedSection } from '@common/AnimatedSection';
import { projects } from '@/data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// ─── Single project slide card ────────────────────────────────────────────────
function ProjectCard({ project }) {
  const subheadClasses =
    'mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-muted';
  const bulletClasses = 'flex items-start gap-2.5';
  const checkClasses =
    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary';
  const dotClasses = 'mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent';
  const textClasses = 'text-[13px] leading-relaxed text-foreground-secondary';

  return (
    <div className="grid h-full items-start gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Left — Image */}
      <div className="w-full">
        <ProjectImage
          src={project.image}
          alt={project.name}
          initials={project.initials}
          gradient={project.gradient}
        />
      </div>

      {/* Right — Content */}
      <div className="flex flex-col gap-4">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" size="sm">{project.businessDomain}</Badge>
          <Badge variant="success" size="sm">{project.status}</Badge>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 text-[14px] font-semibold text-primary">{project.role}</p>
        </div>

        {/* Overview */}
        <p className="text-[14px] leading-relaxed text-foreground-secondary">
          {project.overview}
        </p>

        {/* Highlights */}
        <div>
          <p className={subheadClasses}>
            <Zap className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Key Highlights
          </p>
          <ul className="space-y-1.5" role="list">
            {project.highlights.map((item, idx) => (
              <li key={idx} className={bulletClasses}>
                <span className={checkClasses}>
                  <Check className="h-2.5 w-2.5" aria-hidden="true" />
                </span>
                <span className={textClasses}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div>
          <p className={subheadClasses}>
            <Layers className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Responsibilities
          </p>
          <ul className="space-y-1.5" role="list">
            {project.responsibilities.slice(0, 4).map((item, idx) => (
              <li key={idx} className={bulletClasses}>
                <span className={dotClasses} aria-hidden="true" />
                <span className={textClasses}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">
            Technologies
          </p>
          <TechStack items={project.techStack} />
        </div>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function Projects() {
  return (
    <section
      id="projects"
      className="section-py relative bg-background"
      aria-label="Featured projects"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{projects.subtitle}</p>
          <h2 className="section-title">{projects.title}</h2>
        </AnimatedSection>

        {/* Swiper wrapper */}
        <AnimatedSection>
          <div className="relative">
            {/* Swiper */}
            <div className="card-glass overflow-hidden p-6 md:p-8 lg:p-10">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-project-bullet',
                  bulletActiveClass: 'swiper-project-bullet-active',
                }}
                className="projects-swiper"
              >
                {projects.items.map((project) => (
                  <SwiperSlide key={project.id}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </AnimatedSection>
      </Container>

      {/* Swiper custom styles */}
      <style>{`
        .projects-swiper {
          width: 100%;
          padding-bottom: 48px !important;
        }
        .projects-swiper .swiper-slide {
          height: auto;
        }
        .projects-swiper .swiper-pagination {
          bottom: 0;
        }
        .swiper-project-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--border-strong);
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-project-bullet-active {
          background: var(--primary);
          width: 24px;
        }
      `}</style>
    </section>
  );
}

export default Projects;
