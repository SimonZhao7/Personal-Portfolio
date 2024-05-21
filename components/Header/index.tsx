"use client";

import { useState } from "react";
import Link from "next/link";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

const Header = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <header className="sticky top-0 z-50 w-full bg-light-blue">
      <nav className="flex w-full items-center justify-between px-20">
        <h3 className="font-source text-2xl font-semibold">
          {"<SimonZhao />"}
        </h3>
        <div className="flex items-center gap-5 text-xl font-semibold">
          {links.map((link, i) => (
            <Link
              key={link}
              href={`/#${link.toLowerCase()}`}
              onClick={() => setSelected(i)}
              className={`block border-b-[3px] ${
                selected == i ? "border-dark-blue" : "transparent"
              }
              py-3 hover:cursor-pointer`}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
