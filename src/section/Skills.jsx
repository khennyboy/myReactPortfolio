import { useEffect } from "react";
import EachSkill from "../ui/EachSkill";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section
      className="dark:bg-dark-grey_0 bg-light-grey_50
            my-[4rem_6rem] py-[4rem] lg:py-[6rem] border-light-grey_200 border-[1px] border-solid
             rounded-[10px] dark:border-dark-grey_200 "
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <h2 className="text-3xl indent-8 mb-6 md:text-4xl font-[600]">Skills</h2>
      <div className="flex flex-wrap w-full gap-8  justify-center ">
        <EachSkill />
      </div>
    </section>
  );
};

export default Skills;
