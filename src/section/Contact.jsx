import Aos from "aos";
import { useEffect } from "react";
import { LuMessageSquare } from "react-icons/lu";
import Form from "../ui/Form";
import Modal from "../ui/Modal";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <Modal>
      <section
        id="contact"
        data-aos="fade-up"
        className="my-24 scroll-m-12 rounded-2xl border border-slate-800 bg-slate-900 py-14 text-center lg:py-20"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
          Get in touch
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Contact
        </h2>
        <p className="mx-auto mb-8 max-w-sm text-base leading-relaxed text-slate-400">
          I&apos;d love to hear about your project and how I could help.
        </p>
        <img
          src="/3d-graphic-designer-showing-thumbs-up-png 1.png"
          alt="Contact illustration"
          className="mx-auto mb-8 w-48"
        />
        <Modal.Open>
          <button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Contact me <LuMessageSquare className="text-base" />
          </button>
        </Modal.Open>
      </section>
      <Modal.Window>
        <Form />
      </Modal.Window>
    </Modal>
  );
};

export default Contact;
