
'use client';

import React from 'react';
import LogoMakerHeader from '@/components/LogoMakerHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shapes, Type, Palette, Settings } from 'lucide-react';

export default function LogoMakerPage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <LogoMakerHeader />
      <main className="flex-1 flex overflow-hidden p-4 md:p-6 gap-4 md:gap-6">
        {/* Tools Panel (Left Sidebar for Logo Maker) */}
        <Card className="w-64 flex-shrink-0 shadow-lg">
          <CardContent className="p-4 space-y-4">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Tools</h3>
            <Button variant="outline" className="w-full justify-start">
              <Shapes className="mr-2 h-4 w-4" /> Shapes
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Type className="mr-2 h-4 w-4" /> Text
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Palette className="mr-2 h-4 w-4" /> Colors
            </Button>
             <Button variant="outline" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" /> Icons (AI)
            </Button>
            <p className="text-xs text-muted-foreground mt-4">More tools coming soon!</p>
          </CardContent>
        </Card>

        {/* Canvas Area */}
        <Card className="flex-grow shadow-lg overflow-hidden">
          <CardContent className="p-0 h-full flex items-center justify-center bg-muted/30">
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundImage: 'radial-gradient(var(--canvas-dot-color) 0.5px, transparent 0.5px)',
                backgroundSize: '15px 15px',
              }}
            >
              <div className="text-center text-muted-foreground p-8">
                <Shapes size={64} className="mx-auto mb-4 text-primary opacity-50" />
                <h2 className="text-2xl font-semibold">Logo Canvas</h2>
                <p className="mt-2">Start designing your logo here!</p>
                <p className="text-sm">Use tools to add shapes, text, and colors.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Properties Panel (Right Sidebar for Logo Maker) */}
        <Card className="w-72 flex-shrink-0 shadow-lg">
          <CardContent className="p-4 space-y-4">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Properties</h3>
            <p className="text-sm text-muted-foreground">
              Select an element on the canvas to edit its properties.
            </p>
            {/* Placeholder for property controls */}
            <div className="space-y-2 mt-4">
              <label htmlFor="elementName" className="text-sm font-medium text-muted-foreground">Element Name</label>
              <input type="text" id="elementName" placeholder="e.g., Main Shape" className="w-full p-2 border rounded-md bg-input border-border" disabled />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
