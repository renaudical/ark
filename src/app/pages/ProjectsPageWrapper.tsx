import { NewHeader } from '../components/NewHeader';
import { ProjectsPage } from '../components/ProjectsPage';
import { NewFooter } from '../components/NewFooter';
import { ThemeInitializer } from '../components/ThemeInitializer';
import { MoonDustBackground } from '../components/MoonDustBackground';

export function ProjectsPageWrapper() {
  return (
    <>
      <ThemeInitializer />
      <MoonDustBackground />
      <NewHeader />
      
      <div className="min-h-screen w-full relative overflow-x-hidden pt-16">
        <div className="relative z-10 w-full">
          <main>
            <ProjectsPage />
          </main>
          <NewFooter />
        </div>
      </div>
    </>
  );
}