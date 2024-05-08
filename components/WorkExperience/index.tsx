"use client";

import Image from "next/image";
// Framer Motion
import { motion } from "framer-motion";
// Types
import { WorkExperienceComponent } from "./types";

const WorkExperience: WorkExperienceComponent = ({
  experience: { image, company, position, details },
}) => {
  return (
    <div className="ease min-w-full snap-center snap-always space-y-6 rounded-lg bg-[#A8B888] p-8 shadow-lg transition duration-100 hover:brightness-110 xs:p-10 md:min-w-[500px] xl:min-w-0 xl:flex-1 ">
      <div className="flex w-full justify-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-38 w-24 xs:w-32"
        >
          <Image
            src={image}
            className="rounded-full"
            alt={company + " logo"}
            priority={true}
          />
        </motion.div>
      </div>
      <article className="space-y-2">
        <h1 className="text-xl xs:text-2xl md:text-2xl 2xl:text-3xl">
          {position}
        </h1>
        <h3 className="text-sm italic xs:text-base md:text-lg 2xl:text-xl">
          {company}
        </h3>
        <ul className="list-disc space-y-2">
          {details?.map((d, i) => (
            <li className="w-full text-sm 2xl:text-xl" key={i}>
              {d}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default WorkExperience;
