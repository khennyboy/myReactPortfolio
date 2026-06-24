import EachProject from "../ui/EachProject";

const Project = () => (
  <section className="my-24 py-14 lg:py-20 bg-slate-900 border border-slate-800 rounded-2xl">
    <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-2 px-8">
      What I've built
    </p>
    <h2 className="text-3xl font-bold text-white mb-10 px-8 md:text-4xl">
      Projects
    </h2>
    <div className="grid grid-cols-1 gap-6 px-8 sm:grid-cols-2 lg:grid-cols-3">
      <EachProject />
    </div>
  </section>
);

export default Project;
