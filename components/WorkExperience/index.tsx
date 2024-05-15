"use client";

// Framer Motion
import { Variants, motion } from "framer-motion";
// Types
import { WorkExperienceComponent } from "./types";
import TextPill from "../TextPill";

const itemVariant: Variants = {
  hide: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const WorkExperience: WorkExperienceComponent = ({
  experience: { company, position, skills, details },
}) => {
  return (
    <motion.article
      variants={itemVariant}
      className="w-full"
    >
      <h3 className="text-2xl font-bold">
        {position}, {company}
      </h3>
      <div className="my-3 flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <TextPill text={skill} key={i} />
        ))}
      </div>
      <ul className="list-disc pl-4">
        {details?.map((d, i) => (
          <li className="w-full text-lg" key={i}>
            {d}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default WorkExperience;
