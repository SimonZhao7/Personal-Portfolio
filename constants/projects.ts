// Assets
import cashbuddy from "../public/assets/cashbuddy.png";
import studystream from "../public/assets/studystream.png";
// Types
import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Cashbuddy",
    image: cashbuddy,
    time: "Snow Hacks Hackathon, Feb. 2022",
    tech: "| Django | Python | HTML/CSS/JS | Heroku |",
    url: "https://cash-buddy.herokuapp.com/",
    details: [
      "Collaborated in a team of 4 to create a full-stack web application that tracks and aggregates spending across user generated categories",
      "Created and deployed project within 60 hours",
      "Awarded 2nd place among 415 other participants in a hackathon named SnowHacks",
    ],
  },
  {
    id: 2,
    name: "Study Stream",
    image: studystream,
    time: "Mar. 2022 - Sep. 2022",
    tech: "| MERN | Google Cloud | Digital Ocean | Spotify API |",
    url: "https://study-stream.com",
    details: [
      "Developed a full-stack web app that allows users to share flashcards and music with other users, which gives each study set a unique feel based on music choice",
      "Implemented Spotify API and allowed playlist editing and recommended users songs based on the songs in their playlist",
      "Ensured website compatibility of all devices with responsive design",
    ],
  },
];
