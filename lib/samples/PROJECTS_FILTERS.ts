import {
  useFilterByStatus,
  useFilterByCategory,
  useFilterByType,
} from '../project-filters/index';

export type ProjectsFiltersData = {
  key: string,
  label: string,
  options: { 
    key: string, 
    label: string 
  }[],
  useFilterBy: any
}

export const PROJECTS_FILTERS: ProjectsFiltersData[] = [
  {
    key: "status",
    label: "Status",
    options: [
      { key: "in-process", label: "In process" },
      { key: "completed", label: "Completed" },
    ],
    useFilterBy: useFilterByStatus,
  },
  {
    key: "category",
    label: "Category",
    options: [
      { key: "commercial", label: "Commercial" },
      { key: "personal", label: "Personal" },
      { key: "pet-project", label: "Pet-project" },
      // { key: "volunteering", label: "Volunteering" },
    ],
    useFilterBy: useFilterByCategory,
  },
  {
    key: "type",
    label: "Type",
    options: [
      { key: "calculators", label: "Calculators" },
      { key: "timers", label: "Timers" },
      { key: "generators", label: "Generators" },
      { key: "games", label: "Games" },
      { key: "other", label: "Other" },
    ],
    useFilterBy: useFilterByType,
  },
]
