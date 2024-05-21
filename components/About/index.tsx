"use client";

import Image from "next/image";
// Assets
import portrait from "../../public/assets/portrait.jpg";
import TextPill from "../TextPill";

const keywords = [
  "3 Years Exp.",
  "Software For Society",
  "UCSC",
  "Class of 2025",
  "Backend",
  "Frontend",
  "Artist",
  "Ping-ponger",
];

const About = () => {
  return (
    <section
      id="about"
      className="section-padding mx-auto min-h-screen justify-center gap-[100px]
        overflow-y-scroll bg-light-blue pt-[100px] lg:flex"
    >
      <article className="flex-1 text-xl">
        <h1>About</h1>
        <p className="my-10">
          Passionate about solving complex problems to benefit society. I’m
          currently studying Computer Science at University of California, Santa
          Cruz (UCSC).
        </p>
        <p className="my-10">
          I have 3 years of programming experience building beautiful user
          interfaces and developing complex back-end systems.
        </p>
        <p className="my-10">
          I’m looking for an internship opportunity in Summer (2024/2025) to
          gain more experience in the industry. I want an opportunity to make
          positive impact on a large number of users
        </p>
      </article>
      <figure className="mx-auto h-min max-w-[375px] overflow-hidden rounded-lg lg:mx-0">
        <Image src={portrait} alt="Self portrait" className="w-full" />
        <div className="flex w-full flex-wrap gap-x-3 gap-y-2 bg-white p-4">
          {keywords.map((k, i) => (
            <TextPill text={k} key={i} />
          ))}
        </div>
      </figure>
    </section>
  );
};

export default About;
