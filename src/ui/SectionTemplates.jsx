/**
 * These are suggested section wrapper patterns.
 * Apply them inside your existing Skills.jsx, Projects.jsx, Contact.jsx, Footer.jsx
 */

// ── Skills.jsx ───────────────────────────────────────────
import EachSkill from "../components/EachSkill";

export const Skills = () => (
  <section className="py-20 border-t border-slate-800">
    <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-2">
      What I know
    </p>
    <h2 className="text-2xl font-bold text-white mb-10 md:text-3xl">Skills</h2>
    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
      <EachSkill />
    </div>
  </section>
);

// ── Projects.jsx ─────────────────────────────────────────
import EachProject from "../components/EachProject";

export const Projects = () => (
  <section className="py-20 border-t border-slate-800">
    <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-2">
      What I've built
    </p>
    <h2 className="text-2xl font-bold text-white mb-10 md:text-3xl">Projects</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <EachProject />
    </div>
  </section>
);

// ── Contact.jsx ──────────────────────────────────────────
import Modal from "../components/Modal";
import Form from "../components/Form";
import { LuMessageSquare } from "react-icons/lu";

export const Contact = ({ contactRef }) => (
  <section ref={contactRef} className="py-20 border-t border-slate-800">
    <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-2">
      Get in touch
    </p>
    <h2 className="text-2xl font-bold text-white mb-4 md:text-3xl">Contact</h2>
    <p className="text-slate-400 mb-8 max-w-md">
      Have a project in mind or just want to say hi? My inbox is open.
    </p>
    <Modal>
      <Modal.Open>
        <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold
                           bg-violet-600 text-white hover:bg-violet-500 transition-all duration-200
                           hover:-translate-y-px hover:shadow-lg hover:shadow-violet-500/25
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
          Send a message <LuMessageSquare />
        </button>
      </Modal.Open>
      <Modal.Window>
        <Form />
      </Modal.Window>
    </Modal>
  </section>
);

// ── Footer.jsx ───────────────────────────────────────────
export const Footer = () => (
  <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
    <p>
      Built by{" "}
      <a
        href="https://github.com/khennyboy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-violet-400 hover:text-violet-300 transition-colors duration-200"
      >
        Sheriff Abdullateef
      </a>{" "}
      · {new Date().getFullYear()}
    </p>
  </footer>
);
