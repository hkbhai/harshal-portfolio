import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ScrollIndicator({ target = '#about' }) {
  const reducedMotion = useReducedMotion();

  const handleClick = () => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      // Delay past hero settle time (~1.0s) so it appears after content
      initial={reducedMotion ? {} : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-1.5 text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">Scroll</span>
      <motion.div
        animate={reducedMotion ? {} : { y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </motion.div>
    </motion.button>
  );
}
