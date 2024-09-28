import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  image: StaticImageData;
  time: string;
  tech: string[];
  url: string;
  details: string;
};

export type Experience = {
  image: StaticImageData;
  company: string;
  position: string;
  skills: string[];
  details: string[];
};

export type Skill = {
  name: string;
  proficiency: number;
  icon: string;
};
