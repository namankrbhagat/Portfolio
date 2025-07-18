import { div, span } from "framer-motion/client";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { href } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "RoadRunner",
    description: "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://roadrunner-dusky.vercel.app/",
    githubUrl: "https://github.com/namankrbhagat/roadrunners",
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
    title: "E-commerce Platform",
    description:
      "It is a workout tracking application, featuring map integration.",
    image: "/projects/project3.png",
    tags: ["JavaScript"],
    demoUrl: "https://mapty-dusky-eight.vercel.app/",
    githubUrl: "https://github.com/namankrbhagat/Mapty",
  },
];

export const ProjectSection = () =>{
  return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        {" "}
        Featured <span className="text-primary">Projects</span>
      </h2>

      <p className="text-center text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each project was carefully
        crafted with attention to detail, performance and user experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project,key) => (
          <div
           key={key}
           className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-fill bg-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href="project.demoUrl"
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}/>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
           </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/namankrbhagat"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold"
        >
          {/* Your circle divs */}
          <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-primary"></div>
          <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
          <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
          <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
          <p className="z-10">More Projects</p>
        </a>

      </div>
    </div>

  </section>
}