import { LuMessageSquare } from "react-icons/lu";
import { MdFileDownload } from "react-icons/md";

const Header = () => {
  function handleScroll() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-12 pt-24 text-center md:flex-row md:gap-16 md:pt-0 md:text-left">
      <div className="flex-1">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-400">
          Frontend Developer
        </p>
        <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-violet-400">Sheriff Abdullateef</span>
        </h1>
        <p className="mx-auto mb-8 max-w-md text-lg leading-relaxed text-slate-400 md:mx-0">
          Based in Nigeria — I build accessible, performant web experiences that
          people actually enjoy using.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="/Sheriff_Abdullateef_Resume.pdf"
            download="Sheriff_Resume"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Resume <MdFileDownload className="text-base" />
          </a>
          <button
            onClick={handleScroll}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contact me <LuMessageSquare className="text-base" />
          </button>
        </div>
      </div>

      {/* Photo with spinning ring */}
      <div className="relative shrink-0">
        <div className="bg-conic-[from_0deg,#7c3aed,transparent_60%,#7c3aed] absolute inset-0 animate-spin rounded-full opacity-60 [animation-duration:8s]" />
        <img
          src="/myimageResize (1).webp"
          alt="Sheriff Abdullateef"
          className="relative z-10 h-52 w-52 rounded-full border-4 border-slate-950 object-cover md:h-64 md:w-64"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Header;
