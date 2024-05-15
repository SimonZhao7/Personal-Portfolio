"use client";

import WorkExperience from "../WorkExperience";
// Constants
import { experiences } from "../../constants/experience";
// Framer Motion
import { motion, Variants } from "framer-motion";

const wrapperVariant: Variants = {
  show: { transition: { staggerChildren: 0.5 } },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto flex min-h-screen flex-col justify-center px-[175px] pt-[72px]"
    >
      <h1>Experience</h1>
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={wrapperVariant}
      >
        {experiences.map((e) => (
          <div className="mb-3 flex gap-3">
            <div className="flex flex-col items-center gap-3 pt-2">
              <div className="h-4 w-4 rounded-full border-4 border-dark-blue">
                &nbsp;
              </div>
              <div className="w-[2px] flex-1 bg-[#CCCCCC]"></div>
            </div>
            <WorkExperience key={e.id} experience={e} />
          </div>
        ))}
        <div className="h-4 w-4 rounded-full border-4 border-dark-blue">
          &nbsp;
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
