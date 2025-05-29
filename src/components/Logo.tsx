import React from 'react';
import { Flower2 } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Flower2 className="h-7 w-7 text-rose-500" />
      <span className="font-quicksand text-xl font-bold">Nar Tour Agency</span>
    </div>
  );
};