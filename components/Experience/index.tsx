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
      className="section-padding mx-auto flex min-h-screen flex-col justify-center pt-[72px]"
    >
      <h1>Experience</h1>
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={wrapperVariant}
      >
        {experiences.map((e) => (
          <div className="mb-3 flex gap-3" key={e.id}>
            <div className="flex flex-col items-center gap-3 pt-2">
              <div
                className="h-3 w-3 rounded-full border-[3px] border-dark-blue md:h-4 md:w-4 md:border-4
                  2xl:h-5 2xl:w-5 2xl:border-[5px]"
              >
                &nbsp;
              </div>
              <div className="w-[2px] flex-1 bg-[#CCCCCC]"></div>
            </div>
            <WorkExperience experience={e} />
          </div>
        ))}
        <div
          className="h-3 w-3 rounded-full border-[3px] border-dark-blue md:h-4 md:w-4 md:border-4
            2xl:h-5 2xl:w-5 2xl:border-[5px]"
        >
          &nbsp;
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
