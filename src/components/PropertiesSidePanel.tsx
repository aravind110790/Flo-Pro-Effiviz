
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

interface PropertiesSidePanelProps {
  className?: string;
}

const PropertiesSidePanel: React.FC<PropertiesSidePanelProps> = ({ className }) => {
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
                  <div className="w-7 h-7 rounded-md border bg-blue-500 cursor-pointer hover:opacity-80 shadow-inner" title="Select primary color (placeholder)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accent Color</span>
                  <div className="w-7 h-7 rounded-md border bg-purple-500 cursor-pointer hover:opacity-80 shadow-inner" title="Select accent color (placeholder)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Background Color</span>
                  <div className="w-7 h-7 rounded-md border bg-slate-200 cursor-pointer hover:opacity-80 shadow-inner" title="Select background color (placeholder)"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Text Color</span>
                  <div className="w-7 h-7 rounded-md border bg-slate-700 cursor-pointer hover:opacity-80 shadow-inner" title="Select text color (placeholder)"></div>
                </div>
                 <div className="flex items-center justify-between">
                  <span className="text-sm">Border Color</span>
                  <div className="w-7 h-7 rounded-md border bg-slate-400 cursor-pointer hover:opacity-80 shadow-inner" title="Select border color (placeholder)"></div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">Full color customization and theme adjustments coming soon!</p>
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
