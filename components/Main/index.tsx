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
      className="mt-[125px] w-full px-[175px] font-semibold"
    >
      <motion.h1 className="text-6xl text-black" variants={mainItem}>
        Hi, I'm <span className="text-dark-blue">Simon Zhao</span>
      </motion.h1>
      <motion.h3 className="my-10 text-3xl" variants={mainItem}>
        Software Engineer
      </motion.h3>
      <motion.div className="flex items-center gap-4" variants={mainItem}>
        <Link href={"https://www.github.com/SimonZhao7"} className={iconStyle}>
          <FaGithub size={30} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/simon-zhao-6813541b3/"}
          className={iconStyle}
        >
          <FaLinkedin size={30} color={"#4559C4"} />
        </Link>
        <Link href="mailto:zhaosimon7@gmail.com" className={iconStyle}>
          <MdEmail size={35} />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Main;
