import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ProjectImage({ src, alt, initials, gradient, className }) {
  const reducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const hasImage = src && !imageError;

  return (
    <motion.div
      whileHover={reducedMotion ? {} : { scale: 1.015 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-border bg-background-card shadow-card',
        className
      )}
    >
      {/* Browser mockup header */}
      <div className="flex items-center gap-2 border-b border-border bg-background-surface/80 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
        <div className="h-3 w-3 rounded-full bg-amber-400" aria-hidden="true" />
        <div className="h-3 w-3 rounded-full bg-green-400" aria-hidden="true" />
        <div className="ml-4 h-2 flex-1 rounded-full bg-border" aria-hidden="true" />
      </div>

      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {hasImage ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={cn(
              'h-full w-full object-cover transition-opacity duration-500',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
          />
        ) : null}

        {/* Gradient placeholder fallback */}
        {(!hasImage || !imageLoaded) && (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center bg-gradient-to-br',
              gradient
            )}
          >
            <div className="text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/10 backdrop-blur-sm">
                <span className="text-4xl font-bold text-white/90">{initials}</span>
              </div>
              <p className="mt-4 text-sm font-medium text-white/70">{alt}</p>
            </div>
          </div>
        )}

        {/* Subtle overlay on hover */}
        <div
          className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
