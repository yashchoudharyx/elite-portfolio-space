
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, [role="button"], .cursor-pointer, input, textarea, select');
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add mouse move listener
    document.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .cursor-pointer, input, textarea, select');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`rounded-full border-2 border-white transition-all duration-200 ease-out flex items-center justify-center ${
          isHovering 
            ? 'w-12 h-12 bg-white/20 backdrop-blur-sm' 
            : 'w-6 h-6 bg-white/10'
        }`}
      >
        {isHovering && (
          <ArrowUpRight 
            size={16} 
            className="text-white animate-pulse" 
          />
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
