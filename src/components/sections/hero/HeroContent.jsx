import { motion } from 'framer-motion';
import { heroAnimation, heroItem } from '@/animations/variants';
import { Badge } from '@ui/Badge';
import { SocialLinks } from '@ui/SocialLinks';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/socialLinks';
import { HeroButtons } from './HeroButtons';
import { HeroTechStack } from './HeroTechStack';
import { HeroStats } from './HeroStats';

/**
 * Wraps a keyword in the H1 with a premium gradient span.
 * We highlight "Scalable" — a recruiter-resonant word.
 */
function GradientWord({ children }) {
  return (
    <span
      className="bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent"
      aria-label={children}
    >
      {children}
    </span>
  );
}

function renderHeadline(headline) {
  // Highlight "Scalable" with the gradient
  const target = 'Scalable';
  const idx = headline.indexOf(target);
  if (idx === -1) return headline;
  return (
    <>
      {headline.slice(0, idx)}
      <GradientWord>{target}</GradientWord>
      {headline.slice(idx + target.length)}
    </>
  );
}

export function HeroContent() {
  return (
    <motion.div
      variants={heroAnimation}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start gap-5 lg:gap-5"
    >
      {/* Availability Badge */}
      <motion.div variants={heroItem}>
        <Badge variant="primary" size="md">
          {profile.availability}
        </Badge>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={heroItem}
        id="hero-headline"
        className="text-hero-mobile font-bold tracking-tight text-foreground md:text-hero-tablet lg:text-hero text-balance"
      >
        {renderHeadline(profile.headline)}
      </motion.h1>

      {/* Sub Headline */}
      <motion.p
        variants={heroItem}
        className="max-w-[520px] text-[15px] leading-relaxed text-foreground-secondary"
      >
        {profile.subHeadline}
      </motion.p>

      {/* Introduction */}
      <motion.p
        variants={heroItem}
        className="max-w-[480px] text-sm leading-relaxed text-foreground-muted"
      >
        {profile.introduction}
      </motion.p>

      {/* CTA Buttons */}
      <HeroButtons />

      {/* Social Links */}
      <motion.div variants={heroItem}>
        <SocialLinks links={socialLinks} />
      </motion.div>

      {/* Tech Stack Pills */}
      <HeroTechStack />

      {/* Statistics */}
      <HeroStats />
    </motion.div>
  );
}
