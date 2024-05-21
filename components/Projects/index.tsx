"use client";

import Project from "../Project";
import { projects } from "../../constants/projects";
// Framer Motion
import { Variants, motion } from "framer-motion";

const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding relative mx-auto flex min-h-full flex-col justify-center
        py-[72px]"
    >
      <h1>Projects</h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <Project key={p.id} project={p} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
