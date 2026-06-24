import { useEffect, useRef } from "react";
import { LuMessageSquare } from "react-icons/lu";
import Form from "../ui/Form";
import Modal from "../ui/Modal";
import Aos from "aos";

const Contact = () => {
  const ref = useRef();

  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <Modal>
      <section
        ref={ref}
        data-aos="fade-up"
        className="my-24 py-14 lg:py-20 bg-slate-900 border border-slate-800 rounded-2xl text-center"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-2">
          Get in touch
        </p>
        <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">
          Contact
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-sm mx-auto mb-8">
          I&apos;d love to hear about your project and how I could help.
        </p>
        <img
          src="/3d-graphic-designer-showing-thumbs-up-png 1.png"
          alt="Contact illustration"
          className="w-48 mx-auto mb-8"
        />
        <Modal.Open>
          <button
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold
                       bg-violet-600 text-white hover:bg-violet-500 transition-all duration-200
                       hover:-translate-y-px hover:shadow-lg hover:shadow-violet-500/25
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
                       focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
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
