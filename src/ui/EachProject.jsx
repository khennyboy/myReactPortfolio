import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Aos from "aos";
import { useProjects } from "../hooks/useProject";
import Spinner from "./Spinner";

const EachProject = () => {
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-out", once: true });
  }, []);

  const { isLoading, projects = [], error, isError } = useProjects();

  if (isLoading)
    return (
      <div className="col-span-full flex justify-center py-16">
        <Spinner />
      </div>
    );

  if (isError)
    return (
      <div className="col-span-full px-4 py-3 rounded-lg text-red-400 bg-red-500/10 border border-red-500/20 text-sm">
        {error?.message || "Failed to load projects."}
      </div>
    );

  return (
    <>
      {projects.map((project, index) => (
        <article
          key={project.id}
          data-aos="fade-up"
          data-aos-delay={index * 80}
          className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                     hover:shadow-black/40 hover:border-violet-500/30"
        >
          {/* Image */}
          <div className="overflow-hidden aspect-video bg-slate-800">
            <img
              src={project.image}
              alt={project.projectName}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Body */}
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <h3 className="text-sm font-semibold text-white leading-snug">
              {project.projectName}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.projectName} source code`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium
                           text-slate-400 border border-slate-700 transition-all duration-200
                           hover:text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.projectName} live demo`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium
                           text-slate-400 border border-slate-700 transition-all duration-200
                           hover:text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <TbWorldWww /> Live
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default EachProject;
