import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Container } from '@ui/Container';
import { ExpertiseCard } from '@ui/ExpertiseCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { expertiseAreas } from '@/data/expertise';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function CoreExpertise() {
  return (
    <section
      id="expertise"
      className="section-py relative bg-background-surface/30"
      aria-label="Core expertise"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">Why Hire Me</p>
          <h2 className="section-title">Core Expertise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary">
            A focused set of capabilities built over 5+ years of delivering production-ready
            software for real businesses.
          </p>
        </AnimatedSection>

        {/* Tablet & Desktop: Grid */}
        <div
          className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          role="list"
          aria-label="Core expertise areas"
        >
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={area.id}
              title={area.title}
              description={area.description}
              icon={area.icon}
              index={index}
              role="listitem"
            />
          ))}
        </div>

        {/* Mobile: Swiper */}
        <div className="sm:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoHeight={true}
            autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-project-bullet',
              bulletActiveClass: 'swiper-project-bullet-active',
            }}
            className="expertise-swiper"
          >
            {expertiseAreas.map((area, index) => (
              <SwiperSlide key={area.id}>
                <div className="h-full [&>*]:h-full">
                  <ExpertiseCard
                    title={area.title}
                    description={area.description}
                    icon={area.icon}
                    index={index}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      {/* Swiper custom styles */}
      <style>{`
        .expertise-swiper {
          width: 100%;
          padding-bottom: 48px !important;
        }
        .expertise-swiper .swiper-slide {
          height: auto;
        }
        .expertise-swiper .swiper-pagination {
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

export default CoreExpertise;
