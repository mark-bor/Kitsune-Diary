export type CertificateData = {
  name: string,
  img: string,
  provider: string,
  description: string[],
  date: string,
  color: string,
  url: string,
}

export const CERTIFICATES: CertificateData[] = [
  { 
    name: "TypeScript",
    img: "https://itvdn.com/Content/img/about/logo-black.png",
    provider: "ITVDN",
    description: ["TypeScript", "Classes and interfaces", "Universals", "Variables and date types", "Modules"],
    date: "Jun 25, 2023",
    color: "#457FD6",
    url: "https://takct-server.netlify.app/Certificates/TypeScript.pdf",
  },
  { 
    name: "Front-end",
    img: "https://prometheus.org.ua/wp-content/uploads/2022/04/cropped-favicon_yellow_blue-2-270x270.png",
    provider: "Prometheus",
    description: ["HTML", "CSS", "Sass/SCSS", "JavaScript", "React", "Bootstrap"],
    date: "Dec 10, 2022",
    color: "#6B237D",
    url: "https://takct-server.netlify.app/Certificates/Front-end.pdf",
  },
  { 
    name: "QA course",
    img: "https://www.dataart.team/favicon.ico",
    provider: "DataArt",
    description: ["Manual Testing", "Agile/Scrum", "Test Documentation", "Test Planning", "Test Case Design"],
    date: "May 26, 2022",
    color: "#FF9900",
    url: "https://takct-server.netlify.app/Certificates/QA.pdf",
  },
  { 
    name: "UX/UI design",
    img: "https://itvdn.com/Content/img/about/logo-black.png",
    provider: "ITVDN",
    description: ["UX/UI", "Responsive Design", "Web Design", "Mobile Design"],
    date: "May 5, 2022",
    color: "#78A2E1",
    url: "https://takct-server.netlify.app/Certificates/UXUI-design.pdf",
  },
]