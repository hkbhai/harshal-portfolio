import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Full-page ambient gradient background.
 * - willChange is NOT set permanently; it's only active during the entrance fade-in.
 * - Blobs are pointer-events:none, fixed, below all content (-z-10).
 * - Light mode blobs use higher opacity values to actually register on light backgrounds.
 */
export function GradientBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Primary radial glow — top center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[100px] dark:bg-primary/10"
      />

      {/* Secondary accent glow — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
        className="absolute -bottom-48 -right-32 h-[480px] w-[480px] rounded-full bg-accent/[0.08] blur-[90px] dark:bg-accent/5"
      />

      {/* Tertiary glow — bottom left, light mode only adds some warmth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
        className="absolute -bottom-24 -left-32 h-[320px] w-[320px] rounded-full bg-primary/[0.06] blur-[80px] dark:opacity-0"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Noise texture overlay — subtle film grain */}
      <div className="noise-overlay" aria-hidden="true" />
    </div>
  );
}
