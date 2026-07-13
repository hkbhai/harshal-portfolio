import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Container } from '@ui/Container';
import { AnimatedSection } from '@common/AnimatedSection';
import { languages } from '@/data/languages';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const MAX_LEVEL = 5;

function LanguageCard({ language, index }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -5, transition: { duration: 0.22 } }}
      className="card-glass card-hover group relative overflow-hidden p-6 text-center"
      role="listitem"
    >
      {/* Hover glow */}
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Language code badge */}
      <div
        className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-[15px] font-extrabold tracking-wide text-white shadow-[0_4px_16px_var(--primary-glow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ backgroundImage: 'var(--primary-gradient)' }}
        aria-hidden="true"
      >
        {language.code}
      </div>

      <h3 className="relative text-lg font-bold tracking-tight text-foreground">
        {language.name}
      </h3>
      <p className="relative mt-1 text-[14px] text-foreground-secondary">
        {language.proficiency}
      </p>

      {/* Proficiency dots */}
      <div
        className="relative mt-4 flex items-center justify-center gap-1.5"
        aria-label={`Proficiency ${language.level} out of ${MAX_LEVEL}`}
      >
        {Array.from({ length: MAX_LEVEL }).map((_, i) => (
          <motion.span
            key={i}
            initial={reducedMotion ? {} : { scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.07, ease: 'backOut' }}
            className="h-2.5 w-2.5 rounded-full"
            style={
              i < language.level
                ? { backgroundImage: 'var(--primary-gradient)' }
                : { backgroundColor: 'var(--border-strong)' }
            }
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Languages() {
  return (
    <section id="languages" className="section-py relative bg-background" aria-label="Languages">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">{languages.subtitle}</p>
          <h2 className="section-title">{languages.title}</h2>
        </AnimatedSection>

        {/* Tablet & Desktop: Grid */}
        <div
          className="mx-auto hidden max-w-3xl gap-5 sm:grid sm:grid-cols-3"
          role="list"
          aria-label="Languages"
        >
          {languages.items.map((language, index) => (
            <LanguageCard key={language.name} language={language} index={index} />
          ))}
        </div>

        {/* Mobile: Swiper */}
        <div className="sm:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-project-bullet',
              bulletActiveClass: 'swiper-project-bullet-active',
            }}
            className="languages-swiper"
          >
            {languages.items.map((language, index) => (
              <SwiperSlide key={language.name}>
                <div className="mx-auto max-w-xs [&>*]:h-full">
                  <LanguageCard language={language} index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      {/* Swiper custom styles */}
      <style>{`
        .languages-swiper {
          width: 100%;
          padding-bottom: 48px !important;
        }
        .languages-swiper .swiper-slide {
          height: auto;
        }
        .languages-swiper .swiper-pagination {
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

export default Languages;
