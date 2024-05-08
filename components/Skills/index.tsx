import Image from "next/image";
// Constants
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col justify-center pt-[72px]"
    >
      <h1 className="px-10 text-3xl uppercase tracking-widest text-green-900 underline decoration-underline sm:text-center xl:text-4xl">
        Skills
      </h1>
      <div className="mx-auto grid w-full grid-cols-2 gap-4 p-10 xs:grid-cols-3 sm:max-w-2xl lg:grid-cols-4 2xl:max-w-3xl">
        {skills.map((s) => (
          <div
            key={s.id}
            className="group relative flex h-32 w-32 place-items-center items-center justify-center rounded-full border-[1px] border-green-900 transition duration-100 ease-in hover:bg-green-900/80 2xl:h-40 2xl:w-40"
          >
            <Image
              src={s.icon}
              alt={`Logo for ${s.name}`}
              width={128}
              height={128}
              className="absolute -z-10 rounded-full transition duration-100 ease-in"
            />
            <p className="text-xl font-semibold text-white opacity-0 transition duration-100 ease-in group-hover:opacity-100 2xl:text-2xl">
              {s.proficiency}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
