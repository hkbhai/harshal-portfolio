import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full',
        'bg-background-surface text-foreground-secondary',
        'border border-border hover:border-border-strong hover:bg-background-hover hover:text-foreground',
        'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
        ) : (
          <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
        )}
      </motion.div>
    </motion.button>
  );
}
