"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// Types
import { ProjectComponent } from "./types";
// React Icons
import { FiExternalLink } from "react-icons/fi";

const Project: ProjectComponent = ({
  project: { name, image, time, url, details, tech },
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="card-shadow relative h-[300px] overflow-hidden rounded-[10px]"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Image
        src={image}
        alt={`Image for project ${name}`}
        className="h-full w-full object-cover"
      />
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
            active ? "h-[200px] pt-4" : "h-0"
          } overflow-hidden transition-all duration-300 ease-out`}
        >
          {details}
        </div>
      </article>
    </div>
  );
};

export default Project;
