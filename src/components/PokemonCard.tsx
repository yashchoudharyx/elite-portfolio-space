
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

interface PokemonCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  type?: 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'normal';
  className?: string;
}

const PokemonCard = ({ title, description, children, type = 'normal', className = '' }: PokemonCardProps) => {
  const typeColors = {
    fire: 'from-red-500/20 to-orange-500/20 border-red-400/30',
    water: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
    grass: 'from-emerald-500/20 to-green-500/20 border-emerald-400/30',
    electric: 'from-yellow-400/20 to-amber-500/20 border-yellow-400/30',
    psychic: 'from-purple-500/20 to-pink-500/20 border-purple-400/30',
    normal: 'from-slate-500/20 to-gray-500/20 border-slate-400/30'
  };

  const typeTextColors = {
    fire: 'text-red-300',
    water: 'text-blue-300',
    grass: 'text-emerald-300',
    electric: 'text-yellow-300',
    psychic: 'text-purple-300',
    normal: 'text-slate-300'
  };

  const glowColors = {
    fire: 'shadow-red-500/20',
    water: 'shadow-blue-500/20',
    grass: 'shadow-emerald-500/20',
    electric: 'shadow-yellow-500/20',
    psychic: 'shadow-purple-500/20',
    normal: 'shadow-slate-500/20'
  };

  return (
    <Card className={`
      relative overflow-hidden bg-gradient-to-br ${typeColors[type]} 
      backdrop-blur-sm border-2 ${typeColors[type].split(' ')[2]}
      hover:scale-105 transition-all duration-300 
      hover:shadow-2xl ${glowColors[type]}
      ${className}
    `}>
      <div className="absolute top-3 right-3">
        <Badge className={`${typeTextColors[type]} bg-slate-800/80 font-bold border border-cyan-400/30 backdrop-blur-sm`}>
          {type.toUpperCase()}
        </Badge>
      </div>
      
      {/* Pokédex-style corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50 rounded-tl"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 rounded-br"></div>
      
      <CardHeader className="text-slate-100 relative z-10">
        <CardTitle className="text-xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          {title}
        </CardTitle>
        <CardDescription className="text-slate-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-slate-100 relative z-10">
        {children}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
