import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const iconMap = { Mail, Phone, MapPin, Linkedin };

export function ContactCard({ label, value, href, icon, external, index = 0 }) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[icon] || Mail;
  const isClickable = href && href !== '#';

  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        reducedMotion || !isClickable ? {} : { y: -3, transition: { duration: 0.18 } }
      }
      className={cn(
        'group flex items-center gap-4 rounded-xl border p-4 transition-all duration-200',
        isClickable
          ? 'card-glass card-hover cursor-pointer'
          : 'border-border bg-background-card/50 shadow-card',
      )}
    >
      <div className={cn('icon-box icon-box-hover flex h-11 w-11 shrink-0 rounded-xl')}>
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground-muted">
          {label}
        </p>
        <p className="truncate text-[15px] font-semibold text-foreground">{value}</p>
      </div>
      {external && (
        <ExternalLink
          className="h-4 w-4 shrink-0 text-foreground-muted opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </motion.div>
  );

  if (!isClickable) return content;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={`${label}: ${value}`}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
    >
      {content}
    </a>
  );
}
