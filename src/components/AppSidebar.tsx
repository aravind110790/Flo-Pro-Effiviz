import type React from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import SymbolItem from '@/components/SymbolItem';
import FloProLogo from '@/components/FloProLogo';
import { RectangleHorizontal, Diamond, Circle, Database, FileText, Settings, LifeBuoy, ALargeSmall } from 'lucide-react';
import { Button } from './ui/button';

const symbols = [
  { name: 'Terminator', icon: <Circle size={24} strokeWidth={1.5} /> },
  { name: 'Process', icon: <RectangleHorizontal size={24} strokeWidth={1.5} /> },
  { name: 'Decision', icon: <Diamond size={24} strokeWidth={1.5} /> },
  { name: 'Data', icon: <ALargeSmall size={24} strokeWidth={1.5} /> }, // Placeholder for Parallelogram
  { name: 'Database', icon: <Database size={24} strokeWidth={1.5} /> },
  { name: 'Document', icon: <FileText size={24} strokeWidth={1.5} /> },
];

const AppSidebar: React.FC = () => {
  return (
    <Sidebar side="left" collapsible="icon" className="border-r">
      <SidebarHeader className="p-4 hidden md:block">
        {/* Logo can be placed here for collapsed state or a smaller version */}
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Shapes</SidebarGroupLabel>
          <div className="grid grid-cols-2 gap-2 group-data-[collapsible=icon]:grid-cols-1">
            {symbols.map((symbol) => (
              <SymbolItem key={symbol.name} name={symbol.name} icon={symbol.icon} className="group-data-[collapsible=icon]:h-12 group-data-[collapsible=icon]:w-12 group-data-[collapsible=icon]:p-1 group-data-[collapsible=icon]:[&_p]:hidden"/>
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 mt-auto">
         <SidebarMenu>
            <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:w-auto">
                    <LifeBuoy className="mr-2 h-4 w-4 group-data-[collapsible=icon]:mr-0" />
                    <span className="group-data-[collapsible=icon]:hidden">Help</span>
                </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:w-auto">
                    <Settings className="mr-2 h-4 w-4 group-data-[collapsible=icon]:mr-0" />
                    <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                </Button>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
