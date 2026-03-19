import { useMemo } from 'react';
import { useParams } from 'react-router';
import { CreateProjectPage } from './CreateProjectPage';
import { convertPDPToFormData, mockPDPProject } from '../data/projectFormData';
import type { ProjectFormMode } from '../data/projectFormData';

function useProjectFormData(mode: ProjectFormMode) {
  const { id } = useParams();

  return useMemo(() => {
    if (mode === 'create') return null;

    // In a real app, fetch project by id. Using mock data for now.
    if (mode === 'edit' || mode === 'duplicate') {
      return convertPDPToFormData(mockPDPProject, mode);
    }

    // Draft mode: same as edit but would come from saved draft storage
    if (mode === 'draft') {
      return convertPDPToFormData(mockPDPProject, 'edit');
    }

    return null;
  }, [mode, id]);
}

export function CreateProjectPageWrapper() {
  return <CreateProjectPage mode="create" initialData={null} />;
}

export function EditProjectPageWrapper() {
  const initialData = useProjectFormData('edit');
  return <CreateProjectPage mode="edit" initialData={initialData} />;
}

export function DuplicateProjectPageWrapper() {
  const initialData = useProjectFormData('duplicate');
  return <CreateProjectPage mode="duplicate" initialData={initialData} />;
}

export function DraftProjectPageWrapper() {
  const initialData = useProjectFormData('draft');
  return <CreateProjectPage mode="draft" initialData={initialData} />;
}