import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import CanvasArea from '@/components/CanvasArea';
import PropertiesSidePanel from '@/components/PropertiesSidePanel';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function FloProPage() {
  return (
    <SidebarProvider defaultOpen> {/* defaultOpen can be true or based on cookie/localStorage */}
      <div className="flex h-screen bg-background">
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col h-screen overflow-hidden">
            <AppHeader />
            <main className="flex-1 flex overflow-hidden p-4 md:p-6 gap-4 md:gap-6">
              <CanvasArea className="flex-grow min-w-0" /> {/* min-w-0 for flex child */}
              <PropertiesSidePanel className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg min-w-[280px]" />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
