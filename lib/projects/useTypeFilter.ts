import { ProjectData } from '../samples/PROJECTS';

export function useFilterByType(projects: ProjectData[], value: string) {
  return projects?.filter((project) => {
    if (!project.type) return project;
    if (project.type===value) return project;
  });
}
