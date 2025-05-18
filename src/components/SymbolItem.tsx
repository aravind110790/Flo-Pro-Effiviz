
'use client';

import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SymbolItemProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
  onSymbolAdd: (symbol: { name: string; icon: React.ReactNode }) => void;
}

const SymbolItem: React.FC<SymbolItemProps> = ({ icon, name, className, onSymbolAdd }) => {
  const handleAdd = () => {
    onSymbolAdd({ name, icon });
  };

  return (
    <Card 
      className={cn(
        "group flex flex-col items-center justify-center p-3 text-center h-24 w-full cursor-pointer transition-all hover:shadow-md hover:border-primary active:shadow-lg active:scale-95", // Changed cursor to pointer
        "bg-card hover:bg-accent/10",
        className
      )}
      onClick={handleAdd} // Changed from drag to click
    >
      <CardContent className="p-0 flex flex-col items-center justify-center">
        <div className="text-primary group-hover:text-accent transition-colors w-8 h-8 mb-1 flex items-center justify-center">
          {icon}
        </div>
        <p className="text-xs font-medium text-foreground group-hover:text-accent-foreground">{name}</p>
      </CardContent>
    </Card>
  );
};

export default SymbolItem;
