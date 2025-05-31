
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

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      
      setProgress(newProgress);

      if (newProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 300);
      }
    };

    animate();
  }, [isActive, onComplete]);

  if (!isActive && progress === 0) return null;

  // Create dissolving effect with 3D transformation
  const dissolveIntensity = progress * 100;
  const rotateX = progress * 90;
  const rotateY = progress * 45;
  const scale = 1 - progress * 0.5;
  const opacity = 1 - progress;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dissolving grid effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => {
          const x = (i % 10) * 10;
          const y = Math.floor(i / 10) * 20;
          const delay = i * 20;
          const dissolveProgress = Math.max(0, (progress * 100 - delay) / 20);
          
          return (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-cyan-400 to-purple-600"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: '8%',
                height: '15%',
                transform: `translateZ(${dissolveProgress * 200}px) rotateX(${dissolveProgress * 360}deg)`,
                opacity: 1 - dissolveProgress,
                filter: `blur(${dissolveProgress * 10}px)`,
                borderRadius: '4px',
              }}
            />
          );
        })}
      </div>

      {/* Particle dissolution */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i / 30) * Math.PI * 2;
          const radius = 300 + progress * 500;
          const x = 50 + Math.cos(angle) * (radius / 10);
          const y = 50 + Math.sin(angle) * (radius / 10);
          
          return (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translateZ(${progress * 300}px) scale(${1 + progress * 2})`,
                opacity: 1 - progress,
                filter: `blur(${progress * 8}px)`,
                boxShadow: `0 0 ${20 + progress * 40}px rgba(59, 130, 246, ${1 - progress})`,
              }}
            />
          );
        })}
      </div>

      {/* Overlay gradient for smooth transition */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900"
        style={{ opacity: progress * 0.7 }}
      />
    </div>
  );
};

export default ScrollDilutionEffect;
