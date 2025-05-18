import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CanvasAreaProps {
  className?: string;
}

const CanvasArea: React.FC<CanvasAreaProps> = ({ className }) => {
  return (
    <Card className={cn("flex-grow shadow-lg overflow-hidden", className)}>
      <CardContent className="p-0 h-full flex items-center justify-center bg-background">
        {/* Placeholder for canvas. A background pattern or instructions could go here. */}
        <div className="text-center text-muted-foreground p-8">
          <Image 
            src="https://placehold.co/800x600.png" 
            alt="Flowchart canvas placeholder" 
            width={800} 
            height={600} 
            className="opacity-30 rounded-md"
            data-ai-hint="flowchart diagram"
          />
          <p className="mt-4 text-lg font-medium">Drag and drop symbols here to start building your flowchart.</p>
          <p className="text-sm">Use the sidebar to select symbols and the properties panel to customize them.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CanvasArea;
