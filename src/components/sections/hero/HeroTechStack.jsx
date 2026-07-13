import { motion } from 'framer-motion';
import { heroItem } from '@/animations/variants';
import { heroTechStack } from '@/data/skills';

export function HeroTechStack() {
  return (
    <motion.div variants={heroItem} className="flex flex-wrap items-center gap-2 pt-2">
      {heroTechStack.map((tech) => (
        <span
          key={tech}
          className="group inline-flex items-center gap-1.5 rounded-full border border-primary/15 px-3 py-1 text-[12px] font-medium text-foreground-secondary shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-[0_4px_16px_var(--primary-glow)]"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--primary) 6%, var(--bg-card))',
          }}
        >
          <span
            className="h-1.5 w-1.5 flex-shrink-0 rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            style={{ backgroundImage: 'var(--primary-gradient)' }}
            aria-hidden="true"
          />
          {tech}
        </span>
      ))}
    </motion.div>
  );
}
