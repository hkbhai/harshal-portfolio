import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '@ui/Container';
import { ThemeToggle } from '@ui/ThemeToggle';
import { LogoFull } from '@ui/LogoMark';
import { navigation } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { cn } from '@/lib/utils';

const sectionIds = [
  '#hero',
  '#about',
  '#skills',
  '#experience',
  '#projects',
  '#achievements',
  '#languages',
  '#education',
  '#contact',
];

const scrollToSection = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const activeSection = useActiveSection(sectionIds);

  useLockBodyScroll(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key closes mobile menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    menu.addEventListener('keydown', trap);
    return () => menu.removeEventListener('keydown', trap);
  }, [mobileMenuOpen]);

  // Return focus to hamburger when menu closes
  useEffect(() => {
    if (!mobileMenuOpen) mobileMenuButtonRef.current?.focus();
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? [
                // Scrolled — strong glass effect, visible border + shadow in both themes
                'py-2',
                'border-b border-border/70',
                'bg-background-surface/80 backdrop-blur-2xl',
                'shadow-navbar',
              ]
            : [
                // At top — subtle glass, clearly visible on light AND dark
                'py-3',
                'border-b border-border/50',
                'bg-background/70 backdrop-blur-xl',
                'shadow-[0_1px_0_rgba(15,23,42,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]',
              ],
        )}
      >
        <Container>
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              aria-label="Harshal Katrodiya — back to top"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
            >
              <LogoFull />
            </a>

            {/* Desktop nav pills */}
            <div className="hidden items-center gap-0.5 rounded-full border border-border/60 bg-background-card/60 p-1 backdrop-blur-sm lg:flex shadow-card">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative rounded-full px-3 py-1 text-[13px] font-medium transition-colors duration-150',
                      isActive ? 'text-foreground' : 'text-foreground-secondary hover:text-foreground',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-primary/12 ring-1 ring-primary/25"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                ref={mobileMenuButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full',
                  'border border-border bg-background-card text-foreground-secondary',
                  'transition-colors hover:border-border-strong hover:bg-background-hover hover:text-foreground',
                  'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  'lg:hidden',
                )}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'fixed bottom-0 right-0 top-0 z-50 w-full max-w-sm',
                'border-l border-border bg-background-surface p-6 shadow-2xl',
                'focus:outline-none',
              )}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between">
                <LogoFull />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full',
                    'border border-border text-foreground-secondary',
                    'transition-colors hover:border-border-strong hover:text-foreground',
                    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  )}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="mt-8 flex flex-col gap-1.5" aria-label="Mobile navigation">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.button
                      key={item.label}
                      type="button"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 + 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
                      onClick={() => handleNavClick(item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors',
                        isActive
                          ? 'bg-primary/10 text-foreground ring-1 ring-primary/20'
                          : 'text-foreground-secondary hover:bg-background-hover hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
