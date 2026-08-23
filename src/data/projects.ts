import type { Project } from "./types";
import { technology } from "./types";


export const projects: Project[] = [
    {
        name: "Calorie & Nutrition Tracker",
        startDate: "September 2025",
        endDate: "Present",
        description: "A full-stack web application to help users track daily food intake, calories, and key nutritional values.",
        logo: "",
        techStack: [
            technology.react, 
            technology.html,
            technology.typescript,
            technology.tailwind,
            technology.springboot,
            technology.postgresql,
            technology.java
        ],
        link: "https://calorie-nutrition-tracker.vercel.app/",
        repoLinks: ["https://github.com/kzou55/calorie-nutrition-tracker"]
    },
    {
        name: "Portfolio",
        startDate: "May 2025",
        endDate: "May 2025",
        description: "Personal Website designed and developed by me",
        logo: "",
        techStack: [
            technology.react, 
            technology.html,
            technology.typescript,
            technology.tailwind,
        ],
        link: "https://kzou55.github.io/portfolio/",
        repoLinks: ["https://github.com/kzou55/portfolio"]
    },
    {
        name: "Pokemon Team Builder Website ",
        startDate: "November 2022",
        endDate: "December 2022",
        description: "An interactive Pokemon team builder web application that utilizes PokeAPI",
        logo: "",
        techStack: [
            technology.react, 
            technology.html,
            technology.css,
            technology.node,
            technology.bootstrap,
            technology.postgresql,
            technology.mongodb,
            technology.express,
        ],
        link: "",
        repoLinks: ["https://github.com/Benderson7/webdev-final-project", "https://github.com/Benderson7/webdev-final-project-server"]
    },
    {
        name: "Easy Animator",
        startDate: "May 2020",
        endDate: "June 2020",
        description: "Built an animation program using the Model-View-Controller design pattern",
        logo: "",
        techStack: [
            technology.java,
            technology.junit,
            technology.javaswing
        ],
        link: "",
        repoLinks: ["https://github.com/kzou55/EasyAnimator"]
    },
]