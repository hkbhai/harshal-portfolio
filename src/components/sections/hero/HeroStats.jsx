import { motion } from 'framer-motion';
import { heroItem } from '@/animations/variants';
import { profile } from '@/data/profile';

export function HeroStats() {
  return (
    <motion.div
      variants={heroItem}
      className="grid grid-cols-2 gap-3 pt-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6"
    >
      {profile.statistics.map((stat) => (
        <div
          key={stat.label}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background-card/60 px-4 py-3 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_24px_var(--primary-glow)]"
        >
          {/* Gradient accent bar */}
          <span
            className="absolute left-0 top-0 h-full w-1 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            style={{ backgroundImage: 'var(--primary-gradient)' }}
            aria-hidden="true"
          />
          <span
            className="bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl"
            style={{ backgroundImage: 'var(--primary-gradient)' }}
          >
            {stat.value}
          </span>
          <span className="pl-0.5 text-[12px] font-medium text-foreground-secondary transition-colors duration-300 group-hover:text-foreground">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
