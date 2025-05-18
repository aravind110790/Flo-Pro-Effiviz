
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Palette } from 'lucide-react'; // Changed Palette to Download for consistency, Palette for logo maker link
import FloProLogo from '@/components/FloProLogo';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

const AppHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" /> {/* For mobile sidebar toggle */}
        <FloProLogo />
      </div>
      <div className="flex items-center gap-2">
        <Link href="/logo-maker" passHref>
          <Button variant="outline">
            <Palette className="mr-2 h-4 w-4" />
            Lo"LAB"Go
          </Button>
        </Link>
        <Button variant="default"> {/* Changed from outline to default for primary action */}
          <Download className="mr-2 h-4 w-4" />
          Export Flowchart
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
