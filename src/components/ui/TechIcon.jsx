import { Webhook, Cloud, HardDrive, MessageSquare, MousePointer2, Code2, Bot, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const lucideIconMap = {
  Webhook,
  Cloud,
  HardDrive,
  MessageSquare,
  MousePointer2,
  Code2,
  Bot,
  Globe,
};

export function TechIcon({ icon, lucideIcon, className, size = 24, monochrome = false }) {
  // Simple Icon
  if (icon && icon.path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn('shrink-0', className)}
        aria-label={icon.title}
      >
        <path d={icon.path} fill={monochrome ? 'currentColor' : `#${icon.hex}`} />
      </svg>
    );
  }

  // Lucide fallback
  const LucideIcon = lucideIconMap[lucideIcon] || Webhook;
  return <LucideIcon className={cn('shrink-0', className)} size={size} aria-hidden="true" />;
}
