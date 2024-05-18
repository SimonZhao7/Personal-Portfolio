"use client";

// Framer Motion
import { motion } from "framer-motion";
// Constants
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="m-[85px] mt-[-400px] w-[calc(100%-85px*2)] rounded-xl bg-white p-[90px] pt-5 shadow-2xl"
    >
      <h1>Skills</h1>
      <div className="grid grid-flow-row grid-cols-2 gap-x-12 gap-y-8 font-source">
        {skills.map(({ id, name, proficiency }) => (
          <div key={id} className="flex items-center gap-5">
            <p className="flex-1 text-lg font-semibold">{name}</p>
            <div className="h-[10px] flex-[3] overflow-hidden rounded-full bg-[#D9D9D9]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${proficiency * 100}%`,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-dark-blue"
              >
                &nbsp;
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
