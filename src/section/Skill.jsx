import { useEffect } from "react";
import EachSkill from "../ui/EachSkill";
import Aos from "aos";

const Skill= () => {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <section
      className="my-24 py-14 lg:py-20 bg-slate-900 border border-slate-800 rounded-2xl"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-2 px-8">
        What I know
      </p>
      <h2 className="text-3xl font-bold text-white mb-10 px-8 md:text-4xl">
        Skills
      </h2>
      <div className="flex flex-wrap gap-8 justify-center px-8">
        <EachSkill />
      </div>
    </section>
  );
};

export default Skill;
