const technology = {
  react: "React",
  java: "Java",
  junit: "JUnit",
  javaswing: "Java Swing",
  springboot: "Spring Boot",
  typescript: "TypeScript",
  javascript: "JavaScript",
  node: "Node.js",
  postgresql: "PostgreSQL",
  tailwind: "TailwindCSS",
  express: "Express",
  html: "HTML5",
  css: "CSS",
  vercel: "Vercel",
  mongodb: "MongoDB",
  bootstrap: "BootStrap",
  python: "Python",
  nlp: "NLP",
  selenium: "Selenium",
  appium: "Appium",
} as const;

type Technology = (typeof technology)[keyof typeof technology];

type Project = {
    name: string;
    id: string;
    startDate: string;
    endDate: string;
    description: string;
    accomplishments: string[];
    logo: string
    techStack: Technology[];
    link?: string,
    repoLinks: string[]; 
};

type Experience = {
    company: string;
    id: string;
    logo: string;
    dateStart: string;
    dateEnd: string;
    description: string;
    accomplishments: string[];
    techStack: Technology[];
    companyLink: string;
    jobTitle: string;
};


export { technology};
export type { Technology, Project, Experience };