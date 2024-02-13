import { ProjectData } from './projects';

export function useFilterByCategory(projects: ProjectData[], value: string) {
  return projects?.filter((project) => {
    if (!project.category) return project;
    if (project.category===value) return project;
  });
}
