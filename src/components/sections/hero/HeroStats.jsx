import { motion } from 'framer-motion';
import { heroItem } from '@/animations/variants';
import { profile } from '@/data/profile';

export function HeroStats() {
  return (
    <motion.div
      variants={heroItem}
      className="grid grid-cols-2 gap-3 pt-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6"
    >
      {profile.statistics.map((stat, index) => (
        <div
          key={stat.label}
          className="flex flex-col rounded-xl border border-border bg-background-card/60 px-4 py-3 shadow-card backdrop-blur-sm"
        >
          <span className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {stat.value}
          </span>
          <span className="text-[12px] font-medium text-foreground-secondary">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
