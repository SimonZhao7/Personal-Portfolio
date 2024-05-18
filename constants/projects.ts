// Assets
import cashbuddy from "../public/assets/cashbuddy.png";
import studystream from "../public/assets/studystream.png";
import maomorize from "../public/assets/maomorize.png";
import selftour from "../public/assets/selftour.png";
import smokescreen from "../public/assets/smokescreen.png";
import handinneed from "../public/assets/handinneed.png";
// Types
import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
    name: "Maomorize",
    image: maomorize,
    time: "Jan. 2024 - Jan. 2024",
    tech: ["React.js", "Node.js", "Firebase", "OpenAI", "HTML/CSS/JS"],
    url: "https://maomorize-git-main-simonzhao7.vercel.app/",
    details: "AI-powered Active Recall + Spaced Repitition Study App",
  },
  {
    id: 3,
    name: "Smokescreen",
    image: smokescreen,
    time: "Nov. 2023 - Nov.2023",
    tech: ["HTML/CSS/JS", "Firebase", "Youtube API", "Chrome Extension"],
    url: "https://devpost.com/software/smokescreen-tcq2j5",
    details: "Youtube content-blocking Chrome extension",
  },
  {
    id: 4,
    name: "HandInNeed",
    image: handinneed,
    time: "Jan. 2023 - Mar. 2023",
    tech: ["Flutter", "Dart", "Firebase", "Maps Platform"],
    url: "https://github.com/SimonZhao7/HandInNeed",
    details: "Volunteer matching and organization platform",
  },
  {
    id: 5,
    name: "Cashbuddy",
    image: cashbuddy,
    time: "Snow Hacks Hackathon, Feb. 2022",
    tech: ["Django", "Python", "HTML/CSS/JS", "Herkou"],
    url: "https://cash-buddy.herokuapp.com/",
    details: "Budget tracker with filtering & sorting records",
  },
  {
    id: 6,
    name: "Study Stream",
    image: studystream,
    time: "Mar. 2022 - Sep. 2022",
    tech: ["MERN stack", "Google Cloud", "Digital Ocean", "Spotify AI"],
    url: "https://study-stream.com",
    details: "Flashcard app with Spotify playlist integration",
  },
];
