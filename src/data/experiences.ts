import { technology, type Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "One Community Global",
    logo: "",
    dateStart: "June 2026",
    dateEnd: "Present",
    description:
      "Contributing to an open-source MERN application as a Full-Stack Software Engineer.",
    techStack: [
      technology.react,
      technology.javascript,
      technology.node,
      technology.mongodb,
    ],
    companyLink: "https://onecommunityglobal.org/",
    jobTitle: "Software Engineer - MERN Stack",
  },
  {
    company: "Generate Product Development - Jurni",
    logo: "",
    dateStart: "September 2022",
    dateEnd: "December 2022",
    description:
      "Worked with a team of developers on Jurni, an insight-driven journaling platform for mental wellness.",
    techStack: [technology.python, technology.nlp],
    companyLink: "https://generatenu.com/",
    jobTitle: "Build Studio Software Engineer",
  },
  {
    company: "HealthEdge (Formerly Wellframe)",
    logo: "",
    dateStart: "January 2022",
    dateEnd: "December 2022",
    description:
      "Developed and maintained automated tests for a digital health platform and mobile application.",
    techStack: [technology.java, technology.selenium, technology.appium],
    companyLink: "https://www.wellframe.com/",
    jobTitle: "Software QA Automation Engineer Co-op",
  },
];
