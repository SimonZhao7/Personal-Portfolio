"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
// Framer Motion
import { motion } from "framer-motion";
// Types
import { ProjectComponent } from "./types";

const Project: ProjectComponent = ({ project: { name, image, time, url, details, tech } }) => {
  const router = useRouter();
  return (
    <div className="min-w-full space-y-2 p-10 xl:min-w-0 xl:max-w-xl 2xl:max-w-2xl">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="cursor-pointer rounded-md"
      >
        <Image
          priority={true}
          src={image}
          alt={`Image for project ${name}`}
          onClick={() => router.push(url)}
          className="rounded-md"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <h1 className="text-xl xs:text-2xl 2xl:text-3xl">{name}</h1>
        <h3 className="!mb-5 text-sm italic xs:text-base 2xl:text-lg">
          {time}
        </h3>
        <h3 className="!mb-5 text-sm italic xs:text-base 2xl:text-lg">
          {tech}
        </h3>
        <ul className="list-disc space-y-4 text-sm xs:text-base 2xl:text-lg">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Project;
