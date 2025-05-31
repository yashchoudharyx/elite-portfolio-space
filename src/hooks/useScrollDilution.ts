
import { useState, useCallback } from 'react';

export const useScrollDilution = () => {
  const [isEffectActive, setIsEffectActive] = useState(false);

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

  return {
    isEffectActive,
    triggerEffect,
    completeEffect,
  };
};
