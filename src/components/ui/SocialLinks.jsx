import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const iconMap = { Linkedin, Mail, Github };

export function SocialLinks({ links, className, iconClassName }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map((link, index) => {
        const Icon = iconMap[link.icon] || Mail;
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reducedMotion ? {} : { y: -3, scale: 1.08 }}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl',
              'border border-border bg-background-card text-foreground-secondary',
              'shadow-card transition-colors duration-200',
              'hover:border-primary/30 hover:bg-primary/10 hover:text-primary',
              'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              iconClassName,
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        );
      })}
    </div>
  );
}
