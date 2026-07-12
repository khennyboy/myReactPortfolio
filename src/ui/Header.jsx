import { LuMessageSquare } from "react-icons/lu";
import { MdFileDownload } from "react-icons/md";

const Header = () => {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-6 pt-16 text-center md:flex-row md:gap-16 md:pt-0 md:text-left">
      <div className="space-y-4 sm:space-y-4 md:flex-1">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
          Frontend Developer
        </p>
        <h1 className="text-balance text-3xl font-bold leading-none tracking-tight text-white md:text-4xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-violet-400">Sheriff Abdullateef</span>
        </h1>
        <p className="mx-auto max-w-md text-balance text-sm text-slate-200 md:mx-0 md:text-base md:leading-tight">
          Frontend Developer specializing in React, Next.js, TypeScript, and
          Tailwind CSS. Focused on building clean, high-performance web
          applications with modern engineering patterns
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="/Sheriff_Abdullateef_Resume.pdf"
            download="Sheriff_Resume"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Resume <MdFileDownload className="text-base" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contact me <LuMessageSquare className="text-base" />
          </a>
        </div>
      </div>

      {/* Photo with spinning ring */}
      <div className="relative shrink-0">
        <div className="bg-conic-[from_0deg,#7c3aed,transparent_60%,#7c3aed] absolute inset-0 animate-spin rounded-full opacity-60 [animation-duration:8s]" />
        <img
          src="/sheriff_image.png"
          alt="Sheriff Abdullateef"
          className="relative z-10 h-52 w-52 rounded-full border-4 border-slate-950 object-cover md:h-64 md:w-64"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Header;
