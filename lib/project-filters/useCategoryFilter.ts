import { ProjectData } from '../api/projects/index';

export function useFilterByCategory(projects: ProjectData[], value: string) {
  return projects?.filter((project) => {
    if (!project.category) return project;
    if (project.category===value) return project;
  });
}
