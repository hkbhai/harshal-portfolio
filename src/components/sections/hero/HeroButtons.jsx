import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@ui/Button';
import { heroItem } from '@/animations/variants';

export function HeroButtons() {
  const handleDownloadResume = () => {
    window.open('/resume/harshal-katrodiya-resume.pdf', '_blank');
  };

  const handleContactScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      variants={heroItem}
      className="flex flex-wrap items-center gap-3 pt-2"
    >
      <Button
        size="lg"
        leftIcon={Download}
        onClick={handleDownloadResume}
        aria-label="Download Harshal Katrodiya's resume PDF"
      >
        Download Resume
      </Button>
      <Button
        size="lg"
        variant="secondary"
        leftIcon={Mail}
        onClick={handleContactScroll}
        aria-label="Scroll to contact section"
      >
        Contact Me
      </Button>
    </motion.div>
  );
}
