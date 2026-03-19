import { NewHeader } from '../components/NewHeader';
import { ProjectDetailPage } from '../components/ProjectDetailPage';
import { NewFooter } from '../components/NewFooter';
import { ThemeInitializer } from '../components/ThemeInitializer';
import { Toaster } from '../components/ui/sonner';
import { MoonDustBackground } from '../components/MoonDustBackground';

export function ProjectDetailPageWrapper() {
  return (
    <>
      <ThemeInitializer />
      <Toaster />
      <MoonDustBackground />
      <NewHeader />
      
      <div className="min-h-screen w-full relative overflow-x-hidden pt-16">
        <div className="relative z-10 w-full">
          <main>
            <ProjectDetailPage />
          </main>
          <NewFooter />
        </div>
      </div>
    </>
  );
}