
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

  // Create natural dissolving effect
  const opacity = 1 - progress;
  const scale = 1 - progress * 0.3;
  const blur = progress * 15;
  const rotateY = progress * 180;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{
        opacity,
        transform: `perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`,
        filter: `blur(${blur}px)`,
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Natural dissolving layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        style={{
          opacity: opacity * 0.9,
          transform: `translateZ(${progress * 100}px)`,
        }}
      />
      
      {/* Organic dissolve pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => {
          const size = 80 + (i * 20);
          const x = (i % 4) * 25 + Math.sin(i) * 10;
          const y = Math.floor(i / 4) * 33 + Math.cos(i) * 10;
          const delay = i * 0.1;
          const dissolveProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                transform: `translateZ(${dissolveProgress * 150}px) scale(${1 + dissolveProgress * 2})`,
                opacity: (1 - dissolveProgress) * 0.6,
                filter: `blur(${dissolveProgress * 20}px)`,
              }}
            />
          );
        })}
      </div>

      {/* Flowing dissolution effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-900/40 to-transparent"
        style={{
          opacity: progress * 0.8,
          transform: `translateY(${-100 + progress * 200}px) translateZ(${progress * 50}px)`,
        }}
      />
    </div>
  );
};

export default ScrollDilutionEffect;
