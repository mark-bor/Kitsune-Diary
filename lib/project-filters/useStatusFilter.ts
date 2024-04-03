import { ProjectData } from '../api/projects/index';

export function useFilterByStatus(projects: ProjectData[], value: string) {
  return projects?.filter((project) => {
    if (!project.status) return project;
    if (project.status===value) return project;
  });
}
