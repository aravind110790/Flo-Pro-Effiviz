
import React from 'react'; // Changed from type import
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import SmartSuggestion from './SmartSuggestion';
import { Palette, Brush } from 'lucide-react';

interface PropertiesSidePanelProps {
  className?: string;
}

const PropertiesSidePanel: React.FC<PropertiesSidePanelProps> = ({ className }) => {
  return (
    <aside className={cn("flex-shrink-0", className)}>
      <ScrollArea className="h-full rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-4 space-y-6">
          {/* Color Palette Section Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5 text-primary" />
                Color Palette
              </CardTitle>
              <CardDescription>Customize element colors.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Fill Color</span>
                  <div className="w-6 h-6 rounded border bg-gray-200 cursor-pointer hover:opacity-80" title="Select fill color (placeholder)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Stroke Color</span>
                  <div className="w-6 h-6 rounded border bg-gray-400 cursor-pointer hover:opacity-80" title="Select stroke color (placeholder)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Text Color</span>
                  <div className="w-6 h-6 rounded border bg-black cursor-pointer hover:opacity-80" title="Select text color (placeholder)"></div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">Full color customization coming soon!</p>
            </CardContent>
          </Card>

          {/* Element Properties Placeholder */}
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brush className="mr-2 h-5 w-5 text-primary" />
                Element Properties
              </CardTitle>
              <CardDescription>Adjust selected element properties.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Select an element on the canvas to see its properties here.</p>
              {/* Placeholder for properties like text, size, etc. */}
            </CardContent>
          </Card>


          {/* Smart Suggestion Section */}
          <SmartSuggestion />
        </div>
      </ScrollArea>
    </aside>
  );
};

export default PropertiesSidePanel;
