// Assets
import selftour from "../public/assets/selftour.png";
import maomorize from "../public/assets/maomorize.png";
import cashbuddy from "../public/assets/cashbuddy.png";
import handinneed from "../public/assets/handinneed.png";
import studystream from "../public/assets/studystream.png";
import smokescreen from "../public/assets/smokescreen.png";
// Types
import { Project } from "../types";

export const projects: Project[] = [
  {
    name: "SelfTour",
    image: selftour,
    time: "Mar. 2024 - Mar. 2024",
    tech: [
      "Next.js",
      "Node.js",
      "Typescript",
      "Firebase",
      "OpenAI",
      "Maps Platform",
      "HTML/CSS/JS",
    ],
    url: "https://self-tour.vercel.app/",
    details:
      "User-created walking tours with location-triggered guided content.",
  },
  {
    name: "Maomorize",
    image: maomorize,
    time: "Jan. 2024 - Jan. 2024",
    tech: ["React.js", "Node.js", "Firebase", "OpenAI", "HTML/CSS/JS"],
    url: "https://maomorize-git-main-simonzhao7.vercel.app/",
    details: "AI-powered Active Recall + Spaced Repitition Study App",
  },
  {
    name: "Smokescreen",
    image: smokescreen,
    time: "Nov. 2023 - Nov.2023",
    tech: ["HTML/CSS/JS", "Firebase", "Youtube API", "Chrome Extension"],
    url: "https://devpost.com/software/smokescreen-tcq2j5",
    details: "Youtube content-blocking Chrome extension",
  },
  {
    name: "HandInNeed",
    image: handinneed,
    time: "Jan. 2023 - Mar. 2023",
    tech: ["Flutter", "Dart", "Firebase", "Maps Platform"],
    url: "https://github.com/SimonZhao7/HandInNeed",
    details: "Volunteer matching and organization platform",
  },
  {
    name: "Cashbuddy",
    image: cashbuddy,
    time: "Snow Hacks Hackathon, Feb. 2022",
    tech: ["Django", "Python", "HTML/CSS/JS", "Herkou"],
    url: "https://cash-buddy.herokuapp.com/",
    details: "Budget tracker with filtering & sorting records",
  },
  {
    name: "Study Stream",
    image: studystream,
    time: "Mar. 2022 - Sep. 2022",
    tech: ["MERN stack", "Google Cloud", "Digital Ocean", "Spotify AI"],
    url: "https://study-stream.com",
    details: "Flashcard app with Spotify playlist integration",
  },
];
