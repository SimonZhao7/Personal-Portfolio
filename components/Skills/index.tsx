"use client";

// Framer Motion
import { motion } from "framer-motion";
// Constants
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-5 mt-[-400px] w-[calc(100%-20px*2)] rounded-xl bg-white p-8 py-12 shadow-2xl
        sm:mx-10 sm:w-[calc(100%-40px*2)] sm:p-12 lg:mx-[85px] lg:w-[calc(100%-85px*2)]
        lg:px-[90px]"
    >
      <h1 className="mt-5 sm:my-16">Skills</h1>
      <div className="grid grid-flow-row gap-x-12 gap-y-8 font-source md:grid-cols-2">
        {skills.map(({ name, proficiency }, i) => (
          <div key={i} className="items-center gap-5 lg:flex">
            <p className="flex-1 text-lg font-semibold 2xl:text-xl">{name}</p>
            <div className="h-[10px] flex-[3] overflow-hidden rounded-full bg-[#D9D9D9] 2xl:h-3">
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
