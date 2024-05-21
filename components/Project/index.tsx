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
      className="card-shadow relative h-[300px] overflow-hidden rounded-[10px]"
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
          <p className="text-xl font-bold">{name}</p>
          <Link href={url}>
            <FiExternalLink
              size={20}
              className="cursor-pointer transition-transform duration-100 ease-out hover:scale-110"
            />
          </Link>
        </div>
        <div
          className={`${
            active ? "h-[200px]" : "h-0"
          } overflow-hidden transition-[height]
          duration-300 ease-out`}
        >
          <div className="flex items-center gap-3">
            <p className="m-5 flex-1 text-base">{details}</p>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
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
