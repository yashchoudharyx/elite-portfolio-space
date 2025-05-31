
import { useEffect, useRef, useState } from 'react';

interface ScrollDilutionEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

const ScrollDilutionEffect = ({ isActive, onComplete }: ScrollDilutionEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      
      setProgress(newProgress);

      if (newProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 200);
      }
    };

    animate();
  }, [isActive, onComplete]);

  if (!isActive && progress === 0) return null;

  const scale = 1 + progress * 2;
  const blur = progress * 20;
  const opacity = 1 - progress * 0.8;
  const perspective = 1000 - progress * 800;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        transform: `scale(${scale}) perspective(${perspective}px) rotateX(${progress * 45}deg)`,
        filter: `blur(${blur}px)`,
        opacity,
        transformOrigin: 'center center',
        transition: 'none',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      
      {/* Particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${progress * 100}px) scale(${1 + progress})`,
              opacity: 1 - progress,
              animationDelay: `${i * 100}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollDilutionEffect;
