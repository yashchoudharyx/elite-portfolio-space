
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface MinecraftButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const MinecraftButton = ({ children, onClick, variant = 'primary', className = '' }: MinecraftButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`
        relative font-bold text-lg px-6 py-3 transform transition-all duration-200
        ${variant === 'primary' 
          ? 'bg-green-600 hover:bg-green-700 border-4 border-green-800' 
          : 'bg-stone-600 hover:bg-stone-700 border-4 border-stone-800'
        }
        border-t-green-400 border-l-green-400 border-r-green-900 border-b-green-900
        shadow-[inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.3)]
        hover:scale-105 active:scale-95 text-white
        ${className}
      `}
      style={{
        textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
        fontFamily: 'monospace'
      }}
    >
      {children}
    </Button>
  );
};

export default MinecraftButton;
