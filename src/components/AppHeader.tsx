import type React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import FloProLogo from '@/components/FloProLogo';
import { SidebarTrigger } from '@/components/ui/sidebar';

const AppHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" /> {/* For mobile sidebar toggle */}
        <FloProLogo />
      </div>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>
    </header>
  );
};

export default AppHeader;
