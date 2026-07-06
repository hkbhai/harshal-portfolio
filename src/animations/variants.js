// ─── Shared easing curves ────────────────────────────────────────────────────
export const SPRING = [0.16, 1, 0.3, 1]; // expo-out: fast + natural settle
export const SMOOTH = [0.25, 0.1, 0.25, 1]; // css ease equivalent
export const EASE_OUT = [0.0, 0.0, 0.2, 1]; // material decelerate

// ─── Generic fade variants ───────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: SPRING },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: SPRING },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: SPRING },
  },
};

export const scale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: SPRING },
  },
};

// ─── Stagger containers ──────────────────────────────────────────────────────
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: SPRING },
  },
};

// ─── Hero entrance ───────────────────────────────────────────────────────────
// Total settle time: delayChildren(0.1) + staggerChildren(0.09) * 7 items = ~0.73s
// Last item visible at ~0.73 + 0.55 duration = ~1.0s ✓ within 0.8–1.1s target
export const heroAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: SPRING },
  },
};

// ─── Hero right column ───────────────────────────────────────────────────────
export const heroVisual = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: 0.25, ease: SPRING },
  },
};

// ─── Hero profile image ──────────────────────────────────────────────────────
export const heroImage = {
  hidden: { opacity: 0, scale: 1.08, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: SPRING },
  },
  float: {
    y: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ─── Floating tech cards (pure Framer Motion — no CSS animation) ─────────────
// Each card gets its own y-range via custom prop passed into variants
export const floatingCard = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.55 + i * 0.12,
      ease: SPRING,
    },
  }),
  float: (i) => ({
    y: [0, -(8 + i * 2), 0],
    transition: {
      duration: 5 + i * 0.8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.6,
    },
  }),
};

// ─── Glow pulse ──────────────────────────────────────────────────────────────
export const glowPulse = {
  initial: { opacity: 0.35, scale: 1 },
  animate: {
    opacity: [0.35, 0.6, 0.35],
    scale: [1, 1.04, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ─── Card interaction ─────────────────────────────────────────────────────────
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: 'var(--shadow-card)',
    borderColor: 'var(--border-default)',
  },
  hover: {
    y: -4,
    boxShadow: 'var(--shadow-card-hover)',
    borderColor: 'var(--border-strong)',
    transition: { duration: 0.22, ease: SMOOTH },
  },
};

// ─── Button interaction ───────────────────────────────────────────────────────
export const buttonHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.18, ease: SMOOTH },
  },
  tap: { y: 0, scale: 0.97 },
};

// ─── Legacy float (kept for backward compat with other sections) ──────────────
export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
