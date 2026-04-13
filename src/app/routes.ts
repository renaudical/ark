import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import { NewHomePage } from './pages/NewHomePage';
import { ProjectsPageWrapper } from './pages/ProjectsPageWrapper';
import { NewCreatorsPage } from './pages/NewCreatorsPage';
import { CreatorPage } from './pages/CreatorPage';
import {
  CreateProjectPageWrapper,
  EditProjectPageWrapper,
  DuplicateProjectPageWrapper,
  DraftProjectPageWrapper,
} from './pages/CreateProjectPageWrapper';
import { CreateProjectPage2Wrapper } from './pages/CreateProjectPage2Wrapper';
import { ProjectDemoPage } from './pages/ProjectDemoPage';
import { EditProfilePageWrapper } from './pages/EditProfilePageWrapper';
import { ExplorePageWrapper } from './pages/ExplorePageWrapper';
import { Layout } from './components/Layout';

const LazyDesignSystemPage = lazy(() =>
  import('./pages/DesignSystemPage').then((mod) => ({ default: mod.DesignSystemPage }))
);

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: NewHomePage,
      },
      {
        path: '/projects',
        Component: ProjectsPageWrapper,
      },
      {
        path: '/project/:id',
        Component: ProjectDemoPage,
      },
      {
        path: '/creators',
        Component: NewCreatorsPage,
      },
      {
        path: '/creator/:id',
        Component: CreatorPage,
      },
      {
        path: '/create-project',
        Component: CreateProjectPageWrapper,
      },
      {
        path: '/create-project/edit/:id',
        Component: EditProjectPageWrapper,
      },
      {
        path: '/create-project/duplicate/:id',
        Component: DuplicateProjectPageWrapper,
      },
      {
        path: '/create-project/draft/:id',
        Component: DraftProjectPageWrapper,
      },
      {
        path: '/create-project-2',
        Component: CreateProjectPage2Wrapper,
      },
      {
        path: '/project-demo',
        Component: ProjectDemoPage,
      },
      {
        path: '/edit-profile',
        Component: EditProfilePageWrapper,
      },
      {
        path: '/explore',
        Component: ExplorePageWrapper,
      },
      {
        path: '/design-system',
        Component: LazyDesignSystemPage,
      },
    ],
  },
]);