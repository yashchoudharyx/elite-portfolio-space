
import { useEffect, useState } from 'react';

const CustomCursor = ({ showOnlyOnHome = false }: { showOnlyOnHome?: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isOnHomePage, setIsOnHomePage] = useState(true);

  const projectImages = [
    "https://images.unsplash.com/photo-1551954810-43cd6aef5584", // Minecraft-inspired
    "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3", // Pokemon-inspired
    "https://images.unsplash.com/photo-1614029951470-ef9eb9952be8", // Gaming theme
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"  // Tech theme
  ];

  useEffect(() => {
    const checkSection = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      const isInHero = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsOnHomePage(isInHero);
    };

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (showOnlyOnHome) {
        checkSection();
        if (!isOnHomePage) {
          setIsVisible(false);
          return;
        }
      }
      
      setIsVisible(true);
      
      // Change project image based on movement
      const imageIndex = Math.floor((e.clientX + e.clientY) / 200) % projectImages.length;
      setCurrentProject(imageIndex);
    };

    const hideCursor = () => setIsVisible(false);

    const handleScroll = () => {
      if (showOnlyOnHome) {
        checkSection();
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showOnlyOnHome, isOnHomePage]);

  if (!isVisible || (showOnlyOnHome && !isOnHomePage)) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
      style={{
        left: position.x + 15,
        top: position.y + 15,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="relative">
        <img
          src={projectImages[currentProject]}
          alt="Project preview"
          className="w-20 h-20 object-cover rounded-lg border-2 border-blue-400 shadow-lg animate-pulse"
        />
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
