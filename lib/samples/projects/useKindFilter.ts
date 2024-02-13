import { ProjectData } from './projects';

export function useFilterByKind(projects: ProjectData[], value: string) {
  return projects?.filter((project) => {
    if (!project.kind) return project;
    if (project.kind===value) return project;
  });
}
