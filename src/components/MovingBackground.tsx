
import { useEffect, useRef } from 'react';

const MovingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    // Create particles with more dynamic properties
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        hue: Math.random() * 60 + 180 // Blue to cyan range
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create deep gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#0a0e1a');
      gradient.addColorStop(0.4, '#1a1f2e');
      gradient.addColorStop(1, '#0f1419');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position with smooth movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges with some randomness
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.vx += (Math.random() - 0.5) * 0.1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.vy += (Math.random() - 0.5) * 0.1;
        }

        // Subtle oscillation in opacity
        particle.opacity = 0.3 + Math.sin(Date.now() * 0.001 + i) * 0.2;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsl(${particle.hue}, 70%, 60%)`;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
        ctx.fill();
        
        ctx.restore();
      });

      // Draw flowing connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.4;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `hsl(${particle.hue}, 60%, 50%)`);
            gradient.addColorStop(1, `hsl(${otherParticle.hue}, 60%, 50%)`);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            
            ctx.restore();
          }
        });
      });

      // Add floating orbs for extra depth
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * 0.5 + Math.sin(time + i * 2) * 200;
        const y = canvas.height * 0.5 + Math.cos(time + i * 1.5) * 150;
        const size = 40 + Math.sin(time * 2 + i) * 20;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        
        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        orbGradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        orbGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = orbGradient;
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      style={{ zIndex: 1 }}
    />
  );
};

export default MovingBackground;
