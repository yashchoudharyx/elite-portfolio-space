
import { useState, useEffect, useCallback } from 'react';

export const useScrollDilution = () => {
  const [isEffectActive, setIsEffectActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const triggerEffect = useCallback(() => {
    setIsEffectActive(true);
  }, []);

  const completeEffect = useCallback(() => {
    setIsEffectActive(false);
    // Smooth scroll to about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
      
      setScrollProgress(progress);

      // Trigger effect when scrolling down significantly
      if (progress > 0.3 && !isEffectActive) {
        triggerEffect();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isEffectActive, triggerEffect]);

  return {
    isEffectActive,
    scrollProgress,
    triggerEffect,
    completeEffect,
  };
};
