
'use client'; // Required for useState and event handlers

import React, { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import CanvasArea from '@/components/CanvasArea';
import PropertiesSidePanel from '@/components/PropertiesSidePanel';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

// Define the structure for a symbol on the canvas
export interface CanvasNode {
  id: string;
  name: string; // This often serves as the type initially, e.g., "Process", "Decision"
  icon: React.ReactNode;
  // x and y can be used for positioning later, or for layout order
  x: number; 
  y: number;
  // Potentially add more properties here like textContent, color, etc.
}

export default function FloProPage() {
  const [canvasNodes, setCanvasNodes] = useState<CanvasNode[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const handleSymbolAdd = (symbol: { name: string; icon: React.ReactNode }) => {
    setCanvasNodes((prevNodes) => {
      const newNode: CanvasNode = {
        id: crypto.randomUUID(),
        name: symbol.name,
        icon: symbol.icon,
        // Basic placement logic: stack new nodes or place them at intervals
        x: 50 + (prevNodes.length % 5) * 120, // Example x positioning
        y: 50 + Math.floor(prevNodes.length / 5) * 120, // Example y positioning
      };
      return [...prevNodes, newNode];
    });
  };

  const handleNodeSelect = (nodeId: string | null) => {
    setSelectedNodeId(nodeId);
  };

  const selectedNode = canvasNodes.find(node => node.id === selectedNodeId) || null;

  return (
    <SidebarProvider defaultOpen> {/* defaultOpen can be true or based on cookie/localStorage */}
      <div className="flex h-screen bg-background">
        <AppSidebar onSymbolAdd={handleSymbolAdd} />
        <SidebarInset>
          <div className="flex flex-col h-screen overflow-hidden">
            <AppHeader />
            <main className="flex-1 flex overflow-hidden p-4 md:p-6 gap-4 md:gap-6">
              <CanvasArea 
                nodes={canvasNodes} 
                selectedNodeId={selectedNodeId}
                onNodeSelect={handleNodeSelect}
                className="flex-grow min-w-0" 
              />
              <PropertiesSidePanel 
                selectedNode={selectedNode}
                className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg min-w-[280px]" 
              />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
