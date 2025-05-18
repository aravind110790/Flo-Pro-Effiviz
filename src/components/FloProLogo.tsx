import type React from 'react';

const FloProLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-bold text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary-foreground)/0.7)]">
        Flo-Pro
      </h1>
      <p className="text-xs text-muted-foreground italic">
        Crafted 4ur Convenience
      </p>
    </div>
  );
};

export default FloProLogo;
