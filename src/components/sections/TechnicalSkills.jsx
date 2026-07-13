import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Container } from '@ui/Container';
import { SkillCard } from '@ui/SkillCard';
import { AnimatedSection } from '@common/AnimatedSection';
import { skillCategories } from '@/data/skillCategories';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const reducedMotion = useReducedMotion();

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section
      id="skills"
      className="section-py relative bg-background-surface/30"
      aria-label="Technical skills"
    >
      <Container>
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-eyebrow">
            Technologies I use to build scalable, production-ready applications.
          </p>
          <h2 className="section-title">Technical Skills</h2>
        </AnimatedSection>

        {/* Desktop/Tablet: Two-column layout */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Left: Category Navigation */}
          <AnimatedSection direction="left">
            <nav
              className="flex flex-col gap-2 lg:sticky lg:top-28"
              aria-label="Skill categories"
              role="tablist"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                Categories
              </p>
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls={`skills-panel-${category.id}`}
                  className={cn(
                    'relative flex items-center justify-between rounded-xl px-4 py-3.5 text-left',
                    'border transition-all duration-300',
                    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    activeCategory === category.id
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border bg-background-card/60 text-foreground-secondary hover:border-border-strong hover:bg-background-hover hover:text-foreground'
                  )}
                >
                  <span className="font-semibold">{category.label}</span>
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-xs font-bold',
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-background-hover text-foreground-muted'
                    )}
                  >
                    {category.skills.length}
                  </span>
                </button>
              ))}
            </nav>
          </AnimatedSection>

          {/* Right: Skill Cards */}
          <AnimatedSection direction="right">
            <div
              id={`skills-panel-${activeCategory}`}
              role="tabpanel"
              aria-label={`${skillCategories.find((c) => c.id === activeCategory)?.label} skills`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? {} : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {activeSkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      category={skillCategories.find((c) => c.id === activeCategory)?.label || ''}
                      index={index}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile: Swiper — one slide per category */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            autoHeight={true}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-project-bullet',
              bulletActiveClass: 'swiper-project-bullet-active',
            }}
            className="skills-swiper"
          >
            {skillCategories.map((category) => (
              <SwiperSlide key={category.id}>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundImage: 'var(--primary-gradient)' }}
                  />
                  {category.label}
                  <span className="rounded-full bg-background-hover px-2 py-0.5 text-xs font-bold text-foreground-muted">
                    {category.skills.length}
                  </span>
                </h3>
                <div className="grid gap-3">
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      category={category.label}
                      index={index}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      {/* Swiper custom styles */}
      <style>{`
        .skills-swiper {
          width: 100%;
          padding-bottom: 48px !important;
        }
        .skills-swiper .swiper-slide {
          height: auto;
        }
        .skills-swiper .swiper-pagination {
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

export default TechnicalSkills;
