import { ProjectData } from "../api/projects/projects.types";


const PROJECTS: ProjectData[] = [
  {
    id: 'lanze',
    url: 'https://lanze.org',
    title: 'Lanze',
    description:
      'A platform for freelancers and customers that uses blockchain technology.',
    steck: ['HTML', 'CSS', 'SCSS', 'TypeScript', 'React', 'Next', 'Redux'],
    status: 'in-process',
    category: 'commercial',
    type: 'other',
  },
  {
    id: 'kitsune-diary',
    url: 'https://kitsune-diary.vercel.app',
    github: 'https://github.com/mark-bor/Kitsune-Diary',
    title: 'Kitsune Diary',
    description:
      'Personal website with blog, projects, and professional information about me.',
    steck: ['HTML', 'CSS', 'SCSS', 'TypeScript', 'React', 'Next', 'Redux'],
    status: 'completed',
    category: 'personal',
    type: 'other',
  },
  {
    id: 'generators',
    url: 'https://generators-spot.netlify.app/',
    github: 'https://github.com/mark-bor/Generators-Spot',
    title: 'Generators',
    description:
      'A website with various generators such as passwords, dates and others. It also has small Back-end part.',
    steck: ['HTML', 'CSS', 'TypeScript', 'Vue', 'Nuxt'],
    status: 'in-process',
    category: 'pet-project',
    type: 'generators',
  },
  {
    id: 'calendar-timer',
    url: 'https://calendar-timer.netlify.app',
    github: 'https://github.com/mark-bor/Calendar-Timer',
    title: 'Calendar Timer',
    description:
      'One page site with timer for counting time to a certain day or event.',
    steck: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Pinia'],
    status: 'completed',
    category: 'pet-project',
    type: 'timers',
  },
  {
    id: 'calculators',
    url: 'https://calculators-spot.web.app',
    github: 'https://github.com/mark-bor/Calculators-Spot',
    title: 'Calculators',
    description:
      'A website with various calculators such as mathematical formulas, financial and others.',
    steck: ['HTML', 'CSS', 'SCSS', 'TypeScript', 'Angular'],
    status: 'in-process',
    category: 'pet-project',
    type: 'calculators',
  },
  {
    id: 'mobile-app',
    url: 'https://expo.dev/@marchi003/MyCV-Application?release-channel=default',
    github: 'https://github.com/mark-bor/React-Native-CV-Application',
    title: 'Mobile App',
    description:
      'Mobile app made via React Native. It can be started through Expo.',
    steck: [
      'JavaScript',
      'CSS',
      'React',
      'React Native',
      'Expo',
      'React Navigation',
    ],
    status: 'completed',
    category: 'pet-project',
    type: 'other',
  },
];

export default PROJECTS; 