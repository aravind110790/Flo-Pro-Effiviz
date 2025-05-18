
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { CanvasNode } from '@/app/page'; // Import the CanvasNode type

interface CanvasAreaProps {
  className?: string;
  nodes: CanvasNode[]; // Prop to receive nodes to render
}

const CanvasArea: React.FC<CanvasAreaProps> = ({ className, nodes }) => {
  return (
    <Card className={cn("flex-grow shadow-lg overflow-auto", className)}> {/* Changed overflow to auto */}
      <CardContent className="p-4 h-full bg-background relative"> {/* Added p-4 and relative positioning context */}
        {nodes.length === 0 ? (
          <div className="text-center text-muted-foreground p-8 absolute inset-0 flex flex-col items-center justify-center">
            <Image 
              src="https://placehold.co/800x600.png" 
              alt="Flowchart canvas placeholder" 
              width={800} 
              height={600} 
              className="opacity-30 rounded-md max-w-full h-auto"
              data-ai-hint="flowchart diagram"
              priority={false} 
            />
            <p className="mt-4 text-lg font-medium">Click symbols in the sidebar to add them here.</p>
            <p className="text-sm">Use the properties panel to customize them.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {nodes.map((node) => (
              <Card key={node.id} className="p-3 flex flex-col items-center justify-center text-center h-28 shadow-md bg-card">
                <div className="text-primary w-10 h-10 mb-1 flex items-center justify-center">
                  {React.cloneElement(node.icon as React.ReactElement, { size: 32 })}
                </div>
                <p className="text-xs font-medium text-card-foreground truncate w-full">{node.name}</p>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CanvasArea;
