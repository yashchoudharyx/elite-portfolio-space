
import { useEffect, useRef } from 'react';

const MovingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      baseOpacity: number;
      color: string;
    }> = [];

    // Create particles with more vibrant colors
    const colors = ['#60a5fa', '#34d399', '#f472b6', '#fbbf24', '#a78bfa'];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 4 + 2,
        opacity: 0.6,
        baseOpacity: Math.random() * 0.4 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      
      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Animate opacity
        particle.opacity = particle.baseOpacity + Math.sin(time + i * 0.1) * 0.3;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.4;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = '#60a5fa';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Add flowing waves
      ctx.save();
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + Math.sin(time + i) * 80);
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = canvas.height / 2 + Math.sin((x * 0.008) + time + i * 2) * 80;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 2,
        background: 'transparent'
      }}
    />
  );
};

export default MovingBackground;
