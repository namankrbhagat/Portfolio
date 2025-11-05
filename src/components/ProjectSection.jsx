import { ExternalLink, Github } from "lucide-react";
import { Timeline } from "./ui/Timeline";

const projects = [
  {
    id: 1,
    title: "Chattr",
    description: "A real time chat app built using Web Sockets",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://chatapp-lga6.onrender.com/",
    githubUrl: "https://github.com/namankrbhagat/Chat-App",
  },
  {
    id: 2,
    title: "Bankist",
    description:
      "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project2.png",
    tags: ["JavaScript"],
    demoUrl: "https://bankist-rust.vercel.app/",
    githubUrl: "https://github.com/namankrbhagat/Bankist",
  },
  {
    id: 3,
    title: "Mapty",
    description:
      "It is a workout tracking application, featuring map integration.",
    image: "/projects/project3.png",
    tags: ["JavaScript"],
    demoUrl: "https://mapty-dusky-eight.vercel.app",
    githubUrl: "https://github.com/namankrbhagat/Mapty",
  },
];

export const ProjectSection = () => {
  const timelineData = projects.map((project) => ({
    title: project.title,
    content: (
      <div className="bg-card rounded-xl p-6 shadow-xl border border-border hover:border-primary/50 transition-all duration-300">
        <p className="text-foreground text-sm md:text-base font-normal mb-5 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 text-xs font-semibold bg-primary/20 text-primary rounded-lg border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-6 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl object-cover w-full h-52 md:h-60 shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 font-semibold"
          >
            <ExternalLink size={18} />
            View Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-lg hover:bg-card/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 font-semibold"
          >
            <Github size={18} />
            Source Code
          </a>
        </div>
      </div>
    ),
  }));

  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="container mx-auto">
        <Timeline data={timelineData} />
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/namankrbhagat"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold"
          >
            <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-primary"></div>
            <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
            <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
            <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
            <p className="z-10">More Projects</p>
          </a>
        </div>
      </div>
    </section>
  );
};