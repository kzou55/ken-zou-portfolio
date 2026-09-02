import type { Project } from "./types";
import { technology } from "./types";

export const projects: Project[] = [
  {
    name: "Calorie & Nutrition Tracker",
    id: "calorie-nutrition-tracker",
    startDate: "September 2025",
    endDate: "Present",
    description:
      "A full-stack web application to help users track daily food intake, calories, and key nutritional values.",
    accomplishments: [" Developed a full-stack web application enabling users to log and manage meals with persistent PostgreSQL storage",
        "Implemented RESTful APIs with Spring Boot and JPA/Hibernate to support CRUD operations on users, meals, and food entries",
        "Integrated the Nutritionix API to provide nutritional data and enhance meal tracking accuracy",
        "Configured JWT authentication with bcrypt password hashing for secure user registration, login, and logout",
        "Built a responsive React frontend with TypeScript and TailwindCSS for meal tracking and management"
    ],
    logo: "",
    techStack: [
      technology.react,
      technology.html,
      technology.typescript,
      technology.tailwind,
      technology.springboot,
      technology.postgresql,
      technology.java,
    ],
    link: "https://calorie-nutrition-tracker.vercel.app/",
    repoLinks: ["https://github.com/kzou55/calorie-nutrition-tracker"],
  },
  {
    name: "Portfolio",
    id: "portfolio",
    startDate: "May 2025",
    endDate: "May 2025",
    description: "Personal Website designed and developed by me",
    accomplishments: [
      "Built a responsive portfolio website using React, TypeScript, and TailwindCSS to showcase technical work",
      "Implemented reusable components(project cards, experience cards, navigation layout) for scalable UI structure",
    ],
    logo: "",
    techStack: [
      technology.react,
      technology.html,
      technology.typescript,
      technology.tailwind,
    ],
    link: "https://ken-zou.vercel.app",
    repoLinks: ["https://github.com/kzou55/portfolio"],
  },
];
