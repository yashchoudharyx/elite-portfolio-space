
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
    fire: 'from-red-400 to-orange-500',
    water: 'from-blue-400 to-blue-600',
    grass: 'from-green-400 to-green-600',
    electric: 'from-yellow-400 to-yellow-500',
    psychic: 'from-purple-400 to-pink-500',
    normal: 'from-gray-400 to-gray-500'
  };

  const typeTextColors = {
    fire: 'text-red-700',
    water: 'text-blue-700',
    grass: 'text-green-700',
    electric: 'text-yellow-700',
    psychic: 'text-purple-700',
    normal: 'text-gray-700'
  };

  return (
    <Card className={`relative overflow-hidden border-4 border-yellow-400 bg-gradient-to-br ${typeColors[type]} hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="absolute top-2 right-2">
        <Badge className={`${typeTextColors[type]} bg-white font-bold`}>
          {type.toUpperCase()}
        </Badge>
      </div>
      <CardHeader className="text-white">
        <CardTitle className="text-xl font-bold" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}>
          {title}
        </CardTitle>
        <CardDescription className="text-gray-100">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-white">
        {children}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
