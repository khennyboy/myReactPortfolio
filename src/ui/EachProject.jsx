import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Aos from "aos";
import { useProjects } from "../hooks/useProject";
import Spinner from './Spinner'

const EachProject = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const { isLoading, projects = [], isSuccess, error } = useProjects()
    if (isLoading) return (
        <div className="col-span-full">
            <Spinner />
        </div>

    )

    if (!isSuccess) return (
        <div className="indent-5">
            {error?.message}
        </div>
    )
    return (
        <>
            {
                projects.map((eachProject, index) => {
                    const style = index % 2 === 0 ? 'fade-left' : 'fade-riht'
                    return (
                        <div className="lg:px-8 px-4" key={eachProject.id} data-aos={style}>
                            <img src={eachProject.image} alt="ProjectImage" loading="lazy"
                                className="rounded-[10px] mb-6 min-h-[300px] " />
                            <div className="text-xl mb-4 leading-3">{eachProject.projectName}</div>
                            <div className="flex gap-6">
                                <a href={eachProject.githubUrl}
                                    className="hover:bg-light-grey_100 block p-2 rounded-md
                                focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                                dark:hover:bg-dark-grey_100 dark:text-dark-grey_700">
                                    <FaGithub className="w-[1.4rem] h-[1.4rem] " />
                                </a>
                                <a href={eachProject.liveUrl}
                                    className="hover:bg-light-grey_100 block p-2 rounded-md
                                focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                                dark:hover:bg-dark-grey_100 dark:text-dark-grey_700">
                                    <TbWorldWww className="w-[1.4rem] h-[1.4rem] " />
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default EachProject