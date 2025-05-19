
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ShieldCheck } from 'lucide-react'; // Using ShieldCheck as a placeholder for logo icon
import Link from 'next/link';

const LogoMakerHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ShieldCheck className="h-7 w-7 filter drop-shadow-[0_0_5px_hsl(var(--primary)/0.5)]" />
            <div>
                <h1 className="text-xl font-bold">
                    🄻🄾|ᒪᗩᗷ|‌🄶🄾
                </h1>
                <p className="text-xs text-muted-foreground italic">
                    Part of Flo-Pro
                </p>
            </div>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/" passHref>
            <Button variant="outline">Back to Flowcharts</Button>
        </Link>
        <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Export Logo
        </Button>
      </div>
    </header>
  );
};

export default LogoMakerHeader;
