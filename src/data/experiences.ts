import { technology, type Experience } from "./types";
import Generate from "../assets/logos/generate_product_development.png";
import Wellframe from "../assets/logos/wellframe.png";
import OneCommunity from "../assets/logos/onecommunityicon.jpg";

export const experiences: Experience[] = [
  {
    company: "One Community Global",
    id: "one-community",
    logo: OneCommunity,
    dateStart: "June 2026",
    dateEnd: "Present",
    description:
      "Contributing to an open-source MERN application as a Full-Stack Software Engineer.",
    accomplishments: [
      "Built the Garden Management dashboard, implementing summary metric cards, tabbed navigation, and interactive planning panels for managing seeding, transplanting, succession, and harvesting workflows",
      "Enhanced mobile responsiveness of a volunteer web application by fixing header UI issues across tablet and phone viewports, enhancing navigation on smaller screens",
      "Improved regression testing coverage by writing unit tests with React Testing Library and Jest, helping prevent unintended functionality changes during future development",
      "Reviewed 70+ GitHub pull requests and weekly engineering deliverables for a team of 6 software engineers, ensuring code quality, documentation accuracy, and adherence to project standards.",
    ],
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
    company: "Generate Product Development",
    id: "generate",
    logo: Generate,
    dateStart: "September 2022",
    dateEnd: "December 2022",
    description:
      "Worked with a team of developers on Jurni, an insight-driven journaling platform for mental wellness.",
    accomplishments: [
      "Collaborated with a team of developers to apply NLP techniques, including sentiment analysis and topic modeling on mental health journal data",
      "Built tools in Python to scrape, clean, and preprocess large-scale journal entries",
      "Developed data visualizations and applied emotion and subject extraction models to analyze journal content",
    ],
    techStack: [technology.python, technology.nlp],
    companyLink: "https://generatenu.com/",
    jobTitle: "Build Studio Software Engineer",
  },
  {
    company: "HealthEdge (Formerly Wellframe)",
    id: "HealthEdge",
    logo: Wellframe,
    dateStart: "January 2022",
    dateEnd: "December 2022",
    description:
      "Developed and maintained automated tests for a digital health platform and mobile application.",
    accomplishments: [
      "Automated end-to-end tests for Wellframe’s dashboard and mobile app with Java using Selenium and Appium framework, reducing hours of manual testing per release",
      "Collaborated using Agile methodlogies with daily Scrum standups, biweekly sprints, and retrospectives",
      "Refactored test suites for parallel execution, decreasing total runtime by 40% and speeding up CI/CD cycles",
      "Coordinated with the QA team to plan and execute structured manual and automated testing for weekly releases"
    ],
    techStack: [technology.java, technology.selenium, technology.appium],
    companyLink: "https://www.wellframe.com/",
    jobTitle: "Software QA Automation Engineer Co-op",
  },
];
