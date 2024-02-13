import {
  useFilterByStatus,
  useFilterByKind,
  useFilterByCategory,
} from './index';

export type ProjectsFiltersData = {
  key: string,
  label: string,
  options: { 
    key: string, 
    label: string 
  }[],
  useFilterBy: any
}

export type ProjectData = {
  id: number
  url: string
  title: string
  description: string
  steck: string[]
  status: string
  kind: string
  category: string
}

export const projectsFilters: ProjectsFiltersData[] = [
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
    key: "kind",
    label: "Kind",
    options: [
      { key: "commercial", label: "Commercial" },
      { key: "pet-project", label: "Pet-project" },
      // { key: "volunteering", label: "Volunteering" },
    ],
    useFilterBy: useFilterByKind,
  },
  {
    key: "category",
    label: "Category",
    options: [
      { key: "calculators", label: "Calculators" },
      { key: "timers", label: "Timers" },
      { key: "generators", label: "Generators" },
      { key: "games", label: "Games" },
      { key: "other", label: "Other" },
    ],
    useFilterBy: useFilterByCategory,
  },
]

export const projects: ProjectData[] = [
  { 
    id: 1,
    url: "https://lanze.org/",
    title: "Lanze",
    description: "Platform for freelancers and work searching that is base on blockchain.",
    steck: ["HTML", "CSS", "SCSS", "TypeScript", "React.js", "Next.js", "Redux"],
    status: "in-process",
    kind: "commercial",
    category: "other",
  },
  { 
    id: 2,
    url: "#",
    title: "Pasword Generator",
    description: "Website for password generating. Numbers, upper and lower case letters, symbols are available.",
    steck: ["HTML", "CSS", "JavaScript", "Vue.js", "Vite", "Pinia"],
    status: "in-process",
    kind: "pet-project",
    category: "generators",
  },
  { 
    id: 3,
    url: "https://calendar-timer.netlify.app/",
    title: "Event Timer",
    description: "Timer for counting time to a certain day or event.",
    steck: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "Vite", "Pinia"],
    status: "completed",
    kind: "pet-project",
    category: "timers",
  },
  { 
    id: 4,
    url: "#",
    title: "Calculator",
    description: "Calculator for counting deposit percent.",
    steck: [],
    status: "in-process",
    kind: "pet-project",
    category: "calculators",
  },
]