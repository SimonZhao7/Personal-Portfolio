"use client";

import { useState } from "react";
import Link from "next/link";
// React Icons
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, Variants, motion } from "framer-motion";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

const sidebarStyle: Variants = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const sidebarLink: Variants = {
  hidden: { y: 20, opacity: 0, transition: { duration: 0 } },
  show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const Header = () => {
  const [selected, setSelected] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-light-blue">
        <nav className="flex w-full items-center justify-between px-8 sm:px-12 lg:px-20">
          <h3 className="font-source text-2xl font-semibold 2xl:text-3xl">
            {"<SimonZhao />"}
          </h3>
          <div className="hidden items-center text-xl font-semibold md:flex 2xl:text-2xl">
            {links.map((link, i) => (
              <Link
                key={link}
                href={`/#${link.toLowerCase()}`}
                onClick={() => setSelected(i)}
                className={`block border-b-[3px] 2xl:border-b-4 ${
                  selected == i
                    ? "border-dark-blue"
                    : "border-light-blue hover:border-light-blue-hover"
                } p-3 transition-colors
                duration-150 ease-out hover:cursor-pointer hover:bg-light-blue-hover`}
              >
                {link}
              </Link>
            ))}
          </div>
          <button
            className="h-[52px] py-3 md:hidden"
            onClick={() => setShowModal(true)}
          >
            <IoMenuOutline size={30} />
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {showModal && (
          <div
            className="absolute h-screen w-screen"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              key="sidebar"
              variants={sidebarStyle}
              initial="hidden"
              animate={showModal ? "show" : "hidden"}
              exit="hidden"
              className="overflow-none absolute right-0 top-0 z-[100] h-screen w-3/4 rounded-l-2xl
                bg-light-blue text-xl shadow-2xl shadow-black"
            >
              {links.map((link, i) => (
                <motion.div
                  variants={sidebarLink}
                  key={link}
                  className="font-semibold"
                >
                  <Link
                    href={`/#${link.toLowerCase()}`}
                    onClick={() => {
                      setSelected(i);
                      setShowModal(false);
                    }}
                    className={"block px-5 py-3 hover:cursor-pointer"}
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
              <RxCross1
                size={25}
                className="absolute right-5 top-3 z-[110]"
                onClick={(e) => {
                  setShowModal(false);
                  e.stopPropagation();
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
