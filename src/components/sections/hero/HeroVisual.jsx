import { useReducer, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { heroVisual, heroImage, floatingCard } from '@/animations/variants';
import { TechLogo } from '@ui/TechLogo';
import { floatingTechCards } from '@/data/skills';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

// ─── Image state machine ─────────────────────────────────────────────────────
// status: 'loading' | 'loaded' | 'error'
function imageReducer(state, action) {
  switch (action) {
    case 'LOAD':
      return 'loaded';
    case 'ERROR':
      return 'error';
    default:
      return state;
  }
}

// ─── Floating card position map ───────────────────────────────────────────────
// Defined outside component — static data, never re-created on render
const CARD_POSITIONS = {
  'left-top': '-left-4 top-[8%] md:-left-12 lg:-left-16',
  'right-top': '-right-4 top-[8%] md:-right-12 lg:-right-16',
  'left-middle': '-left-4 top-[38%] md:-left-12 lg:-left-16',
  'right-middle': '-right-4 top-[38%] md:-right-12 lg:-right-16',
  'left-bottom': '-left-4 bottom-[8%] md:-left-12 lg:-left-16',
  'right-bottom': '-right-4 bottom-[8%] md:-right-12 lg:-right-16',
};

const CARD_INDEX = {
  'left-top': 0,
  'right-top': 1,
  'left-middle': 2,
  'right-middle': 3,
  'left-bottom': 4,
  'right-bottom': 5,
};

// ─── Color map ────────────────────────────────────────────────────────────────
const LOGO_COLOR_CLASS = {
  primary: 'text-primary',
  accent: 'text-accent',
};

const ICON_BG_CLASS = {
  primary: 'bg-primary/10',
  accent: 'bg-accent/10',
};

// ─── Initials fallback ────────────────────────────────────────────────────────
function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

// ─── Photo placeholder ────────────────────────────────────────────────────────
function PhotoPlaceholder() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/15 via-background-card to-accent/8"
      aria-hidden="true"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-border bg-background-surface md:h-24 md:w-24">
        <span className="text-2xl font-bold text-foreground-secondary md:text-3xl">
          {getInitials(profile.name)}
        </span>
      </div>
      <p className="mt-3 px-6 text-center text-xs text-foreground-muted">
        Add photo to{' '}
        <code className="rounded bg-background-hover px-1 font-mono text-[10px]">
          public/images/profile/
        </code>
      </p>
    </div>
  );
}

// ─── Floating tech card ───────────────────────────────────────────────────────
function FloatingCard({ card, reducedMotion }) {
  const index = CARD_INDEX[card.position];
  const posClass = CARD_POSITIONS[card.position];

  return (
    <motion.div
      key={card.name}
      custom={index}
      variants={floatingCard}
      initial="hidden"
      animate={reducedMotion ? 'visible' : ['visible', 'float']}
      whileHover={reducedMotion ? {} : { scale: 1.06, y: -5 }}
      transition={{ type: 'tween' }}
      aria-hidden="true"
      className={cn(
        'absolute z-20 flex items-center gap-2.5 rounded-2xl',
        'border border-border/80 bg-background-card px-3 py-2.5',
        'shadow-card backdrop-blur-xl',
        'md:px-4 md:py-3',
        posClass,
      )}
    >
      <div
        className={cn(
          'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl md:h-9 md:w-9',
          ICON_BG_CLASS[card.color],
          LOGO_COLOR_CLASS[card.color],
        )}
      >
        <TechLogo name={card.logo} className="h-4 w-4 md:h-[18px] md:w-[18px]" />
      </div>
      <span className="whitespace-nowrap text-xs font-semibold text-foreground md:text-sm">
        {card.name}
      </span>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const [imageStatus, dispatch] = useReducer(imageReducer, 'loading');
  const frameRef = useRef(null);

  const isLoaded = imageStatus === 'loaded';
  const hasError = imageStatus === 'error';
  const showPhoto = !hasError;
  const showPlaceholder = !isLoaded || hasError;
  const enableTilt = !reducedMotion;

  // ── Mouse-driven 3D tilt ────────────────────────────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  });

  const handleMouseMove = (event) => {
    if (!enableTilt || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={heroVisual}
      initial="hidden"
      animate="visible"
      className="relative flex items-center justify-center lg:justify-end"
      style={{ perspective: 1000 }}
    >
      {/* Background glow — positioned relative to photo container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          reducedMotion
            ? { opacity: 0.45 }
            : { opacity: [0.35, 0.6, 0.35], scale: [1, 1.04, 1] }
        }
        transition={
          reducedMotion
            ? { duration: 0.8 }
            : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px]"
        aria-hidden="true"
      />

      {/* Photo container */}
      <motion.div
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group"
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer decorative rings with hover animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -inset-3 -z-10 rounded-[2.25rem] border border-border/40 transition-all duration-500 group-hover:border-primary/40 group-hover:-inset-4 md:-inset-4 md:rounded-[2.75rem]"
          aria-hidden="true"
        />
        {/* Second, slightly larger ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -inset-6 -z-20 rounded-[3rem] border border-border/20 transition-all duration-700 group-hover:border-primary/20 group-hover:-inset-8 md:-inset-8 md:rounded-[3.5rem]"
          aria-hidden="true"
        />

        {/* Photo frame with premium hover effect */}
        <motion.div
          whileHover={reducedMotion ? {} : { scale: 1.02, y: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className={cn(
            'group relative z-10 overflow-hidden rounded-3xl',
            'border border-border shadow-card',
            'bg-white dark:bg-[#0d0d14]',
            'h-[360px] w-[300px] md:h-[440px] md:w-[360px] lg:h-[500px] lg:w-[400px]',
            'hover:shadow-glow transition-shadow duration-500',
            'hover:border-primary/30',
            'gradient-border',
          )}
        >
          {/* Placeholder — visible while loading or on error */}
          <div
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              showPlaceholder ? 'opacity-100' : 'opacity-0 pointer-events-none',
            )}
            aria-hidden={!showPlaceholder}
          >
            <PhotoPlaceholder />
          </div>

          {/* Photo image */}
          {showPhoto && (
            <motion.img
              src={profile.image}
              alt={`${profile.name} — ${profile.title}`}
              width={400}
              height={500}
              loading="eager"
              decoding="async"
              // eslint-disable-next-line react/no-unknown-property
              fetchPriority="high"
              onLoad={() => dispatch('LOAD')}
              onError={() => dispatch('ERROR')}
              variants={heroImage}
              initial="hidden"
              animate={
                reducedMotion
                  ? isLoaded
                    ? 'visible'
                    : 'hidden'
                  : isLoaded
                    ? ['visible', 'float']
                    : 'hidden'
              }
              transition={{
                type: 'spring',
                stiffness: 140,
                damping: 16,
              }}
              className="absolute inset-0 h-full w-full object-cover object-top will-change-transform"
            />
          )}

          {/* Animated corner accents on hover */}
          <div
            className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-primary opacity-0 transition-all duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-primary opacity-0 transition-all duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
        </motion.div>

        {/* Floating tech cards */}
        {floatingTechCards.map((card) => (
          <FloatingCard key={card.name} card={card} reducedMotion={reducedMotion} />
        ))}
      </motion.div>
    </motion.div>
  );
}
