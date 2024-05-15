import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  name: string;
  image: StaticImageData;
  time: string;
  tech: string;
  url: string;
  details: string[];
};

export type Experience = {
  id: number;
  image: StaticImageData;
  company: string;
  position: string;
  skills: string[];
  details: string[];
};

export type Skill = {
  id: number;
  name: string;
  proficiency: string;
  icon: string;
};
