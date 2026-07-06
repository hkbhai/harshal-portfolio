import { motion } from 'framer-motion';
import { heroItem } from '@/animations/variants';
import { heroTechStack } from '@/data/skills';

export function HeroTechStack() {
  return (
    <motion.div variants={heroItem} className="flex flex-wrap items-center gap-2 pt-2">
      {heroTechStack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-background-card/60 px-3 py-1 text-[12px] font-medium text-foreground-secondary shadow-card backdrop-blur-sm"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
}
