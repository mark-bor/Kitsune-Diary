export const linksForContact = [
  {
    title: 'linkedin', 
    icon: 'mingcute:linkedin-line', 
    url: 'https://www.linkedin.com/in/mark-bordakov-8441bb241/'
  },
  {
    title: 'whatsapp', 
    icon: 'mingcute:whatsapp-line', 
    url: 'https://wa.me/+380957625669'
  },
  {
    title: 'telegram', 
    icon: 'mingcute:telegram-line', 
    url: 'https://t.me/marchi003'
  },
]

export const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
]

export const articles = [
  { id: 1, url: '#' },
  { id: 2, url: '#' },
  { id: 3, url: '#' },
  { id: 4, url: '#' },
  { id: 5, url: '#' },
  { id: 6, url: '#' },
  { id: 7, url: '#' },
  { id: 8, url: '#' },
]

export const certificate = [
  { 
    name: "TypeScript",
    provider: "ITVDN",
    description: ["TypeScript", "Classes and interfaces", "Universals", "Variables and date types", "Modules"],
    date: "Jun 25, 2023",
    color: "#457FD6",
    url: "https://takct-server.netlify.app/Certificates/TypeScript.pdf",
  },
  { 
    name: "Front-end",
    provider: "Prometheus",
    description: ["HTML", "CSS", "Sass/SCSS", "JavaScript", "React", "Bootstrap"],
    date: "Dec 10, 2022",
    color: "#6B237D",
    url: "https://takct-server.netlify.app/Certificates/Front-end.pdf",
  },
  { 
    name: "QA course",
    provider: "DataArt",
    description: ["Manual Testing", "Agile/Scrum", "Test Documentation", "Test Planning", "Test Case Design"],
    date: "May 26, 2022",
    color: "#FF9900",
    url: "https://takct-server.netlify.app/Certificates/QA.pdf",
  },
  { 
    name: "UX/UI design",
    provider: "ITVDN",
    description: ["UX/UI", "Responsive Design", "Web Design", "Mobile Design"],
    date: "May 5, 2022",
    color: "#78A2E1",
    url: "https://takct-server.netlify.app/Certificates/UXUI-design.pdf",
  },
]

export type ProjectFilters = {
  key: string,
  label: string,
  options: { key: string, label: string }[],
}

export const filtersOfProjects: ProjectFilters[] = [
  {
    key: "status",
    label: "Status",
    options: [
      { key: "open", label: "In process" },
      { key: "closed", label: "Completed" },
    ],
  },
  {
    key: "type",
    label: "Scope",
    options: [
      { key: "commercial", label: "Commercial" },
      { key: "pet-project", label: "Pet-project" },
      // { key: "volunteering", label: "Volunteering" },
    ],
  },
  {
    key: "type",
    label: "Type",
    options: [
      { key: "calculator", label: "Calculators" },
      { key: "timer", label: "Timers" },
      { key: "generator", label: "Generators" },
      { key: "game", label: "Games" },
      { key: "other", label: "Other" },
    ],
  },
]

export const resumes = [
  {
    name: 'FE 1', 
    color: '#672D50', 
    url: 'https://flowcv.com/resume/rrmtgok5b3'
  },
    {
      name: 'GW', 
    color: '#D9D9D9', 
    url: 'https://flowcv.com/resume/vffhu00pnf'
  },
    {
      name: 'FE 2', 
    color: '#502C84', 
    url: 'https://takct-server.netlify.app/CV/M%20Bordakov%20-%20Front-end.pdf'
  },
]

export const socialNetworks = [
  {
    name: 'linkedin', 
    icon: 'devicon:linkedin', 
    url: 'https://www.linkedin.com/in/mark-bordakov-8441bb241/'
  },
    {
      name: 'github', 
    icon: 'devicon:github', 
    url: 'https://github.com/mark-bor?tab=repositories'
  },
    {
      name: 'upwork', 
    icon: 'cib:upwork', 
    url: 'https://www.upwork.com/freelancers/~01b8a9c8c7e06fb645'
  },
    {
      name: 'whatsapp', 
    icon: 'logos:whatsapp-icon', 
    url: 'https://wa.me/+380957625669'
  },
    {
      name: 'telegram', 
    icon: 'logos:telegram', 
    url: 'https://t.me/marchi003'
  },
]