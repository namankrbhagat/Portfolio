import React from "react"; 
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPython
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={100} /> },
  { name: "C++", icon: <SiCplusplus size={100} /> },
  { name: "Python", icon: <SiPython size={100} /> },
  { name: "React.js", icon: <FaReact size={100} /> },
  { name: "Next.js", icon: <SiNextdotjs size={100} /> },
  { name: "MongoDB", icon: <SiMongodb size={100} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={100} /> },
  { name: "Node.js", icon: <FaNodeJs size={100} /> },
  { name: "Express.js", icon: <SiExpress size={100} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={100} /> },
  { name: "MySQL", icon: <SiMysql size={100} /> },
  { name: "Git", icon: <FaGit size={100} /> },
];

export const SkillsSection = () => {
  return (
    <section className="py-16 container text-white text-center">
      <h2 className="py-5 text-xl md:text-5xl font-bold tracking-tight ">Explore My 
        <span className="text-primary opacity-0 animate-fade-in-delay-1">
          {" "}
          Skills
        </span>
      </h2>
      <p className="text-2xl mb-10">
        From building secure backends to designing modern UIs,{" "}
        <span className="text-primary font-semibold">
          here's what I work with.
        </span>
      </p>

      <div className="flex flex-wrap justify-center gap-30">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-110 shadow-amber-400 transition-transform duration-300"
          >
            <div className="text-4xl ">{skill.icon}</div>
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

