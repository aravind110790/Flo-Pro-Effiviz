import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Use Geist Sans as primary font
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono', // For code if needed
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Flo-Pro: Crafted 4ur Convenience',
  description: 'Craft flowcharts with ease using Flo-Pro: Crafted 4ur Convenience. Features drag-and-drop, symbol library, smart suggestions, and export functionality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
