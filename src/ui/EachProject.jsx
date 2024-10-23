import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Aos from "aos";
import { useProjects } from "../hooks/useProject";
import Spinner from "./Spinner";

const EachProject = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const { isLoading, projects = [], isSuccess, error } = useProjects();
  if (isLoading)
    return (
      <div className="col-span-full">
        <Spinner />
      </div>
    );

  if (!isSuccess) return <div className="indent-5">{error?.message}</div>;
  return (
    <>
      {projects.map((eachProject, index) => {
        const style = index % 2 === 0 ? "fade-left" : "fade-riht";
        return (
          <div className="px-4 lg:px-8" key={eachProject.id} data-aos={style}>
            <img
              src={eachProject.image}
              alt="ProjectImage"
              loading="lazy"
              className="mb-6 min-h-[300px] rounded-[10px]"
            />
            <div className="mb-4 text-xl leading-3 lg:leading-5">
              {eachProject.projectName}
            </div>
            <div className="flex gap-6">
              <a
                href={eachProject.githubUrl}
                className="block rounded-md p-2 text-normal-brand_600 hover:bg-light-grey_100 focus:ring-1 focus:ring-normal-brand_600 dark:text-dark-grey_700 dark:hover:bg-dark-grey_100"
              >
                <FaGithub className="h-[1.4rem] w-[1.4rem]" />
              </a>
              <a
                href={eachProject.liveUrl}
                className="block rounded-md p-2 text-normal-brand_600 hover:bg-light-grey_100 focus:ring-1 focus:ring-normal-brand_600 dark:text-dark-grey_700 dark:hover:bg-dark-grey_100"
              >
                <TbWorldWww className="h-[1.4rem] w-[1.4rem]" />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EachProject;
