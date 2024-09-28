// Assets
import ziplyneLogo from "../public/assets/ziplyne.png";
import aimHighLogo from "../public/assets/aimhigh.jpeg";
import superstarsLogo from "../public/assets/superstars.png";
import livesotckcityLogo from "../public/assets/livestockcity.png";
// Types
import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    image: superstarsLogo,
    company: "Superstars",
    position: "Software Engineer Intern",
    skills: ["Angular.js", "Typescript", "HTML/CSS/JS"],
    details: [
      "Spearheaded redesign of authentication service, reducing technical debt and code overhead in 30+ components",
      "Developed 50+ responsive components with Angular, allowing 1000+ users to access the web app",
      "Strategized and collaborated with CEO and other engineers by following Agile development practices",
    ],
  },
  {
    image: ziplyneLogo,
    company: "Ziplyne",
    position: "Front-end Engineer Intern",
    skills: ["React.js", "HTML/CSS/JS"],
    details: [
      "Designed 35+ customizable webpage replicas of corporate platforms, using ReactJS for product demos",
      "Collaborated with product manager to adjust replicas for better usage in company’s demo pages",
    ],
  },
  {
    image: livesotckcityLogo,
    company: "LivestockCity",
    position: "Fullstack Engineer Intern",
    skills: [
      "Python",
      "Django",
      "HTML/CSS/JS",
      "REST APIs",
      "React Native",
      "Redux",
    ],
    details: [
      "Added 20+ new pages with Django, HTML, and CSS, which included user ratings, services, and messaging",
      "Refactored code and proposed ideas for website improvement",
      "Implemented 60+ RESTful API routes using Django, increasing data accessibility for mobile app developers",
      "Assisted the mobile app team and developed 12+ pages using React Native, including the main features that the e-commerce website has",
    ],
  },
  {
    image: aimHighLogo,
    company: "Aim High",
    position: "Assistant Teacher",
    skills: ["Leadership", "Communication", "Teamwork", "Adaptability"],
    details: [
      "Academically and emotionally prepared 60 middle school students for the upcoming school year",
      "Formulated and organized 25 daily lesson plans for 3 different classes with my lead teacher",
      "Led 40% of the total teaching days with little support despite the absences of my lead teache",
      "Compiled 25+ hours of engaging content to instruct 20 middle school students web design fundamentals",
    ],
  },
];
