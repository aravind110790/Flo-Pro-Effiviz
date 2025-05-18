
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { CanvasNode } from '@/app/page';

interface CanvasAreaProps {
  className?: string;
  nodes: CanvasNode[];
  selectedNodeId: string | null;
  onNodeSelect: (nodeId: string | null) => void;
}

const CanvasArea: React.FC<CanvasAreaProps> = ({ className, nodes, selectedNodeId, onNodeSelect }) => {
  return (
    <Card
      className={cn("flex-grow shadow-lg overflow-auto", className)}
      onClick={(e) => {
        // If click is on the card itself and not on a node, deselect
        if (e.target === e.currentTarget) {
          onNodeSelect(null);
        }
      }}
    ><CardContent
        className={cn("p-4 h-full relative")} // Removed bg-card
        style={{
          backgroundImage: `radial-gradient(var(--canvas-dot-color) 0.5px, transparent 0.5px), var(--canvas-background-gradient)`,
          backgroundSize: '15px 15px, auto',
        }}
      >
        {nodes.length === 0 ? (
          <div className="text-center text-muted-foreground p-8 absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Flowchart canvas placeholder"
              width={800}
              height={600}
              className="opacity-50 rounded-md max-w-full h-auto"
              data-ai-hint="diagramming ideas"
              priority={false}
            />
            <p className="mt-4 text-lg font-medium">Your canvas awaits! Click a symbol to bring your ideas to life.</p>
            <p className="text-sm">Let your creativity flow, one shape at a time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-max">
            {nodes.map((node) => (
              <Card
                key={node.id}
                className={cn(
                  "p-3 flex flex-col items-center justify-center text-center h-28 shadow-md bg-card hover:shadow-lg transition-all duration-200 cursor-pointer",
                  "animate-in fade-in-0 zoom-in-95 duration-300 ease-out",
                  node.id === selectedNodeId && "ring-2 ring-primary ring-offset-2 ring-offset-[var(--canvas-background-gradient)]" // Adjusted ring offset for new bg
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  onNodeSelect(node.id);
                }}
              >
                <div className="text-primary w-10 h-10 mb-1 flex items-center justify-center">
                  {React.isValidElement(node.icon) ? React.cloneElement(node.icon as React.ReactElement, { size: 32 }) : null}
                </div>
                <p className="text-xs font-medium text-card-foreground truncate w-full px-1">{node.name}</p>
              </Card>
            ))}
          </div>
        )}
      </CardContent></Card>
  );
};

export default CanvasArea;
