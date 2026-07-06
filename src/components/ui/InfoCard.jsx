import { motion } from 'framer-motion';
import { Briefcase, Building2, MapPin, GraduationCap, User, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const iconMap = { Briefcase, Building2, MapPin, GraduationCap, User, Target };

export function InfoCard({ label, value, icon, index = 0 }) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { x: 3, transition: { duration: 0.18 } }}
      className={cn(
        'card-base card-hover group flex items-center gap-3.5 p-4',
      )}
    >
      <div className={cn('icon-box icon-box-hover flex h-10 w-10 shrink-0 rounded-xl')}>
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground-muted">
          {label}
        </p>
        <p className="truncate text-[15px] font-semibold text-foreground">{value}</p>
      </div>
    </motion.div>
  );
}
