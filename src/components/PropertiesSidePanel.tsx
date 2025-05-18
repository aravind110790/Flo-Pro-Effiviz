
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import SmartSuggestion from './SmartSuggestion';
import { Palette, Brush, Lightbulb, LayoutGrid } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import type { CanvasNode } from '@/app/page'; // Import CanvasNode

interface PropertiesSidePanelProps {
  className?: string;
  selectedNode?: CanvasNode | null; // Accept selectedNode as a prop
}

const PropertiesSidePanel: React.FC<PropertiesSidePanelProps> = ({ className, selectedNode }) => {
  return (
    <aside className={cn("flex-shrink-0", className)}>
      <ScrollArea className="h-full rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-4 space-y-6">
          {/* Suggestions Accordion */}
          <Card>
            <Accordion type="single" collapsible className="w-full" defaultValue="suggestions">
              <AccordionItem value="suggestions">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">Suggestions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground">
                    Quick tips and common flowchart patterns will appear here to help you build effectively.
                  </p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                    <li>Start with a 'Terminator' for beginning and end points.</li>
                    <li>Use 'Process' for actions or operations.</li>
                    <li>'Decision' symbols should have clear 'Yes/No' or conditional paths.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Templates Accordion */}
          <Card>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="templates">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <LayoutGrid className="mr-2 h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">Templates</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground">
                    Pre-built flowchart templates for common scenarios will be available here soon.
                  </p>
                   <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                    <li>Basic Process Flow</li>
                    <li>Login System Flow</li>
                    <li>User Registration Flow</li>
                  </ul>
                   <p className="mt-3 text-xs text-muted-foreground italic">More templates coming soon!</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              {selectedNode ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="nodeName" className="text-sm font-medium">Name</Label>
                    <Input id="nodeName" value={selectedNode.name} readOnly className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="nodeId" className="text-sm font-medium">ID</Label>
                    <Input id="nodeId" value={selectedNode.id} readOnly className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="nodeType" className="text-sm font-medium">Type</Label>
                    {/* The 'name' property often represents the type for flowchart symbols */}
                    <Input id="nodeType" value={selectedNode.name} readOnly className="mt-1"/> 
                  </div>
                  {/* Future properties like text content, color, size can be added here */}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Select an element on the canvas to see its properties here.</p>
              )}
            </CardContent>
          </Card>

          {/* Color Palette Section Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5 text-primary" />
                Color Palette
              </CardTitle>
              <CardDescription>Customize element colors and theme accents.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Primary Color</span>
                  <div className="w-7 h-7 rounded-md border bg-[hsl(var(--primary))] cursor-pointer hover:opacity-80 shadow-inner" title="Primary color (theme)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accent Color</span>
                  <div className="w-7 h-7 rounded-md border bg-[hsl(var(--accent))] cursor-pointer hover:opacity-80 shadow-inner" title="Accent color (theme)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Background</span>
                  <div className="w-7 h-7 rounded-md border bg-background cursor-pointer hover:opacity-80 shadow-inner" title="Background color (theme)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Foreground</span>
                  <div className="w-7 h-7 rounded-md border bg-[hsl(var(--foreground))] cursor-pointer hover:opacity-80 shadow-inner" title="Foreground/Text color (theme)"></div>
                </div>
                 <div className="flex items-center justify-between">
                  <span className="text-sm">Card Color</span>
                  <div className="w-7 h-7 rounded-md border bg-[hsl(var(--card))] cursor-pointer hover:opacity-80 shadow-inner" title="Card color (theme)"></div>
                </div>
                 <div className="flex items-center justify-between">
                  <span className="text-sm">Border Color</span>
                  <div className="w-7 h-7 rounded-md border bg-[hsl(var(--border))] cursor-pointer hover:opacity-80 shadow-inner" title="Border color (theme)"></div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">Theme color adjustments will be available soon.</p>
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
