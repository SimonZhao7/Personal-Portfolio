"use client";
// Framer Motion
import { Variants, motion } from "framer-motion";
import Link from "next/link";
// React Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const mainContainer: Variants = {
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const mainItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const iconStyle = "transition-all duration-75 ease-out hover:scale-110";

const Main = () => {
  return (
    <motion.section
      variants={mainContainer}
      initial="hidden"
      animate="show"
      id="main"
      className="section-padding mt-[125px] w-full font-semibold"
    >
      <motion.h1
        className="my-5 text-5xl text-black sm:my-10 lg:text-6xl"
        variants={mainItem}
      >
        Hi, I&apos;m{" "}
        <span className="block text-dark-blue sm:inline">Simon Zhao</span>
      </motion.h1>
      <motion.h3
        className="my-5 text-2xl sm:my-10 lg:text-3xl"
        variants={mainItem}
      >
        Software Engineer
      </motion.h3>
      <motion.div className="flex items-center gap-4" variants={mainItem}>
        <Link href={"https://www.github.com/SimonZhao7"} className={iconStyle}>
          <FaGithub className="socialIcon" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/simon-zhao-6813541b3/"}
          className={iconStyle}
        >
          <FaLinkedin className="socialIcon" />
        </Link>
        <Link href="mailto:zhaosimon7@gmail.com" className={iconStyle}>
          <MdEmail className="socialIcon" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Main;
