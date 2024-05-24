"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// Types
import { ProjectComponent } from "./types";
// React Icons
import { FiExternalLink } from "react-icons/fi";
// Components
import TextPill from "../TextPill";
// Framer Motion
import { Variants, motion } from "framer-motion";

const card: Variants = {
  hidden: { y: -40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 15 },
  },
};

const Project: ProjectComponent = ({
  project: { name, image, url, details, tech },
}) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      variants={card}
      className="card-shadow relative h-[300px] overflow-hidden rounded-[10px] 2xl:h-[350px]"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Image
        src={image}
        alt={`Image for project ${name}`}
        className="h-full w-full object-cover"
      />
      <div
        className={`absolute top-0 h-full w-full bg-black transition-opacity duration-300 ease-out
        ${active ? "opacity-40" : "opacity-0"}`}
      >
        &nbsp;
      </div>
      <article className="shdaow-inner absolute bottom-0 w-full bg-white px-4 py-2">
        <div className="flex w-full items-center justify-between">
          <p className="text-xl font-bold 2xl:text-2xl">{name}</p>
          <Link href={url}>
            <FiExternalLink
              className="h-5 w-5 cursor-pointer transition-transform duration-100 ease-out
                hover:scale-110 2xl:h-6 2xl:w-6"
            />
          </Link>
        </div>
        <div
          className={`${
            active ? "h-[200px] 2xl:h-[250px]" : "h-0"
          } overflow-hidden
          transition-[height] duration-300 ease-out`}
        >
          <div className="flex items-center gap-3">
            <p className="m-5 flex-1 text-base 2xl:text-xl">{details}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 2xl:gap-x-4 2xl:gap-y-2">
            {tech.map((t, i) => (
              <TextPill text={t} key={i} />
            ))}
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default Project;
