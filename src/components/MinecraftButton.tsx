
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
        relative font-bold text-sm px-4 py-2 transform transition-all duration-200
        ${variant === 'primary' 
          ? 'bg-gradient-to-b from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 border-2 border-cyan-300 text-slate-900' 
          : 'bg-gradient-to-b from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 border-2 border-slate-500 text-slate-100'
        }
        shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
        rounded-lg backdrop-blur-sm
        ${className}
      `}
      style={{
        textShadow: variant === 'primary' ? '1px 1px 2px rgba(0,0,0,0.3)' : '1px 1px 2px rgba(0,0,0,0.8)',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {children}
    </Button>
  );
};

export default MinecraftButton;
