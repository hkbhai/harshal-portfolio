import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.2,
}) {
  const reducedMotion = useReducedMotion();

  const directions = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: -24 },
    right: { x: 24 },
  };

  const offset = directions[direction] || directions.up;

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
